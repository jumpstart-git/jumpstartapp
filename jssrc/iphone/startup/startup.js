//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "JumpStartAbort1",
    appName: "JumpStartAbort1",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "JumpStartAbort1",
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
        "messagingsvc": {
            "appId": "78b57a8a-9887-402c-a0a0-e208a518658d",
            "url": "https://cba-jumpstart.messaging.konycloud.com/api/v1"
        },
        "integsvc": {
            "News": "https://cba-jumpstart.konycloud.com/services/News",
            "Login": "https://cba-jumpstart.konycloud.com/services/Login",
            "Login9": "https://cba-jumpstart.konycloud.com/services/Login9",
            "Weather": "https://cba-jumpstart.konycloud.com/services/Weather",
            "VolReport": "https://cba-jumpstart.konycloud.com/services/VolReport",
            "Volunteers": "https://cba-jumpstart.konycloud.com/services/Volunteers",
            "VolGetTasks": "https://cba-jumpstart.konycloud.com/services/VolGetTasks",
            "imageUpload": "https://cba-jumpstart.konycloud.com/services/imageUpload",
            "HoursService": "https://cba-jumpstart.konycloud.com/services/HoursService",
            "Registration": "https://cba-jumpstart.konycloud.com/services/Registration",
            "ReportIndBus": "https://cba-jumpstart.konycloud.com/services/ReportIndBus",
            "VolopenTasks": "https://cba-jumpstart.konycloud.com/services/VolopenTasks",
            "DeclineReqVol": "https://cba-jumpstart.konycloud.com/services/DeclineReqVol",
            "ResendRegCode": "https://cba-jumpstart.konycloud.com/services/ResendRegCode",
            "VolDeclineReq": "https://cba-jumpstart.konycloud.com/services/VolDeclineReq",
            "VolMyActivity": "https://cba-jumpstart.konycloud.com/services/VolMyActivity",
            "VolunteersEC2": "https://cba-jumpstart.konycloud.com/services/VolunteersEC2",
            "LocationLookup": "https://cba-jumpstart.konycloud.com/services/LocationLookup",
            "Recommendation": "https://cba-jumpstart.konycloud.com/services/Recommendation",
            "forgotPassword": "https://cba-jumpstart.konycloud.com/services/forgotPassword",
            "DeleteVolunteer": "https://cba-jumpstart.konycloud.com/services/DeleteVolunteer",
            "VolEndorsements": "https://cba-jumpstart.konycloud.com/services/VolEndorsements",
            "VolunteerSkills": "https://cba-jumpstart.konycloud.com/services/VolunteerSkills",
            "forgotPassword1": "https://cba-jumpstart.konycloud.com/services/forgotPassword1",
            "MerinVolActivity": "https://cba-jumpstart.konycloud.com/services/MerinVolActivity",
            "VolunteerProfile": "https://cba-jumpstart.konycloud.com/services/VolunteerProfile",
            "updateVolService": "https://cba-jumpstart.konycloud.com/services/updateVolService",
            "DeclineRequestVol": "https://cba-jumpstart.konycloud.com/services/DeclineRequestVol",
            "TasksForVolunteer": "https://cba-jumpstart.konycloud.com/services/TasksForVolunteer",
            "VolunteerGetTasks": "https://cba-jumpstart.konycloud.com/services/VolunteerGetTasks",
            "ReportSupplyNation": "https://cba-jumpstart.konycloud.com/services/ReportSupplyNation",
            "TaskRequestService": "https://cba-jumpstart.konycloud.com/services/TaskRequestService",
            "UpdateBusinessLogo": "https://cba-jumpstart.konycloud.com/services/UpdateBusinessLogo",
            "CreateOpportunities": "https://cba-jumpstart.konycloud.com/services/CreateOpportunities",
            "NotificationService": "https://cba-jumpstart.konycloud.com/services/NotificationService",
            "RegistrationService": "https://cba-jumpstart.konycloud.com/services/RegistrationService",
            "ValidateCodeService": "https://cba-jumpstart.konycloud.com/services/ValidateCodeService",
            "VolunteerAcceptTask": "https://cba-jumpstart.konycloud.com/services/VolunteerAcceptTask",
            "VolunteerMyActivity": "https://cba-jumpstart.konycloud.com/services/VolunteerMyActivity",
            "VolunteergetRequest": "https://cba-jumpstart.konycloud.com/services/VolunteergetRequest",
            "oppurtunitiesSearch": "https://cba-jumpstart.konycloud.com/services/oppurtunitiesSearch",
            "GetExistingOpenTasks": "https://cba-jumpstart.konycloud.com/services/GetExistingOpenTasks",
            "RequestToVolunteerOpp": "https://cba-jumpstart.konycloud.com/services/RequestToVolunteerOpp",
            "RequestVolunteerTasks": "https://cba-jumpstart.konycloud.com/services/RequestVolunteerTasks",
            "UpdateBusinessProfile": "https://cba-jumpstart.konycloud.com/services/UpdateBusinessProfile",
            "VolunteerNotification": "https://cba-jumpstart.konycloud.com/services/VolunteerNotification",
            "GetMyActivityOpenTasks": "https://cba-jumpstart.konycloud.com/services/GetMyActivityOpenTasks",
            "VolunteerNotification1": "https://cba-jumpstart.konycloud.com/services/VolunteerNotification1",
            "emailValidationService": "https://cba-jumpstart.konycloud.com/services/emailValidationService",
            "VolunteerRequestDetails": "https://cba-jumpstart.konycloud.com/services/VolunteerRequestDetails",
            "IndigenousBusineeProfile": "https://cba-jumpstart.konycloud.com/services/IndigenousBusineeProfile",
            "VolunteerRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/VolunteerRequestVolunteer",
            "requestToVolunteerService": "https://cba-jumpstart.konycloud.com/services/requestToVolunteerService",
            "Copy1businessSearchService": "https://cba-jumpstart.konycloud.com/services/Copy1businessSearchService",
            "ImagesInRegistrationService": "https://cba-jumpstart.konycloud.com/services/ImagesInRegistrationService",
            "VolunteerAcceptRequestTasks": "https://cba-jumpstart.konycloud.com/services/VolunteerAcceptRequestTasks",
            "GetRecommendationsForBusiness": "https://cba-jumpstart.konycloud.com/services/GetRecommendationsForBusiness",
            "CopyBusinessProfileImageUpload": "https://cba-jumpstart.konycloud.com/services/CopyBusinessProfileImageUpload",
            "CBALogin": "https://cba-jumpstart.konycloud.com/services/CBALogin",
            "AcceptReqVol": "https://cba-jumpstart.konycloud.com/services/AcceptReqVol",
            "CancelVolReq": "https://cba-jumpstart.konycloud.com/services/CancelVolReq",
            "checkBoxservice": "https://cba-jumpstart.konycloud.com/services/checkBoxservice",
            "AttachKsidToUser": "https://cba-jumpstart.konycloud.com/services/AttachKsidToUser",
            "AcceptTaskDetails": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetails",
            "CancelReqVolunteer": "https://cba-jumpstart.konycloud.com/services/CancelReqVolunteer",
            "acceptReqVolunteer": "https://cba-jumpstart.konycloud.com/services/acceptReqVolunteer",
            "BusinessGetRequests": "https://cba-jumpstart.konycloud.com/services/BusinessGetRequests",
            "BusinessCancelRequest": "https://cba-jumpstart.konycloud.com/services/BusinessCancelRequest",
            "BusinessSearchService": "https://cba-jumpstart.konycloud.com/services/BusinessSearchService",
            "CodeValidationService": "https://cba-jumpstart.konycloud.com/services/CodeValidationService",
            "AcceptTaskforVolunteer": "https://cba-jumpstart.konycloud.com/services/AcceptTaskforVolunteer",
            "BusinessChangePassword": "https://cba-jumpstart.konycloud.com/services/BusinessChangePassword",
            "BusinessDeclineRequest": "https://cba-jumpstart.konycloud.com/services/BusinessDeclineRequest",
            "BusinessGetTaskDetails": "https://cba-jumpstart.konycloud.com/services/BusinessGetTaskDetails",
            "BusinessMarkAsComplete": "https://cba-jumpstart.konycloud.com/services/BusinessMarkAsComplete",
            "CancelRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/CancelRequestVolunteer",
            "acceptRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/acceptRequestVolunteer",
            "BusinessSaveEndorsement": "https://cba-jumpstart.konycloud.com/services/BusinessSaveEndorsement",
            "BusinessStartEngagement": "https://cba-jumpstart.konycloud.com/services/BusinessStartEngagement",
            "BusinessRequestVolunteer": "https://cba-jumpstart.konycloud.com/services/BusinessRequestVolunteer",
            "BusinessDeleteOpportunity": "https://cba-jumpstart.konycloud.com/services/BusinessDeleteOpportunity",
            "BusinessUpdateOpportunity": "https://cba-jumpstart.konycloud.com/services/BusinessUpdateOpportunity",
            "BusinessAcceptRequestTasks": "https://cba-jumpstart.konycloud.com/services/BusinessAcceptRequestTasks",
            "BusinessProfileImageUpload": "https://cba-jumpstart.konycloud.com/services/BusinessProfileImageUpload",
            "BusinessGetVolunteersSkills": "https://cba-jumpstart.konycloud.com/services/BusinessGetVolunteersSkills",
            "AcceptTaskDetailsforVolunteer": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetailsforVolunteer",
            "BusinessMyActivityNotification": "https://cba-jumpstart.konycloud.com/services/BusinessMyActivityNotification"
        },
        "reportingsvc": {
            "custom": "https://cba-jumpstart.konycloud.com/services/CMS",
            "session": "https://cba-jumpstart.konycloud.com/services/IST"
        },
        "Webapp": {
            "url": "https://cba-jumpstart.konycloud.com/JumpStartAbort1"
        },
        "services_meta": {
            "News": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/News",
                "type": "integsvc"
            },
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
            "VolReport": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolReport",
                "type": "integsvc"
            },
            "Volunteers": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Volunteers",
                "type": "integsvc"
            },
            "VolGetTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolGetTasks",
                "type": "integsvc"
            },
            "imageUpload": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/imageUpload",
                "type": "integsvc"
            },
            "HoursService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/HoursService",
                "type": "integsvc"
            },
            "Registration": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Registration",
                "type": "integsvc"
            },
            "ReportIndBus": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/ReportIndBus",
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
            "ResendRegCode": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/ResendRegCode",
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
            "LocationLookup": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/LocationLookup",
                "type": "integsvc"
            },
            "Recommendation": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Recommendation",
                "type": "integsvc"
            },
            "forgotPassword": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/forgotPassword",
                "type": "integsvc"
            },
            "DeleteVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/DeleteVolunteer",
                "type": "integsvc"
            },
            "VolEndorsements": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolEndorsements",
                "type": "integsvc"
            },
            "VolunteerSkills": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerSkills",
                "type": "integsvc"
            },
            "forgotPassword1": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/forgotPassword1",
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
            "updateVolService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/updateVolService",
                "type": "integsvc"
            },
            "DeclineRequestVol": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/DeclineRequestVol",
                "type": "integsvc"
            },
            "TasksForVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/TasksForVolunteer",
                "type": "integsvc"
            },
            "VolunteerGetTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerGetTasks",
                "type": "integsvc"
            },
            "ReportSupplyNation": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/ReportSupplyNation",
                "type": "integsvc"
            },
            "TaskRequestService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/TaskRequestService",
                "type": "integsvc"
            },
            "UpdateBusinessLogo": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/UpdateBusinessLogo",
                "type": "integsvc"
            },
            "CreateOpportunities": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CreateOpportunities",
                "type": "integsvc"
            },
            "NotificationService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/NotificationService",
                "type": "integsvc"
            },
            "RegistrationService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/RegistrationService",
                "type": "integsvc"
            },
            "ValidateCodeService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/ValidateCodeService",
                "type": "integsvc"
            },
            "VolunteerAcceptTask": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerAcceptTask",
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
            "oppurtunitiesSearch": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/oppurtunitiesSearch",
                "type": "integsvc"
            },
            "GetExistingOpenTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/GetExistingOpenTasks",
                "type": "integsvc"
            },
            "RequestToVolunteerOpp": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/RequestToVolunteerOpp",
                "type": "integsvc"
            },
            "RequestVolunteerTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/RequestVolunteerTasks",
                "type": "integsvc"
            },
            "UpdateBusinessProfile": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/UpdateBusinessProfile",
                "type": "integsvc"
            },
            "VolunteerNotification": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerNotification",
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
            "emailValidationService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/emailValidationService",
                "type": "integsvc"
            },
            "VolunteerRequestDetails": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerRequestDetails",
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
            "requestToVolunteerService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/requestToVolunteerService",
                "type": "integsvc"
            },
            "Copy1businessSearchService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/Copy1businessSearchService",
                "type": "integsvc"
            },
            "ImagesInRegistrationService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/ImagesInRegistrationService",
                "type": "integsvc"
            },
            "VolunteerAcceptRequestTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/VolunteerAcceptRequestTasks",
                "type": "integsvc"
            },
            "GetRecommendationsForBusiness": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/GetRecommendationsForBusiness",
                "type": "integsvc"
            },
            "CopyBusinessProfileImageUpload": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CopyBusinessProfileImageUpload",
                "type": "integsvc"
            },
            "CBALogin": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CBALogin",
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
            "checkBoxservice": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/checkBoxservice",
                "type": "integsvc"
            },
            "AttachKsidToUser": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AttachKsidToUser",
                "type": "integsvc"
            },
            "AcceptTaskDetails": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetails",
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
            "BusinessCancelRequest": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessCancelRequest",
                "type": "integsvc"
            },
            "BusinessSearchService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessSearchService",
                "type": "integsvc"
            },
            "CodeValidationService": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/CodeValidationService",
                "type": "integsvc"
            },
            "AcceptTaskforVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AcceptTaskforVolunteer",
                "type": "integsvc"
            },
            "BusinessChangePassword": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessChangePassword",
                "type": "integsvc"
            },
            "BusinessDeclineRequest": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessDeclineRequest",
                "type": "integsvc"
            },
            "BusinessGetTaskDetails": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessGetTaskDetails",
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
            "acceptRequestVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/acceptRequestVolunteer",
                "type": "integsvc"
            },
            "BusinessSaveEndorsement": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessSaveEndorsement",
                "type": "integsvc"
            },
            "BusinessStartEngagement": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessStartEngagement",
                "type": "integsvc"
            },
            "BusinessRequestVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessRequestVolunteer",
                "type": "integsvc"
            },
            "BusinessDeleteOpportunity": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessDeleteOpportunity",
                "type": "integsvc"
            },
            "BusinessUpdateOpportunity": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessUpdateOpportunity",
                "type": "integsvc"
            },
            "BusinessAcceptRequestTasks": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessAcceptRequestTasks",
                "type": "integsvc"
            },
            "BusinessProfileImageUpload": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessProfileImageUpload",
                "type": "integsvc"
            },
            "BusinessGetVolunteersSkills": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessGetVolunteersSkills",
                "type": "integsvc"
            },
            "AcceptTaskDetailsforVolunteer": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/AcceptTaskDetailsforVolunteer",
                "type": "integsvc"
            },
            "BusinessMyActivityNotification": {
                "version": "1.0",
                "url": "https://cba-jumpstart.konycloud.com/services/BusinessMyActivityNotification",
                "type": "integsvc"
            }
        }
    },
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://cba-jumpstart.konycloud.com/JumpStartAbort1/MWServlet",
    secureurl: "https://cba-jumpstart.konycloud.com/JumpStartAbort1/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
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
    callAppMenu();
    initializeGlobalVariables();
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
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;