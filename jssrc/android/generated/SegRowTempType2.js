function initializeSegRowTempType2() {
    segRowFlex2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "segRowFlex2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM
    }, {}, {});
    segRowFlex2.setDefaultUnit(kony.flex.DP);
    var segRowTempImg2 = new kony.ui.Image2({
        "height": "100.17%",
        "id": "segRowTempImg2",
        "isVisible": true,
        "left": "0dp",
        "src": "segtempgrpnotificationimg.png",
        "top": "0dp",
        "width": "25.00%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNotificationType = new kony.ui.Label({
        "height": "45%",
        "id": "lblNotificationType",
        "isVisible": true,
        "left": "26%",
        "text": "New Workshop Contracts:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": "53.33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblFrom = new kony.ui.Label({
        "id": "lblFrom",
        "isVisible": true,
        "left": "26%",
        "text": "From",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "55%",
        "width": "11.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCompanyName = new kony.ui.Label({
        "id": "lblCompanyName",
        "isVisible": true,
        "left": "36.00%",
        "text": "Tutorials R Us",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "55.00%",
        "width": "59.96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblReceivedDay = new kony.ui.Label({
        "id": "lblReceivedDay",
        "isVisible": true,
        "left": "26%",
        "text": "6 days ago",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "81%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    segRowFlex2.add(segRowTempImg2, lblNotificationType, lblFrom, lblCompanyName, lblReceivedDay);
}