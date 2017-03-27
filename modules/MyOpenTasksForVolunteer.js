//Type your code here

mobileFabricConfigurationForVolunteerOpenCloseTask = 
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
                                                                service:"VolopenTasks",
                                                                operations:["getVolOpenTasks"]
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
function VolunteerOpenCloseTaskService (){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
  
                // Let's get the news type the user selected
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
               // alert("into function1");
                // Let's first check that the user picked a valid value
                //if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      // Populating the input params for the service call and invoking the service
      // We're passing in the selected key for the user's selection in the combobox
      // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
      // Now we make the call to the service using our input parameters and specifying
      // the function processServiceResults as our callback when the service returns results
      // appmiddlewareinvokerasync(inputParams, processServiceResults);
      if (!mobileFabricConfigurationForVolunteerOpenCloseTask.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForVolunteerOpenCloseTask();
            
      }
      else if (mobileFabricConfigurationForVolunteerOpenCloseTask.isKonySDKObjectInitialized)
      {
          getVolunteerOpenCloseTask();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForVolunteerOpenCloseTask ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolunteerOpenCloseTask.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForVolunteerOpenCloseTask.konysdkObject.init(mobileFabricConfigurationForVolunteerOpenCloseTask.appKey,mobileFabricConfigurationForVolunteerOpenCloseTask.appSecret,mobileFabricConfigurationForVolunteerOpenCloseTask.serviceURL,initializeMobileFabricForVolunteerOpenCloseTaskSuccess,initializeMobileFabricForVolunteerOpenCloseTaskFailure);  
      // alert(getVolunteerOpenCloseTask());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolunteerOpenCloseTaskSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
               // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolunteerOpenCloseTask.isKonySDKObjectInitialized=true;
            //    kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getVolunteerOpenCloseTask();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolunteerOpenCloseTaskFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
                alert (" ********** Failure in initializeMobileFabric OpenCloseTaskFailure: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
                alert (" Unable to initialize the application. Please try again. ");
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
                mobileFabricConfigurationForVolunteerOpenCloseTask.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getVolunteerOpenCloseTask();
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

function getVolunteerOpenCloseTask()
{
  
                //alert("inside getVolunteerOpenCloseTask");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolunteerOpenCloseTask.integrationObj = mobileFabricConfigurationForVolunteerOpenCloseTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerOpenCloseTask.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForVolunteerOpenCloseTask.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
     // alert("operation name"+operationName);
      var dataVolOpenTasksId={} ;
       dataVolOpenTasksId["id"]=kony.store.getItem("volunteerId"); 
               //   alert("dataVolOpenTasksId"+dataVolOpenTasksId["id"]);
                mobileFabricConfigurationForVolunteerOpenCloseTask.integrationObj.invokeOperation(operationName, headers, dataVolOpenTasksId, getVolunteerOpenCloseTaskSuccessCallback, getVolunteerOpenCloseTaskErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getVolunteerOpenCloseTaskSuccessCallback (gblVolunteerOpenCloseTaskList)
{
  
 // alert("inside success"+JSON.stringify(gblVolunteerOpenCloseTaskList));
  // Check the opstatus for 0 meaning it worked
  if (gblVolunteerOpenCloseTaskList !== null && gblVolunteerOpenCloseTaskList.opstatus === 0){
    
    if (gblVolunteerOpenCloseTaskList.taskList!=null && gblVolunteerOpenCloseTaskList.taskList!=undefined)
   {
    if (gblVolunteerOpenCloseTaskList.taskList[0].TasksDTO !== null && gblVolunteerOpenCloseTaskList.taskList[0].TasksDTO!=undefined){
       // alert("2");
     // Making sure we have at least 1 article returned
      if (gblVolunteerOpenCloseTaskList.taskList.length > 0){
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblVolunteerOpenCloseTaskList.BusinessOpenCloseTaskList));
        gblVolTaskResponse=gblVolunteerOpenCloseTaskList;
        setVolTaskSegData(gblVolTaskResponse);
        // var gblVolTaskResponse=JSON.stringify(BusinessOpenCloseTaskList);
          //Setting the segment widgetdataMap 
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(BusinessOpenCloseTaskList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();
        
      }
    }
  }
  }
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + BusinessOpenCloseTaskList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
    kony.application.dismissLoadingScreen();
}

function getVolunteerOpenCloseTaskErrorCallback (error)
{
                kony.print (" ********** Entering into getVolunteerOpenCloseTaskSuccessCallback ********** ");
                kony.print (" ********** Failure in getVolunteerOpenCloseTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
                //alert (" Failed to fetch the news. Please try again. ");
                kony.print (" ********** Exiting out of getVolunteerOpenCloseTaskSuccessCallback ********** ");
}



function setVolTaskSegData(gblVolTaskResponse)
{
 try{
  if(gblVolTaskResponse!="undefined"&& gblVolTaskResponse!=undefined)
    {
     // alert("InSide"+JSON.stringify(gblVolTaskResponse));
      
  
 // alert("InSide"+JSON.stringify(gblVolTaskResponse));
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
  "hoursArray":"hoursArray"	,
  "totHours":"totHours",
  "outHours":"outHours",
  "busHours":"busHours",
  "taskSkills":"taskSkills"
  
  
        };
// mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.widgetDataMap={
//    "closedTaskName":"closedTaskName",
//    "closedTaskBusiness":"closedTaskBusiness"
// };    
  
 //need to map data for both open and closed tasks
  
  if (gblVolTaskResponse["taskList"].length > 0) {
                var tempVolTaskDta = [];
                var len = gblVolTaskResponse["taskList"].length;
   // if(){} need to map data for both open and closed tasks
                
                for (var i = 0; i < len; i++) {
                  
   if(gblVolTaskResponse["taskList"][i]["TasksDTO"][0].status==1) {

                 // alert("f1");
                  var title=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].title ;
     var totHours=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].totalHours ;
     var outBusHours=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].outBusHours ;
      var busHours=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].busHours ;
                  var details1=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].details;
                  var startDate1=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
                  var endDate1=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                  var hours=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].hoursRequired;
      var skills=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].taskSkills;
      
      if(title==null||title=="null"||title=="")
        {
          title="";
        }
       if(details1==null||details1=="null"||details1=="")
        {
          details1="";
        }
       if(startDate1==null||startDate1=="null"||startDate1=="")
        {
          startDate1="";
        }
       if(endDate1==null||endDate1=="null"||endDate1=="")
        {
          endDate1="";
        }
                 var request_id=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].taskId ;
                 // var name=gblVolTaskResponse["taskList"][i]["TasksDTO"]["request"]["Request"].businessName;
                    //  alert("f44");
                  var name=gblVolTaskResponse["taskList"][i]["TasksDTO"][0].businessName;
                var volunteerImagePathOpen1=gblVolTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessImagePath;
                var volOpenTaskBusinessContact=gblVolTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessContact; 
       var volId=gblVolTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].volunteerId; 
       var busId=gblVolTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessId; 
         var hoursArrayVal=  gblVolTaskResponse["taskList"][i]["TasksDTO"][0].taskHoursList;         
     var imagepathOpen1 = "imgseglogo.png";
                   if(volunteerImagePathOpen1 !=null && volunteerImagePathOpen1!="null"){
                     imagepathOpen1 = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerImagePathOpen1;
                   }
                  
                          var textVolTaskData = {
                        openTaskPersonProfilePic:imagepathOpen1,// "imgseglogo.png",
                        openTaskName: title,
                        openTaskBusiness: name,
                         lblRequestId:request_id,
                        markAsCompleteRichText:"",
                         taskDetails:details1,
                          startDate:startDate1,
                          endDate:endDate1,
                            contactNumber:volOpenTaskBusinessContact,
                            segType:"open",
                            volunteerId:volId,
                            businessId:busId,
                            hoursRequired:hours,
                             hoursArray:hoursArrayVal,
                             totHours:totHours,
                            outHours:outBusHours,
                            busHours:busHours,
                            taskSkills:skills
                    };
                 tempVolTaskDta.push(textVolTaskData);
                 
                }
    
    mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.setData(tempVolTaskDta);
    mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.isVisible=true;
                  kony.application.dismissLoadingScreen();
   
  }
  
    }

  VolCloseTaskService();
 }
 }
  
  catch(e)
   {
     
     alert("the err="+e);
     kony.application.dismissLoadingScreen();
   }
   kony.application.dismissLoadingScreen();
}




