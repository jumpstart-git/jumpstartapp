var gblExistingTaskId; //Type your code here
mobileFabricConfigurationForVolunteerExistingOpenTask = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47",
    //appSecret:"c600a59925b36419de1546056cd21557",
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "GetMyActivityOpenTasks",
        operations: ["getOpenTaskByVolunteerId"]
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
function VolunteerExistingOpenTaskService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
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
    if (!mobileFabricConfigurationForVolunteerExistingOpenTask.isKonySDKObjectInitialized) {
        initializeMobileFabricForVolunteerExistingTaskTask();
    } else if (mobileFabricConfigurationForVolunteerExistingOpenTask.isKonySDKObjectInitialized) {
        getVolunteerExistingOpenTask();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForVolunteerExistingTaskTask() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerExistingOpenTask.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolunteerExistingOpenTask.konysdkObject.init(mobileFabricConfigurationForVolunteerExistingOpenTask.appKey, mobileFabricConfigurationForVolunteerExistingOpenTask.appSecret, mobileFabricConfigurationForVolunteerExistingOpenTask.serviceURL, initializeMobileFabricForVolunteerExistingTaskTaskSuccess, initializeMobileFabricForVolunteerExistingTaskTaskFailure);
        // alert(getVolunteerExistingOpenTask());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolunteerExistingTaskTaskSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerExistingOpenTask.isKonySDKObjectInitialized = true;
    //  kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getVolunteerExistingOpenTask();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolunteerExistingTaskTaskFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Unable to initialize the application. Please try again. ");
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
    mobileFabricConfigurationForVolunteerExistingOpenTask.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getVolunteerExistingOpenTask();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getVolunteerExistingOpenTask() {
    //  alert("inside getVolunteerExistingOpenTask");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerExistingOpenTask.integrationObj = mobileFabricConfigurationForVolunteerExistingOpenTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerExistingOpenTask.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolunteerExistingOpenTask.integrationServices[0].operations[0];
        var headers = {};
        var dataBusId = {};
        dataBusId["id"] = kony.store.getItem("VolunteerId");
        //  alert("operation name"+dataBusId["id"]);
        mobileFabricConfigurationForVolunteerExistingOpenTask.integrationObj.invokeOperation(operationName, headers, dataBusId, getVolunteerExistingOpenTaskSuccessCallback, getVolunteerExistingOpenTaskErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolunteerExistingOpenTaskSuccessCallback(gblVolunteerExistingOpenTaskList) {
    // alert("inside getVolunteerExistingOpenTaskSuccessCallback"+JSON.stringify(gblVolunteerExistingOpenTaskList));
    // Check the opstatus for 0 meaning it worked
    if (gblVolunteerExistingOpenTaskList !== null && gblVolunteerExistingOpenTaskList.opstatus === 0) { //first if
        if (gblVolunteerExistingOpenTaskList.taskList != null && gblVolunteerExistingOpenTaskList.taskList != undefined) { //second if
            if (gblVolunteerExistingOpenTaskList.taskList[0].TasksDTO !== null && gblVolunteerExistingOpenTaskList.taskList[0].TasksDTO != undefined) { //3rd if
                // alert("2");
                // Making sure we have at least 1 article returned
                if (gblVolunteerExistingOpenTaskList.taskList.length > 0) { //4th if
                    // Now we know we have results so we'll print them out to check
                    // alert ("########## Response received from service call: "+JSON.stringify(gblVolunteerExistingOpenTaskList.VolunteerExistingTaskTaskList));
                    gblExistingOpenTaskResponseForVol = gblVolunteerExistingOpenTaskList;
                    setExistingOpenTaskDataForVol(gblExistingOpenTaskResponseForVol);
                    // var gblExistingOpenTaskResponseForVol=JSON.stringify(VolunteerExistingTaskTaskList);
                    //Setting the segment widgetdataMap
                    //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"};
                    //      //      Setting the data to the segment
                    //      frmFoxNews.segNewsTitle.setVisibility(true);
                    //          frmFoxNews.segNewsTitle.setData(VolunteerExistingTaskTaskList.MessageDTO.news_item.title);
                    //          kony.application.dismissLoadingScreen();
                } //end of 4th if
            } //end of 3rd if
        } //end of 2nd if
        else {
            kony.application.dismissLoadingScreen();
            // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
            //kony.ui.Alert({ message: "Service call failed with opstatus " + VolunteerExistingTaskTaskList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
        }
    } //end first if
} //end of fun
function getVolunteerExistingOpenTaskErrorCallback(error) {
    kony.print(" ********** Entering into getVolunteerExistingOpenTaskSuccessCallback ********** ");
    kony.print(" ********** Failure in getVolunteerExistingOpenTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //  alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getVolunteerExistingOpenTaskSuccessCallback ********** ");
}

function setExistingOpenTaskDataForVol(gblExistingOpenTaskResponseForVol) {
    try {
        if (gblExistingOpenTaskResponseForVol !== "undefined" && gblExistingOpenTaskResponseForVol !== undefined) {
            // alert("InSide setExistingOpenTaskDataForVol"+JSON.stringify(gblExistingOpenTaskResponseForVol));
            //need to map data for both open and closed tasks
            // alert("m1");
            if (gblExistingOpenTaskResponseForVol["taskList"].length > 0) {
                // alert("if task list lengh is greater than zero");
                var tempExistingOpenTaskDataForVol = [];
                var len = gblExistingOpenTaskResponseForVol["taskList"].length;
                //alert(len);
                // if(){} need to map data for both open and closed tasks
                //  alert("Response  -----"+JSON.stringify(gblExistingOpenTaskResponseForVol["taskList"]));
                var tempArray = [];
                tempArray.push("");
                tempArray.push("Select");
                tempExistingOpenTaskDataForVol.push(tempArray);
                for (var i = 0; i < len; i++) {
                    if ((gblExistingOpenTaskResponseForVol["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["requestType"] == 9) && (gblExistingOpenTaskResponseForVol["taskList"][i]["TasksDTO"][0]["status"] == 100)) {
                        var title = gblExistingOpenTaskResponseForVol["taskList"][i]["TasksDTO"][0].title;
                        var taskId = gblExistingOpenTaskResponseForVol["taskList"][i]["TasksDTO"][0].taskId;
                        //    var startDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
                        //    var endDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                        var tempArr = [];
                        tempArr.push(taskId);
                        tempArr.push(title);
                        tempExistingOpenTaskDataForVol.push(tempArr);
                        //alert(JSON.stringify(tempExistingOpenTaskDataForVol));
                        kony.application.dismissLoadingScreen();
                    }
                }
                searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.AssignToExistingTaskContainer.assignToExistingTaskListBox.masterData = tempExistingOpenTaskDataForVol;
                // mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.masterData=tempExistingOpenTaskDataForVol;
            }
            kony.application.dismissLoadingScreen();
            //VolunteerCloseTaskService ();
        }
    } catch (e) {
        //just to avoid undefined type error
    }
}