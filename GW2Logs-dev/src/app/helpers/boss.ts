export class Boss {
    raid: string;
    wing: string;
    name: string;
    displayName: string;
    shortName: string;
    buttonName: string;
    style: object;
    logs: { id: string, date: string, url: string }[] = [];

    constructor(params: {
        raid: string, wing: string, style: object, shortName: string,
        displayName: string, buttonName: string
    }) {
        this.raid = params.raid;
        this.wing = params.wing;
        this.style = params.style;
        this.buttonName = params.buttonName;
        this.shortName = params.shortName;
        this.displayName = params.displayName;
    }

    buildLogs(logsSrc: any[]) {
        if (logsSrc[this.shortName]) {
            this.logs = logsSrc[this.shortName].splice(0);
        }
    }
}
