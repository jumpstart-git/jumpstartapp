//Type your code here

mobileFabricConfigurationVolCloseTask = 
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
function VolCloseTaskService (){
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
      if (!mobileFabricConfigurationVolCloseTask.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForVolCloseTask();
            
      }
      else if (mobileFabricConfigurationVolCloseTask.isKonySDKObjectInitialized)
      {
          getVolCloseTask();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForVolCloseTask ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationVolCloseTask.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationVolCloseTask.konysdkObject.init(mobileFabricConfigurationVolCloseTask.appKey,mobileFabricConfigurationVolCloseTask.appSecret,mobileFabricConfigurationVolCloseTask.serviceURL,initializeMobileFabricForVolCloseTaskSuccess,initializeMobileFabricForVolCloseTaskFailure);  
      // alert(getVolCloseTask());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForVolCloseTaskSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationVolCloseTask.isKonySDKObjectInitialized=true;
              //  kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getVolCloseTask();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForVolCloseTaskFailure(error)
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
                mobileFabricConfigurationVolCloseTask.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getVolCloseTask();
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

function getVolCloseTask()
{
  
              //  alert("inside getVolCloseTask");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationVolCloseTask.integrationObj = mobileFabricConfigurationVolCloseTask.konysdkObject.getIntegrationService(mobileFabricConfigurationVolCloseTask.integrationServices[0].service);
                var operationName = mobileFabricConfigurationVolCloseTask.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
      var dataVolCloseTasksId={} ;
       dataVolCloseTasksId["id"]=kony.store.getItem("volunteerId"); 
//       var dataBusId={};
//        dataBusId["id"]=kony.store.getItem("businessId"); //"1";//kony.store.getItem("businessId"); 
    //  alert("operation name"+dataBusId["id"]);
                mobileFabricConfigurationVolCloseTask.integrationObj.invokeOperation(operationName, headers, dataVolCloseTasksId, getVolCloseTaskSuccessCallback, getVolCloseTaskErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getVolCloseTaskSuccessCallback (gbVolCloseTaskList)
{
  
 // alert("inside getVolCloseTaskSuccessCallback"+JSON.stringify(gbVolCloseTaskList));
  // Check the opstatus for 0 meaning it worked
  if (gbVolCloseTaskList !== null && gbVolCloseTaskList.opstatus === 0){//first if
    
  if (gbVolCloseTaskList.taskList!=null && gbVolCloseTaskList.taskList!=undefined)
  {//second if
    if (gbVolCloseTaskList.taskList[0].TasksDTO !== null && gbVolCloseTaskList.taskList[0].TasksDTO!=undefined)
    {//3rd if
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gbVolCloseTaskList.taskList.length > 0)
      {//4th if
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gbVolCloseTaskList.BusinessCloseTaskList));
        gblVolCloseTaskResponse=gbVolCloseTaskList;
        setVolCloseTaskSegData(gblVolCloseTaskResponse);
        // var gblVolCloseTaskResponse=JSON.stringify(BusinessCloseTaskList);
          //Setting the segment widgetdataMap 
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(BusinessCloseTaskList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();
        
      }//end of 4th if
    }//end of 3rd if
  }//end of 2nd if
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + BusinessCloseTaskList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}//end first if
}//end of fun

function getVolCloseTaskErrorCallback (error)
{
                kony.print (" ********** Entering into getVolCloseTaskSuccessCallback ********** ");
                kony.print (" ********** Failure in getVolCloseTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Failed to fetch the news. Please try again. ");
                kony.print (" ********** Exiting out of getVolCloseTaskSuccessCallback ********** ");
}



function setVolCloseTaskSegData(gblVolCloseTaskResponse)
{
  //alert("inside set data closed tasks");
  try
  {
  if(gblVolCloseTaskResponse!="undefined"&& gblVolCloseTaskResponse!=undefined)
    {
   // alert("InSide setVolCloseTaskSegData"+JSON.stringify(gblVolCloseTaskResponse));
      
  //alert("before widget map");

mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.widgetDataMap={
   "closedTaskName":"closedTaskName",
  
   "closedTaskBusiness":"closedTaskBusiness",
  "closedTaskPersonProfilePic":"closedTaskPersonProfilePic",
  "sendRecommendation":"sendRecommendation",
  "taskId":"taskId",
  //"lblRequestId":"lblRequestId",
  "businessId":"businessId",
  "segType":"segType",
  "detail":"detail",
  "startDate":"startDate",
  "endDate":"endDate",
  "contactNumber":"contactNumber",
  "volunteerId":"volunteerId",
  "businessId":"businessId",
  "hoursRequired":"hoursRequired",
  "taskSkills":"taskSkills",
  "totHours":"totHours"

};    
  
 //need to map data for both open and closed tasks
// alert("m1");
  if (gblVolCloseTaskResponse["taskList"].length > 0) {
  // alert("if task list lengh is greater than zero");
                var tempCloseVolTaskDta = [];
                var len = gblVolCloseTaskResponse["taskList"].length;
    //alert(len);
   // if(){} need to map data for both open and closed tasks
              //alert("Response  -----"+JSON.stringify(gblVolCloseTaskResponse["taskList"]));   
                for (var i = len-1; i >=0; i--)
                {
                  //alert("inside closed task for");
              
             if(gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0]["status"]==2){
                
                   var title=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].title ;
               // var requestId=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"][0].request_id;
               // var request_id=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["request_id"];
                //alert(request_id);
                 var taskId=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].taskId;
               
                  var name=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].businessName;
                     var businesId=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].businessId;
               var hours=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].hoursRequired;
                var totHours=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].totalHours;
               var skills=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].taskSkills;
               var volunteerImagePathClose1=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessImagePath;
               var details1=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].details;
                  var startDate1=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
                  var endDate1=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                
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
               var busContactfromCloseTask=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessContact; 
               var volId=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].volunteerId; 
               var busId=gblVolCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessId; 
               
               var imagepathClose1 = "imgseglogo.png";
                   if(volunteerImagePathClose1 !=null && volunteerImagePathClose1!="null"){
                     imagepathClose1 = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerImagePathClose1;
                   }
               
               var ClosedTaskData = {
                                       
                        closedTaskPersonProfilePic: imagepathClose1,//"imgseglogo.png",
                        closedTaskName: title,
                        closedTaskBusiness: name,
                        sendRecommendation:SEND_RECOMMENDATION,
                        taskId: taskId,
                        //lblRequestId:request_id,
                        businessId:businesId,
                        segType:"close",
                        detail:details1,
                        startDate:startDate1,
                        endDate:endDate1,
                        contactNumber:busContactfromCloseTask,
                        volunteerId:volId,
                        businessId:busId,
                        hoursRequired:hours,
                 		taskSkills:skills,
                 totHours:totHours
                        //lblRequestId:request_id,  
                        //taskId:taskId,
                       //markAsCompleteRichText:MARK_AS_COMPLETE
                        
                    };
                  
             //  alert("closedtaskdata:"+JSON.stringify(ClosedTaskData));        
               tempCloseVolTaskDta.push(ClosedTaskData);
               
                
    //alert("setting"+JSON.stringify(tempCloseVolTaskDta));

mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.setData(tempCloseVolTaskDta);                 //}

mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.isVisible=true;   
               kony.application.dismissLoadingScreen();
               
          
         }              
   
  }
  
    }

  kony.application.dismissLoadingScreen();
    
  }}catch(e) 
  {
    //just to avoid undefined type error
  }
      
}


