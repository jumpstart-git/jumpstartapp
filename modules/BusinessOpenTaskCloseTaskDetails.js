//Type your code here

mobileFabricConfigurationForBusinessOpenCloseTask =
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
                                                                service:"GetMyActivityOpenTasks",
                                                                operations:["getOpenTaskByBusinessId"]
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
function BusinessOpenCloseTaskService (){
kony.application.showLoadingScreen(null, "Loading..",
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
shouldShowLabelInBottom: "false", separatorHeight: 20} );
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
      if (!mobileFabricConfigurationForBusinessOpenCloseTask.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForBusinessOpenCloseTask();

      }
      else if (mobileFabricConfigurationForBusinessOpenCloseTask.isKonySDKObjectInitialized)
      {
          getBusinessOpenCloseTask();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForBusinessOpenCloseTask ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessOpenCloseTask.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessOpenCloseTask.konysdkObject.init(mobileFabricConfigurationForBusinessOpenCloseTask.appKey,mobileFabricConfigurationForBusinessOpenCloseTask.appSecret,mobileFabricConfigurationForBusinessOpenCloseTask.serviceURL,initializeMobileFabricForBusinessOpenCloseTaskSuccess,initializeMobileFabricForBusinessOpenCloseTaskFailure);
      // alert(getBusinessOpenCloseTask());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessOpenCloseTaskSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessOpenCloseTask.isKonySDKObjectInitialized=true;
              //  kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getBusinessOpenCloseTask();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessOpenCloseTaskFailure(error)
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
                mobileFabricConfigurationForBusinessOpenCloseTask.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getBusinessOpenCloseTask();
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

function getBusinessOpenCloseTask()
{

              //  alert("inside getBusinessOpenCloseTask");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessOpenCloseTask.integrationObj = mobileFabricConfigurationForBusinessOpenCloseTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessOpenCloseTask.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessOpenCloseTask.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }


      var dataBusId={} ;
       dataBusId["id"]=kony.store.getItem("businessId"); //"1";//kony.store.getItem("businessId");
    //  alert("operation name"+dataBusId["id"]);
                mobileFabricConfigurationForBusinessOpenCloseTask.integrationObj.invokeOperation(operationName, headers, dataBusId, getBusinessOpenCloseTaskSuccessCallback, getBusinessOpenCloseTaskErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");
}

function getBusinessOpenCloseTaskSuccessCallback (gblBusinessOpenCloseTaskList)
{
   kony.application.dismissLoadingScreen();
  //BusinessCloseTaskService ();
 // alert("inside getBusinessOpenCloseTaskSuccessCallback"+JSON.stringify(gblBusinessOpenCloseTaskList));
  // Check the opstatus for 0 meaning it worked
  if (gblBusinessOpenCloseTaskList !== null && gblBusinessOpenCloseTaskList.opstatus === 0){//first if

  if (gblBusinessOpenCloseTaskList.taskList!=null && gblBusinessOpenCloseTaskList.taskList!=undefined)
  {//second if
    BusinessCloseTaskService ();
    if (gblBusinessOpenCloseTaskList.taskList[0].TasksDTO !== null && gblBusinessOpenCloseTaskList.taskList[0].TasksDTO!=undefined)
    {//3rd if
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblBusinessOpenCloseTaskList.taskList.length > 0)
      {//4th if
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessOpenCloseTaskList.BusinessOpenCloseTaskList));
        gblTaskResponse=gblBusinessOpenCloseTaskList;
        setTaskSegData(gblTaskResponse);
        // var gblTaskResponse=JSON.stringify(BusinessOpenCloseTaskList);
          //Setting the segment widgetdataMap
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"};
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(BusinessOpenCloseTaskList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();

      }//end of 4th if
    }//end of 3rd if
  }//end of 2nd if
    else
      {
       // alert("from else");
        BusinessCloseTaskService();
      }
  }
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    //kony.ui.Alert({ message: "Service call failed with opstatus " + gblBusinessOpenCloseTaskList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
//end first if
}//end of fun

function getBusinessOpenCloseTaskErrorCallback (error)
{
                kony.print (" ********** Entering into getBusinessOpenCloseTaskSuccessCallback ********** ");
                kony.print (" ********** Failure in getBusinessOpenCloseTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Failed to fetch the news. Please try again. ");
                kony.print (" ********** Exiting out of getBusinessOpenCloseTaskSuccessCallback ********** ");
}



