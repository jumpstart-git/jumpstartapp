function addWidgetspop2() {
    var HBox00f2651535c8049 = new kony.ui.Box({
        "id": "HBox00f2651535c8049",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var VBox089a9d10698d343 = new kony.ui.Box({
        "id": "VBox089a9d10698d343",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    VBox089a9d10698d343.add();
    HBox00f2651535c8049.add(VBox089a9d10698d343);
    pop2.add(HBox00f2651535c8049);
};

function pop2Globals() {
    pop2 = new kony.ui.Popup({
        "addWidgets": addWidgetspop2,
        "id": "pop2",
        "isModal": false,
        "skin": "slPopup",
        "transparencyBehindThePopup": 100
    }, {
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    pop2.info = {
        "kuid": "077a05d021bd45d29b6ba96e959a70d9"
    };
};