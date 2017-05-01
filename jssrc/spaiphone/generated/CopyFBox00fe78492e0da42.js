function initializeCopyFBox00fe78492e0da42() {
    CopyFBox00fe78492e0da42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "CopyFBox00fe78492e0da42",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "100%"
    }, {}, {});
    CopyFBox00fe78492e0da42.setDefaultUnit(kony.flex.DP);
    var myClosedTaskTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myClosedTaskTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "95%"
    }, {}, {});
    myClosedTaskTop.setDefaultUnit(kony.flex.DP);
    var myClosedTaskProfileImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "myClosedTaskProfileImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {}, {});
    myClosedTaskProfileImageParent.setDefaultUnit(kony.flex.DP);
    var closedTaskPersonProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "closedTaskPersonProfilePic",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%",
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
    myClosedTaskProfileImageParent.add(closedTaskPersonProfilePic);
    var myClosedTaskDetailParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myClosedTaskDetailParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "78%",
        "zIndex": 1
    }, {}, {});
    myClosedTaskDetailParent.setDefaultUnit(kony.flex.DP);
    var closedTaskName = new kony.ui.Label({
        "id": "closedTaskName",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslLabel0d3a9436b495d4b",
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
    var closedTaskBusiness = new kony.ui.Label({
        "id": "closedTaskBusiness",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslLabel0236bd2e010ec4a",
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
    var markAsCompleteText = new kony.ui.Label({
        "id": "markAsCompleteText",
        "isVisible": false,
        "left": "15dp",
        "skin": "jumpStartLabelGreen90",
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
    var taskId = new kony.ui.Label({
        "id": "taskId",
        "isVisible": false,
        "left": "15dp",
        "skin": "jumpStartLabelGreen90",
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
    var businessId = new kony.ui.Label({
        "id": "businessId",
        "isVisible": false,
        "left": "15dp",
        "skin": "jumpStartLabelGreen90",
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
    var sendRecommendation = new kony.ui.RichText({
        "id": "sendRecommendation",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_0039d256ac0e4b1fb29256f8759bd4a9,
        "skin": "CopyslRichText086a11a63a3c74e",
        "text": "RichText",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    myClosedTaskDetailParent.add(closedTaskName, closedTaskBusiness, markAsCompleteText, taskId, businessId, sendRecommendation);
    myClosedTaskTop.add(myClosedTaskProfileImageParent, myClosedTaskDetailParent);
    CopyFBox00fe78492e0da42.add(myClosedTaskTop);
}