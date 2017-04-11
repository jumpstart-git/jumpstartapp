mobileFabricConfigurationForVolunteerUnCheckBox = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "checkBoxservice",
        operations: ["checkBox"]
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
function UnCheckBoxFunction7() {
    //alert("1");
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //kony.application.dismissLoadingScreen();
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
    if (!mobileFabricConfigurationForVolunteerUnCheckBox.isKonySDKObjectInitialized) {
        initializeMobileFabricForUnCheckBoxFunction();
    } else if (mobileFabricConfigurationForVolunteerUnCheckBox.isKonySDKObjectInitialized) {
        setUnCheckBoxFunction();
    }
}
//            else{
//                       alert("2); The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForUnCheckBoxFunction() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerUnCheckBox.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolunteerUnCheckBox.konysdkObject.init(mobileFabricConfigurationForVolunteerUnCheckBox.appKey, mobileFabricConfigurationForVolunteerUnCheckBox.appSecret, mobileFabricConfigurationForVolunteerUnCheckBox.serviceURL, initializeMobileFabricForUnCheckBoxFunctionSuccess, initializeMobileFabricForUnCheckBoxFunctionFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForUnCheckBoxFunctionSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerUnCheckBox.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setUnCheckBoxFunction();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForUnCheckBoxFunctionFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //   alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForVolunteerUnCheckBox.authClient = mobileFabricConfigurationForVolunteerUnCheckBox.konysdkObject.getIdentityService(mobileFabricConfigurationForVolunteerUnCheckBox.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForVolunteerUnCheckBox.identityServices[0].username,
        "password": mobileFabricConfigurationForVolunteerUnCheckBox.identityServices[0].password
    };
    mobileFabricConfigurationForVolunteerUnCheckBox.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerUnCheckBox.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setUnCheckBoxFunction();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setUnCheckBoxFunction() {
    //alert("inside set");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerUnCheckBox.integrationObj = mobileFabricConfigurationForVolunteerUnCheckBox.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerUnCheckBox.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolunteerUnCheckBox.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var dataCheckBoxFunction = {};
        if (kony.store.getItem("isBusOrVol") == "business") {
            dataCheckBoxFunction["userName"] = kony.store.getItem("BusinessEmailId");
        } else {
            dataCheckBoxFunction["userName"] = kony.store.getItem("loginEmail");
        }
        dataCheckBoxFunction["accept"] = "n";
        //alert("dataCheckBoxFunction"+JSON.stringify(dataCheckBoxFunction));
        mobileFabricConfigurationForVolunteerUnCheckBox.integrationObj.invokeOperation(operationName, headers, dataCheckBoxFunction, getCheckBoxFunctionSuccessCallback77, getCheckBoxFunctionErrorCallback77);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getCheckBoxFunctionSuccessCallback77(dataCheckBoxFunction16) {
    //alert("inside success"+JSON.stringify(dataCheckBoxFunction16));
    if (dataCheckBoxFunction16 != "undefined" && dataCheckBoxFunction16 != undefined) {
        //alert("InSide"+JSON.stringify(dataCheckBoxFunction));
    }
    kony.application.dismissLoadingScreen();
}

function getCheckBoxFunctionErrorCallback77(error) {
    //alert("inside error callback");
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //  alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
    kony.ui.Alert({
        //D022: Changed alertType from ALERT_TYPE_INFO to ALERT_TYPE_CONFIRMATION
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"
        "alertTitle": "Confirmation",
        //End of D005
        "yesLabel": "OK",
        "noLabel": "No",
<<<<<<< Updated upstream
        //D022: Changed message from "Email notifications disabled" to "You have disabled email notification"
        "message": "You have disabled email notification",
        "alertHandler": null
=======
        "message": "Email notifications disabled",
        "alertHandler": "null"
>>>>>>> Stashed changes
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    // alert("Email notifications disabled");
}