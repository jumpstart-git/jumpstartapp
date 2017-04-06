//Type your code here

mobileFabricConfigurationForBusinessLoadExistingTaskTask99 =
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
                                                                service:"GetExistingOpenTasks",
                                                                operations:["getExistingOpenTask"]
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
function BusinessLoadExistingTaskTaskService99 (){
 kony.application.showLoadingScreen(null, "Loading..",
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
shouldShowLabelInBottom: "false", separatorHeight: 20} );

      if (!mobileFabricConfigurationForBusinessLoadExistingTaskTask99.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForBusinessLoadExistingTaskTask99();

      }
      else if (mobileFabricConfigurationForBusinessLoadExistingTaskTask99.isKonySDKObjectInitialized)
      {



          getBusinessLoadExistingTaskTask99();

      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForBusinessLoadExistingTaskTask99 ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessLoadExistingTaskTask99.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessLoadExistingTaskTask99.konysdkObject.init(mobileFabricConfigurationForBusinessLoadExistingTaskTask99.appKey,mobileFabricConfigurationForBusinessLoadExistingTaskTask99.appSecret,mobileFabricConfigurationForBusinessLoadExistingTaskTask99.serviceURL,initializeMobileFabricForBusinessLoadExistingTaskTask99Success,initializeMobileFabricForBusinessLoadExistingTaskTask99Failure);
      // alert(getBusinessLoadExistingTaskTask99());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessLoadExistingTaskTask99Success(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessLoadExistingTaskTask99.isKonySDKObjectInitialized=true;
              //  kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();

          getBusinessLoadExistingTaskTask99();
             //getBusinessLoadExistingTaskTask99();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessLoadExistingTaskTask99Failure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
              //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
             //   alert (" Unable to initialize the application. Please try again. ");
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
  //          alert (" ********** Entering into loginMFSuccess ********** ");
  //          alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessLoadExistingTaskTask99.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();

          getBusinessLoadExistingTaskTask99();

                //getBusinessLoadExistingTaskTask99();
                kony.print (" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error)
{
                kony.print (" ********** Entering into loginMFFailure ********** ");
                kony.print (" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
            //    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
                kony.print (" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessLoadExistingTaskTask99()
{

              // alert("inside getBusinessLoadExistingTaskTask99");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessLoadExistingTaskTask99.integrationObj = mobileFabricConfigurationForBusinessLoadExistingTaskTask99.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessLoadExistingTaskTask99.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessLoadExistingTaskTask99.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }


      var dataBusId={} ;
       dataBusId["id"]=kony.store.getItem("selReqId"); //"1";//kony.store.getItem("businessId");
      //alert("operation name"+dataBusId["id"]);
                mobileFabricConfigurationForBusinessLoadExistingTaskTask99.integrationObj.invokeOperation(operationName, headers, dataBusId, getBusinessLoadExistingTaskTask99SuccessCallback, getBusinessLoadExistingTaskTask99ErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");
}

function getBusinessLoadExistingTaskTask99SuccessCallback (gblBusinessLoadExistingTaskList9)
{

 //alert("inside getBusinessLoadExistingTaskTask99SuccessCallback"+JSON.stringify(gblBusinessLoadExistingTaskList9));
  // Check the opstatus for 0 meaning it worked
  if (gblBusinessLoadExistingTaskList9 !== null && gblBusinessLoadExistingTaskList9.opstatus === 0){//first if

  if (gblBusinessLoadExistingTaskList9.taskList!=null && gblBusinessLoadExistingTaskList9.taskList!=undefined)
  {//second if
    if (gblBusinessLoadExistingTaskList9.taskList[0].TasksDTO !== null && gblBusinessLoadExistingTaskList9.taskList[0].TasksDTO!=undefined)
    {//3rd if
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblBusinessLoadExistingTaskList9.taskList.length > 0)
      {//4th if
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessLoadExistingTaskList9.BusinessLoadExistingTaskTaskList));
        gblLoadExistingTaskResponse99=gblBusinessLoadExistingTaskList9;
        setLoadExistingTaskSegData99(gblLoadExistingTaskResponse99);
        // var gblLoadExistingTaskResponse99=JSON.stringify(BusinessLoadExistingTaskTaskList);
          //Setting the segment widgetdataMap
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"};
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(BusinessLoadExistingTaskTaskList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();

      }//end of 4th if
    }//end of 3rd if
  }//end of 2nd if
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
     kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_INFO,
      //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"
      "alertTitle": "Action Required",
      //End of D005
      "yesLabel": "OK",
   "noLabel":"No",
      "message": "Please send message to indigenous business to express interest to volunteer as you currently don't have any briefs available to volunteer",
      "alertHandler": null
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
   // kony.ui.Alert({ message: "Service call failed with opstatus " + gblBusinessLoadExistingTaskList9.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}//end first if
}//end of fun

function getBusinessLoadExistingTaskTask99ErrorCallback (error)
{
                kony.print (" ********** Entering into getBusinessLoadExistingTaskTask99SuccessCallback ********** ");
                kony.print (" ********** Failure in getBusinessLoadExistingTaskTask99SuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert (" Failed to fetch the news. Please try again:"+JSON.stringify(error));
                kony.print (" ********** Exiting out of getBusinessLoadExistingTaskTask99SuccessCallback ********** ");
}



function setLoadExistingTaskSegData99(gblLoadExistingTaskResponse99)
{
  try
  {
  if(gblLoadExistingTaskResponse99!="undefined"&& gblLoadExistingTaskResponse99!=undefined)
    {
   // alert("InSide setLoadExistingTaskSegData99"+JSON.stringify(gblLoadExistingTaskResponse99));

 //need to map data for both open and closed tasks
// alert("m1");
  if (gblLoadExistingTaskResponse99["taskList"].length > 0) {
   // alert("if task list lengh is greater than zero");
           var id=kony.store.getItem("gblExistingBusTaskId");
    //alert("id is:"+id);
                var tempLoadExistingTaskDta99 = [];
                var len = gblLoadExistingTaskResponse99["taskList"].length;
   //alert(len);
   // if(){} need to map data for both open and closed tasks
            //  alert("Response  -----"+JSON.stringify(gblLoadExistingTaskResponse99["taskList"]));
                for (var i =0; i < len; i++)
                {


        if(gblLoadExistingTaskResponse99["taskList"][i]["TasksDTO"].taskId==id)
        {


                  var title=gblLoadExistingTaskResponse99["taskList"][i]["TasksDTO"].title ;
                  var details= gblLoadExistingTaskResponse99["taskList"][i]["TasksDTO"].details;
                   var startDate=gblLoadExistingTaskResponse99["taskList"][i]["TasksDTO"].start_date;
           if(startDate==="null"||startDate===null||startDate==="")
            {
              startDate="";
            }
                   var endDate=gblLoadExistingTaskResponse99["taskList"][i]["TasksDTO"].end_date;
           if(endDate==="null"||endDate===null||endDate==="")
            {
              endDate="";
            }
            var hoursRequired=gblLoadExistingTaskResponse99["taskList"][i]["TasksDTO"].hoursRequired;
            if(hoursRequired==="null"||hoursRequired===null||hoursRequired==="")
            {
              hoursRequired="";
            }
          var taskSkills=gblLoadExistingTaskResponse99["taskList"][i]["TasksDTO"].taskSkills;
           if(taskSkills==="null"||taskSkills===null||taskSkills==="")
            {
              taskSkills="";
            }

//           var tempArr=[];
//           tempArr.push(taskId);
//           tempArr.push(title);

//                  tempLoadExistingTaskDta99.push(tempArr);

               // alert("salma:"+JSON.stringify(title));
          kony.application.dismissLoadingScreen();

        }

  }
    //mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToLoadExistingTaskListBoxContainer.LoadExistingTaskListBox.masterData=tempLoadExistingTaskDta99;
//     searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.CopyTaskDetailsHdrFlex0f3d500c1413c47.CopytaskTitleTxtLbl00d04464a809647.text=title;
//      searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.CopytaskDetailsModalFlex07b7a39ce851448.CopytaskDetailsRichTxt03a00a15efa6a4f.text=details;
//         searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.CopystartDateModalFlex0fc1d242a7af241. CopystartDateTxt0d14d1fdc6f0347.text=startDate;
//      searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.CopyendDateFlexModal0396264f5cd9e4a.CopyendDateTxtLbl00f892a6f88924b.text=endDate;
   searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.TaskDetailsHdrFlex.taskTitleTxtLbl.text = title;

  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskDetailsModalFlex.taskDetailsRichTxt.text=details;
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.startDateModalFlex.startDateTxt.text=startDate;
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.endDateFlexModal.endDateTxtLbl.text=endDate;
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.taskskillsFlex.skillsTxtLbl.text=taskSkills;
  searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.hoursFlex.hoursTxtLbl.text=hoursRequired;
  }


  kony.application.dismissLoadingScreen();
  //BusinessCloseTaskService ();
  }}catch(e)
  {
    //alert("erro is:"+e);
  }
}
