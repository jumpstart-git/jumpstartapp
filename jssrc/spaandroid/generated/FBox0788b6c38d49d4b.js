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
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myOpenTaskTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "10dp",
        "width": "90%"
    }, {}, {});
    myOpenTaskTop.setDefaultUnit(kony.flex.DP);
    var myOpenTaskProfileImageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "myOpenTaskProfileImageParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {}, {});
    myOpenTaskProfileImageParent.setDefaultUnit(kony.flex.DP);
    var openTaskPersonProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "openTaskPersonProfilePic",
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
    myOpenTaskProfileImageParent.add(openTaskPersonProfilePic);
    var myOpenTaskDetailParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myOpenTaskDetailParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "79.15%",
        "zIndex": 1
    }, {}, {});
    myOpenTaskDetailParent.setDefaultUnit(kony.flex.DP);
    var openTaskName = new kony.ui.Label({
        "id": "openTaskName",
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
    var openTaskBusiness = new kony.ui.Label({
        "id": "openTaskBusiness",
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
    var lblRequestId = new kony.ui.Label({
        "id": "lblRequestId",
        "isVisible": true,
        "left": "121dp",
        "skin": "CopyslLabel0c46eb9dc3fc448",
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
    var markAsCompleteRichText = new kony.ui.RichText({
        "height": "20dp",
        "id": "markAsCompleteRichText",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_RichText_4aa2825b6d21400bb786f06eee737ea2,
        "skin": "CopyslRichText0f6cb1e7030024f",
        "text": "RichText",
        "top": "4dp",
        "width": "48.78%",
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
    myOpenTaskDetailParent.add(openTaskName, openTaskBusiness, markAsCompleteText, lblRequestId, markAsCompleteRichText);
    myOpenTaskTop.add(myOpenTaskProfileImageParent, myOpenTaskDetailParent);
    FBox0788b6c38d49d4b.add(myOpenTaskTop);
}