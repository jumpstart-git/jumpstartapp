//Type your code here

// CONSTANTS:
var PERSONICONBG = 'personiconbg.png';
var EXPANDICONIMG = 'expand.png';
var MARKASCOMPLETEICON = 'markascomplete.png';
var SENDREPORTICON = 'sendreport.png';
var MARKASCOMPLETETEXT = "Mark as Complete";
var SENDRECOMMENDATION = "Send Recommendation";
var SENDREPORTTEXT = "Send Report";

var HAS_ACCEPTED_YOUR_REQUEST = "Has accepted your request";
var CANCEL_REQUEST = "<a href='#' style='color:#37b3b1'>Cancel<br>request</a>";
var ACCEPT_TASK = "<a href='#' style='color: #37b3b1'>View task</a>";
var CONTACT_REQUEST = "<a href='#' style='color: #37b3b1'>Contact</a>";

var HAS_SENT_REQUEST = "Has sent you a request";
var DECLINE_REQUEST = "<a href='#' style='color: #37b3b1'>Decline<br>request</a>";
var ACCEPT_REQUEST = "<a href='#' style='color: #37b3b1'>Accept<br>request</a>";
var VIEW_REQUEST = "<a href='#' style='color: #37b3b1'>View<br>request</a>";

var START_ENGAGEMENT = "<a href='#' style='color: #37b3b1'>Start<br>Engagement</a>";
//mamata
var MARK_AS_COMPLETE="<a href='#' style='color: #37b3b1'>Mark as complete</a>";
var SEND_RECOMMENDATION="<a href='#' style='color: #37b3b1'>Send_Recommendation</a>";
var Refresh_results="<a href='#' style='color: #37b3b1'>Refresh results</a>";
//Start of defect D029
//Capitalized the words 'edit' and 'close'.
var EDIT="<a href='#' style='color: #37b3b1'><u>Edit</u></a>";
var CLOSE="<a href='#' style='color: #37b3b1; word-break: keep-all!important; hyphens: none;'><u>Close</u></a>";
//End of defect D029
var ENDORESE_VOLUNTEER="<a href='#' style='color: #37b3b1'><u>Endorse_volunteer</u></a>";
// TEST DATA:

var loggedInUserInfo = {
  firstName: 'Jar Jar',
  lastName: 'Binks',
  address: '1200 Death Star Road, Tatooine',
  company: 'MeeSa Co.',
  role: 'Chief Information Office',
  skills: ["skill 1", "skill 2", "skill 3"],
  availability: [
    {
      days: ['M', 'W', 'F'],
      from: '0700',
      to: '1700'
    }
  ]
};

// My Activities - Open Tasks
var myOpenTasksData = [
  { openTaskPersonIconBg: PERSONICONBG,
   openTaskPersonProfilePic: "personicon.png",
   openTaskName: 'Contract Consultation',
   openTaskBusiness: 'Indigenous Business A',
   openTaskExpandThis: EXPANDICONIMG,
   markAsCompleteImage: MARKASCOMPLETEICON,
   markAsCompleteText: MARKASCOMPLETETEXT,
   sendReportImage: SENDREPORTICON,
   sendReportText: SENDREPORTTEXT
  }, { openTaskPersonIconBg: PERSONICONBG,
   openTaskPersonProfilePic: "personicon.png",
   openTaskName: 'Supplies Management',
   openTaskBusiness: 'Indigenous Business B',
   openTaskExpandThis: EXPANDICONIMG,
   markAsCompleteImage: MARKASCOMPLETEICON,
   markAsCompleteText: MARKASCOMPLETETEXT,
   sendReportImage: SENDREPORTICON,
   sendReportText: SENDREPORTTEXT
  }
];


