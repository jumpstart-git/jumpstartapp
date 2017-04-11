//Type your code here
var gblNewTaskReqValForSearch;
mobileFabricConfigurationForBusinessLoadsearchOppLoad98 = {
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
function BusinessLoadExistingTaskForSearchScreen() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForBusinessLoadsearchOppLoad98.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessLoadExistingTaskforSearchScreen();
    } else if (mobileFabricConfigurationForBusinessLoadsearchOppLoad98.isKonySDKObjectInitialized) {
        getBusinessLoadExistingTaskforSearchScreen();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForBusinessLoadExistingTaskforSearchScreen() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessLoadsearchOppLoad98.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessLoadsearchOppLoad98.konysdkObject.init(mobileFabricConfigurationForBusinessLoadsearchOppLoad98.appKey, mobileFabricConfigurationForBusinessLoadsearchOppLoad98.appSecret, mobileFabricConfigurationForBusinessLoadsearchOppLoad98.serviceURL, initializeMobileFabricForBusinessLoadExistingTaskforSearchScreenSuccess, initializeMobileFabricForBusinessLoadExistingTaskforSearchScreenFailure);
        // alert(getBusinessLoadExistingTaskforSearchScreen());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessLoadExistingTaskforSearchScreenSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessLoadsearchOppLoad98.isKonySDKObjectInitialized = true;
    //  kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessLoadExistingTaskforSearchScreen();
    //getBusinessLoadExistingTaskforSearchScreen();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessLoadExistingTaskforSearchScreenFailure(error) {
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
    mobileFabricConfigurationForBusinessLoadsearchOppLoad98.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessLoadExistingTaskforSearchScreen();
    //getBusinessLoadExistingTaskforSearchScreen();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessLoadExistingTaskforSearchScreen() {
    //alert("inside getBusinessLoadExistingTaskforSearchScreen");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessLoadsearchOppLoad98.integrationObj = mobileFabricConfigurationForBusinessLoadsearchOppLoad98.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessLoadsearchOppLoad98.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForBusinessLoadsearchOppLoad98.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        var data = {};
        data["id"] = gblNewTaskReqValForSearch; //kony.store.getItem("volunteerId");
        //alert("dat of id :"+data["id"]);
        mobileFabricConfigurationForBusinessLoadsearchOppLoad98.integrationObj.invokeOperation(operationName, headers, data, getBusinessLoadExistingTaskforSearchScreenSuccessCallback, getBusinessLoadExistingTaskforSearchScreenErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessLoadExistingTaskforSearchScreenSuccessCallback(gblBusinessLoadExistingTaskForSearchScreen) {
    //alert("inside getBusinessLoadExistingTaskforSearchScreenSuccessCallback"+JSON.stringify(gblBusinessLoadExistingTaskForSearchScreen));
    // Check the opstatus for 0 meaning it worked
    // Check the opstatus for 0 meaning it worked
    if (gblBusinessLoadExistingTaskForSearchScreen !== null && gblBusinessLoadExistingTaskForSearchScreen.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblBusinessLoadExistingTaskForSearchScreen.TasksDTO !== null) {
            // alert("2");
            // Making sure we have at least 1 article returned
            if (gblBusinessLoadExistingTaskForSearchScreen.TasksDTO.length > 0) {
                // Now we know we have results so we'll print them out to check
                //    alert ("########## Response received from service call: "+JSON.stringify(gblNewTaskDetailsForVolunteerOppSearch));
                gblLoadExistingTaskResponseforSearch = gblBusinessLoadExistingTaskForSearchScreen;
                setLoadExistingTaskSegDataSearchScreen(gblLoadExistingTaskResponseforSearch);
            } //end of 4th if
        } //end of 3rd if
    } //end of 2nd if
    else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + BusinessLoadExistingTaskTaskList.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
} //end first if
function getBusinessLoadExistingTaskforSearchScreenErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessLoadExistingTaskforSearchScreenSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessLoadExistingTaskforSearchScreenSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Failed to fetch the news. Please try again:"+JSON.stringify(error));
    kony.print(" ********** Exiting out of getBusinessLoadExistingTaskforSearchScreenSuccessCallback ********** ");
}

