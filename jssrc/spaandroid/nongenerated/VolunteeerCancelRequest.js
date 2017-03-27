mobileFabricConfigurationForVolunteerCancelRequest = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "VolunteerCancelRequest",
        operations: ["postCancelRequest"]
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
function VolunteerCancelRequest() {
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
    if (!mobileFabricConfigurationForVolunteerCancelRequest.isKonySDKObjectInitialized) {
        initializeMobileFabricForVolunteerCancelRequest();
    } else if (mobileFabricConfigurationForVolunteerCancelRequest.isKonySDKObjectInitialized) {
        setVolunteerCancelRequest();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForVolunteerCancelRequest() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerCancelRequest.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolunteerCancelRequest.konysdkObject.init(mobileFabricConfigurationForVolunteerCancelRequest.appKey, mobileFabricConfigurationForVolunteerCancelRequest.appSecret, mobileFabricConfigurationForVolunteerCancelRequest.serviceURL, initializeMobileFabricForVolunteerCancelRequestSuccess, initializeMobileFabricForVolunteerCancelRequestFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolunteerCancelRequest(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerCancelRequest.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getLogin();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolunteerCancelRequest(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //   alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForVolunteerCancelRequest.authClient = mobileFabricConfigurationForVolunteerCancelRequest.konysdkObject.getIdentityService(mobileFabricConfigurationForVolunteerCancelRequest.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForVolunteerCancelRequest.identityServices[0].username,
        "password": mobileFabricConfigurationForVolunteerCancelRequest.identityServices[0].password
    };
    mobileFabricConfigurationForVolunteerCancelRequest.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerCancelRequest.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setVolunteerCancelRequest();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setVolunteerCancelRequest() {
    //alert("inside CancelRequest");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerCancelRequest.integrationObj = mobileFabricConfigurationForVolunteerCancelRequest.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerCancelRequest.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolunteerCancelRequest.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var dataVolunteerCancelRequest = {};
        dataVolunteerCancelRequest["CancelRequest"] = mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text;
        //   alert("dataVolunteerCancelRequest"+JSON.stringify(dataVolunteerCancelRequest));
        mobileFabricConfigurationForVolunteerCancelRequest.integrationObj.invokeOperation(operationName, headers, dataVolunteerCancelRequest, getVolunteerCancelRequestSuccessCallback, getVolunteerCancelRequestErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function putVolunteerCancelRequestSuccessCallback(dataVolunteerCancelRequest) {
    //alert("inside success"+JSON.stringify(dataVolunteerCancelRequest));
    if (dataVolunteerCancelRequest != "undefined" && dataVolunteerCancelRequest != undefined) {
        //alert("InSide"+JSON.stringify(dataVolunteerCancelRequest));
    }
}

function getVolunteerCancelRequestErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //  alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}