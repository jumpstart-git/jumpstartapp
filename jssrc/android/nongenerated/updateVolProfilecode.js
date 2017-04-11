var volunteerUpdateObject = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    reenteredPassword: "",
    workDetails: "",
    aboutMe: "",
    companyName: "",
    role: "",
    businessUnit: "",
    state: "",
    address: "",
    contactNumber: "",
    emailAddress: "",
    skillsArray: [],
    scheduleArray: [],
    availability: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
        startTime: "9:00",
        startMeridiem: "AM",
        endTime: "10:00",
        endMeridiem: "AM"
    }
};
volunteerUpdateObject.scheduleArray = [];

function validateAvailabilityUpdate() {
    //start
    /*

    if(volunteerMyProfilePage.volunteerMyProfileMondayButton.skin=="jumpStartGrayButton90")
            {
              volunteerRegObjectVol.availability.mon=false;
              volunteerUpdateObject.availability.mon=false;
            }else
              {
                
                 volunteerRegObjectVol.availability.mon=true;
                volunteerUpdateObject.availability.mon=true;
              }
                     if(volunteerMyProfilePage.volunteerMyProfileTuesdayButton.skin=="jumpStartGrayButton90")
            {
              volunteerRegObjectVol.availability.tue=false;
              volunteerUpdateObject.availability.tue=false;
            }else
              {
                
                 volunteerRegObjectVol.availability.tue=true;
                volunteerUpdateObject.availability.tue=true;
              }
                     if(volunteerMyProfilePage.volunteerMyProfileWednesdayButton.skin=="jumpStartGrayButton90")
            {
              volunteerRegObjectVol.availability.wed=false;
              volunteerUpdateObject.availability.wed=false;
            }else
              {
                
                 volunteerRegObjectVol.availability.wed=true;
                volunteerUpdateObject.availability.wed=true;
              }
                     if(volunteerMyProfilePage.volunteerMyProfileThursdayButton.skin=="jumpStartGrayButton90")
            {
              volunteerRegObjectVol.availability.thu=false;
              volunteerUpdateObject.availability.thu=false;
            }else
              {
                
                 volunteerRegObjectVol.availability.thu=true;
                 volunteerUpdateObject.availability.thu=true;
              }
                     if(volunteerMyProfilePage.volunteerMyProfileFridayButton.skin=="jumpStartGrayButton90")
            {
              volunteerRegObjectVol.availability.fri=false;
              volunteerUpdateObject.availability.fri=false;
            }else
              {
                
                 volunteerRegObjectVol.availability.fri=true;
                volunteerUpdateObject.availability.fri=true;
              }
                     if(volunteerMyProfilePage.volunteerMyProfileSaturdayButton.skin=="jumpStartGrayButton90")
            {
              volunteerRegObjectVol.availability.sat=false;
              volunteerUpdateObject.availability.sat=false;
            }else
              {
                
                 volunteerRegObjectVol.availability.sat=true;
                 volunteerUpdateObject.availability.sat=true;
              }
                     if(volunteerMyProfilePage.volunteerMyProfileSundayButton.skin=="jumpStartGrayButton90")
            {
              volunteerRegObjectVol.availability.sun=false;
              volunteerUpdateObject.availability.sun=false;
            }else
              {
                
                 volunteerRegObjectVol.availability.sun=true;
                 volunteerUpdateObject.availability.sun=true;
              }
    */
    ////end 
    // alert(JSON.stringify(volunteerUpdateObject));
    if (!volunteerUpdateObject.availability.mon && !volunteerUpdateObject.availability.tue && !volunteerUpdateObject.availability.wed && !volunteerUpdateObject.availability.thu && !volunteerUpdateObject.availability.fri && !volunteerUpdateObject.availability.sat && !volunteerUpdateObject.availability.sun) {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Please select a day",
            "yesLabel": "OK",
            "message": "At least one day of the week must be selected.",
            "alertHandler": null
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        return false;
    }
    return true;
}

function validateEmailUpdate() {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailFormat.test(volunteerUpdateObject.emailAddress)) {
        return false;
    }
    return true;
}

