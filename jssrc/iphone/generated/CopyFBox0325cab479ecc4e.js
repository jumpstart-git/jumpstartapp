function initializeCopyFBox0325cab479ecc4e() {
    CopyFBox0325cab479ecc4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "CopyFBox0325cab479ecc4e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox0325cab479ecc4e.setDefaultUnit(kony.flex.DP);
    var endorsentContactImage = new kony.ui.Image2({
        "height": "60dp",
        "id": "endorsentContactImage",
        "isVisible": true,
        "left": "2dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "20%",
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
    var endorsementDetailContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "endorsementDetailContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "25%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    endorsementDetailContainer.setDefaultUnit(kony.flex.DP);
    var endorsementContactName = new kony.ui.Label({
        "id": "endorsementContactName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyjumpStartLabel088663be2d34540",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var endorsementContactDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "endorsementContactDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "slFbox",
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    endorsementContactDetails.setDefaultUnit(kony.flex.DP);
    var endorsementTaskName = new kony.ui.Label({
        "id": "endorsementTaskName",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
        "text": "Label",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var endorsementSkill = new kony.ui.Label({
        "id": "endorsementSkill",
        "isVisible": false,
        "left": "5dp",
        "skin": "jumpStartLabelGreen90",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    endorsementContactDetails.add(endorsementTaskName, endorsementSkill);
    var endorsementText = new kony.ui.RichText({
        "id": "endorsementText",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "RichText",
        "top": "5dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var endorsementReceivedTime = new kony.ui.Label({
        "bottom": 5,
        "id": "endorsementReceivedTime",
        "isVisible": true,
        "right": "6dp",
        "skin": "CopyslLabel07361d094f2e14a",
        "text": "Label",
        "top": "10dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    endorsementDetailContainer.add(endorsementContactName, endorsementContactDetails, endorsementText, endorsementReceivedTime);
    CopyFBox0325cab479ecc4e.add(endorsentContactImage, endorsementDetailContainer);
}