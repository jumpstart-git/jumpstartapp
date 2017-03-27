mobileFabricConfigurationForAttachKSID = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "AttachKsidToUser",
        operations: ["attachKsid"]
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
// Function to invoke getFoxNews Service call LOADING_SCREEN_POSITION_FULL_SCREEN
function AttachKSIDService() {
    //alert("Inside attach service");
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //   gblMarkCompleteReq=valMarkComplete.widgetInfo.data[0].requestId; 
    //   alert("the selected"+JSON.stringify(gblMarkCompleteReq));
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
    if (!mobileFabricConfigurationForAttachKSID.isKonySDKObjectInitialized) {
        initializeMobileFabricForAttachKSID();
    } else if (mobileFabricConfigurationForAttachKSID.isKonySDKObjectInitialized) {
        setAttachKSID();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForAttachKSID() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForAttachKSID.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForAttachKSID.konysdkObject.init(mobileFabricConfigurationForAttachKSID.appKey, mobileFabricConfigurationForAttachKSID.appSecret, mobileFabricConfigurationForAttachKSID.serviceURL, initializeMobileFabricForAttachKSIDSuccess, initializeMobileFabricForAttachKSIDFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForAttachKSIDSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForAttachKSID.isKonySDKObjectInitialized = true;
    //kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setAttachKSID();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForAttachKSIDFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    alert(" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForAttachKSID.authClient = mobileFabricConfigurationForAttachKSID.konysdkObject.getIdentityService(mobileFabricConfigurationForAttachKSID.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForAttachKSID.identityServices[0].username,
        "password": mobileFabricConfigurationForAttachKSID.identityServices[0].password
    };
    mobileFabricConfigurationForAttachKSID.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForAttachKSID.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setAttachKSID();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setAttachKSID() {
    // alert("inside attach ksid");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForAttachKSID.integrationObj = mobileFabricConfigurationForAttachKSID.konysdkObject.getIntegrationService(mobileFabricConfigurationForAttachKSID.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForAttachKSID.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var ksidDetails = {};
        ksidDetails["userName"] = kony.store.getItem("loginEmail");
        ksidDetails["ksid"] = kony.store.getItem("KSID");
        // alert(JSON.stringify(ksidDetails));
        mobileFabricConfigurationForAttachKSID.integrationObj.invokeOperation(operationName, headers, ksidDetails, getAttachKSIDSuccessCallback, getAttachKSIDErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getAttachKSIDSuccessCallback(ksidDetailsVal) {
    //alert("inside success getAttachKSIDSuccessCallback"+JSON.stringify(ksidDetails));
    kony.application.dismissLoadingScreen();
    if (ksidDetailsVal != "undefined" && ksidDetailsVal != undefined) {}
}

function getAttachKSIDErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    // kony.application.dismissLoadingScreen();
    // alert("KSID added to user table");
    // mainPage.show();
    if (kony.store.getItem("isBusOrVol") == "volunteer") {
        mainPage.show();
    } else {
        kony.application.dismissLoadingScreen();
    }
}