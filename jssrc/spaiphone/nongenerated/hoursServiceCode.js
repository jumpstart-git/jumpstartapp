//Type your code here
mobileFabricConfigurationForHours = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "HoursService",
        operations: ["hourOperation"]
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
function hoursCheck() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForHours.isKonySDKObjectInitialized) {
        mobileFabricConfigurationForHoursModule();
    } else if (mobileFabricConfigurationForHours.isKonySDKObjectInitialized) {
        getHoursResult();
    }
}

function mobileFabricConfigurationForHoursModule() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForHours.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForHours.konysdkObject.init(mobileFabricConfigurationForHours.appKey, mobileFabricConfigurationForHours.appSecret, mobileFabricConfigurationForHours.serviceURL, mobileFabricConfigurationForHoursSuccess, mobileFabricConfigurationForHoursFail);
        //  alert("bbbb");
    } else
    //alert ("Network unavailable. Please check your network settings. ");
        kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForHoursSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForHours.isKonySDKObjectInitialized = true;
    //kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getHoursResult();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForHoursFail(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    // alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
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
    //  alert (" ********** Entering into loginMFSuccess ********** ");
    // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForsearchBusiness.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getNotification();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getHoursResult() {
    //  alert("2");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        // alert("3");
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForHours.integrationObj = mobileFabricConfigurationForHours.konysdkObject.getIntegrationService(mobileFabricConfigurationForHours.integrationServices[0].service);
        // mobileFabricConfigurationForVolunteer.integrationObj = mobileFabricConfigurationForVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteer.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForHours.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("4");
        //var data="1";
        var data = {};
        data["taskId"] = gblTaskIdForHours; //"51";//2310145";//gblTaskIdForHours;
        //alert("5");
        data["TasksVolHoursDTO"] = gblarrFinalVal;
        //alert("operation name"+operationName);
        //  alert("innn"+JSON.stringify(data));
        mobileFabricConfigurationForHours.integrationObj.invokeOperation(operationName, headers, data, getHoursSuccesssscallback, getHoursDataErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getHoursSuccesssscallback(gblHoursCheckResult) {
    //alert(JSON.stringify(gblHoursCheckResult));
    mainPage.show();
    mainPage.TaskDetailsContainer.isVisible = false;
    kony.application.dismissLoadingScreen();
}

function getHoursDataErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert("Failed to fetch response ");
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}