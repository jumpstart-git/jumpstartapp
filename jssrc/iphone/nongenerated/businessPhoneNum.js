//Type your code here
//text.BusinessVolunteerProfile[0]["BusinessVolunteerProfileDTO"][0]["scheduleDTO"][0].FromTime)
mobileFabricConfigurationForBusinessContactNumber = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "IndigenousBusineeProfile",
        operations: ["getIndigenousBusineeProfile"]
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
function GetBusinessContact() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
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
    if (!mobileFabricConfigurationForBusinessContactNumber.isKonySDKObjectInitialized) {
        initializeMobileFabricForBusinessContactNumber();
    } else if (mobileFabricConfigurationForBusinessContactNumber.isKonySDKObjectInitialized) {
        getBusinessContactNum();
    }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}
function initializeMobileFabricForBusinessContactNumber() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForBusinessContactNumber.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForBusinessContactNumber.konysdkObject.init(mobileFabricConfigurationForBusinessContactNumber.appKey, mobileFabricConfigurationForBusinessContactNumber.appSecret, mobileFabricConfigurationForBusinessContactNumber.serviceURL, mobileFabricConfigurationForBusinessContactNumberSuccess, mobileFabricConfigurationForBusinessContactNumberFailure);
        // alert(getBusinessContactNum());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForBusinessContactNumberSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessContactNumber.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessContactNum();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForBusinessContactNumberFailure(error) {
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
    // alert (" ********** Entering into loginMFSuccess ********** ");
    // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForBusinessContactNumber.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessContactNum();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessContactNum() {
    try {
        // alert("inside getBusinessContactNum");
        //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
            mobileFabricConfigurationForBusinessContactNumber.integrationObj = mobileFabricConfigurationForBusinessContactNumber.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessContactNumber.integrationServices[0].service);
            var operationName = mobileFabricConfigurationForBusinessContactNumber.integrationServices[0].operations[0];
            var headers = {};
            // if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
            // data= {"newsType": selectedKey};
            //         }else{
            // // The user didn't pick a value so we'll show the alert
            //    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
            //         }
            // alert("operation name"+operationName);
            var dataPhone = {};
            dataPhone["id"] = kony.store.getItem("selReqId");
            mobileFabricConfigurationForBusinessContactNumber.integrationObj.invokeOperation(operationName, headers, dataPhone, getBusinessContactNumSuccessCallback, getBusinessContactNumErrorCallback);
        } else alert("Network unavailable. Please check your network settings. ");
    } catch (e) {
        // alert("error is "+JSON.stringify(e));
    }
}

function getBusinessContactNumSuccessCallback(gblBusinessContactNumResponse) {
    // alert("inside success"+JSON.stringify(gblBusinessContactNumResponse));
    // Check the opstatus for 0 meaning it worked
    if (gblBusinessContactNumResponse !== null && gblBusinessContactNumResponse.opstatus === 0) {
        //alert("1");
        // Checking to make sure we DO have results
        if (gblBusinessContactNumResponse.BusinessDTO[0].BusinessDTO !== null) {
            //  alert("2");
            // Making sure we have at least 1 article returned
            if (gblBusinessContactNumResponse.BusinessDTO.length > 0) {
                // Now we know we have results so we'll print them out to check
                //    alert ("########## Response received from service call: "+JSON.stringify(gblBusinessContactNumResponse.BusinessDTO));
                gblBusinessContactNumResponseResponse = gblBusinessContactNumResponse;
                setBusinessPhoneNum(gblBusinessContactNumResponseResponse);
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + BusinessVolunteerProfile.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getBusinessContactNumErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessContactNumSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessContactNumSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch. Please try again. ");
    kony.print(" ********** Exiting out of getBusinessContactNumSuccessCallback ********** ");
}

function setBusinessPhoneNum(gblBusinessContactNumResponseResponse) {
    try {
        // alert("1");
        //alert(JSON.stringify(gblBusinessContactNumResponseResponse));
        var businessIdforcontact = kony.store.getItem("selReqId");
        //alert(businessIdforcontact);
        if (gblBusinessContactNumResponseResponse != "undefined" && gblBusinessContactNumResponseResponse != undefined) {
            var length = gblBusinessContactNumResponseResponse["BusinessDTO"].length;
            if (gblBusinessContactNumResponseResponse["BusinessDTO"].length > 0) {
                var businessContactFromVolunteer = gblBusinessContactNumResponseResponse["BusinessDTO"][0].phoneNumber;
                kony.store.setItem("businessContactFromVolunteer", businessContactFromVolunteer);
                // alert("contact Number:"+businessContactFromVolunteer); 
            }
            // alert("contact number:"+JSON.stringify(businessContactFromVolunteer));
            //     searchResultProfile.show();
            //     searchResultProfile.businessProfileContainer.isVisible=true;
            //     searchResultProfile.volunteerRequestContainer.isVisible=false;
            kony.application.dismissLoadingScreen();
            sendSMSToBusinessFromVol1();
        }
    } catch (Exception) {
        //   alert("Exception is"+JSON.stringify(Exception));
    }
}

function sendSMSToBusinessFromVol1() {
    try {
        var businessContactFromSearchProfile = kony.store.getItem("businessContactFromVolunteer");
        if (businessContactFromSearchProfile == "null" || businessContactFromSearchProfile == null) {
            businessContactFromSearchProfile = "";
        }
        var msgToBusiness1 = "";
        kony.phone.sendSMS(businessContactFromSearchProfile, msgToBusiness1);
    } catch (err) {
        alert("error in sending sms:" + err);
    }
}