function validatePasswordEqualityUpdate() {
    if (volunteerUpdateObject.password != volunteerUpdateObject.reenteredPassword) {
        return false;
    }
    return true;
}

function validatePasswordUpdate() {
    var specialChars = /[^A-Za-z0-9]/; // Regexp for special characters
    var digits = /[0-9]+/; // Regexp for digits
    var capitalLetters = /[A-Z]+/; // Regexp for capital letters
    if (volunteerUpdateObject.password.length >= userValidation.passwordLength) {
        if (specialChars.test(volunteerUpdateObject.password)) {
            if (digits.test(volunteerUpdateObject.password)) {
                if (capitalLetters.test(volunteerUpdateObject.password)) {
                    return 5;
                } else {
                    return 4;
                }
            } else {
                return 3;
            }
        } else {
            return 2;
        }
    } else {
        return 1;
    }
}

function startLessThanEndUpdate() {
    var start = convertToMilTime(volunteerUpdateObject.availability.startTime, volunteerUpdateObject.availability.startMeridiem);
    var end = convertToMilTime(volunteerUpdateObject.availability.endTime, volunteerUpdateObject.availability.endMeridiem);
    if (start >= end) {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Incorrect Time",
            "yesLabel": "OK",
            "message": "Start time must be less than end time.",
            "alertHandler": null
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
        return false;
    }
    return true;
}

function validateVolunteerHoursUpdate() {
    // alert("inisde time"+JSON.stringify(volunteerUpdateObject));
    var start = convertToMilTime(volunteerUpdateObject.availability.startTime, volunteerUpdateObject.availability.startMeridiem);
    var end = convertToMilTime(volunteerUpdateObject.availability.endTime, volunteerUpdateObject.availability.endMeridiem);
    if (start >= 900 && end <= 1700) {
        return true;
    } else {
        //registrationSchedulePage.regScheduleOutsideHoursModal.isVisible = true;
        // volunteerMyProfilePage.CopyregScheduleOutsideHoursModal06197f3b8e5ec45.isVisible=true;
        volunteerMyProfilePage.outsidemodal.isVisible = true;
        // alert("outside");
        return false;
    }
}

function submitUpdateInfo() {
    var isUpdateInfoComplete = validateUpdateInfo();
    if (!isUpdateInfoComplete) {
        if (!volunteerUpdateObject.firstName) {
            validationAlert("Action Required", "Please Enter First Name*");
            return false;
        }
        if (!volunteerUpdateObject.lastName) {
            validationAlert("Action Required", "Please Enter Last Name*");
            return false;
        } else if (!volunteerUpdateObject.username) {
            validationAlert("Action Required", "Please Enter User Name*");
            return false;
        } else if (!volunteerUpdateObject.companyName) {
            validationAlert("Action Required", "Please Enter Company Name*");
            return false;
        } else if (!volunteerUpdateObject.role) {
            validationAlert("Action Required", "Please Enter Role*");
            return false;
        } else if (!volunteerUpdateObject.businessUnit) {
            validationAlert("Action Required", "Please Enter Business Unit*");
            return false;
        } else if (!volunteerUpdateObject.state || volunteerUpdateObject.state === "") {
            validationAlert("Action Required", "Please Select State*");
            return false;
        } else if (!volunteerUpdateObject.address) {
            validationAlert("Action Required", "Please Enter Address*");
            return false;
        } else if (!volunteerUpdateObject.contactNumber) {
            validationAlert("Action Required", "Please Enter Contact Number*");
            return false;
        } else if (!volunteerUpdateObject.emailAddress) {
            validationAlert("Action Required", "Please Enter Email*");
            return false;
        }
        //  validationAlert("Action Required", "Please fill up all Mandatory Fields*"+JSON.stringify(volunteerUpdateObject));
        return false;
    }
    var hasSkillUpdate = volunteerMyProfilePage.volunteerMyProfileSkillSegment.data; //volunteerUpdateObject.skillsArray.length;
    if (!hasSkillUpdate) {
        validationAlert("Enter a Skill", "Please add at least 1 skill");
        return false;
    }
    var isValidEmail = validateEmailUpdate();
    if (!isValidEmail) {
        validationAlert("Email Address Error", "Email address entered is not valid format");
        return false;
    }
    var isEqualPassword = validatePasswordEqualityUpdate();
    if (!isEqualPassword) {
        validationAlert("Password Error", "Passwords entered are not equal");
        return false;
    }
    var isValidPassword = validatePasswordUpdate();
    if (isValidPassword == 1) {
        validationAlert("Password Error", "Passwords must have at least " + userValidation.passwordLength + " characters");
        return false;
    } else if (isValidPassword == 2) {
        validationAlert("Password Error", "Passwords must have at least 1 special character");
        return false;
    } else if (isValidPassword == 3) {
        validationAlert("Password Error", "Passwords must have at least 1 digit");
        return false;
    } else if (isValidPassword == 4) {
        validationAlert("Password Error", "Passwords must have at least 1 capital letter");
        return false;
    }
    //alert(gblscheduleArr.length); 
    if (gblscheduleArr.length == "0.0") {
        alert("enter atleast 1 schedule");
        return false;
    }
    if (isUpdateInfoComplete && hasSkillUpdate && isValidEmail && isEqualPassword && isValidPassword) {
        VollMyProfile();
    }
}

