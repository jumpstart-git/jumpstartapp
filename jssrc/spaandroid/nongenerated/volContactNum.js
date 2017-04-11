mobileFabricConfigurationForVolunteerNumber = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: ["VolunteerProfile"],
        operations: ["getVolunteerProfile"]
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
function volunteerPhoneNumber() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    // alert("enetred volunterr..yeyyyy");////actualy we have to cal service
    // getVolPhoneNoSuccessCallback(gblVolunteersPhoneNumber);
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
    if (!mobileFabricConfigurationForVolunteerNumber.isKonySDKObjectInitialized) {
        initializeMobileFabricForVolunteerPhoneNumber();
    } else if (mobileFabricConfigurationForVolunteerNumber.isKonySDKObjectInitialized) {
        getVolunteerPhoneNumber();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricForVolunteerPhoneNumber() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerNumber.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolunteerNumber.konysdkObject.init(mobileFabricConfigurationForVolunteerNumber.appKey, mobileFabricConfigurationForVolunteerNumber.appSecret, mobileFabricConfigurationForVolunteerNumber.serviceURL, mobileFabricConfigurationForVolunteerNumberSuccess, mobileFabricConfigurationForVolunteerNumberFailure);
        // alert(getNotification());
    } else
    //alert ("Network unavailable. Please check your network settings. ");
        kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForVolunteerNumberSuccess(response) {
    //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerNumber.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getVolunteerPhoneNumber();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForVolunteerNumberFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}
/*function authenticateMFUsingUserStore(){
             //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfiguration.identityServices[0].username, "password": mobileFabricConfiguration.identityServices[0].password};
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);

   kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
              //  alert (" ********** Entering into loginMFSuccess ********** ");
               // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolunteer.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getNotification();
                kony.print (" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error)
{
                kony.print (" ********** Entering into loginMFFailure ********** ");
                kony.print (" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
                alert (" Unable to authenticate to Server, Login failed. Please try again. ");
                kony.print (" ********** Exiting out of loginMFFailure ********** ");
}*/
function getVolunteerPhoneNumber() {
    //  alert("inside getVolunteerPhoneNumber");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        //mamata           
        mobileFabricConfigurationForVolunteerNumber.integrationObj = mobileFabricConfigurationForVolunteerNumber.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerNumber.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolunteerNumber.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name"+operationName);
        var profiledata = {};
        profiledata["id"] = kony.store.getItem("selReqId");
        //alert("the id=="+JSON.stringify(profiledata));
        mobileFabricConfigurationForVolunteerNumber.integrationObj.invokeOperation(operationName, headers, profiledata, getVolPhoneNoSuccessCallback, getVolPhoneNoErrorCallback1);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolPhoneNoSuccessCallback(gblVolunteersPhoneNumber) {
    // alert("inside success"+JSON.stringify(gblVolunteersPhoneNumber));
    // Check the opstatus for 0 meaning it worked
    if (gblVolunteersPhoneNumber !== null && gblVolunteersPhoneNumber.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblVolunteersPhoneNumber.volunteersList[0].VolunteersDTO !== null) {
            // alert("2");
            // Making sure we have at least 1 article returned
            if (gblVolunteersPhoneNumber.volunteersList.length > 0) {
                // Now we know we have results so we'll print them out to check
                //alert ("########## Response received from service call: "+JSON.stringify(gblVolunteersPhoneNumber.volunteersList));
                gblVolPhoneNumResponse = gblVolunteersPhoneNumber;
                setSegVolPhoneNum(gblVolPhoneNumResponse);
                // var gblVolPhoneNumResponse=JSON.stringify(notificationList);
                //         
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + volunteersList.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getVolPhoneNoErrorCallback1(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Failed  ");
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

function setSegVolPhoneNum(gblVolPhoneNumResponse) {
    try {
        if (gblVolPhoneNumResponse != "undefined" && gblVolPhoneNumResponse != undefined) {
            //alert("InSide"+JSON.stringify(gblVolPhoneNumResponse));
            if (gblVolPhoneNumResponse["volunteersList"].length > 0) {
                //alert(JSON.stringify(gblVolPhoneNumResponse));
                var id = kony.store.getItem("selReqId");
                for (var i = 0; i < gblVolPhoneNumResponse["volunteersList"].length; i++) {
                    if (id == (gblVolPhoneNumResponse["volunteersList"][0]["VolunteersDTO"][0].volunteerId)) {
                        //      var cmpnyName=gblVolPhoneNumResponse["volunteersList"][0]["VolunteersDTO"][0].companyName ;
                        //                   
                        var volContactFromBusiness = gblVolPhoneNumResponse["volunteersList"][0]["VolunteersDTO"][0].contactNumber
                        kony.store.setItem("volContactFromBusiness", volContactFromBusiness);
                        // alert("contact Number:"+volContactFromBusiness); 
                    }
                }
                //         searchResultProfile.show();
                //         searchResultProfile.volunteerProfileContainer.isVisible=true;
                //         searchResultProfile.volunteerRequestContainer.isVisible=false;
                kony.application.dismissLoadingScreen();
                sendSMSToVolFromBusiness();
            }
        }
    } catch (e) {
        //alert("e is "+e);
    }
}
// function getVolContactNumFromSearchProfile()
// {
//   try
//     {
// //   var getVolContactFromSearchProfilePage=searchPage.searchPageDashboardFlex.DataFlexScrollContainer.volunteerdataSegment.selectedRowItems;
// //       alert("getVolContactFromSearchProfilePage"+JSON.stringify(getVolContactFromSearchProfilePage));
//   //var callVolContact1=getVolContactFromSearchProfilePage[0].contactNumber;
//   //alert(getVolContactFromSearchProfilePage);
// var callVolContact1=  kony.store.getItem("volContactFromBusiness");
//  // sendSMSToVolFromBusiness();
//     }catch(e)
//       {
//         alert("ee"+JSON.stringify(e))
//       }
// }
function sendSMSToVolFromBusiness() {
    try {
        var volContactFromSearchProfile = kony.store.getItem("volContactFromBusiness");
        var msgToVolunteer = "";
        kony.phone.sendSMS(volContactFromSearchProfile, msgToVolunteer);
    } catch (err) {
        alert("error in sending sms:" + err);
    }
}