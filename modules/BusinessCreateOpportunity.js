var gblReqForTaskDetails;
mobileFabricConfigurationForCreateOpportunity= 
                {
                                appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
                                
                            
                                
                                integrationServices: 
                                [
                                                {
                                                                service:"CreateOpportunities",
                                                                operations:["createOpportunities"]
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
function createOpportunity (){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
//    gblReqForTaskDetails=valBusRequestID.widgetInfo.data[0].lblRequestId;
//   alert("the selected"+JSON.stringify(gblReqForTaskDetails));
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
      if (!mobileFabricConfigurationForCreateOpportunity.isKonySDKObjectInitialized)
      {
           initializeMobileFabricForCreateOpportunity();
            
      }
      else if (mobileFabricConfigurationForCreateOpportunity.isKonySDKObjectInitialized)
      {
          setCreateOpportunity();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForCreateOpportunity ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForCreateOpportunity.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForCreateOpportunity.konysdkObject.init(mobileFabricConfigurationForCreateOpportunity.appKey,mobileFabricConfigurationForCreateOpportunity.appSecret,mobileFabricConfigurationForCreateOpportunity.serviceURL,initializeMobileFabricForCreateOpportunitySuccess,initializeMobileFabricForCreateOpportunityFailure);  
      // alert(getNotification());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForCreateOpportunitySuccess(response)
{
               // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
              //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForCreateOpportunity.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     setCreateOpportunity();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForCreateOpportunityFailure(error)
{
               // kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
              //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
                alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
                //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfigurationForCreateOpportunity.authClient = mobileFabricConfigurationForCreateOpportunity.konysdkObject.getIdentityService(mobileFabricConfigurationForCreateOpportunity.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForCreateOpportunity.identityServices[0].username, "password": mobileFabricConfigurationForCreateOpportunity.identityServices[0].password};
    mobileFabricConfigurationForCreateOpportunity.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForCreateOpportunity.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                setCreateOpportunity();
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

function setCreateOpportunity()
{
  
                //alert("inside TaskDetails");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForCreateOpportunity.integrationObj = mobileFabricConfigurationForCreateOpportunity.konysdkObject.getIntegrationService(mobileFabricConfigurationForCreateOpportunity.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForCreateOpportunity.integrationServices[0].operations[0];
                                var headers= {};

     
     // alert("operation name"+operationName);
                  var opprDetails={};
                 opprDetails["businessId"]=kony.store.getItem("businessId");
                 opprDetails["title"]=mainPage.CreateOpportunityContainer.BodyContainer.opportunityTitleInputContainer.text;
                  //hoursRequired               
                  var rawDetails=mainPage.CreateOpportunityContainer.BodyContainer.opportunityDetailsInputContainer.text;
                  var modifiedDetails=rawDetails.replace(/(\r\n|\n|\r)/gm,"");
                  opprDetails["details"]=modifiedDetails;
                  opprDetails["hoursRequired"]=mainPage.CreateOpportunityContainer.BodyContainer.hoursInput.text;
                  opprDetails["taskSkills"]=mainPage.CreateOpportunityContainer.BodyContainer.skillsInput.text;
                  
                  var str=mainPage.CreateOpportunityContainer.BodyContainer.opportunityStartDateCalendarInput.formattedDate;
                  var arr=str.split("/");
                  var actStartDate1=arr[2]+"-"+arr[1]+"-"+arr[0];
                 
 				  var str1=mainPage.CreateOpportunityContainer.BodyContainer.opportunityEndateCalendarInput.formattedDate;
                  var arr1=str1.split("/");
                  var actEndDate1=arr1[2]+"-"+arr1[1]+"-"+arr1[0];
                  
                  opprDetails["startDate"]=actStartDate1;
                  opprDetails["endDate"]=actEndDate1;
                  
                //alert(JSON.stringify(opprDetails));
                mobileFabricConfigurationForCreateOpportunity.integrationObj.invokeOperation(operationName, headers, opprDetails, getCreateOpportunitySuccessCallback, getCreateOpportunityErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getCreateOpportunitySuccessCallback(opprDetails)
{
  
  //alert("inside success"+JSON.stringify(opprDetails));
  
  
    if(opprDetails!="undefined"&& opprDetails!=undefined)
    {
      //alert("InSide"+JSON.stringify(opprDetails));
 
  
     
  }  
    }
 
   
 
  
 


function getCreateOpportunityErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                
             //   alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
                kony.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "alertTitle": null,
                    "yesLabel": "OK",
                 "noLabel":"No",
                    "message": "Brief was successfully created",
                    "alertHandler":"null" 
                  }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                  }); 
                mainPage.CreateOpportunityContainer.isVisible=false;
               
                mainPage.CreateOpportunityContainer.BodyContainer.opportunityTitleInputContainer.text="";
                mainPage.CreateOpportunityContainer.BodyContainer.opportunityDetailsInputContainer.text="";
 		 		mainPage.CreateOpportunityContainer.BodyContainer.hoursInput.text="";
  				mainPage.CreateOpportunityContainer.BodyContainer.skillsInput.text="";
                BusinessOpenCloseTaskService ();  
                kony.application.dismissLoadingScreen();
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}




  
 

