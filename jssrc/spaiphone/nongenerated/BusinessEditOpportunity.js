var gblReqForTaskDetails;
mobileFabricConfigurationForUpdateOpportunity = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessUpdateOpportunity",
        operations: ["updateOpportunity"]
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
function UpdateOpportunity() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForUpdateOpportunity.isKonySDKObjectInitialized) {
        initializeMobileFabricForUpdateOpportunity();
    } else if (mobileFabricConfigurationForUpdateOpportunity.isKonySDKObjectInitialized) {
        setUpdateOpportunity();
    }
}

function initializeMobileFabricForUpdateOpportunity() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForUpdateOpportunity.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForUpdateOpportunity.konysdkObject.init(mobileFabricConfigurationForUpdateOpportunity.appKey, mobileFabricConfigurationForUpdateOpportunity.appSecret, mobileFabricConfigurationForUpdateOpportunity.serviceURL, initializeMobileFabricForUpdateOpportunitySuccess, initializeMobileFabricForUpdateOpportunityFailure);
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForUpdateOpportunitySuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForUpdateOpportunity.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setUpdateOpportunity();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForUpdateOpportunityFailure(error) {
    // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForUpdateOpportunity.authClient = mobileFabricConfigurationForUpdateOpportunity.konysdkObject.getIdentityService(mobileFabricConfigurationForUpdateOpportunity.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForUpdateOpportunity.identityServices[0].username,
        "password": mobileFabricConfigurationForUpdateOpportunity.identityServices[0].password
    };
    mobileFabricConfigurationForUpdateOpportunity.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForUpdateOpportunity.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setUpdateOpportunity();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setUpdateOpportunity() {
    //   alert("inside UpdateOpp");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForUpdateOpportunity.integrationObj = mobileFabricConfigurationForUpdateOpportunity.konysdkObject.getIntegrationService(mobileFabricConfigurationForUpdateOpportunity.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForUpdateOpportunity.integrationServices[0].operations[0];
        var headers = {};
        /*
 "taskId":"1384",
"businessId":"112",
"title":"Opportunity 1Mamata",
"details":"Opportunity Mamata Details",
"startDate":"2016-12-04", 
"endDate":"2016-12-04",
"hoursRequired":"50",
"taskskills":"java C++"

mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.dateComponents=[day1,month1,year1];
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppEndDateCalendarInput.dateComponents=[day1,month1,year1];
 */
        // alert("operation name"+operationName);
        var opprUpdateDetails = {};
        opprUpdateDetails["businessId"] = kony.store.getItem("businessId");
        opprUpdateDetails["taskId"] = kony.store.getItem("TaskIdFromOppSegForEdit");
        opprUpdateDetails["title"] = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppTitleInputLabel.text;
        var rawDetails = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppDetailsInputLabel.text;
        var modifiedDetails = rawDetails.replace(/(\r\n|\n|\r)/gm, "");
        opprUpdateDetails["details"] = modifiedDetails;
        opprUpdateDetails["hoursRequired"] = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppHoursInputLabel.text;
        opprUpdateDetails["taskSkills"] = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppSkillsInputLabel.text;
        var str = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.formattedDate;
        var arr = str.split("/");
        var actStartDate1 = arr[2] + "-" + arr[1] + "-" + arr[0];
        var str1 = mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppEndDateCalendarInput.formattedDate;
        var arr1 = str1.split("/");
        var actEndDate1 = arr1[2] + "-" + arr1[1] + "-" + arr1[0];
        opprUpdateDetails["startDate"] = actStartDate1;
        opprUpdateDetails["endDate"] = actEndDate1;
        //  alert(JSON.stringify(opprUpdateDetails));
        mobileFabricConfigurationForUpdateOpportunity.integrationObj.invokeOperation(operationName, headers, opprUpdateDetails, getUpdateOpportunitySuccessCallback, getUpdateOpportunityErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getUpdateOpportunitySuccessCallback(opprUpdateDetails) {
    //alert("inside success"+JSON.stringify(opprUpdateDetails));
    if (opprUpdateDetails != "undefined" && opprUpdateDetails != undefined) {
        //alert("InSide"+JSON.stringify(opprUpdateDetails));
    }
}

function getUpdateOpportunityErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppTitleInputLabel.text = "";
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppDetailsInputLabel.text = "";
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppSkillsInputLabel.text = "";
    mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppHoursInputLabel.text = "";
    mainPage.opportunityDetailsContainer.isVisible = false;
    BusinessOpenCloseTaskService();
    kony.application.dismissLoadingScreen();
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}