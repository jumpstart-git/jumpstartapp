var gblBusIdforViewProfile;

mobileFabricConfigurationForIndigenousBusinessViewProfile={
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
function IndigenousBusinessViewProfileService(){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
//if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      // Populating the input params for the service call and invoking the service
      // We're passing in the selected key for the user's selection in the combobox
      // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
      // Now we make the call to the service using our input parameters and specifying
      // the function processServiceResults as our callback when the service returns results
      // appmiddlewareinvokerasync(inputParams, processServiceResults);
      if (!mobileFabricConfigurationForIndigenousBusinessViewProfile.isKonySDKObjectInitialized)
      {
initializeMobileFabricForIndigenousBusinessViewProfile();
            
      }
      else if (mobileFabricConfigurationForIndigenousBusinessViewProfile.isKonySDKObjectInitialized)
      {
          getIndigenousBusinessViewProfile();
      }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}


function initializeMobileFabricForIndigenousBusinessViewProfile ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForIndigenousBusinessViewProfile.konysdkObject = new kony.sdk();
mobileFabricConfigurationForIndigenousBusinessViewProfile.konysdkObject.init(mobileFabricConfigurationForIndigenousBusinessViewProfile.appKey,mobileFabricConfigurationForIndigenousBusinessViewProfile.appSecret,mobileFabricConfigurationForIndigenousBusinessViewProfile.serviceURL,mobileFabricConfigurationForIndigenousBusinessViewProfileSuccess,mobileFabricConfigurationForIndigenousBusinessViewProfileFailure);  
      // alert(getIndigenousBusinessViewProfile());
    }
else
alert ("Network unavailable. Please check your network settings. ");
kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}


function mobileFabricConfigurationForIndigenousBusinessViewProfileSuccess(response)
{
kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
//alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
mobileFabricConfigurationForIndigenousBusinessViewProfile.isKonySDKObjectInitialized=true;
kony.application.dismissLoadingScreen();
//authenticateMFUsingUserStore();
     getIndigenousBusinessViewProfile();
kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}


function mobileFabricConfigurationForIndigenousBusinessViewProfileFailure(error)
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
mobileFabricConfigurationForIndigenousBusinessViewProfile.isMFAuthenticated = true;
kony.application.dismissLoadingScreen();
getIndigenousBusinessViewProfile();
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


function getIndigenousBusinessViewProfile()
{
  try{
  
  //alert("inside getIndigenousBusinessViewProfile");
//var selectedKey = frmFoxNews.lstNewsType.selectedKey;
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForIndigenousBusinessViewProfile.integrationObj = mobileFabricConfigurationForIndigenousBusinessViewProfile.konysdkObject.getIntegrationService(mobileFabricConfigurationForIndigenousBusinessViewProfile.integrationServices[0].service);
      var operationName = mobileFabricConfigurationForIndigenousBusinessViewProfile.integrationServices[0].operations[0];
var headers= {};
// if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
// data= {"newsType": selectedKey};
//         }else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
    // alert("operation name"+operationName);
       var data={};
// data["id"]= kony.store.getItem("selReqId");
  data["id"]= gblBusIdforViewProfile;
  //alert("data id business"+  data["id"]);
    mobileFabricConfigurationForIndigenousBusinessViewProfile.integrationObj.invokeOperation(operationName, headers, data, getIndigenousBusinessViewProfileSuccessCallbackk, getIndigenousBusinessViewProfileErrorCallback);
}
else
alert ("Network unavailable. Please check your network settings. ");  
}catch(e)
  {
    //alert("error is "+JSON.stringify(e));
  }
}


function getIndigenousBusinessViewProfileSuccessCallbackk(gblIndigenousBusinessViewProfile)
{
  //alert("inside success");
//alert("inside success"+JSON.stringify(gblIndigenousBusinessViewProfile));

  // Check the opstatus for 0 meaning it worked
  if (gblIndigenousBusinessViewProfile !== null && gblIndigenousBusinessViewProfile.opstatus === 0){
    
   // alert("1");
    // Checking to make sure we DO have results
    if (gblIndigenousBusinessViewProfile.BusinessDTO !== null){
      //  alert("2");
      // Making sure we have at least 1 article returned
      if (gblIndigenousBusinessViewProfile.BusinessDTO.length > 0){
        // Now we know we have results so we'll print them out to check
      //  alert ("########## Response received from service call: "+JSON.stringify(gblIndigenousBusinessViewProfile.businessBbj));
        gblIndigenousBusinessViewProfileResponse=gblIndigenousBusinessViewProfile;
        setIndigenousBusinessViewProfileData(gblIndigenousBusinessViewProfileResponse);
        
        
      }
    }
  }
  else{
kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + IndigenousBusinessProfile.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }

}


