function initializeFBox0788b6c38d49d4b() {
    FBox0788b6c38d49d4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "FBox0788b6c38d49d4b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "100%"
    }, {}, {});
    FBox0788b6c38d49d4b.setDefaultUnit(kony.flex.DP);
    var myOpenTaskTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myOpenTaskTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%"
    }, {}, {});
    myOpenTaskTop.setDefaultUnit(kony.flex.DP);
    var myOpenTaskProfileImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myOpenTaskProfileImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {}, {});
    myOpenTaskProfileImageParent.setDefaultUnit(kony.flex.DP);
    var openTaskPersonIconBg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50dp",
        "id": "openTaskPersonIconBg",
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
    var openTaskPersonProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "openTaskPersonProfilePic",
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
    myOpenTaskProfileImageParent.add(openTaskPersonIconBg, openTaskPersonProfilePic);
    var myOpenTaskDetailParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myOpenTaskDetailParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    myOpenTaskDetailParent.setDefaultUnit(kony.flex.DP);
    var openTaskName = new kony.ui.Label({
        "id": "openTaskName",
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
    var openTaskBusiness = new kony.ui.Label({
        "id": "openTaskBusiness",
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
    myOpenTaskDetailParent.add(openTaskName, openTaskBusiness);
    var myOpenTasExpandImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "myOpenTasExpandImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    myOpenTasExpandImageParent.setDefaultUnit(kony.flex.DP);
    var openTaskExpandThis = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "openTaskExpandThis",
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
    myOpenTasExpandImageParent.add(openTaskExpandThis);
    myOpenTaskTop.add(myOpenTaskProfileImageParent, myOpenTaskDetailParent, myOpenTasExpandImageParent);
    var myOpenTaskBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myOpenTaskBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "95%"
    }, {}, {});
    myOpenTaskBottom.setDefaultUnit(kony.flex.DP);
    var openTaskMarkAsCompleteParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "openTaskMarkAsCompleteParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "55%"
    }, {}, {});
    openTaskMarkAsCompleteParent.setDefaultUnit(kony.flex.DP);
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
    openTaskMarkAsCompleteParent.add(markAsCompleteImage, markAsCompleteText);
    var openTaskSendReportParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "openTaskSendReportParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    openTaskSendReportParent.setDefaultUnit(kony.flex.DP);
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
    openTaskSendReportParent.add(sendReportImage, sendReportText);
    myOpenTaskBottom.add(openTaskMarkAsCompleteParent, openTaskSendReportParent);
    FBox0788b6c38d49d4b.add(myOpenTaskTop, myOpenTaskBottom);
}