function setLoadExistingTaskSegDataSearchScreen(gblLoadExistingTaskResponseforSearch) {
    try {
        var length = gblLoadExistingTaskResponseforSearch["TasksDTO"].length;
        //alert("len is:"+length);
        if (gblLoadExistingTaskResponseforSearch != "undefined" && gblLoadExistingTaskResponseforSearch != undefined) {
            if (gblLoadExistingTaskResponseforSearch["TasksDTO"].length > 0) {
                // alert("inside task for salma:"+gblLoadExistingTaskResponseforSearch);
                //for(var i=0; i<length; i++)
                //{
                //alert("inside each val "+);
                //gblNewTaskReqValForSearch="3";
                // if(gblNewTaskReqValForSearch==(gblNewTaskDetailsForVolunteerOppSearchResponse.TasksDTO[i].request[0].Request.request_task_id))
                //if(gblNewTaskReqValForSearch==(gblNewTaskDetailsForVolunteerOppSearchResponse.taskobj[0].taskList[i].TasksDTO[0].request[0].Request.request_id))
                //{
                //alert("inside task if"+gblNewTaskReqValForSearch);
                var volunteerName = kony.store.getItem("volLoginName");
                //alert("volunteerName:"+volunteerName);
                var taskTitle = gblLoadExistingTaskResponseforSearch.TasksDTO[0].title;
                if (taskDetails === null || taskDetails === "null") {
                    taskTitle = " ";
                }
                var taskDetails = gblLoadExistingTaskResponseforSearch.TasksDTO[0].details;
                var startDate = gblLoadExistingTaskResponseforSearch.TasksDTO[0].start_date;
                if ((startDate === null) || (startDate === "null")) {
                    startDate = " ";
                }
                var endDate = gblLoadExistingTaskResponseforSearch.TasksDTO[0].end_date;
                if ((endDate === null) || (endDate === "null")) {
                    endDate = " ";
                }
                var voltaskid = gblLoadExistingTaskResponseforSearch.TasksDTO[0].taskId;
                var volhoursRequired = gblLoadExistingTaskResponseforSearch.TasksDTO[0].hoursRequired;
                if ((volhoursRequired === null) || (volhoursRequired === "null")) {
                    volhoursRequired = " ";
                }
                var voltaskSkills = gblLoadExistingTaskResponseforSearch.TasksDTO[0].taskSkills;
                var msgTime = gblLoadExistingTaskResponseforSearch.TasksDTO[0].messageTime;
                if (voltaskid === null || voltaskid === "null") voltaskid = " ";
                if ((voltaskSkills === null) || (voltaskSkills === "null")) {
                    voltaskSkills = " ";
                }
                if (msgTime === null || msgTime === "null") {
                    msgTime = " ";
                }
                searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = taskTitle;
                searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text = taskDetails;
                searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text = startDate;
                searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text = endDate;
                searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text = voltaskSkills;
                searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text = volhoursRequired;
            }
            kony.application.dismissLoadingScreen();
            //BusinessCloseTaskService ();  
        }
    } catch (e) {
        //alert("error salma is:"+e);
    }
}

function getNewTaskDetailsForVolSearch8() {
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        var newtaskVal = searchPage.searchPageDashboardFlex.DataFlexScrollContainer.volunteerdataSegment.selectedRowItems;
        gblNewTaskReqValForSearch = newtaskVal[0].searchTaskId;
        //gblNewTaskReqValForSearch=newtaskVal.widgetInfo.selectedRowItems[0]["lblRequestId"];
        // alert("gblNewTaskReqValForSearch"+gblNewTaskReqValForSearch);
    }
}