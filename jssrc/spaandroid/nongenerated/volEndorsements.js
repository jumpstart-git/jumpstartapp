//Type your code here
mobileFabricConfigurationForEndorsements = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "VolEndorsements",
        operations: ["viewEndoresements"]
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
function endorsementsService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //alert("inside end");
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
    if (!mobileFabricConfigurationForEndorsements.isKonySDKObjectInitialized) {
        initializeMobileFabricForEndorsements();
    } else if (mobileFabricConfigurationForEndorsements.isKonySDKObjectInitialized) {
        getEndorsements();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForEndorsements() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForEndorsements.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForEndorsements.konysdkObject.init(mobileFabricConfigurationForEndorsements.appKey, mobileFabricConfigurationForEndorsements.appSecret, mobileFabricConfigurationForEndorsements.serviceURL, initializeMobileFabricForEndorsementsSuccess98, initializeMobileFabricForEndorsementsFailure98);
        // alert(getEndorsements());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForEndorsementsSuccess98(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForEndorsements.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getEndorsements();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForEndorsementsFailure98(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again.");
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
    mobileFabricConfigurationForEndorsements.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getEndorsements();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getEndorsements() {
    // alert("inside getEndorsements");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForEndorsements.integrationObj = mobileFabricConfigurationForEndorsements.konysdkObject.getIntegrationService(mobileFabricConfigurationForEndorsements.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForEndorsements.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name"+operationName);
        var data = {};
        data["id"] = kony.store.getItem("volunteerId");
        //alert("data:"+data["id"]);
        mobileFabricConfigurationForEndorsements.integrationObj.invokeOperation(operationName, headers, data, getEndorsementsSuccessCallback, getEndorsementsErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getEndorsementsSuccessCallback(gblEndorsements) {
    //alert("inside success"+JSON.stringify(gblEndorsements));
    // Check the opstatus for 0 meaning it worked
    if (gblEndorsements !== null && gblEndorsements.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblEndorsements.endorsementList !== null) {
            //alert("2");
            // Making sure we have at least 1 article returned
            if (gblEndorsements.endorsementList !== null && gblEndorsements.endorsementList != undefined) {
                if (gblEndorsements.endorsementList[0].EndorsementDTO !== null) {
                    // Now we know we have results so we'll print them out to check
                    // alert ("########## Response received from service call: "+JSON.stringify(gblEndorsements.endorsementList));
                    gblEndorsmentResponse99 = gblEndorsements;
                    setSegDataEndors(gblEndorsmentResponse99);
                    // var gblEndorsmentResponse99=JSON.stringify(notificationList);
                    //Setting the segment widgetdataMap 
                    //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
                    //      //      Setting the data to the segment
                    //      frmFoxNews.segNewsTitle.setVisibility(true);
                    //          frmFoxNews.segNewsTitle.setData(notificationList.MessageDTO.news_item.title);
                    //          kony.application.dismissLoadingScreen();
                }
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
}

function getEndorsementsErrorCallback(error) {
    kony.print(" ********** Entering into getEndorsementsSuccessCallback ********** ");
    kony.print(" ********** Failure in getEndorsementsSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch response ");
    kony.print(" ********** Exiting out of getEndorsementsSuccessCallback ********** ");
}

function setSegDataEndors(gblEndorsmentResponse99) {
    try {
        if (gblEndorsmentResponse99 != "undefined" && gblEndorsmentResponse99 != undefined) {
            //alert("InSide"+JSON.stringify(gblEndorsmentResponse99));
            // alert("InSide"+JSON.stringify(gblEndorsmentResponse99));
            mainPage.mainPageBody.mainPageContentParent.myEndorsements.endorsementsSeg.widgetDataMap = {
                "endorsentContactImage": "endorsentContactImage",
                "endorsementContactName": "endorsementContactName",
                "endorsementTaskName": "endorsementTaskName",
                "endorsementSkill": "endorsementSkill",
                "endorsementText": "endorsementText",
                "endorsementReceivedTime": "endorsementReceivedTime"
            };
            if (gblEndorsmentResponse99.endorsementList.length > 0) {
                var tempEndData = [];
                var len = gblEndorsmentResponse99["endorsementList"].length;
                //alert("len:"+JSON.stringify(len));
                for (var i = len - 1; i >= 0; i--) {
                    // var len = gblEndorsmentResponse99["endorsementList"].length;
                    var busName = gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessName;
                    var skillname = "Skills:" + gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].skill;
                    var msg = gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].message;
                    //salma
                    if ((gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath !== null) && (gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath !== "null") && (gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath !== "") && (gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath !== " ") && (gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath !== undefined) && (gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath !== "undefined") && (gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath !== 'undefined')) {
                        var endorsImgPath1 = gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].businessImagePath;
                    } else {
                        var endorsImgPath1 = "imgseglogo.png";
                    }
                    var endimagepathVol77 = "imgseglogo.png";
                    if (endorsImgPath1 != null && endorsImgPath1 != "null") {
                        endimagepathVol77 = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + endorsImgPath1;
                    }
                    //endsalma
                    var time = gblEndorsmentResponse99["endorsementList"][i]["EndorsementDTO"].messageTime;
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    var date = new Date(time);
                    var day = date.getDate();
                    var dayweekIndex = date.getDay();
                    var monthIndex = date.getMonth();
                    var year = date.getFullYear();
                    var endTime = dayNames[dayweekIndex] + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                    // alert("endTime:"+JSON.stringify(endTime));
                    var testEndData = {
                        endorsentContactImage: endimagepathVol77,
                        endorsementContactName: busName,
                        endorsementTaskName: skillname,
                        endorsementSkill: skillname,
                        endorsementText: msg,
                        endorsementReceivedTime: endTime
                    };
                    tempEndData.push(testEndData);
                    //  alert("tempEndData:"+JSON.stringify(tempEndData));
                }
                mainPage.mainPageBody.mainPageContentParent.myEndorsements.endorsementsSeg.setData(tempEndData);
                kony.application.dismissLoadingScreen();
                //  mainPage.mainPageContentParent.myEndorsements.endorsementsSeg.setData(tempEndData);
            }
        }
    } catch (error) {
        // alert("error is"+JSON.stringify(error));
        kony.application.dismissLoadingScreen();
    }
}