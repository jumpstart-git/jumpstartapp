mobileFabricConfigurationForBusinessChangePassword = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessChangePassword",
        operations: ["changePasswordForBusiness"]
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
function BusinessBusinessChangePassword() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForBusinessChangePassword.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessChangePassword();
    } else if (mobileFabricConfigurationForBusinessChangePassword.isKonySDKObjectInitialized) {
        setBusinessChangePassword();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForBusinessChangePassword() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessChangePassword.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessChangePassword.konysdkObject.init(mobileFabricConfigurationForBusinessChangePassword.appKey, mobileFabricConfigurationForBusinessChangePassword.appSecret, mobileFabricConfigurationForBusinessChangePassword.serviceURL, initializeMobileFabricForBusinessChangePasswordSuccess, initializeMobileFabricForBusinessChangePasswordFailure);
        // alert(getNotification());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessChangePasswordSuccess(response) {
    // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessChangePassword.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    setBusinessChangePassword();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessChangePasswordFailure(error) {
    // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForBusinessChangePassword.authClient = mobileFabricConfigurationForBusinessChangePassword.konysdkObject.getIdentityService(mobileFabricConfigurationForBusinessChangePassword.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfigurationForBusinessChangePassword.identityServices[0].username,
        "password": mobileFabricConfigurationForBusinessChangePassword.identityServices[0].password
    };
    mobileFabricConfigurationForBusinessChangePassword.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessChangePassword.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    setBusinessChangePassword();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function setBusinessChangePassword() {
    //alert("inside TaskDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessChangePassword.integrationObj = mobileFabricConfigurationForBusinessChangePassword.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessChangePassword.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForBusinessChangePassword.integrationServices[0].operations[0];
        var headers = {};
        // alert("operation name"+operationName);
        var credentials = {};
        credentials["userName"] = kony.store.getItem("BusinessEmailId");
        credentials["oldPassword"] = BusinessProfile.ChangePasswordBOdyContainer.CurrentPasswordInputField.text;
        credentials["newPassword"] = BusinessProfile.ChangePasswordBOdyContainer.ReEnterNewpasswordInputField.text;
        //alert("From AcceptedTask"+JSON.stringify(credentials));
        mobileFabricConfigurationForBusinessChangePassword.integrationObj.invokeOperation(operationName, headers, credentials, getBusinessChangePasswordSuccessCallback, getBusinessChangePasswordErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessChangePasswordSuccessCallback(credentials) {
    //alert("inside success"+JSON.stringify(credentials));
    if (credentials != "undefined" && credentials != undefined) {
        //alert("InSide"+JSON.stringify(credentials));
        var successValue = credentials.pwdChange;
        var errcode = credentials.errorCode;
        var isBusiness = credentials.isBusiness;
        if ((successValue == "success") && (errcode == "null")) {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": "Confirmation",
                "yesLabel": "OK",
                "noLabel": "No",
                "message": "Password changed successfully",
                "alertHandler": "null"
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            // alert("Password changed successfully");
            logoutOfApplication();
            kony.application.dismissLoadingScreen();
        } else if ((successValue = "failure") || (errcode == "The current password doesn't match. Please re-enter the correct password")) {
            alert("The current password doesn't match. Please re-enter the correct password");
            kony.application.dismissLoadingScreen();
        }
    }
}

function getBusinessChangePasswordErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert("Network is not available");
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}