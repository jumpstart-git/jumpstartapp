mobileFabricConfigurationForBusinessExistingOpenTask = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "GetExistingOpenTasks",
        operations: ["getExistingOpenTask"]
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
function BusinessExistingOpenTaskService() {
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
    if (!mobileFabricConfigurationForBusinessExistingOpenTask.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessExistingTaskTask();
    } else if (mobileFabricConfigurationForBusinessExistingOpenTask.isKonySDKObjectInitialized) {
        getBusinessExistingOpenTask();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForBusinessExistingTaskTask() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessExistingOpenTask.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessExistingOpenTask.konysdkObject.init(mobileFabricConfigurationForBusinessExistingOpenTask.appKey, mobileFabricConfigurationForBusinessExistingOpenTask.appSecret, mobileFabricConfigurationForBusinessExistingOpenTask.serviceURL, initializeMobileFabricForBusinessExistingTaskTaskSuccess, initializeMobileFabricForBusinessExistingTaskTaskFailure);
        // alert(getBusinessExistingOpenTask());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessExistingTaskTaskSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessExistingOpenTask.isKonySDKObjectInitialized = true;
    //  kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessExistingOpenTask();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessExistingTaskTaskFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
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
    mobileFabricConfigurationForBusinessExistingOpenTask.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessExistingOpenTask();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessExistingOpenTask() {
    //  alert("inside getBusinessExistingOpenTask");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessExistingOpenTask.integrationObj = mobileFabricConfigurationForBusinessExistingOpenTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessExistingOpenTask.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForBusinessExistingOpenTask.integrationServices[0].operations[0];
        var headers = {};
        var dataBusinessId = {};
        dataBusinessId["id"] = kony.store.getItem("selReqId");
        // alert("Business Id "+dataBusinessId["id"]);
        mobileFabricConfigurationForBusinessExistingOpenTask.integrationObj.invokeOperation(operationName, headers, dataBusinessId, getBusinessExistingOpenTaskSuccessCallback99, getBusinessExistingOpenTaskErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessExistingOpenTaskSuccessCallback99(gblBusinessExistingOpenTaskList99) {
    //alert("inside getBusinessExistingOpenTaskSuccessCallback99"+JSON.stringify(gblBusinessExistingOpenTaskList99));
    // Check the opstatus for 0 meaning it worked
    if (gblBusinessExistingOpenTaskList99 !== null && gblBusinessExistingOpenTaskList99.opstatus === 0) { //first if
        //alert("1");
        if (gblBusinessExistingOpenTaskList99.taskList != null && gblBusinessExistingOpenTaskList99.taskList != undefined) { //second if
            // alert("2");
            if (gblBusinessExistingOpenTaskList99.taskList[0].TasksDTO !== null && gblBusinessExistingOpenTaskList99.taskList[0].TasksDTO != undefined) { //3rd if
                // alert("3");
                // Making sure we have at least 1 article returned
                if (gblBusinessExistingOpenTaskList99.taskList.length > 0) { //4th if
                    // Now we know we have results so we'll print them out to check
                    // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessExistingOpenTaskList99));
                    gblExistingOpenTaskResponseForBus11 = gblBusinessExistingOpenTaskList99;
                    setExistingOpenTaskDataForBus(gblExistingOpenTaskResponseForBus11);
                    // var gblExistingOpenTaskResponseForBus11=JSON.stringify(VolunteerExistingTaskTaskList);
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
function getBusinessExistingOpenTaskErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessExistingOpenTaskSuccessCallback99 ********** ");
    kony.print(" ********** Failure in getBusinessExistingOpenTaskSuccessCallback99: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Failed in errorcalllback:"+JSON.stringify(error));
    kony.print(" ********** Exiting out of getBusinessExistingOpenTaskSuccessCallback99 ********** ");
}

function setExistingOpenTaskDataForBus(gblExistingOpenTaskResponseForBus11) {
    try {
        if (gblExistingOpenTaskResponseForBus11 != "undefined" && gblExistingOpenTaskResponseForBus11 != undefined) {
            //  alert("InSide setExistingOpenTaskDataForBus"+JSON.stringify(gblExistingOpenTaskResponseForBus11));
            //need to map data for both open and closed tasks
            //alert("m1");
            if (gblExistingOpenTaskResponseForBus11["taskList"].length > 0) {
                // alert("if task list lengh is greater than zero");
                var tempExistingOpenTaskDataForBus = [];
                var len = gblExistingOpenTaskResponseForBus11["taskList"].length;
                // alert(len);
                // if(){} need to map data for both open and closed tasks
                //alert("Response  -----"+JSON.stringify(gblExistingOpenTaskResponseForBus11["taskList"]));  
                var tempArray = [];
                tempArray.push("");
                tempArray.push("Select");
                tempExistingOpenTaskDataForBus.push(tempArray);
                for (var i = 0; i < len; i++) {
                    if ((gblExistingOpenTaskResponseForBus11["taskList"][i]["TasksDTO"].status == 1) || (gblExistingOpenTaskResponseForBus11["taskList"][i]["TasksDTO"].status == 100)) {
                        // alert("inside");
                        var title = gblExistingOpenTaskResponseForBus11["taskList"][i]["TasksDTO"].title;
                        var taskId = gblExistingOpenTaskResponseForBus11["taskList"][i]["TasksDTO"].taskId;
                        kony.store.setItem("taskId", taskId);
                        //    var startDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
                        //    var endDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                        var tempArr = [];
                        tempArr.push(taskId);
                        tempArr.push(title);
                        //alert("title:"+title);
                        tempExistingOpenTaskDataForBus.push(tempArr);
                        // alert("tempExistingOpenTaskDataForBus"+JSON.stringify(tempExistingOpenTaskDataForBus));
                        kony.application.dismissLoadingScreen();
                    }
                }
                //searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.AssignToExistingTaskContainer.assignToExistingTaskListBox.masterData=tempExistingOpenTaskDataForBus;
                searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.assignToExistingTaskListBox1.masterData = tempExistingOpenTaskDataForBus;
                // mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.masterData=tempExistingOpenTaskDataForBus;
                // searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.CopyTaskDetailsHdrFlex0f3d500c1413c47.CopytaskTitleTxtLbl00d04464a809647.text=title;
            }
            kony.application.dismissLoadingScreen();
            //VolunteerCloseTaskService ();  
        }
    } catch (e) {
        //alert("error is:"+e);
        //just to avoid undefined type error
        kony.application.dismissLoadingScreen();
    }
}