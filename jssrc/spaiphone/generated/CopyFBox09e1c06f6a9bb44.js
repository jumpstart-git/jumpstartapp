function initializeCopyFBox09e1c06f6a9bb44() {
    CopyFBox09e1c06f6a9bb44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "CopyFBox09e1c06f6a9bb44",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "100%"
    }, {}, {});
    CopyFBox09e1c06f6a9bb44.setDefaultUnit(kony.flex.DP);
    var sentRequestsTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "sentRequestsTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    sentRequestsTop.setDefaultUnit(kony.flex.DP);
    var sentRequestImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "sentRequestImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%"
    }, {}, {});
    sentRequestImageParent.setDefaultUnit(kony.flex.DP);
    var sentRequestImage = new kony.ui.Image2({
        "height": "100%",
        "id": "sentRequestImage",
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
    sentRequestImageParent.add(sentRequestImage);
    var sentRequestInfoParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "sentRequestInfoParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    sentRequestInfoParent.setDefaultUnit(kony.flex.DP);
    var sentRequestStatus = new kony.ui.Label({
        "id": "sentRequestStatus",
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
    var sentRequestBusinessName = new kony.ui.Label({
        "id": "sentRequestBusinessName",
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
    var sentRequestLabel = new kony.ui.Label({
        "id": "sentRequestLabel",
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
    sentRequestInfoParent.add(sentRequestStatus, sentRequestBusinessName, sentRequestLabel);
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
    }, {}, {});
    sentRequestsBottom.setDefaultUnit(kony.flex.DP);
    var declineRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "declineRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_57fa332524fe40b1aa1bb21c1ffc1719,
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
    var acceptRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "acceptRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_b9caabfe7b674232807cfe3c02a37407,
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
    var viewRequest = new kony.ui.RichText({
        "centerY": "50%",
        "id": "viewRequest",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_3fc8f3649dc0423693cca225ffde6dea,
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
    sentRequestsBottom.add(declineRequest, acceptRequest, viewRequest);
    CopyFBox09e1c06f6a9bb44.add(sentRequestsTop, sentRequestsBottom);
}