function validateUpdateInfo() {
    if (!volunteerUpdateObject.firstName) {
        return false;
    }
    if (!volunteerUpdateObject.lastName) {
        return false;
    }
    if (!volunteerUpdateObject.username) {
        return false;
    }
    if (!volunteerUpdateObject.companyName) {
        return false;
    }
    if (!volunteerUpdateObject.role) {
        return false;
    }
    if (!volunteerUpdateObject.businessUnit) {
        return false;
    }
    if (!volunteerUpdateObject.state || volunteerUpdateObject.state === "") {
        return false;
    }
    if (!volunteerUpdateObject.address) {
        return false;
    }
    if (!volunteerUpdateObject.contactNumber) {
        return false;
    }
    if (!volunteerUpdateObject.emailAddress) {
        return false;
    }
    return true;
}
mobileFabricConfigurationForMyProfileVol = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47",
    //appSecret:"c600a59925b36419de1546056cd21557",
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "updateVolService",
        operations: ["updateVolProfile"]
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
function VollMyProfile() {
    // alert("in");
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForMyProfileVol.isKonySDKObjectInitialized) {
        initializeMobileFabricForMyProfileVol();
    } else if (mobileFabricConfigurationForMyProfileVol.isKonySDKObjectInitialized) {
        saveVolunteerProfilew();
    }
}

function initializeMobileFabricForMyProfileVol() {
    // alert("in1");
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        //alert("yess");
        mobileFabricConfigurationForMyProfileVol.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForMyProfileVol.konysdkObject.init(mobileFabricConfigurationForMyProfileVol.appKey, mobileFabricConfigurationForMyProfileVol.appSecret, mobileFabricConfigurationForMyProfileVol.serviceURL, initializeMobileFabricForMyProfileVolSuccess, initializeMobileFabricForMyProfileVolFailure);
        // alert(getNotification());
    } else
    //alert ("Network unavailable. Please check your network settings. ");
        kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForMyProfileVolSuccess(response) {
    // alert("in2");        
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForMyProfileVol.isKonySDKObjectInitialized = true;
    // kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    saveVolunteerProfilew();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForMyProfileVolFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    // alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForMyProfileVol.authClient = mobileFabricConfigurationForMyProfileVol.konysdkObject.getIdentityService(mobileFabricConfigurationForMyProfileVol.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForMyProfileVol.identityServices[0].username,
        "password": mobileFabricConfigurationForMyProfileVol.identityServices[0].password
    };
    mobileFabricConfigurationForMyProfileVol.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    // alert (" ********** Entering into loginMFSuccess ********** ");
    // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForMyProfileVol.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
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

