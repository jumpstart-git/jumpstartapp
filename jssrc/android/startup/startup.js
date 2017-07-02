//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "JumpStart",
    appName: "JumpStart",
    appVersion: "1.5",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "JumpStart",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeCopyFBox00fe78492e0da42();
    initializeCopyFBox01025bd15839e46();
    initializeCopyFBox0325cab479ecc4e();
    initializeCopyFBox045aefb0898ba4a();
    initializeCopyFBox065d0320c900743();
    initializeCopyFBox09e1c06f6a9bb44();
    initializeCopyFBox0c6a7a9e8b6494b();
    initializeFBox002ffa33914ea45();
    initializeFBox005476b2895eb45();
    initializeFBox011becb3c7bfa4f();
    initializeFBox018a2be4f3acd48();
    initializeFBox0488ce2c486374a();
    initializeFBox0495998e57f7e42();
    initializeFBox05b71795fc3da47();
    initializeFBox0788b6c38d49d4b();
    initializeFBox0943a0d8ad0544d();
    initializeFBox0add1169d948e49();
    initializeFBox0dac93f59f6db45();
    initializeFBox0e89732147d1641();
    initializeFBox0ebe39ec296d744();
    initializeFBox0f790959ec8fb46();
    initializeLogHoursSegmentHeader();
    initializesegRecomendationRowTemplate();
    initializesegRowMessageListTemplate();
    initializeSegRowTemplateType1();
    initializeSegRowTempType2();
    businessDetailsConfirmationPageGlobals();
    businessMyProfileGlobals();
    BusinessProfileGlobals();
    frmPushGlobals();
    LogHoursFormsGlobals();
    loginGlobals();
    mainPageGlobals();
    MyActivityProfilesGlobals();
    pop1Globals();
    pop2Globals();
    registrationAccountPageGlobals();
    registrationDonePageGlobals();
    registrationPageGlobals();
    registrationPersonalPageGlobals();
    registrationProfessionalPageGlobals();
    registrationSchedulePageGlobals();
    registrationSummaryPageGlobals();
    ReportingPageGlobals();
    resetPasswordFormGlobals();
    scheduleNewFormGlobals();
    searchPageGlobals();
    searchResultProfileGlobals();
    userInfoPageGlobals();
    volunteerMyProfilePageGlobals();
    volunteerMyProfilePageChangePasswordGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            login.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};