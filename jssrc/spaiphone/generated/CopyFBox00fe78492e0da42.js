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
        "clipBounds": true,
        "id": "myClosedTaskTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%"
    }, {}, {});
    myClosedTaskTop.setDefaultUnit(kony.flex.DP);
    var myClosedTaskProfileImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myClosedTaskProfileImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {}, {});
    myClosedTaskProfileImageParent.setDefaultUnit(kony.flex.DP);
    var closedTaskPersonIconBg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50dp",
        "id": "closedTaskPersonIconBg",
        "imageWhileDownloading": "personiconbg.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "50dp"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var closedTaskPersonProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "closedTaskPersonProfilePic",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "40dp",
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
    myClosedTaskProfileImageParent.add(closedTaskPersonIconBg, closedTaskPersonProfilePic);
    var myClosedTaskDetailParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myClosedTaskDetailParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    myClosedTaskDetailParent.setDefaultUnit(kony.flex.DP);
    var closedTaskName = new kony.ui.Label({
        "id": "closedTaskName",
        "isVisible": true,
        "left": "0dp",
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
        "left": "0dp",
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
    myClosedTaskDetailParent.add(closedTaskName, closedTaskBusiness);
    var myClosedTasExpandImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myClosedTasExpandImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    myClosedTasExpandImageParent.setDefaultUnit(kony.flex.DP);
    var closedTaskExpandThis = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "closedTaskExpandThis",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "40dp"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    myClosedTasExpandImageParent.add(closedTaskExpandThis);
    myClosedTaskTop.add(myClosedTaskProfileImageParent, myClosedTaskDetailParent, myClosedTasExpandImageParent);
    var myClosedTaskBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myClosedTaskBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "95%"
    }, {}, {});
    myClosedTaskBottom.setDefaultUnit(kony.flex.DP);
    var closedTaskMarkAsCompleteParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "closedTaskMarkAsCompleteParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "55%"
    }, {}, {});
    closedTaskMarkAsCompleteParent.setDefaultUnit(kony.flex.DP);
    var markAsCompleteImage = new kony.ui.Image2({
        "height": "30dp",
        "id": "markAsCompleteImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var markAsCompleteText = new kony.ui.RichText({
        "id": "markAsCompleteText",
        "isVisible": true,
        "left": "3dp",
        "skin": "markCompSendRepSkin",
        "text": "RichText",
        "top": "8dp",
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
    closedTaskMarkAsCompleteParent.add(markAsCompleteImage, markAsCompleteText);
    var closedTaskSendReportParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "closedTaskSendReportParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    closedTaskSendReportParent.setDefaultUnit(kony.flex.DP);
    var sendReportImage = new kony.ui.Image2({
        "height": "30dp",
        "id": "sendReportImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var sendReportText = new kony.ui.RichText({
        "id": "sendReportText",
        "isVisible": true,
        "left": "3dp",
        "skin": "markCompSendRepSkin",
        "text": "RichText",
        "top": "8dp",
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
    closedTaskSendReportParent.add(sendReportImage, sendReportText);
    myClosedTaskBottom.add(closedTaskMarkAsCompleteParent, closedTaskSendReportParent);
    CopyFBox00fe78492e0da42.add(myClosedTaskTop, myClosedTaskBottom);
}