//Type your code here
//text.BusinessVolunteerProfile[0]["BusinessVolunteerProfileDTO"][0]["scheduleDTO"][0].FromTime)

mobileFabricConfigurationForBusinessVolunteerProfile={
appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
  //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
//appSecret:"c600a59925b36419de1546056cd21557", 
//serviceURL:"https://100000507.auth.konycloud.com/appconfig",
  integrationServices: 
[
{
service:"Volunteers",
operations:["getVolunteer"]
}
],
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
isKonySDKObjectInitialized:false,
  isMFAuthenticated: false
};




// Function to invoke getFoxNews Service call
function BusinessVolunteerProfileService(){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
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
      if (!mobileFabricConfigurationForBusinessVolunteerProfile.isKonySDKObjectInitialized)
      {
initializeMobileFabricForBusinessVolunteerProfile();
            
      }
      else if (mobileFabricConfigurationForBusinessVolunteerProfile.isKonySDKObjectInitialized)
      {
          getBusinessVolunteerProfile();
      }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}


function initializeMobileFabricForBusinessVolunteerProfile ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForBusinessVolunteerProfile.konysdkObject = new kony.sdk();
mobileFabricConfigurationForBusinessVolunteerProfile.konysdkObject.init(mobileFabricConfigurationForBusinessVolunteerProfile.appKey,mobileFabricConfigurationForBusinessVolunteerProfile.appSecret,mobileFabricConfigurationForBusinessVolunteerProfile.serviceURL,mobileFabricConfigurationForBusinessVolunteerProfileSuccess,mobileFabricConfigurationForBusinessVolunteerProfileFailure);  
      // alert(getBusinessVolunteerProfile());
    }
else
alert ("Network unavailable. Please check your network settings. ");
kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}


function mobileFabricConfigurationForBusinessVolunteerProfileSuccess(response)
{
kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
//alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
mobileFabricConfigurationForBusinessVolunteerProfile.isKonySDKObjectInitialized=true;
kony.application.dismissLoadingScreen();
//authenticateMFUsingUserStore();
     getBusinessVolunteerProfile();
kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}


function mobileFabricConfigurationForBusinessVolunteerProfileFailure(error)
{
kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
//alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
kony.application.dismissLoadingScreen();
//alert (" Unable to initialize the application. Please try again. ");
kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}


function authenticateMFUsingUserStore(){
//alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
  //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
var authParams = {"userid": mobileFabricConfiguration.identityServices[0].username, "password": mobileFabricConfiguration.identityServices[0].password};
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);


    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}


function loginMFSuccess(response){
  // alert (" ********** Entering into loginMFSuccess ********** ");
  // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
mobileFabricConfigurationForBusinessVolunteerProfile.isMFAuthenticated = true;
kony.application.dismissLoadingScreen();
getBusinessVolunteerProfile();
kony.print (" ********** Exiting out of loginMFSuccess ********** ");
}


function loginMFFailure(error)
{
kony.print (" ********** Entering into loginMFFailure ********** ");
kony.print (" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
kony.application.dismissLoadingScreen();
alert (" Unable to authenticate to Server, Login failed. Please try again. ");
kony.print (" ********** Exiting out of loginMFFailure ********** ");
}


function getBusinessVolunteerProfile()
{
  try{
  
 // alert("inside getBusinessVolunteerProfile");
//var selectedKey = frmFoxNews.lstNewsType.selectedKey;
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForBusinessVolunteerProfile.integrationObj = mobileFabricConfigurationForBusinessVolunteerProfile.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessVolunteerProfile.integrationServices[0].service);
      var operationName = mobileFabricConfigurationForBusinessVolunteerProfile.integrationServices[0].operations[0];
var headers= {};
// if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
// data= {"newsType": selectedKey};
//         }else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
     // alert("operation name"+operationName);
       var data="1";
    mobileFabricConfigurationForBusinessVolunteerProfile.integrationObj.invokeOperation(operationName, headers, data, getBusinessVolunteerProfileSuccessCallback, getBusinessVolunteerProfileErrorCallback);
}
else
alert ("Network unavailable. Please check your network settings. ");  
}catch(e)
  {
   // alert("error is "+JSON.stringify(e));
  }
}


