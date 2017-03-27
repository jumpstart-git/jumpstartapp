function initializeFBox018a2be4f3acd48() {
    FBox018a2be4f3acd48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "FBox018a2be4f3acd48",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox018a2be4f3acd48.setDefaultUnit(kony.flex.DP);
    var recommendationContactImage = new kony.ui.Image2({
        "height": "50dp",
        "id": "recommendationContactImage",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "50dp",
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
    var recommendationDetailContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "recommendationDetailContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "25%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    recommendationDetailContainer.setDefaultUnit(kony.flex.DP);
    var recommendationContactName = new kony.ui.Label({
        "id": "recommendationContactName",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel110",
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
    var recommendationContactDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "recommendationContactDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "slFbox",
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    recommendationContactDetails.setDefaultUnit(kony.flex.DP);
    var recommendationContactDesignation = new kony.ui.Label({
        "id": "recommendationContactDesignation",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel90",
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
    var recommendationContactCompanyName = new kony.ui.Label({
        "id": "recommendationContactCompanyName",
        "isVisible": true,
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
    recommendationContactDetails.add(recommendationContactDesignation, recommendationContactCompanyName);
    var recommendationText = new kony.ui.RichText({
        "id": "recommendationText",
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
    var recommendationReceivedTime = new kony.ui.Label({
        "bottom": 5,
        "id": "recommendationReceivedTime",
        "isVisible": true,
        "right": "6dp",
        "skin": "jumpStartLabel90",
        "text": "Label",
        "top": "10dp",
        "width": "80.37%",
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
    recommendationDetailContainer.add(recommendationContactName, recommendationContactDetails, recommendationText, recommendationReceivedTime);
    FBox018a2be4f3acd48.add(recommendationContactImage, recommendationDetailContainer);
}