//Type your code here
var loggedInUserObject = {
    user: ""
};

function doSignIn() {
    var usernameInput = login.usernameField.text;
    var passWordInput = login.passwordField.text;
    var isAuthenticatedUser = false;
    if (usernameInput === "MyVolunteer" && passWordInput === "password") {
        isAuthenticatedUser = true;
        loggedInUserObject.user = "volunteer";
    } else if (usernameInput === "MyBusiness" && passWordInput === "password") {
        isAuthenticatedUser = true;
        loggedInUserObject.user = "indigenousBusiness";
    } else {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Unauthenticated User",
            "yesLabel": "OK",
            "message": "You shall not pass!",
            "alertHandler": function() {}
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
    if (isAuthenticatedUser) {
        if (loggedInUserObject.user === "volunteer") {
            //       userInfoPage.show();
            mainPage.show();
        } else if (loggedInUserObject.user === "indigenousBusiness") {
            mainPage.show();
        }
    }
}

function getUserInfo() {
    kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - START: myString");
    kony.print(loggedInUserInfo);
    kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - END: myString");
    if (loggedInUserObject.user === "volunteer") {
        userInfoPage.nameInfoField.text = loggedInUserInfo.firstName + ' ' + loggedInUserInfo.lastName;
        userInfoPage.addressInfoField.text = loggedInUserInfo.address;
        userInfoPage.companyInfoField.text = loggedInUserInfo.company;
        userInfoPage.roleInfoField.text = loggedInUserInfo.role;
        if (loggedInUserInfo.skills.length) {
            for (var i = 0; i < loggedInUserInfo.skills.length; i++) {
                // Textbox Basic Configuration
                var textboxBC = {
                    id: i,
                    skin: "userInfoPageInputField",
                    focusskin: "userInfoPageInputField",
                    isVisible: true,
                    placeholder: ""
                };
                // Textbox Layout Configuration
                var textboxLC = {
                    hExpand: false, // If set to false, the widget occupies the preferred width. The preferred width of a widget is the sum of its contents width, padding, and margin.
                    margin: [15, 15, 15, 15],
                    padding: [0, 0, 0, 0],
                    containerWeight: 100,
                    marginInPixel: false,
                    paddingInPixel: false,
                    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
                };
                // Textbox Platform Specific Properties configuration
                var textboxPC = {};
                var txtDynamic = new kony.ui.TextBox2(textboxBC, textboxLC, textboxPC);
                txtDynamic.text = loggedInUserInfo.skills[i];
                //         userInfoPage.skillsList.add(txtDynamic);
            }
        }
    } else if (loggedInUserObject.user === "indigenousBusiness") {}
}
//Type your code here
//Type your code here
mobileFabricConfigurationForLogin = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "CBALogin",
        operations: ["getLoginDetails"]
    }],
    /*identityServices: 
                                [
                                                {
                                                                service:"userstore",
                                                                username:"ravichandra.pitchuka@kony.com",
                password: "Kony@123"
                                                }
                                ],*/
    konysdkObject: null,
    authClient: null,
    integrationObj: null,
    isKonySDKObjectInitialized: false,
    isMFAuthenticated: false
};
// Function to invoke getFoxNews Service call
function loginService() {
    //   kony.application.showLoadingScreen(null, "loading", 
    // constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {  
    // shouldShowLabelInBottom: "true", separatorHeight: 200} );
    // Let's get the news type the user selected
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    //alert ("########## Selected Key:" + selectedKey);
    // Let's first check that the user picked a valid value
    //if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
    // Populating the input params for the service call and invoking the service
    // We're passing in the selected key for the user's selection in the combobox
    // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
    // Now we make the call to the service using our input parameters and specifying
    // the function processServiceResults as our callback when the service returns results
    // appmiddlewareinvokerasync(inputParams, processServiceResults);
    if (!mobileFabricConfigurationForLogin.isKonySDKObjectInitialized) {
        initializeMobileFabricForLogin();
    } else if (mobileFabricConfigurationForLogin.isKonySDKObjectInitialized) {
        getLogin();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForLogin() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    //getLoginSuccessCallback(gblLoginData);
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForLogin.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForLogin.konysdkObject.init(mobileFabricConfigurationForLogin.appKey, mobileFabricConfigurationForLogin.appSecret, mobileFabricConfigurationForLogin.serviceURL, initializeMobileFabricLoginSuccess, initializeMobileFabricLoginFailure);
        //alert("hi");
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricLoginSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //     alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForLogin.isKonySDKObjectInitialized = true;
    // kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getLogin();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricLoginFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //   alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForLogin.authClient = mobileFabricConfigurationForLogin.konysdkObject.getIdentityService(mobileFabricConfigurationForLogin.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForLogin.identityServices[0].username,
        "password": mobileFabricConfigurationForLogin.identityServices[0].password
    };
    mobileFabricConfigurationForLogin.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForLogin.isMFAuthenticated = true;
    //  kony.application.dismissLoadingScreen();
    getNotification();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getLogin() {
    // alert("inside getLogin");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForLogin.integrationObj = mobileFabricConfigurationForLogin.konysdkObject.getIntegrationService(mobileFabricConfigurationForLogin.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForLogin.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var dataLogin = {};
        dataLogin["userName"] = login.usernameField.text;
        dataLogin["password"] = login.passwordField.text;
        //var data={"userName":login.usernameField.text,
        //"password":login.passwordField.text};
        // dataLogin={userName:"volunteerFirst",password:"Password"};
        //  alert("dataLogin"+JSON.stringify(dataLogin));
        mobileFabricConfigurationForLogin.integrationObj.invokeOperation(operationName, headers, dataLogin, getLoginSuccessCallback, getLoginErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getLoginSuccessCallback(gblLoginData) {
    try {
        // alert("inside success"+JSON.stringify(gblLoginData));
        if (gblLoginData != "undefined" && gblLoginData != undefined) {
            // alert("1");
            // if (gblLoginData["LoginBusinessVolunteer"].length > 0)
            // {
            //      var tempData = [];
            //      var len = gblLoginData.LoginBusinessVolunteer.length;
            if ((gblLoginData.LoginBusinessVolunteer[0]["result"] == "true") && (gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"] == "business")) {
                //alert("inside set data");     
                var businessIdVal = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessId;
                kony.store.setItem("businessId", businessIdVal);
                // kony.store.getItem("businessId"); 
                //alert("inside set data"+businessIdVal); 
                var isBusOrVol = gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"];
                kony.store.setItem("isBusOrVol", isBusOrVol);
                var businessName = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessName;
                // kony.store.setItem(busLoginName, businessName);  
                var ACNNumber = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].acnNumber;
                var businessAddress = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].address1;
                var numberofBusinessOwners = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].numberOfIndigenousOwners;
                var numberOfEmployees = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].numberOfEmployees;
                var percentageOfBusinessOwnership = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].percentOfIndigenousOwnership;
                var percentageOfEmployment = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].percentIndigenousEmployment;
                var businessSector = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].sector;
                var professionalAffiliations = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].affiliations;
                var aboutCompany = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].indigenousBusinessesCol;
                var businessReach = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].business_reach;
                var businessActivity = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].sector;
                businessMyProfile.businessMyProfileBody.bmpBusinessNameInput.text = businessName;
                businessMyProfile.businessMyProfileBody.bmpNumbersInput.text = ACNNumber;
                businessMyProfile.businessMyProfileBody.bmpBusinessAddressInput.text = businessAddress;
                businessMyProfile.businessMyProfileBody.bmpNoOfIndiOwnersInput.text = numberofBusinessOwners;
                businessMyProfile.businessMyProfileBody.bmpPercentOfIndiOwnershipInput.text = numberOfEmployees;
                businessMyProfile.businessMyProfileBody.bmpNoOfEmployeesInput.text = percentageOfBusinessOwnership;
                businessMyProfile.businessMyProfileBody.bmpPercentIndiEmploymentInput.text = percentageOfEmployment;
                businessMyProfile.businessMyProfileBody.bmpSectorInput.text = businessSector;
                businessMyProfile.businessMyProfileBody.bmpAffiliationsInput.text = professionalAffiliations;
                businessMyProfile.show();
                kony.application.dismissLoadingScreen();
                //CompanyProfile
                searchResultProfile.businessProfileContainer.businessProfileDetailsHeader.CompanyNameAndAddressContainer.BusinessProfileCompanyNameAndAddressContaine.text = businessName;
                searchResultProfile.businessProfileContainer.businessProfileDetailsHeader.CompanyNameAndAddressContainer.CompanyAddressContainer.CompanyAddressLabel.text = businessAddress;
                searchResultProfile.businessProfileContainer.businessProfileAboutContainer.businessProfileAboutText.text = aboutCompany;
                searchResultProfile.businessProfileContainer.businessProfileBusinessActivityContainer.businessProfileBusinessActivityText.text = businessActivity;
                searchResultProfile.businessProfileContainer.businessProfileAffiliationsContainer.businessProfileAffiliationsText.text = professionalAffiliations;
                searchResultProfile.businessProfileContainer.businessProfileReachContainer.businessProfileReachText.text = businessReach;
            } else {
                // alert("inside else");
                var valVolunteerId = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].volunteerId;
                kony.store.setItem("volunteerId", valVolunteerId);
                // kony.store.getItem("volunteerId"); 
                ////skills start
                var skillList = " ";
                //console.log(JSON.stringify(res.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet));
                for (var i = 0; i < gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet.length; i++) {
                    skillList += gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName;
                }
                ///skills end
                var isBusOrVol = gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"];
                kony.store.setItem("isBusOrVol", isBusOrVol);
                var firstName = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].firstName;
                //kony.store.setItem(volLoginName, firstName);  
                var lastName = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].lastName;
                var companyName = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].companyName;
                var role = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].role;
                //var skillSet=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet;
                var aboutMe = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].aboutMe;
                var workDetails = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].workDetails;
                var state = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].state;
                var emailAddress = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].emailAddress;
                var schedule = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days;
                kony.store.setItem("schedule", schedule);
                ///start merin
                ///start merin
                var arr = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days.split(" ");
                //alert("arr"+JSON.stringify(arr));
                for (var k = 0; k < arr.length; k++) {
                    switch (arr[k]) {
                        case "MON":
                            {
                                volunteerMyProfilePage.volunteerMyProfileMondayButton.skin = "jumpStartGreenButton90";
                                break;
                            }
                        case "TUE":
                            {
                                volunteerMyProfilePage.volunteerMyProfileTuesdayButton.skin = "jumpStartGreenButton90";
                                break;
                            }
                        case "WED":
                            {
                                volunteerMyProfilePage.volunteerMyProfileWednesdayButton.skin = "jumpStartGreenButton90";
                                break;
                            }
                        case "THU":
                            {
                                volunteerMyProfilePage.volunteerMyProfileThursdayButton.skin = "jumpStartGreenButton90";
                                break;
                            }
                        case "FRI":
                            {
                                volunteerMyProfilePage.volunteerMyProfileFridayButton.skin = "jumpStartGreenButton90";
                                break;
                            }
                        case "SAT":
                            {
                                volunteerMyProfilePage.volunteerMyProfileSaturdayButton.skin = "jumpStartGreenButton90";
                                break;
                                break;
                            }
                        case "SUN":
                            {
                                volunteerMyProfilePage.volunteerMyProfileSundayButton.skin = "jumpStartGreenButton90";
                                break;
                            }
                    }
                }
                //end merin
                //emd merin
                var fromTimeFull = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.fromTime;
                kony.store.setItem("fromTimeFull", fromTimeFull);
                var fromTimeSplitted = fromTimeFull.split(" ");
                var fromTime = fromTimeSplitted[0];
                var fromTimeMeridian = fromTimeSplitted[1];
                // var fromTime="1";  
                //start merin
                var mArr = [
                    ["fromTime", fromTime]
                ];
                volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.masterData = mArr;
                volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKey = "fromTime"; //fromTime;
                //  volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKeyValue=["fromTime",fromTime] ;
                var mArrMer = [
                    ["fromTimeMeridian", fromTimeMeridian]
                ];
                volunteerMyProfilePage.volunteerMyProfileFromMeridiem.masterData = mArrMer;
                volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKey = "fromTimeMeridian"; //fromTime;
                // volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKeyValue=["fromTimeMeridian",fromTimeMeridian] ;
                var toTimeFull = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.toTime;
                kony.store.setItem("toTimeFull", toTimeFull);
                var toTimeSplitted = toTimeFull.split(" ");
                var toTime = toTimeSplitted[0];
                var toTimeMeridian = toTimeSplitted[1];
                // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey=toTime;
                var mArr1 = [
                    ["toTime", toTime]
                ];
                volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.masterData = mArr1;
                volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey = "toTime"; //fromTime;
                //  volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKeyValue=["toTime",toTime] ;
                var mArr1Mer = [
                    ["toTimeMeridian", toTimeMeridian]
                ];
                volunteerMyProfilePage.volunteerMyProfileToMeridiem.masterData = mArr1Mer;
                volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKey = "toTimeMeridian"; //fromTime;
                // volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKeyValue=["toTimeMeridian",toTimeMeridian] ;
                var address = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].address;
                var level = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].level;
                var longitude = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].longitude;
                var latitude = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].latitude;
                var contactNumber = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].contactNumber;
                var volunteerTaskId = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].volunteerTaskId;
                var businessUnit = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].businessUnit;
                var userName = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].userName;
                var password = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].password;
                var userId = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].userId;
                var usersUserTypeId = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].usersUserTypeId;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileFirstNameInput.text = firstName;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileLastNameInput.text = lastName;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileUsernameInput.text = userName;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfilePasswordInput.text = password;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileReenterPasswordInput.text = password;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text = workDetails;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text = aboutMe;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.text = companyName;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileRoleInput.text = role;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileBusinessUnitInput.text = businessUnit;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileStateInput.text = state;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAddressInput.text = address;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileContactNumberInput.text = contactNumber;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileEmailAddressInput.text = emailAddress;
                volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillListContainer.volunteerMyProfileSkillsList.volunteerMyProfileSkillInputField.text = skillList;
                //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileTimeContainer.fromTimeContainer.lblFrom.text=fromTime;
                //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileTimeContainer.toTimeContainer.lblTo.text=toTime;
                volunteerMyProfilePage.show();
                //volunteerMyProfilePage.volunteerMyProfileBody
                //volunteerMyProfilePage.volunteerMyProfileBody
                //                alert("Failure1"+gblLoginData.LoginBusinessVolunteer[0]["result"]); 
                //                alert("Failure2"+gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"]); 
            }
        }
        // }
        kony.application.dismissLoadingScreen();
    } catch (e) {
        alert("the issue is " + e);
        kony.application.dismissLoadingScreen();
    }
}

function getLoginErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //     alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}