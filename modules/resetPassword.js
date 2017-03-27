//Type your code here

mobileFabricConfigurationForVolunteerResetPassword = 
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
                                                                service:"forgotPassword1",
                                                                operations:["forgotPasswordService"]
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
function forgotPasswordServiceforVolunteer(){
// alert("inside function");
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
// alert("enetered notifcation funtn");
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
      if (!mobileFabricConfigurationForVolunteerResetPassword.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForforgotPasswordVol();
            
      }
      else if (mobileFabricConfigurationForVolunteerResetPassword.isKonySDKObjectInitialized)
      {
        getResetPasswordforVolunteer();
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
}

function initializeMobileFabricForforgotPasswordVol ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                              
                                mobileFabricConfigurationForVolunteerResetPassword.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForVolunteerResetPassword.konysdkObject.init

(mobileFabricConfigurationForVolunteerResetPassword.appKey,mobileFabricConfigurationForVolunteerResetPassword.appSecret,mobileFabricConfigurationForVolunteerResetPassword.serviceURL,initializeMobileFabricForforgotPasswordVolSuccess,initializeMobileFabricForforgotPasswordVolFailure);  
      // alert(getNotification());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForforgotPasswordVolSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolunteerResetPassword.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
   getResetPasswordforVolunteer();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForforgotPasswordVolFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
           //     alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
                //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
               
                mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService

(mobileFabricConfiguration.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfiguration.identityServices[0].username, "password": 

mobileFabricConfiguration.identityServices[0].password};
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolunteerResetPassword.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                
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

function getResetPasswordforVolunteer()
{
  
             // alert("insidegetResetPasswordforVolunteer");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                               
                                mobileFabricConfigurationForVolunteerResetPassword.integrationObj = 

mobileFabricConfigurationForVolunteerResetPassword.konysdkObject.getIntegrationService

(mobileFabricConfigurationForVolunteerResetPassword.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForVolunteerResetPassword.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                
//         }
      
     // alert("operation name"+operationName);
               var resetData={} ;
       resetData["emailId"]=resetPasswordForm.resetPasswordFooter.emailTxtBox.text;
//alert("vol id:"+JSON.stringify( resetData["emailId"]));
                mobileFabricConfigurationForVolunteerResetPassword.integrationObj.invokeOperation(operationName, headers, resetData,getResetPasswordforVolunteerSuccessCallback,getResetPasswordforVolunteerErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getResetPasswordforVolunteerSuccessCallback (gblVolResetPassword98)
{
  
 // alert("inside success"+JSON.stringify(gblVolResetPassword98));
  // Check the opstatus for 0 meaning it worked
  if (gblVolResetPassword98 !== null &&gblVolResetPassword98.opstatus === 0){
   // alert("gblVolResetPassword98:"+JSON.stringify(gblVolResetPassword98));
    if (gblVolResetPassword98!== null && gblVolResetPassword98!== undefined){
    
       //alert("3");
        var passwordchangestatus = gblVolResetPassword98.pwdChange;
        var error=gblVolResetPassword98.errorCode;
        var business=gblVolResetPassword98.isBusiness;
//alert("Password changed:"+JSON.stringify(passwordchangestatus));
      
       if(business==="false")
       {
      if(passwordchangestatus==="failure")
      {
        alert(error);
      
      }
       }
       if(passwordchangestatus==="success"){
        
         alert("Temporary password has been sent to your email");
         
         resetPasswordForm.destroy();
         login.show();
         resetPasswordForm.resetPasswordFooter.emailTxtBox.text="";
      }
      if(business==="true"){
       alert("Please contact supplyNation to reset password");
      }
       //alert("dismiss screen");
      kony.application.dismissLoadingScreen();
      resetPasswordForm.resetPasswordFooter.emailTxtBox.text="";
     // }
   // }
  }
    
    
 }
  
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + notificationList.opstatus,alertType:constants. 

ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getResetPasswordforVolunteerErrorCallback (error)
{
                kony.print (" ********** Entering intogetResetPasswordforVolunteerSuccessCallback ********** ");
                kony.print (" ********** Failure ingetResetPasswordforVolunteerSuccessCallback: " + JSON.stringify(error) + 

" ********** ");
                kony.application.dismissLoadingScreen();
                alert ("Failed to fetch response. ");
                kony.print (" ********** Exiting out ofgetResetPasswordforVolunteerSuccessCallback ********** ");
}
