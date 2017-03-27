function initializeFBox005476b2895eb45() {
    FBox005476b2895eb45 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "FBox005476b2895eb45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox005476b2895eb45.setDefaultUnit(kony.flex.DP);
    var lblSuggestions = new kony.ui.Label({
        "id": "lblSuggestions",
        "isVisible": true,
        "left": "51dp",
        "skin": "CopyslLabel09fd9c9f3d15444",
        "text": "Label",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FBox005476b2895eb45.add(lblSuggestions);
}