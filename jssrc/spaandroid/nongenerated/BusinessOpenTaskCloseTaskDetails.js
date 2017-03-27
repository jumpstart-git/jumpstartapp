//Type your code here
mobileFabricConfigurationForBusinessOpenCloseTask = {
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
function BusinessOpenCloseTaskService() {
    //  kony.application.showLoadingScreen(null, "loading", 
    //constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {  
    //shouldShowLabelInBottom: "true", separatorHeight: 200} );
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
    if (!mobileFabricConfigurationForBusinessOpenCloseTask.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessOpenCloseTask();
    } else if (mobileFabricConfigurationForBusinessOpenCloseTask.isKonySDKObjectInitialized) {
        getBusinessOpenCloseTask();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForBusinessOpenCloseTask() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessOpenCloseTask.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessOpenCloseTask.konysdkObject.init(mobileFabricConfigurationForBusinessOpenCloseTask.appKey, mobileFabricConfigurationForBusinessOpenCloseTask.appSecret, mobileFabricConfigurationForBusinessOpenCloseTask.serviceURL, initializeMobileFabricForBusinessOpenCloseTaskSuccess, initializeMobileFabricForBusinessOpenCloseTaskFailure);
        // alert(getBusinessOpenCloseTask());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessOpenCloseTaskSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessOpenCloseTask.isKonySDKObjectInitialized = true;
    //  kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessOpenCloseTask();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessOpenCloseTaskFailure(error) {
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
    mobileFabricConfigurationForBusinessOpenCloseTask.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessOpenCloseTask();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessOpenCloseTask() {
    //  alert("inside getBusinessOpenCloseTask");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessOpenCloseTask.integrationObj = mobileFabricConfigurationForBusinessOpenCloseTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessOpenCloseTask.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForBusinessOpenCloseTask.integrationServices[0].operations[0];
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
        mobileFabricConfigurationForBusinessOpenCloseTask.integrationObj.invokeOperation(operationName, headers, dataBusId, getBusinessOpenCloseTaskSuccessCallback, getBusinessOpenCloseTaskErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessOpenCloseTaskSuccessCallback(gblBusinessOpenCloseTaskList) {
    // alert("inside getBusinessOpenCloseTaskSuccessCallback"+JSON.stringify(gblBusinessOpenCloseTaskList));
    // Check the opstatus for 0 meaning it worked
    if (gblBusinessOpenCloseTaskList !== null && gblBusinessOpenCloseTaskList.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblBusinessOpenCloseTaskList.taskList[0].TasksDTO !== null) {
            // alert("2");
            // Making sure we have at least 1 article returned
            if (gblBusinessOpenCloseTaskList.taskList.length > 0) {
                // Now we know we have results so we'll print them out to check
                // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessOpenCloseTaskList.BusinessOpenCloseTaskList));
                gblTaskResponse = gblBusinessOpenCloseTaskList;
                setTaskSegData(gblTaskResponse);
                // var gblTaskResponse=JSON.stringify(BusinessOpenCloseTaskList);
                //Setting the segment widgetdataMap 
                //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
                //      //      Setting the data to the segment
                //      frmFoxNews.segNewsTitle.setVisibility(true);
                //          frmFoxNews.segNewsTitle.setData(BusinessOpenCloseTaskList.MessageDTO.news_item.title);
                //          kony.application.dismissLoadingScreen();
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + BusinessOpenCloseTaskList.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getBusinessOpenCloseTaskErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessOpenCloseTaskSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessOpenCloseTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //  alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getBusinessOpenCloseTaskSuccessCallback ********** ");
}

function setTaskSegData(gblTaskResponse) {
    try {
        if (gblTaskResponse != "undefined" && gblTaskResponse != undefined) {
            // alert("InSide setTaskSegData"+JSON.stringify(gblTaskResponse));
            // alert("InSide"+JSON.stringify(gblTaskResponse));
            mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.widgetDataMap = {
                "openTaskPersonProfilePic": "openTaskPersonProfilePic", // "contactImage": "contactImage",
                "openTaskName": "openTaskName",
                "openTaskBusiness": "openTaskBusiness",
                "markAsCompleteText": "markAsCompleteText",
                "markAsCompleteRichText": "markAsCompleteRichText",
                "lblRequestId": "lblRequestId"
            };
            mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.widgetDataMap = {
                "closedTaskName": "closedTaskName",
                "closedTaskBusiness": "closedTaskBusiness"
            };
            //need to map data for both open and closed tasks
            //alert("m1");
            if (gblTaskResponse["taskList"].length > 0) {
                var tempTaskDta = [];
                var len = gblTaskResponse["taskList"].length;
                // if(){} need to map data for both open and closed tasks
                // alert("m2==="+len);   
                for (var i = 0; i < len; i++) {
                    var title = gblTaskResponse["taskList"][i]["TasksDTO"][0].title;
                    // alert("title=="+title);
                    var request_id = gblTaskResponse["taskList"][i]["TasksDTO"][0].taskId;
                    // var name=gblTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0].businessName;
                    var name = gblTaskResponse["taskList"][i]["TasksDTO"][0].businessName;
                    var textTaskData = {
                        openTaskPersonProfilePic: "imgseglogo.png",
                        openTaskName: title,
                        openTaskBusiness: name,
                        lblRequestId: request_id,
                        //                             markAsCompleteText:MARK_A
                        markAsCompleteRichText: MARK_AS_COMPLETE
                    };
                    tempTaskDta.push(textTaskData);
                }
                // alert("setting"+JSON.stringify(tempTaskDta));
                mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.setData(tempTaskDta);
                kony.application.dismissLoadingScreen();
            }
        }
        kony.application.dismissLoadingScreen();
    } catch (e) {
        //just to avoid undefined type error
    }
}