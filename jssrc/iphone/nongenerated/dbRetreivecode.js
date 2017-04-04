//Type your code here
function populateUpdatePage() {
    try {
        // mainPage.destroy();
        //alert("1"+JSON.stringify(gblForRetreive));
        var valVolunteerId = gblForRetreive.volunteerId;
        kony.store.setItem("volunteerId", valVolunteerId);
        var skillList = " ";
        //console.log(JSON.stringify(res.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet));
        for (var i = 0; i < gblForRetreive.skillSet.length; i++) {
            //skillList+=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName;
            skillList = skillList + gblForRetreive.skillSet[i].SkillsDTO.skillName + ",";
        } //end for
        skillList = skillList.slice(0, -1);
        ///skills end
        //var isBusOrVol=gblForRetreive["businessOrVolunteer"];
        //kony.store.setItem("isBusOrVol",isBusOrVol);
        var firstName = gblForRetreive.firstName;
        kony.store.setItem("volLoginName", firstName);
        //alert("2");
        var lastName = gblForRetreive.lastName;
        var companyName = gblForRetreive.companyName;
        var role = gblForRetreive.role;
        //var skillSet=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet;
        var aboutMe = gblForRetreive.aboutMe;
        var workDetails = gblForRetreive.workDetails;
        // var businessUnit=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].businessUnit;
        var state = gblForRetreive.state;
        var emailAddress = gblForRetreive.emailAddress;
        var scheduleComplete = gblForRetreive.schedule;
        // alert(JSON.stringify(scheduleComplete));
        //start
        var localArr = [];
        volunteerUpdateObject.scheduleArray = [];
        volunteerMyProfilePage.segUpdateSchedule.widgetDataMap = {
            "lblSchedule": "lblSchedule",
            "imgclose": "imgclose",
            "availId": "availId"
        }
        for (var i = 0; i < scheduleComplete.length; i++) {
            var scheduleVal = scheduleComplete[i].VolunteerScheduleDTO.days + " " + scheduleComplete[i].VolunteerScheduleDTO.fromTime + " TO " + scheduleComplete[i].VolunteerScheduleDTO.toTime;
            var availId = scheduleComplete[i].VolunteerScheduleDTO.availabilityId;
            var testObj = {
                lblSchedule: scheduleVal,
                imgclose: "cross.png",
                availId: availId
            }
            localArr.push(testObj);
        }
        volunteerMyProfilePage.segUpdateSchedule.setData(localArr);
        // volunteerUpdateObject.scheduleArray=localArr;
        for (var i = 0; i < localArr.length; i++) {
            volunteerUpdateObject.scheduleArray.push(localArr[i]);
        }
        //  alert("arrayyyyy"+JSON.stringify(volunteerUpdateObject.scheduleArray));
        //start convert to form
        var scheduleArr = [];
        for (var i = 0; i < volunteerUpdateObject.scheduleArray.length; i++) {
            //start
            var str = volunteerUpdateObject.scheduleArray[i].lblSchedule;
            var arr = str.split(" ");
            // alert(JSON.stringify(arr));
            var days = arr[0];
            var fromTime = arr[1] + " " + arr[2];
            var toTime = arr[4] + " " + arr[5];
            //end
            var testObj = {
                "availabilityId": volunteerUpdateObject.scheduleArray[i].availId,
                "days": days,
                "fromTime": fromTime,
                "toTime": toTime
            }
            scheduleArr.push(testObj);
        }
        gblscheduleArr = scheduleArr;
        scheduleArr = [];
        //end convert to form
        //end
        var schedule = gblForRetreive.schedule[0].VolunteerScheduleDTO.days;
        var availId = gblForRetreive.schedule[0].VolunteerScheduleDTO.availabilityId;
        kony.store.setItem("availId", availId);
        // alert("3");
        kony.store.setItem("schedule", schedule);
        //  alert("4"+pathVal);
        var pathVal = gblForRetreive.users[0].imagePath;
        //alert("4"+pathVal);
        if (pathVal != null && pathVal != "null") {
            var VolimgUrl = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + pathVal;
            kony.store.setItem("imgUrlVal", VolimgUrl);
            // alert("5");
        } else {
            kony.store.setItem("imgUrlVal", "imgseglogo.png");
            // alert("6");
        }
        var VolimageurlPath = kony.store.getItem("imgUrlVal");
        if (VolimageurlPath != null) {
            volunteerMyProfilePage.volunteerMyProfileHeader.volunteerMyProfilePic.src = VolimageurlPath;
        }
        kony.store.setItem("schedule", schedule);
        //  alert("7");
        var arr = gblForRetreive.schedule[0].VolunteerScheduleDTO.days.split(" ");
        //alert("arr"+JSON.stringify(arr));
        for (var k = 0; k < arr.length; k++) {
            switch (arr[k]) {
                case "MON":
                    {
                        // volunteerMyProfilePage.volunteerMyProfileMondayButton.skin="jumpStartGreenButton90";
                        volunteerUpdateObject.availability.mon = true;
                        break;
                    }
                case "TUE":
                    {
                        //volunteerMyProfilePage.volunteerMyProfileTuesdayButton.skin="jumpStartGreenButton90";
                        volunteerUpdateObject.availability.tue = true;
                        break;
                    }
                case "WED":
                    {
                        //volunteerMyProfilePage.volunteerMyProfileWednesdayButton.skin="jumpStartGreenButton90";
                        volunteerUpdateObject.availability.wed = true;
                        break;
                    }
                case "THU":
                    {
                        //volunteerMyProfilePage.volunteerMyProfileThursdayButton.skin="jumpStartGreenButton90";
                        volunteerUpdateObject.availability.thu = true;
                        break;
                    }
                case "FRI":
                    {
                        //volunteerMyProfilePage.volunteerMyProfileFridayButton.skin="jumpStartGreenButton90";
                        volunteerUpdateObject.availability.fri = true;
                        break;
                    }
                case "SAT":
                    {
                        //volunteerMyProfilePage.volunteerMyProfileSaturdayButton.skin="jumpStartGreenButton90";
                        volunteerUpdateObject.availability.sat = true;
                        break;
                    }
                case "SUN":
                    {
                        //volunteerMyProfilePage.volunteerMyProfileSundayButton.skin="jumpStartGreenButton90";
                        volunteerUpdateObject.availability.sun = true;
                        break;
                    }
            }
        }
        var fromTimeFull = gblForRetreive.schedule[0].VolunteerScheduleDTO.fromTime;
        kony.store.setItem("fromTimeFull", fromTimeFull);
        // alert("8");
        var fromTimeSplitted = fromTimeFull.split(" ");
        var fromTime = fromTimeSplitted[0];
        var fromTimeMeridian = fromTimeSplitted[1];
        var mArr = [
            ["fromTime", fromTime]
        ];
        //volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKey=fromTime;//fromTime;
        var mArrMer = [
            ["fromTimeMeridian", fromTimeMeridian]
        ];
        // volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKey=fromTimeMeridian;//fromTime;
        var toTimeFull = gblForRetreive.schedule[0].VolunteerScheduleDTO.toTime;
        kony.store.setItem("toTimeFull", toTimeFull);
        // alert("9");
        var toTimeSplitted = toTimeFull.split(" ");
        var toTime = toTimeSplitted[0];
        var toTimeMeridian = toTimeSplitted[1];
        var mArr1 = [
            ["toTime", toTime]
        ];
        //volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey=toTime;//fromTime;
        var mArr1Mer = [
            ["toTimeMeridian", toTimeMeridian]
        ];
        // volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKey=toTimeMeridian;//fromTime;
        var address = gblForRetreive.address;
        var level = gblForRetreive.level;
        var longitude = gblForRetreive.longitude;
        var latitude = gblForRetreive.latitude;
        var contactNumber = gblForRetreive.contactNumber;
        var volunteerTaskId = gblForRetreive.volunteerTaskId;
        var businessUnit = gblForRetreive.businessUnit;
        var userName = gblForRetreive.users[0].userName;
        var password = gblForRetreive.users[0].password;
        var userId = gblForRetreive.users[0].userId;
        //var usersUserTypeId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].usersUserTypeId;   
        kony.store.setItem("userId", userId);
        // alert("10");
        var usersUserTypeId = gblForRetreive.users[0].usersUserTypeId;
        if (businessUnit === null || businessUnit === "null") {
            businessUnit = " ";
        }
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileFirstNameInput.text = firstName;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileLastNameInput.text = lastName;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileUsernameInput.text = userName;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileUsernameInput.setEnabled(false);
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfilePasswordInput.text = password;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileReenterPasswordInput.text = password;
        //Begin of Defect D037
        /* Peter's Code
        if((workDetails!=null)&&(workDetails!="null"))
        {
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text= workDetails;
        }else
        {
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text= "";//workDetails;
        }
        if((aboutMe!=null)&&(aboutMe!="null"))
        {
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text= aboutMe;

        }else
        {
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text= "";//aboutMe;
        }
        */
        //Carl Cheng's code
        if (workDetails === null) {
            workDetails = "";
        }
        if (aboutMe === null) {
            aboutMe = "";
        }
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text = workDetails;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text = aboutMe;
        //End of Defect D037
        //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.text= companyName;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.selectedKey = companyName;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileRoleInput.text = role;
        volunteerMyProfilePage.volunteerMyProfileBody.regBusinessUnitInput.text = businessUnit;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileStateInput.selectedKey = state;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAddressInput.text = address;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileContactNumberInput.text = contactNumber;
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileEmailAddressInput.text = emailAddress; //" ";//emailAddress;
        var skillSegmentData = [];
        for (var i = 0; i < gblForRetreive.skillSet.length; i++) {
            var skillObj = {
                "volunteerMyProfileSkillItem": gblForRetreive.skillSet[i].SkillsDTO.skillName,
                "skillIdHidden": gblForRetreive.skillSet[i].SkillsDTO.skillId,
                "imgClose": "cross.png"
            };
            skillSegmentData.push(skillObj);
        }
        volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillTags.volunteerMyProfileSkillSegment.setData(skillSegmentData);
        volunteerUpdateObject = {
            firstName: firstName,
            lastName: lastName,
            username: userName,
            password: password,
            reenteredPassword: password,
            workDetails: workDetails,
            aboutMe: aboutMe,
            companyName: companyName,
            role: role,
            businessUnit: businessUnit,
            state: state,
            address: address,
            contactNumber: contactNumber,
            emailAddress: emailAddress,
            skillsArray: gblForRetreive.skillSet,
            scheduleArray: volunteerUpdateObject.scheduleArray,
            availability: {
                mon: volunteerUpdateObject.availability.mon,
                tue: volunteerUpdateObject.availability.tue,
                wed: volunteerUpdateObject.availability.wed,
                thu: volunteerUpdateObject.availability.thu,
                fri: volunteerUpdateObject.availability.fri,
                sat: volunteerUpdateObject.availability.sat,
                sun: volunteerUpdateObject.availability.sun,
                startTime: fromTime,
                startMeridiem: fromTimeMeridian,
                endTime: toTime,
                endMeridiem: toTimeMeridian
            }
        };
    } catch (e) {
        alert("the issue is " + e);
        kony.application.dismissLoadingScreen();
    }
    //end big
}

