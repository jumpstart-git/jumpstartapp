//Type your code here
// CONSTANTS:
var PERSONICONBG = 'personiconbg.png';
var EXPANDICONIMG = 'expand.png';
var MARKASCOMPLETEICON = 'markascomplete.png';
var SENDREPORTICON = 'sendreport.png';
var MARKASCOMPLETETEXT = "<a href='#' style='color: #169bd5'>Mark as Complete</a>";
var SENDREPORTTEXT = "<a href='#' style='color: #169bd5'>Send Report</a>";
var HAS_ACCEPTED_YOUR_REQUEST = "Has accepted your request";
var CANCEL_REQUEST = "<a href='#' style='color: #000'>Cancel<br>Request</a>";
var ACCEPT_REQUEST = "<a href='#' style='color: #000'>Accept<br>Task</a>";
var START_ENGAGEMENT = "<a href='#' style='color: #000'>Start<br>Engagement</a>";
var CONTACT_REQUEST = "<a href='#' style='color: #000'>Contact</a>";
// TEST DATA:
var loggedInUserInfo = {
    firstName: 'Jar Jar',
    lastName: 'Binks',
    address: '1200 Death Star Road, Tatooine',
    company: 'MeeSa Co.',
    role: 'Chief Information Office',
    skills: ["skill 1", "skill 2", "skill 3"],
    availability: [{
        days: ['M', 'W', 'F'],
        from: '0700',
        to: '1700'
    }]
};
// My Activities - Open Tasks
var myOpenTasksData = [{
    openTaskPersonIconBg: PERSONICONBG,
    openTaskPersonProfilePic: "personicon.png",
    openTaskName: 'Contract Consultation',
    openTaskBusiness: 'Indigenous Business A',
    openTaskExpandThis: EXPANDICONIMG,
    markAsCompleteImage: MARKASCOMPLETEICON,
    markAsCompleteText: MARKASCOMPLETETEXT,
    sendReportImage: SENDREPORTICON,
    sendReportText: SENDREPORTTEXT
}, {
    openTaskPersonIconBg: PERSONICONBG,
    openTaskPersonProfilePic: "personicon.png",
    openTaskName: 'Supplies Management',
    openTaskBusiness: 'Indigenous Business B',
    openTaskExpandThis: EXPANDICONIMG,
    markAsCompleteImage: MARKASCOMPLETEICON,
    markAsCompleteText: MARKASCOMPLETETEXT,
    sendReportImage: SENDREPORTICON,
    sendReportText: SENDREPORTTEXT
}];
// My Activities - Closed Tasks
var myClosedTasksData = [{
    closedTaskPersonIconBg: PERSONICONBG,
    closedTaskPersonProfilePic: "personicon.png",
    closedTaskName: 'Marketing',
    closedTaskBusiness: 'Indigenous Business C',
    closedTaskExpandThis: EXPANDICONIMG,
    markAsCompleteImage: MARKASCOMPLETEICON,
    markAsCompleteText: MARKASCOMPLETETEXT,
    sendReportImage: SENDREPORTICON,
    sendReportText: SENDREPORTTEXT
}, {
    closedTaskPersonIconBg: PERSONICONBG,
    closedTaskPersonProfilePic: "personicon.png",
    closedTaskName: 'Research',
    closedTaskBusiness: 'Indigenous Business D',
    closedTaskExpandThis: EXPANDICONIMG,
    markAsCompleteImage: MARKASCOMPLETEICON,
    markAsCompleteText: MARKASCOMPLETETEXT,
    sendReportImage: SENDREPORTICON,
    sendReportText: SENDREPORTTEXT
}, {
    closedTaskPersonIconBg: PERSONICONBG,
    closedTaskPersonProfilePic: "personicon.png",
    closedTaskName: 'Programming',
    closedTaskBusiness: 'Indigenous Business E',
    closedTaskExpandThis: EXPANDICONIMG,
    markAsCompleteImage: MARKASCOMPLETEICON,
    markAsCompleteText: MARKASCOMPLETETEXT,
    sendReportImage: SENDREPORTICON,
    sendReportText: SENDREPORTTEXT
}];
var acceptedRequests = [{
    acceptedRequestStatus: "Pending",
    acceptedRequestBusinessName: "The Supplies Company",
    acceptedRequestLabel: HAS_ACCEPTED_YOUR_REQUEST,
    cancelRequest: CANCEL_REQUEST,
    acceptTask: ACCEPT_REQUEST,
    contactRequest: CONTACT_REQUEST
}, {
    acceptedRequestStatus: "New",
    acceptedRequestBusinessName: "SK Telecomm",
    acceptedRequestLabel: HAS_ACCEPTED_YOUR_REQUEST,
    cancelRequest: CANCEL_REQUEST,
    acceptTask: ACCEPT_REQUEST,
    contactRequest: CONTACT_REQUEST
}];
var businessAcceptedRequests = [{
    acceptedRequestStatus: "New",
    acceptedRequestBusinessName: "Ra's Al Gul",
    acceptedRequestLabel: HAS_ACCEPTED_YOUR_REQUEST,
    cancelRequest: CANCEL_REQUEST,
    acceptTask: START_ENGAGEMENT,
    contactRequest: CONTACT_REQUEST
}];
var businessOpenTasksData = [{
    openTaskPersonIconBg: PERSONICONBG,
    openTaskPersonProfilePic: "personicon.png",
    openTaskName: 'Contract Consultation',
    openTaskBusiness: 'Amanda Wall',
    openTaskExpandThis: EXPANDICONIMG,
    markAsCompleteImage: MARKASCOMPLETEICON,
    markAsCompleteText: MARKASCOMPLETETEXT,
    sendReportImage: SENDREPORTICON,
    sendReportText: SENDREPORTTEXT
}];
var businessClosedTasksData = [{
    closedTaskPersonIconBg: PERSONICONBG,
    closedTaskPersonProfilePic: "personicon.png",
    closedTaskName: 'R&D',
    closedTaskBusiness: 'Anthony Stark',
    closedTaskExpandThis: EXPANDICONIMG,
    markAsCompleteImage: MARKASCOMPLETEICON,
    markAsCompleteText: MARKASCOMPLETETEXT,
    sendReportImage: SENDREPORTICON,
    sendReportText: SENDREPORTTEXT
}];