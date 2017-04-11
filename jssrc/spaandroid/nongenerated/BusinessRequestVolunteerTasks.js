var gblReqForTaskDetails;
mobileFabricConfigurationForRequestVolunteerTasks = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "RequestVolunteerTasks",
        operations: ["requestVolunteerTasks"]
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
function BusinessRequestVolunteerTasks() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
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
    if (!mobileFabricConfigurationForRequestVolunteerTasks.isKonySDKObjectInitialized) {
        initializeMobileFabricForRequestVolunteerTasks();
    } else if (mobileFabricConfigurationForRequestVolunteerTasks.isKonySDKObjectInitialized) {
        setRequestVolunteerTasks();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForRequestVolunteerTasks() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForRequestVolunteerTasks.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForRequestVolunteerTasks.konysdkObject.init(mobileFabricConfigurationForRequestVolunteerTasks.appKey, mobileFabricConfigurationForRequestVolunteerTasks.appSecret, mobileFabricConfigurationForRequestVolunteerTasks.serviceURL, initializeMobileFabricForRequestVolunteerTasksSuccess, initializeMobileFabricForRequestVolunteerTasksFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForRequestVolunteerTasksSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForRequestVolunteerTasks.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setRequestVolunteerTasks();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForRequestVolunteerTasksFailure(error) {
    // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForRequestVolunteerTasks.authClient = mobileFabricConfigurationForRequestVolunteerTasks.konysdkObject.getIdentityService(mobileFabricConfigurationForRequestVolunteerTasks.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForRequestVolunteerTasks.identityServices[0].username,
        "password": mobileFabricConfigurationForRequestVolunteerTasks.identityServices[0].password
    };
    mobileFabricConfigurationForRequestVolunteerTasks.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForRequestVolunteerTasks.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setRequestVolunteerTasks();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setRequestVolunteerTasks() {
    //alert("inside TaskDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForRequestVolunteerTasks.integrationObj = mobileFabricConfigurationForRequestVolunteerTasks.konysdkObject.getIntegrationService(mobileFabricConfigurationForRequestVolunteerTasks.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForRequestVolunteerTasks.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var taskDetailsForVol = {};
        taskDetailsForVol["businessId"] = kony.store.getItem("businessId");
        taskDetailsForVol["volunteerId"] = kony.store.getItem("selReqId"); //this is taken from volunteer profile after search js file
        taskDetailsForVol["title"] = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text;
        taskDetailsForVol["hoursRequired"] = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text;
        taskDetailsForVol["taskSkills"] = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text;
        var rawDetails = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text;
        var modifiedDetails = rawDetails.replace(/(\r\n|\n|\r)/gm, " ");
        taskDetailsForVol["details"] = modifiedDetails;
        var basicMessage = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text;
        var formatedText = basicMessage.replace(/(\r\n|\n|\r)/gm, " ");
        taskDetailsForVol["message"] = formatedText;
        var str = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
        var arr = str.split("/");
        var actStartDate2 = arr[2] + "-" + arr[1] + "-" + arr[0];
        var str1 = searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.formattedDate;
        var arr1 = str1.split("/");
        var actEndDate2 = arr1[2] + "-" + arr1[1] + "-" + arr1[0];
        taskDetailsForVol["startDate"] = actStartDate2;
        taskDetailsForVol["endDate"] = actEndDate2;
        // alert(JSON.stringify(taskDetailsForVol));
        mobileFabricConfigurationForRequestVolunteerTasks.integrationObj.invokeOperation(operationName, headers, taskDetailsForVol, getBusRequestVolunteerTasksSuccessCallback, getBusRequestVolunteerTasksErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusRequestVolunteerTasksSuccessCallback(taskDetailsForVol) {
    //alert("inside success"+JSON.stringify(taskDetailsForVol));
    if (taskDetailsForVol != "undefined" && taskDetailsForVol != undefined) {
        //alert("InSide"+JSON.stringify(taskDetailsForVol));
    }
}

function getBusRequestVolunteerTasksErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": null,
        "yesLabel": "OK",
        "noLabel": "No",
        "message": "Request has been sent successfully",
        "alertHandler": "null"
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    searchResultProfile.startEngagementModalContainer.isVisible = false;
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = "";
    searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = "";
    searchResultProfile.show();
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}