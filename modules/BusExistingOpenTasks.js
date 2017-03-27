//Type your code here

mobileFabricConfigurationForBusinessBusOpenTaskExisting = 
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
function BusOpenTaskExistingService (){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
   //alert("inside the open existing task service");             
      if (!mobileFabricConfigurationForBusinessBusOpenTaskExisting.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForBusOpenTaskExisting();
            
      }
      else if (mobileFabricConfigurationForBusinessBusOpenTaskExisting.isKonySDKObjectInitialized)
      {
          getBusOpenTaskExisting();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricForBusOpenTaskExisting ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessBusOpenTaskExisting.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessBusOpenTaskExisting.konysdkObject.init(mobileFabricConfigurationForBusinessBusOpenTaskExisting.appKey,mobileFabricConfigurationForBusinessBusOpenTaskExisting.appSecret,mobileFabricConfigurationForBusinessBusOpenTaskExisting.serviceURL,initializeMobileFabricForBusOpenTaskExistingSuccess,initializeMobileFabricForBusOpenTaskExistingFailure);  
      // alert(getBusOpenTaskExisting());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusOpenTaskExistingSuccess(response)
{//alert("mf Success"); 
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessBusOpenTaskExisting.isKonySDKObjectInitialized=true;
              //  kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getBusOpenTaskExisting();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusOpenTaskExistingFailure(error)
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
                mobileFabricConfigurationForBusinessBusOpenTaskExisting.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getBusOpenTaskExisting();
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

function getBusOpenTaskExisting()
{
  
           //   alert("inside getBusOpenTaskExisting");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessBusOpenTaskExisting.integrationObj = mobileFabricConfigurationForBusinessBusOpenTaskExisting.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessBusOpenTaskExisting.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessBusOpenTaskExisting.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
      
      var dataBusIdForOpenTask={} ;
       dataBusIdForOpenTask["id"]=kony.store.getItem("businessId"); //"1";//kony.store.getItem("businessId"); 
    //  alert("operation name"+dataBusIdForOpenTask["id"]);
                mobileFabricConfigurationForBusinessBusOpenTaskExisting.integrationObj.invokeOperation(operationName, headers, dataBusIdForOpenTask, getBusOpenTaskExistingSuccessCallback, getBusOpenTaskExistingErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getBusOpenTaskExistingSuccessCallback (gblBusOpenTaskExistingList)
{
  
 // alert("inside getBusOpenTaskExistingSuccessCallback"+JSON.stringify(gblBusOpenTaskExistingList));
  // Check the opstatus for 0 meaning it worked
  if (gblBusOpenTaskExistingList !== null && gblBusOpenTaskExistingList.opstatus === 0){//first if
    
  if (gblBusOpenTaskExistingList.taskList!=null && gblBusOpenTaskExistingList.taskList!=undefined)
  {//second if
    if (gblBusOpenTaskExistingList.taskList[0].TasksDTO !== null && gblBusOpenTaskExistingList.taskList[0].TasksDTO!=undefined)
    {//3rd if
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblBusOpenTaskExistingList.taskList.length > 0)
      {//4th if
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblBusOpenTaskExistingList.BusinessBusOpenTaskExistingList));
        gblExistingTaskResponse=gblBusOpenTaskExistingList;
        getExistingBusOpenTaskData(gblExistingTaskResponse);
        // var gblExistingTaskResponse=JSON.stringify(BusinessBusOpenTaskExistingList);
          //Setting the segment widgetdataMap 
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(BusinessBusOpenTaskExistingList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();
        
      }//end of 4th if
    }//end of 3rd if
  }//end of 2nd if
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    //kony.ui.Alert({ message: "Service call failed with opstatus " + gblBusOpenTaskExistingList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}//end first if
}//end of fun

function getBusOpenTaskExistingErrorCallback (error)
{
                kony.print (" ********** Entering into getBusOpenTaskExistingSuccessCallback ********** ");
                kony.print (" ********** Failure in getBusOpenTaskExistingSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Failed to fetch the news. Please try again. ");
                kony.print (" ********** Exiting out of getBusOpenTaskExistingSuccessCallback ********** ");
}



function getExistingBusOpenTaskData(gblExistingTaskResponse)
{
  try
  {
  if(gblExistingTaskResponse!="undefined"&& gblExistingTaskResponse!=undefined)
    {
   // alert("InSide getExistingBusOpenTaskData"+JSON.stringify(gblExistingTaskResponse));
      
  if (gblExistingTaskResponse["taskList"].length > 0) {
   // alert("if task list lengh is greater than zero");
                var tempTaskDta = [];
    var data=[];
                var len = gblExistingTaskResponse["taskList"].length;
   
    //alert("if task list lengh is greater than zero");
                var tempBusExistingOpenTask = [];
  // alert(len);
   // if(){} need to map data for both open and closed tasks
             //alert("Response  -----"+JSON.stringify(gblExistingOpenTaskResp["taskList"]));  
    var tempArray=[];
          tempArray.push("");
          tempArray.push("Select");
    tempBusExistingOpenTask.push(tempArray);
    
    
                for (var i =0; i < len; i++)
                {
           if((gblExistingTaskResponse["taskList"][i]["TasksDTO"]["status"]==1)||(gblExistingTaskResponse["taskList"][i]["TasksDTO"]["status"]==100))
    {
      var id=gblExistingTaskResponse["taskList"][i]["TasksDTO"]["taskId"];
      var taskName=gblExistingTaskResponse["taskList"][i]["TasksDTO"]["title"];
      
      
       var tempArr1=[];
       tempArr1.push(id);
       tempArr1.push(taskName);
          //alert("title:"+title);
          
                 tempBusExistingOpenTask.push(tempArr1);
                 
             //  alert("tempBusExistingOpenTask"+JSON.stringify(tempBusExistingOpenTask));
             kony.application.dismissLoadingScreen();
               
        }       
                  
                  
   
  }
     searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.AssignExistingTaskContainer.assignToExistingTaskListBoxContainer.existingOpenTasksListBox.masterData=tempBusExistingOpenTask;
  
    }

  kony.application.dismissLoadingScreen();
     
  
  }}catch(e) 
  {
    //just to avoid undefined type error
  }
}