function saveVolunteerProfilew() {
    // alert("in33");
    // alert("inside saveVolunteerProfile"+kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY));
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        // alert("1");
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForMyProfileVol.integrationObj = mobileFabricConfigurationForMyProfileVol.konysdkObject.getIntegrationService(mobileFabricConfigurationForMyProfileVol.integrationServices[0].service);
        // alert("2");
        var operationName = mobileFabricConfigurationForMyProfileVol.integrationServices[0].operations[0];
        //  var headers= {"Content-Type":"application/json"};
        var headers = {};
        //  alert("operationName"+operationName);
        //start
        var dataforVolProfile = {};
        //  var schedule={};
        //schedule[0]
        //                   var schedule=[{"days":"30",
        //                                  "fromTime":"1454391000000",
        //                                  "toTime":"1454391000000"}];
        //                   var skillSet=[{"skillName":"Salma_java"}];
        ////start validation for update
        //submitUpdateInfo();
        //end validation for update
        // alert("Skills="+JSON.stringify(volunteerMyProfilePage.volunteerMyProfileSkillSegment.data));
        var arrData = [];
        var skillDatas = volunteerMyProfilePage.volunteerMyProfileSkillSegment.data;
        for (var i = 0; i < skillDatas.length; i++) {
            var testObj = {
                "skillId": skillDatas[i].skillIdHidden,
                "skillName": skillDatas[i].volunteerMyProfileSkillItem,
                "imgClose": "cross.png"
            }
            arrData.push(testObj);
        }
        ///days start
        /*
                  
        if(volunteerMyProfilePage.volunteerMyProfileMondayButton.skin=="jumpStartGrayButton90")
          {
            volunteerRegObjectVol.availability.mon=false;
            volunteerUpdateObject.availability.mon=false;
          }else
            {
              
               volunteerRegObjectVol.availability.mon=true;
              volunteerUpdateObject.availability.mon=true;
            }
                   if(volunteerMyProfilePage.volunteerMyProfileTuesdayButton.skin=="jumpStartGrayButton90")
          {
            volunteerRegObjectVol.availability.tue=false;
            volunteerUpdateObject.availability.tue=false;
          }else
            {
              
               volunteerRegObjectVol.availability.tue=true;
              volunteerUpdateObject.availability.tue=true;
            }
                   if(volunteerMyProfilePage.volunteerMyProfileWednesdayButton.skin=="jumpStartGrayButton90")
          {
            volunteerRegObjectVol.availability.wed=false;
            volunteerUpdateObject.availability.wed=false;
          }else
            {
              
               volunteerRegObjectVol.availability.wed=true;
              volunteerUpdateObject.availability.wed=true;
            }
                   if(volunteerMyProfilePage.volunteerMyProfileThursdayButton.skin=="jumpStartGrayButton90")
          {
            volunteerRegObjectVol.availability.thu=false;
            volunteerUpdateObject.availability.thu=false;
          }else
            {
              
               volunteerRegObjectVol.availability.thu=true;
               volunteerUpdateObject.availability.thu=true;
            }
                   if(volunteerMyProfilePage.volunteerMyProfileFridayButton.skin=="jumpStartGrayButton90")
          {
            volunteerRegObjectVol.availability.fri=false;
            volunteerUpdateObject.availability.fri=false;
          }else
            {
              
               volunteerRegObjectVol.availability.fri=true;
              volunteerUpdateObject.availability.fri=true;
            }
                   if(volunteerMyProfilePage.volunteerMyProfileSaturdayButton.skin=="jumpStartGrayButton90")
          {
            volunteerRegObjectVol.availability.sat=false;
            volunteerUpdateObject.availability.sat=false;
          }else
            {
              
               volunteerRegObjectVol.availability.sat=true;
               volunteerUpdateObject.availability.sat=true;
            }
                   if(volunteerMyProfilePage.volunteerMyProfileSundayButton.skin=="jumpStartGrayButton90")
          {
            volunteerRegObjectVol.availability.sun=false;
            volunteerUpdateObject.availability.sun=false;
          }else
            {
              
               volunteerRegObjectVol.availability.sun=true;
               volunteerUpdateObject.availability.sun=true;
            }   
               */
        var availabilityString = "";
        if (volunteerRegObjectVol.availability.mon) {
            availabilityString += "MON ";
        }
        if (volunteerRegObjectVol.availability.tue) {
            availabilityString += "TUE ";
        }
        if (volunteerRegObjectVol.availability.wed) {
            availabilityString += "WED ";
        }
        if (volunteerRegObjectVol.availability.thu) {
            availabilityString += "THU ";
        }
        if (volunteerRegObjectVol.availability.fri) {
            availabilityString += "FRI ";
        }
        if (volunteerRegObjectVol.availability.sat) {
            availabilityString += "SAT ";
        }
        if (volunteerRegObjectVol.availability.sun) {
            availabilityString += "SUN ";
        }
        gblDays = availabilityString;
        //days end
        ///start schedule
        var availableId = kony.store.getItem("availId");
        //alert(volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKey);
        if (availableId != null) {
            // var  frmT=volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKey+" "+volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKey;
            // var  toTime=volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey+" "+volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKey;
            //  var schedule =[{"availabilityId": availableId,  "days":gblDays,"fromTime":frmT,"toTime":toTime}];// [{"days":"Mon","fromTime":"9 AM","toTime":"10 "}];
        } else {
            //  var  frmT=volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKey+" "+volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKey;
            // var  toTime=volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey+" "+volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKey;
            // var schedule =[{"availabilityId": availableId,  "days":gblDays,"fromTime":frmT,"toTime":toTime}];// [{"days":"Mon","fromTime":"9 AM","toTime":"10 "}];
        }
        ///end schedule
        var skills = arrData; // [{ "skillId":"210", "skillName":"Salma_java"}];//[{"SkillsDTO":{"skillName":"Salma_javaMerin"}}]; 
        //start skilll
        //end skill
        // alert("in6666");
        dataforVolProfile["emailAddress"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileEmailAddressInput.text;
        dataforVolProfile["firstName"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileFirstNameInput.text;
        dataforVolProfile["lastName"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileLastNameInput.text;
        dataforVolProfile["address"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAddressInput.text;
        dataforVolProfile["contactNumber"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileContactNumberInput.text;
        dataforVolProfile["companyName"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.selectedKey;
        dataforVolProfile["role"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileRoleInput.text;
        dataforVolProfile["createdDate"] = "2016-10-26";
        //alert("in7");
        dataforVolProfile["VolunteerScheduleDTO"] = gblscheduleArr; // schedule;
        dataforVolProfile["SkillsDTO"] = skills; //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillListContainer.volunteerMyProfileSkillsList.volunteerMyProfileSkillInputField.text;
        //  alert("skill");
        dataforVolProfile["userName"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileUsernameInput.text;
        dataforVolProfile["password"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfilePasswordInput.text;
        dataforVolProfile["state"] = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileStateInput.selectedKey; //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileStateInput.text;
        // alert("in8");
        dataforVolProfile["volunteerId"] = kony.store.getItem("volunteerId");
        //alert("in9");
        dataforVolProfile["userId"] = kony.store.getItem("userId");
        //  alert("in10");
        dataforVolProfile["businessUnit"] = volunteerMyProfilePage.volunteerMyProfileBody.regBusinessUnitInput.text;
        //start feb 16
        var abotme = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text;
        if (abotme == null || abotme == "null" || abotme == "") {
            abotme = " ";
        }
        dataforVolProfile["aboutMe"] = abotme;
        var work = volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text;
        if (work == null || work == "null" || work == "") {
            work = " ";
        }
        dataforVolProfile["workDetails"] = work;
        //
        dataforVolProfile["file"] = kony.store.getItem("imageValUpdateVolunteer");
        dataforVolProfile["fileName"] = kony.store.getItem("imageFileNameValUpdateVolunteer");
        kony.print("dataprintwhole from textbox:" + JSON.stringify(dataforVolProfile));
        kony.print("dataprintFile from textbox:" + dataforVolProfile["file"]);
        kony.print("dataprintFilename from textbox:" + dataforVolProfile["fileName"]);
        // alert("data from textbox:"+JSON.stringify(dataforVolProfile));
        //  mainPage.show();
        mobileFabricConfigurationForMyProfileVol.integrationObj.invokeOperation(operationName, headers, dataforVolProfile, saveVolunteerProfileSuccessCallbackk, saveVolunteerProfileErrorCallbackk);
    } else alert("Network unavailable. Please check your network settings. ");
}

function saveVolunteerProfileSuccessCallbackk(dataforVolProfile16) {
    mobileFabricConfigurationForMyProfileVol.isKonySDKObjectInitialized = false;
    if (dataforVolProfile16 !== null && dataforVolProfile16.opstatus === 0) {
        // alert("profile got updated");
        //alert("inside success"+JSON.stringify(dataforVolProfile16));
        gblForRetreive = dataforVolProfile16.volunteerDto[0].VolunteersDTO[0];
        //start mer
        var pathVal = dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].users[0].imagePath;
        // alert("pathVal"+pathVal);
        if (pathVal != null && pathVal != "null") {
            // alert("in");
            var VolimgUrl = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + pathVal;
            kony.store.setItem("imgUrlVal", VolimgUrl);
            // alert("5");
        } else {
            kony.store.setItem("imgUrlVal", "imgseglogo.png");
            // alert("6");
        }
        //salma
        var len = dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule.length;
        //alert("len:"+len);
        var availabilitydays = dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days;
        //alert("availabilitydays:"+availabilitydays);
        var availableFrom = dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.fromTime;
        //alert("availableFrom:"+availableFrom);
        var availableTo = dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.toTime;
        //alert("availableTo:"+availableTo);
        var scheduleValNew = availabilitydays + " " + availableFrom + " TO " + availableTo;
        //alert("scheduleValNew:"+scheduleValNew);
        for (var z = 0; z < dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule.length; z++) {
            if (z === 0) {
                scheduleValNew = scheduleValNew + "\n"; //+""+daySelected+" "+fromTime+" TO "+toTime;
                //alert("sal1"+scheduleValNew);
                kony.store.setItem("scheduleValNew", scheduleValNew);
            } else {
                scheduleValNew = scheduleValNew + dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule[z].VolunteerScheduleDTO.days + " " + dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule[z].VolunteerScheduleDTO.fromTime + " TO " + dataforVolProfile16.volunteerDto[0].VolunteersDTO[0].schedule[z].VolunteerScheduleDTO.toTime + "\n";
                kony.store.setItem("scheduleValNew", scheduleValNew);
                //alert("sal2"+scheduleValNew);
            }
        }
        //salma
        mainPage.show();
        kony.store.removeItem("imageValUpdateVolunteer");
        kony.store.removeItem("imageFileNameValUpdateVolunteer");
        //en mer
        //kony.store.getItem("imgUrlVal");
        //mainPage.destroy();
        kony.application.dismissLoadingScreen();
        // hideSideBar();
        //volunteerMyProfilePage.destroy();
        //mainPage.sideBarOverlay.isVisible=false;
    }
}

function saveVolunteerProfileErrorCallbackk(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert("inside error callback:" + JSON.stringify(error));
    // alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}
///start updateiiii
function onRegFieldUpdateForUpdation(fieldEdited) {
    // alert("before edit"+JSON.stringify(volunteerUpdateObject));
    var fieldId = fieldEdited.id;
    var fieldContent = fieldEdited.text;
    switch (fieldId) {
        case "volunteerMyProfileFirstNameInput":
            volunteerUpdateObject.firstName = fieldContent;
            break;
        case "volunteerMyProfileLastNameInput":
            volunteerUpdateObject.lastName = fieldContent;
            break;
        case "volunteerMyProfileUsernameInput":
            volunteerUpdateObject.username = fieldContent;
            break;
        case "volunteerMyProfilePasswordInput":
            volunteerUpdateObject.password = fieldContent;
            break;
        case "volunteerMyProfileReenterPasswordInput":
            volunteerUpdateObject.reenteredPassword = fieldContent;
            break;
        case "volunteerMyProfileCompanyInput":
            // volunteerUpdateObject.companyName = fieldContent;
            volunteerUpdateObject.companyName = fieldEdited.selectedKey;
            if (volunteerUpdateObject.companyName == "Select") {
                volunteerUpdateObject.companyName = "";
            }
            break;
        case "volunteerMyProfileRoleInput":
            volunteerUpdateObject.role = fieldContent;
            break;
        case "regBusinessUnitInput":
            volunteerUpdateObject.businessUnit = fieldContent;
            break;
        case "volunteerMyProfileStateInput":
            volunteerUpdateObject.state = fieldEdited.selectedKey;
            if (volunteerUpdateObject.state == "Select") {
                volunteerUpdateObject.state = "";
            }
            break;
        case "volunteerMyProfileAddressInput":
            volunteerUpdateObject.address = fieldContent;
            break;
            //start merin dec20
        case "volunteerMyProfileWorkDetailsInput":
            volunteerUpdateObject.workDetails = fieldContent;
            break;
        case "volunteerMyProfileAboutMeInput":
            volunteerUpdateObject.aboutMe = fieldContent;
            break;
            //end merin dec20
        case "volunteerMyProfileContactNumberInput":
            volunteerUpdateObject.contactNumber = fieldContent;
            break;
        case "volunteerMyProfileEmailAddressInput":
            volunteerUpdateObject.emailAddress = fieldContent;
            break;
        case "volunteerMyProfileFromTimeDropdown":
            volunteerUpdateObject.availability.startTime = fieldEdited.selectedKey;
            break;
        case "volunteerMyProfileFromMeridiem":
            volunteerUpdateObject.availability.startMeridiem = fieldEdited.selectedKey;
            break;
        case "volunteerMyProfileToTimeDropdown":
            volunteerUpdateObject.availability.endTime = fieldEdited.selectedKey;
            break;
        case "volunteerMyProfileToMeridiem":
            volunteerUpdateObject.availability.endMeridiem = fieldEdited.selectedKey;
            break;
        default:
            break;
    }
}
/////end updateiiii
function hideOutsideHoursModalUpdate() {
    //registrationSchedulePage.regScheduleOutsideHoursModal.isVisible = false;
    volunteerMyProfilePage.outsidemodal.isVisible = false;
}

function hoursAgreeAndContinueUpdate() {
    hideOutsideHoursModalUpdate();
    var availId = "";
    var daySelected = volunteerMyProfilePage.listDays.selectedKey;
    var fromTime = volunteerMyProfilePage.listFromTime.selectedKey + " " + volunteerMyProfilePage.listFromTimeMeridiam.selectedKey;
    var toTime = volunteerMyProfilePage.listEndTime.selectedKey + " " + volunteerMyProfilePage.listEndTimeMeridiam.selectedKey;
    var scheduleVal = daySelected + " " + fromTime + " TO " + toTime;
    var testObj = {
            lblSchedule: scheduleVal,
            imgclose: "cross.png",
            availId: availId
        }
        //updateSummaryPageInfo();
        // registrationSummaryPage.show();
        //
        //VollMyProfile();
        // alert("okkkkkk");
        // mainPage.show();
        //start duplicate check
        // alert("for dup"+JSON.stringify(volunteerUpdateObject.scheduleArray));
    var indexOfSchedule = -1;
    if (scheduleVal) {
        for (var i = 0; i < volunteerUpdateObject.scheduleArray.length; i++) {
            if (volunteerUpdateObject.scheduleArray[i].lblSchedule == scheduleVal) {
                indexOfSchedule = 1;
                break;
            }
        }
        if (indexOfSchedule != -1) {
            alert("this schedule already exists");
            return false;
            //volunteerRegObject.scheduleArray.splice(indexOfSchedule, 1);
        }
    }
    //end duplicate check
    //alert("update array"+JSON.stringify(volunteerUpdateObject.scheduleArray));
    volunteerUpdateObject.scheduleArray.push(testObj);
    // alert("update array"+JSON.stringify(volunteerUpdateObject.scheduleArray));
    setSegScheduleForUpdate(volunteerUpdateObject.scheduleArray);
    // alert("after adding"+JSON.stringify( volunteerUpdateObject.scheduleArray));
    //code to reset
    volunteerMyProfilePage.listDays.selectedKey = "";
    volunteerMyProfilePage.listFromTime.selectedKey = "";
    volunteerMyProfilePage.listFromTimeMeridiam.selectedKey = "";
    volunteerMyProfilePage.listEndTime.selectedKey = "";
    volunteerMyProfilePage.listEndTimeMeridiam.selectedKey = "";
}