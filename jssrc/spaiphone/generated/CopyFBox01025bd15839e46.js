function initializeCopyFBox01025bd15839e46() {
    CopyFBox01025bd15839e46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "CopyFBox01025bd15839e46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox01025bd15839e46.setDefaultUnit(kony.flex.DP);
    var regSkillItem = new kony.ui.Label({
        "height": "25dp",
        "id": "regSkillItem",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartLabelGreen100",
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
    var imgClose = new kony.ui.Image2({
        "height": "15dp",
        "id": "imgClose",
        "isVisible": true,
        "right": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "6dp",
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
    CopyFBox01025bd15839e46.add(regSkillItem, imgClose);
}