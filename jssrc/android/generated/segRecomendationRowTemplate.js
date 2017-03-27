function initializesegRecomendationRowTemplate() {
    flxSegRecRowTemp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxSegRecRowTemp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM
    }, {}, {});
    flxSegRecRowTemp.setDefaultUnit(kony.flex.DP);
    var contactImg = new kony.ui.Image2({
        "height": "55dp",
        "id": "contactImg",
        "isVisible": true,
        "left": "0%",
        "src": "imgseglogo.png",
        "top": "5%",
        "width": "13%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcontactName = new kony.ui.Label({
        "id": "lblcontactName",
        "isVisible": true,
        "left": "15%",
        "text": "John Doe",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblContactDesignation = new kony.ui.Label({
        "id": "lblContactDesignation",
        "isVisible": true,
        "left": "15%",
        "text": "Director at",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "17%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCompanyName = new kony.ui.Label({
        "id": "lblCompanyName",
        "isVisible": true,
        "left": "35%",
        "text": "The Supplies Company",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "17%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label067f546686ee34d = new kony.ui.Label({
        "id": "Label067f546686ee34d",
        "isVisible": true,
        "left": "78%",
        "text": "just now",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "17%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblRecommendationDescription = new kony.ui.Label({
        "height": "65%",
        "id": "lblRecommendationDescription",
        "isVisible": true,
        "left": "15%",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "29%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSegRecRowTemp.add(contactImg, lblcontactName, lblContactDesignation, lblCompanyName, Label067f546686ee34d, lblRecommendationDescription);
}