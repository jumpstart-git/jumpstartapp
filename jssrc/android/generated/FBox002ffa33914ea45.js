function initializeFBox002ffa33914ea45() {
    FBox002ffa33914ea45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "height": "preferred",
        "id": "FBox002ffa33914ea45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox002ffa33914ea45.setDefaultUnit(kony.flex.DP);
    var SegmentMainFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": 10,
        "clipBounds": true,
        "id": "SegmentMainFlex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    SegmentMainFlex.setDefaultUnit(kony.flex.DP);
    var SegVolunteerUpFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "SegVolunteerUpFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    SegVolunteerUpFlex.setDefaultUnit(kony.flex.DP);
    var volunteerImg = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "volunteerImg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "100%",
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
    SegVolunteerUpFlex.add(volunteerImg);
    var SegVolunteerDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "SegVolunteerDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    SegVolunteerDetails.setDefaultUnit(kony.flex.DP);
    var volunteerName = new kony.ui.Label({
        "id": "volunteerName",
        "isVisible": true,
        "left": "0%",
        "skin": "jumpStartLabel120",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
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
    var searchRoleCompanyContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "searchRoleCompanyContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "85%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    searchRoleCompanyContainer.setDefaultUnit(kony.flex.DP);
    var volunteerPosition = new kony.ui.Label({
        "id": "volunteerPosition",
        "isVisible": true,
        "left": "0%",
        "skin": "jumpStartLabel90",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
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
    var CompanyNameLbl = new kony.ui.Label({
        "id": "CompanyNameLbl",
        "isVisible": true,
        "left": "0%",
        "maxWidth": "100%",
        "skin": "jumpStartLabel90",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
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
    searchRoleCompanyContainer.add(volunteerPosition, CompanyNameLbl);
    var SegActionsDownFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "SegActionsDownFlex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    SegActionsDownFlex.setDefaultUnit(kony.flex.DP);
    var searchDistanceContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "searchDistanceContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onTouchStart": AS_FlexContainer_5dc50c25822441908725817f568d0d08,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    searchDistanceContainer.setDefaultUnit(kony.flex.DP);
    var searchDistanceImage = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "searchDistanceImage",
        "imageWhileDownloading": "location.png",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var searchDistanceLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "searchDistanceLabel",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartLabelGreen100",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
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
    searchDistanceContainer.add(searchDistanceImage, searchDistanceLabel);
    var searchBookmarkContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "searchBookmarkContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    searchBookmarkContainer.setDefaultUnit(kony.flex.DP);
    var searchBookmarkImage = new kony.ui.Image2({
        "centerY": "50%",
        "height": "30dp",
        "id": "searchBookmarkImage",
        "imageWhileDownloading": "bookmarkoff.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var searchBookmarkLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "searchBookmarkLabel",
        "isVisible": true,
        "left": "5dp",
        "skin": "jumpStartLabelGreen100",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
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
    searchBookmarkContainer.add(searchBookmarkImage, searchBookmarkLabel);
    SegActionsDownFlex.add(searchDistanceContainer, searchBookmarkContainer);
    SegVolunteerDetails.add(volunteerName, searchRoleCompanyContainer, SegActionsDownFlex);
    SegmentMainFlex.add(SegVolunteerUpFlex, SegVolunteerDetails);
    FBox002ffa33914ea45.add(SegmentMainFlex);
}