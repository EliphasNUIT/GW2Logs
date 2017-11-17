function openBuild(name, buttonPack, buildPack, evt) {
    var teamTab = document.getElementsByClassName(buildPack);
    var i = 0;
    for (i = 0; i < teamTab.length; i++) {
        teamTab[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName(buttonPack);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

function loadHTML(loadTo, url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(loadTo).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

var observerMap = new Map();

function observeMutations(id, target) {
    var frame = document.getElementById(id);
    var observer = null;
    if (!observerMap.has(id)) {
        
        observer = new MutationObserver(function() {
            frame.setAttribute("height", target.scrollHeight);
        });
        observerMap.set(id, observer);
    }
    frame.setAttribute("height", target.scrollHeight);

    observer = observerMap.get(id);

    var config = { attributes: true, childList: true, characterData: true, subtree: true };

    observer.observe(target, config);
}

function stopObserveMutations(id) {
    if (observerMap.has(id)) {
        observerMap.get(id).disconnect();
    }
}

function display(frameID) {
    var frame = document.getElementById(frameID);
    var init = frame.getAttribute("src");
    if (init === "about:blank") {
        frame.style.display = "block";
        frame.setAttribute("src", frame.getAttribute("data-src"));
        frame.setAttribute("width", "100%");  
        frame.setAttribute("height", "50");
        frame.setAttribute("frameborder", "3");
        // init the button
        frame.onload = function() {
            observeMutations(frameID, frame.contentDocument.body);             
        };
    } else {
        frame.style.display = (frame.style.display === "block") ? "none" : "block";
    }
}