function loginServiceUpdate() {
    kony.application.showLoadingScreen(null, "loading", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        shouldShowLabelInBottom: "true",
        separatorHeight: 200
    });
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
        initializeMobileFabricForLoginUpdate();
    } else if (mobileFabricConfigurationForLogin.isKonySDKObjectInitialized) {
        getLoginUpdate();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForLoginUpdate() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    //getLoginSuccessCallback(gblLoginData);
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForLogin.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForLogin.konysdkObject.init(mobileFabricConfigurationForLogin.appKey, mobileFabricConfigurationForLogin.appSecret, mobileFabricConfigurationForLogin.serviceURL, initializeMobileFabricLoginSuccessUpdate, initializeMobileFabricLoginFailureUpdate);
        //alert("hi");
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricLoginSuccessUpdate(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //     alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForLogin.isKonySDKObjectInitialized = true;
    // kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getLoginUpdate();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricLoginFailureUpdate(error) {
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

function getLoginUpdate() {
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
        mobileFabricConfigurationForLogin.integrationObj.invokeOperation(operationName, headers, dataLogin, getLoginSuccessCallbackUpdate, getLoginErrorCallbackUpdate);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getLoginSuccessCallbackUpdate(gblLoginData) {
    try {
        // alert("inside success"+JSON.stringify(gblLoginData));
        if (gblLoginData != "undefined" && gblLoginData != undefined) {
            if ((gblLoginData.LoginBusinessVolunteer[0]["result"] == "true")) {
                if ((gblLoginData.LoginBusinessVolunteer[0]["result"] == "true") && (gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"] == "business")) {} //end of business 
                else {
                    gblForRetreive = gblLoginData;
                    populateUpdatePage();
                }
            } else {
                alert("Invalid credentials");
            }
        }
        kony.application.dismissLoadingScreen();
    } catch (e) {
        alert("the issue is " + e);
        kony.application.dismissLoadingScreen();
    }
}

function getLoginErrorCallbackUpdate(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Network Error Please try again. " + JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}