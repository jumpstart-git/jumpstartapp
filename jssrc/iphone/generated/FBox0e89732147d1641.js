function initializeFBox0e89732147d1641() {
    FBox0e89732147d1641 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "FBox0e89732147d1641",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0e89732147d1641.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileSkillItem = new kony.ui.Label({
        "height": "30dp",
        "id": "volunteerMyProfileSkillItem",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabelGreen100",
        "text": "Label",
        "top": "0dp",
        "width": "36.46%"
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
    var imgClose = new kony.ui.Image2({
        "height": "15dp",
        "id": "imgClose",
        "isVisible": true,
        "left": "130dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "5dp",
        "width": "15dp",
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
    FBox0e89732147d1641.add(volunteerMyProfileSkillItem, imgClose);
}