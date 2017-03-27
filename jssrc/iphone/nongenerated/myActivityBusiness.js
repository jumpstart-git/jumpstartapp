//Type your code here
mobileFabricConfigurationForGetVolunteerRequests = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessGetRequests",
        operations: ["getBusinessRequests"]
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
function getVolunteerRequestsService() {
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
    if (!mobileFabricConfigurationForGetVolunteerRequests.isKonySDKObjectInitialized) {
        initializeMobileFabricForGetVolunteerRequests();
    } else if (mobileFabricConfigurationForGetVolunteerRequests.isKonySDKObjectInitialized) {
        getVolunteerRequestsById();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForGetVolunteerRequests() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetVolunteerRequests.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForGetVolunteerRequests.konysdkObject.init(mobileFabricConfigurationForGetVolunteerRequests.appKey, mobileFabricConfigurationForGetVolunteerRequests.appSecret, mobileFabricConfigurationForGetVolunteerRequests.serviceURL, initializeMobileFabricForGetVolunteerRequestsSuccess, initializeMobileFabricForGetVolunteerRequestsFailure);
        // alert(getBusinessRequests());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForGetVolunteerRequestsSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetVolunteerRequests.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getVolunteerRequestsById();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForGetVolunteerRequestsFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //     alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to initialize the application. Please try again. ");
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
    mobileFabricConfigurationForGetVolunteerRequests.isMFAuthenticated = true;
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

function getVolunteerRequestsById() {
    //alert("inside getBusinessRequests");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetVolunteerRequests.integrationObj = mobileFabricConfigurationForGetVolunteerRequests.konysdkObject.getIntegrationService(mobileFabricConfigurationForGetVolunteerRequests.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForGetVolunteerRequests.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name"+operationName);
        var data = {};
        data["id"] = kony.store.getItem("VolunteerId");
        mobileFabricConfigurationForGetVolunteerRequests.integrationObj.invokeOperation(operationName, headers, data, getVolunteerRequestsSuccessCallback, getVolunteerRequestsErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolunteerRequestsSuccessCallback(gblRequestsList) {
    //alert("inside success"+JSON.stringify(gblRequestsList));
    // Check the opstatus for 0 meaning it worked
    if (gblRequestsList !== null && gblRequestsList.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblRequestsList.requestList[0].Request !== null) {
            //alert("2");
            // Making sure we have at least 1 article returned
            // if (gblRequestsList.RequestsList.length > 0){
            // Now we know we have results so we'll print them out to check
            // alert ("########## Response received from service call: "+JSON.stringify(gblRequestsList.RequestsList));
            gblReqVolunteerResponse = gblRequestsList;
            setSegVolunteerRequestsData(gblReqVolunteerResponse);
            //  var gblReqVolunteerResponse=JSON.stringify(requestList);
            var gblReqVolunteerResponse = JSON.stringify(gblRequestsList);
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
}

function getVolunteerRequestsErrorCallback(error) {
    kony.print(" ********** Entering into getVolunteerRequestsSuccessCallback ********** ");
    kony.print(" ********** Failure in getVolunteerRequestsSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //      alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getVolunteerRequestsSuccessCallback ********** ");
}

function setSegVolunteerRequestsData(gblReqVolunteerResponse) {
    if (gblReqVolunteerResponse != "undefined" && gblReqVolunteerResponse != undefined) {
        // alert("InSide"+JSON.stringify(gblReqVolunteerResponse));
        // alert("InSide"+JSON.stringify(gblReqVolunteerResponse));
        mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.widgetDataMap = {
            "acceptedRequestStatus": "acceptedRequestStatus",
            "acceptedRequestBusinessName": "acceptedRequestBusinessName",
            "acceptedRequestLabel": "acceptedRequestLabel",
            "lblRequestId": "lblRequestId",
            "cancelRequest": "cancelRequest",
            "acceptTask": "acceptTask",
            "contactRequest": "contactRequest"
        };
        mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.widgetDataMap = {
            "sentRequestBusinessName": "sentRequestBusinessName",
            "sentRequestImage": "sentRequestImage",
            "sentRequestLabel": "sentRequestLabel",
            "sentRequestStatus": "sentRequestStatus",
            "lblRequestIdSent": "lblRequestIdSent"
        };
        if (gblReqVolunteerResponse["requestList"].length > 0) {
            var tempData = [];
            var tempDataSentReq = [];
            var len = gblReqVolunteerResponse["requestList"].length;
            var status;
            for (var i = 0; i < len; i++) {
                var RequestType;
                //var status=gblReqVolunteerResponse["RequestsList"][i]["RequestsDTO"].RequestsStatus;
                if ((gblReqVolunteerResponse["requestList"][i]["Request"].RequestsStatus) == 0) {
                    status = "new";
                } else status = "pending";
                if ((blReqBusinessResponse["requestList"][i]["Request"].requestType) == 1) {
                    var name = gblReqVolunteerResponse["requestList"][i]["Request"].senderName;
                    var title = gblReqVolunteerResponse["requestList"][i]["Request"].volunteerMessage;
                    var id = gblReqVolunteerResponse["requestList"][i]["Request"].request_id;
                    // alert("the req id=="+id);
                    //  kony.store.setItem("requestId", id);
                    var testData = {
                        contactImage: "imgseglogo.png",
                        acceptedRequestStatus: status,
                        acceptedRequestBusinessName: name,
                        acceptedRequestLabel: title,
                        lblRequestId: id,
                        cancelRequest: CANCEL_REQUEST,
                        acceptTask: START_ENGAGEMENT,
                        contactRequest: CONTACT_REQUEST
                    };
                    tempData.push(testData);
                    mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.setData(tempData);
                } else {
                    var sentReqname = gblReqVolunteerResponse["requestList"][i]["Request"].senderName;
                    var sentReqtitle = gblReqVolunteerResponse["requestList"][i]["Request"].volunteerMessage;
                    var sentReqid = gblReqVolunteerResponse["requestList"][i]["Request"].request_id;
                    // alert("the req id=="+id);
                    //  kony.store.setItem("requestId", id);
                    var testDataSentReq = {
                        contactImage: "imgseglogo.png",
                        sentRequestStatus: status,
                        sentRequestBusinessName: sentReqname,
                        sentRequestLabel: sentReqtitle,
                        lblRequestIdSent: sentReqid,
                        cancelRequest: DECLINE_REQUEST,
                        acceptTask: START_ENGAGEMENT,
                        contactRequest: CONTACT_REQUEST
                    };
                    tempDataSentReq.push(testDataSentReq);
                    mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.setData(tempDataSentReq);
                }
            }
        }
    }
}