mobileFabricConfigurationForVolCancelRequest= 
                {
                                 appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
                                
                                
                                integrationServices: 
                                [
                                                {
                                                                service:"CancelReqVolunteer",
                                                                operations:["CancelRequestVolunteer"]
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
function VolCancelRequest (){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
  
  //gblReqCancelVol=val9.widgetInfo.data[0].lblRequestIdSent;
  //alert("the selected"+JSON.stringify(gblReqCancelVol));
                // Let's get the news type the user selected
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                //alert ("########## Selected Key:" + selectedKey);
                // Let's first check that the user picked a val9id val9ue
                //if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      // Populating the input params for the service call and invoking the service
      // We're passing in the selected key for the user's selection in the combobox
      // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
      // Now we make the call to the service using our input parameters and specifying
      // the function processServiceResults as our callback when the service returns results
      // appmiddlewareinvokerasync(inputParams, processServiceResults);
      if (!mobileFabricConfigurationForVolCancelRequest.isKonySDKObjectInitialized)
      {
           initializeMobileFabricForVolCancelRequest();
            
      }
      else if (mobileFabricConfigurationForVolCancelRequest.isKonySDKObjectInitialized)
      {
          setVolCancelRequest();
      }
                }
//            else{
//                                            // The user didn't pick a val9ue so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a val9id news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForVolCancelRequest ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolCancelRequest.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForVolCancelRequest.konysdkObject.init(mobileFabricConfigurationForVolCancelRequest.appKey,mobileFabricConfigurationForVolCancelRequest.appSecret,mobileFabricConfigurationForVolCancelRequest.serviceURL,initializeMobileFabricForVolCancelRequestSuccess,initializeMobileFabricForVolCancelRequestFailure);  
      // alert(getNotification());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolCancelRequestSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
              //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
               mobileFabricConfigurationForVolCancelRequest.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     setVolCancelRequest();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolCancelRequestFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
            //    alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
             //   alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
                //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfigurationForVolCancelRequest.authClient = mobileFabricConfigurationForVolCancelRequest.konysdkObject.getIdentityService(mobileFabricConfigurationForVolCancelRequest.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForVolCancelRequest.identityServices[0].username, "password": mobileFabricConfigurationForVolCancelRequest.identityServices[0].password};
    mobileFabricConfigurationForVolCancelRequest.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolCancelRequest.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                setVolCancelRequest();
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

function setVolCancelRequest()
{
  
                //alert("inside CancelRequest");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolCancelRequest.integrationObj = mobileFabricConfigurationForVolCancelRequest.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolCancelRequest.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForVolCancelRequest.integrationServices[0].operations[0];
                                var headers= {};

      
    //alert("operation name"+operationName);
                  var dataCancelVolRequest={};
                  //alert("requestid:"+JSON.stringify(gblReqCancelVol));
                  dataCancelVolRequest["requestId"]=gblReqCancelVol;//1;//kony.store.getItem("requestId");
                  //dataCancelVolRequest["message"]="MerinnnnReal";
                 
                    //dataCancelVolRequest["message"]=mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;//"trial";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;//"salma again actual";//mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text;
             
                  
                var rawReqdata99=mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text;
               if((rawReqdata99===null) || (rawReqdata99==="null")||(rawReqdata99==="")||(rawReqdata99===" "))
                     {
                        alert("please enter the details");
                  kony.application.dismissLoadingScreen();
                  return false;
                     }
                  else{
                    var modifiedReqdata99=rawReqdata99.replace(/(\r\n|\n|\r)/gm," ");
                 dataCancelVolRequest["message"]=modifiedReqdata99;//mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text;
                  }
                  
               
          
                 // dataCancelVolRequest["message"]=mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text;
                 // alert("dataCancelVolRequest"+JSON.stringify(dataCancelVolRequest));
                //  alert("actual string=="+mainPage.acceptRequestModalContainer.acceptRequestModalBody.acceptRequestMessageFromBusiness.text);
                mobileFabricConfigurationForVolCancelRequest.integrationObj.invokeOperation(operationName, headers, dataCancelVolRequest, getVolCancelRequestSuccessCallback, getVolacceptlRequestErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getVolCancelRequestSuccessCallback(dataCancelVolRequest)
{
  
 // alert("inside success"+JSON.stringify(dataCancelVolRequest));
  
  
    if(dataCancelVolRequest!="undefined"&& dataCancelVolRequest!=undefined)
    {
    //  alert("InSide"+JSON.stringify(dataCancelVolRequest));

  
     
  }  
    }

function getVolacceptlRequestErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
     mainPage.cancelRequestModalContainer.isVisible=false;
    mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.removeAll(); 
      mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.removeAll();
    mainPage.destroy();
      mainPage.show();
     mainPage.cancelRequestModalContainer.requestModalBody.cancelRequestTextArea.text="Good day!I have received your request but unfortunately I have to decline due to other commitments that may impact my availability..";
   
           //     alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}
function saveCancelVolReqId(){
  try{

  if(kony.store.getItem("isBusOrVol")=="volunteer"){
       var taskVal= mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
    gblReqCancelVol=taskVal[0].lblRequestId; 
   // alert("taskval:"+JSON.stringify(taskVal));
  //gblReqCancelVol=val9.widgetInfo.data[0].lblRequestId;

  
  //gblReqCancelVol=val9.widgetInfo.data[0].lblRequestId;
  }
  }
  catch(error)
    {
      alert("error is:"+e);
    }
}
