var gblExistingTaskId; //Type your code here
mobileFabricConfigurationForDeleteVolunteerAccount = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "DeleteVolunteer",
        operations: ["deleteVolunteerById"]
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
function DeleteVolunteerAccountService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    // alert("inside del vol service");
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
    if (!mobileFabricConfigurationForDeleteVolunteerAccount.isKonySDKObjectInitialized) {
        initializeMobileFabricForDeleteVolunteerAccount();
    } else if (mobileFabricConfigurationForDeleteVolunteerAccount.isKonySDKObjectInitialized) {
        getDeleteVolunteerAccount();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForDeleteVolunteerAccount() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForDeleteVolunteerAccount.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForDeleteVolunteerAccount.konysdkObject.init(mobileFabricConfigurationForDeleteVolunteerAccount.appKey, mobileFabricConfigurationForDeleteVolunteerAccount.appSecret, mobileFabricConfigurationForDeleteVolunteerAccount.serviceURL, initializeMobileFabricForDeleteVolunteerAccountSuccess, initializeMobileFabricForDeleteVolunteerAccountFailure);
        // alert(getDeleteVolunteerAccount());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForDeleteVolunteerAccountSuccess(response) {
    //alert("inside del vol service success");
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForDeleteVolunteerAccount.isKonySDKObjectInitialized = true;
    //  kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getDeleteVolunteerAccount();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForDeleteVolunteerAccountFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //   alert (" Unable to initialize the application. Please try again. ");
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
    mobileFabricConfigurationForDeleteVolunteerAccount.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getDeleteVolunteerAccount();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getDeleteVolunteerAccount() {
    //alert("inside getDeleteVolunteerAccount");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForDeleteVolunteerAccount.integrationObj = mobileFabricConfigurationForDeleteVolunteerAccount.konysdkObject.getIntegrationService(mobileFabricConfigurationForDeleteVolunteerAccount.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForDeleteVolunteerAccount.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        var VolDelAcId = {};
        VolDelAcId["id"] = kony.store.getItem("volunteerId"); //"1";//kony.store.getItem("businessId"); 
        //alert("id"+VolDelAcId["id"]);
        mobileFabricConfigurationForDeleteVolunteerAccount.integrationObj.invokeOperation(operationName, headers, VolDelAcId, getDeleteVolunteerAccountSuccessCallback, getDeleteVolunteerAccountErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getDeleteVolunteerAccountSuccessCallback(gblDeleteVolunteerAccountList) {
    // alert("inside getDeleteVolunteerAccountSuccessCallback"+JSON.stringify(gblDeleteVolunteerAccountList));
    // Check the opstatus for 0 meaning it worked
    if (gblDeleteVolunteerAccountList !== null && gblDeleteVolunteerAccountList.opstatus === 0) { //first if
        if (gblDeleteVolunteerAccountList != null && gblDeleteVolunteerAccountList != undefined) { //second if
            if (gblDeleteVolunteerAccountList !== null && gblDeleteVolunteerAccountList != undefined) { //3rd if
                // alert("2");
                // Making sure we have at least 1 article returned
                //       if (gblDeleteVolunteerAccountList.length > 0)
                //       {//4th if
                // Now we know we have results so we'll print them out to check
                // alert ("########## Response received from service call: ");
                delvolAccountResponse = gblDeleteVolunteerAccountList;
                getVolAccountDeleted(delvolAccountResponse);
                // var delvolAccountResponse=JSON.stringify(DeleteVolunteerAccountList);
                //Setting the segment widgetdataMap 
                //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
                //      //      Setting the data to the segment
                //      frmFoxNews.segNewsTitle.setVisibility(true);
                //          frmFoxNews.segNewsTitle.setData(DeleteVolunteerAccountList.MessageDTO.news_item.title);
                //          kony.application.dismissLoadingScreen();
                //}//end of 4th if
            } //end of 3rd if
        } //end of 2nd if
        else {
            kony.application.dismissLoadingScreen();
            // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
            kony.ui.Alert({
                message: "Service call failed with opstatus " + DeleteVolunteerAccountList.opstatus,
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: "Fox News",
                yesLabel: "OK"
            }, {});
        }
    } //end first if
} //end of fun
function getDeleteVolunteerAccountErrorCallback(error) {
    kony.print(" ********** Entering into getDeleteVolunteerAccountSuccessCallback ********** ");
    kony.print(" ********** Failure in getDeleteVolunteerAccountSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //  alert (" Failed  Please try again. ");
    kony.print(" ********** Exiting out of getDeleteVolunteerAccountSuccessCallback ********** ");
}

function getVolAccountDeleted(delvolAccountResponse) {
    try {
        if (delvolAccountResponse != "undefined" && delvolAccountResponse != undefined) {
            //alert("InSide getVolAccountDeleted"+JSON.stringify(delvolAccountResponse));
            var len = delvolAccountResponse.length;
            var userDeleteSuccess = delvolAccountResponse.userDelete;
            var deleteErrorCode = delvolAccountResponse.errorCode;
            if ((delvolAccountResponse["userDelete"] == "success") || (delvolAccountResponse["errorCode"] == "User is removed from the Jumpstart App")) {
                //alert("Your account has been deleted successfully");
                kony.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": null,
                    "yesLabel": "OK",
                    "noLabel": "No",
                    "message": "Your account has been deleted successfully",
                    "alertHandler": null
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
                logoutOfApplication();
                kony.application.dismissLoadingScreen();
            } else if ((delvolAccountResponse["userDelete"] == "false") || (delvolAccountResponse["errorCode"] == "User has open Tasks")) {
                alert("Please close all your on going open engagements");
                kony.application.dismissLoadingScreen();
            }
        }
        kony.application.dismissLoadingScreen();
        //BusinessCloseTaskService ();  
    } catch (e) {
        //just to avoid undefined type error
    }
}