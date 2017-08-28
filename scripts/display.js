function display(frameID) {
    var iframe = $(frameID);
    var status = iframe.attr("frameborder");
    var init = iframe.attr("width");
    if (init === "0") {
        // init the button
        iframe.load(function() {
            var status = iframe.attr("frameborder");
            if (status === "1") {
                var contents = iframe.contents();
                iframe.attr("frameborder", "3");
                var height = contents[0].scrollingElement.clientHeight;
                iframe.attr("height", height);
                iframe[0].timeout = setInterval(function() {
                    var height = contents[0].scrollingElement.clientHeight;
                    iframe.attr("height", height);
                }, 500);
            } else {
                if (iframe[0].timeout) {
                    clearInterval(iframe[0].timeout);
                }
                iframe.attr("width", "1");
                iframe.attr("height", "1");
                iframe.attr("frameborder", "0");
            }
        });
        iframe.attr("width", "1");
    }
    if (status === "0") {
        iframe.attr("frameborder", "1");
        iframe.attr("height", "10");
        iframe.attr("width", "1200");
        iframe.attr("src", iframe.data("src"));

    } else {
        iframe.attr("src", "about:blank");
    }

}

function display2(frameID) {
    var iframe = $(frameID);
    var status = iframe.attr("frameborder");
    var init = iframe.attr("width");
    if (init === "0") {
        // init the button
        iframe.load(function() {
            var status = iframe.attr("frameborder");
            if (status === "1") {
                iframe.attr("frameborder", "3");
                var height = "2200";
                iframe.attr("height", height);
            } else {
                iframe.attr("width", "1");
                iframe.attr("height", "1");
                iframe.attr("frameborder", "0");
            }
        });
        iframe.attr("width", "1");
    }
    if (status === "0") {
        iframe.attr("frameborder", "1");
        iframe.attr("height", "10");
        iframe.attr("width", "1200");
        iframe.attr("src", iframe.data("src"));

    } else {
        iframe.attr("src", "about:blank");
    }

}