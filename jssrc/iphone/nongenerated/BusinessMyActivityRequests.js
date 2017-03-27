//Type your code here
mobileFabricConfigurationForGetBusinessRequests = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: ["BusinessGetRequests"],
        operations: ["getBusinessRequests"]
    }],
    konysdkObject: null,
    authClient: null,
    integrationObj: null,
    isKonySDKObjectInitialized: false,
    isMFAuthenticated: false
};

function getBusinessRequestsService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForGetBusinessRequests.isKonySDKObjectInitialized) {
        initializeMobileFabricForGetBusinessRequests();
    } else if (mobileFabricConfigurationForGetBusinessRequests.isKonySDKObjectInitialized) {
        getBusinessRequestsById();
    }
}

function initializeMobileFabricForGetBusinessRequests() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        mobileFabricConfigurationForGetBusinessRequests.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForGetBusinessRequests.konysdkObject.init(mobileFabricConfigurationForGetBusinessRequests.appKey, mobileFabricConfigurationForGetBusinessRequests.appSecret, mobileFabricConfigurationForGetBusinessRequests.serviceURL, initializeMobileFabricForGetBusinessRequestsSuccess, initializeMobileFabricForGetBusinessRequestsFailure);
    } else {
        alert("Network unavailable. Please check your network settings. ");
    }
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForGetBusinessRequestsSuccess(response) {
    //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetBusinessRequests.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessRequestsById();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForGetBusinessRequestsFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
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
    //          alert (" ********** Entering into loginMFSuccess ********** ");
    //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetBusinessRequests.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessRequests();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessRequestsById() {
    //          alert("inside getBusinessRequests");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetBusinessRequests.integrationObj = mobileFabricConfigurationForGetBusinessRequests.konysdkObject.getIntegrationService(mobileFabricConfigurationForGetBusinessRequests.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForGetBusinessRequests.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        var data = {};
        data["id"] = kony.store.getItem("businessId"); //"1";//kony.store.getItem("businessId"); 
        //  alert("operation name and input"+data["id"]);
        mobileFabricConfigurationForGetBusinessRequests.integrationObj.invokeOperation(operationName, headers, data, getBusinessRequestsSuccessCallback, getBusinessRequestsErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessRequestsSuccessCallback(gblRequestsList) {
    //alert("inside getBusinessRequestsSuccessCallback nov 21 "+JSON.stringify(gblRequestsList));
    // alert("type==="+typeof(gblRequestsList));
    // Check the opstatus for 0 meaning it worked
    if (gblRequestsList !== null && gblRequestsList.opstatus === 0) {
        ///start merin
        BusinessOpenCloseTaskService();
        //  alert("gblRequestsList.requestList"+JSON.stringify(gblRequestsList.requestList));
        if (gblRequestsList.requestList !== null && gblRequestsList.requestList != undefined) {
            if (gblRequestsList.requestList[0].Request !== null) {
                //  alert("2");
                // Making sure we have at least 1 article returned
                // if (gblRequestsList.RequestsList.length > 0){
                // Now we know we have results so we'll print them out to check
                //  alert ("########## Response received from service call nov 21: "+JSON.stringify(gblRequestsList.requestList));
                kony.application.dismissLoadingScreen();
                // BusinessOpenCloseTaskService ();  
                gblReqBusinessResponse = gblRequestsList;
                getTempForBusReqSort(gblRequestsList);
                setSegBusinessRequestsData(gblReqBusinessResponse);
                // var gblReqBusinessResponse=JSON.stringify(gblRequestsList);
                //  var gblReqBusinessResponse=JSON.stringify(requestList);
                /*
                gblBusNoteResponse=gblBusinessNotificationList;
                   getTempForSort(gblBusinessNotificationList);
                   setNoteSegData(gblBusNoteResponse);*/
                //Setting the segment widgetdataMap 
                //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
                //      //      Setting the data to the segment
                //      frmFoxNews.segNewsTitle.setVisibility(true);
                //          frmFoxNews.segNewsTitle.setData(RequestsList.RequestsDTO.news_item.title);
                //          kony.application.dismissLoadingScreen();
                // }
                // }
            }
            //   else{
            //            kony.application.dismissLoadingScreen();
            //     // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
            //     kony.ui.Alert({ message: "Service call failed with opstatus " + RequestsList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
        }
    } //merin end
}

function getBusinessRequestsErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessRequestsSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessRequestsSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //            alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getBusinessRequestsSuccessCallback ********** ");
}

function setSegBusinessRequestsData(gblReqBusinessResponse) {
    if (gblReqBusinessResponse != "undefined" && gblReqBusinessResponse != undefined) {
        // alert("InSide"+JSON.stringify(gblReqBusinessResponse));
        // alert("InSide"+JSON.stringify(gblReqBusinessResponse));
        mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.widgetDataMap = {
            "acceptedRequestStatus": "acceptedRequestStatus",
            "acceptedRequestBusinessName": "acceptedRequestBusinessName",
            "acceptedRequestLabel": "acceptedRequestLabel",
            "lblRequestId": "lblRequestId",
            "requestMessage": "requestMessage",
            "cancelRequest": "cancelRequest",
            "acceptTask": "acceptTask",
            "acceptedRequestImage": "acceptedRequestImage",
            "contactRequest": "contactRequest",
            "ActaulMessage": "ActaulMessage",
            "phoneNumber": "phoneNumber",
            "segType": "segType",
            "volunteerId": "volunteerId",
            "businessId": "businessId"
        };
        mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.widgetDataMap = {
            "sentRequestBusinessName": "sentRequestBusinessName",
            "sentRequestImage": "sentRequestImage",
            "sentRequestLabel": "sentRequestLabel",
            "sentRequestStatus": "sentRequestStatus",
            "lblRequestIdSent": "lblRequestIdSent",
            "requestMessage": "requestMessage",
            "declineRequest": "declineRequest",
            "acceptRequest": "acceptRequest",
            "viewRequest": "viewRequest",
            "ActaulMessage": "ActaulMessage",
            "contactNumber": "contactNumber",
            "segType": "segType",
            "volunteerId": "volunteerId",
            "businessId": "businessId",
            "requestTaskId": "requestTaskId"
        };
        //alert("hello");
        if (gblReqBusinessResponse["requestList"].length > 0) {
            var tempData = [];
            var tempDataSentReq = [];
            var len = gblReqBusinessResponse["requestList"].length;
            var status;
            var RequestType;
            // for (var i = 0; i < len; i++) {
            for (var i = len - 1; i >= 0; i--) {
                //var status=gblReqBusinessResponse["RequestsList"][i]["RequestsDTO"].RequestsStatus;
                if ((gblReqBusinessResponse["requestList"][i]["Request"].request_status) == 0) {
                    status = "new";
                } else status = "pending";
                if ((gblReqBusinessResponse["requestList"][i]["Request"].requestType) == 1) {
                    // alert("inside else"); 
                    var sentReqname = gblReqBusinessResponse["requestList"][i]["Request"].sender_name;
                    var sentReqtitle = gblReqBusinessResponse["requestList"][i]["Request"].message;
                    var sentReqid = gblReqBusinessResponse["requestList"][i]["Request"].request_id;
                    var reqMsg = gblReqBusinessResponse["requestList"][i]["Request"].volunteerMessage;
                    var volunteerImagePath = gblReqBusinessResponse["requestList"][i]["Request"].volunteerImagePath;
                    var phone1 = gblReqBusinessResponse["requestList"][i]["Request"].volunteerContact;
                    var volId = gblReqBusinessResponse["requestList"][i]["Request"].volunteerId;
                    var busId = gblReqBusinessResponse["requestList"][i]["Request"].businessId;
                    var reqTaskId = gblReqBusinessResponse["requestList"][i]["Request"].request_task_id;
                    //salmastart
                    var msgTime99 = gblReqBusinessResponse["requestList"][i]["Request"].messageTime;
                    var monthNames99 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    var dayNames99 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    var date99 = new Date(msgTime99);
                    var day = date99.getDate();
                    var dayweekIndex99 = date99.getDay();
                    var monthIndex99 = date99.getMonth();
                    var year99 = date99.getFullYear();
                    var msgTimenew = dayNames99[dayweekIndex99] + ', ' + day + ' ' + monthNames99[monthIndex99] + ' ' + year99 + ' ' + date99.getHours() + ":" + date99.getMinutes() + ":" + date99.getSeconds();
                    //salmend
                    //alert(reqTaskId);
                    var imagepath = "imgseglogo.png"
                    if (volunteerImagePath != null && volunteerImagePath != "null") {
                        imagepath = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + volunteerImagePath;
                    }
                    var testDataSentReq = {
                        sentRequestImage: imagepath, //"imgseglogo.png",
                        sentRequestStatus: msgTimenew,
                        sentRequestBusinessName: sentReqname,
                        sentRequestLabel: sentReqtitle,
                        lblRequestIdSent: sentReqid,
                        ActaulMessage: reqMsg,
                        // requestMessage:reqMsg,
                        declineRequest: DECLINE_REQUEST,
                        acceptRequest: ACCEPT_REQUEST,
                        viewRequest: VIEW_REQUEST,
                        volunteerId: volId,
                        businessId: busId,
                        contactNumber: phone1,
                        segType: "sent",
                        requestTaskId: reqTaskId
                    };
                    tempDataSentReq.push(testDataSentReq);
                    mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.setData(tempDataSentReq);
                    mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.isVisible = true;
                    kony.application.dismissLoadingScreen();
                } else if ((gblReqBusinessResponse["requestList"][i]["Request"].requestType) == 7) {
                    var name = gblReqBusinessResponse["requestList"][i]["Request"].sender_name;
                    var title = gblReqBusinessResponse["requestList"][i]["Request"].message;
                    var id = gblReqBusinessResponse["requestList"][i]["Request"].request_id;
                    //var msg=gblReqBusinessResponse["requestList"][i]["Request"].message;
                    var phone = gblReqBusinessResponse["requestList"][i]["Request"].volunteerContact;
                    var volunteerImagePath1 = gblReqBusinessResponse["requestList"][i]["Request"].volunteerImagePath;
                    var volId = gblReqBusinessResponse["requestList"][i]["Request"].volunteerId;
                    var busId = gblReqBusinessResponse["requestList"][i]["Request"].businessId;
                    var imagepath1 = "imgseglogo.png"
                    if (volunteerImagePath1 != null && volunteerImagePath1 != "null") {
                        imagepath1 = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + volunteerImagePath1;
                    }
                    //   alert("the getting message=="+msg);
                    //  kony.store.setItem("requestId", id);
                    var testData = {
                        acceptedRequestImage: imagepath1, //"imgseglogo.png",
                        acceptedRequestStatus: status,
                        acceptedRequestBusinessName: name,
                        acceptedRequestLabel: title,
                        //       requestMessage:msg,    
                        lblRequestId: id,
                        cancelRequest: CANCEL_REQUEST,
                        acceptTask: START_ENGAGEMENT,
                        contactRequest: CONTACT_REQUEST,
                        volunteerId: volId,
                        businessId: busId,
                        phoneNumber: phone,
                        segType: "accepted"
                    };
                    tempData.push(testData);
                    // alert("inside if");   
                    mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.setData(tempData);
                    // mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.isVisible=true;      
                    // alert(phone); 
                }
            }
        }
        //alert("calling");
        // 
    }
}

function contactVolunteer() {
    var businessRowClickData = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    var volContact = businessRowClickData[0].phoneNumber;
    kony.store.setItem("volContact", volContact);
    sendSMS();
}

function sendSMS() {
    try {
        var phoneNum9 = kony.store.getItem("volContact");
        var msg = "";
        kony.phone.sendSMS(phoneNum9, msg);
    } catch (err) {
        alert("error in sending sms:" + err);
    }
}