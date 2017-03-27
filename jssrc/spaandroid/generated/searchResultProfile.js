function addWidgetssearchResultProfile() {
    searchResultProfile.setDefaultUnit(kony.flex.DP);
    var volunteerProfileContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "volunteerProfileContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox075cf6099ef7d47",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%"
    }, {}, {});
    volunteerProfileContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileDetailsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileDetailsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileDetailsHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfilePic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfilePic",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%"
    }, {}, {});
    volunteerProfilePic.setDefaultUnit(kony.flex.DP);
    var volunteerProfilePicImage = new kony.ui.Image2({
        "centerX": "60%",
        "height": "70dp",
        "id": "volunteerProfilePicImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "nickgiles.png",
        "top": "0dp",
        "width": "70dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfilePic.add(volunteerProfilePicImage);
    var volunteerProfileDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileDetailsContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileName = new kony.ui.Label({
        "id": "volunteerProfileName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0af134fa002934b",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var volunteerProfileCompanyName = new kony.ui.RichText({
        "id": "volunteerProfileCompanyName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0364e2453c4f842",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerProfileBusinessUnitRole = new kony.ui.RichText({
        "id": "volunteerProfileBusinessUnitRole",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0364e2453c4f842",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileDetailsContainer.add(volunteerProfileName, volunteerProfileCompanyName, volunteerProfileBusinessUnitRole);
    volunteerProfileDetailsHeader.add(volunteerProfilePic, volunteerProfileDetailsContainer);
    var volunteerProfileContactActions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileContactActions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileContactActions.setDefaultUnit(kony.flex.DP);
    var volunteerProfileBookmark = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "volunteerProfileBookmark",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    volunteerProfileBookmark.setDefaultUnit(kony.flex.DP);
    var volunteerProfileBookmarkImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "volunteerProfileBookmarkImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "bookmarkoff.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileBookmark.add(volunteerProfileBookmarkImage);
    var volunteerProfileCall = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "volunteerProfileCall",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    volunteerProfileCall.setDefaultUnit(kony.flex.DP);
    var volunteerProfileCallImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "volunteerProfileCallImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileCall.add(volunteerProfileCallImage);
    var volunteerProfileEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "volunteerProfileEmail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    volunteerProfileEmail.setDefaultUnit(kony.flex.DP);
    var volunteerProfileEmailImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "volunteerProfileEmailImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "emailicon.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileEmail.add(volunteerProfileEmailImage);
    volunteerProfileContactActions.add(volunteerProfileBookmark, volunteerProfileCall, volunteerProfileEmail);
    var requestAVolunteer = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton110",
        "height": "40dp",
        "id": "requestAVolunteer",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f3075a508e024615b2e365abb06ea12b,
        "skin": "jumpStartGreenButton110",
        "text": "Request Volunteer",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var volunteerProfileLocationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileLocationContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileLocationContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationIconParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileLocationIconParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%"
    }, {}, {});
    volunteerProfileLocationIconParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationPinImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50dp",
        "id": "volunteerProfileLocationPinImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "location.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileLocationIconParent.add(volunteerProfileLocationPinImage);
    var volunteerProfileLocationAddressParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileLocationAddressParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%"
    }, {}, {});
    volunteerProfileLocationAddressParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationAddressStateText = new kony.ui.RichText({
        "height": "50dp",
        "id": "volunteerProfileLocationAddressStateText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText02d4fb58a6f0a42",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileLocationAddressParent.add(volunteerProfileLocationAddressStateText);
    var volunteerProfileLocationDistanceParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileLocationDistanceParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    volunteerProfileLocationDistanceParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileLocationDistanceText = new kony.ui.RichText({
        "height": "50dp",
        "id": "volunteerProfileLocationDistanceText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText08e91f37dd47f48",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileLocationDistanceParent.add(volunteerProfileLocationDistanceText);
    volunteerProfileLocationContainer.add(volunteerProfileLocationIconParent, volunteerProfileLocationAddressParent, volunteerProfileLocationDistanceParent);
    var volunteerProfileAboutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAboutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAboutContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAboutHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAboutHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAboutTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAboutTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileAboutText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText011049b35f34d40",
        "text": "About Nick Giles",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileAboutTextParent.add(volunteerProfileAboutText);
    volunteerProfileAboutHeader.add(volunteerProfileAboutTextParent);
    var volunteerProfileAboutBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAboutBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAboutBody.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAboutBodyText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "volunteerProfileAboutBodyText",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>\n<br>\n<p>erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p>",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileAboutBody.add(volunteerProfileAboutBodyText);
    volunteerProfileAboutContainer.add(volunteerProfileAboutHeader, volunteerProfileAboutBody);
    var volunteerProfileAvailabilityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAvailabilityHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileAvailabilityTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileAvailabilityText",
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
    volunteerProfileAvailabilityTextParent.add(volunteerProfileAvailabilityText);
    volunteerProfileAvailabilityHeader.add(volunteerProfileAvailabilityTextParent);
    var volunteerProfileAvailabilityExperienceBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityExperienceBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityExperienceBody.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityCalendarParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityCalendarParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    volunteerProfileAvailabilityCalendarParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityCalendarImage = new kony.ui.Image2({
        "height": "40dp",
        "id": "volunteerProfileAvailabilityCalendarImage",
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
    volunteerProfileAvailabilityCalendarParent.add(volunteerProfileAvailabilityCalendarImage);
    var volunteerProfileAvailabilityScheduleParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileAvailabilityScheduleParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyjumpStartBGBorder023e7eca67fa24c",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileAvailabilityScheduleParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileAvailabilityScheduleDays = new kony.ui.RichText({
        "id": "volunteerProfileAvailabilityScheduleDays",
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
    var volunteerProfileAvailabilityScheduleTime = new kony.ui.RichText({
        "id": "volunteerProfileAvailabilityScheduleTime",
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
    volunteerProfileAvailabilityScheduleParent.add(volunteerProfileAvailabilityScheduleDays, volunteerProfileAvailabilityScheduleTime);
    volunteerProfileAvailabilityExperienceBody.add(volunteerProfileAvailabilityCalendarParent, volunteerProfileAvailabilityScheduleParent);
    volunteerProfileAvailabilityContainer.add(volunteerProfileAvailabilityHeader, volunteerProfileAvailabilityExperienceBody);
    var volunteerProfileSkillsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileSkillsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileSkillsContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileSkillsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileSkillsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileSkillsHeader.setDefaultUnit(kony.flex.DP);
    var volunteerSkillsTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerSkillsTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerSkillsTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileSkillsText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileSkillsText",
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
    volunteerSkillsTextParent.add(volunteerProfileSkillsText);
    volunteerProfileSkillsHeader.add(volunteerSkillsTextParent);
    var volunteerProfileSkillsBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "10dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileSkillsBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileSkillsBody.setDefaultUnit(kony.flex.DP);
    var volunteerProfileSkillsList = new kony.ui.RichText({
        "centerX": "50%",
        "id": "volunteerProfileSkillsList",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0a3501d11069745",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileSkillsBody.add(volunteerProfileSkillsList);
    volunteerProfileSkillsContainer.add(volunteerProfileSkillsHeader, volunteerProfileSkillsBody);
    var volunteerProfileWorkExperienceContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    volunteerProfileWorkExperienceContainer.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileWorkExperienceHeader.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceTextParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "volunteerProfileWorkExperienceTextParent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerProfileWorkExperienceTextParent.setDefaultUnit(kony.flex.DP);
    var volunteerProfileWorkExperienceText = new kony.ui.RichText({
        "height": "40dp",
        "id": "volunteerProfileWorkExperienceText",
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
    volunteerProfileWorkExperienceTextParent.add(volunteerProfileWorkExperienceText);
    volunteerProfileWorkExperienceHeader.add(volunteerProfileWorkExperienceTextParent);
    var volunteerProfileWorkExperienceRT = new kony.ui.RichText({
        "bottom": "20dp",
        "centerX": "50%",
        "id": "volunteerProfileWorkExperienceRT",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>\n<br>\n<p>erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p>",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerProfileWorkExperienceContainer.add(volunteerProfileWorkExperienceHeader, volunteerProfileWorkExperienceRT);
    volunteerProfileContainer.add(volunteerProfileDetailsHeader, volunteerProfileContactActions, requestAVolunteer, volunteerProfileLocationContainer, volunteerProfileAboutContainer, volunteerProfileAvailabilityContainer, volunteerProfileSkillsContainer, volunteerProfileWorkExperienceContainer);
    var businessProfileContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "businessProfileContainer",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileDetailsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessProfileDetailsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileDetailsHeader.setDefaultUnit(kony.flex.DP);
    var CompanyLogoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "CompanyLogoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {}, {});
    CompanyLogoContainer.setDefaultUnit(kony.flex.DP);
    var CompanyLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80dp",
        "id": "CompanyLogo",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "supplynationlogo.png",
        "top": "0dp",
        "width": "80dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CompanyLogoContainer.add(CompanyLogo);
    var CompanyNameAndAddressContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "CompanyNameAndAddressContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%"
    }, {}, {});
    CompanyNameAndAddressContainer.setDefaultUnit(kony.flex.DP);
    var BusinessProfileCompanyNameAndAddressContaine = new kony.ui.Label({
        "id": "BusinessProfileCompanyNameAndAddressContaine",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel140Bold",
        "text": "The Supplies  Company",
        "top": "25%",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CompanyAddressContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "CompanyAddressContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CompanyAddressContainer.setDefaultUnit(kony.flex.DP);
    var imageMapIcon = new kony.ui.Image2({
        "height": "20dp",
        "id": "imageMapIcon",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "location.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CompanyAddressLabel = new kony.ui.Label({
        "centerY": "50%",
        "id": "CompanyAddressLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "101 Daaling Harbour, Sydney",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CompanyAddressContainer.add(imageMapIcon, CompanyAddressLabel);
    CompanyNameAndAddressContainer.add(BusinessProfileCompanyNameAndAddressContaine, CompanyAddressContainer);
    businessProfileDetailsHeader.add(CompanyLogoContainer, CompanyNameAndAddressContainer);
    var businessProfileContactActions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "businessProfileContactActions",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessProfileContactActions.setDefaultUnit(kony.flex.DP);
    var businessProfileBookmark = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "businessProfileBookmark",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    businessProfileBookmark.setDefaultUnit(kony.flex.DP);
    var businessProfileBookmarkImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "businessProfileBookmarkImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "bookmarkoff.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessProfileBookmark.add(businessProfileBookmarkImage);
    var businessProfileCall = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "businessProfileCall",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "34%"
    }, {}, {});
    businessProfileCall.setDefaultUnit(kony.flex.DP);
    var businessProfileCallImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "businessProfileCallImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "callicon.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessProfileCall.add(businessProfileCallImage);
    var businessProfileEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "businessProfileEmail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox048f5d0e9995346",
        "top": "0dp",
        "width": "33%"
    }, {}, {});
    businessProfileEmail.setDefaultUnit(kony.flex.DP);
    var businessProfileEmailImage = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "businessProfileEmailImage",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "emailicon.png",
        "top": "0dp",
        "width": "20dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessProfileEmail.add(businessProfileEmailImage);
    businessProfileContactActions.add(businessProfileBookmark, businessProfileCall, businessProfileEmail);
    var requestToVolunteerButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton110",
        "height": "40dp",
        "id": "requestToVolunteerButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_d9548a946ba24ef5a52b3107c5a81fe9,
        "skin": "jumpStartGreenButton110",
        "text": "Request to Volunteer",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var businessProfileAboutContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileAboutContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileAboutContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileAboutTitle = new kony.ui.Label({
        "id": "businessProfileAboutTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "jumpStartLabelOrange130",
        "text": "About",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileAboutText = new kony.ui.RichText({
        "id": "businessProfileAboutText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    var businessProfileAboutMore = new kony.ui.Label({
        "bottom": 10,
        "id": "businessProfileAboutMore",
        "isVisible": true,
        "left": "10dp",
        "skin": "jumpStartLabelGreen120",
        "text": "more",
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
    businessProfileAboutContainer.add(businessProfileAboutTitle, businessProfileAboutText, businessProfileAboutMore);
    var businessProfileBusinessActivityContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileBusinessActivityContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileBusinessActivityContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileBusinessActivityTitle = new kony.ui.Label({
        "id": "businessProfileBusinessActivityTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "jumpStartLabelOrange130",
        "text": "Business Activity",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileBusinessActivityText = new kony.ui.RichText({
        "id": "businessProfileBusinessActivityText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "Electrical Equipment & Components & Supplies (3912)",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    businessProfileBusinessActivityContainer.add(businessProfileBusinessActivityTitle, businessProfileBusinessActivityText);
    var businessProfileAffiliationsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "0dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileAffiliationsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileAffiliationsContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileAffiliationsTitle = new kony.ui.Label({
        "id": "businessProfileAffiliationsTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "jumpStartLabelOrange130",
        "text": "Professional Affiliations",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileAffiliationsText = new kony.ui.RichText({
        "id": "businessProfileAffiliationsText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "Australian Institute of Company Directors, Law Institute of Victoria",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    businessProfileAffiliationsContainer.add(businessProfileAffiliationsTitle, businessProfileAffiliationsText);
    var businessProfileReachContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "20dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "businessProfileReachContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGBorder230",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessProfileReachContainer.setDefaultUnit(kony.flex.DP);
    var businessProfileReachTitle = new kony.ui.Label({
        "id": "businessProfileReachTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "jumpStartLabelOrange130",
        "text": "Business Reach",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var businessProfileReachText = new kony.ui.RichText({
        "id": "businessProfileReachText",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT120",
        "text": "International, Australia-wide",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false
    }, {});
    businessProfileReachContainer.add(businessProfileReachTitle, businessProfileReachText);
    businessProfileContainer.add(businessProfileDetailsHeader, businessProfileContactActions, requestToVolunteerButton, businessProfileAboutContainer, businessProfileBusinessActivityContainer, businessProfileAffiliationsContainer, businessProfileReachContainer);
    var volunteerRequestContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "volunteerRequestContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "myProfileModalBG",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerRequestContainer.setDefaultUnit(kony.flex.DP);
    var requestToVolunteerModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "45%",
        "clipBounds": true,
        "height": "85%",
        "id": "requestToVolunteerModal",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "85%"
    }, {}, {});
    requestToVolunteerModal.setDefaultUnit(kony.flex.DP);
    var requestToVolunteerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "requestToVolunteerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestToVolunteerHeader.setDefaultUnit(kony.flex.DP);
    var volunteerRequestModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "volunteerRequestModalTitle",
        "isVisible": true,
        "skin": "jumpStartLabelOrange150",
        "text": "Request to Volunteer",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var requestRoleTitle = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestRoleTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "Please enter a message for the business",
        "top": "8%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    requestToVolunteerHeader.add(volunteerRequestModalTitle, requestRoleTitle);
    var requestToVolunteerBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "requestToVolunteerBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestToVolunteerBody.setDefaultUnit(kony.flex.DP);
    var requestRoleInput = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "70dp",
        "id": "requestRoleInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var requestVolunteerInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestVolunteerInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "A volunteer request notification will be sent to the company along with your available time indicated in your profile.",
        "top": "5%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var requestAvailableDays = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAvailableDays",
        "isVisible": true,
        "skin": "jumpStartLabelGreen120",
        "top": "10%",
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
    var requestAvailableTime = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAvailableTime",
        "isVisible": true,
        "skin": "jumpStartLabelGreen120",
        "top": "5%",
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
    requestToVolunteerBody.add(requestRoleInput, requestVolunteerInfo, requestAvailableDays, requestAvailableTime);
    var requestToVolunteerFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "requestToVolunteerFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestToVolunteerFooter.setDefaultUnit(kony.flex.DP);
    var sendVolunteerRequestButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton120",
        "height": "40dp",
        "id": "sendVolunteerRequestButton",
        "isVisible": true,
        "onClick": AS_Button_0d87a87ab5bd4552a60cca8b24ed2876,
        "skin": "jumpStartGreenButton110",
        "text": "Submit Request",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var cancelVolunteerRequestButton = new kony.ui.Label({
        "centerX": "50%",
        "id": "cancelVolunteerRequestButton",
        "isVisible": true,
        "onTouchStart": AS_Label_6f4ae2570f154799b143e04476af131f,
        "skin": "jumpStartLabelGreen120",
        "text": "Cancel",
        "top": "10%",
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
    requestToVolunteerFooter.add(sendVolunteerRequestButton, cancelVolunteerRequestButton);
    requestToVolunteerModal.add(requestToVolunteerHeader, requestToVolunteerBody, requestToVolunteerFooter);
    var requestAVolunteerModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "45%",
        "clipBounds": true,
        "height": "60%",
        "id": "requestAVolunteerModal",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartModalSkin",
        "top": "0dp",
        "width": "85%"
    }, {}, {});
    requestAVolunteerModal.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "requestAVolunteerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestAVolunteerHeader.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAVolunteerTitle",
        "isVisible": true,
        "skin": "jumpStartLabelOrange150",
        "text": "Request Volunteer",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var requestAVolunteerInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestAVolunteerInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "Please enter a message for the volunteer",
        "top": "8%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    requestAVolunteerHeader.add(requestAVolunteerTitle, requestAVolunteerInfo);
    var requestAVolunteerBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "requestAVolunteerBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestAVolunteerBody.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerMessageInput = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "70dp",
        "id": "requestAVolunteerMessageInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var requestAVolunteerMessageInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "requestAVolunteerMessageInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "A request notification will be sent to the volunteer.",
        "top": "5%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    requestAVolunteerBody.add(requestAVolunteerMessageInput, requestAVolunteerMessageInfo);
    var requestAVolunteerFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "requestAVolunteerFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    requestAVolunteerFooter.setDefaultUnit(kony.flex.DP);
    var requestAVolunteerSubmit = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton120",
        "height": "40dp",
        "id": "requestAVolunteerSubmit",
        "isVisible": true,
        "onClick": AS_Button_7fd9c2662e634e54b06436e93997e627,
        "skin": "jumpStartGreenButton110",
        "text": "Submit Request",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var requestAVolunteerCancel = new kony.ui.Label({
        "centerX": "50%",
        "id": "requestAVolunteerCancel",
        "isVisible": true,
        "onTouchStart": AS_Label_6f4ae2570f154799b143e04476af131f,
        "skin": "jumpStartLabelGreen120",
        "text": "Cancel",
        "top": "10%",
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
    requestAVolunteerFooter.add(requestAVolunteerSubmit, requestAVolunteerCancel);
    requestAVolunteerModal.add(requestAVolunteerHeader, requestAVolunteerBody, requestAVolunteerFooter);
    volunteerRequestContainer.add(requestToVolunteerModal, requestAVolunteerModal);
    searchResultProfile.add(volunteerProfileContainer, businessProfileContainer, volunteerRequestContainer);
};

function searchResultProfileGlobals() {
    searchResultProfile = new kony.ui.Form2({
        "addWidgets": addWidgetssearchResultProfile,
        "enabledForIdleTimeout": false,
        "id": "searchResultProfile",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_42a11d3c371641b28b461909f0aad3b7,
        "skin": "CopyslForm0136e23bcf68b48"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    searchResultProfile.info = {
        "kuid": "38e026ceda214cf88e999137a5268792"
    };
};