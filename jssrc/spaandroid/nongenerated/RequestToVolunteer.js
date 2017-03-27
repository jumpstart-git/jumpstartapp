mobileFabricConfigurationForIndigenousRequestToVolunteer = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "RequestToVolunteer",
        operations: ["postRequestToVolunteer"]
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
function RequestToVolunteer() {
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
    if (!mobileFabricConfigurationForIndigenousRequestToVolunteer.isKonySDKObjectInitialized) {
        initializeMobileFabricForIndegenoueRequestToVolunteer();
    } else if (mobileFabricConfigurationForIndigenousRequestToVolunteer.isKonySDKObjectInitialized) {
        getIndigenousRequestToVolunteer();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForIndegenoueRequestToVolunteer() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousRequestToVolunteer.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForIndigenousRequestToVolunteer.konysdkObject.init(mobileFabricConfigurationForIndigenousRequestToVolunteer.appKey, mobileFabricConfigurationForIndigenousRequestToVolunteer.appSecret, mobileFabricConfigurationForIndigenousRequestToVolunteer.serviceURL, initializeMobileFabricForIndegenoueRequestToVolunteerSuccess, initializeMobileFabricForIndegenoueRequestToVolunteerFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForIndegenoueRequestToVolunteerSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //   alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousRequestToVolunteer.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getLogin();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForIndegenoueRequestToVolunteerFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //    alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForIndigenousRequestToVolunteer.authClient = mobileFabricConfigurationForIndigenousRequestToVolunteer.konysdkObject.getIdentityService(mobileFabricConfigurationForIndigenousRequestToVolunteer.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForIndigenousRequestToVolunteer.identityServices[0].username,
        "password": mobileFabricConfigurationForIndigenousRequestToVolunteer.identityServices[0].password
    };
    mobileFabricConfigurationForIndigenousRequestToVolunteer.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousRequestToVolunteer.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getIndigenousRequestToVolunteer();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function RequestToVolunteer() {
    //  alert("inside RequestToVolunteer");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousRequestToVolunteer.integrationObj = mobileFabricConfigurationForIndigenousRequestToVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForIndigenousRequestToVolunteer.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForIndigenousRequestToVolunteer.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var dataRequestToVolunteer = {};
        //dataRequestToVolunteer["requesttoVolunteerID"]=login.usernameField.text;
        dataRequestToVolunteer["requsettoVolunteeerMessage"] = myProfile.volunteerRequestModalContainer.volunteerRequestModalTextArea.text;
        //   alert("dataRequestToVolunteer"+JSON.stringify(dataRequestToVolunteer));
        mobileFabricConfigurationForIndigenousRequestToVolunteer.integrationObj.invokeOperation(operationName, headers, dataLogin, getRequestToVolunteerSuccessCallback, getRequestTOVolunteerErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getRequestToVolunteerSuccessCallback(dataRequestToVolunteer) {
    // alert("inside success"+JSON.stringify(dataRequestToVolunteer));
    if (dataRequestToVolunteer != "undefined" && dataRequestToVolunteer != undefined) {
        //alert("InSide"+JSON.stringify(dataRequestToVolunteer));
    }
}

function getRequestTOVolunteerErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //     alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}