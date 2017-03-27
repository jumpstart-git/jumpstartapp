//Type your code here
mobileFabricConfigurationForVolunteerRequestVolunteer = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "VolunteerRequestVolunteer",
        operations: ["RequestByBusiness"]
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
function requestVolunteerByBusiness1() {
    //gblVolunteerId=volunteerID.widgetInfo.data[0].volunteerId;
    // alert("the selected"+JSON.stringify(gblVolunteerId));
    if (!mobileFabricConfigurationForVolunteerRequestVolunteer.isKonySDKObjectInitialized) {
        initializeMobileFabricRequestVolunteerByBusiness();
    } else if (mobileFabricConfigurationForVolunteerRequestVolunteer.isKonySDKObjectInitialized) {
        requestVolunteerByBusiness();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricRequestVolunteerByBusiness() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerRequestVolunteer.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolunteerRequestVolunteer.konysdkObject.init(mobileFabricConfigurationForVolunteerRequestVolunteer.appKey, mobileFabricConfigurationForVolunteerRequestVolunteer.appSecret, mobileFabricConfigurationForVolunteerRequestVolunteer.serviceURL, initializeMobileFabricRequestVolunteerByBusinessSuccess, initializeMobileFabricByBusinessRequestVolunteerFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricRequestVolunteerByBusinessSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //       alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerRequestVolunteer.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    requestVolunteerByBusiness();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricByBusinessRequestVolunteerFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //   alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //       alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForVolunteerRequestVolunteer.authClient = mobileFabricConfigurationForVolunteerRequestVolunteer.konysdkObject.getIdentityService(mobileFabricConfigurationForVolunteerRequestVolunteer.identityServices[0].service);
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

function requestVolunteerByBusiness() {
    try {
        //   alert("inside requestToVolunteer");
        //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
            mobileFabricConfigurationForVolunteerRequestVolunteer.integrationObj = mobileFabricConfigurationForVolunteerRequestVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerRequestVolunteer.integrationServices[0].service);
            var operationName = mobileFabricConfigurationForVolunteerRequestVolunteer.integrationServices[0].operations[0];
            var headers = {};
            //  alert("operation name"+operationName);
            var dataRequestToVolunteer = {};
            //dataRequestToVolunteer["requestID"]=login.usernameField.text;
            if (kony.store.getItem("isBusOrVol") == "business") {
                //  alert("yes logged in as business");
                dataRequestToVolunteer["volunteerId"] = kony.store.getItem("selReqId");
                dataRequestToVolunteer["businessId"] = kony.store.getItem("businessId");
                // dataRequestToVolunteer["message"]=searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;//"Hekko from App";//searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
                dataRequestToVolunteer["message"] = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerMessageInput.text;
            } else {
                //    alert("yes logged in as volunteer");
                dataRequestToVolunteer["volunteerId"] = kony.store.getItem("volunteerId");
                dataRequestToVolunteer["businessId"] = kony.store.getItem("selReqId");
                //dataRequestToVolunteer["message"]=searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.requestVolunteerInfo.text;
                dataRequestToVolunteer["message"] = searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.requestToVolunteerBody.requestRoleInput.text;
                //"Hekko from App";//searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
            }
            //var data={"userName":login.usernameField.text,
            //"password":login.passwordField.text};
            // dataLogin={userName:"volunteerFirst",password:"Password"};
            //  alert("dataRequestToVolunteer"+JSON.stringify(dataRequestToVolunteer));
            mobileFabricConfigurationForVolunteerRequestVolunteer.integrationObj.invokeOperation(operationName, headers, dataRequestToVolunteer, postVolunteerRequestSuccessCallback1, postVolunteerRequestErrorCallback1);
        } else alert("Network unavailable. Please check your network settings. ");
    } catch (e) {
        alert("theeee===" + e);
    }
}

function postVolunteerRequestSuccessCallback1(dataRequestToVolunteer) {
    //  alert("inside success"+JSON.stringify(dataRequestToVolunteer));
    if (dataRequestToVolunteer != "undefined" && dataRequestToVolunteer != undefined) {
        //alert("InSide"+JSON.stringify(dataRequestToVolunteer));
        searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.isVisible = false;
        searchPage.show();
        // mainPage.show();
    }
}

function postVolunteerRequestErrorCallback1(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
    searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.isVisible = false;
    searchPage.show();
}