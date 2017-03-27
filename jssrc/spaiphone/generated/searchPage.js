function addWidgetssearchPage() {
    searchPage.setDefaultUnit(kony.flex.DP);
    var FlexContainer0055dbce72b0d44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0055dbce72b0d44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox07e7baba492f848",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainer0055dbce72b0d44.setDefaultUnit(kony.flex.DP);
    FlexContainer0055dbce72b0d44.add();
    var FlexScrollContainer0879b30b6569348 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0879b30b6569348",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox01252b025d4d040",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0879b30b6569348.setDefaultUnit(kony.flex.DP);
    FlexScrollContainer0879b30b6569348.add();
    searchPage.add(FlexContainer0055dbce72b0d44, FlexScrollContainer0879b30b6569348);
};

function searchPageGlobals() {
    searchPage = new kony.ui.Form2({
        "addWidgets": addWidgetssearchPage,
        "enabledForIdleTimeout": false,
        "id": "searchPage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    searchPage.info = {
        "kuid": "e8735789426944018c43aecbe8c7cc44"
    };
};