function initializeFBox0f9037d0e9d804e() {
    FBox0f9037d0e9d804e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "26%",
        "id": "FBox0f9037d0e9d804e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0f9037d0e9d804e.setDefaultUnit(kony.flex.DP);
    var segRowFlex2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "segRowFlex2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    segRowFlex2.setDefaultUnit(kony.flex.DP);
    var segRowTempImg2 = new kony.ui.Image2({
        "height": "78.29%",
        "id": "segRowTempImg2",
        "isVisible": true,
        "left": "0dp",
        "src": "segtempimg.PNG",
        "top": "13dp",
        "width": "26.63%",
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
        "height": "45%",
        "id": "lblNotificationType",
        "isVisible": true,
        "left": "27%",
        "text": "New Workshop Contracts:",
        "top": "7%",
        "width": "59.62%",
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
        "left": "27%",
        "text": "From",
        "top": "55%",
        "width": "15.65%",
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
        "left": "42.71%",
        "text": "Tutorials R Us",
        "top": "55%",
        "width": "54.01%",
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
        "left": "27%",
        "text": "6 days ago",
        "top": "81%",
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
    segRowFlex2.add(segRowTempImg2, lblNotificationType, lblFrom, lblCompanyName, lblReceivedDay);
    FBox0f9037d0e9d804e.add(segRowFlex2);
}