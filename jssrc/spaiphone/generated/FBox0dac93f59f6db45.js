function initializeFBox0dac93f59f6db45() {
    FBox0dac93f59f6db45 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "FBox0dac93f59f6db45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0dac93f59f6db45.setDefaultUnit(kony.flex.DP);
    var Label084c31a2a8bb84a = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label084c31a2a8bb84a",
        "isVisible": true,
        "left": "10dp",
        "skin": "jumpStartLabel10099",
        "text": "Label",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Image0a893623ec01245 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "Image0a893623ec01245",
        "imageWhileDownloading": "eligibilitycheck.png",
        "isVisible": true,
        "right": "5dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "30dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    FBox0dac93f59f6db45.add(Label084c31a2a8bb84a, Image0a893623ec01245);
}