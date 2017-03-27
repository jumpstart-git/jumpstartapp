var gblReqClosedTask = [];
mobileFabricConfigurationForBusinessMarkAsComplete = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessMarkAsComplete",
        operations: ["setMarkAsComplete"]
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
function BusinessMarkAsComplete() {
    //   gblMarkCompleteReq=valMarkComplete.widgetInfo.data[0].requestId;
    //   alert("the selected"+JSON.stringify(gblMarkCompleteReq));
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
    if (!mobileFabricConfigurationForBusinessMarkAsComplete.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessMarkAsComplete();
    } else if (mobileFabricConfigurationForBusinessMarkAsComplete.isKonySDKObjectInitialized) {
        setBusinessMarkAsComplete();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForBusinessMarkAsComplete() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessMarkAsComplete.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessMarkAsComplete.konysdkObject.init(mobileFabricConfigurationForBusinessMarkAsComplete.appKey, mobileFabricConfigurationForBusinessMarkAsComplete.appSecret, mobileFabricConfigurationForBusinessMarkAsComplete.serviceURL, initializeMobileFabricForBusinessMarkAsCompleteSuccess, initializeMobileFabricForBusinessMarkAsCompleteFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessMarkAsCompleteSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessMarkAsComplete.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setBusinessMarkAsComplete();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessMarkAsCompleteFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //   alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForBusinessMarkAsComplete.authClient = mobileFabricConfigurationForBusinessMarkAsComplete.konysdkObject.getIdentityService(mobileFabricConfigurationForBusinessMarkAsComplete.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForBusinessMarkAsComplete.identityServices[0].username,
        "password": mobileFabricConfigurationForBusinessMarkAsComplete.identityServices[0].password
    };
    mobileFabricConfigurationForBusinessMarkAsComplete.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessMarkAsComplete.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setBusinessMarkAsComplete();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setBusinessMarkAsComplete() {
    //alert("inside MarkAsComplete");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessMarkAsComplete.integrationObj = mobileFabricConfigurationForBusinessMarkAsComplete.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessMarkAsComplete.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForBusinessMarkAsComplete.integrationServices[0].operations[0];
        var headers = {};
        //alert("operation name"+operationName);
        var dataMarkAsComplete = {};
        dataMarkAsComplete["requestId"] = gblReqClosedTask["lblRequestId"]; //1;//kony.store.getItem("requestId");
        //dataMarkAsComplete["message"]="MerinnnnReal";
        dataMarkAsComplete["message"] = "Business Marks Task as complete";
        //     alert("dataMarkAsComplete"+JSON.stringify(dataMarkAsComplete));
        mobileFabricConfigurationForBusinessMarkAsComplete.integrationObj.invokeOperation(operationName, headers, dataMarkAsComplete, getBusinessMarkAsCompleteSuccessCallback, getBusinessMarkAsCompleteErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessMarkAsCompleteSuccessCallback(dataMarkAsComplete) {
    // alert("inside success"+JSON.stringify(dataMarkAsComplete));
    if (dataMarkAsComplete != "undefined" && dataMarkAsComplete != undefined) {
        //alert("InSide"+JSON.stringify(dataMarkAsComplete));
    }
}

function getBusinessMarkAsCompleteErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

function saveClosedTaskDetails(closedTaskVal) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        var tempDataforClose = [];
        // alert("the row is="+JSON.stringify(closedTaskVal));
        gblReqClosedTask["requestId"] = val.widgetInfo.selectedRowItems[0]["lblRequestId"];
        gblReqClosedTask["taskName"] = val.widgetInfo.selectedRowItems[0]["openTaskName"];
        gblReqClosedTask["taskBusinessName"] = val.widgetInfo.selectedRowItems[0]["openTaskBusiness"];
        BusinessMarkAsComplete();
        // alert("gblReqClosedTask");
        //     mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.widgetDataMap={
        //       "closedTaskPersonProfilePic":"closedTaskPersonProfilePic",   
        //       "closedTaskName":"closedTaskName",
        //       "closedTaskBusiness":"closedTaskBusiness"
        //  };
        //   var textDataforClosedTask = {
        //                         closedTaskPersonProfilePic : "imgseglogo.png",
        //                         closedTaskName: gblReqClosedTask["openTaskName"],
        //                         closedTaskBusiness: gblReqClosedTask["taskBusinessName"],
        //                         lblRequestId:gblReqClosedTask["requestId"]
        // //                      markAsCompleteText:MARK_A
        // //                      markAsCompleteRichText: MARK_AS_COMPLETE
        //                     };
        // 			tempDataforClose.push(textDataforClosedTask);
        //     mainPage.mainPageBody.mainSPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.setData(tempDataforClose);
    }
}