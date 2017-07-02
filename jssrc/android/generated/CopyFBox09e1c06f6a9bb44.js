function initializeCopyFBox09e1c06f6a9bb44() {
    CopyFBox09e1c06f6a9bb44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "CopyFBox09e1c06f6a9bb44",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox09e1c06f6a9bb44.setDefaultUnit(kony.flex.DP);
    var sentRequestsTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "sentRequestsTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    sentRequestsTop.setDefaultUnit(kony.flex.DP);
    var sentRequestImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "sentRequestImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {
        "containerWeight": 100
    }, {});
    sentRequestImageParent.setDefaultUnit(kony.flex.DP);
    var sentRequestImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "sentRequestImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    sentRequestImageParent.add(sentRequestImage);
    var sentRequestInfoParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "sentRequestInfoParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "-4dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": "68.96%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    sentRequestInfoParent.setDefaultUnit(kony.flex.DP);
    var sentRequestBusinessName = new kony.ui.Label({
        "id": "sentRequestBusinessName",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartSegmentTitle",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
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
        "textCopyable": false
    });
    var sentRequestLabel = new kony.ui.Label({
        "id": "sentRequestLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartSegmentSubTitle",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
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
        "textCopyable": false
    });
    var lblRequestIdSent = new kony.ui.Label({
        "id": "lblRequestIdSent",
        "isVisible": false,
        "left": "3dp",
        "skin": "CopyslLabel0cb3f3dc5ea7244",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
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
        "textCopyable": false
    });
    var sentRequestStatus = new kony.ui.Label({
        "id": "sentRequestStatus",
        "isVisible": true,
        "left": "3dp",
        "right": "10dp",
        "skin": "acceptedRequestStatusSkin",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
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
        "textCopyable": false
    });
    sentRequestInfoParent.add(sentRequestBusinessName, sentRequestLabel, lblRequestIdSent, sentRequestStatus);
    sentRequestsTop.add(sentRequestImageParent, sentRequestInfoParent);
    var sentRequestsBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "sentRequestsBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    sentRequestsBottom.setDefaultUnit(kony.flex.DP);
    var viewRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "viewRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_97e5661ca5e14986af20d1088bdd4fc3,
        "skin": "markEngageGreenButton",
        "text": "RichText",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var acceptRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "acceptRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_85d484007c2e4304a6d3b7ae6c841d8b,
        "skin": "markEngageGreenButton",
        "text": "RichText",
        "top": "0dp",
        "width": "34%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var declineRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "declineRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_95a6e28e049a4bda931f0b230a4a7128,
        "skin": "markEngageGreenButton",
        "text": "RichText",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    sentRequestsBottom.add(viewRequest, acceptRequest, declineRequest);
    CopyFBox09e1c06f6a9bb44.add(sentRequestsTop, sentRequestsBottom);
}