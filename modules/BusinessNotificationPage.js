mobileFabricConfigurationForBusinessNotification = 
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
				service:"BusinessMyActivityNotification",
				operations:["getBusinessNotification"]
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
function BusinessNotificationService (){
 // alert("inside notification");
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
	
      if (!mobileFabricConfigurationForBusinessNotification.isKonySDKObjectInitialized)
      {
			initializeMobileFabricForBusinessNotification();
            
      }
      else if (mobileFabricConfigurationForBusinessNotification.isKonySDKObjectInitialized)
      {
          getBusinessNotification();
      }
	}
// 	else{
// 			// The user didn't pick a value so we'll show the alert
// 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//	}
//}

function initializeMobileFabricForBusinessNotification ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
	if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
	{
		//kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
		mobileFabricConfigurationForBusinessNotification.konysdkObject = new kony.sdk();
		mobileFabricConfigurationForBusinessNotification.konysdkObject.init(mobileFabricConfigurationForBusinessNotification.appKey,mobileFabricConfigurationForBusinessNotification.appSecret,mobileFabricConfigurationForBusinessNotification.serviceURL,initializeMobileFabricForBusinessNotificationSuccess,initializeMobileFabricForBusinessNotificationFailure);  
      // alert(getBusinessNotification());
    }
	else
		alert ("Network unavailable. Please check your network settings. ");
	kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForBusinessNotificationSuccess(response)
{
	kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
	//alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
	mobileFabricConfigurationForBusinessNotification.isKonySDKObjectInitialized=true;
	kony.application.dismissLoadingScreen();
	//authenticateMFUsingUserStore();
     getBusinessNotification();
	kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForBusinessNotificationFailure(error)
{
	kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
//	alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
	kony.application.dismissLoadingScreen();
//	alert (" Unable to initialize the application. Please try again. ");
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
  //	alert (" ********** Entering into loginMFSuccess ********** ");
  //	alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
	mobileFabricConfigurationForBusinessNotification.isMFAuthenticated = true;
	kony.application.dismissLoadingScreen();
	getBusinessNotification();
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

function getBusinessNotification()
{
  
  //	alert("inside getBusinessNotification");
	//var selectedKey = frmFoxNews.lstNewsType.selectedKey;
	if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
	{
		//kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
		mobileFabricConfigurationForBusinessNotification.integrationObj = mobileFabricConfigurationForBusinessNotification.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessNotification.integrationServices[0].service);
      	var operationName = mobileFabricConfigurationForBusinessNotification.integrationServices[0].operations[0];
		var headers= {};
// 		if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
// 			data= {"newsType": selectedKey};
//         }else{
// 			// The user didn't pick a value so we'll show the alert
// 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
     // alert("operation name"+operationName);
        var noteBusId={} ;
       noteBusId["id"]=kony.store.getItem("businessId"); //"1";//
    	mobileFabricConfigurationForBusinessNotification.integrationObj.invokeOperation(operationName, headers, noteBusId, getBusinessNotificationSuccessCallback, getBusinessNotificationErrorCallback);
	}
	else
		alert ("Network unavailable. Please check your network settings. ");  
}

function getBusinessNotificationSuccessCallback (gblBusinessNotificationList)
{
  
 // alert("inside success"+JSON.stringify(gblBusinessNotificationList));
  // Check the opstatus for 0 meaning it worked
  if (gblBusinessNotificationList !== null && gblBusinessNotificationList.opstatus === 0){
    if (gblBusinessNotificationList.notificationList!=null && gblBusinessNotificationList.notificationList!=undefined)
   {
    if (gblBusinessNotificationList.notificationList[0].NotificationDTO !== null &&gblBusinessNotificationList.notificationList[0].NotificationDTO!=undefined){
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblBusinessNotificationList.notificationList.length > 0){
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblBusinessNotificationList.BusinessNotificationList));
        gblBusNoteResponse=gblBusinessNotificationList;
        getTempForSort(gblBusinessNotificationList);
        setNoteSegData(gblBusNoteResponse);

        
      }
    }
  }
  }
  else{
	kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + BusinessNotificationList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getBusinessNotificationErrorCallback (error)
{
	kony.print (" ********** Entering into getBusinessNotificationSuccessCallback ********** ");
	kony.print (" ********** Failure in getBusinessNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
	kony.application.dismissLoadingScreen();
	//alert (" Failed to fetch the news. Please try again. ");
	kony.print (" ********** Exiting out of getBusinessNotificationSuccessCallback ********** ");
}
  

function setNoteSegData(gblBusNoteResponse)
{
  
  if(gblBusNoteResponse!="undefined"&& gblBusNoteResponse!=undefined)
    {
   //  alert("InSide setNoteSegData"+JSON.stringify(gblBusNoteResponse));
      
  
 // alert("InSide"+JSON.stringify(gblBusNoteResponse));
mainPage.mainPageContentParent.myNotifications.segMessageNotification.widgetDataMap={
        "notificationContactImage": "notificationContactImage",
        "notificationContactName": "notificationContactName",
        "notificationDay": "notificationDay",
        "notificationMeaasageType": "notificationMeaasageType",
  "notificationContent":"notificationContent"
        
        };
  
 
 
  if (gblBusNoteResponse["notificationList"].length > 0) {
                var tempNoteData = [];
                var len = gblBusNoteResponse["notificationList"].length;
                // alert("n1"+len);
                //for (var i = 0; i < len; i++) {
                  for (var i = len-1; i >=0; i--) {

                  /* mamata code start
                  var msg=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].messageTitle ;
                  var time=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].createdDate ;
                  var name=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].volunteerName;
                   mamata code end*/
                   var msg=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].notificationTitle ;
                   var details=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].notificationContent; 
                  var time=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].messageTime ;
                  var name=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].senderName;
                  var volunteerimagepathNote=gblBusNoteResponse["notificationList"][i]["NotificationDTO"].volunteerImagePath;
                  var imagepathNote = "imgseglogo.png";
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

            var date = new Date(time);
            var day = date.getDate();
            var dayweekIndex = date.getDay();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();


              var notificationStr = dayNames[dayweekIndex] + ', ' +day + ' ' + monthNames[monthIndex] + ' ' + year+ ' '+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      
                    
                    
                   if(volunteerimagepathNote !=null && volunteerimagepathNote!="null"){
                     imagepathNote = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerimagepathNote;
                   }
                    
                    
                    
                                     var testNoteData = {
                        notificationContactImage:imagepathNote,// "imgseglogo.png",
                        notificationContactName: name,
                        notificationDay: notificationStr,
                        notificationMeaasageType: msg,
                        notificationContent:details
                  
                        
                    };
			tempNoteData.push(testNoteData);
                  
                }
  // alert("n2");
    mainPage.mainPageContentParent.myNotifications.segMessageNotification.setData(tempNoteData);
    
    mainPage.mainPageContentParent.myNotifications.isVisible=true;
    kony.application.dismissLoadingScreen();
   
  }
  
    }
 
  
  
}

