
mobileFabricConfigurationForBusinessProfileUpdate= 
                {
                                appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
                                
                            
                                
                                integrationServices: 
                                [
                                                {
                                                                service:"UpdateBusinessProfile",
                                                                operations:["updateBusinessProfileById"]
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
function BusinessProfileUpdate(){
  
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
      if (!mobileFabricConfigurationForBusinessProfileUpdate.isKonySDKObjectInitialized)
      {
           initializeMobileFabricForBusinessProfileUpdate();
            
      }
      else if (mobileFabricConfigurationForBusinessProfileUpdate.isKonySDKObjectInitialized)
      {
          setBusinessProfileUpdate();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForBusinessProfileUpdate ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessProfileUpdate.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessProfileUpdate.konysdkObject.init(mobileFabricConfigurationForBusinessProfileUpdate.appKey,mobileFabricConfigurationForBusinessProfileUpdate.appSecret,mobileFabricConfigurationForBusinessProfileUpdate.serviceURL,initializeMobileFabricForBusinessProfileUpdateSuccess,initializeMobileFabricForBusinessProfileUpdateFailure);  
      // alert(getNotification());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessProfileUpdateSuccess(response)
{
               // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
              //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessProfileUpdate.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     setBusinessProfileUpdate();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessProfileUpdateFailure(error)
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
                mobileFabricConfigurationForBusinessProfileUpdate.authClient = mobileFabricConfigurationForBusinessProfileUpdate.konysdkObject.getIdentityService(mobileFabricConfigurationForBusinessProfileUpdate.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForBusinessProfileUpdate.identityServices[0].username, "password": mobileFabricConfigurationForBusinessProfileUpdate.identityServices[0].password};
    mobileFabricConfigurationForBusinessProfileUpdate.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessProfileUpdate.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                setBusinessProfileUpdate();
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

function setBusinessProfileUpdate()
{
  
                //alert("inside TaskDetails");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessProfileUpdate.integrationObj = mobileFabricConfigurationForBusinessProfileUpdate.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessProfileUpdate.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessProfileUpdate.integrationServices[0].operations[0];
                                var headers= {};

     
     // alert("operation name"+operationName);
                  var BusinessPrifileDetails={};
                  BusinessPrifileDetails["businessId"]=kony.store.getItem("businessId");
                  BusinessPrifileDetails["businessName"]=businessMyProfile.businessMyProfileBody.bmpBusinessNameInput.text;
                  BusinessPrifileDetails["acnNumber"]=businessMyProfile.businessMyProfileBody.bmpNumbersInput.text;
                  BusinessPrifileDetails["address1"]=businessMyProfile.businessMyProfileBody.bmpBusinessAddressInput.text;
                  BusinessPrifileDetails["numberOfIndigenousOwners"]=businessMyProfile.businessMyProfileBody.bmpNoOfIndiOwnersInput.text;
                  BusinessPrifileDetails["numberOfEmployees"]=businessMyProfile.businessMyProfileBody.bmpPercentOfIndiOwnershipInput.text;
                  BusinessPrifileDetails["percentOfIndigenousOwnership"]=businessMyProfile.businessMyProfileBody.bmpNoOfEmployeesInput.text;
                  BusinessPrifileDetails["percentIndigenousEmployment"]=businessMyProfile.businessMyProfileBody.bmpPercentIndiEmploymentInput.text;
                  BusinessPrifileDetails["sector"]= businessMyProfile.businessMyProfileBody.bmpSectorInput.text;
                  BusinessPrifileDetails["affiliations"]=businessMyProfile.businessMyProfileBody.bmpAffiliationsInput.text;
                  BusinessPrifileDetails["indigenousBusinessesCol"]=businessMyProfile.businessMyProfileBody.AboutBusinessInput.text;
                  BusinessPrifileDetails["business_reach"]=businessMyProfile.businessMyProfileBody.bmpReachContainer.BusinessReachInput.text;
                  BusinessPrifileDetails["skills"]=businessMyProfile.businessMyProfileBody.BusinessSkillsInput.text;
                 // BusinessPrifileDetails["Hours"]= have to be added to service, mobile fabric, screen and in code
                //  BusinessPrifileDetails["businessId"]=
                 
                  
                //var data={"userName":login.usernameField.text,
                //"password":login.passwordField.text};
                // dataLogin={userName:"volunteerFirst",password:"Password"};
               //alert("BusinessPrifileDetails"+JSON.stringify(BusinessPrifileDetails));
                mobileFabricConfigurationForBusinessProfileUpdate.integrationObj.invokeOperation(operationName, headers, BusinessPrifileDetails, getBusinessProfileUpdateSuccessCallback, getBusinessProfileUpdateErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getBusinessProfileUpdateSuccessCallback(BusinessPrifileDetails)
{
  
  //alert("inside success"+JSON.stringify(BusinessPrifileDetails));
  
  
    if(BusinessPrifileDetails!="undefined"&& BusinessPrifileDetails!=undefined)
    {
     
  
     
  }  
    }
 
   
 
  
 


function getBusinessProfileUpdateErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert ("Please try again. "+JSON.stringify(error));
              
     alert("Profile has been saved");
  
 // businessMyProfile.destroy();
//   businessMyProfile.setEnabled(false);
//      mainPage.show();
      //showSideBar();
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}



 