//Type your code here

mobileFabricConfigurationForBusinessCloseTask = 
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
function BusinessCloseTaskService (){
 // alert("c1");
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
      if (!mobileFabricConfigurationForBusinessCloseTask.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForBusinessCloseTask();
            
      }
      else if (mobileFabricConfigurationForBusinessCloseTask.isKonySDKObjectInitialized)
      {
          getBusinessCloseTask();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForBusinessCloseTask ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessCloseTask.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessCloseTask.konysdkObject.init(mobileFabricConfigurationForBusinessCloseTask.appKey,mobileFabricConfigurationForBusinessCloseTask.appSecret,mobileFabricConfigurationForBusinessCloseTask.serviceURL,initializeMobileFabricForBusinessCloseTaskSuccess,initializeMobileFabricForBusinessCloseTaskFailure);  
      // alert(getBusinessCloseTask());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessCloseTaskSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessCloseTask.isKonySDKObjectInitialized=true;
              //  kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getBusinessCloseTask();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessCloseTaskFailure(error)
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
                mobileFabricConfigurationForBusinessCloseTask.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getBusinessCloseTask();
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

function getBusinessCloseTask()
{
  
              //  alert("inside getBusinessCloseTask");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessCloseTask.integrationObj = mobileFabricConfigurationForBusinessCloseTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessCloseTask.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessCloseTask.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
      
      var dataBusId={} ;
       dataBusId["id"]=kony.store.getItem("businessId"); //"1";//kony.store.getItem("businessId"); 
     // alert("operation name"+dataBusId["id"]);
                mobileFabricConfigurationForBusinessCloseTask.integrationObj.invokeOperation(operationName, headers, dataBusId, getBusinessCloseTaskSuccessCallback, getBusinessCloseTaskErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getBusinessCloseTaskSuccessCallback (gblBusinessCloseTaskList)
{
  
  //alert("inside getBusinessCloseTaskSuccessCallback"+JSON.stringify(gblBusinessCloseTaskList));
  // Check the opstatus for 0 meaning it worked
  if (gblBusinessCloseTaskList !== null && gblBusinessCloseTaskList.opstatus === 0){//first if
    
  if (gblBusinessCloseTaskList.taskList!=null && gblBusinessCloseTaskList.taskList!=undefined)
  {//second if
    if (gblBusinessCloseTaskList.taskList[0].TasksDTO !== null && gblBusinessCloseTaskList.taskList[0].TasksDTO!=undefined)
    {//3rd if
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblBusinessCloseTaskList.taskList.length > 0)
      {//4th if
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessCloseTaskList.BusinessCloseTaskList));
        gblCloseTaskResponse=gblBusinessCloseTaskList;
        setCloseTaskSegData(gblCloseTaskResponse);
        
        
      }//end of 4th if
    }//end of 3rd if
  }
   //end of 2nd if
    else
      {
        kony.application.dismissLoadingScreen();
        
      }
  }//end of frst if
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + BusinessCloseTaskList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}//end first if
//end of fun

function getBusinessCloseTaskErrorCallback (error)
{
                kony.print (" ********** Entering into getBusinessCloseTaskSuccessCallback ********** ");
                kony.print (" ********** Failure in getBusinessCloseTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Failed to fetch the news. Please try again. ");
                kony.print (" ********** Exiting out of getBusinessCloseTaskSuccessCallback ********** ");
}



function setCloseTaskSegData(gblCloseTaskResponse)
{
  try
  {
  if(gblCloseTaskResponse!="undefined"&& gblCloseTaskResponse!=undefined)
    {
    // alert("InSide setCloseTaskSegData"+JSON.stringify(gblCloseTaskResponse));
      
  //alert("before widget map");

mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.widgetDataMap={
  "closedTaskName":"closedTaskName",
  "closedTaskBusiness":"closedTaskBusiness",
  "detail":"detail",
  "segType":"segType",
  "startDate":"startDate",
  "endDate":"endDate",
  "contactNumber":"contactNumber",
  "sendRecommendation":"sendRecommendation",
  "closedTaskPersonProfilePic":"closedTaskPersonProfilePic",
   "volunteerId":"volunteerId",
  "businessId":"businessId",
  "taskId":"taskId",
  "taskSkills":"taskSkills",
  "totHours":"totHours"
 

};    
  
 //need to map data for both open and closed tasks
 // alert("m1");
  if (gblCloseTaskResponse["taskList"].length > 0) {
   // alert("if task list lengh is greater than zero");
                var tempCloseTaskDta = [];
                var len = gblCloseTaskResponse["taskList"].length;
  
              //alert("Response  -----"+JSON.stringify(gblCloseTaskResponse["taskList"]));   
                for (var i = len-1; i >=0; i--)
                {
                  //alert("inside closed task for");
              
             if(gblCloseTaskResponse["taskList"][i]["TasksDTO"][0]["status"]==2){
                
                   var title=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].title ;
                   var taskId=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].taskId ;
               
                   var details=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].details;
                   var startDate=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
                   var endDate=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
                   var volContactfromCloseTask=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].volunteerContact; 
                   var volunteerImagePathClose=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["volunteerImagePath"];
                   var volId=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["volunteerId"];
                   var busId=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0]["request"][0]["Request"]["businessId"];
                   var hours=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].hoursRequired;
               var totHours=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].totalHours;
                   var name=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].volunteerName;           
                 var skills=gblCloseTaskResponse["taskList"][i]["TasksDTO"][0].taskSkills; 
                  var imagepathClose = "imgseglogo.png";
                   if(volunteerImagePathClose !=null && volunteerImagePathClose!="null"){
                     imagepathClose = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerImagePathClose;
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
                                       
                        closedTaskPersonProfilePic: imagepathClose,
                        closedTaskName: title,
                        closedTaskBusiness: name,
                        segType:"close",
                        detail:details,
                        startDate:startDate,
                        endDate:endDate,
                        contactNumber:volContactfromCloseTask,
                        sendRecommendation:ENDORESE_VOLUNTEER,
                        volunteerId:volId,
                        businessId:busId,
                        hoursRequired:hours,
                    taskId:taskId,
                    taskSkills:skills,
                    totHours:totHours
                        //lblRequestId:request_id,  
                        //taskId:taskId,
                       //markAsCompleteRichText:MARK_AS_COMPLETE
                        
                    };
                  
                        tempCloseTaskDta.push(TaskData);
               //   alert(JSON.stringify(TaskData));
                
   // alert("setting"+JSON.stringify(tempCloseTaskDta));
             }

         }              
   mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.setData(tempCloseTaskDta);                 //}
mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.isVisible=true;
               kony.application.dismissLoadingScreen();
 // }
  
    }

  kony.application.dismissLoadingScreen();
  }}catch(e) 
  {
    //just to avoid undefined type error
  }
}



