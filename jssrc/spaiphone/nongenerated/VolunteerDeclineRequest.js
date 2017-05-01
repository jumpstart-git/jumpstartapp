var gblReqDeclinelVol;
mobileFabricConfigurationForVolDeclinelRequest = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "DeclineReqVol",
        operations: ["DeclineRequestVolunteer"]
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
function VolDeclineRequest() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //kony.application.dismissLoadingScreen();
    //gblReqDeclinelVol=val9.widgetInfo.data[0].lblRequestIdSent;
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
    if (!mobileFabricConfigurationForVolDeclinelRequest.isKonySDKObjectInitialized) {
        initializeMobileFabricForVolDeclineRequest();
    } else if (mobileFabricConfigurationForVolDeclinelRequest.isKonySDKObjectInitialized) {
        setVolDeclineRequest();
    }
}
//            else{
//                                            // The user didn't pick a val9ue so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a val9id news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForVolDeclineRequest() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolDeclinelRequest.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolDeclinelRequest.konysdkObject.init(mobileFabricConfigurationForVolDeclinelRequest.appKey, mobileFabricConfigurationForVolDeclinelRequest.appSecret, mobileFabricConfigurationForVolDeclinelRequest.serviceURL, initializeMobileFabricForVolDeclineRequestSuccess, initializeMobileFabricForVolDeclineRequestFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolDeclineRequestSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //   alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolDeclinelRequest.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setVolDeclineRequest();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolDeclineRequestFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //      alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForVolDeclinelRequest.authClient = mobileFabricConfigurationForVolDeclinelRequest.konysdkObject.getIdentityService(mobileFabricConfigurationForVolDeclinelRequest.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForVolDeclinelRequest.identityServices[0].username,
        "password": mobileFabricConfigurationForVolDeclinelRequest.identityServices[0].password
    };
    mobileFabricConfigurationForVolDeclinelRequest.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolDeclinelRequest.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setVolDeclineRequest();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setVolDeclineRequest() {
    //  alert("inside CancelRequest");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolDeclinelRequest.integrationObj = mobileFabricConfigurationForVolDeclinelRequest.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolDeclinelRequest.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolDeclinelRequest.integrationServices[0].operations[0];
        var headers = {};
        //  alert("operation name"+operationName);
        var dataDeclinelVolRequest = {};
        dataDeclinelVolRequest["requestId"] = gblReqDeclinelVol; //1;//kony.store.getItem("requestId");
        //dataDeclinelVolRequest["message"]="MerinnnnReal";
        //alert("the selected"+JSON.stringify(gblReqDeclinelVol));
        // dataDeclinelVolRequest["message"]=mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;//"trial";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;//"salma again actual";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;
        var rawReq9 = mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text;
        var modifiedReq9 = rawReq9.replace(/(\r\n|\n|\r)/gm, " ");
        dataDeclinelVolRequest["message"] = modifiedReq9; //mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text;
        //dataDeclinelVolRequest["message"]=mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text;
        //  alert("dataDeclinelVolRequest"+JSON.stringify(dataDeclinelVolRequest));
        //   alert("actual string=="+mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text);
        mobileFabricConfigurationForVolDeclinelRequest.integrationObj.invokeOperation(operationName, headers, dataDeclinelVolRequest, getVolDeclineRequestSuccessCallback, getVolacceptlRequestErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolDeclineRequestSuccessCallback(dataDeclinelVolRequest) {
    // alert("inside success"+JSON.stringify(dataDeclinelVolRequest));
    if (dataDeclinelVolRequest != "undefined" && dataDeclinelVolRequest != undefined) {
        // alert("InSide"+JSON.stringify(dataDeclinelVolRequest));
    }
}

function getVolacceptlRequestErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    mainPage.declineRequestModalContainer.isVisible = false;
    mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text = "";
    mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll();
    mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.removeAll();
    mainPage.destroy();
    mainPage.show();
    //   alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

function saveDeclineVolReqId() {
    try {
        if (kony.store.getItem("isBusOrVol") == "volunteer") {
            var val8 = mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
            gblReqDeclinelVol = val8[0].lblRequestIdSent;
            //alert("value :"+JSON.stringify(val8));
            //gblReqDeclinelVol=val8.widgetInfo.data[0].lblRequestIdSent;
        }
    } catch (error) {
        alert("error is:" + e);
    }
}