
mobileFabricConfigurationForBusinessLogoUpload=
                {
                                appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba",
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d",
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",




                                integrationServices:
                                [
                                                {
                                                                service:["UpdateBusinessLogo"],
                                                                operations:["uploadBusinessImage"]
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
function businessUpdateImage (){
 kony.application.showLoadingScreen(null, "Loading..",
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
shouldShowLabelInBottom: "false", separatorHeight: 20} );

      if (!mobileFabricConfigurationForBusinessLogoUpload.isKonySDKObjectInitialized)
      {//alert("1");
           mobileFabricConfigurationForBusinessLogoUploadInit();

      }
      else if (mobileFabricConfigurationForBusinessLogoUpload.isKonySDKObjectInitialized)
      {//alert("uploadBusinessLogo");
          uploadBusinessLogo();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function mobileFabricConfigurationForBusinessLogoUploadInit ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessLogoUpload.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessLogoUpload.konysdkObject.init(mobileFabricConfigurationForBusinessLogoUpload.appKey,mobileFabricConfigurationForBusinessLogoUpload.appSecret,mobileFabricConfigurationForBusinessLogoUpload.serviceURL,mobileFabricConfigurationForBusinessLogoUploadSuccess,mobileFabricConfigurationForBusinessLogoUploadFailure);
      // alert(getNotification());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForBusinessLogoUploadSuccess(response)
{
              //  kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
              // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessLogoUpload.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     uploadBusinessLogo();
  kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForBusinessLogoUploadFailure(error)
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
                mobileFabricConfigurationForBusinessLogoUpload.authClient = mobileFabricConfigurationForBusinessLogoUpload.konysdkObject.getIdentityService(mobileFabricConfigurationForBusinessLogoUpload.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForBusinessLogoUpload.identityServices[0].username, "password": mobileFabricConfigurationForBusinessLogoUpload.identityServices[0].password};
    mobileFabricConfigurationForBusinessLogoUpload.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");

}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessLogoUpload.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                uploadBusinessLogo();
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

function uploadBusinessLogo()
{

              //  alert("inside DeclineRequest");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessLogoUpload.integrationObj = mobileFabricConfigurationForBusinessLogoUpload.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessLogoUpload.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessLogoUpload.integrationServices[0].operations[0];
                                var headers= {};


    //  alert("operation name"+operationName);
                  var uploadImageData={};
                  uploadImageData["businessId"]=kony.store.getItem("businessId");
                  uploadImageData ["file"]=kony.store.getItem("imageVal1");
                 uploadImageData ["fileName"] =kony.store.getItem("imgFileNameVal1");

                // alert("uploadImageData"+JSON.stringify(uploadImageData));
                mobileFabricConfigurationForBusinessLogoUpload.integrationObj.invokeOperation(operationName, headers, uploadImageData, uploadBusinessLogoSuccessCallback, uploadBusinessLogoErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");
}

function uploadBusinessLogoSuccessCallback(uploadImageData)
{

  //alert("inside success"+JSON.stringify(uploadImageData));


    if(uploadImageData!="undefined"&& uploadImageData!=undefined)
    {
     // alert("InSide"+JSON.stringify(uploadImageData));

    var businessImagePathAfterUpdate=uploadImageData["BusinessDTO"][0]["businessUserId"].imagePath;
    //alert(JSON.stringify(businessImagePathAfterUpdate));
      var imagePathAfterUpdate = "imgseglogo.png";
    if(businessImagePathAfterUpdate !=null && businessImagePathAfterUpdate!="null")
    {
      imagePathAfterUpdate = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+businessImagePathAfterUpdate;
    }
      kony.store.setItem("imgUrlBusiness",imagePathAfterUpdate);
    // alert("updated url"+JSON.stringify(kony.store.getItem("imgUrlBusiness")));
    // BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.imgContainer.imgBusinessLogo.src=imagePathAfterUpdate;
 //mainPage.mainPageBody.searchBarContainer.appHeaderTitleContainer.appPageProfilePic.src=imagePathAfterUpdate;
   kony.ui.Alert({
	   //D027: Changed alertType from ALERT_TYPE_INFO to ALERT_TYPE_CONFIRMATION
      "alertType": constants.ALERT_TYPE_INFO,
      "alertTitle": "Confirmation",
      "yesLabel": "OK",
   "noLabel":"No",
   //D027: Changed message value from "Profile Uploaded Successfully" to "Profile logo was successfully updated"
      "message": "Profile logo was successfully updated",
      "alertHandler": null
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });

     //alert("Profile Uploaded Successfully");
      kony.application.dismissLoadingScreen();

  }
    }







function uploadBusinessLogoErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();

  kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}
