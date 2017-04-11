function initializeFBox0ebe39ec296d744() {
    FBox0ebe39ec296d744 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "FBox0ebe39ec296d744",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0ebe39ec296d744.setDefaultUnit(kony.flex.DP);
    var segmentOuterContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "segmentOuterContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    segmentOuterContainer.setDefaultUnit(kony.flex.DP);
    var dateContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "dateContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "31%",
        "zIndex": 1
    }, {}, {});
    dateContainer.setDefaultUnit(kony.flex.DP);
    var lblDate = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDate",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel03f25fa3c5e7d49",
        "text": "Label",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    dateContainer.add(lblDate);
    var segWorkingHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "segWorkingHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    segWorkingHoursContainer.setDefaultUnit(kony.flex.DP);
    var lblWorkingHours = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblWorkingHours",
        "isVisible": true,
        "skin": "CopyslLabel01cc8e26b333848",
        "text": "4 hrs",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    segWorkingHoursContainer.add(lblWorkingHours);
    var segNonWorkingContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "segNonWorkingContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    segNonWorkingContainer.setDefaultUnit(kony.flex.DP);
    var lblNonWorkingHours = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblNonWorkingHours",
        "isVisible": true,
        "skin": "CopyslLabel06cc646669c8b4d",
        "text": "2.30 hrs",
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    segNonWorkingContainer.add(lblNonWorkingHours);
    segmentOuterContainer.add(dateContainer, segWorkingHoursContainer, segNonWorkingContainer);
    FBox0ebe39ec296d744.add(segmentOuterContainer);
}