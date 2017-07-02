function initializeFBox05b71795fc3da47() {
    FBox05b71795fc3da47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "FBox05b71795fc3da47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox05b71795fc3da47.setDefaultUnit(kony.flex.DP);
    var acceptedRequestsTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "acceptedRequestsTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    acceptedRequestsTop.setDefaultUnit(kony.flex.DP);
    var acceptedRequestImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "acceptedRequestImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {
        "containerWeight": 100
    }, {});
    acceptedRequestImageParent.setDefaultUnit(kony.flex.DP);
    var acceptedRequestImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "acceptedRequestImage",
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
    acceptedRequestImageParent.add(acceptedRequestImage);
    var acceptedRequestInfoParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "acceptedRequestInfoParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    acceptedRequestInfoParent.setDefaultUnit(kony.flex.DP);
    var acceptedRequestBusinessName = new kony.ui.Label({
        "id": "acceptedRequestBusinessName",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartSegmentTitle",
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
    var acceptedRequestLabel = new kony.ui.Label({
        "id": "acceptedRequestLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartSegmentSubTitle",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
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
    var acceptedRequestStatus = new kony.ui.Label({
        "id": "acceptedRequestStatus",
        "isVisible": true,
        "left": "3dp",
        "right": "10dp",
        "skin": "acceptedRequestStatusSkin",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
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
    var lblRequestId = new kony.ui.Label({
        "id": "lblRequestId",
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
    acceptedRequestInfoParent.add(acceptedRequestBusinessName, acceptedRequestLabel, acceptedRequestStatus, lblRequestId);
    acceptedRequestsTop.add(acceptedRequestImageParent, acceptedRequestInfoParent);
    var acceptedRequestsBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "acceptedRequestsBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    acceptedRequestsBottom.setDefaultUnit(kony.flex.DP);
    var contactRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "contactRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_d139311450264a85ba1ca9faefef3f8a,
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
    var acceptTask = new kony.ui.RichText({
        "centerY": "50%",
        "id": "acceptTask",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_f4afce1bcee84abaad223a921a040045,
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
    var cancelRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "cancelRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_407b0568036d4033a12445989aaf483c,
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
    acceptedRequestsBottom.add(contactRequest, acceptTask, cancelRequest);
    FBox05b71795fc3da47.add(acceptedRequestsTop, acceptedRequestsBottom);
}