function setTaskSegData(gblTaskResponse)
{
  try
  {
  if(gblTaskResponse!="undefined"&& gblTaskResponse!=undefined)
    {
    // alert("InSide setTaskSegData"+JSON.stringify(gblTaskResponse));


// alert("InSide"+JSON.stringify(gblTaskResponse));
mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.widgetDataMap={
          "openTaskPersonProfilePic":"openTaskPersonProfilePic",
            "openTaskName": "openTaskName",
            "openTaskBusiness": "openTaskBusiness",
            "taskId": "taskId",
            "markAsCompleteRichText":"markAsCompleteRichText",
            "lblRequestId":"lblRequestId",
            "taskDetails":"taskDetails",
            "startDate":"startDate",
            "endDate":"endDate",
            "contactNumber":"contactNumber",
            "segType":"segType",
            "volunteerId":"volunteerId",
            "businessId":"businessId",
            "hoursRequired":"hoursRequired",
  "taskSkills":"taskSkills",
  "totHours":"totHours"
        };
mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.widgetDataMap={
  "taskName":"taskName",
  "profilePic":"profilePic",
  "TaskBusOrVolName":"TaskBusOrVolName",
  "taskId":"taskId",
  "notAssigned":"notAssigned",
  "createdDate":"createdDate",
  "lblDate":"lblDate",
  "taskReqId":"taskReqId",
  "markAsCompleteRichText":"markAsCompleteRichText",
  "editRichText":"editRichText",
  "closeRichText":"closeRichText"
};


  if (gblTaskResponse["taskList"].length > 0) {
   // alert("if task list lengh is greater than zero");
                var tempTaskDta = [];
    var data=[];
                var len = gblTaskResponse["taskList"].length;

//                 for (var i =0; i < len; i++)
//                 {
    for (var i = len-1; i >=0; i--) {
           if(gblTaskResponse["taskList"][i]["TasksDTO"][0]["status"]==100)
    {

       var busName=gblTaskResponse["taskList"][i]["TasksDTO"][0].businessName;
      var oppTaskId=gblTaskResponse["taskList"][i]["TasksDTO"][0].taskId;
       var time1=gblTaskResponse["taskList"][i]["TasksDTO"][0].messageTime;
       var createdDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].created_date;
       var title=gblTaskResponse["taskList"][i]["TasksDTO"][0].title;
       var details=gblTaskResponse["taskList"][i]["TasksDTO"][0].details;
       var startDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
       var endDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].end_date;

      if(title==null||title=="null"||title=="")
        {
          title="";
        }
       if(details==null||details=="null"||details=="")
        {
          details="";
        }
       if(startDate==null||startDate=="null"||startDate=="")
        {
          startDate="";
        }
       if(endDate==null||endDate=="null"||endDate=="")
        {
          endDate="";
        }
      var img=kony.store.getItem("imgUrlBusiness");

      var monthNames = [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                  ];
             var dayNames = [
              "Sunday", "Monday", "Tuesday",
              "Wednesday", "Thursday", "Friday", "Saturday"
            ];

            var date = new Date(time1);
            var day = date.getDate();
            var dayweekIndex = date.getDay();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var notificationStr = dayNames[dayweekIndex] + ', ' +day + ' ' + monthNames[monthIndex] + ' ' + year+ ' '+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


      var  dataTemp = {
                      taskName:title,
                      profilePic:img,
                      TaskBusOrVolName:"",
                      taskId :oppTaskId,
                      notAssigned:"not assigned",
                      createdDate:"",
                      lblDate:notificationStr,
                      taskReqId:"",
                      markAsCompleteRichText:"",
                      editRichText:EDIT,
                      closeRichText:CLOSE

                    };

      data.push(dataTemp);
     // alert("s1");
      mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.setData(data);
      mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.isVisible=true;
    }

    else if(gblTaskResponse["taskList"][i]["TasksDTO"][0]["status"]==1)
        {

                 var title=gblTaskResponse["taskList"][i]["TasksDTO"][0].title ;

                  var request_id=gblTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["request_id"];
                  var volunteerImagePathOpen=gblTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["volunteerImagePath"];
                  var taskId=gblTaskResponse["taskList"][i]["TasksDTO"][0].taskId;
                  var volunteerName=gblTaskResponse["taskList"][i]["TasksDTO"][0].volunteerName;
                  var hours=gblTaskResponse["taskList"][i]["TasksDTO"][0].hoursRequired;
                  var name=gblTaskResponse["taskList"][i]["TasksDTO"][0].volunteerName;
                  var details=gblTaskResponse["taskList"][i]["TasksDTO"][0].details;
          		    var totHours=gblTaskResponse["taskList"][i]["TasksDTO"][0].totalHours;
                  var startDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
                  var endDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                  var volContactfromOpenTask=gblTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["volunteerContact"];
                  var volId=gblTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["volunteerId"];
                  var busId=gblTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["businessId"];
                  var skills=gblTaskResponse["taskList"][i]["TasksDTO"][0].taskSkills;
                  var imagepathOpen = "imgseglogo.png";
                   if(volunteerImagePathOpen !=null && volunteerImagePathOpen!="null"){
                     imagepathOpen = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerImagePathOpen;
                   }



          if(title==null||title=="null"||title=="")
        {
          title="";
        }

          if(details==null||details=="null"||details=="")
        {
          details="";
        }

          if(skills==null||skills=="null"||skills=="")
        {
          skills="";
        }

          if(startDate==null||startDate=="null"||startDate=="")
        {
          startDate="";
        }

          if(endDate==null||endDate=="null"||endDate=="")
        {
          endDate="";
        }

          if(hours==null||hours=="null"||hours=="")
        {
          hours="";
        }
                  var TaskData = {

                        openTaskPersonProfilePic:imagepathOpen,// "imgseglogo.png",
                        openTaskName: title,
                        openTaskBusiness: name,
                        lblRequestId:request_id,
                        taskId:taskId,
                        taskDetails:details,
                        startDate:startDate,
                        endDate:endDate,
                        markAsCompleteRichText:MARK_AS_COMPLETE,
                        contactNumber:volContactfromOpenTask,
                        segType:"open",
                        volunteerId:volId,
                        businessId:busId,
                        hoursRequired:hours,
                    taskSkills:skills,
                    totHours:totHours

                    };

                        tempTaskDta.push(TaskData);
               //   alert(JSON.stringify(TaskData));

   // alert("settingm"+JSON.stringify(tempTaskDta));
mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.setData(tempTaskDta);
mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.isVisible=true;
          //}
                kony.application.dismissLoadingScreen();

        }



  }
     mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.setData(data);
      mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.isVisible=true;

    }

  kony.application.dismissLoadingScreen();
     // alert("Completed Calling Open Task");

  }}catch(e)
  {
    //just to avoid undefined type error
  }
}
