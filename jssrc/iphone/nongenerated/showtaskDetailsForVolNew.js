var gblNewTaskReqVal;
mobileFabricConfigurationForNewNewTaskDetailsForVolunteer = {
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
function NewTaskDetailsForVolunteer() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //alert ("inside taskdEtials");
    // getNewTaskDetailsForVolunteerSuccessCallback (gblNewTaskDetailsForVolunteer);
    // Let's get the news type the user selected
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    // Let's first check that the user picked a valid value
    //if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
    // Populating the input params for the service call and invoking the service
    // We're passing in the selected key for the user's selection in the combobox
    // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
    // Now we make the call to the service using our input parameters and specifying
    // the function processServiceResults as our callback when the service returns results
    // appmiddlewareinvokerasync(inputParams, processServiceResults);
    if (!mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.isKonySDKObjectInitialized) {
        initializeMobileFabricForNewTaskDetailsForVolunteer();
    } else if (mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.isKonySDKObjectInitialized) {
        getNewTaskDetailsForVolunteer();
    }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}
function initializeMobileFabricForNewTaskDetailsForVolunteer() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.konysdkObject.init(mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.appKey, mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.appSecret, mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.serviceURL, mobileFabricConfigurationForNewNewTaskDetailsForVolunteerSuccess, mobileFabricConfigurationForNewNewTaskDetailsForVolunteerFailure);
        // alert(getNewTaskDetailsForVolunteer ());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForNewNewTaskDetailsForVolunteerSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getNewTaskDetailsForVolunteer();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForNewNewTaskDetailsForVolunteerFailure(error) {
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
    // alert (" ********** Entering into loginMFSuccess ********** ");
    // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getNewTaskDetailsForVolunteer();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getNewTaskDetailsForVolunteer() {
    //alert("inside getNewTaskDetailsForVolunteer ");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.integrationObj = mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.integrationServices[0].operations[0];
        var headers = {};
        // if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        // data= {"newsType": selectedKey};
        //         }else{
        // // The user didn't pick a value so we'll show the alert
        //    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name"+operationName);
        var data = {};
        data["id"] = gblNewTaskReqVal; //kony.store.getItem("volunteerId");
        //alert("dat of id :"+data["id"]);
        mobileFabricConfigurationForNewNewTaskDetailsForVolunteer.integrationObj.invokeOperation(operationName, headers, data, getNewTaskDetailsForVolunteerSuccessCallback, getNewTaskDetailsForVolunteerErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getNewTaskDetailsForVolunteerSuccessCallback(gblNewTaskDetailsForVolunteer) {
    //alert("inside success"+JSON.stringify(gblNewTaskDetailsForVolunteer ));
    // Check the opstatus for 0 meaning it worked
    if (gblNewTaskDetailsForVolunteer !== null && gblNewTaskDetailsForVolunteer.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblNewTaskDetailsForVolunteer.TasksDTO !== null && gblNewTaskDetailsForVolunteer.TasksDTO !== undefined) {
            // alert("2");
            // Making sure we have at least 1 article returned
            if (gblNewTaskDetailsForVolunteer.TasksDTO.length > 0) {
                // Now we know we have results so we'll print them out to check
                //    alert ("########## Response received from service call: "+JSON.stringify(gblNewTaskDetailsForVolunteer));
                gblNewTaskDetailsForVolunteerResponse = gblNewTaskDetailsForVolunteer;
                setNewTaskDetailsForVolunteerData(gblNewTaskDetailsForVolunteerResponse);
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + NewTaskDetailsForVolunteer.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getNewTaskDetailsForVolunteerErrorCallback(error) {
    kony.print(" ********** Entering into getNewTaskDetailsForVolunteer SuccessCallback ********** ");
    kony.print(" ********** Failure in getNewTaskDetailsForVolunteer SuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getNewTaskDetailsForVolunteer SuccessCallback ********** ");
}

function setNewTaskDetailsForVolunteerData(gblNewTaskDetailsForVolunteerResponse) {
    try {
        // var length= gblNewTaskDetailsForVolunteerResponse["TasksDTO"].length;
        //alert("len is:"+length);
        if (gblNewTaskDetailsForVolunteerResponse != "undefined" && gblNewTaskDetailsForVolunteerResponse != undefined) {
            //alert("InSide length"+length);
            // mainPage.mainPageContentParent.myNotifications.segMessageNotification.widgetDataMap={
            //             "contactImage": "contactImage",
            //             "lblContactName": "lblContactName",
            //             "lblDay": "lblDay",
            //             "lblMeaasageType": "lblMeaasageType"
            //         };
            /*console.log(JSON.stringify(text.taskList[0].TasksDTO[0].title));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].details));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].start_date));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].end_date));

//console.log(JSON.stringify(text.taskList[0].TasksDTO[0].request[0].Request));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].request[0].Request.request_status));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].request[0].Request.request_id));*/
            // if (gblNewTaskDetailsForVolunteerResponse["TasksDTO"].length > 0) {
            //alert("inside task for salma"+gblNewTaskReqVal);
            //for(var i=0; i<length; i++)
            //{
            //alert("inside each val "+);
            //gblNewTaskReqVal="3";
            // if(gblNewTaskReqVal==(gblNewTaskDetailsForVolunteerResponse.TasksDTO[i].request[0].Request.request_task_id))
            //if(gblNewTaskReqVal==(gblNewTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].request[0].Request.request_id))
            //{
            //alert("inside task if"+gblNewTaskReqVal);
            var volunteerName = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].businessName; //kony.store.getItem("volLoginName");
            //alert("volunteerName:"+volunteerName);
            var taskTitle = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].title;
            var taskDetails = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].details;
            var startDate = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].start_date;
            var endDate = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].end_date;
            var voltaskid = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].taskId;
            var volhoursRequired = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].hoursRequired;
            var voltaskSkills = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].taskSkills;
            var msgTime = gblNewTaskDetailsForVolunteerResponse.TasksDTO[0].messageTime;
            //}
            if (taskTitle === null || taskTitle === "null") taskTitle = " ";
            if (taskDetails === null || taskDetails === "null") taskTitle = " ";
            if (startDate === null || startDate === "null") startDate = " ";
            if (endDate === null || endDate === "null") endDate = " ";
            if (voltaskid === null || voltaskid === "null") voltaskid = " ";
            if (volhoursRequired === null || volhoursRequired === "null") volhoursRequired = " ";
            if (voltaskSkills === null || voltaskSkills === "null") voltaskSkills = " ";
            if (msgTime === null || msgTime === "null") msgTime = " ";
            //}         
            //mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalHeader.CopystartEngagmentHeaderDetails05c3f0a6993dd4b.CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.CopyLabel0d3787300d8b24b.text=volunteerName;
            mainPage.BusinessRequestTaskDetailsModal.RequestTaskDetailsHeader.reqProfileContainer.ReqProfileVolNameContainer.volNameLabel.text = volunteerName;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskTitleLabelInput.text = taskTitle;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskDetailsLabelInput.text = taskDetails;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskSkillsLabelInput.text = voltaskSkills;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskHoursLabelInput.text = volhoursRequired;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskStartDateLabelInput.text = startDate;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskEndDateLabelInput.text = endDate;
            mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.requestTaskId.text = voltaskid;
            mainPage.BusinessRequestTaskDetailsModal.isVisible = true;
            kony.application.dismissLoadingScreen();
            //}
        }
    } catch (Exception) {
        kony.application.dismissLoadingScreen();
        //alert("Exception is"+JSON.stringify(Exception));
    }
}

function getNewTaskDetailsForVol() {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        var newtaskVal = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
        gblNewTaskReqVal = newtaskVal[0].requestTaskId;
        //gblNewTaskReqVal=newtaskVal.widgetInfo.selectedRowItems[0]["lblRequestId"];
        // alert("gblNewTaskReqVal"+gblNewTaskReqVal);
    }
}