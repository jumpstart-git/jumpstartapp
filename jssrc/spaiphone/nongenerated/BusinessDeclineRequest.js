var gblDeclineBusReq;
mobileFabricConfigurationForIndigenousDeclineRequest = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: ["BusinessDeclineRequest"],
        operations: ["setBusinessDeclineRequest"]
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
function indeginousDeclineRequest() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
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
    if (!mobileFabricConfigurationForIndigenousDeclineRequest.isKonySDKObjectInitialized) { //alert("1");
        initializeMobileFabricForIndigenousDeclineRequest();
    } else if (mobileFabricConfigurationForIndigenousDeclineRequest.isKonySDKObjectInitialized) { //alert("setIndigenousDeclineRequest");
        setIndigenousDeclineRequest();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForIndigenousDeclineRequest() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousDeclineRequest.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForIndigenousDeclineRequest.konysdkObject.init(mobileFabricConfigurationForIndigenousDeclineRequest.appKey, mobileFabricConfigurationForIndigenousDeclineRequest.appSecret, mobileFabricConfigurationForIndigenousDeclineRequest.serviceURL, initializeMobileFabricForIndigenousDeclineRequestSuccess, initializeMobileFabricForIndigenousDeclineRequestFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForIndigenousDeclineRequestSuccess(response) {
    //  kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousDeclineRequest.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setIndigenousDeclineRequest();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForIndigenousDeclineRequestFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //     alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //     alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForIndigenousDeclineRequest.authClient = mobileFabricConfigurationForIndigenousDeclineRequest.konysdkObject.getIdentityService(mobileFabricConfigurationForIndigenousDeclineRequest.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForIndigenousDeclineRequest.identityServices[0].username,
        "password": mobileFabricConfigurationForIndigenousDeclineRequest.identityServices[0].password
    };
    mobileFabricConfigurationForIndigenousDeclineRequest.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousDeclineRequest.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setIndigenousDeclineRequest();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setIndigenousDeclineRequest() {
    //  alert("inside DeclineRequest");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousDeclineRequest.integrationObj = mobileFabricConfigurationForIndigenousDeclineRequest.konysdkObject.getIntegrationService(mobileFabricConfigurationForIndigenousDeclineRequest.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForIndigenousDeclineRequest.integrationServices[0].operations[0];
        var headers = {};
        //  alert("operation name"+operationName);
        var dataDeclineRequest = {};
        dataDeclineRequest["requestId"] = gblDeclineBusReq; //kony.store.getItem("requestId");
        var rawReq = mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text;
        var modifiedReq = rawReq.replace(/(\r\n|\n|\r)/gm, " ");
        dataDeclineRequest["message"] = modifiedReq; //mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text;
        // alert("dataDeclineRequest"+JSON.stringify(dataDeclineRequest));
        mobileFabricConfigurationForIndigenousDeclineRequest.integrationObj.invokeOperation(operationName, headers, dataDeclineRequest, getIndigenousDeclineRequestSuccessCallback, getIndigenousDeclineRequestErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getIndigenousDeclineRequestSuccessCallback(dataDeclineRequest) {
    //alert("inside success"+JSON.stringify(dataDeclineRequest));
    if (dataDeclineRequest != "undefined" && dataDeclineRequest != undefined) {
        //alert("InSide"+JSON.stringify(dataDeclineRequest));
    }
}

function saveReqForBusDecline() {
    try {
        if (kony.store.getItem("isBusOrVol") == "business") {
            // alert("the row is="+JSON.stringify(valDecline));
            //gblReq=val.widgetInfo.data[0].lblRequestId;
            var declineRequest = mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
            gblDeclineBusReq = declineRequest[0].lblRequestIdSent;
            //   alert("id="+JSON.stringify(declineRequest[0].lblRequestIdSent));
        }
    } catch (e) {
        //     alert("the pbllllm is "+e);
    }
}

function getIndigenousDeclineRequestErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //         alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    //   mainPage.declineRequestModalContainer.isVisible=false;
    //    mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text="";
    mainPage.declineRequestModalContainer.isVisible = false;
    mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text = "Good day!\n\nI have received your request but unfortunately I have to decline due to other commitments that may impact my availability.";
    mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll();
    mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.removeAll();
    mainPage.destroy();
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
    mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
    BusinessRecommendationService();
    mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible = false;
    mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible = true;
    mainPage.unAssignedTasksContainer.isVisible = true;
    mainPage.show();
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}