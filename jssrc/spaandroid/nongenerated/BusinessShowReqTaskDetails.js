function getTaskId() {
    var segSentRowClickForBus = mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
    var reqRowTaskId = segSentRowClickForBus[0].requestTaskId;
    //alert(JSON.stringify(segSentRowClickForBus));
    kony.store.setItem("TaskIdFromSentSeg", reqRowTaskId);
    //alert("Request task ID"+reqRowTaskId);
}
//Type your code here
mobileFabricConfigurationForGetBusinessReqTaskDetails = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: ["BusinessGetTaskDetails"],
        operations: ["getTaskDetailsByBusinessId"]
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
function getBusinessReqTaskDetailsService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    getTaskId();
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
    if (!mobileFabricConfigurationForGetBusinessReqTaskDetails.isKonySDKObjectInitialized) {
        initializeMobileFabricForGetBusinessReqTaskDetails();
    } else if (mobileFabricConfigurationForGetBusinessReqTaskDetails.isKonySDKObjectInitialized) {
        getBusinessReqTaskDetailsById();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForGetBusinessReqTaskDetails() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetBusinessReqTaskDetails.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForGetBusinessReqTaskDetails.konysdkObject.init(mobileFabricConfigurationForGetBusinessReqTaskDetails.appKey, mobileFabricConfigurationForGetBusinessReqTaskDetails.appSecret, mobileFabricConfigurationForGetBusinessReqTaskDetails.serviceURL, initializeMobileFabricForGetBusinessReqTaskDetailsSuccess, initializeMobileFabricForGetBusinessReqTaskDetailsFailure);
        // alert(getBusinessReqTaskDetails());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForGetBusinessReqTaskDetailsSuccess(response) {
    //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetBusinessReqTaskDetails.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessReqTaskDetailsById();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForGetBusinessReqTaskDetailsFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfiguration.identityServices[0].username,
        "password": mobileFabricConfiguration.identityServices[0].password
    };
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetBusinessReqTaskDetails.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessReqTaskDetails();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessReqTaskDetailsById() {
    // alert("inside getBusinessReqTaskDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetBusinessReqTaskDetails.integrationObj = mobileFabricConfigurationForGetBusinessReqTaskDetails.konysdkObject.getIntegrationService(mobileFabricConfigurationForGetBusinessReqTaskDetails.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForGetBusinessReqTaskDetails.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        var dataTaskID = {};
        dataTaskID["id"] = kony.store.getItem("TaskIdFromSentSeg"); //"1";//kony.store.getItem("businessId"); 
        //alert(dataTaskID["id"]);
        mobileFabricConfigurationForGetBusinessReqTaskDetails.integrationObj.invokeOperation(operationName, headers, dataTaskID, getBusinessReqTaskDetailsSuccessCallback, getBusinessReqTaskDetailsErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessReqTaskDetailsSuccessCallback(gblReqTaskDetailsList) {
    // alert("inside getBusinessReqTaskDetailsSuccessCallback nov 21 "+JSON.stringify(gblReqTaskDetailsList));
    // alert("type==="+typeof(gblReqTaskDetailsList));
    // Check the opstatus for 0 meaning it worked
    if (gblReqTaskDetailsList !== null && gblReqTaskDetailsList.opstatus === 0) {
        ///start merin
        //  alert("gblReqTaskDetailsList.TasksDTO"+JSON.stringify(gblReqTaskDetailsList.TasksDTO));
        if (gblReqTaskDetailsList.TasksDTO !== null && gblReqTaskDetailsList.TasksDTO != undefined) {
            if (gblReqTaskDetailsList.TasksDTO !== null) {
                //  alert("2");
                // Making sure we have at least 1 article returned
                // if (gblReqTaskDetailsList.ReqTaskDetailsList.length > 0){
                // Now we know we have results so we'll print them out to check
                //  alert ("########## Response received from service call nov 21: "+JSON.stringify(gblReqTaskDetailsList.TasksDTO));
                gblReqBusinessResponse = gblReqTaskDetailsList;
                getSegBusinessReqTaskDetailsData(gblReqBusinessResponse);
                //  var gblReqBusinessResponse=JSON.stringify(TasksDTO);
                var gblReqBusinessResponse = JSON.stringify(gblReqTaskDetailsList);
            }
        }
    } //merin end
}

function getBusinessReqTaskDetailsErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessReqTaskDetailsSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessReqTaskDetailsSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Coming Inside Error call back");
    kony.print(" ********** Exiting out of getBusinessReqTaskDetailsSuccessCallback ********** ");
}

function getSegBusinessReqTaskDetailsData(gblReqBusinessResponse) {
    if (gblReqBusinessResponse != "undefined" && gblReqBusinessResponse != undefined) {
        // alert("InSide"+JSON.stringify(gblReqBusinessResponse));
        if (gblReqBusinessResponse["TasksDTO"].length > 0) {
            var tempData = [];
            var tempDataSentReq = [];
            var len = gblReqBusinessResponse["TasksDTO"].length;
            var status;
            var RequestType;
            var taskId = gblReqBusinessResponse["TasksDTO"][0].taskId;
            var name = gblReqBusinessResponse["TasksDTO"][0].volunteerName;
            var title = gblReqBusinessResponse["TasksDTO"][0].title;
            var details = gblReqBusinessResponse["TasksDTO"][0].details;
            var start_date = gblReqBusinessResponse["TasksDTO"][0].start_date;
            var end_date = gblReqBusinessResponse["TasksDTO"][0].end_date;
            var hoursRequired = gblReqBusinessResponse["TasksDTO"][0].hoursRequired;
            var skills = gblReqBusinessResponse["TasksDTO"][0].taskSkills;
            var time = gblReqBusinessResponse["TasksDTO"][0].messageTime;
            if (name == null || name == "null" || name == "") {
                name = "";
            }
            if (title == null || title == "null" || title == "") {
                title = "";
            }
            if (details == null || details == "null" || details == "") {
                details = "";
            }
            if (skills == null || skills == "null" || skills == "") {
                skills = "";
            }
            if (hoursRequired == null || hoursRequired == "null" || hoursRequired == "") {
                hoursRequired = "";
            }
            if (start_date == null || start_date == "null" || start_date == "") {
                start_date = "";
            }
            if (end_date == null || end_date == "null" || end_date == "") {
                end_date = "";
            }
            mainPage.BusinessRequestTaskDetailsModal.RequestTaskDetailsHeader.reqProfileContainer.ReqProfileVolNameContainer.volNameLabel.text = name;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskTitleLabelInput.text = title;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskDetailsLabelInput.text = details;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskSkillsLabelInput.text = skills;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskHoursLabelInput.text = hoursRequired;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskStartDateLabelInput.text = start_date;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskEndDateLabelInput.text = end_date;
            mainPage.BusinessRequestTaskDetailsModal.isVisible = true;
            kony.application.dismissLoadingScreen();
        }
    }
}

function contactVolunteer() {
    var businessRowClickData = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedReqTaskDetails.acceptedReqTaskDetailsSegment.selectedRowItems;
    var volContact = businessRowClickData[0].phoneNumber;
    kony.store.setItem("volContact", volContact);
    sendSMS();
}

function sendSMS() {
    try {
        var phoneNum9 = kony.store.getItem("volContact");
        var msg = "";
        kony.phone.sendSMS(phoneNum9, msg);
    } catch (err) {
        alert("error in sending sms:" + err);
    }
}