mobileFabricConfigurationForVolAcceptRequest = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "AcceptReqVol",
        operations: ["AcceptReqVolunteer"]
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
function VolAcceptRequest() {
    //gblReq9=val9.widgetInfo.data[0].lblRequestIdSent;
    // alert("the selected"+JSON.stringify(gblReq9));
    // Let's get the news type the user selected
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    //alert ("########## Selected Key:" + selectedKey);
    // Let's first check that the user picked a val9id val9ue
    //if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
    // Populating the input params for the service call and invoking the service
    // We're passing in the selected key for the user's selection in the combobox
    // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
    // Now we make the call to the service using our input parameters and specifying
    // the function processServiceResults as our callback when the service returns results
    // appmiddlewareinvokerasync(inputParams, processServiceResults);
    if (!mobileFabricConfigurationForVolAcceptRequest.isKonySDKObjectInitialized) {
        initializeMobileFabricForVolAcceptlRequest();
    } else if (mobileFabricConfigurationForVolAcceptRequest.isKonySDKObjectInitialized) {
        setVolAcceptRequest();
    }
}
//            else{
//                                            // The user didn't pick a val9ue so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a val9id news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForVolAcceptlRequest() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolAcceptRequest.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolAcceptRequest.konysdkObject.init(mobileFabricConfigurationForVolAcceptRequest.appKey, mobileFabricConfigurationForVolAcceptRequest.appSecret, mobileFabricConfigurationForVolAcceptRequest.serviceURL, initializeMobileFabricForVolAcceptlRequestSuccess, initializeMobileFabricForVolAcceptlRequestFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolAcceptlRequestSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolAcceptRequest.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setVolAcceptRequest();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolAcceptlRequestFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //       alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //      alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForVolAcceptRequest.authClient = mobileFabricConfigurationForVolAcceptRequest.konysdkObject.getIdentityService(mobileFabricConfigurationForVolAcceptRequest.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForVolAcceptRequest.identityServices[0].username,
        "password": mobileFabricConfigurationForVolAcceptRequest.identityServices[0].password
    };
    mobileFabricConfigurationForVolAcceptRequest.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolAcceptRequest.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setVolAcceptRequest();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setVolAcceptRequest() {
    // alert("inside CancelRequest");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolAcceptRequest.integrationObj = mobileFabricConfigurationForVolAcceptRequest.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolAcceptRequest.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolAcceptRequest.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var dataAcceptVolRequest = {};
        dataAcceptVolRequest["requestId"] = gblReq9; //1;//kony.store.getItem("requestId");
        //dataAcceptVolRequest["message"]="MerinnnnReal";
        dataAcceptVolRequest["message"] = mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text; //"trial";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;//"salma again actual";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;
        // alert("dataAcceptVolRequest"+JSON.stringify(dataAcceptVolRequest));
        // alert("actual string=="+mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text);
        mobileFabricConfigurationForVolAcceptRequest.integrationObj.invokeOperation(operationName, headers, dataAcceptVolRequest, getVolAcceptRequestSuccessCallback, getVolacceptlRequestErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolAcceptRequestSuccessCallback(dataAcceptVolRequest) {
    //alert("inside success"+JSON.stringify(dataAcceptVolRequest));
    if (dataAcceptVolRequest != "undefined" && dataAcceptVolRequest != undefined) {
        //  alert("InSide"+JSON.stringify(dataAcceptVolRequest));
    }
}

function getVolacceptlRequestErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

function saveReqId(val9) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        gblReq9 = val9.widgetInfo.data[0].lblRequestIdSent;
    }
}