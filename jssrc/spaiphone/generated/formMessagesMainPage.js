function addWidgetsformMessagesMainPage() {
    formMessagesMainPage.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "13.91%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "6dp",
        "top": "17dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    flxHeader.add();
    var flxScrollMessageList = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "82.41%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollMessageList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "114dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScrollMessageList.setDefaultUnit(kony.flex.DP);
    var segMessageList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Yesterday",
            "lblContactName": "John Doe",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sun",
            "lblContactName": "Dave Jameson",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Mon",
            "lblContactName": "Jane Doe",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Fri",
            "lblContactName": "Bob Nicolas",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sat",
            "lblContactName": "Reily O'reily",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sat",
            "lblContactName": "Spike Spiegel",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sat",
            "lblContactName": "Jon Jonz",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sep 7",
            "lblContactName": "Robert",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sep 6",
            "lblContactName": "Mike",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sep 5",
            "lblContactName": "Lily Adoms",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sep 4",
            "lblContactName": "Fred ",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sep 3",
            "lblContactName": "John Albert",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sep 2",
            "lblContactName": "Pinto ",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }, {
            "imgContactPhoto": "imgseglogo.png",
            "lblChatDay": "Sep 1",
            "lblContactName": "Joey Parker",
            "lblMessageBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }],
        "groupCells": false,
        "height": "554dp",
        "id": "segMessageList",
        "isVisible": true,
        "left": "7dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowTemplate": FBox0a770daf321f044,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
        "separatorColor": "7a7a7a64",
        "separatorRequired": true,
        "separatorThickness": 2,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "imgContactPhoto": "imgContactPhoto",
            "lblChatDay": "lblChatDay",
            "lblContactName": "lblContactName",
            "lblMessageBody": "lblMessageBody"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxScrollMessageList.add(segMessageList);
    formMessagesMainPage.add(flxHeader, flxScrollMessageList);
};

function formMessagesMainPageGlobals() {
    formMessagesMainPage = new kony.ui.Form2({
        "addWidgets": addWidgetsformMessagesMainPage,
        "enabledForIdleTimeout": false,
        "id": "formMessagesMainPage",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    formMessagesMainPage.info = {
        "kuid": "c42bd3d31cfc47f7ac12bfee9ea65bc5"
    };
};