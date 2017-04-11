function initializeCopyFBox045aefb0898ba4a() {
    CopyFBox045aefb0898ba4a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "CopyFBox045aefb0898ba4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox045aefb0898ba4a.setDefaultUnit(kony.flex.DP);
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
        "height": "20%",
        "id": "imgclose",
        "isVisible": true,
        "left": "75%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "5%",
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
    CopyFBox045aefb0898ba4a.add(lblSchedule, imgclose);
}