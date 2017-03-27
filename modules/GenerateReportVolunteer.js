
mobileFabricConfigurationForGererateReportVolunteert= 
                {
                                appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
                                
                            
                                
                                integrationServices: 
                                [
                                                {
                                                                service:["BusinessDeclineRequest"],
                                                                operations:["setBusinessDeclineRequest"]
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
function generateReportVolunteerService (){
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
      if (!mobileFabricConfigurationForGererateReportVolunteert.isKonySDKObjectInitialized)
      {//alert("1");
           initializeMobileFabricForGererateReportVolunteert();
            
      }
      else if (mobileFabricConfigurationForGererateReportVolunteert.isKonySDKObjectInitialized)
      {//alert("setGererateReportVolunteert");
          setGererateReportVolunteert();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForGererateReportVolunteert ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForGererateReportVolunteert.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForGererateReportVolunteert.konysdkObject.init(mobileFabricConfigurationForGererateReportVolunteert.appKey,mobileFabricConfigurationForGererateReportVolunteert.appSecret,mobileFabricConfigurationForGererateReportVolunteert.serviceURL,initializeMobileFabricForGererateReportVolunteertSuccess,initializeMobileFabricForGererateReportVolunteertFailure);  
      // alert(getNotification());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForGererateReportVolunteertSuccess(response)
{
              //  kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
              // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForGererateReportVolunteert.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     setGererateReportVolunteert();                
  kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForGererateReportVolunteertFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
           //     alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
           //     alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
                //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfigurationForGererateReportVolunteert.authClient = mobileFabricConfigurationForGererateReportVolunteert.konysdkObject.getIdentityService(mobileFabricConfigurationForGererateReportVolunteert.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForGererateReportVolunteert.identityServices[0].username, "password": mobileFabricConfigurationForGererateReportVolunteert.identityServices[0].password};
    mobileFabricConfigurationForGererateReportVolunteert.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForGererateReportVolunteert.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                setGererateReportVolunteert();
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

function setGererateReportVolunteert()
{
  
              //  alert("inside DeclineRequest");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForGererateReportVolunteert.integrationObj = mobileFabricConfigurationForGererateReportVolunteert.konysdkObject.getIntegrationService(mobileFabricConfigurationForGererateReportVolunteert.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForGererateReportVolunteert.integrationServices[0].operations[0];
                                var headers= {};

      
    //  alert("operation name"+operationName);
                  var dataGenerateReport={};
                  dataGenerateReport["emailAddress"]=ReportingPage.ReportingData.ReportingdataFlex.ReceipientsTxtArea.text;
                  dataGenerateReport["volunteerId"] =kony.store.getItem("volunteerId");
                  dataGenerateReport["startDate"] =ReportingPage.ReportingData.ReportingdataFlex.StartDateCalendar.formattedDate;
                  dataGenerateReport["endDate"] =ReportingPage.ReportingData.ReportingdataFlex.EndDateCalendar.formattedDate;
                 
                  
                 // alert("dataGenerateReport"+JSON.stringify(dataGenerateReport));
                mobileFabricConfigurationForGererateReportVolunteert.integrationObj.invokeOperation(operationName, headers, dataGenerateReport, getGererateReportVolunteertSuccessCallback, getGererateReportVolunteertErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getGererateReportVolunteertSuccessCallback(dataGenerateReport)
{
  
  //alert("inside success"+JSON.stringify(dataGenerateReport));
  
  
    if(dataGenerateReport!="undefined"&& dataGenerateReport!=undefined)
    {
      //alert("InSide"+JSON.stringify(dataGenerateReport));
 
  
     
  }  
    }
 
  
  
 


function getGererateReportVolunteertErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    
  ReportingPage.destroy();
  mainPage.show();
    kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_INFO,
      "alertTitle": null,
      "yesLabel": "OK",
   "noLabel":"No",
      "message": "Volunteers hours report successfully sent to your email",
      "alertHandler":"null" 
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    }); 
  
  
  kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}
