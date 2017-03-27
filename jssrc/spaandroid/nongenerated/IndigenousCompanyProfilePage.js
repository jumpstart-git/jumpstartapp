//Type your code here
//text.IndigenousBusinessProfile[0]["IndigenousBusinessProfileDTO"][0]["scheduleDTO"][0].FromTime)
mobileFabricConfigurationForIndigenousBusinessProfile = {
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
function IndigenousBusinessProfileService() {
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
    if (!mobileFabricConfigurationForIndigenousBusinessProfile.isKonySDKObjectInitialized) {
        initializeMobileFabricForIndigenousBusinessProfile();
    } else if (mobileFabricConfigurationForIndigenousBusinessProfile.isKonySDKObjectInitialized) {
        getIndigenousBusinessProfile();
    }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}
function initializeMobileFabricForIndigenousBusinessProfile() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForIndigenousBusinessProfile.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForIndigenousBusinessProfile.konysdkObject.init(mobileFabricConfigurationForIndigenousBusinessProfile.appKey, mobileFabricConfigurationForIndigenousBusinessProfile.appSecret, mobileFabricConfigurationForIndigenousBusinessProfile.serviceURL, mobileFabricConfigurationForIndigenousBusinessProfileSuccess, mobileFabricConfigurationForIndigenousBusinessProfileFailure);
        // alert(getIndigenousBusinessProfile());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForIndigenousBusinessProfileSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForIndigenousBusinessProfile.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getIndigenousBusinessProfile();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForIndigenousBusinessProfileFailure(error) {
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
    mobileFabricConfigurationForIndigenousBusinessProfile.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getIndigenousBusinessProfile();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getIndigenousBusinessProfile() {
    try {
        //alert("inside getIndigenousBusinessProfile");
        //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
            mobileFabricConfigurationForIndigenousBusinessProfile.integrationObj = mobileFabricConfigurationForIndigenousBusinessProfile.konysdkObject.getIntegrationService(mobileFabricConfigurationForIndigenousBusinessProfile.integrationServices[0].service);
            var operationName = mobileFabricConfigurationForIndigenousBusinessProfile.integrationServices[0].operations[0];
            var headers = {};
            // if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
            // data= {"newsType": selectedKey};
            //         }else{
            // // The user didn't pick a value so we'll show the alert
            //    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
            //         }
            // alert("operation name"+operationName);
            var data = {};
            data["id"] = kony.store.getItem("selReqId");
            //alert("data id business"+ data["id"]);
            mobileFabricConfigurationForIndigenousBusinessProfile.integrationObj.invokeOperation(operationName, headers, data, getIndigenousBusinessProfileSuccessCallback, getIndigenousBusinessProfileErrorCallback);
        } else alert("Network unavailable. Please check your network settings. ");
    } catch (e) {
        alert("error is " + JSON.stringify(e));
    }
}

function getIndigenousBusinessProfileSuccessCallback(gblIndigenousBusinessProfile) {
    // alert("inside success"+JSON.stringify(gblIndigenousBusinessProfile));
    // Check the opstatus for 0 meaning it worked
    if (gblIndigenousBusinessProfile !== null && gblIndigenousBusinessProfile.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblIndigenousBusinessProfile.BusinessDTO !== null) {
            //  alert("2");
            // Making sure we have at least 1 article returned
            if (gblIndigenousBusinessProfile.BusinessDTO.length > 0) {
                // Now we know we have results so we'll print them out to check
                //  alert ("########## Response received from service call: "+JSON.stringify(gblIndigenousBusinessProfile.businessBbj));
                gblIndigenousBusinessProfileResponse = gblIndigenousBusinessProfile;
                setIndigenousBusinessProfileData(gblIndigenousBusinessProfileResponse);
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + IndigenousBusinessProfile.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getIndigenousBusinessProfileErrorCallback(error) {
    kony.print(" ********** Entering into getIndigenousBusinessProfileSuccessCallback ********** ");
    kony.print(" ********** Failure in getIndigenousBusinessProfileSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Failed to fetch the news. Please try again. ");
    kony.print(" ********** Exiting out of getIndigenousBusinessProfileSuccessCallback ********** ");
}

function setIndigenousBusinessProfileData(gblIndigenousBusinessProfileResponse) {
    try {
        //alert("1");
        if (gblIndigenousBusinessProfileResponse != "undefined" && gblIndigenousBusinessProfileResponse != undefined) {
            var len = gblIndigenousBusinessProfileResponse["BusinessDTO"].length;
            if (gblIndigenousBusinessProfileResponse["BusinessDTO"].length > 0) {
                //alert("inside if");
                //for (var i = 0; i < len; i++) 
                // {          
                var companyName = gblIndigenousBusinessProfileResponse.BusinessDTO[0].businessName;
                var companyAddress = gblIndigenousBusinessProfileResponse.BusinessDTO[0].address1;
                var businessContactNumber = gblIndigenousBusinessProfileResponse.BusinessDTO[0].phoneNumber;
                var aboutCompany = gblIndigenousBusinessProfileResponse.BusinessDTO[0].indigenousBusinessesCol;
                //business reach values has to be configured from mobile fabric 
                var businessActivity = gblIndigenousBusinessProfileResponse.BusinessDTO[0].sector;
                var professionalAffiliations = gblIndigenousBusinessProfileResponse.BusinessDTO[0].affiliations;
                //  var businessReach = gblIndigenousBusinessProfileResponse.businessBbj[i]["BusinessDTO"].affiliations;
                // var businessLat = gblIndigenousBusinessProfileResponse.businessBbj[i]["BusinessDTO"].BusinessLat;
                // var businessLong = gblIndigenousBusinessProfileResponse.businessBbj[i]["BusinessDTO"].BusinessLong; 
                //var myProfileName = gblIndigenousBusinessProfileResponse.IndigenousBusinessProfile[0]["IndigenousBusinessProfileDTO"][0].BusinessImage;
                // }
                // alert("11");
                searchResultProfile.businessProfileContainer.businessProfileDetailsHeader.CompanyNameAndAddressContainer.BusinessProfileCompanyNameAndAddressContaine.text = companyName;
                searchResultProfile.businessProfileContainer.businessProfileDetailsHeader.CompanyNameAndAddressContainer.CompanyAddressContainer.CompanyAddressLabel.text = companyAddress;
                searchResultProfile.businessProfileContainer.businessProfileAboutContainer.businessProfileAboutText.text = aboutCompany;
                searchResultProfile.businessProfileContainer.businessProfileBusinessActivityContainer.businessProfileBusinessActivityText.text = businessActivity;
                searchResultProfile.businessProfileContainer.businessProfileAffiliationsContainer.businessProfileAffiliationsText.text = professionalAffiliations;
                //  searchResultProfile.businessProfileContainer.businessProfileReachContainer.businessProfileReachText.text= businessReach;
                // myProfile.show();
                searchResultProfile.show();
                searchResultProfile.businessProfileContainer.isVisible = true;
                searchResultProfile.volunteerRequestContainer.isVisible = false;
                // alert("111");   
            }
        }
    } catch (Exception) {
        //   alert("Exception is"+JSON.stringify(Exception));
    }
}