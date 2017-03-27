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
                        markAsCompleteRichText: MARK_AS_COMPLETE,
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
    //alert("the groupName"+JSON.stringify(groupName));
    var transExpandCollapse = kony.ui.makeAffineTransform();
    var container = groupName + 'ListContainer';
    var image = groupName + 'ExpandImage';
    //alert("the container"+JSON.stringify(container));
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