// My Activities - Closed Tasks
var myClosedTasksData = [
  { closedTaskPersonIconBg: PERSONICONBG,
   closedTaskPersonProfilePic: "personicon.png",
   closedTaskName: 'Marketing',
   closedTaskBusiness: 'Indigenous Business C',
   closedTaskExpandThis: EXPANDICONIMG,
   markAsCompleteImage: MARKASCOMPLETEICON,
   markAsCompleteText: MARKASCOMPLETETEXT,
   sendReportImage: SENDREPORTICON,
   sendReportText: SENDREPORTTEXT
  }, { closedTaskPersonIconBg: PERSONICONBG,
   closedTaskPersonProfilePic: "personicon.png",
   closedTaskName: 'Research',
   closedTaskBusiness: 'Indigenous Business D',
   closedTaskExpandThis: EXPANDICONIMG,
   markAsCompleteImage: MARKASCOMPLETEICON,
   markAsCompleteText: MARKASCOMPLETETEXT,
   sendReportImage: SENDREPORTICON,
   sendReportText: SENDREPORTTEXT
  }, { closedTaskPersonIconBg: PERSONICONBG,
   closedTaskPersonProfilePic: "personicon.png",
   closedTaskName: 'Programming',
   closedTaskBusiness: 'Indigenous Business E',
   closedTaskExpandThis: EXPANDICONIMG,
   markAsCompleteImage: MARKASCOMPLETEICON,
   markAsCompleteText: MARKASCOMPLETETEXT,
   sendReportImage: SENDREPORTICON,
   sendReportText: SENDREPORTTEXT
  }
];

var acceptedRequests = [
  {
    acceptedRequestStatus : "Pending",
  	acceptedRequestBusinessName : "The Supplies Company",
    acceptedRequestLabel : HAS_ACCEPTED_YOUR_REQUEST,
    cancelRequest : CANCEL_REQUEST,
    acceptTask : ACCEPT_REQUEST,
    contactRequest : CONTACT_REQUEST
  },
  {
    acceptedRequestStatus : "New",
  	acceptedRequestBusinessName : "SK Telecomm",
    acceptedRequestLabel : HAS_ACCEPTED_YOUR_REQUEST,
    cancelRequest : CANCEL_REQUEST,
    acceptTask : ACCEPT_REQUEST,
    contactRequest : CONTACT_REQUEST
  }
];




// BUSINESS TEST DATA:
var businessAcceptedRequests = [
  {
    acceptedRequestStatus : "New",
  	acceptedRequestBusinessName : "Ra's Al Gul",
    acceptedRequestLabel : HAS_ACCEPTED_YOUR_REQUEST,
    cancelRequest : CANCEL_REQUEST,
    acceptTask : START_ENGAGEMENT,
    contactRequest : CONTACT_REQUEST
  }
];

var businessSentRequests = [
  {
    sentRequestImage : "imagedrag.png",
    sentRequestStatus : "Pending",
    sentRequestBusinessName : "Peter Parker",
    sentRequestLabel : HAS_SENT_REQUEST,
    declineRequest : DECLINE_REQUEST,
    acceptRequest : START_ENGAGEMENT,
    viewRequest : VIEW_REQUEST
  }
];

var businessOpenTasksData = [
  { openTaskPersonIconBg: PERSONICONBG,
   openTaskPersonProfilePic: "personicon.png",
   openTaskName: 'Contract Consultation',
   openTaskBusiness: 'Amanda Wall',
   openTaskExpandThis: EXPANDICONIMG,
   markAsCompleteImage: MARKASCOMPLETEICON,
   markAsCompleteText: MARKASCOMPLETETEXT,
   markAsCompleteRichText:MARK_AS_COMPLETE,
   sendReportImage: SENDREPORTICON,
   sendReportText: SENDREPORTTEXT
  }
];

var businessClosedTasksData = [
  { closedTaskPersonIconBg: PERSONICONBG,
   closedTaskPersonProfilePic: "personicon.png",
   closedTaskName: 'R&D',
   closedTaskBusiness: 'Anthony Stark',
   closedTaskExpandThis: EXPANDICONIMG,
   markAsCompleteImage: "",
   markAsCompleteText: "",
   sendReportImage: SENDREPORTICON,
   sendReportText: SENDREPORTTEXT
  }
];
