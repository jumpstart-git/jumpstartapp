//Type your code here
mobileFabricConfigurationForBusinessLoadExistingTaskTask = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "GetMyActivityOpenTasks",
        operations: ["getOpenTaskByBusinessId"]
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
function BusinessLoadExistingTaskTaskService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForBusinessLoadExistingTaskTask.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessLoadExistingTaskTask();
    } else if (mobileFabricConfigurationForBusinessLoadExistingTaskTask.isKonySDKObjectInitialized) {
        getBusinessLoadExistingTaskTask();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForBusinessLoadExistingTaskTask() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessLoadExistingTaskTask.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessLoadExistingTaskTask.konysdkObject.init(mobileFabricConfigurationForBusinessLoadExistingTaskTask.appKey, mobileFabricConfigurationForBusinessLoadExistingTaskTask.appSecret, mobileFabricConfigurationForBusinessLoadExistingTaskTask.serviceURL, initializeMobileFabricForBusinessLoadExistingTaskTaskSuccess, initializeMobileFabricForBusinessLoadExistingTaskTaskFailure);
        // alert(getBusinessLoadExistingTaskTask());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessLoadExistingTaskTaskSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessLoadExistingTaskTask.isKonySDKObjectInitialized = true;
    //  kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessLoadExistingTaskTask();
    //getBusinessLoadExistingTaskTask();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessLoadExistingTaskTaskFailure(error) {
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
    mobileFabricConfigurationForBusinessLoadExistingTaskTask.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessLoadExistingTaskTask();
    //getBusinessLoadExistingTaskTask();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessLoadExistingTaskTask() {
    //  alert("inside getBusinessLoadExistingTaskTask");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessLoadExistingTaskTask.integrationObj = mobileFabricConfigurationForBusinessLoadExistingTaskTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessLoadExistingTaskTask.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForBusinessLoadExistingTaskTask.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        var dataBusId = {};
        dataBusId["id"] = kony.store.getItem("businessId"); //"1";//kony.store.getItem("businessId"); 
        //  alert("operation name"+dataBusId["id"]);
        mobileFabricConfigurationForBusinessLoadExistingTaskTask.integrationObj.invokeOperation(operationName, headers, dataBusId, getBusinessLoadExistingTaskTaskSuccessCallback, getBusinessLoadExistingTaskTaskErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessLoadExistingTaskTaskSuccessCallback(gblBusinessLoadExistingTaskTaskList) {
    // alert("inside getBusinessLoadExistingTaskTaskSuccessCallback"+JSON.stringify(gblBusinessLoadExistingTaskTaskList));
    // Check the opstatus for 0 meaning it worked
    if (gblBusinessLoadExistingTaskTaskList !== null && gblBusinessLoadExistingTaskTaskList.opstatus === 0) { //first if
        if (gblBusinessLoadExistingTaskTaskList.taskList != null && gblBusinessLoadExistingTaskTaskList.taskList != undefined) { //second if
            if (gblBusinessLoadExistingTaskTaskList.taskList[0].TasksDTO !== null && gblBusinessLoadExistingTaskTaskList.taskList[0].TasksDTO != undefined) { //3rd if
                // alert("2");
                // Making sure we have at least 1 article returned
                if (gblBusinessLoadExistingTaskTaskList.taskList.length > 0) { //4th if
                    // Now we know we have results so we'll print them out to check
                    // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessLoadExistingTaskTaskList.BusinessLoadExistingTaskTaskList));
                    gblLoadExistingTaskResponse = gblBusinessLoadExistingTaskTaskList;
                    setLoadExistingTaskSegData(gblLoadExistingTaskResponse);
                    // var gblLoadExistingTaskResponse=JSON.stringify(BusinessLoadExistingTaskTaskList);
                    //Setting the segment widgetdataMap 
                    //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
                    //      //      Setting the data to the segment
                    //      frmFoxNews.segNewsTitle.setVisibility(true);
                    //          frmFoxNews.segNewsTitle.setData(BusinessLoadExistingTaskTaskList.MessageDTO.news_item.title);
                    //          kony.application.dismissLoadingScreen();
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
} //end of fun
function getBusinessLoadExistingTaskTaskErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessLoadExistingTaskTaskSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessLoadExistingTaskTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //  alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getBusinessLoadExistingTaskTaskSuccessCallback ********** ");
}

function setLoadExistingTaskSegData(gblLoadExistingTaskResponse) {
    try {
        if (gblLoadExistingTaskResponse != "undefined" && gblLoadExistingTaskResponse != undefined) {
            //  alert("InSide setLoadExistingTaskSegData"+JSON.stringify(gblLoadExistingTaskResponse));
            //need to map data for both open and closed tasks
            // alert("m1");
            if (gblLoadExistingTaskResponse["taskList"].length > 0) {
                // alert("if task list lengh is greater than zero");
                var id = kony.store.getItem("gblExistingTaskId");
                var tempLoadExistingTaskDta = [];
                var len = gblLoadExistingTaskResponse["taskList"].length;
                //alert(len);
                // if(){} need to map data for both open and closed tasks
                //  alert("Response  -----"+JSON.stringify(gblLoadExistingTaskResponse["taskList"]));   
                for (var i = 0; i < len; i++) {
                    if (gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].taskId == id) {
                        var title = gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].title;
                        var details = gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].details;
                        var skills = gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].taskSkills;
                        if (skills === "null" || skills === null || skills === "") {
                            skills = "";
                        }
                        var hours = gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].hoursRequired;
                        if (hours === "null" || hours === null || hours === "") {
                            hours = "";
                        }
                        var startDate = gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
                        var endDate = gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                        //           if(startDate==="null"||startDate===null||startDate==="")
                        //             {
                        //               startDate="";
                        //             }
                        //           if(endDate==="null"||endDate===null||endDate==="")
                        //             {
                        //               endDate="";
                        //             }
                        //var comments=gblLoadExistingTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                        //           var tempArr=[];
                        //           tempArr.push(taskId);
                        //           tempArr.push(title);
                        //                  tempLoadExistingTaskDta.push(tempArr);
                        //alert(JSON.stringify(tempLoadExistingTaskDta));
                        //kony.application.dismissLoadingScreen();
                    }
                }
                //mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToLoadExistingTaskListBoxContainer.LoadExistingTaskListBox.masterData=tempLoadExistingTaskDta;
                searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text = title;
                searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text = details;
                searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text = "";
                searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text = skills;
                searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text = hours;
                //     var startDate1=startDate.split("-");//"2016-01-19"
                //     var endDate1=endDate.split("-");//"2016-01-19"
                kony.application.dismissLoadingScreen();
                //searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.dateComponents=[startDate1[2],startDate1[1],startDate1[0]];
                //searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.dateComponents=[endDate1[2],endDate1[1],endDate1[0]];
            }
            kony.application.dismissLoadingScreen();
        }
    } catch (e) {
        //just to avoid undefined type error
    }
}