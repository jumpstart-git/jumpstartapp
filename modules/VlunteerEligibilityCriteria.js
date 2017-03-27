//Type your code here
//text.VolunteerEligibiltyCriteria[0]["VolunteerEligibiltyCriteriaDTO"][0]["scheduleDTO"][0].FromTime)

mobileFabricConfigurationForVolunteerEligibiltyCriteria={
appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
  //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
//appSecret:"c600a59925b36419de1546056cd21557", 
//serviceURL:"https://100000507.auth.konycloud.com/appconfig",
  integrationServices: 
[
{
service:"IndigenousBusineeProfile",
operations:["getIndigenousBusineeProfile"]
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
function VolunteerEligibiltyCriteriaService (){
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
      if (!mobileFabricConfigurationForVolunteerEligibiltyCriteria.isKonySDKObjectInitialized)
      {
          initializeMobileFabricForVolunteerEligibiltyCriteria();
            
      }
      else if (mobileFabricConfigurationForVolunteerEligibiltyCriteria.isKonySDKObjectInitialized)
      {
          getVolunteerEligibiltyCriteria();
      }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}


function initializeMobileFabricForVolunteerEligibiltyCriteria ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForVolunteerEligibiltyCriteria.konysdkObject = new kony.sdk();
mobileFabricConfigurationForVolunteerEligibiltyCriteria.konysdkObject.init(mobileFabricConfigurationForVolunteerEligibiltyCriteria.appKey,mobileFabricConfigurationForVolunteerEligibiltyCriteria.appSecret,mobileFabricConfigurationForVolunteerEligibiltyCriteria.serviceURL,mobileFabricConfigurationForVolunteerEligibiltyCriteriaSuccess,mobileFabricConfigurationForVolunteerEligibiltyCriteriaFailure);  
      // alert(getVolunteerEligibiltyCriteria());
    }
else
alert ("Network unavailable. Please check your network settings. ");
kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}


function mobileFabricConfigurationForVolunteerEligibiltyCriteriaSuccess(response)
{
kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
//alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
mobileFabricConfigurationForVolunteerEligibiltyCriteria.isKonySDKObjectInitialized=true;
kony.application.dismissLoadingScreen();
//authenticateMFUsingUserStore();
     getVolunteerEligibiltyCriteria();
kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}


function mobileFabricConfigurationForVolunteerEligibiltyCriteriaFailure(error)
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
mobileFabricConfigurationForVolunteerEligibiltyCriteria.isMFAuthenticated = true;
kony.application.dismissLoadingScreen();
getVolunteerEligibiltyCriteria();
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


function getVolunteerEligibiltyCriteria()
{
  
  //alert("inside getVolunteerEligibiltyCriteria");
//var selectedKey = frmFoxNews.lstNewsType.selectedKey;
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForVolunteerEligibiltyCriteria.integrationObj = mobileFabricConfigurationForVolunteerEligibiltyCriteria.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerEligibiltyCriteria.integrationServices[0].service);
      var operationName = mobileFabricConfigurationForVolunteerEligibiltyCriteria.integrationServices[0].operations[0];
var headers= {};
// if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
// data= {"newsType": selectedKey};
//         }else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
     // alert("operation name"+operationName);
       var data="1";
    mobileFabricConfigurationForVolunteerEligibiltyCriteria.integrationObj.invokeOperation(operationName, headers, data, getVolunteerEligibiltyCriterianSuccessCallback, getVolunteerEligibiltyCriteriaErrorCallback);
}
else
alert ("Network unavailable. Please check your network settings. ");  
}


function getVolunteerEligibiltyCriteriaSuccessCallback (gblVolunteerEligibiltyCriteria)
{
  
  //alert("inside success"+JSON.stringify(gblVolunteerEligibiltyCriteria));
  // Check the opstatus for 0 meaning it worked
  if (gblVolunteerEligibiltyCriteria !== null && gblVolunteerEligibiltyCriteria.opstatus === 0){
    
   // alert("1");
    // Checking to make sure we DO have results
    if (gblVolunteerEligibiltyCriteria.VolunteerEligibiltyCriteria[0].VolunteerEligibiltyCriteriaDTO  !== null){
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblVolunteerEligibiltyCriteria.VolunteerEligibiltyCriteria.length > 0){
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblVolunteerEligibiltyCriteria.VolunteerEligibiltyCriteria));
        gblVolunteerEligibiltyCriteriaResponse=gblVolunteerEligibiltyCriteria;
        settVolunteerEligibiltyCriteriaData(gblVolunteerEligibiltyCriteriaResponse);
        
        
      }
    }
  }
  else{
kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + VolunteerEligibiltyCriteria.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}


function getVolunteerEligibiltyCriteriaErrorCallback (error)
{
kony.print (" ********** Entering into getVolunteerEligibiltyCriteriaSuccessCallback ********** ");
kony.print (" ********** Failure in getVolunteerEligibiltyCriteriaSuccessCallback: " + JSON.stringify(error) + " ********** ");
kony.application.dismissLoadingScreen();
//alert (" Failed to fetch the news. Please try again. ");
kony.print (" ********** Exiting out of getVolunteerEligibiltyCriteriaSuccessCallback ********** ");
}

function setVolunteerEligibiltyCriteriaData(gblVolunteerEligibiltyCriteriaResponse)
{
  
  if(gblVolunteerEligibiltyCriteriaResponse!="undefined"&& gblVolunteerEligibiltyCriteriaResponse!=undefined)
    {
       
      
      mainPage.acceptTaskModalContainer.acceptTaskModalBody.acceptTaskModalEligibilitySegment.widgetDataMap={
            "lblEligibilityCriteria": "contactImage"
           
        };
      if (gblVolunteerEligibiltyCriteriaResponse["VolunteerEligibiltyCriteria"].length > 0) {
                var tempData = [];
                var len = gblVolunteerEligibiltyCriteriaResponse["VolunteerEligibiltyCriteria"].length;
                
                for (var i = 0; i < len; i++) {
                  
                  var eligibilityCriteria=gblVolunteerEligibiltyCriteriaResponse["VolunteerEligibiltyCriteria"][i]["MessageDTO"].eligibilityCriteria ;
                  var testData = {
                 lblEligibilityCriteria: eligibilityCriteria
                  };
			tempData.push(testData);
                  
                }
    
   mainPage.acceptTaskModalContainer.acceptTaskModalBody.acceptTaskModalEligibilitySegment.setData(tempData);
   
  }
  
 
    
    
   
  }
  
    }
 
