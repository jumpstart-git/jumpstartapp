function initializeLogHoursSegmentHeader() {
    segHeaderContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "segHeaderContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox09233905a640b4f"
    }, {}, {});
    segHeaderContainer.setDefaultUnit(kony.flex.DP);
    var headerDateContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "headerDateContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    headerDateContainer.setDefaultUnit(kony.flex.DP);
    var labelDate = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "labelDate",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0db86caac2cb843",
        "text": "Date",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    headerDateContainer.add(labelDate);
    var headerWorkingHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "headerWorkingHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "32%",
        "zIndex": 1
    }, {}, {});
    headerWorkingHoursContainer.setDefaultUnit(kony.flex.DP);
    var workingHoursHeaderLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "41%",
        "id": "workingHoursHeaderLabel",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0db86caac2cb843",
        "text": "Working of Hours",
        "top": "15dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    headerWorkingHoursContainer.add(workingHoursHeaderLabel);
    var headerNonWorkingHours = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "headerNonWorkingHours",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "26.67%",
        "zIndex": 1
    }, {}, {});
    headerNonWorkingHours.setDefaultUnit(kony.flex.DP);
    var nonWorkingHoursHeaderContainer = new kony.ui.Label({
        "centerX": "50%",
        "id": "nonWorkingHoursHeaderContainer",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0db86caac2cb843",
        "text": "Non-Working Hours",
        "top": "18dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    headerNonWorkingHours.add(nonWorkingHoursHeaderContainer);
    var indicatorImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "indicatorImg",
        "isVisible": true,
        "left": "1dp",
        "skin": "slImage",
        "src": "lohourindicator.PNG",
        "top": "2dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    segHeaderContainer.add(headerDateContainer, headerWorkingHoursContainer, headerNonWorkingHours, indicatorImg);
}