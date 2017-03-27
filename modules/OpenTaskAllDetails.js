var gblOpenTaskDetailsVal;
mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9={
appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
                                
  //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
//appSecret:"c600a59925b36419de1546056cd21557", 
//serviceURL:"https://100000507.auth.konycloud.com/appconfig",
  integrationServices: 
[
{
service:"VolGetTasks",
operations:["getTasksForVolunteer"]
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
function OpenTaskDetailsForVolunteer9(){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
// alert ("inside taskdEtials");
// getOpenOpenTaskDetailsForVolunteer9SuccessCallback (gblOpenOpenTaskDetailsForVolunteer9);
// Let's get the news type the user selected
//var selectedKey = frmFoxNews.lstNewsType.selectedKey;

// Let's first check that the user picked a valid value
//if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      // Populating the input params for the service call and invoking the service
      // We're passing in the selected key for the user's selection in the combobox
      // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
      // Now we make the call to the service using our input parameters and specifying
      // the function processServiceResults as our callback when the service returns results
      // appmiddlewareinvokerasync(inputParams, processServiceResults);
    if (!mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.isKonySDKObjectInitialized)
      {
initializeMobileFabricForOpenOpenTaskDetailsForVolunteer9();
            
      }
      else if (mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.isKonySDKObjectInitialized)
      {
          getOpenOpenTaskDetailsForVolunteer9 ();
      }
}
// else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
// }
//}


function initializeMobileFabricForOpenOpenTaskDetailsForVolunteer9 ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.konysdkObject = new kony.sdk();
mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.konysdkObject.init(mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.appKey,mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.appSecret,mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.serviceURL,mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9Success,mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9Failure);  
      // alert(getOpenOpenTaskDetailsForVolunteer9 ());
    }
else
alert ("Network unavailable. Please check your network settings. ");
kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}


function mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9Success(response)
{
kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
//alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.isKonySDKObjectInitialized=true;
kony.application.dismissLoadingScreen();
//authenticateMFUsingUserStore();
     getOpenOpenTaskDetailsForVolunteer9 ();
kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}


function mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9Failure(error)
{
kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
//alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
kony.application.dismissLoadingScreen();
//alert (" Unable to initialize the application. Please try again. ");
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
  // alert (" ********** Entering into loginMFSuccess ********** ");
  // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.isMFAuthenticated = true;
kony.application.dismissLoadingScreen();
getOpenOpenTaskDetailsForVolunteer9 ();
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


function getOpenOpenTaskDetailsForVolunteer9 ()
{
  
  //alert("inside getOpenOpenTaskDetailsForVolunteer9 ");
//var selectedKey = frmFoxNews.lstNewsType.selectedKey;
if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
//kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.integrationObj = mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.konysdkObject.getIntegrationService(mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.integrationServices[0].service);
      var operationName = mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.integrationServices[0].operations[0];
var headers= {};
// if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
// data= {"newsType": selectedKey};
//         }else{
// // The user didn't pick a value so we'll show the alert
//    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
     // alert("operation name"+operationName);
       var data={};
  data["id"]= kony.store.getItem("volunteerId");
  //alert("dat of id :"+data["id"]);
    mobileFabricConfigurationForOpenOpenTaskDetailsForVolunteer9.integrationObj.invokeOperation(operationName, headers, data, getOpenOpenTaskDetailsForVolunteer9SuccessCallback,getOpenOpenTaskDetailsForVolunteer9ErrorCallback);
}
else
alert ("Network unavailable. Please check your network settings. ");  
}


function getOpenOpenTaskDetailsForVolunteer9SuccessCallback (gblOpenOpenTaskDetailsForVolunteer9)
{
  
  //alert("inside success"+JSON.stringify(gblOpenOpenTaskDetailsForVolunteer9 ));
  // Check the opstatus for 0 meaning it worked
  if (gblOpenOpenTaskDetailsForVolunteer9  !== null && gblOpenOpenTaskDetailsForVolunteer9 .opstatus === 0){
    
   // alert("1");
    // Checking to make sure we DO have results
    if (gblOpenOpenTaskDetailsForVolunteer9.taskobj[0].taskList[0].TasksDTO !== null){
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblOpenOpenTaskDetailsForVolunteer9.taskobj[0].taskList.length > 0){
        // Now we know we have results so we'll print them out to check
    //    alert ("########## Response received from service call: "+JSON.stringify(gblOpenOpenTaskDetailsForVolunteer9));
        gblOpenOpenTaskDetailsForVolunteer9Response=gblOpenOpenTaskDetailsForVolunteer9 ;
        setOpenTaskDetailsForVolunteer9Data(gblOpenOpenTaskDetailsForVolunteer9Response);
        
        
      }
    }
  }
  else{
kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + OpenTaskDetailsForVolunteer9 .opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}


function getOpenOpenTaskDetailsForVolunteer9ErrorCallback (error)
{
kony.print (" ********** Entering into getOpenOpenTaskDetailsForVolunteer9 SuccessCallback ********** ");
kony.print (" ********** Failure in getOpenOpenTaskDetailsForVolunteer9 SuccessCallback: " + JSON.stringify(error) + " ********** ");
kony.application.dismissLoadingScreen();
//alert (" Failed to fetch the news. Please try again. ");
kony.print (" ********** Exiting out of getOpenOpenTaskDetailsForVolunteer9 SuccessCallback ********** ");
}

function setOpenTaskDetailsForVolunteer9Data(gblOpenOpenTaskDetailsForVolunteer9Response)
{
  try{
    
    var length= gblOpenOpenTaskDetailsForVolunteer9Response["taskobj"][0]["taskList"].length;
  if(gblOpenOpenTaskDetailsForVolunteer9Response!="undefined"&& gblOpenOpenTaskDetailsForVolunteer9Response!=undefined)
    {
      
  
  //alert("InSide length"+length);
// mainPage.mainPageContentParent.myNotifications.segMessageNotification.widgetDataMap={
//             "contactImage": "contactImage",
//             "lblContactName": "lblContactName",
//             "lblDay": "lblDay",
//             "lblMeaasageType": "lblMeaasageType"
//         };
  
 /*console.log(JSON.stringify(text.taskList[0].TasksDTO[0].title));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].details));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].start_date));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].end_date));

//console.log(JSON.stringify(text.taskList[0].TasksDTO[0].request[0].Request));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].request[0].Request.request_status));
console.log(JSON.stringify(text.taskList[0].TasksDTO[0].request[0].Request.request_id));*/
  
  if (gblOpenOpenTaskDetailsForVolunteer9Response["taskobj"].length > 0) {
    // alert("inside task for merin"+gblOpenTaskDetailsVal);
                
                  for(var i=0; i<length; i++)
                  {
                    //alert("inside each val "+);
                    //gblOpenTaskDetailsVal="3";
                    if(gblOpenTaskDetailsVal==(gblOpenOpenTaskDetailsForVolunteer9Response.taskobj[0].taskList[i].TasksDTO[0].taskId))
                    //if(gblOpenTaskDetailsVal==(gblOpenOpenTaskDetailsForVolunteer9Response.taskobj[0].taskList[i].TasksDTO[0].request[0].Request.request_id))
                    {
                      //alert("inside task if"+gblOpenTaskDetailsVal);
                      var volunteerName =kony.store.getItem("volunteerName");
                      var taskTitle = gblOpenOpenTaskDetailsForVolunteer9Response.taskobj[0].taskList[i].TasksDTO[0].title;
                      var taskDetails = gblOpenOpenTaskDetailsForVolunteer9Response.taskobj[0].taskList[i].TasksDTO[0].details;
                      var startDate = gblOpenOpenTaskDetailsForVolunteer9Response.taskobj[0].taskList[i].TasksDTO[0].start_date;
                      var endDate = gblOpenOpenTaskDetailsForVolunteer9Response.taskobj[0].taskList[i].TasksDTO[0].end_date;
                      var voltaskid = gblOpenOpenTaskDetailsForVolunteer9Response.taskobj[0].taskList[i].TasksDTO[0].taskId;
                    }
                  
                  }         
    mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalHeader.CopystartEngagmentHeaderDetails05c3f0a6993dd4b.CopystartEngagmentHeaderDetailsParent07958b4bef26b4f.CopyLabel0d3787300d8b24b.text=volunteerName;
    
      mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle09c8c16c0f4cb4f.text=taskTitle;
      mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.RichText086cf577b0bee44.text=taskDetails;
      mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle05227206fe96b4a.text= startDate;           
      mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.CopystartEngagementTaskTitle0d258ad25591a49.text =endDate;
       mainPage.acceptTaskDetailsModalContainer.acceptTaskDetailsModalBody.lblTaskId.text=voltaskid;
  kony.application.dismissLoadingScreen();
  }
  }
  }
   catch(Exception)
{
  // alert("Exception is"+JSON.stringify(Exception));
}
  
    }


function getOpenTaskDetailsForVol9()
{
  if(kony.store.getItem("isBusOrVol")=="volunteer"){
    
  var openTaskVal= mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
    gblOpenTaskDetailsVal=openTaskVal[0].lblRequestId;   
 //gblOpenTaskDetailsVal=openTaskVal.widgetInfo.selectedRowItems[0]["lblRequestId"];
  // alert("gblOpenTaskDetailsVal"+gblOpenTaskDetailsVal);
  }
   
}


