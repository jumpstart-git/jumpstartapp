function initializeSegRowTemplateType1() {
    SegRowFlex1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "SegRowFlex1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM
    }, {}, {});
    SegRowFlex1.setDefaultUnit(kony.flex.DP);
    var SegRowTempImg1 = new kony.ui.Image2({
        "bottom": "15%",
        "height": "59.93%",
        "id": "SegRowTempImg1",
        "isVisible": true,
        "left": "0%",
        "src": "imgseglogo.png",
        "top": "16%",
        "width": "23%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "left": "25%",
        "text": "John Doe",
        "top": "15%",
        "width": "74%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblMessageType = new kony.ui.Label({
        "id": "lblMessageType",
        "isVisible": true,
        "left": "25%",
        "text": "has left you a mesaage",
        "top": "40%",
        "width": "74%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblReceivedDay = new kony.ui.Label({
        "id": "lblReceivedDay",
        "isVisible": true,
        "left": "25%",
        "text": "yesterday",
        "top": "63%",
        "width": "74%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    SegRowFlex1.add(SegRowTempImg1, lblName, lblMessageType, lblReceivedDay);
}