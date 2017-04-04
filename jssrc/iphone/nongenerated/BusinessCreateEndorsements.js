mobileFabricConfigurationForCreateEndorsements = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessSaveEndorsement",
        operations: ["saveEndorsement"]
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
function createEndorsements() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForCreateEndorsements.isKonySDKObjectInitialized) {
        initializeMobileFabricForCreateEndorsements();
    } else if (mobileFabricConfigurationForCreateEndorsements.isKonySDKObjectInitialized) {
        setCreateEndorsements();
    }
}

function initializeMobileFabricForCreateEndorsements() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForCreateEndorsements.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForCreateEndorsements.konysdkObject.init(mobileFabricConfigurationForCreateEndorsements.appKey, mobileFabricConfigurationForCreateEndorsements.appSecret, mobileFabricConfigurationForCreateEndorsements.serviceURL, initializeMobileFabricForCreateEndorsementsSuccess, initializeMobileFabricForCreateEndorsementsFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForCreateEndorsementsSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForCreateEndorsements.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setCreateEndorsements();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForCreateEndorsementsFailure(error) {
    // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForCreateEndorsements.authClient = mobileFabricConfigurationForCreateEndorsements.konysdkObject.getIdentityService(mobileFabricConfigurationForCreateEndorsements.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForCreateEndorsements.identityServices[0].username,
        "password": mobileFabricConfigurationForCreateEndorsements.identityServices[0].password
    };
    mobileFabricConfigurationForCreateEndorsements.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForCreateEndorsements.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setCreateEndorsements();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setCreateEndorsements() {
    //alert("inside TaskDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForCreateEndorsements.integrationObj = mobileFabricConfigurationForCreateEndorsements.konysdkObject.getIntegrationService(mobileFabricConfigurationForCreateEndorsements.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForCreateEndorsements.integrationServices[0].operations[0];
        var headers = {};
        //alert("operation name"+operationName);
        var endorseDetails = {};
        endorseDetails["businessId"] = kony.store.getItem("businessId");
        endorseDetails["volunteerId"] = kony.store.getItem("VolunteerIdForSkills");
        endorseDetails["taskId"] = kony.store.getItem("ClosedTaskId");
        endorseDetails["skill"] = kony.store.getItem("skillsOfSelectedVolunteers");
        var str = mainPage.BusinessEndorsementModalContainer.MessageContaioner.EndorsingMessageTextArea.text;
        if (str == null || str == "null" || str == "") {
            str = "  ";
            endorseDetails["message"] = "   ";
        } else {
            var modified = str.replace(/(\r\n|\n|\r)/gm, " ");
            endorseDetails["message"] = modified;
        }
        //alert(JSON.stringify(endorseDetails));
        mobileFabricConfigurationForCreateEndorsements.integrationObj.invokeOperation(operationName, headers, endorseDetails, getCreateEndorsementsSuccessCallback, getCreateEndorsementsErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getCreateEndorsementsSuccessCallback(endorseDetails) {
    //alert("inside success"+JSON.stringify(endorseDetails));
    if (endorseDetails != "undefined" && endorseDetails != undefined) {
        //alert("InSide"+JSON.stringify(endorseDetails));
    }
}

function getCreateEndorsementsErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    //alert (" Failed "+JSON.stringify(error));
    //kony.store.getItem("businessId");
    kony.store.removeItem("VolunteerIdForSkills");
    kony.store.removeItem("ClosedTaskId");
    kony.store.removeItem("skillsOfSelectedVolunteers");
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": null,
        "yesLabel": "OK",
        "noLabel": "No",
        "message": "Volunteer was successfully endorsed",
        "alertHandler": "null"
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    // alert("Volunteer was successfully endorsed");  
    mainPage.BusinessEndorsementModalGrayContainer.isVisible = false;
    mainPage.BusinessEndorsementModalContainer.MessageContaioner.EndorsingMessageTextArea.text = "";
    mainPage.BusinessEndorsementModalContainer.SkillsTextBoxContainer.AnotherSkillInputField.text = "";
    kony.application.dismissLoadingScreen();
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}