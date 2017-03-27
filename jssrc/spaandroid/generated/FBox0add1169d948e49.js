function initializeFBox0add1169d948e49() {
    FBox0add1169d948e49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "22%",
        "id": "FBox0add1169d948e49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0add1169d948e49.setDefaultUnit(kony.flex.DP);
    var lblCompanyLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "lblCompanyLogo",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "28%",
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
    var lblNotificationType = new kony.ui.Label({
        "height": "47.37%",
        "id": "lblNotificationType",
        "isVisible": true,
        "left": "29%",
        "skin": "CopyslLabel01d55d62ab5c243",
        "text": "Label",
        "top": "5%",
        "width": "60%",
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
    var lblFrom = new kony.ui.Label({
        "id": "lblFrom",
        "isVisible": true,
        "left": "29%",
        "skin": "CopyslLabel02d62cbeae8d94e",
        "text": "Label",
        "top": "51%",
        "width": "14%",
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
    var lblCompanyName = new kony.ui.Label({
        "id": "lblCompanyName",
        "isVisible": true,
        "left": "42%",
        "skin": "CopyslLabel0e8434f50d56846",
        "text": "Label",
        "top": "51%",
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
    var lblDay = new kony.ui.Label({
        "id": "lblDay",
        "isVisible": true,
        "left": "29%",
        "skin": "CopyslLabel0d66a76b1042d4b",
        "text": "Label",
        "top": "73%",
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
    FBox0add1169d948e49.add(lblCompanyLogo, lblNotificationType, lblFrom, lblCompanyName, lblDay);
}