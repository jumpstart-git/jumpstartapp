function initializeFBox0488ce2c486374a() {
    FBox0488ce2c486374a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "FBox0488ce2c486374a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "100%"
    }, {}, {});
    FBox0488ce2c486374a.setDefaultUnit(kony.flex.DP);
    var FlexContainer09f0e64b33f8642 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "FlexContainer09f0e64b33f8642",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%"
    }, {}, {});
    FlexContainer09f0e64b33f8642.setDefaultUnit(kony.flex.DP);
    var Label06e57014debcc4e = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label06e57014debcc4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "eligibilityCriteriaLabelSkin",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
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
        "textCopyable": false
    });
    FlexContainer09f0e64b33f8642.add(Label06e57014debcc4e);
    var FlexContainer0b1f37063d1c744 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "FlexContainer0b1f37063d1c744",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    FlexContainer0b1f37063d1c744.setDefaultUnit(kony.flex.DP);
    var Image0fa57b85abcab49 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "Image0fa57b85abcab49",
        "imageWhileDownloading": "eligibilitycheck.png",
        "isVisible": true,
        "right": "0dp",
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
    FlexContainer0b1f37063d1c744.add(Image0fa57b85abcab49);
    FBox0488ce2c486374a.add(FlexContainer09f0e64b33f8642, FlexContainer0b1f37063d1c744);
}