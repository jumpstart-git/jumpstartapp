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
        "width": "100%"
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
    FBox0e89732147d1641.add(volunteerMyProfileSkillItem);
}