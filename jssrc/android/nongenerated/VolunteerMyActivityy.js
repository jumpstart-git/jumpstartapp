//Type your code here
//Type your code here
mobileFabricConfigurationForGetVolunteerRequestss = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "MerinVolActivity",
        operations: ["MerinOperation"]
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
function getVolunteerRequestsService1() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //kony.application.dismissLoadingScreen();
    //alert("entered my activity req service");
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
    if (!mobileFabricConfigurationForGetVolunteerRequestss.isKonySDKObjectInitialized) {
        initializeMobileFabricForGetVolunteerRequests1();
    } else if (mobileFabricConfigurationForGetVolunteerRequestss.isKonySDKObjectInitialized) {
        getVolunteerRequestsById1();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForGetVolunteerRequests1() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetVolunteerRequestss.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForGetVolunteerRequestss.konysdkObject.init(mobileFabricConfigurationForGetVolunteerRequestss.appKey, mobileFabricConfigurationForGetVolunteerRequestss.appSecret, mobileFabricConfigurationForGetVolunteerRequestss.serviceURL, initializeMobileFabricForGetVolunteerRequestsSuccess1, initializeMobileFabricForGetVolunteerRequestsFailure1);
        // alert(getBusinessRequests());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForGetVolunteerRequestsSuccess1(response) {
    //  alert (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetVolunteerRequestss.isKonySDKObjectInitialized = true;
    //   kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getVolunteerRequestsById1();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForGetVolunteerRequestsFailure1(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //      alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //      alert (" Unable to initialize the application. Please try again. ");
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
    mobileFabricConfigurationForGetVolunteerRequestss.isMFAuthenticated = true;
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

function getVolunteerRequestsById1() {
    //alert("inside getVolunteerRequestsById1");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    // alert("now1");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        // alert("now2");
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetVolunteerRequestss.integrationObj = mobileFabricConfigurationForGetVolunteerRequestss.konysdkObject.getIntegrationService(mobileFabricConfigurationForGetVolunteerRequestss.integrationServices[0].service);
        //mobileFabricConfigurationForGetBusinessRequests.integrationObj = mobileFabricConfigurationForGetBusinessRequests.konysdkObject.getIntegrationService(mobileFabricConfigurationForGetBusinessRequests.integrationServices[0].service);
        // alert("now3");
        var operationName = mobileFabricConfigurationForGetVolunteerRequestss.integrationServices[0].operations[0];
        // alert("now4");
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        //  alert("operation name"+operationName);
        var data = {};
        data["id"] = kony.store.getItem("volunteerId"); //"31";//kony.store.getItem("volunteerId"); 
        //   alert("the input=="+data["id"]);
        mobileFabricConfigurationForGetVolunteerRequestss.integrationObj.invokeOperation(operationName, headers, data, getVolunteerRequestsSuccessCallback1, getVolunteerRequestsErrorCallback1);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolunteerRequestsSuccessCallback1(gblRequestsList3) {
    try {
        // kony.application.dismissLoadingScreen();
        //alert("inside success getVolunteerRequestsSuccessCallback"+JSON.stringify(gblRequestsList3));
        // Check the opstatus for 0 meaning it worked
        if (gblRequestsList3 !== null && gblRequestsList3.opstatus === 0) { //if3
            //alert("1");
            // alert("second"+JSON.stringify(gblRequestsList3.requestList));
            if (gblRequestsList3.requestList !== null && gblRequestsList3.requestList != undefined) { //if2
                //  alert("second");
                // Checking to make sure we DO have results
                if (gblRequestsList3.requestList[0].Request !== null) { //if1
                    // alert("2");
                    gblReqVolunteerResponse = gblRequestsList3;
                    setSegVolunteerRequestsData1(gblReqVolunteerResponse);
                    //  var gblReqVolunteerResponse=JSON.stringify(requestList);
                    var gblReqVolunteerResponse = JSON.stringify(gblRequestsList3);
                } //if1
                else {
                    //alert("here it shud come");
                    //  VolunteerOpenCloseTaskService();
                }
            } //if2
            else {
                //  alert("hhhh");
                VolunteerOpenCloseTaskService();
            }
        }
        kony.application.dismissLoadingScreen();
    } catch (err) {
        //alert("the problem is "+err);
    }
}

function getVolunteerRequestsErrorCallback1(error) {
    kony.print(" ********** Entering into getVolunteerRequestsSuccessCallback ********** ");
    kony.print(" ********** Failure in getVolunteerRequestsSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getVolunteerRequestsSuccessCallback ********** ");
}

function setSegVolunteerRequestsData1(gblReqVolunteerResponse) {
    try {
        if (gblReqVolunteerResponse != "undefined" && gblReqVolunteerResponse != undefined) {
            //  alert("InSide"+JSON.stringify(gblReqVolunteerResponse));
            // alert("InSide"+JSON.stringify(gblReqVolunteerResponse));
            mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.widgetDataMap = {
                "acceptedRequestStatus": "acceptedRequestStatus",
                "acceptedRequestBusinessName": "acceptedRequestBusinessName",
                "acceptedRequestLabel": "acceptedRequestLabel",
                "lblRequestId": "lblRequestId",
                "cancelRequest": "cancelRequest",
                "acceptTask": "acceptTask",
                "acceptedRequestImage": "acceptedRequestImage",
                "contactRequest": "contactRequest",
                "lblTaskId": "lblTaskId",
                "phoneNumber": "phoneNumber",
                "segType": "segType",
                "volunteerId": "volunteerId",
                "businessId": "businessId",
                "requestTaskId": "requestTaskId"
            };
            mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.widgetDataMap = {
                "sentRequestBusinessName": "sentRequestBusinessName",
                "sentRequestImage": "sentRequestImage",
                "sentRequestLabel": "sentRequestLabel",
                "sentRequestStatus": "sentRequestStatus",
                "lblRequestIdSent": "lblRequestIdSent",
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
            if (gblReqVolunteerResponse["requestList"].length > 0) {
                var tempData = [];
                var tempDataSentReq = [];
                var len = gblReqVolunteerResponse["requestList"].length;
                var status;
                var RequestType;
                //  for (var i = 0; i < len; i++) {
                for (var i = len - 1; i >= 0; i--) {
                    //var status=gblReqVolunteerResponse["RequestsList"][i]["RequestsDTO"].RequestsStatus;
                    if ((gblReqVolunteerResponse["requestList"][i]["Request"].RequestsStatus) == 0) {
                        status = "new";
                    } else status = "pending";
                    if ((gblReqVolunteerResponse["requestList"][i]["Request"].requestType) == 2) {
                        var name = gblReqVolunteerResponse["requestList"][i]["Request"].sender_name;
                        // alert("name:"+name);
                        var title = gblReqVolunteerResponse["requestList"][i]["Request"].message;
                        var busmsge = gblReqVolunteerResponse["requestList"][i]["Request"].businessMessage;
                        kony.store.setItem("busmsge", busmsge);
                        var id = gblReqVolunteerResponse["requestList"][i]["Request"].request_id;
                        var taskid = gblReqVolunteerResponse["requestList"][i]["Request"].taskId;
                        var phone = gblReqVolunteerResponse["requestList"][i]["Request"].businessContact;
                        var volId = gblReqVolunteerResponse["requestList"][i]["Request"].volunteerId;
                        var busId = gblReqVolunteerResponse["requestList"][i]["Request"].businessId;
                        var msgTime99 = gblReqVolunteerResponse["requestList"][i]["Request"].messageTime;
                        var monthNames99 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var dayNames99 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        var date99 = new Date(msgTime99);
                        var day = date99.getDate();
                        var dayweekIndex99 = date99.getDay();
                        var monthIndex99 = date99.getMonth();
                        var year99 = date99.getFullYear();
                        var msgTimenew = dayNames99[dayweekIndex99] + ', ' + day + ' ' + monthNames99[monthIndex99] + ' ' + year99 + ' ' + date99.getHours() + ":" + date99.getMinutes() + ":" + date99.getSeconds();
                        var volImgPath1 = gblReqVolunteerResponse["requestList"][i]["Request"].businessImagePath;
                        var volrequestTaskId1 = gblReqVolunteerResponse["requestList"][i]["Request"].request_task_id;
                        var imagepath1 = "imgseglogo.png";
                        if (volImgPath1 != null && volImgPath1 != "null") {
                            imagepath1 = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + volImgPath1;
                        }
                        var testData = {
                            acceptedRequestImage: imagepath1, // "imgseglogo.png",
                            acceptedRequestStatus: msgTimenew,
                            acceptedRequestBusinessName: name,
                            acceptedRequestLabel: title,
                            lblRequestId: id,
                            cancelRequest: CANCEL_REQUEST,
                            acceptTask: ACCEPT_TASK,
                            contactRequest: CONTACT_REQUEST,
                            phoneNumber: phone,
                            segType: "accepted",
                            volunteerId: volId,
                            businessId: busId,
                            requestTaskId: volrequestTaskId1
                        };
                        tempData.push(testData);
                        mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.setData(tempData);
                        mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.isVisible = true;
                    } else if ((gblReqVolunteerResponse["requestList"][i]["Request"].requestType) == 2) {
                        var sentReqname = gblReqVolunteerResponse["requestList"][i]["Request"].sender_name;
                        var sentReqtitle = gblReqVolunteerResponse["requestList"][i]["Request"].message;
                        var actualmsg = gblReqVolunteerResponse["requestList"][i]["Request"].businessMessage;
                        var sentReqid = gblReqVolunteerResponse["requestList"][i]["Request"].request_id;
                        var volImgPath = gblReqVolunteerResponse["requestList"][i]["Request"].businessImagePath;
                        //alert("before phone num");
                        var businessPhone1 = gblReqVolunteerResponse["requestList"][i]["Request"].businessContact;
                        var volId = gblReqVolunteerResponse["requestList"][i]["Request"].volunteerId;
                        var busId = gblReqVolunteerResponse["requestList"][i]["Request"].businessId;
                        var volrequestTaskId2 = gblReqVolunteerResponse["requestList"][i]["Request"].request_task_id;
                        var imagepath = "imgseglogo.png";
                        if (volImgPath != null && volImgPath != "null") {
                            imagepath = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + volImgPath;
                        }
                        var testDataSentReq = {
                            sentRequestImage: imagepath, //"imgseglogo.png",
                            sentRequestStatus: status,
                            sentRequestBusinessName: sentReqname,
                            sentRequestLabel: sentReqtitle,
                            lblRequestIdSent: sentReqid,
                            ActaulMessage: actualmsg,
                            declineRequest: DECLINE_REQUEST,
                            acceptRequest: ACCEPT_REQUEST,
                            viewRequest: VIEW_REQUEST, //CONTACT_REQUEST
                            contactNumber: businessPhone1,
                            segType: "sent",
                            volunteerId: volId,
                            businessId: busId,
                            requestTaskId: volrequestTaskId2
                        };
                        tempDataSentReq.push(testDataSentReq);
                        mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.setData(tempDataSentReq);
                        //  mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.isVisible=true;  
                    }
                }
            }
            VolunteerOpenCloseTaskService();
        }
    } catch (e) {}
    kony.application.dismissLoadingScreen();
}

function contactBusiness() {
    var volunteerRowClickData = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    var businessContact = volunteerRowClickData[0].phoneNumber;
    kony.store.setItem("businessContact", businessContact);
    sendSMSToBusiness();
}

function sendSMSToBusiness() {
    try {
        var businessphoneNum = kony.store.getItem("businessContact");
        var msgBusiness = "";
        kony.phone.sendSMS(businessphoneNum, msgBusiness);
    } catch (err) {
        alert("error in sending sms:" + err);
    }
}