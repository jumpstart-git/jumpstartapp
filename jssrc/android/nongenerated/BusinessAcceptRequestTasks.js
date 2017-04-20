mobileFabricConfigurationForAcceptRequestTasks = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessAcceptRequestTasks",
        operations: ["acceptRequestTasks"]
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
function BusinessAcceptRequestTasks() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForAcceptRequestTasks.isKonySDKObjectInitialized) {
        initializeMobileFabricForAcceptRequestTasks();
    } else if (mobileFabricConfigurationForAcceptRequestTasks.isKonySDKObjectInitialized) {
        setAcceptRequestTasks();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForAcceptRequestTasks() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForAcceptRequestTasks.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForAcceptRequestTasks.konysdkObject.init(mobileFabricConfigurationForAcceptRequestTasks.appKey, mobileFabricConfigurationForAcceptRequestTasks.appSecret, mobileFabricConfigurationForAcceptRequestTasks.serviceURL, initializeMobileFabricForAcceptRequestTasksSuccess, initializeMobileFabricForAcceptRequestTasksFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForAcceptRequestTasksSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForAcceptRequestTasks.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setAcceptRequestTasks();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForAcceptRequestTasksFailure(error) {
    // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForAcceptRequestTasks.authClient = mobileFabricConfigurationForAcceptRequestTasks.konysdkObject.getIdentityService(mobileFabricConfigurationForAcceptRequestTasks.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForAcceptRequestTasks.identityServices[0].username,
        "password": mobileFabricConfigurationForAcceptRequestTasks.identityServices[0].password
    };
    mobileFabricConfigurationForAcceptRequestTasks.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForAcceptRequestTasks.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setAcceptRequestTasks();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setAcceptRequestTasks() {
    //alert("inside TaskDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForAcceptRequestTasks.integrationObj = mobileFabricConfigurationForAcceptRequestTasks.konysdkObject.getIntegrationService(mobileFabricConfigurationForAcceptRequestTasks.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForAcceptRequestTasks.integrationServices[0].operations[0];
        var headers = {};
        /*
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskTitleLabelInput.text=title;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskDetailsLabelInput.text=details;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskSkillsLabelInput.text=skills;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskHoursLabelInput.text=hoursRequired;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskStartDateLabelInput.text=start_date;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskEndDateLabelInput.text=end_date;

        }
        */
        // alert("operation name"+operationName);
        var busAcceptTaskDetails = {};
        busAcceptTaskDetails["taskId"] = kony.store.getItem("TaskIdFromSentSeg");
        //this is taken from volunteer profile after search js file
        busAcceptTaskDetails["title"] = mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskTitleLabelInput.text;
        busAcceptTaskDetails["hoursRequired"] = mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskHoursLabelInput.text;
        busAcceptTaskDetails["skills"] = mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskSkillsLabelInput.text;
        var rawDetails = mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskDetailsLabelInput.text;
        var modifiedDetails = rawDetails.replace(/(\r\n|\n|\r)/gm, " ");
        busAcceptTaskDetails["details"] = modifiedDetails;
        //                   var basicMessage="";
        //                   var formatedText= basicMessage.replace(/(\r\n|\n|\r)/gm," ");
        //                   busAcceptTaskDetails["message"]=formatedText;
        //                   var str="";
        //                   var arr=str.split("/");
        //                   var actStartDate2=arr[2]+"-"+arr[1]+"-"+arr[0];
        //                   var str1="";
        //                   var arr1=str1.split("/");
        //                   var actEndDate2=arr1[2]+"-"+arr1[1]+"-"+arr1[0];
        busAcceptTaskDetails["startDate"] = mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskStartDateLabelInput.text; //actStartDate2;
        busAcceptTaskDetails["endDate"] = mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskEndDateLabelInput.text; //actEndDate2;
        //alert("From AcceptedTask"+JSON.stringify(busAcceptTaskDetails));
        mobileFabricConfigurationForAcceptRequestTasks.integrationObj.invokeOperation(operationName, headers, busAcceptTaskDetails, getAcceptRequestTasksSuccessCallback, getAcceptRequestTasksErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getAcceptRequestTasksSuccessCallback(busAcceptTaskDetails) {
    //alert("inside success"+JSON.stringify(busAcceptTaskDetails));
    if (busAcceptTaskDetails != "undefined" && busAcceptTaskDetails != undefined) {
        //alert("InSide"+JSON.stringify(busAcceptTaskDetails));
    }
}

function getAcceptRequestTasksErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation",
        "yesLabel": "OK",
        "noLabel": "No",
        "message": "Request has been moved to open task",
        "alertHandler": null
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    mainPage.BusinessRequestTaskDetailsModal.isVisible = false;
    mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.removeAll();
    getBusinessRequestsService();
    kony.application.dismissLoadingScreen();
    //   		   mainPage.destroy();
    //            mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible=true;
    //       	   mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible=true;
    //            BusinessRecommendationService();
    //            mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.MyActivityCreateOpportunityButton.isVisible=true;
    //            mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible=false;
    //            mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible=true;
    //            mainPage.unAssignedTasksContainer.isVisible=true;
    //            mainPage.show();
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}