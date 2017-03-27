function initializesegRowMessageListTemplate() {
    flxMessageList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxMessageList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM
    }, {}, {});
    flxMessageList.setDefaultUnit(kony.flex.DP);
    var Image0605fef2b78d647 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0605fef2b78d647",
        "isVisible": true,
        "left": "0dp",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "18.67%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMessageList.add(Image0605fef2b78d647);
}