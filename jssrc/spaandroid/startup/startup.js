//startup.js file
var appConfig = {
    appId: "JumpStartAbort1",
    appName: "JumpStartAbort1",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "80",
    secureServerPort: "443",
    isturlbase: "https://cba-jumpstart.konycloud.com/services",
    isMFApp: true,
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceUrl: "https://100014964.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "78b57a8a-9887-402c-a0a0-e208a518658d",
        "baseId": "6730d87c-fb79-4caf-a159-71f33f12fde1",
        "name": "JumpStartUAT",
        "selflink": "https://100014964.auth.konycloud.com/appconfig",
        "integsvc": {
            "Login": "https://cba-jumpstart.konycloud.com/services/Login",
            "Login9": "https://cba-jumpstart.konycloud.com/services/Login9",
            "Weather": "https://cba-jumpstart.konycloud.com/services/Weather",
            "CBALogin": "https://cba-jumpstart.konycloud.com/services/CBALogin",
            "Volunteers": "https://cba-jumpstart.konycloud.com/services/Volunteers",
            "AcceptReqVol": "https://cba-jumpstart.konycloud.com/services/AcceptReqVol",
            "CancelVolReq": "https://cba-jumpstart.konycloud.com/services/CancelVolReq",
            "Registration": "https://cba-jumpstart.konycloud.com/services/Registration",
            "VolopenTasks": "https://cba-jumpstart.konycloud.com/services/VolopenTasks",
            "DeclineReqVol": "https://cba-jumpstart.konycloud.com/services/DeclineReqVol",
            "VolDeclineReq": "https://cba-jumpstart.konycloud.com/services/VolDeclineReq",
            "VolMyActivity": "https://cba-jumpstart.konycloud.com/services/VolMyActivity",
            "VolunteersEC2": "https://cba-jumpstart.konycloud.com/services/VolunteersEC2",
            "MerinVolActivity": "https://cba-jumpstart.konycloud.com/services/MerinVolActivity",
            "VolunteerProfile": "https://cba-jumpstart.konycloud.com/services/VolunteerProfile",
            "AcceptTaskDetails": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetails",
            "DeclineRequestVol": "https://cba-jumpstart.konycloud.com/services/DeclineRequestVol",
            "VolunteerGetTasks": "https://cba-jumpstart.konycloud.com/services/VolunteerGetTasks",
            "CancelReqVolunteer": "https://cba-jumpstart.konycloud.com/services/CancelReqVolunteer",
            "acceptReqVolunteer": "https://cba-jumpstart.konycloud.com/services/acceptReqVolunteer",
            "BusinessGetRequests": "https://cba-jumpstart.konycloud.com/services/BusinessGetRequests",
            "NotificationService": "https://cba-jumpstart.konycloud.com/services/NotificationService",
            "VolunteerMyActivity": "https://cba-jumpstart.konycloud.com/services/VolunteerMyActivity",
            "VolunteergetRequest": "https://cba-jumpstart.konycloud.com/services/VolunteergetRequest",
            "BusinessCancelRequest": "https://cba-jumpstart.konycloud.com/services/BusinessCancelRequest",
            "VolunteerNotification": "https://cba-jumpstart.konycloud.com/services/VolunteerNotification",
            "AcceptTaskforVolunteer": "https://cba-jumpstart.konycloud.com/services/AcceptTaskforVolunteer",
            "BusinessDeclineRequest": "https://cba-jumpstart.konycloud.com/services/BusinessDeclineRequest",
            "BusinessMarkAsComplete": "https://cba-jumpstart.konycloud.com/services/BusinessMarkAsComplete",
            "CancelRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/CancelRequestVolunteer",
            "GetMyActivityOpenTasks": "https://cba-jumpstart.konycloud.com/services/GetMyActivityOpenTasks",
            "VolunteerNotification1": "https://cba-jumpstart.konycloud.com/services/VolunteerNotification1",
            "BusinessRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/BusinessRequestVolunteer",
            "IndigenousBusineeProfile": "https://cba-jumpstart.konycloud.com/services/IndigenousBusineeProfile",
            "VolunteerRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/VolunteerRequestVolunteer",
            "Copy1businessSearchService": "https://cba-jumpstart.konycloud.com/services/Copy1businessSearchService",
            "BusinessMyActivityNotification": "https://cba-jumpstart.konycloud.com/services/BusinessMyActivityNotification",
            "News": "https://cba-jumpstart.konycloud.com/services/News",
            "VolGetTasks": "https://cba-jumpstart.konycloud.com/services/VolGetTasks",
            "LocationLookup": "https://cba-jumpstart.konycloud.com/services/LocationLookup",
            "VolunteerSkills": "https://cba-jumpstart.konycloud.com/services/VolunteerSkills",
            "TasksForVolunteer": "https://cba-jumpstart.konycloud.com/services/TasksForVolunteer",
            "TaskRequestService": "https://cba-jumpstart.konycloud.com/services/TaskRequestService",
            "RegistrationService": "https://cba-jumpstart.konycloud.com/services/RegistrationService",
            "VolunteerAcceptTask": "https://cba-jumpstart.konycloud.com/services/VolunteerAcceptTask",
            "BusinessSearchService": "https://cba-jumpstart.konycloud.com/services/BusinessSearchService",
            "acceptRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/acceptRequestVolunteer",
            "BusinessStartEngagement": "https://cba-jumpstart.konycloud.com/services/BusinessStartEngagement",
            "VolunteerRequestDetails": "https://cba-jumpstart.konycloud.com/services/VolunteerRequestDetails",
            "requestToVolunteerService": "https://cba-jumpstart.konycloud.com/services/requestToVolunteerService",
            "AcceptTaskDetailsforVolunteer": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetailsforVolunteer"
        },
        "reportingsvc": {
            "custom": "https://cba-jumpstart.konycloud.com/services/CMS",
            "session": "https://cba-jumpstart.konycloud.com/services/IST"
        },
        "Webapp": {
            "url": "https://cba-jumpstart.konycloud.com/JumpStartAbort1"
        },
        "services_meta": {
            "Login": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Login",
                "type": "integsvc"
            },
            "Login9": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Login9",
                "type": "integsvc"
            },
            "Weather": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Weather",
                "type": "integsvc"
            },
            "CBALogin": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CBALogin",
                "type": "integsvc"
            },
            "Volunteers": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Volunteers",
                "type": "integsvc"
            },
            "AcceptReqVol": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AcceptReqVol",
                "type": "integsvc"
            },
            "CancelVolReq": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CancelVolReq",
                "type": "integsvc"
            },
            "Registration": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Registration",
                "type": "integsvc"
            },
            "VolopenTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolopenTasks",
                "type": "integsvc"
            },
            "DeclineReqVol": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/DeclineReqVol",
                "type": "integsvc"
            },
            "VolDeclineReq": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolDeclineReq",
                "type": "integsvc"
            },
            "VolMyActivity": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolMyActivity",
                "type": "integsvc"
            },
            "VolunteersEC2": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteersEC2",
                "type": "integsvc"
            },
            "MerinVolActivity": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/MerinVolActivity",
                "type": "integsvc"
            },
            "VolunteerProfile": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerProfile",
                "type": "integsvc"
            },
            "AcceptTaskDetails": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetails",
                "type": "integsvc"
            },
            "DeclineRequestVol": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/DeclineRequestVol",
                "type": "integsvc"
            },
            "VolunteerGetTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerGetTasks",
                "type": "integsvc"
            },
            "CancelReqVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CancelReqVolunteer",
                "type": "integsvc"
            },
            "acceptReqVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/acceptReqVolunteer",
                "type": "integsvc"
            },
            "BusinessGetRequests": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessGetRequests",
                "type": "integsvc"
            },
            "NotificationService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/NotificationService",
                "type": "integsvc"
            },
            "VolunteerMyActivity": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerMyActivity",
                "type": "integsvc"
            },
            "VolunteergetRequest": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteergetRequest",
                "type": "integsvc"
            },
            "BusinessCancelRequest": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessCancelRequest",
                "type": "integsvc"
            },
            "VolunteerNotification": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerNotification",
                "type": "integsvc"
            },
            "AcceptTaskforVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AcceptTaskforVolunteer",
                "type": "integsvc"
            },
            "BusinessDeclineRequest": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessDeclineRequest",
                "type": "integsvc"
            },
            "BusinessMarkAsComplete": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessMarkAsComplete",
                "type": "integsvc"
            },
            "CancelRequestVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CancelRequestVolunteer",
                "type": "integsvc"
            },
            "GetMyActivityOpenTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/GetMyActivityOpenTasks",
                "type": "integsvc"
            },
            "VolunteerNotification1": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerNotification1",
                "type": "integsvc"
            },
            "BusinessRequestVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessRequestVolunteer",
                "type": "integsvc"
            },
            "IndigenousBusineeProfile": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/IndigenousBusineeProfile",
                "type": "integsvc"
            },
            "VolunteerRequestVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerRequestVolunteer",
                "type": "integsvc"
            },
            "Copy1businessSearchService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Copy1businessSearchService",
                "type": "integsvc"
            },
            "BusinessMyActivityNotification": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessMyActivityNotification",
                "type": "integsvc"
            },
            "News": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/News",
                "type": "integsvc"
            },
            "VolGetTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolGetTasks",
                "type": "integsvc"
            },
            "LocationLookup": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/LocationLookup",
                "type": "integsvc"
            },
            "VolunteerSkills": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerSkills",
                "type": "integsvc"
            },
            "TasksForVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/TasksForVolunteer",
                "type": "integsvc"
            },
            "TaskRequestService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/TaskRequestService",
                "type": "integsvc"
            },
            "RegistrationService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/RegistrationService",
                "type": "integsvc"
            },
            "VolunteerAcceptTask": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerAcceptTask",
                "type": "integsvc"
            },
            "BusinessSearchService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessSearchService",
                "type": "integsvc"
            },
            "acceptRequestVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/acceptRequestVolunteer",
                "type": "integsvc"
            },
            "BusinessStartEngagement": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessStartEngagement",
                "type": "integsvc"
            },
            "VolunteerRequestDetails": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerRequestDetails",
                "type": "integsvc"
            },
            "requestToVolunteerService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/requestToVolunteerService",
                "type": "integsvc"
            },
            "AcceptTaskDetailsforVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetailsforVolunteer",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://cba-jumpstart.konycloud.com/JumpStartAbort1/MWServlet",
    secureurl: "https://cba-jumpstart.konycloud.com/JumpStartAbort1/MWServlet",
    middlewareContext: "JumpStartAbort1"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeCopyFBox00fe78492e0da42();
    initializeCopyFBox01025bd15839e46();
    initializeCopyFBox09e1c06f6a9bb44();
    initializeFBox002ffa33914ea45();
    initializeFBox011becb3c7bfa4f();
    initializeFBox018a2be4f3acd48();
    initializeFBox0488ce2c486374a();
    initializeFBox05b71795fc3da47();
    initializeFBox0788b6c38d49d4b();
    initializeFBox0943a0d8ad0544d();
    initializeFBox0add1169d948e49();
    initializeFBox0dac93f59f6db45();
    initializeFBox0e89732147d1641();
    initializeFBox0f790959ec8fb46();
    initializesegRecomendationRowTemplate();
    initializesegRowMessageListTemplate();
    initializeSegRowTemplateType1();
    initializeSegRowTempType2();
    initializeTemp0763afb691ec34c();
    businessDetailsConfirmationPageGlobals();
    businessMyProfileGlobals();
    loginGlobals();
    mainPageGlobals();
    registrationAccountPageGlobals();
    registrationDonePageGlobals();
    registrationPageGlobals();
    registrationPersonalPageGlobals();
    registrationProfessionalPageGlobals();
    registrationSchedulePageGlobals();
    registrationSummaryPageGlobals();
    searchPageGlobals();
    searchResultProfileGlobals();
    userInfoPageGlobals();
    volunteerMyProfilePageGlobals();
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
            login.show();
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
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "serviceUrl": appConfig.serviceUrl,
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