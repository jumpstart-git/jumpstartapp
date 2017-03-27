function initializeFBox05b71795fc3da47() {
    FBox05b71795fc3da47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "FBox05b71795fc3da47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "100%"
    }, {}, {});
    FBox05b71795fc3da47.setDefaultUnit(kony.flex.DP);
    var acceptedRequestsTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "acceptedRequestsTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    acceptedRequestsTop.setDefaultUnit(kony.flex.DP);
    var acceptedRequestImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "acceptedRequestImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%"
    }, {}, {});
    acceptedRequestImageParent.setDefaultUnit(kony.flex.DP);
    var acceptedRequestImage = new kony.ui.Image2({
        "height": "100%",
        "id": "acceptedRequestImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "95%"
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
        "height": "100dp",
        "id": "acceptedRequestInfoParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    acceptedRequestInfoParent.setDefaultUnit(kony.flex.DP);
    var acceptedRequestStatus = new kony.ui.Label({
        "id": "acceptedRequestStatus",
        "isVisible": true,
        "right": "10dp",
        "skin": "acceptedRequestStatusSkin",
        "text": "Label",
        "top": "10dp",
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
    var acceptedRequestBusinessName = new kony.ui.Label({
        "id": "acceptedRequestBusinessName",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartSegmentTitle",
        "text": "Label",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var acceptedRequestLabel = new kony.ui.Label({
        "id": "acceptedRequestLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartSegmentSubTitle",
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
    acceptedRequestInfoParent.add(acceptedRequestStatus, acceptedRequestBusinessName, acceptedRequestLabel);
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
    }, {}, {});
    acceptedRequestsBottom.setDefaultUnit(kony.flex.DP);
    var cancelRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "cancelRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f,
        "skin": "rtRequestsActionSkin",
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
        "onClick": AS_RichText_78687b17505c48ef9ec3726f0ba1d95d,
        "skin": "rtRequestsActionSkin",
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
    var contactRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "contactRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_d139311450264a85ba1ca9faefef3f8a,
        "skin": "rtRequestsActionSkin",
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
    acceptedRequestsBottom.add(cancelRequest, acceptTask, contactRequest);
    FBox05b71795fc3da47.add(acceptedRequestsTop, acceptedRequestsBottom);
}