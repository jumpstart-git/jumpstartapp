//var gblReqAcceptTaskBtn;
mobileFabricConfigurationForVolNewAcceptTaskBtn= 
                {
                              appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
                                integrationServices: 
                                [
                                                {
                                                                service:"VolunteerAcceptRequestTasks",
                                                                operations:["volAcceptReqTasks"]
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
function VolNewAcceptTaskBtn (){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
//kony.application.dismissLoadingScreen(); 
  
  //gblReqAcceptTaskBtn=val9.widgetInfo.data[0].lblRequestIdSent;
// alert("the selected"+JSON.stringify(gblReqAcceptTaskBtn));
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
      if (!mobileFabricConfigurationForVolNewAcceptTaskBtn.isKonySDKObjectInitialized)
      {
           initializeMobileFabricForVolNewAcceptTaskBtn();
            
      }
      else if (mobileFabricConfigurationForVolNewAcceptTaskBtn.isKonySDKObjectInitialized)
      {
          setVolNewAcceptTaskBtn();
      }
                }
//            else{
//                                            // The user didn't pick a val9ue so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a val9id news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForVolNewAcceptTaskBtn ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolNewAcceptTaskBtn.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForVolNewAcceptTaskBtn.konysdkObject.init(mobileFabricConfigurationForVolNewAcceptTaskBtn.appKey,mobileFabricConfigurationForVolNewAcceptTaskBtn.appSecret,mobileFabricConfigurationForVolNewAcceptTaskBtn.serviceURL,initializeMobileFabricForVolNewAcceptTaskBtnSuccess,initializeMobileFabricForVolNewAcceptTaskBtnFailure);  
      // alert(getNotification());
    }
               else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolNewAcceptTaskBtnSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolNewAcceptTaskBtn.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     setVolNewAcceptTaskBtn();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolNewAcceptTaskBtnFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
            //    alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
            //    alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
                //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfigurationForVolNewAcceptTaskBtn.authClient = mobileFabricConfigurationForVolNewAcceptTaskBtn.konysdkObject.getIdentityService(mobileFabricConfigurationForVolNewAcceptTaskBtn.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForVolNewAcceptTaskBtn.identityServices[0].username, "password": mobileFabricConfigurationForVolNewAcceptTaskBtn.identityServices[0].password};
    mobileFabricConfigurationForVolNewAcceptTaskBtn.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolNewAcceptTaskBtn.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                setVolNewAcceptTaskBtn();
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

function setVolNewAcceptTaskBtn()
{
  
               // alert("inside setacceptTaskBtn");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolNewAcceptTaskBtn.integrationObj = mobileFabricConfigurationForVolNewAcceptTaskBtn.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolNewAcceptTaskBtn.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForVolNewAcceptTaskBtn.integrationServices[0].operations[0];
                                var headers= {};

      
    // alert("operation name"+operationName);
                  var dataNewAcceptBtnlVolRequest={};
                  dataNewAcceptBtnlVolRequest["taskId"]=mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.requestTaskId.text;
                  //var dataNewAcceptBtnlVolRequest={};
                  
                  dataNewAcceptBtnlVolRequest["title"]=mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskTitleLabelInput.text;
                 //dataNewAcceptBtnlVolRequest["details"]= searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
                  dataNewAcceptBtnlVolRequest["hoursRequired"]=mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskHoursLabelInput.text;
                  dataNewAcceptBtnlVolRequest["skills"]=mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskSkillsLabelInput.text;
                  var rawDetails=mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskDetailsLabelInput.text;
                  
                  var modifiedDetails=rawDetails.replace(/(\r\n|\n|\r)/gm," ");
                  dataNewAcceptBtnlVolRequest["details"]=modifiedDetails;
                 
                  
//                   var str=searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
//                   var arr=str.split("/");
//                   var actStartDate2=arr[2]+"-"+arr[1]+"-"+arr[0];
//                   var str1=searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.formattedDate;
//                   var arr1=str1.split("/");
//                   var actEndDate2=arr1[2]+"-"+arr1[1]+"-"+arr1[0];
                 
                  dataNewAcceptBtnlVolRequest["startDate"]=  mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskStartDateLabelInput.text;
                  dataNewAcceptBtnlVolRequest["endDate"]=mainPage.BusinessRequestTaskDetailsModal.ReqTaskDetailsBody.reqTaskEndDateLabelInput.text;
                mobileFabricConfigurationForVolNewAcceptTaskBtn.integrationObj.invokeOperation(operationName, headers, dataNewAcceptBtnlVolRequest, getVolNewAcceptTaskBtnSuccessCallback99, getVolNewacceptlRequestErrorCallback99);
                //alert("dat:"+JSON.stringify(dataNewAcceptBtnlVolRequest));
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getVolNewAcceptTaskBtnSuccessCallback99(dataNewAcceptBtnlVolRequest99)
{
  
  
 // alert("inside success"+JSON.stringify(dataNewAcceptBtnlVolRequest99));
  
   kony.application.dismissLoadingScreen();
    if(dataNewAcceptBtnlVolRequest99!="undefined"&& dataNewAcceptBtnlVolRequest99!=undefined)
    {
   //   alert("InSide"+JSON.stringify(dataNewAcceptBtnlVolRequest99));

   kony.application.dismissLoadingScreen();
     
  }  
    }

function getVolNewacceptlRequestErrorCallback99 (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
              
//alert("Request has been accepted");
 // mainPage.BusinessRequestTaskDetailsModal.isVisible=false;
  mainPage.eligibiltyCriteriaModalContainer.isVisible=false;
mainPage.BusinessRequestTaskDetailsModal.isVisible=false;
  mainPage.eligibiltyCriteriaModalContainer.Footer.agreeBtn.isVisible=false;
  //mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxFlex.chckBoxx.selectedKeys="null";
 mainPage.eligibiltyCriteriaModalContainer.acceptTermsChekBoxFlex.chckBoxFlex.chckBoxx.masterData= [
            ["cbg1", "."]
        ];
  //mainPage.acceptTaskDetailsModalContainer.isVisible=false;
mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.myAcceptedRequestsListContainer.acceptedRequestsSegment.removeAll();
//mainPage.destroy();
  
//    kony.ui.Alert({
//       "alertType": constants.ALERT_TYPE_INFO,
//       "alertTitle": null,
//       "yesLabel": "OK",
//    "noLabel":"No",
//       "message": "Task has been created under open task",
//       "alertHandler":"null" 
//     }, {
//       "iconPosition": constants.ALERT_ICON_POSITION_LEFT
//     }); 
   kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_INFO,
      "alertTitle": null,
      "yesLabel": "OK",
   "noLabel":"No",
      "message": "Task has been created under open task",
      "alertHandler":"null" 
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    }); 
  //alert("Task has been created under open task");
  
mainPage.show(); 
    kony.application.dismissLoadingScreen();
              //alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}
// function saveAcceptTaskBtn (val8){
  
//   gblReqAcceptTaskBtn=val8.widgetInfo.data[0].lblTaskId;
//   alert("lbltask:"+gblReqAcceptTaskBtn);
// }