function getIndigenousBusinessViewProfileErrorCallback(error)
{
kony.print (" ********** Entering into getIndigenousBusinessViewProfileSuccessCallback ********** ");
kony.print (" ********** Failure in getIndigenousBusinessViewProfileSuccessCallback: " + JSON.stringify(error) + " ********** ");
kony.application.dismissLoadingScreen();
//alert (" Failed to fetch the news. Please try again."+ JSON.stringify(error));
kony.print (" ********** Exiting out of getIndigenousBusinessViewProfileSuccessCallback ********** ");
}

function setIndigenousBusinessViewProfileData(gblIndigenousBusinessViewProfileResponse)
{
  try{
    
    //alert("inside try");
  if(gblIndigenousBusinessViewProfileResponse!="undefined"&& gblIndigenousBusinessViewProfileResponse!=undefined)
    {
       var len=gblIndigenousBusinessViewProfileResponse["BusinessDTO"].length ;
  
  if (gblIndigenousBusinessViewProfileResponse["BusinessDTO"].length > 0) {
    //alert("inside if");
            
      //for (var i = 0; i < len; i++) 
     // {          
  var companyName = gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].businessName; 
     kony.store.setItem("companyName", companyName);
  ///var companyAddress = gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].address1;
  var businessContactNumber = gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].phoneNumber;
  var aboutCompany = gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].indigenousBusinessesCol;  
 //business reach values has to be configured from mobile fabric 
  var companyAddress = gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].address1;
  //alert("gblIndigenousBusinessViewProfileResponse:"+JSON.stringify(gblIndigenousBusinessViewProfileResponse));
    //alert("adress1:"+JSON.stringify(gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].address1));
    //alert("address:"+companyAddress);
    var businessActivity = gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].sector;
    var email=gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].businessUserId.userName;  
  var professionalAffiliations = gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].affiliations;
    
   var singleVolImgPath1=gblIndigenousBusinessViewProfileResponse.BusinessDTO[0].businessUserId.imagePath;
        var imagepathVolSingle1 = "imgseglogo.png";
        
                   if(singleVolImgPath1 !=null && singleVolImgPath1!="null"){
                     imagepathVolSingle1 = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+singleVolImgPath1;
                   }
    
    
//  var businessReach = gblIndigenousBusinessViewProfileResponse.businessBbj[i]["BusinessDTO"].affiliations;
  // var businessLat = gblIndigenousBusinessViewProfileResponse.businessBbj[i]["BusinessDTO"].BusinessLat;
// var businessLong = gblIndigenousBusinessViewProfileResponse.businessBbj[i]["BusinessDTO"].BusinessLong; 
 //var myProfileName = gblIndigenousBusinessViewProfileResponse.IndigenousBusinessProfile[0]["IndigenousBusinessProfileDTO"][0].BusinessImage;
