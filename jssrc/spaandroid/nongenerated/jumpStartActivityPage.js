mobileFabricConfigurationForMyActivity = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "TaskRequestService",
        operations: ["getTaskRequest"]
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
function myActivityService() {
    // alert("inside myActivityService"+mobileFabricConfigurationForMyActivity.isKonySDKObjectInitialized);
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
    if (!mobileFabricConfigurationForMyActivity.isKonySDKObjectInitialized) {
        //alert("inside if");	
        initializeMobileFabricForMyActivity();
    } else if (mobileFabricConfigurationForMyActivity.isKonySDKObjectInitialized) {
        // alert("inside else");	  
        getMyActivity();
    }
}
// 	else{
// 			// The user didn't pick a value so we'll show the alert
// 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//	}
//}
function initializeMobileFabricForMyActivity() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForMyActivity.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForMyActivity.konysdkObject.init(mobileFabricConfigurationForMyActivity.appKey, mobileFabricConfigurationForMyActivity.appSecret, mobileFabricConfigurationForMyActivity.serviceURL, initializeMobileFabricForMyActivitySuccess, initializeMobileFabricForMyActivityFailure);
        // alert(getMyActivity());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForMyActivitySuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForMyActivity.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getMyActivity();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForMyActivityFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //	alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    alert(" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfiguration.identityServices[0].username,
        "password": mobileFabricConfiguration.identityServices[0].password
    };
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    // 	alert (" ********** Entering into loginMFSuccess ********** ");
    // 	alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForMyActivity.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getMyActivity();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getMyActivity() {
    //	alert("inside getMyActivity");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForMyActivity.integrationObj = mobileFabricConfigurationForMyActivity.konysdkObject.getIntegrationService(mobileFabricConfigurationForMyActivity.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForMyActivity.integrationServices[0].operations[0];
        var headers = {};
        // 		if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        // 			data= {"newsType": selectedKey};
        //         }else{
        // 			// The user didn't pick a value so we'll show the alert
        // 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name in activity"+operationName);
        var data = "1";
        mobileFabricConfigurationForMyActivity.integrationObj.invokeOperation(operationName, headers, data, getMyActivitySuccessCallback, getMyActivityErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getMyActivitySuccessCallback(gblTaskReqList) {
    try {
        //alert("inside success"+JSON.stringify(gblTaskReqList));
        // Check the opstatus for 0 meaning it worked
        if (gblTaskReqList !== null && gblTaskReqList.opstatus === 0) {
            // alert("1");
            // Checking to make sure we DO have results
            if (gblTaskReqList.taskobj[0].taskList[0].TasksDTO !== null) {
                // alert("2");
                // Making sure we have at least 1 article returned
                if (gblTaskReqList.taskobj.length > 0) {
                    // Now we know we have results so we'll print them out to check
                    // alert ("########## Response received from service call: "+JSON.stringify(gblTaskReqList.taskobj));
                    gblTaskReqResponse = gblTaskReqList;
                    setMyActivityData(gblTaskReqResponse);
                    // var gblTaskReqResponse=JSON.stringify(notificationList);
                    //Setting the segment widgetdataMap 
                    //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
                    //      //      Setting the data to the segment
                    //      frmFoxNews.segNewsTitle.setVisibility(true);
                    //          frmFoxNews.segNewsTitle.setData(notificationList.MessageDTO.news_item.title);
                    //          kony.application.dismissLoadingScreen();
                }
            }
        } else {
            kony.application.dismissLoadingScreen();
            // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
            kony.ui.Alert({
                message: "Service call failed with opstatus " + notificationList.opstatus,
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: "Fox News",
                yesLabel: "OK"
            }, {});
        }
    } catch (e) {
        alert("the error is " + e);
    }
}

function getMyActivityErrorCallback(error) {
    kony.print(" ********** Entering into getMyActivitySuccessCallback ********** ");
    kony.print(" ********** Failure in getMyActivitySuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getMyActivitySuccessCallback ********** ");
}
//This function navigates to frmNewsDetails and displays the selected segment Record information
// function displayDetails()
// {
// 	var selData = frmFoxNews.segNewsTitle.selectedItems[0];
//   	kony.print("########## Selected Row Details: " + JSON.stringify(selData));
// 	//Setting the title
// 	frmNewsDetails.lblTitle.text = selData.title;
// 	//Setting the pubDate
// 	frmNewsDetails.lblPubDate.text = "Publication date: " + selData.pubdate;
// 	// Finding out the location of the first instance of first Image tag
// 	var imgTagLocation = selData.desc.search("<img");
// 	//Trimming the data till imgTagLocation and setting the description
// 	frmNewsDetails.lblDescription.text = ((selData.desc).slice(0,imgTagLocation));
// 	//frmNewsDetails.lblDescription.text = frmFoxNews.segNewsTitle.selectedItems[0].desc;
//   	frmNewsDetails.show();
// }
//     var gblTaskReqResponse=
//     {"notificationList":
//      [{"MessageDTO":
//        {"messageId":200,"messageTitle":"Received a Message","messageContent":"Hi","messageBusinessId":"1","messageVolunteerId":"2310085","createdDate":"2016-09-01",
//         "updatedDate":"2016-09-01"}},
//       {"MessageDTO":
//        {"messageId":201,"messageTitle":"Received a Message","messageContent":"ello","messageBusinessId":"2",
//         "messageVolunteerId":"2310085","createdDate":"2016-09-01","updatedDate":"2016-09-01"}}]};
// function setSegData(gblTaskReqResponse)
// {
//   if(gblTaskReqResponse!="undefined"&& gblTaskReqResponse!=undefined)
//     {
//       alert("InSide"+JSON.stringify(gblTaskReqResponse));
//  // alert("InSide"+JSON.stringify(gblTaskReqResponse));
// mainPage.mainPageContentParent.myNotifications.segMessageNotification.widgetDataMap={
//             "contactImage": "contactImage",
//             "lblContactName": "lblContactName",
//             "lblDay": "lblDay",
//             "lblMeaasageType": "lblMeaasageType"
//         };
//   if (gblTaskReqResponse["notificationList"].length > 0) {
//                 var tempData = [];
//                 var len = gblTaskReqResponse["notificationList"].length;
//                 for (var i = 0; i < len; i++) {
//                   var msg=gblTaskReqResponse["notificationList"][i]["MessageDTO"].messageTitle ;
//                   var time=gblTaskReqResponse["notificationList"][i]["MessageDTO"].createdDate ;
//                   var name=gblTaskReqResponse["notificationList"][i]["MessageDTO"].volunteerName;
//                           var testData = {
//                         contactImage: "imgseglogo.png",
//                         lblContactName: name,
//                         lblDay: time,
//                         lblMeaasageType: msg
//                     };
// 			tempData.push(testData);
//                 }
//     mainPage.mainPageContentParent.myNotifications.segMessageNotification.setData(tempData);
//   }
//     }
// }
//console.log(JSON.stringify(data.taskList[0].FullTasksDTO.businessName)); 
function setMyActivityData(gblTaskReqResponse) {
    if (gblTaskReqResponse !== "undefined" && gblTaskReqResponse !== undefined) {
        //************* FOR REQUESTS: *************
        if (gblTaskReqResponse.requestobj[0].requestList.length > 0) {
            var requestData = gblTaskReqResponse.requestobj[0].requestList;
            var acceptedRequests = [];
            var sentRequests = [];
            var len = requestData.length;
            for (var i = 0; i < len; i++) {
                // If:
                // request_status = 0 -> New
                // request_status = 1 -> Pending
                var status = requestData[i].Request.request_status;
                var statusLabel = "";
                if (status == 0) {
                    statusLabel = "New";
                } else {
                    statusLabel = "Pending";
                }
                // If:
                // initiated_by = 1 -> acceptedRequests array
                // initiated_by = 2 -> sentRequests array
                var initiatedBy = requestData[i].Request.initiated_by;
                if (initiatedBy == 1) {
                    var acceptData = {
                        acceptedRequestImage: "imagedrag.png",
                        acceptedRequestStatus: statusLabel,
                        acceptedRequestBusinessName: requestData[i].Request.business_name,
                        acceptedRequestLabel: HAS_ACCEPTED_YOUR_REQUEST,
                        cancelRequest: CANCEL_REQUEST,
                        acceptTask: ACCEPT_TASK,
                        contactRequest: CONTACT_REQUEST
                    };
                    acceptedRequests.push(acceptData);
                } else if (initiatedBy == 2) {
                    var sentData = {
                        sentRequestImage: "imagedrag.png",
                        sentRequestStatus: statusLabel,
                        sentRequestBusinessName: requestData[i].Request.business_name,
                        sentRequestLabel: HAS_SENT_REQUEST,
                        declineRequest: DECLINE_REQUEST,
                        acceptRequest: ACCEPT_REQUEST,
                        viewRequest: VIEW_REQUEST
                    };
                    sentRequests.push(sentData);
                }
            }
            mainPage.acceptedRequestsSegment.setData(acceptedRequests); // Set data for Accepted Requests.
            mainPage.sentRequestsSegment.setData(sentRequests); // Set data for Sent Requests.
        }
        //************* FOR TASKS: *************
        if (gblTaskReqResponse.taskobj[0].taskList.length > 0) {
            var taskData = gblTaskReqResponse.taskobj[0].taskList;
            var myOpenTasksData = [];
            var myClosedTasksData = [];
            var tasklen = taskData.length;
            for (var t = 0; t < tasklen; t++) {
                // If:
                // status= 0 -> Open Tasks
                // status= 1 -> Closed Tasks
                var taskStatus = taskData[t].TasksDTO.status;
                if (taskStatus == 0) {
                    var openTaskObj = {
                        openTaskPersonIconBg: PERSONICONBG,
                         
                        openTaskPersonProfilePic: "personicon.png",
                         
                        openTaskName: taskData[t].TasksDTO.title,
                        openTaskBusiness: taskData[t].TasksDTO.businessName,
                        openTaskExpandThis: EXPANDICONIMG,
                        markAsCompleteImage: "",
                        markAsCompleteText: "",
                        sendReportImage: SENDREPORTICON,
                        sendReportText: SENDREPORTTEXT 
                    };
                    myOpenTasksData.push(openTaskObj);
                } else {
                    var closedTaskObj = {
                        closedTaskPersonIconBg: PERSONICONBG,
                        closedTaskPersonProfilePic: "personicon.png",
                        closedTaskName: taskData[t].TasksDTO.title,
                        closedTaskBusiness: taskData[t].TasksDTO.businessName,
                        closedTaskExpandThis: EXPANDICONIMG,
                        markAsCompleteImage: MARKASCOMPLETEICON,
                        markAsCompleteText: SENDRECOMMENDATION,
                        sendReportImage: SENDREPORTICON,
                        sendReportText: SENDREPORTTEXT
                    };
                    myClosedTasksData.push(closedTaskObj);
                }
            }
            mainPage.myOpenTasksList.setData(myOpenTasksData); // Set data for My Open Tasks.
            mainPage.myClosedTasksList.setData(myClosedTasksData); // Set data for My Closed Tasks. 
        }
    }
}
//******************************************* PETER'S DATA MAPPING: *******************************************
function initMainPage() {
    if (loggedInUserObject.user === "volunteer") {
        /****************** Sample Response from MF ******************/
        var myActivityResponse = {
            "opstatus": 0,
            "taskobj": [{
                "taskList": [{
                    "TasksDTO": {
                        "businessName": "Business Alpha",
                        "businessId": "2",
                        "title": "Marketing",
                        "taskId": "1002",
                        "status": "0"
                    }
                }, {
                    "TasksDTO": {
                        "businessName": "Business Omega",
                        "businessId": "2",
                        "title": "Spelunking",
                        "taskId": "1002",
                        "status": "1"
                    }
                }]
            }],
            "requestobj": [{
                "requestList": [{
                    "Request": {
                        "request_status": "0",
                        "initiated_by": "1",
                        "business_name": "Business Charlie",
                        "request_task_id": "1001",
                        "created_date": "",
                        "updated_date": "",
                        "request_id": "1",
                        "request_volunteer_id": "2305832"
                    }
                }, {
                    "Request": {
                        "request_status": "1",
                        "initiated_by": "2",
                        "business_name": "Business Delta",
                        "request_task_id": "1001",
                        "created_date": "",
                        "updated_date": "",
                        "request_id": "1",
                        "request_volunteer_id": "2305832"
                    }
                }]
            }],
            "httpStatusCode": 200
        };
        /****************** Sample Response from MF ******************/
        setMyActivityData(myActivityResponse);
    } else if (loggedInUserObject.user === "indigenousBusiness") {
        mainPage.navRecommendations.isVisible = true;
        mainPage.myOpenTasksList.setData(businessOpenTasksData); // Set data for My Open Tasks.
        mainPage.myClosedTasksList.setData(businessClosedTasksData); // Set data for My Closed Tasks.
        mainPage.acceptedRequestsSegment.setData(businessAcceptedRequests);
        mainPage.sentRequestsSegment.setData(businessSentRequests);
    }
    setGroupsToClose();
}

function setGroupsToClose() {
    var transExpandCollapse = kony.ui.makeAffineTransform();
    transExpandCollapse.rotate(90);
    mainPage.myRegisteredWorkshopsExpandImage.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transExpandCollapse
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": function() {}
    });
    mainPage.myBookmarksExpandImage.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transExpandCollapse
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": function() {}
    });
}

function expandCollapseGroup(group, groupName) {
    var transExpandCollapse = kony.ui.makeAffineTransform();
    var container = groupName + 'ListContainer';
    var image = groupName + 'ExpandImage';
    if ((mainPage[container].isVisible === true)) {
        mainPage[container].isVisible = false;
        transExpandCollapse.rotate(90);
        mainPage[image].animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": transExpandCollapse
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": function() {}
        });
    } else {
        mainPage[container].isVisible = true;
        transExpandCollapse.rotate(0);
        mainPage[image].animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": transExpandCollapse
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": function() {}
        });
    }
}