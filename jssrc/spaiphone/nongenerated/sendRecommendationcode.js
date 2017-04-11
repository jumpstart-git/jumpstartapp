var reviewtaskid;
var gblSendreview;
var businessId9;
var requestId9;
mobileFabricConfigurationForVolReview = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "Recommendation",
        operations: ["saveRecommendation"]
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
function volSendReview() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //gblSendreview=val9.widgetInfo.data[0].lblRequestIdSent;
    //alert("the selected"+JSON.stringify(gblSendreview));
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
    if (!mobileFabricConfigurationForVolReview.isKonySDKObjectInitialized) {
        initializeMobileFabricForvolSendReview();
    } else if (mobileFabricConfigurationForVolReview.isKonySDKObjectInitialized) {
        setvolSendReview();
    }
}
//            else{
//                                            // The user didn't pick a val9ue so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a val9id news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForvolSendReview() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolReview.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolReview.konysdkObject.init(mobileFabricConfigurationForVolReview.appKey, mobileFabricConfigurationForVolReview.appSecret, mobileFabricConfigurationForVolReview.serviceURL, initializeMobileFabricForvolSendReviewSuccess, initializeMobileFabricForvolSendReviewFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForvolSendReviewSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolReview.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setvolSendReview();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForvolSendReviewFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //    alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForVolReview.authClient = mobileFabricConfigurationForVolReview.konysdkObject.getIdentityService(mobileFabricConfigurationForVolReview.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForVolReview.identityServices[0].username,
        "password": mobileFabricConfigurationForVolReview.identityServices[0].password
    };
    mobileFabricConfigurationForVolReview.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolReview.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setvolSendReview();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setvolSendReview() {
    //alert("inside CancelRequest");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolReview.integrationObj = mobileFabricConfigurationForVolReview.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolReview.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolReview.integrationServices[0].operations[0];
        var headers = {};
        //alert("operation name"+operationName);
        var sendReview = {};
        //alert("requestid:"+JSON.stringify(gblSendreview));
        sendReview["taskId"] = gblSendreview; //1;//kony.store.getItem("requestId");
        // sendReview["requestId9"]=requestId9;
        // sendReview["recommendationId"]="222";
        sendReview["businessId"] = businessId9;
        sendReview["volunteerId"] = kony.store.getItem("volunteerId");
        // sendReview["message"]=mainPage.sendReview.sendReviewModalBody.sendReviewTextArea.text;
        // sendReview["message"]=mainPage.sendRecommendationModalContainer.sendRecommendationModalBody.sendRecommendationtTextArea.text;
        sendReview["detail"] = mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text;
        //alert("msg:"+JSON.stringify(sendReview));
        //  alert("actual string=="+mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text);
        mobileFabricConfigurationForVolReview.integrationObj.invokeOperation(operationName, headers, sendReview, getvolSendReviewSuccessCallback, getVolsendReviewErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getvolSendReviewSuccessCallback(sendReview1) {
    //alert("inside success"+JSON.stringify(sendReview1));
    if (sendReview1 != "undefined" && sendReview1 != undefined) {
        // alert("InSide"+JSON.stringify(sendReview1));
    }
}

function getVolsendReviewErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" inside error callback ");
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

function sendReviewDetailsss() {
    try {
        //alert("inside sendReviewDetails");
        if (kony.store.getItem("isBusOrVol") == "volunteer") {
            var tempDataforClose99 = [];
            // alert("it is volunteer");
            //var taskVal= mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
            //alert("value:"+JSON.stringify(mainPage.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems));
            //alert("value9:"+JSON.stringify(mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems)); //mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems));
            var reviewtaskId = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems; //mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
            // var taskId = mainPage.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
            // alert("gblSendreview:"+JSON.stringify(reviewtask));
            gblSendreview = reviewtaskId[0].taskId;
            businessId9 = reviewtaskId[0].businessId;
            // requestId9=reviewtaskId[0].lblRequestId;
            //alert("gblSendreview:"+JSON.stringify(gblSendreview));
            //alert("busId:"+JSON.stringify(businessId));
            //gblSendreview=val9.widgetInfo.data[0].lblRequestId;
        }
    } catch (error) {
        //alert("error is:"+JSON.stringify(error));
    }
}