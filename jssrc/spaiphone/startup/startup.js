//startup.js file
var appConfig = {
    appId: "JumpStartAbort1",
    appName: "JumpStartAbort1",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null,
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeCopyFBox00fe78492e0da42();
    initializeCopyFBox09e1c06f6a9bb44();
    initializeFBox011becb3c7bfa4f();
    initializeFBox018a2be4f3acd48();
    initializeFBox0488ce2c486374a();
    initializeFBox05b71795fc3da47();
    initializeFBox0788b6c38d49d4b();
    initializeFBox0943a0d8ad0544d();
    initializeFBox0a68c9c601d7046();
    initializeFBox0a770daf321f044();
    initializeFBox0add1169d948e49();
    initializeFBox0e63b85f9514944();
    initializeFBox0f790959ec8fb46();
    initializeFBox0f9037d0e9d804e();
    initializesegRecomendationRowTemplate();
    initializesegRowMessageListTemplate();
    initializeSegRowTemplateType1();
    initializeSegRowTempType2();
    initializeTemp0763afb691ec34c();
    flxContainerHomeGlobals();
    flxFormRegistrationOptionGlobals();
    formMessagesGlobals();
    formMessagesMainPageGlobals();
    frmDashBoardGlobals();
    loginGlobals();
    mainPageGlobals();
    myProfileGlobals();
    registerGlobals();
    searchPageGlobals();
    userInfoPageGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            mainPage.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"]
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};