function getBusinessVolunteerProfileSuccessCallback (gblBusinessVolunteerProfile)
{
  
 // alert("inside success"+JSON.stringify(gblBusinessVolunteerProfile));
  // Check the opstatus for 0 meaning it worked
  if (gblBusinessVolunteerProfile !== null && gblBusinessVolunteerProfile.opstatus === 0){
    
   // alert("1");
    // Checking to make sure we DO have results
    if (gblBusinessVolunteerProfile.volunteersList[0].VolunteersDTO !== null){
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblBusinessVolunteerProfile.volunteersList.length > 0){
        // Now we know we have results so we'll print them out to check
    //    alert ("########## Response received from service call: "+JSON.stringify(gblBusinessVolunteerProfile.volunteersList));
        gblBusinessVolunteerProfileResponse=gblBusinessVolunteerProfile;
        setBusinessVolunteerProfileData(gblBusinessVolunteerProfileResponse);
        
        
      }
    }
  }
  else{
kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + BusinessVolunteerProfile.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}


function getBusinessVolunteerProfileErrorCallback (error)
{
kony.print (" ********** Entering into getBusinessVolunteerProfileSuccessCallback ********** ");
kony.print (" ********** Failure in getBusinessVolunteerProfileSuccessCallback: " + JSON.stringify(error) + " ********** ");
kony.application.dismissLoadingScreen();
//alert (" Failed to fetch. Please try again. ");
kony.print (" ********** Exiting out of getBusinessVolunteerProfileSuccessCallback ********** ");
}

function setBusinessVolunteerProfileData(gblBusinessVolunteerProfileResponse)
{
  try{
    
   // alert("1");
  if(gblBusinessVolunteerProfileResponse!="undefined"&& gblBusinessVolunteerProfileResponse!=undefined)
    {
       var len=gblBusinessVolunteerProfileResponse["volunteersList"].length ;
  
  if (gblBusinessVolunteerProfileResponse["volunteersList"].length > 0) {
    //alert("inside if");
            
      for (var i = 0; i < len; i++) 
      {          
           var cmpnyName=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].companyName ;
           var aboutVolunteer=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].aboutMe ;
           var volunteerfNme=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].firstName ;
           var volunteerLNme=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].lastName ;
           var volunteerAddress=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].address ;
        //D007: Adding code to capitalize first character for volunteerfNme and volunteerLnme
        	var fNme = volunteerfNme.charAt(0).toUpperCase() + volunteerfNme.slice(1);
        	var lNme = volunteerLNme.charAt(0).toUpperCase() + volunteerLNme.slice(1);
        	var volunteerFullNme= fNme + " " + lNme;
        //D007: End of code addition. Commented out line below
           //var volunteerFullNme= volunteerfNme + " " +volunteerLNme;
           kony.store.setItem(volunteerName, volunteerFullNme);
           var volunteerPostn=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].role ;   
           var Skills=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet[0].SkillsDTO.skillName ;
           var scheduleDays=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.days ;
           var schedulefromTime=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.fromTime ;
           var scheduletoTime=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.toTime ;
           var scheduleTime= schedulefromTime + " " +scheduletoTime;
           var WorkExp=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].workDetails ; 
           var volunteerLat=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].latitude ;
           var volunteerLong=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].longitude ;

  
    }
    //alert("11");
        searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfilePic.volunteerProfilePicImage.src="";
        searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileName=volunteerFullNme;
        searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileBusinessUnitRole=volunteerPostn;
        searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileCompanyName=cmpnyName;
        searchResultProfile.volunteerProfileContainer.volunteerProfileLocationContainer.volunteerProfileLocationAddressParent.volunteerProfileLocationAddressStateText=volunteerAddress;
        searchResultProfile.volunteerProfileContainer.volunteerProfileAboutContainer.volunteerProfileAboutHeader.volunteerProfileAboutTextParent.volunteerProfileAboutText=volunteerFullNme;
        searchResultProfile.volunteerProfileContainer.volunteerProfileAboutContainer.volunteerProfileAboutBody.volunteerProfileAboutBodyText=aboutVolunteer;
        searchResultProfile.volunteerProfileContainer.volunteerProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBody.volunteerProfileAvailabilityScheduleParent.volunteerProfileAvailabilityScheduleDays=scheduleDays;
        searchResultProfile.volunteerProfileContainer.volunteerProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBody.volunteerProfileAvailabilityScheduleParent.volunteerProfileAvailabilityScheduleTime=scheduleTime;
        searchResultProfile.volunteerProfileContainer.volunteerProfileSkillsContainer.volunteerProfileSkillsBody.volunteerProfileSkillsList=Skills;
        searchResultProfile.volunteerProfileContainer.volunteerProfileWorkExperienceContainer.volunteerProfileWorkExperienceRT=WorkExp;
    kony.application.dismissLoadingScreen();
    myProfile.show();
               //alert("111");   
                }
    
    
   
  }
  } catch(Exception)
 {
//   alert("Exception is"+JSON.stringify(Exception));
 }
  
    }
 
