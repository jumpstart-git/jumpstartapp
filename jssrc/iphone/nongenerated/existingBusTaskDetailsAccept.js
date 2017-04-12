mobileFabricConfigurationForRequestVolunteerTasks99 = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "RequestToVolunteerOpp",
        operations: ["requestToVolOpp"]
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
function BusinessRequestToVolunteerAcceptTasks99() {
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
    if (!mobileFabricConfigurationForRequestVolunteerTasks99.isKonySDKObjectInitialized) {
        initializeMobileFabricForRequestVolunteerTasks99();
    } else if (mobileFabricConfigurationForRequestVolunteerTasks99.isKonySDKObjectInitialized) {
        setRequestToVolunteerTasks99();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForRequestVolunteerTasks99() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForRequestVolunteerTasks99.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForRequestVolunteerTasks99.konysdkObject.init(mobileFabricConfigurationForRequestVolunteerTasks99.appKey, mobileFabricConfigurationForRequestVolunteerTasks99.appSecret, mobileFabricConfigurationForRequestVolunteerTasks99.serviceURL, initializeMobileFabricForRequestVolunteerTasks99Success, initializeMobileFabricForRequestVolunteerTasks99Failure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForRequestVolunteerTasks99Success(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForRequestVolunteerTasks99.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setRequestToVolunteerTasks99();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForRequestVolunteerTasks99Failure(error) {
    // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForRequestVolunteerTasks99.authClient = mobileFabricConfigurationForRequestVolunteerTasks99.konysdkObject.getIdentityService(mobileFabricConfigurationForRequestVolunteerTasks99.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForRequestVolunteerTasks99.identityServices[0].username,
        "password": mobileFabricConfigurationForRequestVolunteerTasks99.identityServices[0].password
    };
    mobileFabricConfigurationForRequestVolunteerTasks99.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForRequestVolunteerTasks99.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setRequestToVolunteerTasks99();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setRequestToVolunteerTasks99() {
    //alert("inside TaskDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForRequestVolunteerTasks99.integrationObj = mobileFabricConfigurationForRequestVolunteerTasks99.konysdkObject.getIntegrationService(mobileFabricConfigurationForRequestVolunteerTasks99.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForRequestVolunteerTasks99.integrationServices[0].operations[0];
        var headers = {};
        /*
        {

        "title":"Testing New Task",
        "details":"Testing New Task",
        "startDate":"2017-01-06",
        "endDate":"2017-02-06",
        "hoursRequired":"72",
        "taskSkills":"Java",
        "message":"message",
        "volunteerId":"2310298",
        "businessId":"112"

        searchResultProfile.startEngagementModalContainer.isVisible=false;
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text="";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text="";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text="";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text="";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text=";
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
        searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.formattedDate;
        }
        */
        // alert("operation name"+operationName);
        var taskDetailsForBus99 = {};
        taskDetailsForBus99["volunteerId"] = kony.store.getItem("volunteerId");
        taskDetailsForBus99["businessId"] = kony.store.getItem("selReqId"); //this is taken from business profile after search js file
        taskDetailsForBus99["title"] = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text;
        //taskDetailsForBus99["details"]= searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
        taskDetailsForBus99["hoursRequired"] = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text;
        taskDetailsForBus99["taskSkills"] = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text;
        var rawDetails = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
        if (rawDetails === null || rawDetails === "null") {
            taskDetailsForBus99["details"] = rawDetails;
        } else {
            var modifiedDetails = rawDetails.replace(/(\r\n|\n|\r)/gm, " ");
            taskDetailsForBus99["details"] = modifiedDetails;
        }
        if ((searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "Select") || (searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.selectedKey === "")) {
            alert("No tasks/opportunity is available");
            kony.application.dismissLoadingScreen();
            return false;
        }
        var basicMessage = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text;
        if ((basicMessage === null) || (basicMessage === "null") || (basicMessage === "") || (basicMessage === " ")) {
            alert("please enter details in comment");
            kony.application.dismissLoadingScreen();
            return false;
            //taskDetailsForBus99["message"]=basicMessage;
        } else {
            var formatedText = basicMessage.replace(/(\r\n|\n|\r)/gm, " ");
            taskDetailsForBus99["message"] = formatedText;
        }
        taskDetailsForBus99["startDate"] = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text;
        taskDetailsForBus99["endDate"] = searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text;
        // alert(JSON.stringify(taskDetailsForBus99));
        mobileFabricConfigurationForRequestVolunteerTasks99.integrationObj.invokeOperation(operationName, headers, taskDetailsForBus99, getRequestVolunteerTasksSuccessCallback, getRequestVolunteerTasksErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getRequestVolunteerTasksSuccessCallback(taskDetailsForBus99) {
    //alert("inside success"+JSON.stringify(taskDetailsForBus99));
    if (taskDetailsForBus99 != "undefined" && taskDetailsForBus99 != undefined) {
        //alert("InSide"+JSON.stringify(taskDetailsForBus99));
        // alert("please enter task details");
    }
}

function getRequestVolunteerTasksErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"
        "alertTitle": "Confirmation",
        //End of D005
        "yesLabel": "OK",
        "noLabel": "No",
        "message": "Request has been sent successfully",
        "alertHandler": null
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    // alert("Request has been sent successfully");
    searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = false;
    var tempVal = [];
    var tempArray = [];
    tempArray.push("");
    tempArray.push("Select");
    tempVal.push(tempArray);
    //end
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.masterData = tempVal;
    //searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.masterData="";
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = "";
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = "";
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = "";
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = "";
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = "";
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text = "";
    searchResultProfile.show();
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}