if(professionalAffiliations===null || professionalAffiliations==="null"){
                     professionalAffiliations=" ";}
   // }
   // alert("11");
    //searchResultProfile.businessProfileContainer.businessProfileDetailsHeader.CompanyLogoContainer.CompanyLogo.src=imagepathVolSingle1;
    MyActivityProfiles.businessProfileContainerr.businessProfileDetailsHeaderr.CompanyLogoContainerr.CompanyLogoo.src=imagepathVolSingle1;
   // searchResultProfile.businessProfileContainer.businessProfileDetailsHeader.CompanyNameAndAddressContainer.BusinessProfileCompanyNameAndAddressContaine.text=companyName;
   MyActivityProfiles.businessProfileContainerr.businessProfileDetailsHeaderr.CompanyNameAndAddressContainerr.BusinessProfileCompanyNameAndAddressContainerr.text=companyName;
    //searchResultProfile.businessProfileContainer.businessProfileDetailsHeader.CompanyNameAndAddressContainer.CompanyAddressContainer.CompanyAddressLabel.text=companyAddress;
    MyActivityProfiles.businessProfileContainerr.businessProfileDetailsHeaderr.CompanyNameAndAddressContainerr.CompanyAddressContainerr.CompanyAddressLabell.text=companyAddress;
    //searchResultProfile.businessProfileContainer.businessProfileAboutContainer.businessProfileAboutText.text=aboutCompany;
     MyActivityProfiles.businessProfileContainerr.businessProfileAboutContainerr.businessProfileAboutTextt.text=aboutCompany;
    //searchResultProfile.businessProfileContainer.businessContactContainer.contactNumberContainer.phoneNumberContainer.businessPhoneNumber.text=businessContactNumber;
    MyActivityProfiles.businessProfileContainerr.businessContactContainerr.contactNumberContainerr.phoneNumberContainerr.businessPhoneNumberr.text=businessContactNumber;
    //searchResultProfile.businessProfileContainer.businessContactContainer.emailContainer.emailIdContainer.emailTextArea.text=email;
    MyActivityProfiles.businessProfileContainerr.businessContactContainerr.emailContainerr.emailIdContainerr.emailTextAreaa.text=email;
    //searchResultProfile.businessProfileContainer.businessProfileBusinessActivityContainer.businessProfileBusinessActivityText.text=businessActivity;
    MyActivityProfiles.businessProfileContainerr.businessProfileBusinessActivityContainerr.businessProfileBusinessActivityTextt.text=businessActivity;
    //searchResultProfile.businessProfileContainer.businessProfileAffiliationsContainer.businessProfileAffiliationsText.text=professionalAffiliations;
    MyActivityProfiles.businessProfileContainerr.businessProfileAffiliationsContainerr.businessProfileAffiliationsTextt.text=professionalAffiliations;
//searchResultProfile.businessProfileContainer.businessAddessContainer.adressTxtArea.text=companyAddress;
    //  searchResultProfile.businessProfileContainer.businessProfileReachContainer.businessProfileReachText.text= businessReach;
   // myProfile.show();
   //searchResultProfile.show();
    MyActivityProfiles.show();
    //searchResultProfile.businessProfileContainer.businessProfileContactActions.businessProfileEmail.isVisible=false;
    MyActivityProfiles.businessProfileContainerr.isVisible=true;
    //searchResultProfile.businessProfileContainer.isVisible=true;
    
               //alert("111");   
    kony.application.dismissLoadingScreen();
                }
    
    
   
  }
  } catch(Exception)
{
  kony.application.dismissLoadingScreen();
alert("Exception is"+JSON.stringify(Exception));
}
  
    }
  function saveBusIdForViewProfile99()
{
   try{
   if(kony.store.getItem("isBusOrVol")=="volunteer")
   {
    
      var busIdVal=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
     gblBusIdforViewProfile=busIdVal[0].businessId;
    // alert("value :"+JSON.stringify(busIdVal));
     //alert("busIdacceptSeg:"+gblBusIdforViewProfile);
     //gblBusIdforViewProfile=val8.widgetInfo.data[0].lblRequestIdSent;
  }
  }
  catch(error){
    alert("error is:"+e);
  }
}
function saveBusIdForViewProfileOpenTask()
{
   try{
   if(kony.store.getItem("isBusOrVol")=="volunteer")
   {
    
      var busIdVal=mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
     gblBusIdforViewProfile=busIdVal[0].businessId;
    // alert("value :"+JSON.stringify(busIdVal));
     //alert("busIdOpentask:"+gblBusIdforViewProfile);
     //gblBusIdforViewProfile=val8.widgetInfo.data[0].lblRequestIdSent;
  }
  }
  catch(error){
    //alert("error is:"+e);
  }
}

function saveBusIdForViewProfileCloseTask()
{
   try{
   if(kony.store.getItem("isBusOrVol")=="volunteer")
   {
    
      var busIdVal=mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems; 
     gblBusIdforViewProfile=busIdVal[0].businessId;
    // alert("value :"+JSON.stringify(busIdVal));
     //alert("busIdOpentask:"+gblBusIdforViewProfile);
     //gblBusIdforViewProfile=val8.widgetInfo.data[0].lblRequestIdSent;
  }
  }
  catch(error){
    //alert("error is:"+e);
  }
}
