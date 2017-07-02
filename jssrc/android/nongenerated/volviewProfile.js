//Hello
var gblBusIdforVolViewProfile;
mobileFabricConfigurationForVolunteerViewProfile = {
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
function volunteerViewProfilePageService() {
    // alert("inside function1");
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //kony.application.dismissLoadingScreen();
    // alert("enetred volunterr..yeyyyy");////actualy we have to cal service
    // getVolunteerViewSuccessCallback1(gblVolunteersViewProfileList);
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
    if (!mobileFabricConfigurationForVolunteerViewProfile.isKonySDKObjectInitialized) {
        initializeMobileFabricViewForVolunteerProfile11();
    } else if (mobileFabricConfigurationForVolunteerViewProfile.isKonySDKObjectInitialized) {
        getVolunteerViewProfilePage();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function initializeMobileFabricViewForVolunteerProfile11() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerViewProfile.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForVolunteerViewProfile.konysdkObject.init(mobileFabricConfigurationForVolunteerViewProfile.appKey, mobileFabricConfigurationForVolunteerViewProfile.appSecret, mobileFabricConfigurationForVolunteerViewProfile.serviceURL, mobileFabricConfigurationForVolunteerViewProfileSuccess, mobileFabricConfigurationForVolunteerViewProfileFailure);
        // alert(getNotification());
    } else
    //alert ("Network unavailable. Please check your network settings. ");
        kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForVolunteerViewProfileSuccess(response) {
    //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForVolunteerViewProfile.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getVolunteerViewProfilePage();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForVolunteerViewProfileFailure(error) {
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
function getVolunteerViewProfilePage() {
    //  alert("inside getVolunteerViewProfilePage");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForVolunteerViewProfile.integrationObj = mobileFabricConfigurationForVolunteerViewProfile.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerViewProfile.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForVolunteerViewProfile.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        // alert("operation name"+operationName);
        var profiledata = {};
        profiledata["id"] = gblBusIdforVolViewProfile;
        // alert("the id=="+JSON.stringify(profiledata));
        mobileFabricConfigurationForVolunteerViewProfile.integrationObj.invokeOperation(operationName, headers, profiledata, getVolunteerViewSuccessCallback1, getVolunteerViewErrorCallback1);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getVolunteerViewSuccessCallback1(gblVolunteersViewProfileList) {
    // alert("inside success"+JSON.stringify(gblVolunteersViewProfileList));
    // Check the opstatus for 0 meaning it worked
    if (gblVolunteersViewProfileList !== null && gblVolunteersViewProfileList.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblVolunteersViewProfileList.volunteersList[0].VolunteersDTO !== null) {
            // alert("2");
            // Making sure we have at least 1 article returned
            if (gblVolunteersViewProfileList.volunteersList.length > 0) {
                // Now we know we have results so we'll print them out to check
                //alert ("########## Response received from service call: "+JSON.stringify(gblVolunteersViewProfileList.volunteersList));
                gblVolunteerViewProfileResponse = gblVolunteersViewProfileList;
                setSegViewVolunteerProfileData(gblVolunteerViewProfileResponse);
                // var gblVolunteerViewProfileResponse=JSON.stringify(notificationList);
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

function getVolunteerViewErrorCallback1(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Failed :"+JSON.stringify(error));
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

function setSegViewVolunteerProfileData(gblVolunteerViewProfileResponse) {
    try {
        if (gblVolunteerViewProfileResponse !== "undefined" && gblVolunteerViewProfileResponse !== undefined) {
            //alert("InSide"+JSON.stringify(gblVolunteerViewProfileResponse));
            if (gblVolunteerViewProfileResponse["volunteersList"].length > 0) {
                // alert("InSide isss"+JSON.stringify(gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].volunteerId));
                var id = kony.store.getItem("selReqId");
                //        for (var i = 0; i < gblVolunteerViewProfileResponse["volunteersList"].length; i++)
                //        {
                // //           if(id==(gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].volunteerId))
                // //           {
                var cmpnyName = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].companyName;
                var aboutVolunteer = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].aboutMe;
                var volunteerfNme = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].firstName;
                var volunteerLNme = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].lastName;
                var volunteerAddress = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].address;
                var volunteerFullNme = volunteerfNme + " " + volunteerLNme;
                var volunteerPostn = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].role;
                var WorkExp = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].workDetails;
                //D007: Adding code to capitalize first character for volunteerfNme and volunteerLnme
                var fNme = volunteerfNme.charAt(0).toUpperCase() + volunteerfNme.slice(1);
                var lNme = volunteerLNme.charAt(0).toUpperCase() + volunteerLNme.slice(1);
                var volunteerFullNme = fNme + " " + lNme;
                //D007: End of code addition. Commented out line below
                //var volunteerFullNme= volunteerfNme + " " +volunteerLNme;
                var volunteerPostn = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].role;
                var WorkExp = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].workDetails;
                var volunteerLat = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].latitude;
                var singleVolImgPath = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0]["users"][0].imagePath;
                var imagepathVolSingle = "imgseglogo.png";
                if (singleVolImgPath != null && singleVolImgPath != "null") {
                    imagepathVolSingle = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + singleVolImgPath;
                }
                //  }
                //}
                //         else{
                //           alert("Its not correct");}
                //}
                var skills = "";
                //  alert("skill"+JSON.stringify(gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet));
                for (var j = 0; j < gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet.length; j++) {
                    skills = skills + "" + gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet[j].SkillsDTO.skillName;
                }
                //  alert("final skills="+skills);
                // var Skills=gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet[0].SkillsDTO.skillName ;
                //        var scheduleDays="";
                //         var scheduleTime="";
                //         for(var k=0;j<gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule.length;k++)
                //            {
                var scheduleDays = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.days;
                var schedulefromTime = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.fromTime;
                var scheduletoTime = gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.toTime;
                var scheduleTime = schedulefromTime + " " + scheduletoTime;
                //}
                //alert("final schedule="+scheduleDays);
                // alert("salma"+gblVolunteerViewProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet);
                //Mamata
                // searchResultProfile.show();
                //searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfilePic.volunteerProfilePicImage.src=imagepathVolSingle;
                MyActivityProfiles.volProfileContainer.volProfileDetailsHeader.volProfilePic.volrProfilePicImage.src = imagepathVolSingle;
                //         searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfilePic.volunteerProfilePicImage.src="";
                //searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileName.text=volunteerFullNme;
                MyActivityProfiles.volProfileContainer.volProfileDetailsHeader.volProfileDetailsContainer.volunteerProfileName.text = volunteerFullNme;
                // searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileBusinessUnitRole.text=volunteerPostn;
                MyActivityProfiles.volProfileContainer.volProfileDetailsHeader.volProfileDetailsContainer.volProfileBusinessUnitRole.text = volunteerPostn;
                // searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileCompanyName.text=cmpnyName;
                MyActivityProfiles.volProfileContainer.volProfileDetailsHeader.volProfileDetailsContainer.volProfileCompanyName.text = cmpnyName;
                //searchResultProfile.volunteerProfileContainer.volunteerProfileLocationContainer.volunteerProfileLocationAddressParent.volunteerProfileLocationAddressStateText.text=volunteerAddress;
                MyActivityProfiles.volProfileContainer.volProfileLocationContainer.volProfileLocationAddressParent.volProfileLocationAddressStateText.text = volunteerAddress;
                // searchResultProfile.volunteerProfileContainer.volunteerProfileAboutContainer.volunteerProfileAboutHeader.volunteerProfileAboutTextParent.volunteerProfileAboutText.text=volunteerFullNme;
                MyActivityProfiles.volProfileContainer.volProfileAboutContainer.volProfileAboutHeader.volProfileAboutTextParent.volProfileAboutText.text = volunteerFullNme;
                if (aboutVolunteer === null || aboutVolunteer === "null") aboutVolunteer = "";
                //searchResultProfile.volunteerProfileContainer.volunteerProfileAboutContainer.volunteerProfileAboutBody.volunteerProfileAboutBodyText.text=aboutVolunteer;
                MyActivityProfiles.volProfileContainer.volProfileAboutContainer.volProfileAboutBodyl.volProfileAboutBodyText.text = aboutVolunteer;
                // searchResultProfile.volunteerProfileContainer.volunteerProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBody.volunteerProfileAvailabilityScheduleParent.volunteerProfileAvailabilityScheduleDays.text=scheduleDays;
                MyActivityProfiles.volProfileContainer.volProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBodyy.volunteerProfileAvailabilityScheduleParentt.volunteerProfileAvailabilityScheduleDayss.text = scheduleDays;
                searchResultProfile.volunteerProfileContainer.volunteerProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBody.volunteerProfileAvailabilityScheduleParent.volunteerProfileAvailabilityScheduleTime.text = scheduleTime;
                MyActivityProfiles.volProfileContainer.volProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBodyy.volunteerProfileAvailabilityScheduleParentt.volunteerProfileAvailabilityScheduleTimeee.text = scheduleTime;
                // searchResultProfile.volunteerProfileContainer.volunteerProfileSkillsContainer.volunteerProfileSkillsBody.volunteerProfileSkillsList.text=skills;
                MyActivityProfiles.volProfileContainer.volProfileSkillsContainer.volProfileSkillsBody.volProfileSkillsList.text = skills;
                // searchResultProfile.volunteerProfileContainer.volunteerProfileWorkExperienceContainer.volunteerProfileWorkExperienceRT.text=" ";
                MyActivityProfiles.volProfileContainer.volProfileWorkExperienceContainer.volunteerProfileWorkExperience.text = " ";
                kony.application.dismissLoadingScreen();
                //searchResultProfile.show();
                MyActivityProfiles.show();
                MyActivityProfiles.businessProfileContainerr.isVisible = false;
                //searchResultProfile.businessProfileContainer.isVisible=false;
                // searchResultProfile.volunteerProfileContainer.volunteerProfileContactActions.volunteerProfileEmail.isVisible=false;
                MyActivityProfiles.volProfileContainer.isVisible = true;
                // searchResultProfile.volunteerProfileContainer.isVisible=true;
            }
        }
    } catch (e) {
        kony.application.dismissLoadingScreen();
        //alert("e is "+e);
    }
}

