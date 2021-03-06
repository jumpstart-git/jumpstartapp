//Type your code here
mobileFabricConfigurationForResendCode = 
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
                                                                service:"ResendRegCode",
                                                                operations:["checkingCode"]
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
function validateResendCode(){
  //alert("clikkd");
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );

      if (!mobileFabricConfigurationForResendCode.isKonySDKObjectInitialized)
      {
                                                mobileFabricConfigurationResendCodeValidation();
            
      }
      else if (mobileFabricConfigurationForResendCode.isKonySDKObjectInitialized)
      {
          getResendCodeDataVal();
      }
  }


function mobileFabricConfigurationResendCodeValidation()
{
    
 // alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForResendCode.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForResendCode.konysdkObject.init(mobileFabricConfigurationForResendCode.appKey,mobileFabricConfigurationForResendCode.appSecret,mobileFabricConfigurationForResendCode.serviceURL,mobileFabricConfigurationResendCodeValidationSuccess,mobileFabricConfigurationResendCodeValidationFailure);  
     //  alert("bbbb");
    }
                else
                                //alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
  
}

function mobileFabricConfigurationResendCodeValidationSuccess(response)
{
                
  kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
          //      alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForResendCode.isKonySDKObjectInitialized=true;
                //kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getResendCodeDataVal();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
  
}

function mobileFabricConfigurationResendCodeValidationFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
                alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
             //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfigurationForResendCode.authClient = mobileFabricConfigurationForResendCode.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfiguration.identityServices[0].username, "password": mobileFabricConfiguration.identityServices[0].password};
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);

   kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
              //  alert (" ********** Entering into loginMFSuccess ********** ");
               // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForsearchBusiness.isMFAuthenticated = true;
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
}

function getResendCodeDataVal()
{
  
             //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForResendCode.integrationObj = mobileFabricConfigurationForResendCode.konysdkObject.getIntegrationService(mobileFabricConfigurationForResendCode.integrationServices[0].service);
                 // mobileFabricConfigurationForVolunteer.integrationObj = mobileFabricConfigurationForVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteer.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForResendCode.integrationServices[0].operations[0];
                                var headers= {};

                  var data={};
                  data["emailId"]=gblemailVal;//"mahendrabhide@gmail.com";
                 // data["code"]=login.validateCodeText.text; //"EIPK9";
                // alert("operation name"+operationName);
                 // alert("inputting"+JSON.stringify(data));
                mobileFabricConfigurationForResendCode.integrationObj.invokeOperation(operationName, headers, data, regResendCodeDataSuccessCallback, regResendCodeDataErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
  
}

function regResendCodeDataSuccessCallback (gblResendCodeData)
{
  
  
//alert(JSON.stringify("successsss"+JSON.stringify(gblResendCodeData)));
 
  alert("Code has been sent to your email id");
  kony.application.dismissLoadingScreen();
}
function regResendCodeDataErrorCallback(error)
{
  alert(JSON.stringify(error));
  kony.application.dismissLoadingScreen();
}
