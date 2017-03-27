var gblTaskReqVal;
mobileFabricConfigurationForTaskDetailsForVolunteer = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "VolGetTasks",
        operations: ["getTasksForVolunteer"]
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
function TaskDetailsForVolunteer() {
    // alert ("inside taskdEtials");
    // getTaskDetailsForVolunteerSuccessCallback (gblTaskDetailsForVolunteer);
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
    if (!mobileFabricConfigurationForTaskDetailsForVolunteer.isKonySDKObjectInitialized) {
        initializeMobileFabricForTaskDetailsForVolunteer();
    } else if (mobileFabricConfigurationForTaskDetailsForVolunteer.isKonySDKObjectInitialized) {
        getTaskDetailsForVolunteer();
    }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}
function initializeMobileFabricForTaskDetailsForVolunteer() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForTaskDetailsForVolunteer.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForTaskDetailsForVolunteer.konysdkObject.init(mobileFabricConfigurationForTaskDetailsForVolunteer.appKey, mobileFabricConfigurationForTaskDetailsForVolunteer.appSecret, mobileFabricConfigurationForTaskDetailsForVolunteer.serviceURL, mobileFabricConfigurationForTaskDetailsForVolunteerSuccess, mobileFabricConfigurationForTaskDetailsForVolunteerFailure);
        // alert(getTaskDetailsForVolunteer ());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForTaskDetailsForVolunteerSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForTaskDetailsForVolunteer.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getTaskDetailsForVolunteer();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForTaskDetailsForVolunteerFailure(error) {
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
    mobileFabricConfigurationForTaskDetailsForVolunteer.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getTaskDetailsForVolunteer();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getTaskDetailsForVolunteer() {
    //alert("inside getTaskDetailsForVolunteer ");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForTaskDetailsForVolunteer.integrationObj = mobileFabricConfigurationForTaskDetailsForVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForTaskDetailsForVolunteer.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForTaskDetailsForVolunteer.integrationServices[0].operations[0];
        var headers = {};
        // if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        // data= {"newsType": selectedKey};
        //         }else{
        // // The user didn't pick a value so we'll show the alert
        //    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name"+operationName);
        var data = {};
        data["id"] = kony.store.getItem("volunteerId");
        //alert("dat of id :"+data["id"]);
        mobileFabricConfigurationForTaskDetailsForVolunteer.integrationObj.invokeOperation(operationName, headers, data, getTaskDetailsForVolunteerSuccessCallback, getTaskDetailsForVolunteerErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getTaskDetailsForVolunteerSuccessCallback(gblTaskDetailsForVolunteer) {
    //alert("inside success"+JSON.stringify(gblTaskDetailsForVolunteer ));
    // Check the opstatus for 0 meaning it worked
    if (gblTaskDetailsForVolunteer !== null && gblTaskDetailsForVolunteer.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblTaskDetailsForVolunteer.taskobj[0].taskList[0].TasksDTO !== null) {
            // alert("2");
            // Making sure we have at least 1 article returned
            if (gblTaskDetailsForVolunteer.taskobj[0].taskList.length > 0) {
                // Now we know we have results so we'll print them out to check
                //    alert ("########## Response received from service call: "+JSON.stringify(gblTaskDetailsForVolunteer));
                gblTaskDetailsForVolunteerResponse = gblTaskDetailsForVolunteer;
                setTaskDetailsForVolunteerData(gblTaskDetailsForVolunteerResponse);
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + TaskDetailsForVolunteer.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getTaskDetailsForVolunteerErrorCallback(error) {
    kony.print(" ********** Entering into getTaskDetailsForVolunteer SuccessCallback ********** ");
    kony.print(" ********** Failure in getTaskDetailsForVolunteer SuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getTaskDetailsForVolunteer SuccessCallback ********** ");
}

function setTaskDetailsForVolunteerData(gblTaskDetailsForVolunteerResponse) {
    try {
        var length = gblTaskDetailsForVolunteerResponse["taskobj"][0]["taskList"].length;
        if (gblTaskDetailsForVolunteerResponse != "undefined" && gblTaskDetailsForVolunteerResponse != undefined) {
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
            if (gblTaskDetailsForVolunteerResponse["taskobj"].length > 0) {
                // alert("inside task for merin"+gblTaskReqVal);
                for (var i = 0; i < length; i++) {
                    //alert("inside each val "+);
                    //gblTaskReqVal="3";
                    if (gblTaskReqVal == (gblTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].request[0].Request.request_id))
                    //if(gblTaskReqVal==(gblTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].request[0].Request.request_id))
                    {
                        //alert("inside task if"+gblTaskReqVal);
                        var volunteerName = kony.store.getItem("volunteerName");
                        var taskTitle = gblTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].title;
                        var taskDetails = gblTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].details;
                        var startDate = gblTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].start_date;
                        var endDate = gblTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].end_date;
                        var voltaskid = gblTaskDetailsForVolunteerResponse.taskobj[0].taskList[i].TasksDTO[0].taskId;
                    }
                }
                mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalHeader.CopystartEngagmentHeaderDetails05c3f0a6993dd4b.CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.CopyLabel0d3787300d8b24b.text = volunteerName;
                mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle09c8c16c0f4cb4f.text = taskTitle;
                mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.RichText086cf577b0bee44.text = taskDetails;
                mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle05227206fe96b4a.text = startDate;
                mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle0d258ad25591a49.text = endDate;
                mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.lblTaskId.text = voltaskid;
            }
        }
    } catch (Exception) {
        // alert("Exception is"+JSON.stringify(Exception));
    }
}

function getTaskDetailsForVol(taskVal) {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        gblTaskReqVal = taskVal.widgetInfo.selectedRowItems[0]["lblRequestId"];
        //alert("gblTaskReqVal"+gblTaskReqVal);
    }
}