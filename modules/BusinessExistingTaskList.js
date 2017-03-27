var gblExistingTaskId;//Type your code here

mobileFabricConfigurationForBusinessExistingTaskTask = 
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
function BusinessExistingTaskTaskService (){
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
      if (!mobileFabricConfigurationForBusinessExistingTaskTask.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForBusinessExistingTaskTask();
            
      }
      else if (mobileFabricConfigurationForBusinessExistingTaskTask.isKonySDKObjectInitialized)
      {
          getBusinessExistingTaskTask();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForBusinessExistingTaskTask ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessExistingTaskTask.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessExistingTaskTask.konysdkObject.init(mobileFabricConfigurationForBusinessExistingTaskTask.appKey,mobileFabricConfigurationForBusinessExistingTaskTask.appSecret,mobileFabricConfigurationForBusinessExistingTaskTask.serviceURL,initializeMobileFabricForBusinessExistingTaskTaskSuccess,initializeMobileFabricForBusinessExistingTaskTaskFailure);  
      // alert(getBusinessExistingTaskTask());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessExistingTaskTaskSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessExistingTaskTask.isKonySDKObjectInitialized=true;
              //  kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getBusinessExistingTaskTask();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessExistingTaskTaskFailure(error)
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
                mobileFabricConfigurationForBusinessExistingTaskTask.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getBusinessExistingTaskTask();
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

function getBusinessExistingTaskTask()
{
  
              //  alert("inside getBusinessExistingTaskTask");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessExistingTaskTask.integrationObj = mobileFabricConfigurationForBusinessExistingTaskTask.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessExistingTaskTask.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessExistingTaskTask.integrationServices[0].operations[0];
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
                mobileFabricConfigurationForBusinessExistingTaskTask.integrationObj.invokeOperation(operationName, headers, dataBusId, getBusinessExistingTaskTaskSuccessCallback, getBusinessExistingTaskTaskErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getBusinessExistingTaskTaskSuccessCallback (gblBusinessExistingTaskTaskList)
{
  
 // alert("inside getBusinessExistingTaskTaskSuccessCallback"+JSON.stringify(gblBusinessExistingTaskTaskList));
  // Check the opstatus for 0 meaning it worked
  if (gblBusinessExistingTaskTaskList !== null && gblBusinessExistingTaskTaskList.opstatus === 0){//first if
    
  if (gblBusinessExistingTaskTaskList.taskList!=null && gblBusinessExistingTaskTaskList.taskList!=undefined)
  {//second if
    if (gblBusinessExistingTaskTaskList.taskList[0].TasksDTO !== null && gblBusinessExistingTaskTaskList.taskList[0].TasksDTO!=undefined)
    {//3rd if
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblBusinessExistingTaskTaskList.taskList.length > 0)
      {//4th if
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessExistingTaskTaskList.BusinessExistingTaskTaskList));
        gblExistingTaskResponse=gblBusinessExistingTaskTaskList;
        setExistingTaskSegData(gblExistingTaskResponse);
        // var gblExistingTaskResponse=JSON.stringify(BusinessExistingTaskTaskList);
          //Setting the segment widgetdataMap 
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(BusinessExistingTaskTaskList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();
        
      }//end of 4th if
    }//end of 3rd if
  }//end of 2nd if
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + BusinessExistingTaskTaskList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}//end first if
}//end of fun

function getBusinessExistingTaskTaskErrorCallback (error)
{
                kony.print (" ********** Entering into getBusinessExistingTaskTaskSuccessCallback ********** ");
                kony.print (" ********** Failure in getBusinessExistingTaskTaskSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Failed to fetch the news. Please try again. ");
                kony.print (" ********** Exiting out of getBusinessExistingTaskTaskSuccessCallback ********** ");
}



function setExistingTaskSegData(gblExistingTaskResponse)
{
  try
  {
  if(gblExistingTaskResponse!="undefined"&& gblExistingTaskResponse!=undefined)
    {
    // alert("InSide setExistingTaskSegData"+JSON.stringify(gblExistingTaskResponse));
      
 //need to map data for both open and closed tasks
 // alert("m1");
  if (gblExistingTaskResponse["taskList"].length > 0) {
   // alert("if task list lengh is greater than zero");
                var tempExistingTaskDta = [];
                var len = gblExistingTaskResponse["taskList"].length;
   //alert(len);
   // if(){} need to map data for both open and closed tasks
            //  alert("Response  -----"+JSON.stringify(gblExistingTaskResponse["taskList"]));  
    var tempArray=[];
          tempArray.push("");
          tempArray.push("Select");
    tempExistingTaskDta.push(tempArray);
                for (var i =0; i < len; i++)
                {
                  
              
        if(gblExistingTaskResponse["taskList"][i]["TasksDTO"][0]["status"]==1)
        {
                
         
                  var title=gblExistingTaskResponse["taskList"][i]["TasksDTO"][0].title ;
                  var taskId=gblExistingTaskResponse["taskList"][i]["TasksDTO"][0].taskId ;
              //    var startDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].start_date;
              //    var endDate=gblTaskResponse["taskList"][i]["TasksDTO"][0].end_date;
          var tempArr=[];
          tempArr.push(taskId);
          tempArr.push(title);
          
                 tempExistingTaskDta.push(tempArr);
                 
                alert(JSON.stringify(tempExistingTaskDta));
          kony.application.dismissLoadingScreen();
               
        }              
   
  }
    mainPage.startEngagementModalContainer.startEngagementModalHeader.startEngagmentHeaderAssignToTask.assignToExistingTaskListBoxContainer.existingTaskListBox.masterData=tempExistingTaskDta;
    //alert("After Data mapping");
    
    }

  kony.application.dismissLoadingScreen();
  //BusinessCloseTaskService ();  
  }}catch(e) 
  {
    //just to avoid undefined type error
  }
}




