function initializeCopyFBox0c6a7a9e8b6494b() {
    CopyFBox0c6a7a9e8b6494b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "CopyFBox0c6a7a9e8b6494b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox0c6a7a9e8b6494b.setDefaultUnit(kony.flex.DP);
    var lblSchedule = new kony.ui.Label({
        "id": "lblSchedule",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel011640e5127b042",
        "text": "Label",
        "top": "0dp",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var imgclose = new kony.ui.Image2({
        "height": "15dp",
        "id": "imgclose",
        "imageWhenFailed": "pinbsal.png",
        "imageWhileDownloading": "pinbsal.png",
        "isVisible": true,
        "left": "75%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "15dp",
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
    CopyFBox0c6a7a9e8b6494b.add(lblSchedule, imgclose);
}