//var gblReqAcceptTaskBtn;
mobileFabricConfigurationForVolAcceptTaskBtn = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "AcceptTaskforVolunteer",
        operations: ["AcceptTasksForVolunteer"]
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
function VolAcceptTaskBtn() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //kony.application.dismissLoadingScreen(); 
    //gblReqAcceptTaskBtn=val9.widgetInfo.data[0].lblRequestIdSent;
    // alert("the selected"+JSON.stringify(gblReqAcceptTaskBtn));
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
    if (!mobileFabricConfigurationForVolAcceptTaskBtn.isKonySDKObjectInitialized) {
        initializeMobileFabricForVolAcceptTaskBtn();
    } else if (mobileFabricConfigurationForVolAcceptTaskBtn.isKonySDKObjectInitialized) {
        setVolAcceptTaskBtn();
    }
}
//            else{
//                                            // The user didn't pick a val9ue so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a val9id news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForVolAcceptTaskBtn() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolAcceptTaskBtn.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolAcceptTaskBtn.konysdkObject.init(mobileFabricConfigurationForVolAcceptTaskBtn.appKey, mobileFabricConfigurationForVolAcceptTaskBtn.appSecret, mobileFabricConfigurationForVolAcceptTaskBtn.serviceURL, initializeMobileFabricForVolAcceptTaskBtnSuccess, initializeMobileFabricForVolAcceptTaskBtnFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolAcceptTaskBtnSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolAcceptTaskBtn.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setVolAcceptTaskBtn();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolAcceptTaskBtnFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //    alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForVolAcceptTaskBtn.authClient = mobileFabricConfigurationForVolAcceptTaskBtn.konysdkObject.getIdentityService(mobileFabricConfigurationForVolAcceptTaskBtn.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForVolAcceptTaskBtn.identityServices[0].username,
        "password": mobileFabricConfigurationForVolAcceptTaskBtn.identityServices[0].password
    };
    mobileFabricConfigurationForVolAcceptTaskBtn.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolAcceptTaskBtn.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setVolAcceptTaskBtn();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setVolAcceptTaskBtn() {
    //  alert("inside acceptTaskBtn");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolAcceptTaskBtn.integrationObj = mobileFabricConfigurationForVolAcceptTaskBtn.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolAcceptTaskBtn.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolAcceptTaskBtn.integrationServices[0].operations[0];
        var headers = {};
        //  alert("operation name"+operationName);
        var dataAcceptBtnlVolRequest = {};
        dataAcceptBtnlVolRequest["taskId"] = mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.lblTaskId.text; //lblTaskId;//mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.lblTaskId.text
        //1;//kony.store.getItem("requestId");
        //dataAcceptBtnlVolRequest["message"]="MerinnnnReal";
        // dataAcceptBtnlVolRequest["message"]=mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;//"trial";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;//"salma again actual";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;
        //dataAcceptBtnlVolRequest["message"]=mainPage.declineRequestModalContainer.declineRequestModalBody.declineRequestTextArea.text;
        //dataAcceptBtnlVolRequest["message"]=mainPage.
        // alert("dataAcceptBtnlVolRequest"+JSON.stringify(dataAcceptBtnlVolRequest));
        //  alert("actual string=="+mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text);
        mobileFabricConfigurationForVolAcceptTaskBtn.integrationObj.invokeOperation(operationName, headers, dataAcceptBtnlVolRequest, getVolAcceptTaskBtnSuccessCallback, getVolacceptlRequestErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolAcceptTaskBtnSuccessCallback(dataAcceptBtnlVolRequest) {
    mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll();
    //mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.removeAll();
    mainPage.destroy();
    mainPage.show();
    // alert("inside success"+JSON.stringify(dataAcceptBtnlVolRequest));
    if (dataAcceptBtnlVolRequest != "undefined" && dataAcceptBtnlVolRequest != undefined) {
        //   alert("InSide"+JSON.stringify(dataAcceptBtnlVolRequest));
    }
}

function getVolacceptlRequestErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll(); 
    // //mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.removeAll();
    // mainPage.destroy();
    // mainPage.show(); 
    mainPage.acceptTaskDetailsModalContainer.isVisible = false;
    mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll();
    mainPage.destroy();
    mainPage.show();
    //       alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}
// function saveAcceptTaskBtn (val8){
//   gblReqAcceptTaskBtn=val8.widgetInfo.data[0].lblTaskId;
//   alert("lbltask:"+gblReqAcceptTaskBtn);
// }