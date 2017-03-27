
mobileFabricConfigurationForVolunteerNumberCall = 
                {
                               appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
                                //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
                                //appSecret:"c600a59925b36419de1546056cd21557", 
                                //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
                                
                                integrationServices: 
                                [
                                                {
                                                                service:["VolunteerProfile"],
                                                                operations:["getVolunteerProfile"]
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
function volunteerPhoneNumberForCall(){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
// alert("enetred volunterr..yeyyyy");////actualy we have to cal service
// getVolPhoneNoForCallSuccessCallback(gblVolunteersPhoneNumberCall);
  
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
      if (!mobileFabricConfigurationForVolunteerNumberCall.isKonySDKObjectInitialized)
      {
          initializeMobileFabricForVolunteerPhoneNumberCall();
            
      }
      else if (mobileFabricConfigurationForVolunteerNumberCall.isKonySDKObjectInitialized)
      {
          getVolunteerPhoneNumberCall();
      }
  


                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForVolunteerPhoneNumberCall()
{
             //  alert (" ********** Entering into initializeMobileFabric ********** ");
  
  
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolunteerNumberCall.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForVolunteerNumberCall.konysdkObject.init(mobileFabricConfigurationForVolunteerNumberCall.appKey,mobileFabricConfigurationForVolunteerNumberCall.appSecret,mobileFabricConfigurationForVolunteerNumberCall.serviceURL,mobileFabricConfigurationForVolunteerNumberCallSuccess,mobileFabricConfigurationForVolunteerNumberCallFailure);  
      // alert(getNotification());
    }
                else
                                //alert ("Network unavailable. Please check your network settings. ");
    
  kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForVolunteerNumberCallSuccess(response)
{
                //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
             // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
            
  mobileFabricConfigurationForVolunteerNumberCall.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getVolunteerPhoneNumberCall();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
              
}

function mobileFabricConfigurationForVolunteerNumberCallFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
              //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
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

function getVolunteerPhoneNumberCall()
{
  
            // alert("inside getVolunteerPhoneNumberCall");
  
  
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                     //mamata           
                  mobileFabricConfigurationForVolunteerNumberCall.integrationObj = mobileFabricConfigurationForVolunteerNumberCall.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerNumberCall.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForVolunteerNumberCall.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
  // alert("operation name"+operationName);
       var profiledataCall={};
           
                  
                  profiledataCall["id"]=kony.store.getItem("selReqId");
                  //alert("the id=="+JSON.stringify(profiledataCall));
                mobileFabricConfigurationForVolunteerNumberCall.integrationObj.invokeOperation(operationName, headers, profiledataCall, getVolPhoneNoForCallSuccessCallback, getVolPhoneNoForCallErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getVolPhoneNoForCallSuccessCallback(gblVolunteersPhoneNumberCall)
{
  
//alert("inside success"+JSON.stringify(gblVolunteersPhoneNumberCall));
  
 
  // Check the opstatus for 0 meaning it worked
  if (gblVolunteersPhoneNumberCall !== null && gblVolunteersPhoneNumberCall.opstatus === 0){
    
   // alert("1");
    // Checking to make sure we DO have results
    if (gblVolunteersPhoneNumberCall.volunteersList[0].VolunteersDTO !== null){
      // alert("2");
      // Making sure we have at least 1 article returned
      if (gblVolunteersPhoneNumberCall.volunteersList.length > 0){
        // Now we know we have results so we'll print them out to check
        //alert ("########## Response received from service call: "+JSON.stringify(gblVolunteersPhoneNumberCall.volunteersList));
        gblVolPhoneNumResponseCall=gblVolunteersPhoneNumberCall;
        setSegVolPhoneNumCall(gblVolPhoneNumResponseCall);
        // var gblVolPhoneNumResponseCall=JSON.stringify(notificationList);

//         
      }
    }
  }
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + volunteersList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }

}

function getVolPhoneNoForCallErrorCallback(error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert (" Failed  ");
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}




function setSegVolPhoneNumCall(gblVolPhoneNumResponseCall)
{
  try{
    
  if(gblVolPhoneNumResponseCall!="undefined"&& gblVolPhoneNumResponseCall!=undefined)
    {
      //alert("InSide"+JSON.stringify(gblVolPhoneNumResponseCall));
       
      if (gblVolPhoneNumResponseCall["volunteersList"].length > 0) {

     
      //alert(JSON.stringify(gblVolPhoneNumResponseCall));
      var id=kony.store.getItem("selReqId");
    for (var i = 0; i < gblVolPhoneNumResponseCall["volunteersList"].length; i++) 
    {
         if(id==(gblVolPhoneNumResponseCall["volunteersList"][0]["VolunteersDTO"][0].volunteerId))
      {
          
//      var cmpnyName=gblVolPhoneNumResponseCall["volunteersList"][0]["VolunteersDTO"][0].companyName ;
//                   
        var volContactFromBusinessForCall=gblVolPhoneNumResponseCall["volunteersList"][0]["VolunteersDTO"][0].contactNumber;
       kony.store.setItem("volContactFromBusinessForCall", volContactFromBusinessForCall);
      // alert("contact Number:"+volContactFromBusinessForCall); 
        }
         
         
       }
        
//alert("Its coming inside call");
        kony.application.dismissLoadingScreen();
        callVolFromStartEngageProfile();
             
      }
    }
  }catch(e)
    {
      
      //alert("e is "+e);
    }
}


   function callVolFromStartEngageProfile()
{
  try{
    
  var num1=kony.store.getItem("volContactFromBusinessForCall");
    if(num1=="null"||num1===null||num1==="")
    {
      num1="";
   }
  
    kony.phone.dial(num1);
  }
  catch(e)
  {
   // alert(e);
  }
}
