//Type your code here
mobileFabricConfigurationForReportIndBusCode = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "ReportIndBus",
        operations: ["reportIndBusOperation"]
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
function validateReportIndBusCode() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForReportIndBusCode.isKonySDKObjectInitialized) {
        mobileFabricConfigurationReportIndBusCodeValidation();
    } else if (mobileFabricConfigurationForReportIndBusCode.isKonySDKObjectInitialized) {
        getReportIndBusCodeDataVal();
    }
}

function mobileFabricConfigurationReportIndBusCodeValidation() {
    // alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForReportIndBusCode.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForReportIndBusCode.konysdkObject.init(mobileFabricConfigurationForReportIndBusCode.appKey, mobileFabricConfigurationForReportIndBusCode.appSecret, mobileFabricConfigurationForReportIndBusCode.serviceURL, mobileFabricConfigurationCodeReportIndBusSuccess, mobileFabricConfigurationCodeReportIndBusFailure);
        //  alert("bbbb");
    } else
    //alert ("Network unavailable. Please check your network settings. ");
        kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationCodeReportIndBusSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //      alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForReportIndBusCode.isKonySDKObjectInitialized = true;
    //kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getReportIndBusCodeDataVal();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationCodeReportIndBusFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    alert(" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForRegCode.authClient = mobileFabricConfigurationForRegCode.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
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

function getReportIndBusCodeDataVal() {
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForReportIndBusCode.integrationObj = mobileFabricConfigurationForReportIndBusCode.konysdkObject.getIntegrationService(mobileFabricConfigurationForReportIndBusCode.integrationServices[0].service);
        // mobileFabricConfigurationForVolunteer.integrationObj = mobileFabricConfigurationForVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteer.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForReportIndBusCode.integrationServices[0].operations[0];
        var headers = {};
        var data = {};
        data["emailAddress"] = ReportingPage.ReceipientsTxtArea.text;
        data["businessId"] = kony.store.getItem("businessId");
        var startVal = ReportingPage.StartDateCalendar.formattedDate;
        var arrstartVal = startVal.split('/');
        data["startDate"] = arrstartVal[2] + "-" + arrstartVal[1] + "-" + arrstartVal[0];
        var endVal = ReportingPage.EndDateCalendar.formattedDate;
        var arrendVal = endVal.split('/');
        data["endDate"] = arrendVal[2] + "-" + arrendVal[1] + "-" + arrendVal[0];
        //alert("operation name"+operationName);
        // alert("inputting"+JSON.stringify(data));
        mobileFabricConfigurationForReportIndBusCode.integrationObj.invokeOperation(operationName, headers, data, reportIndBusCodeDataSuccessCallback, reportIndBusCodeDataErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function reportIndBusCodeDataSuccessCallback(gblreportIndBusCodeData) {
    //alert(JSON.stringify("successsss"+JSON.stringify(gblreportIndBusCodeData)));
    // alert(gblCodeData["codeValidate"]);
    mainPage.show();
    hideSideBar();
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": null,
        "yesLabel": "OK",
        "noLabel": "No",
        "message": "Business hours report successfully sent to your email",
        "alertHandler": "null"
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
    // alert("Business hours report successfully sent to your email");
    ReportingPage.ReportingData.ReportingdataFlex.ReceipientsTxtArea.text = "";
    kony.application.dismissLoadingScreen();
}

function reportIndBusCodeDataErrorCallback(error) {
    //alert(JSON.stringify(error));
    kony.application.dismissLoadingScreen();
}