
mobileFabricConfigurationForRequestVolunteerSearchOpp=
                {
                                appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba",
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d",
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",




                                integrationServices:
                                [
                                                {
                                                                service:"RequestToVolunteerOpp",
                                                                operations:["requestToVolOpp"]
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
function BusinessRequestToVolunteerAcceptTaskOpp (){
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
      if (!mobileFabricConfigurationForRequestVolunteerSearchOpp.isKonySDKObjectInitialized)
      {
           initializeMobileFabricForRequestVolunteerTasksOpp();

      }
      else if (mobileFabricConfigurationForRequestVolunteerSearchOpp.isKonySDKObjectInitialized)
      {
          setRequestToVolunteerTasksOpp();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForRequestVolunteerTasksOpp ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForRequestVolunteerSearchOpp.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForRequestVolunteerSearchOpp.konysdkObject.init(mobileFabricConfigurationForRequestVolunteerSearchOpp.appKey,mobileFabricConfigurationForRequestVolunteerSearchOpp.appSecret,mobileFabricConfigurationForRequestVolunteerSearchOpp.serviceURL,initializeMobileFabricForRequestVolunteerTasksOppSuccess,initializeMobileFabricForRequestVolunteerTasksOppFailure);
      // alert(getNotification());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForRequestVolunteerTasksOppSuccess(response)
{
               // kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
              //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForRequestVolunteerSearchOpp.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     setRequestToVolunteerTasksOpp();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForRequestVolunteerTasksOppFailure(error)
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
                mobileFabricConfigurationForRequestVolunteerSearchOpp.authClient = mobileFabricConfigurationForRequestVolunteerSearchOpp.konysdkObject.getIdentityService(mobileFabricConfigurationForRequestVolunteerSearchOpp.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForRequestVolunteerSearchOpp.identityServices[0].username, "password": mobileFabricConfigurationForRequestVolunteerSearchOpp.identityServices[0].password};
    mobileFabricConfigurationForRequestVolunteerSearchOpp.authClient.login(authParams, loginMFSuccess, loginMFFailure);

    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");

}

function loginMFSuccess(response){
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForRequestVolunteerSearchOpp.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                setRequestToVolunteerTasksOpp();
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

function setRequestToVolunteerTasksOpp()
{

                //alert("inside TaskDetails");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForRequestVolunteerSearchOpp.integrationObj = mobileFabricConfigurationForRequestVolunteerSearchOpp.konysdkObject.getIntegrationService(mobileFabricConfigurationForRequestVolunteerSearchOpp.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForRequestVolunteerSearchOpp.integrationServices[0].operations[0];
                                var headers= {};
/*
{

"title":"Testing New Task",
"details":"Testing New Task",
"startDate":"2017-01-06",
"endDate":"2017-02-06",
"hoursRequired":"72",
"taskSkills":"Java",
"message":"message",
"volunteerId":"2310298",
"businessId":"112"

searchResultProfile.startEngagementModalContainer.isVisible=false;
searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TitleInputField.text="";
searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.TaskDetailsTextArea.text="";
searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.CommentsTextArea.text="";
searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.SkillsInput.text="";
searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.DuratationOfEngagementInput.text=";
searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.formattedDate;
}
*/

     //alert("operation name"+operationName);
                  var taskDetailsForOppsaecrh={};
                  taskDetailsForOppsaecrh["volunteerId"]=kony.store.getItem("volunteerId");
                  taskDetailsForOppsaecrh["businessId"]=kony.store.getItem("busIdNew");//this is taken from store while setting data in searchPage Opp

                  taskDetailsForOppsaecrh["title"]=searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text;
             	 //taskDetailsForOppsaecrh["details"]= searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
                  taskDetailsForOppsaecrh["hoursRequired"]=searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text;
                  taskDetailsForOppsaecrh["taskSkills"]=searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text;
                  var rawDetails99=searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text;
                   if(rawDetails99===null || rawDetails99==="null")
                     {
                       taskDetailsForOppsaecrh["details"]=rawDetails99;
                     }
                  else{
                  var modifiedDetails77=rawDetails99.replace(/(\r\n|\n|\r)/gm," ");
                  taskDetailsForOppsaecrh["details"]=modifiedDetails77;
                  }
                  var basicMessage21=searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text;
                  if(basicMessage21===null || basicMessage21==="null"||basicMessage21===""||basicMessage21===" "){
                    alert("enter details in comment");
                    return false;
                     kony.application.dismissLoadingScreen();

                    taskDetailsForOppsaecrh["message"]=basicMessage21;

                  }
                  else{
                  var formatedText23= basicMessage21.replace(/(\r\n|\n|\r)/gm," ");
                  taskDetailsForOppsaecrh["message"]=formatedText23;
                  }

//                   var str=searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.StartDateCalendarInput.formattedDate;
//                   var arr=str.split("/");
//                   var actStartDate2=arr[2]+"-"+arr[1]+"-"+arr[0];
//                   var str1=searchResultProfile.startEngagementModalContainer.startEngagementBodyContainer.EndDateCalendarInput.formattedDate;
//                   var arr1=str1.split("/");
//                   var actEndDate2=arr1[2]+"-"+arr1[1]+"-"+arr1[0];

                  taskDetailsForOppsaecrh["startDate"]= searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text;
                  taskDetailsForOppsaecrh["endDate"]=searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text;

                //alert("details:"+JSON.stringify(taskDetailsForOppsaecrh));
                mobileFabricConfigurationForRequestVolunteerSearchOpp.integrationObj.invokeOperation(operationName, headers, taskDetailsForOppsaecrh, getRequestVolunteerTasksOppSuccessCallback, getRequestVolunteerTasksOppErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");
}

function getRequestVolunteerTasksOppSuccessCallback(taskDetailsForOppsaecrh1)
{

 // alert("inside success"+JSON.stringify(taskDetailsForOppsaecrh1));


    if(taskDetailsForOppsaecrh1!="undefined"&& taskDetailsForOppsaecrh1!=undefined)
    {
      //alert("InSide"+JSON.stringify(taskDetailsForOppsaecrh));
//alert("please enter task details");
   kony.application.dismissLoadingScreen();

  }
    }







function getRequestVolunteerTasksOppErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
 kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_INFO,
      //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"
      "alertTitle": "Confirmation",
      //End of D005
      "yesLabel": "OK",
   "noLabel":"No",
      "message": "Request has been sent successfully",
      "alertHandler":"null"
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
  //alert("Request has been sent successfully");


searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = "";

  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text="";
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text="";
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text="";
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text="";
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text="";
searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.commentsModal.commentsTxtBox.text="";
 // searchResultProfile.show();
  searchResultProfile.opprtunitiesReadOnlyContainer.isVisible=false;
    //searchResultProfile.destroy();
searchPage.show();
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}
