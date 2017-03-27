function initializeFBox0a770daf321f044() {
    FBox0a770daf321f044 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13%",
        "id": "FBox0a770daf321f044",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0a770daf321f044.setDefaultUnit(kony.flex.DP);
    var imgContactPhoto = new kony.ui.Image2({
        "height": "100%",
        "id": "imgContactPhoto",
        "isVisible": true,
        "left": "0%",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "17%",
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
    var lblContactName = new kony.ui.Label({
        "id": "lblContactName",
        "isVisible": true,
        "left": "18.50%",
        "text": "Label",
        "top": "18%",
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
    var lblMessageBody = new kony.ui.Label({
        "height": "20%",
        "id": "lblMessageBody",
        "isVisible": true,
        "left": "18.50%",
        "text": "Label",
        "top": "55%",
        "width": "69.97%",
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
    var lblChatDay = new kony.ui.Label({
        "id": "lblChatDay",
        "isVisible": true,
        "left": "80%",
        "text": "Label",
        "top": "15%",
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
    FBox0a770daf321f044.add(imgContactPhoto, lblContactName, lblMessageBody, lblChatDay);
}