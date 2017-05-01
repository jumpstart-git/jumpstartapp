function unAssignedTaskSegData1() {
    var dataOfUnassignedSeg = mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.selectedRowItems;
    //alert("Inside get task details");
    //  alert(dataOfUnassignedSeg);
    var oppIdForDeletion = dataOfUnassignedSeg[0].taskId;
    // alert(oppIdForDeletion);
    kony.store.setItem("TaskIdFromOppSeg", oppIdForDeletion);
    DeleteOpportunityService();
}
mobileFabricConfigurationForDeleteOpportunity = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47",
    //appSecret:"c600a59925b36419de1546056cd21557",
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessDeleteOpportunity",
        operations: ["deleteOpportunity"]
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
function DeleteOpportunityService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //alert("inside del opppor service");
    //unAssignedTaskSegData();
    if (!mobileFabricConfigurationForDeleteOpportunity.isKonySDKObjectInitialized) {
        initializeMobileFabricForDeleteOpportunity();
    } else if (mobileFabricConfigurationForDeleteOpportunity.isKonySDKObjectInitialized) {
        getDeleteOpportunity();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForDeleteOpportunity() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForDeleteOpportunity.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForDeleteOpportunity.konysdkObject.init(mobileFabricConfigurationForDeleteOpportunity.appKey, mobileFabricConfigurationForDeleteOpportunity.appSecret, mobileFabricConfigurationForDeleteOpportunity.serviceURL, initializeMobileFabricForDeleteOpportunitySuccess, initializeMobileFabricForDeleteOpportunityFailure);
        // alert(getDeleteOpportunity());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForDeleteOpportunitySuccess(response) {
    //alert("inside del vol service success");
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForDeleteOpportunity.isKonySDKObjectInitialized = true;
    //  kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getDeleteOpportunity();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForDeleteOpportunityFailure(error) {
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
    mobileFabricConfigurationForDeleteOpportunity.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getDeleteOpportunity();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getDeleteOpportunity() {
    // alert("inside getDeleteOpportunity");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForDeleteOpportunity.integrationObj = mobileFabricConfigurationForDeleteOpportunity.konysdkObject.getIntegrationService(mobileFabricConfigurationForDeleteOpportunity.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForDeleteOpportunity.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        var OppId = {};
        OppId["id"] = kony.store.getItem("TaskIdFromOppSeg"); //"1";//kony.store.getItem("businessId");
        //alert("id"+OppId["id"]);
        mobileFabricConfigurationForDeleteOpportunity.integrationObj.invokeOperation(operationName, headers, OppId, getDeleteOpportunitySuccessCallback, getDeleteOpportunityErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getDeleteOpportunitySuccessCallback(gblDeleteOpportunityList) {
    // alert("inside getDeleteOpportunitySuccessCallback"+JSON.stringify(gblDeleteOpportunityList));
    // Check the opstatus for 0 meaning it worked
    if (gblDeleteOpportunityList !== null && gblDeleteOpportunityList.opstatus === 0) { //first if
        if (gblDeleteOpportunityList != null && gblDeleteOpportunityList != undefined) { //second if
            if (gblDeleteOpportunityList !== null && gblDeleteOpportunityList != undefined) { //3rd if
                // alert("2");
                // Making sure we have at least 1 article returned
                //       if (gblDeleteOpportunityList.length > 0)
                //       {//4th if
                // Now we know we have results so we'll print them out to check
                // alert ("########## Response received from service call: ");
                delvOppResponse = gblDeleteOpportunityList;
                getBusinessOpportunityDeleted(delvOppResponse);
                //}//end of 4th if
            } //end of 3rd if
        } //end of 2nd if
        else {
            kony.application.dismissLoadingScreen();
            // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
            kony.ui.Alert({
                message: "Service call failed with opstatus " + DeleteOpportunityList.opstatus,
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: "Fox News",
                yesLabel: "OK"
            }, {});
        }
    } //end first if
} //end of fun
function getDeleteOpportunityErrorCallback(error) {
    kony.print(" ********** Entering into getDeleteOpportunitySuccessCallback ********** ");
    kony.print(" ********** Failure in getDeleteOpportunitySuccessCallback: " + JSON.stringify(error) + " ********** ");
    mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.removeAll();
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "Confirmation",
        "yesLabel": "OK",
        "noLabel": "No",
        "message": "Brief has been removed from the list",
        "alertHandler": null
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    //mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.removeAll();
    //alert("Opportunity has been removed from the list");
    BusinessOpenCloseTaskService();
    kony.application.dismissLoadingScreen();
    mainPage.destroy();
    mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible = true;
    mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible = true;
    BusinessRecommendationService();
    mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible = false;
    mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible = true;
    mainPage.unAssignedTasksContainer.isVisible = true;
    mainPage.show();
    //  alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getDeleteOpportunitySuccessCallback ********** ");
}

function getBusinessOpportunityDeleted(delvOppResponse) {
    if (delvOppResponse != "undefined" && delvOppResponse != undefined) {}
    kony.application.dismissLoadingScreen();
    //BusinessCloseTaskService ();
}