function saveBusIdForVolViewProfileAcceptedSeg() {
    try {
        if (kony.store.getItem("isBusOrVol") == "business") {
            var volIdVal = mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
            gblBusIdforVolViewProfile = volIdVal[0].volunteerId;
            // alert("value :"+JSON.stringify(volIdVal));
            //alert("volIdAcceptSeg:"+gblBusIdforVolViewProfile);
            //gblBusIdforVolViewProfile=val8.widgetInfo.data[0].lblRequestIdSent;
        }
    } catch (error) {
        //alert("error is:"+e);
    }
}

function saveBusIdForVolViewProfileSentSeg() {
    try {
        if (kony.store.getItem("isBusOrVol") == "business") {
            var volIdVal = mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
            gblBusIdforVolViewProfile = volIdVal[0].volunteerId;
            // alert("value :"+JSON.stringify(volIdVal));
            //alert("volIdsentSeg:"+gblBusIdforVolViewProfile);
            //gblBusIdforVolViewProfile=val8.widgetInfo.data[0].lblRequestIdSent;
        }
    } catch (error) {
        // alert("error is:"+e);
    }
}

function saveVolForVolViewProfileOpenTasks() {
    try {
        if (kony.store.getItem("isBusOrVol") == "business") {
            var volIdVal = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
            gblBusIdforVolViewProfile = volIdVal[0].volunteerId;
            // alert("value :"+JSON.stringify(volIdVal));
            //alert("volIdopenTask:"+gblBusIdforVolViewProfile);
            //gblBusIdforVolViewProfile=val8.widgetInfo.data[0].lblRequestIdSent;
        }
    } catch (error) {
        kony.application.dismissLoadingScreen();
        alert("error is:" + e);
    }
}

function saveVolForVolViewProfileCloseTask() {
    try {
        if (kony.store.getItem("isBusOrVol") == "business") {
            var volIdVal = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
            gblBusIdforVolViewProfile = volIdVal[0].volunteerId;
            // alert("value :"+JSON.stringify(volIdVal));
            //alert("volIdopenTask:"+gblBusIdforVolViewProfile);
            //gblBusIdforVolViewProfile=val8.widgetInfo.data[0].lblRequestIdSent;
        }
    } catch (error) {
        // alert("error is:"+e);
    }
}