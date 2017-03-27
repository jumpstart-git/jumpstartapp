function addWidgetsmyProfile() {
    myProfile.setDefaultUnit(kony.flex.DP);
    var myProfileContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "myProfileContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%"
    }, {}, {});
    myProfileContainer.setDefaultUnit(kony.flex.DP);
    var coverPhotoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "29%",
        "id": "coverPhotoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0de2fd6417dcb48",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    coverPhotoContainer.setDefaultUnit(kony.flex.DP);
    coverPhotoContainer.add();
    var myProfileDetailsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileDetailsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myProfileDetailsHeader.setDefaultUnit(kony.flex.DP);
    var myProfilePic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfilePic",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%"
    }, {}, {});
    myProfilePic.setDefaultUnit(kony.flex.DP);
    var Image0379f9ec64bb146 = new kony.ui.Image2({
        "centerX": "60%",
        "height": "70dp",
        "id": "Image0379f9ec64bb146",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "personiconbg.png",
        "top": "0dp",
        "width": "70dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image05e3d8be65d5148 = new kony.ui.Image2({
        "centerX": "60%",
        "height": "70dp",
        "id": "Image05e3d8be65d5148",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "personicon.png",
        "top": "0dp",
        "width": "70dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfilePic.add(Image0379f9ec64bb146, Image05e3d8be65d5148);
    var myProfileDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    myProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
    var myProfileName = new kony.ui.Label({
        "id": "myProfileName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0af134fa002934b",
        "text": "Jar Jar Binks",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var myProfilePosition = new kony.ui.RichText({
        "id": "myProfilePosition",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0364e2453c4f842",
        "text": "Director at MeeSa Inc.",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var myProfileLevel = new kony.ui.Label({
        "id": "myProfileLevel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel02479397b695f45",
        "text": "Specialist Level",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    myProfileDetailsContainer.add(myProfileName, myProfilePosition, myProfileLevel);
    myProfileDetailsHeader.add(myProfilePic, myProfileDetailsContainer);
    var myProfileActionsRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileActionsRow",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    myProfileActionsRow.setDefaultUnit(kony.flex.DP);
    var myProfileBookmarkParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileBookmarkParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    myProfileBookmarkParent.setDefaultUnit(kony.flex.DP);
    var myProfileBookmarkImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "myProfileBookmarkImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "bookmarkicon.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var myProfileBookmarkText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "myProfileBookmarkText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0e5ea2693981249",
        "text": "<u>Bookmark</u>",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileBookmarkParent.add(myProfileBookmarkImage, myProfileBookmarkText);
    var myProfileCallParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileCallParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": AS_FlexContainer_1ce7b80c7082418baa359014bb7ede6c,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    myProfileCallParent.setDefaultUnit(kony.flex.DP);
    var myProfileCallImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "myProfileCallImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "0dp",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var myProfileCallText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "myProfileCallText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0e5ea2693981249",
        "text": "<u>Call</u>",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileCallParent.add(myProfileCallImage, myProfileCallText);
    var myProfileMessageParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileMessageParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "onTouchEnd": AS_FlexContainer_561e4566722944e5aaa6bef07be858ee,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    myProfileMessageParent.setDefaultUnit(kony.flex.DP);
    var myProfileMessageImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30dp",
        "id": "myProfileMessageImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "messageicon.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var myProfileMessageText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "myProfileMessageText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0e5ea2693981249",
        "text": "<u>Message</u>",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileMessageParent.add(myProfileMessageImage, myProfileMessageText);
    myProfileActionsRow.add(myProfileBookmarkParent, myProfileCallParent, myProfileMessageParent);
    var myProfileLocationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileLocationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox09a2ecdca5b7a49",
        "top": "20dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileLocationContainer.setDefaultUnit(kony.flex.DP);
    var myProfileLocationIconParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileLocationIconParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%"
    }, {}, {});
    myProfileLocationIconParent.setDefaultUnit(kony.flex.DP);
    var myProfileLocationPinImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50dp",
        "id": "myProfileLocationPinImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "pinlocationicon.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileLocationIconParent.add(myProfileLocationPinImage);
    var myProfileLocationAddressParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileLocationAddressParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%"
    }, {}, {});
    myProfileLocationAddressParent.setDefaultUnit(kony.flex.DP);
    var myProfileLocationAddressText = new kony.ui.RichText({
        "height": "50dp",
        "id": "myProfileLocationAddressText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText02d4fb58a6f0a42",
        "text": "18 Sydney 2000, NSW",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileLocationAddressParent.add(myProfileLocationAddressText);
    var myProfileLocationDistanceParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileLocationDistanceParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    myProfileLocationDistanceParent.setDefaultUnit(kony.flex.DP);
    var myProfileLocationDistanceText = new kony.ui.RichText({
        "height": "50dp",
        "id": "myProfileLocationDistanceText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText08e91f37dd47f48",
        "text": "15 km",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileLocationDistanceParent.add(myProfileLocationDistanceText);
    myProfileLocationContainer.add(myProfileLocationIconParent, myProfileLocationAddressParent, myProfileLocationDistanceParent);
    var myProfileAboutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileAboutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0c2f875fb900c47",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileAboutContainer.setDefaultUnit(kony.flex.DP);
    var myProfileAboutHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileAboutHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileAboutHeader.setDefaultUnit(kony.flex.DP);
    var myProfileAboutTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileAboutTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileAboutTextParent.setDefaultUnit(kony.flex.DP);
    var myProfileAboutText = new kony.ui.RichText({
        "height": "40dp",
        "id": "myProfileAboutText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText011049b35f34d40",
        "text": "About Jar Jar Binks",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileAboutTextParent.add(myProfileAboutText);
    var myProfileAboutEditParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileAboutEditParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    myProfileAboutEditParent.setDefaultUnit(kony.flex.DP);
    var myProfileAboutEditImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "myProfileAboutEditImage",
        "isVisible": true,
        "right": "0dp",
        "skin": "slImage",
        "src": "editdetails.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileAboutEditParent.add(myProfileAboutEditImage);
    myProfileAboutHeader.add(myProfileAboutTextParent, myProfileAboutEditParent);
    var myProfileAboutBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileAboutBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileAboutBody.setDefaultUnit(kony.flex.DP);
    var myProfileAboutBodyText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "myProfileAboutBodyText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0a3501d11069745",
        "text": "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>\n<br>\n<p>erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p>",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileAboutBody.add(myProfileAboutBodyText);
    myProfileAboutContainer.add(myProfileAboutHeader, myProfileAboutBody);
    var myProfileAvailabilityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileAvailabilityContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0c2f875fb900c47",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileAvailabilityContainer.setDefaultUnit(kony.flex.DP);
    var myProfileAvailabilityHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileAvailabilityHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileAvailabilityHeader.setDefaultUnit(kony.flex.DP);
    var myProfileAvailabilityTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileAvailabilityTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileAvailabilityTextParent.setDefaultUnit(kony.flex.DP);
    var myProfileAvailabilityText = new kony.ui.RichText({
        "height": "40dp",
        "id": "myProfileAvailabilityText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText011049b35f34d40",
        "text": "Schedule of availability",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileAvailabilityTextParent.add(myProfileAvailabilityText);
    var myProfileAvailabilityEditParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileAvailabilityEditParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    myProfileAvailabilityEditParent.setDefaultUnit(kony.flex.DP);
    var myProfileAvailabilityEditImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "myProfileAvailabilityEditImage",
        "isVisible": true,
        "right": "0dp",
        "skin": "slImage",
        "src": "editdetails.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileAvailabilityEditParent.add(myProfileAvailabilityEditImage);
    myProfileAvailabilityHeader.add(myProfileAvailabilityTextParent, myProfileAvailabilityEditParent);
    var myProfileAvailabilityExperienceBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileAvailabilityExperienceBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileAvailabilityExperienceBody.setDefaultUnit(kony.flex.DP);
    var myProfileAvailabilityCalendarParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileAvailabilityCalendarParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    myProfileAvailabilityCalendarParent.setDefaultUnit(kony.flex.DP);
    var myProfileAvailabilityCalendarImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "myProfileAvailabilityCalendarImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "calendaricon.png",
        "top": "0dp",
        "width": "40dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileAvailabilityCalendarParent.add(myProfileAvailabilityCalendarImage);
    var myProfileAvailabilityScheduleParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileAvailabilityScheduleParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    myProfileAvailabilityScheduleParent.setDefaultUnit(kony.flex.DP);
    var myProfileAvailabilityScheduleDays = new kony.ui.RichText({
        "id": "myProfileAvailabilityScheduleDays",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText084750cb758f144",
        "text": "Monday - Friday",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var myProfileAvailabilityScheduleTime = new kony.ui.RichText({
        "id": "myProfileAvailabilityScheduleTime",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText06d89e347b0034c",
        "text": "1pm - 3pm",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileAvailabilityScheduleParent.add(myProfileAvailabilityScheduleDays, myProfileAvailabilityScheduleTime);
    myProfileAvailabilityExperienceBody.add(myProfileAvailabilityCalendarParent, myProfileAvailabilityScheduleParent);
    myProfileAvailabilityContainer.add(myProfileAvailabilityHeader, myProfileAvailabilityExperienceBody);
    var myProfileSkillsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileSkillsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0c2f875fb900c47",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileSkillsContainer.setDefaultUnit(kony.flex.DP);
    var myProfileSkillsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileSkillsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileSkillsHeader.setDefaultUnit(kony.flex.DP);
    var myProfileSkillsTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileSkillsTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileSkillsTextParent.setDefaultUnit(kony.flex.DP);
    var myProfileSkillsText = new kony.ui.RichText({
        "height": "40dp",
        "id": "myProfileSkillsText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText011049b35f34d40",
        "text": "Skills\n",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileSkillsTextParent.add(myProfileSkillsText);
    var myProfileSkillsEditParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileSkillsEditParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    myProfileSkillsEditParent.setDefaultUnit(kony.flex.DP);
    var myProfileSkillsEditImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "myProfileSkillsEditImage",
        "isVisible": true,
        "right": "0dp",
        "skin": "slImage",
        "src": "editdetails.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileSkillsEditParent.add(myProfileSkillsEditImage);
    myProfileSkillsHeader.add(myProfileSkillsTextParent, myProfileSkillsEditParent);
    var myProfileSkillsBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileSkillsBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileSkillsBody.setDefaultUnit(kony.flex.DP);
    var myProfileSkillsList = new kony.ui.RichText({
        "centerX": "50%",
        "id": "myProfileSkillsList",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0a3501d11069745",
        "text": "<u>Specialist Level Graphic Design</u>&nbsp;&nbsp;&nbsp;<u>Printing</u>&nbsp;&nbsp;&nbsp;<u>Adobe InDesign</u>",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileSkillsBody.add(myProfileSkillsList);
    myProfileSkillsContainer.add(myProfileSkillsHeader, myProfileSkillsBody);
    var myProfileWorkExperienceContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileWorkExperienceContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0c2f875fb900c47",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileWorkExperienceContainer.setDefaultUnit(kony.flex.DP);
    var myProfileWorkExperienceHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileWorkExperienceHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileWorkExperienceHeader.setDefaultUnit(kony.flex.DP);
    var myProfileWorkExperienceTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileWorkExperienceTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    myProfileWorkExperienceTextParent.setDefaultUnit(kony.flex.DP);
    var myProfileWorkExperienceText = new kony.ui.RichText({
        "height": "40dp",
        "id": "myProfileWorkExperienceText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText011049b35f34d40",
        "text": "Work Experience",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileWorkExperienceTextParent.add(myProfileWorkExperienceText);
    var myProfileWorkExperienceEditParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileWorkExperienceEditParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    myProfileWorkExperienceEditParent.setDefaultUnit(kony.flex.DP);
    var myProfileWorkExperienceEditImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "myProfileWorkExperienceEditImage",
        "isVisible": true,
        "right": "0dp",
        "skin": "slImage",
        "src": "editdetails.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileWorkExperienceEditParent.add(myProfileWorkExperienceEditImage);
    myProfileWorkExperienceHeader.add(myProfileWorkExperienceTextParent, myProfileWorkExperienceEditParent);
    var myProfileWorkExperienceBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "myProfileWorkExperienceBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    myProfileWorkExperienceBody.setDefaultUnit(kony.flex.DP);
    var myProfileWorkExperienceLogoParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileWorkExperienceLogoParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    myProfileWorkExperienceLogoParent.setDefaultUnit(kony.flex.DP);
    var myProfileWorkExperienceLogoImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "myProfileWorkExperienceLogoImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "workedatplaceholder.png",
        "top": "0dp",
        "width": "40dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileWorkExperienceLogoParent.add(myProfileWorkExperienceLogoImage);
    var myProfileWorkExperienceCompanyParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "myProfileWorkExperienceCompanyParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    myProfileWorkExperienceCompanyParent.setDefaultUnit(kony.flex.DP);
    var myProfileWorkExperienceCompanyName = new kony.ui.RichText({
        "id": "myProfileWorkExperienceCompanyName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText084750cb758f144",
        "text": "Worked at <span style=\"color:#169BD5 \">The Company</span>",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var myProfileWorkExperienceYears = new kony.ui.RichText({
        "id": "myProfileWorkExperienceYears",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0545c3452a6e24b",
        "text": "2003 - 2010",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var myProfileWorkExperienceDescription = new kony.ui.RichText({
        "id": "myProfileWorkExperienceDescription",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0c81482dfe21340",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    myProfileWorkExperienceCompanyParent.add(myProfileWorkExperienceCompanyName, myProfileWorkExperienceYears, myProfileWorkExperienceDescription);
    myProfileWorkExperienceBody.add(myProfileWorkExperienceLogoParent, myProfileWorkExperienceCompanyParent);
    myProfileWorkExperienceContainer.add(myProfileWorkExperienceHeader, myProfileWorkExperienceBody);
    myProfileContainer.add(coverPhotoContainer, myProfileDetailsHeader, myProfileActionsRow, myProfileLocationContainer, myProfileAboutContainer, myProfileAvailabilityContainer, myProfileSkillsContainer, myProfileWorkExperienceContainer);
    myProfile.add(myProfileContainer);
};

function myProfileGlobals() {
    myProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsmyProfile,
        "enabledForIdleTimeout": false,
        "id": "myProfile",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0136e23bcf68b48"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    myProfile.info = {
        "kuid": "38e026ceda214cf88e999137a5268792"
    };
};