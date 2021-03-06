#include "jsonwriter.h"
#include <QStringListIterator>

#include <QDebug>
#include <QDir>
#include <QFile>
#include <QJsonArray>
#include <QJsonObject>
#include <QJsonDocument>

#include <quazip.h>
#include <quazipfile.h>

#define PATH QString("../../docs/logs/")
#define JSONPATH QString("../../GW2Logs-dev/src/assets/")
#define SITEJSONPATH QString("../../docs/assets/")

///////////////////////

bool writeInZipPath(const QString& pathToZip, const QString& name, const QString& toWrite)
{
    QuaZip zip(pathToZip);
    if (!zip.open(QuaZip::mdAdd)) {
        qInfo() << "Error!";
        return false;
    }
    QuaZipFile zfile(&zip);
    zfile.open(QIODevice::WriteOnly, QuaZipNewInfo(name));
    QTextStream out(&zfile);
    out << toWrite.toLatin1();
    return true;
}

void buildJSONObject(QJsonObject& myJSObject, QStringList& toZip) {
    QDir logsDir(PATH);
    logsDir.setNameFilters(QStringList() << "*.html*");
    logsDir.setFilter(QDir::Files);
    QStringList tries = logsDir.entryList(QDir::Files, QDir::Name | QDir::Reversed );
    QHash<QString, int> boss;
    QHash<QString, QJsonArray> bossJS;

    qInfo() << "getting logs' information";
    foreach(QString logFile, tries)
    {
        QString bossName = logFile.split("_").at(1);
        bossName = bossName.split('.').at(0);
        boss[bossName] = boss[bossName] + 1;

        if (boss[bossName] <= 3) {
            QJsonObject myJSBoss;
            qInfo() << "    treating " + logFile + " for boss " + bossName;
            QString id = logFile.split("-").at(0);
            id.insert(4,"_");
            id.insert(7,"_");
            QString date = QDate::fromString(id,"yyyy_MM_dd").toString("dd/MM/yyyy");
            myJSBoss["id"] = id+'_'+bossName;
            myJSBoss["date"] = date;
            myJSBoss["url"] = "logs/" + logFile;
            bossJS[bossName].append(myJSBoss);
        } else {
            qInfo() << "    Archiving " + logFile+ " for boss " + bossName;
            toZip << logFile;
        }
    }
    qInfo() << "writing new json file";
    QHashIterator<QString, QJsonArray> i(bossJS);
    while (i.hasNext()) {
        i.next();
        myJSObject[i.key()] = i.value();
    }
}

//////////////////////

JsonWriter::JsonWriter(QObject *parent) : QObject(parent)
{
}

JsonWriter::~JsonWriter() {
}



void JsonWriter::execute(){

    qInfo() << "writing new json file";
    QFile saveFile(JSONPATH+'/'+"logs.json");
    if (!saveFile.open(QIODevice::WriteOnly)) {
            qWarning("Couldn't open json file. Aborting");
            return;
    }   
    QJsonObject myJSObject;
    QStringList toZip;
    buildJSONObject(myJSObject,toZip);
    QJsonDocument saveDoc(myJSObject);
    saveFile.write(saveDoc.toJson());
    saveFile.close();
    qInfo() << "new json file written";

    QFile saveFile2(SITEJSONPATH+'/'+"logs.json");
    if (saveFile2.open(QIODevice::WriteOnly)) {
        qInfo() << "writting new json files in docs";
        saveFile2.write(saveDoc.toJson());
        saveFile2.close();
        qInfo() << "new json file written in docs";
    }

    qInfo() << "archiving old files, please wait";
    foreach(QString toZipFile, toZip)
    {
        QFile myFile(PATH+ '/' + toZipFile);
        myFile.open(QFile::ReadOnly);
        QString zipPath = PATH + "/ressources.zip";
        bool toDelete = writeInZipPath(zipPath,toZipFile,myFile.readAll());
        myFile.close();
        if (toDelete){
            myFile.remove();
        }
    }
    qInfo() << "old logs have been archived, you can close the window";

}
