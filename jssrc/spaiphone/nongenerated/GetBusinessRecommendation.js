mobileFabricConfigurationForBusinessRecommendation = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "GetRecommendationsForBusiness",
        operations: ["getRecommendationById"]
    }],
    konysdkObject: null,
    authClient: null,
    integrationObj: null,
    isKonySDKObjectInitialized: false,
    isMFAuthenticated: false
};

function BusinessRecommendationService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    if (!mobileFabricConfigurationForBusinessRecommendation.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessRecommendation();
    } else if (mobileFabricConfigurationForBusinessRecommendation.isKonySDKObjectInitialized) {
        getBusinessRecommendation();
    }
}
// 	else{
// 			// The user didn't pick a value so we'll show the alert
// 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//	}
//}
function initializeMobileFabricForBusinessRecommendation() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessRecommendation.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessRecommendation.konysdkObject.init(mobileFabricConfigurationForBusinessRecommendation.appKey, mobileFabricConfigurationForBusinessRecommendation.appSecret, mobileFabricConfigurationForBusinessRecommendation.serviceURL, initializeMobileFabricForBusinessRecommendationSuccess, initializeMobileFabricForBusinessRecommendationFailure);
        // alert(getBusinessRecommendation());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessRecommendationSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessRecommendation.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessRecommendation();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessRecommendationFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //	alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //	alert (" Unable to initialize the application. Please try again. ");
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
    //	alert (" ********** Entering into loginMFSuccess ********** ");
    //	alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessRecommendation.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessRecommendation();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessRecommendation() {
    //alert("inside getBusinessRecommendation");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessRecommendation.integrationObj = mobileFabricConfigurationForBusinessRecommendation.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessRecommendation.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForBusinessRecommendation.integrationServices[0].operations[0];
        var headers = {};
        // 		if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        // 			data= {"newsType": selectedKey};
        //         }else{
        // 			// The user didn't pick a value so we'll show the alert
        // 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name"+operationName);
        var noteBusId = {};
        noteBusId["id"] = kony.store.getItem("businessId"); //"1";//
        mobileFabricConfigurationForBusinessRecommendation.integrationObj.invokeOperation(operationName, headers, noteBusId, getBusinessRecommendationSuccessCallback, getBusinessRecommendationErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessRecommendationSuccessCallback(gblBusinessrecommendationList) {
    //alert("inside success"+JSON.stringify(gblBusinessrecommendationList));
    // Check the opstatus for 0 meaning it worked
    if (gblBusinessrecommendationList !== null && gblBusinessrecommendationList.opstatus === 0) {
        if (gblBusinessrecommendationList.recommendationList != null && gblBusinessrecommendationList.recommendationList != undefined) {
            if (gblBusinessrecommendationList.recommendationList[0].RecommendationDTO !== null && gblBusinessrecommendationList.recommendationList[0].RecommendationDTO != undefined) {
                // alert("2");
                // Making sure we have at least 1 article returned
                if (gblBusinessrecommendationList.recommendationList.length > 0) {
                    // Now we know we have results so we'll print them out to check
                    // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessrecommendationList.BusinessrecommendationList));
                    gblBusRecResponse = gblBusinessrecommendationList;
                    getTempForRecSort(gblBusinessrecommendationList);
                    setRecSegData(gblBusRecResponse);
                }
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + BusinessrecommendationList.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getBusinessRecommendationErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessRecommendationSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessRecommendationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getBusinessRecommendationSuccessCallback ********** ");
}

function setRecSegData(gblBusRecResponse) {
    if (gblBusRecResponse != "undefined" && gblBusRecResponse != undefined) {
        //  alert("InSide setRecSegData"+JSON.stringify(gblBusRecResponse));
        // alert("InSide"+JSON.stringify(gblBusRecResponse));
        mainPage.mainPageContentParent.myRecommendations.segRecommendation.widgetDataMap = {
            "recommendationContactImage": "recommendationContactImage",
            "recommendationContactName": "recommendationContactName",
            "recommendationContactDesignation": "recommendationContactDesignation",
            "recommendationContactCompanyName": "recommendationContactCompanyName",
            "recommendationText": "recommendationText",
            "recommendationReceivedTime": "recommendationReceivedTime"
        };
        if (gblBusRecResponse["recommendationList"].length > 0) {
            var tempRecData = [];
            var len = gblBusRecResponse["recommendationList"].length;
            //alert("n1"+len);
            // for (var i = 0; i < len; i++) {
            for (var i = len - 1; i >= 0; i--) {
                /* mamata code start
                var msg=gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].messageTitle ;
                var time=gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].createdDate ;
                var name=gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].volunteerName;
                 mamata code end*/
                var txt = gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].recDetail;
                var time = gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].messageTime;
                var name = gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].volunteerName;
                var role = gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].volunteerRole;
                var companyName = gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].volunteerCompName;
                var volunteerimagepathRec = gblBusRecResponse["recommendationList"][i]["RecommendationDTO"].volunteerImagePath;
                // var converteddDate=new Date(time);
                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var date = new Date(time);
                var day = date.getDate();
                var dayweekIndex = date.getDay();
                var monthIndex = date.getMonth();
                var year = date.getFullYear();
                var recommendationStr = dayNames[dayweekIndex] + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year;
                var imagepathRec = "imgseglogo.png"
                if (volunteerimagepathRec != null && volunteerimagepathRec != "null") {
                    imagepathRec = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + volunteerimagepathRec;
                }
                var testNoteData = {
                    recommendationContactImage: imagepathRec, // "imgseglogo.png",
                    recommendationContactName: name,
                    recommendationContactDesignation: role,
                    recommendationContactCompanyName: companyName,
                    recommendationText: txt,
                    recommendationReceivedTime: recommendationStr
                };
                tempRecData.push(testNoteData);
            }
            // alert("n2");
            mainPage.mainPageContentParent.myRecommendations.segRecommendation.setData(tempRecData);
            kony.application.dismissLoadingScreen();
            mainPage.mainPageContentParent.myRecommendations.isVisible = true;
        }
    }
}
//Type your code here