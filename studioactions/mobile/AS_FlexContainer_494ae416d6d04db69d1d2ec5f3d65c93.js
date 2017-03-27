function AS_FlexContainer_494ae416d6d04db69d1d2ec5f3d65c93(eventobject) {
    function STYLE_ACTION____9f0740741abd41928cc87687a7939572_Callback() {}
    mainPage.mainPageModalsBackground["isVisible"] = true;
    mainPage.mainPageModalsBackground.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "backgroundColor": "7a7a7a00",
            "opacity": 0.4
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": STYLE_ACTION____9f0740741abd41928cc87687a7939572_Callback
    });
}