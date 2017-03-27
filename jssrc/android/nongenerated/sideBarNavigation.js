//Type your code here
function showSideBar() {
    // Move side bar.
    mainPage.sideBarMenuContainer.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": function() {}
    });
    // Show bg overlay.
    mainPage.sideBarOverlay.isVisible = true;
    mainPage.sideBarOverlay.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "backgroundColor": "46464600",
            "opacity": 0.2
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
}

function hideSideBar() {
    kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - START: myString");
    kony.print(mainPage.sideBarOverlay);
    kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - END: myString");
    // Move side bar.
    mainPage.sideBarMenuContainer.animate(kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": function() {}
    });
    // Hide bg overlay.
    mainPage.sideBarOverlay.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "backgroundColor": "46464600",
            "opacity": 0.0
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
    mainPage.sideBarOverlay.isVisible = false;
}