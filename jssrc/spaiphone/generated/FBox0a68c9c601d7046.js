function initializeFBox0a68c9c601d7046() {
    FBox0a68c9c601d7046 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "42%",
        "id": "FBox0a68c9c601d7046",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0a68c9c601d7046.setDefaultUnit(kony.flex.DP);
    var SegRowFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "SegRowFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "87.28%"
    }, {}, {});
    SegRowFlex.setDefaultUnit(kony.flex.DP);
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
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "left": "25%",
        "text": "John Doe",
        "top": "15.84%",
        "width": "74%",
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
    var lblMessageType = new kony.ui.Label({
        "id": "lblMessageType",
        "isVisible": true,
        "left": "25%",
        "text": "has left you a mesaage",
        "top": "40%",
        "width": "74.61%",
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
    var lblReceivedDay = new kony.ui.Label({
        "id": "lblReceivedDay",
        "isVisible": true,
        "left": "25%",
        "text": "yesterday",
        "top": "62%",
        "width": "74%",
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
    SegRowFlex.add(SegRowTempImg1, lblName, lblMessageType, lblReceivedDay);
    FBox0a68c9c601d7046.add(SegRowFlex);
}