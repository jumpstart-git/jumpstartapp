mobileFabricConfigurationForIndigenousRequestVolunteer = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessRequestVolunteer",
        operations: ["RequestVolunteer"]
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
function requestVolunteer() {
    //gblVolunteerId=volunteerID.widgetInfo.data[0].volunteerId;
    // alert("the selected"+JSON.stringify(gblVolunteerId));
    if (!mobileFabricConfigurationForIndigenousRequestVolunteer.isKonySDKObjectInitialized) {
        initializeMobileFabricForIndegenoueRequestVolunteer();
    } else if (mobileFabricConfigurationForIndigenousRequestVolunteer.isKonySDKObjectInitialized) {
        businessRequestVolunteer();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForIndegenoueRequestVolunteer() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousRequestVolunteer.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForIndigenousRequestVolunteer.konysdkObject.init(mobileFabricConfigurationForIndigenousRequestVolunteer.appKey, mobileFabricConfigurationForIndigenousRequestVolunteer.appSecret, mobileFabricConfigurationForIndigenousRequestVolunteer.serviceURL, initializeMobileFabricForIndegenoueRequestVolunteerSuccess, initializeMobileFabricForIndegenoueRequestVolunteerFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForIndegenoueRequestVolunteerSuccess(response) {
    //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousRequestVolunteer.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    businessRequestVolunteer();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForIndegenoueRequestVolunteerFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //    alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForIndigenousRequestVolunteer.authClient = mobileFabricConfigurationForIndigenousRequestVolunteer.konysdkObject.getIdentityService(mobileFabricConfigurationForIndigenousRequestVolunteer.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForIndigenousRequestVolunteer.identityServices[0].username,
        "password": mobileFabricConfigurationForIndigenousRequestVolunteer.identityServices[0].password
    };
    mobileFabricConfigurationForIndigenousRequestVolunteer.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousRequestVolunteer.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    businessRequestVolunteer();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function businessRequestVolunteer() {
    //  alert("inside requestVolunteer");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousRequestVolunteer.integrationObj = mobileFabricConfigurationForIndigenousRequestVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForIndigenousRequestVolunteer.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForIndigenousRequestVolunteer.integrationServices[0].operations[0];
        var headers = {};
        //  alert("operation name"+operationName);
        var dataRequestVolunteer = {};
        //dataRequestVolunteer["requestID"]=login.usernameField.text;
        if (kony.store.getItem("isBusOrVol") == "business") {
            //alert("yes logged in as business");
            dataRequestVolunteer["volunteerId"] = kony.store.getItem("selReqId");
            dataRequestVolunteer["businessId"] = kony.store.getItem("businessId");
            dataRequestVolunteer["message"] = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text; //"Hekko from App";//searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        } else {
            // alert("yes logged in as volunteer");
            dataRequestVolunteer["volunteerId"] = kony.store.getItem("volunteerId");
            dataRequestVolunteer["businessId"] = kony.store.getItem("selReqId");
            dataRequestVolunteer["message"] = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text; //"Hekko from App";//searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        }
        //var data={"userName":login.usernameField.text,
        //"password":login.passwordField.text};
        // dataLogin={userName:"volunteerFirst",password:"Password"};
        // alert("dataRequestVolunteer"+JSON.stringify(dataRequestVolunteer));
        mobileFabricConfigurationForIndigenousRequestVolunteer.integrationObj.invokeOperation(operationName, headers, dataRequestVolunteer, postVolunteerRequestSuccessCallback, postVolunteerRequestErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function postVolunteerRequestSuccessCallback(dataRequestVolunteer) {
    // alert("inside success"+JSON.stringify(dataRequestVolunteer));
    if (dataRequestVolunteer != "undefined" && dataRequestVolunteer != undefined) {
        //alert("InSide"+JSON.stringify(dataRequestVolunteer));
    }
}

function postVolunteerRequestErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}