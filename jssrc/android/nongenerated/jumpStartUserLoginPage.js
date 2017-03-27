//Type your code here
var loggedInUserObject = {
    user: ""
};
var gblForRetreive;
var gblLoginData;
var gblemailVal;

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
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
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

function getLoginSuccessCallback(gblLoginData1) {
    try {
        gblLoginData = gblLoginData1;
        //alert("inside success"+JSON.stringify(gblLoginData));
        //   var DivInfo=kony.os.deviceInfo();
        //    //alert(DivInfo.name); 
        // if(DivInfo.name==="iPhone")
        //    {
        //      getPushNote();
        //      var ksid=kony.store.getItem("KSID");
        //      if(ksid!=="null"||ksid!==null||ksid!=="undefined"||ksid!==undefined||ksid!=="")
        //        {
        //          AttachKSIDService();
        //        }
        //    }
        if (gblLoginData != "undefined" && gblLoginData != undefined) {
            if ((gblLoginData.LoginBusinessVolunteer[0]["result"] == "true")) {
                if ((gblLoginData.LoginBusinessVolunteer[0]["result"] == "true") && (gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"] == "business")) {
                    //alert();  
                    var businessIdVal = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessId;
                    kony.store.setItem("businessId", businessIdVal);
                    var isBusOrVol = gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"];
                    kony.store.setItem("isBusOrVol", isBusOrVol);
                    var adminVal = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.adminCredential;
                    kony.store.setItem("adminVal", adminVal);
                    var adminValnew = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.acceptEmail;
                    kony.store.setItem("adminValnew", adminValnew);
                    var businessName = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessName;
                    kony.store.setItem("loginBusinessName", businessName);
                    var ACNNumber = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].acnNumber;
                    var busImgPath = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.imagePath;
                    var businessAddress = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].address1;
                    var numberofBusinessOwners = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].numberOfIndigenousOwners;
                    var numberOfEmployees = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].numberOfEmployees;
                    var percentageOfBusinessOwnership = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].percentOfIndigenousOwnership;
                    var percentageOfEmployment = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].percentIndigenousEmployment;
                    var businessSector = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].sector;
                    var professionalAffiliations = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].affiliations;
                    var aboutCompany = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].indigenousBusinessesCol;
                    var businessReach = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].business_reach;
                    // alert(businessReach);
                    var businessActivity = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].sector;
                    var skills = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].skills;
                    var city = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].city;
                    var hours = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].hours;
                    var opportunities = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].opportunities;
                    var notForProfit = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].notForProfit;
                    var noExperience = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].noExperience;
                    var private = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].privatee;
                    var governmentExperience = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].governmentExperience;
                    var businessContactNumber = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].phoneNumber;
                    var busEmail = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.userName;
                    kony.store.setItem("loginEmail", busEmail);
                    kony.store.setItem("BusinessEmailId", busEmail);
                    if (null != busImgPath && busImgPath != "null") {
                        var imgUrl = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + busImgPath;
                        kony.store.setItem("imgUrlBusiness", imgUrl);
                    } else {
                        //businessMyProfile.businessMyProfileHeader.businessMyProfileHeaderPic.src="C:\Users\mamata.patil\KonyVizEWS\JumpStartAbort1\resources\common\supplynationlogo.png";
                        kony.store.setItem("imgUrlBusiness", "imgseglogo.png");
                    }
                    //var deviceInfo =kony.os.deviceInfo();
                    if (ACNNumber === null || ACNNumber === "null") {
                        ACNNumber = " ";
                    }
                    if (businessAddress === null || businessAddress === "null") {
                        businessAddress = " ";
                    }
                    if (numberofBusinessOwners === null | numberofBusinessOwners === "null") {
                        numberofBusinessOwners = " ";
                    }
                    if (numberOfEmployees === null || numberOfEmployees === "null") {
                        numberOfEmployees = " ";
                    }
                    if (percentageOfBusinessOwnership === null || percentageOfBusinessOwnership === "null") {
                        percentageOfBusinessOwnership = " ";
                    }
                    if (percentageOfEmployment === null || percentageOfEmployment === "null") {
                        percentageOfEmployment = " ";
                    }
                    //alert(percentageOfEmployment);
                    if (businessSector === null || businessSector === "null") {
                        businessSector = " ";
                    }
                    if (professionalAffiliations === null || professionalAffiliations === "null") {
                        professionalAffiliations = " ";
                    }
                    if (aboutCompany === null || aboutCompany === "null") {
                        aboutCompany = " ";
                    }
                    if (businessActivity === null || businessActivity === "null") {
                        businessActivity = " ";
                    }
                    if (skills === null || skills === "null") {
                        skills = " ";
                    }
                    if (hours === null || hours === "null") hours = " ";
                    if (opportunities === null || opportunities === "null") opportunities = " ";
                    var imageurlPath = kony.store.getItem("imgUrlBusiness");
                    // alert("After All if conditions");
                    if (imageurlPath != null) {
                        //alert("haveimage"+imageurlPath);
                        BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.imgContainer.imgBusinessLogo.src = "";
                        BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.imgContainer.imgBusinessLogo.src = imageurlPath;
                    }
                    //alert("Data Is set");
                    //BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.lblCompanyName.text=businessName;
                    BusinessProfile.businessProfileContainer.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.lblCompanyName.text = businessName;
                    BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.companyAddressContainer.lblcompanyAddress.text = businessAddress;
                    BusinessProfile.businessProfileDetailsContainer.aboutCompanyContainer.AboutRichtext.text = aboutCompany;
                    BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.contactNumberContainer.phoneNumContainer.phoneNumRichText.text = businessContactNumber;
                    BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.emailContainer.emailIdContainer.emailIdRichText.text = busEmail;
                    BusinessProfile.businessProfileDetailsContainer.businessActivityContainer.BusinessActivityRichText.text = businessActivity;
                    BusinessProfile.businessProfileDetailsContainer.AffiliationContainer.affiliationRichText.text = professionalAffiliations;
                    BusinessProfile.businessProfileDetailsContainer.businessReachContainer.businessReachrichText.text = businessReach;
                    BusinessProfile.businessProfileDetailsContainer.LoginDetailsContainer.loginEmailIdContainer.lblLoggedInEmail.text = busEmail;
                    BusinessProfile.businessProfileContainer.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.lblCompanyName.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.companyAddressContainer.lblcompanyAddress.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.aboutCompanyContainer.AboutRichtext.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.contactNumberContainer.phoneNumContainer.phoneNumRichText.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.emailContainer.emailIdContainer.emailIdRichText.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.businessActivityContainer.BusinessActivityRichText.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.AffiliationContainer.affiliationRichText.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.businessReachContainer.businessReachrichText.setEnabled(false);
                    BusinessProfile.businessProfileDetailsContainer.LoginDetailsContainer.loginEmailIdContainer.setEnabled(false);
                    BusinessProfile.show();
                    kony.application.dismissLoadingScreen();
                    //start comment
                    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
                    mainPage.mainPageContentParent.myRecommendations.isVisible = true;
                    mainPage.mainPageBody.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible = true;
                    mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible = false;
                    mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible = true;
                    mainPage.unAssignedTasksContainer.isVisible = true;
                    //end comment
                    //  var DivInfo=kony.os.deviceInfo();
                    // //    //alert(DivInfo.name); 
                    // if(DivInfo.name==="iPhone")
                    // {
                    //      getPushNote();
                    //    }
                    //start again
                    var ksid = kony.store.getItem("KSID");
                    //alert("merin==="+ksid);
                    if ((ksid !== "null") && (ksid !== null) && (ksid !== "undefined") && (ksid !== undefined) && (ksid !== "")) {
                        // alert("beforeAttachKSIDService ");
                        AttachKSIDService();
                    }
                    //end again
                } //end of business 
                else {
                    //alert("inside else"+JSON.stringify(gblLoginData));
                    if (gblLoginData.LoginBusinessVolunteer[0]["isFirstLogin"] == "true") {
                        //show the pop up
                        //alert("showw");
                        gblemailVal = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].emailAddress;
                        login.validateCodeContainer.isVisible = true;
                        kony.application.dismissLoadingScreen();
                    } else {
                        //alert("inside else");
                        var valVolunteerId = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].volunteerId;
                        kony.store.setItem("volunteerId", valVolunteerId);
                        // kony.store.getItem("volunteerId"); 
                        ////skills start
                        var skillList = " ";
                        //console.log(JSON.stringify(res.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet));
                        for (var i = 0; i < gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet.length; i++) {
                            //skillList+=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName;
                            skillList = skillList + gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName + ",";
                        }
                        skillList = skillList.slice(0, -1);
                        ///skills end
                        var isBusOrVol = gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"];
                        kony.store.setItem("isBusOrVol", isBusOrVol);
                        var adminVal = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].adminCredential;
                        kony.store.setItem("adminVal", adminVal);
                        var adminValnew9 = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].acceptEmail;
                        kony.store.setItem("adminValnew", adminValnew9);
                        var firstName = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].firstName;
                        kony.store.setItem("volLoginName", firstName);
                        var lastName = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].lastName;
                        var companyName = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].companyName;
                        var role = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].role;
                        //var skillSet=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet;
                        var aboutMe = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].aboutMe;
                        var workDetails = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].workDetails;
                        // var businessUnit=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].businessUnit;
                        var state = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].state;
                        var emailAddress = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].emailAddress;
                        kony.store.setItem("loginEmail", emailAddress);
                        //  alert(JSON.stringify(gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule));
                        var schedule = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days;
                        var availId = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.availabilityId;
                        kony.store.setItem("availId", availId);
                        kony.store.setItem("schedule", schedule);
                        //salma start
                        var daySelectedNew = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days;
                        var fromTimeNew = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.fromTime;
                        var toTimeNew = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.toTime;
                        var scheduleValNew = daySelectedNew + " " + fromTimeNew + " TO " + toTimeNew;
                        for (var s = 0; s < gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule.length; s++) {
                            if (s === 0) {
                                scheduleValNew = scheduleValNew + "\n"; //+""+daySelected+" "+fromTime+" TO "+toTime;
                                //alert("sal1"+scheduleVal);
                                kony.store.setItem("scheduleValNew", scheduleValNew);
                            } else {
                                scheduleValNew = scheduleValNew + gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[s].VolunteerScheduleDTO.days + " " + gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[s].VolunteerScheduleDTO.fromTime + " TO " + gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[s].VolunteerScheduleDTO.toTime + "\n";
                                kony.store.setItem("scheduleValNew", scheduleValNew);
                                //alert("sal2"+scheduleVal);
                            }
                        }
                        //salma end
                        var pathVal = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].imagePath;
                        if (null != pathVal && pathVal != "null") {
                            var VolimgUrl = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + pathVal;
                            kony.store.setItem("imgUrlVal", VolimgUrl);
                        } else {
                            kony.store.setItem("imgUrlVal", "imgseglogo.png");
                        }
                        var VolimageurlPath = kony.store.getItem("imgUrlVal");
                        if (VolimageurlPath != null) {
                            //                      //alert("haveimage"+imageurlPath);
                            // businessMyProfile.businessMyProfileHeader.businessMyProfileHeaderPic.src = VolimageurlPath;
                            volunteerMyProfilePage.volunteerMyProfileHeader.volunteerMyProfilePic.src = VolimageurlPath;
                        }
                        kony.store.setItem("schedule", schedule);
                        ///start merin
                        ///start merin
                        var arr = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days.split(" ");
                        //alert("arr"+JSON.stringify(arr));
                        for (var k = 0; k < arr.length; k++) {
                            switch (arr[k]) {
                                case "MON":
                                    {
                                        // volunteerMyProfilePage.volunteerMyProfileMondayButton.skin="jumpStartGreenButton90";
                                        break;
                                    }
                                case "TUE":
                                    {
                                        //volunteerMyProfilePage.volunteerMyProfileTuesdayButton.skin="jumpStartGreenButton90";
                                        break;
                                    }
                                case "WED":
                                    {
                                        //volunteerMyProfilePage.volunteerMyProfileWednesdayButton.skin="jumpStartGreenButton90";
                                        break;
                                    }
                                case "THU":
                                    {
                                        //volunteerMyProfilePage.volunteerMyProfileThursdayButton.skin="jumpStartGreenButton90";
                                        break;
                                    }
                                case "FRI":
                                    {
                                        //volunteerMyProfilePage.volunteerMyProfileFridayButton.skin="jumpStartGreenButton90";
                                        break;
                                    }
                                case "SAT":
                                    {
                                        //volunteerMyProfilePage.volunteerMyProfileSaturdayButton.skin="jumpStartGreenButton90";
                                        break;
                                        break;
                                    }
                                case "SUN":
                                    {
                                        //volunteerMyProfilePage.volunteerMyProfileSundayButton.skin="jumpStartGreenButton90";
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
                        // volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.masterData=mArr;
                        // volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKey=fromTime;//fromTime;
                        // volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKeyValue=["fromTime",fromTime] ;
                        var mArrMer = [
                            ["fromTimeMeridian", fromTimeMeridian]
                        ];
                        //  volunteerMyProfilePage.volunteerMyProfileFromMeridiem.masterData=mArrMer;
                        /// volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKey=fromTimeMeridian;//fromTime;
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
                        // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.masterData=mArr1;
                        // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey=toTime;//fromTime;
                        // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKeyValue=["toTime",toTime] ;
                        var mArr1Mer = [
                            ["toTimeMeridian", toTimeMeridian]
                        ];
                        // volunteerMyProfilePage.volunteerMyProfileToMeridiem.masterData=mArr1Mer;
                        //  volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKey=toTimeMeridian;//fromTime;
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
                        //var usersUserTypeId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].usersUserTypeId;   
                        kony.store.setItem("userId", userId);
                        var usersUserTypeId = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].usersUserTypeId;
                        if (businessUnit === null || businessUnit === "null") {
                            businessUnit = " ";
                        }
                        mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.isVisible = false;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileFirstNameInput.text = firstName;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileLastNameInput.text = lastName;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileUsernameInput.text = userName;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfilePasswordInput.text = password;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileReenterPasswordInput.text = password;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text = " "; //workDetails;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text = " "; //aboutMe;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.text = companyName;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileRoleInput.text = role;
                        volunteerMyProfilePage.volunteerMyProfileBody.regBusinessUnitInput.text = businessUnit;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileStateInput.text = state;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAddressInput.text = address;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileContactNumberInput.text = contactNumber;
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileEmailAddressInput.text = emailAddress; //" ";//emailAddress;
                        //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillListContainer.volunteerMyProfileSkillsList.volunteerMyProfileSkillInputField.text=skillList;
                        //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileTimeContainer.fromTimeContainer.lblFrom.text=fromTime;
                        //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileTimeContainer.toTimeContainer.lblTo.text=toTime;
                        //start skill
                        var skillSegmentData = [];
                        for (var i = 0; i < gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet.length; i++) {
                            var skillObj = {
                                "volunteerMyProfileSkillItem": gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName,
                                "skillIdHidden": gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillId
                            };
                            skillSegmentData.push(skillObj);
                        }
                        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillTags.volunteerMyProfileSkillSegment.setData(skillSegmentData);
                        //end skill
                        //       volunteerMyProfilePage.show();
                        //         volunteerMyProfilePage.volunteerMyProfileFooter.isVisible=true;
                        //   volunteerMyProfilePage.volunteerMyProfileFooter2Buttons.isVisible=false;
                        gblForRetreive = gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0];
                        //mainPage.show(); 
                        //frmPush.show();
                        //Start Push
                        var DivInfo = kony.os.deviceInfo();
                        //alert(DivInfo.name); 
                        //if(DivInfo.name==="iPhone")
                        //{
                        // getPushNote();
                        var ksid = kony.store.getItem("KSID");
                        //  alert(ksid);
                        if ((ksid !== "null") && (ksid !== null) && (ksid !== "undefined") && (ksid !== undefined) && (ksid !== "")) {
                            //          alert("Calling Attach Function"+ksid);
                            AttachKSIDService();
                        } else {
                            mainPage.show();
                        }
                        //} 
                        //       //end push     
                    }
                }
            }
            // }
            else {
                alert("Invalid credentials");
                kony.application.dismissLoadingScreen();
            }
        }
    } catch (e) {
        alert("the issue is " + e);
        kony.application.dismissLoadingScreen();
    }
    // alert("here");
}

function getLoginErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Network Error Please try again. " + JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}