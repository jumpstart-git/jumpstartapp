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
    //     kony.application.showLoadingScreen(null, "loading", 
    // constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {  
    // shouldShowLabelInBottom: "true", separatorHeight: 200} );
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
        // alert("operation name"+operationName);
        var data = {};
        data["id"] = kony.store.getItem("volunteerId");; //"31";//kony.store.getItem("volunteerId"); 
        //   alert("the input=="+data["id"]);
        mobileFabricConfigurationForGetVolunteerRequestss.integrationObj.invokeOperation(operationName, headers, data, getVolunteerRequestsSuccessCallback1, getVolunteerRequestsErrorCallback1);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolunteerRequestsSuccessCallback1(gblRequestsList3) {
    // kony.application.dismissLoadingScreen();
    // alert("inside success getVolunteerRequestsSuccessCallback"+JSON.stringify(gblRequestsList3));
    // Check the opstatus for 0 meaning it worked
    if (gblRequestsList3 !== null && gblRequestsList3.opstatus === 0) {
        //  alert("1");
        // Checking to make sure we DO have results
        if (gblRequestsList3.requestList[0].Request !== null) {
            // alert("2");
            // Making sure we have at least 1 article returned
            // if (gblRequestsList.RequestsList.length > 0){
            // Now we know we have results so we'll print them out to check
            // alert ("########## Response received from service call: "+JSON.stringify(gblRequestsList.RequestsList));
            gblReqVolunteerResponse = gblRequestsList3;
            setSegVolunteerRequestsData1(gblReqVolunteerResponse);
            //  var gblReqVolunteerResponse=JSON.stringify(requestList);
            var gblReqVolunteerResponse = JSON.stringify(gblRequestsList3);
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
    kony.application.dismissLoadingScreen();
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
                "contactRequest": "contactRequest",
                "lblTaskId": "lblTaskId"
            };
            mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.widgetDataMap = {
                "sentRequestBusinessName": "sentRequestBusinessName",
                "sentRequestImage": "sentRequestImage",
                "sentRequestLabel": "sentRequestLabel",
                "sentRequestStatus": "sentRequestStatus",
                "lblRequestIdSent": "lblRequestIdSent",
                "declineRequest": "declineRequest",
                "acceptRequest": "acceptRequest",
                "viewRequest": "viewRequest"
            };
            if (gblReqVolunteerResponse["requestList"].length > 0) {
                var tempData = [];
                var tempDataSentReq = [];
                var len = gblReqVolunteerResponse["requestList"].length;
                var status;
                var RequestType;
                for (var i = 0; i < len; i++) {
                    //var status=gblReqVolunteerResponse["RequestsList"][i]["RequestsDTO"].RequestsStatus;
                    if ((gblReqVolunteerResponse["requestList"][i]["Request"].request_status) == 0) {
                        status = "new";
                    } else status = "pending";
                    if ((gblReqVolunteerResponse["requestList"][i]["Request"].requestType) == 2) {
                        var name = gblReqVolunteerResponse["requestList"][i]["Request"].sender_name;
                        var title = gblReqVolunteerResponse["requestList"][i]["Request"].volunteerMessage;
                        var id = gblReqVolunteerResponse["requestList"][i]["Request"].request_id;
                        var taskid = gblReqVolunteerResponse["requestList"][i]["Request"].taskId;
                        // alert("the req id=="+id);getVolunteerRequestsService1
                        //  kony.store.setItem("requestId", id);
                        var testData = {
                            contactImage: "imgseglogo.png",
                            acceptedRequestStatus: status,
                            acceptedRequestBusinessName: name,
                            acceptedRequestLabel: title,
                            lblRequestId: id,
                            // lblTaskId:id,
                            cancelRequest: CANCEL_REQUEST,
                            acceptTask: ACCEPT_TASK,
                            contactRequest: CONTACT_REQUEST
                        };
                        tempData.push(testData);
                        mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.setData(tempData);
                    } else if ((gblReqVolunteerResponse["requestList"][i]["Request"].requestType) == 1) {
                        var sentReqname = gblReqVolunteerResponse["requestList"][i]["Request"].sender_name;
                        var sentReqtitle = gblReqVolunteerResponse["requestList"][i]["Request"].message;
                        var sentReqid = gblReqVolunteerResponse["requestList"][i]["Request"].request_id;
                        // alert("the req id=="+id);
                        //  kony.store.setItem("requestId", id);
                        var testDataSentReq = {
                            sentRequestImage: "imgseglogo.png",
                            sentRequestStatus: status,
                            sentRequestBusinessName: sentReqname,
                            sentRequestLabel: sentReqtitle,
                            lblRequestIdSent: sentReqid,
                            declineRequest: DECLINE_REQUEST,
                            acceptRequest: ACCEPT_REQUEST,
                            viewRequest: VIEW_REQUEST //CONTACT_REQUEST
                        };
                        tempDataSentReq.push(testDataSentReq);
                        mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.setData(tempDataSentReq);
                    }
                }
            }
            // alert("calling open task for volunter");
            VolunteerOpenCloseTaskService();
        }
    } catch (e) {
        //    alert("the pblm is "+e);
    }
    kony.application.dismissLoadingScreen();
}