mobileFabricConfigurationForIndigenousTaskDetails = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessStartEngagement",
        operations: ["setStartEngagement"]
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
function indeginousTaskDetails() {
    //    gblReqForTaskDetails=valBusRequestID.widgetInfo.data[0].lblRequestId;
    //   alert("the selected"+JSON.stringify(gblReqForTaskDetails));
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
    if (!mobileFabricConfigurationForIndigenousTaskDetails.isKonySDKObjectInitialized) {
        initializeMobileFabricForIndigenousTaskDetails();
    } else if (mobileFabricConfigurationForIndigenousTaskDetails.isKonySDKObjectInitialized) {
        setIndigenousTaskDetails();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForIndigenousTaskDetails() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousTaskDetails.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForIndigenousTaskDetails.konysdkObject.init(mobileFabricConfigurationForIndigenousTaskDetails.appKey, mobileFabricConfigurationForIndigenousTaskDetails.appSecret, mobileFabricConfigurationForIndigenousTaskDetails.serviceURL, initializeMobileFabricForIndigenousTaskDetailsSuccess, initializeMobileFabricForIndigenousTaskDetailsFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForIndigenousTaskDetailsSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousTaskDetails.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setIndigenousTaskDetails();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForIndigenousTaskDetailsFailure(error) {
    // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForIndigenousTaskDetails.authClient = mobileFabricConfigurationForIndigenousTaskDetails.konysdkObject.getIdentityService(mobileFabricConfigurationForIndigenousTaskDetails.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForIndigenousTaskDetails.identityServices[0].username,
        "password": mobileFabricConfigurationForIndigenousTaskDetails.identityServices[0].password
    };
    mobileFabricConfigurationForIndigenousTaskDetails.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousTaskDetails.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setIndigenousTaskDetails();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setIndigenousTaskDetails() {
    //alert("inside TaskDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousTaskDetails.integrationObj = mobileFabricConfigurationForIndigenousTaskDetails.konysdkObject.getIntegrationService(mobileFabricConfigurationForIndigenousTaskDetails.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForIndigenousTaskDetails.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var dataTaskDetails = {};
        dataTaskDetails["requestId"] = gblReqForTaskDetails;
        // dataTaskDetails["AssignToExistingTask"]=mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.existingTaskContainer.txtExistingTask.text;
        dataTaskDetails["title"] = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskTitleField.text;
        dataTaskDetails["details"] = mainPage.startEngagementModalContainer.startEngagementModalBody.startEngagementTaskDetailsTextArea.text;
        //merin time start
        var str = mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
        var arr = str.split("/");
        var actStartDate = arr[2] + "-" + arr[1] + "-" + arr[0];
        // alert("actStartDate"+actStartDate);
        var str1 = mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.formattedDate;
        var arr1 = str1.split("/");
        var actEndDate = arr1[2] + "-" + arr1[1] + "-" + arr1[0];
        ///merin time start end
        dataTaskDetails["startDate"] = actStartDate; //"2016-10-17";//mainPage.startEngagementModalContainer.startEngagementModalBody.startDateCalendarInput.formattedDate;
        dataTaskDetails["endDate"] = actEndDate; //"2016-10-17";//mainPage.startEngagementModalContainer.startEngagementModalBody.endDateCalendarInput.formattedDate;
        //var data={"userName":login.usernameField.text,
        //"password":login.passwordField.text};
        // dataLogin={userName:"volunteerFirst",password:"Password"};
        //   alert("dataTaskDetails"+JSON.stringify(dataTaskDetails));
        mobileFabricConfigurationForIndigenousTaskDetails.integrationObj.invokeOperation(operationName, headers, dataTaskDetails, getIndigenousTaskDetailsSuccessCallback, getIndigenousTaskDetailsErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getIndigenousTaskDetailsSuccessCallback(dataTaskDetails) {
    //alert("inside success"+JSON.stringify(dataTaskDetails));
    if (dataTaskDetails != "undefined" && dataTaskDetails != undefined) {
        //alert("InSide"+JSON.stringify(dataTaskDetails));
    }
}

function getIndigenousTaskDetailsErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    mainPage.startEngagementModalContainer.isVisible = false;
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

function saveReqForBusStartEngae(valBusStartEngageRequestID) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        alert("the row is 18th =" + JSON.stringify(valBusStartEngageRequestID));
        //gblReq=val.widgetInfo.data[0].lblRequestId;
        gblReqForTaskDetails = valBusStartEngageRequestID.widgetInfo.selectedRowItems[0]["lblRequestId"];
    }
}