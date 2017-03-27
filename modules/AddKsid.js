
mobileFabricConfigurationForAttachKSID= {
  appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
  appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
  serviceURL:"https://100014964.auth.konycloud.com/appconfig",
  integrationServices: 
  [
    {
      service:"AttachKsidToUser",
      operations:["attachKsid"]
    }
  ],
  konysdkObject: null,
  authClient: null,
  integrationObj: null,
  isKonySDKObjectInitialized:false,
  isMFAuthenticated: false
};


function AttachKSIDService (){
  kony.application.showLoadingScreen(null,
                                   "Loading..",
                                   constants.LOADING_SCREEN_POSITION_ONLY_CENTER,
                                   true,
                                   true,
                                   {shouldShowLabelInBottom: "false", separatorHeight: 20}
                                  );
  
  if (!mobileFabricConfigurationForAttachKSID.isKonySDKObjectInitialized) {
    initializeMobileFabricForAttachKSID();
  } else if (mobileFabricConfigurationForAttachKSID.isKonySDKObjectInitialized) {
    setAttachKSID();
  }
}

function initializeMobileFabricForAttachKSID () {
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    mobileFabricConfigurationForAttachKSID.konysdkObject = new kony.sdk();
    mobileFabricConfigurationForAttachKSID.konysdkObject.init(
      mobileFabricConfigurationForAttachKSID.appKey,
      mobileFabricConfigurationForAttachKSID.appSecret,
      mobileFabricConfigurationForAttachKSID.serviceURL,
      initializeMobileFabricForAttachKSIDSuccess,
      initializeMobileFabricForAttachKSIDFailure
    );
  } else {
    alert ("Network unavailable. Please check your network settings. ");
  }
  
  kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForAttachKSIDSuccess(response) {
  mobileFabricConfigurationForAttachKSID.isKonySDKObjectInitialized=true;
  setAttachKSID();
  kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForAttachKSIDFailure(error) {
  kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
  mobileFabricConfigurationForAttachKSID.authClient = mobileFabricConfigurationForAttachKSID.konysdkObject.getIdentityService(mobileFabricConfigurationForAttachKSID.identityServices[0].service);
  var authParams = {"userid": mobileFabricConfigurationForAttachKSID.identityServices[0].username, "password": mobileFabricConfigurationForAttachKSID.identityServices[0].password};
  mobileFabricConfigurationForAttachKSID.authClient.login(authParams, loginMFSuccess, loginMFFailure);
  kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response){
  mobileFabricConfigurationForAttachKSID.isMFAuthenticated = true;
  kony.application.dismissLoadingScreen();
  setAttachKSID();
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

function setAttachKSID() {
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfigurationForAttachKSID.integrationObj = mobileFabricConfigurationForAttachKSID.konysdkObject.getIntegrationService(mobileFabricConfigurationForAttachKSID.integrationServices[0].service);
    var operationName = mobileFabricConfigurationForAttachKSID.integrationServices[0].operations[0];
    var headers= {};
    var ksidDetails={};
    ksidDetails["userName"]=kony.store.getItem("loginEmail");
    ksidDetails["ksid"]=kony.store.getItem("KSID");
    
    mobileFabricConfigurationForAttachKSID.integrationObj.invokeOperation(operationName, headers, ksidDetails, getAttachKSIDSuccessCallback, getAttachKSIDErrorCallback);
  } else {
    alert ("Network unavailable. Please check your network settings. ");
  }
                                
}

function getAttachKSIDSuccessCallback(ksidDetailsVal) {
  kony.application.dismissLoadingScreen();
  
  if(ksidDetailsVal!="undefined"&& ksidDetailsVal!=undefined) {

  }  
}


function getAttachKSIDErrorCallback (error)
{
  kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
  kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
  
  if(kony.store.getItem("isBusOrVol")=="volunteer") {
    mainPage.show();
  } else {
    kony.application.dismissLoadingScreen();
  }
               
}

