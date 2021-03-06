//Type your code here

mobileFabricConfigurationForNotification = 
	{
		aappKey:"b2af2c81b9433dab6ce8f1cf7ec558ba", 
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d", 
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",
  		//appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
		//appSecret:"c600a59925b36419de1546056cd21557", 
		//serviceURL:"https://100000507.auth.konycloud.com/appconfig",
		
  		integrationServices: 
		[
			{
				service:"NotificationService",
				operations:["getNotification"]
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
function notificationService (){
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
      if (!mobileFabricConfigurationForNotification.isKonySDKObjectInitialized)
      {
			initializeMobileFabricForNotification();
            
      }
      else if (mobileFabricConfigurationForNotification.isKonySDKObjectInitialized)
      {
          getNotification();
      }
	}
// 	else{
// 			// The user didn't pick a value so we'll show the alert
// 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//	}
//}

function initializeMobileFabricForNotification ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
	if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
	{
		//kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
		mobileFabricConfigurationForNotification.konysdkObject = new kony.sdk();
		mobileFabricConfigurationForNotification.konysdkObject.init(mobileFabricConfigurationForNotification.appKey,mobileFabricConfigurationForNotification.appSecret,mobileFabricConfigurationForNotification.serviceURL,initializeMobileFabricForNotificationSuccess,initializeMobileFabricForNotificationFailure);  
      // alert(getNotification());
    }
	else
		alert ("Network unavailable. Please check your network settings. ");
	kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForNotificationSuccess(response)
{
	kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
	//alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
	mobileFabricConfigurationForNotification.isKonySDKObjectInitialized=true;
	kony.application.dismissLoadingScreen();
	//authenticateMFUsingUserStore();
     getNotification();
	kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForNotificationFailure(error)
{
	kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
	
// / alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
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
	mobileFabricConfigurationForNotification.isMFAuthenticated = true;
	kony.application.dismissLoadingScreen();
	getNotification();
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

function getNotification()
{
  
  	//alert("inside getnotification");
	//var selectedKey = frmFoxNews.lstNewsType.selectedKey;
	if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
	{
		//kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
		mobileFabricConfigurationForNotification.integrationObj = mobileFabricConfigurationForNotification.konysdkObject.getIntegrationService(mobileFabricConfigurationForNotification.integrationServices[0].service);
      	var operationName = mobileFabricConfigurationForNotification.integrationServices[0].operations[0];
		var headers= {};
// 		if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
// 			data= {"newsType": selectedKey};
//         }else{
// 			// The user didn't pick a value so we'll show the alert
// 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
     // alert("operation name"+operationName);
       var data="1";
    	mobileFabricConfigurationForNotification.integrationObj.invokeOperation(operationName, headers, data, getNotificationSuccessCallback, getNotificationErrorCallback);
	}
	else
		alert ("Network unavailable. Please check your network settings. ");  
}

function getNotificationSuccessCallback (gblNotificationList)
{
  
  //alert("inside success"+JSON.stringify(gblNotificationList));
  // Check the opstatus for 0 meaning it worked
  if (gblNotificationList !== null && gblNotificationList.opstatus === 0){
    
   // alert("1");
    // Checking to make sure we DO have results
    if (gblNotificationList.notificationList[0].MessageDTO !== null){
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblNotificationList.notificationList.length > 0){
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblNotificationList.notificationList));
        gblNoteResponse=gblNotificationList;
        setSegData(gblNoteResponse);
        // var gblNoteResponse=JSON.stringify(notificationList);
          //Setting the segment widgetdataMap 
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(notificationList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();
        
      }
    }
  }
  else{
	kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + notificationList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getNotificationErrorCallback (error)
{
	kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
	kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
	kony.application.dismissLoadingScreen();
	//alert (" Failed to fetch response ");
	kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

//This function navigates to frmNewsDetails and displays the selected segment Record information
// function displayDetails()
// {
// 	var selData = frmFoxNews.segNewsTitle.selectedItems[0];
//   	kony.print("########## Selected Row Details: " + JSON.stringify(selData));
// 	//Setting the title
// 	frmNewsDetails.lblTitle.text = selData.title;
// 	//Setting the pubDate
// 	frmNewsDetails.lblPubDate.text = "Publication date: " + selData.pubdate;
// 	// Finding out the location of the first instance of first Image tag
// 	var imgTagLocation = selData.desc.search("<img");
// 	//Trimming the data till imgTagLocation and setting the description
// 	frmNewsDetails.lblDescription.text = ((selData.desc).slice(0,imgTagLocation));
// 	//frmNewsDetails.lblDescription.text = frmFoxNews.segNewsTitle.selectedItems[0].desc;
//   	frmNewsDetails.show();
// }



//     var gblNoteResponse=
    
//     {"notificationList":
//      [{"MessageDTO":
//        {"messageId":200,"messageTitle":"Received a Message","messageContent":"Hi","messageBusinessId":"1","messageVolunteerId":"2310085","createdDate":"2016-09-01",
//         "updatedDate":"2016-09-01"}},
//       {"MessageDTO":
//        {"messageId":201,"messageTitle":"Received a Message","messageContent":"ello","messageBusinessId":"2",
//         "messageVolunteerId":"2310085","createdDate":"2016-09-01","updatedDate":"2016-09-01"}}]};


function setSegData(gblNoteResponse)
{
  try{
  if(gblNoteResponse!="undefined"&& gblNoteResponse!=undefined)
    {
      //alert("InSide"+JSON.stringify(gblNoteResponse));
      
  
 // alert("InSide"+JSON.stringify(gblNoteResponse));
mainPage.mainPageContentParent.myNotifications.segMessageNotification.widgetDataMap={
            "contactImage": "contactImage",
            "lblContactName": "lblContactName",
            "lblDay": "lblDay",
            "lblMeaasageType": "lblMeaasageType"
        };
  
 
  
  if (gblNoteResponse["notificationList"].length > 0) {
                var tempData = [];
                var len = gblNoteResponse["notificationList"].length;
                
                for (var i = 0; i < len; i++) {
                  
                  var msg=gblNoteResponse["notificationList"][i]["MessageDTO"].messageTitle ;
                  var time=gblNoteResponse["notificationList"][i]["MessageDTO"].createdDate ;
                  var name=gblNoteResponse["notificationList"][i]["MessageDTO"].volunteerName;
                          var testData = {
                        contactImage: "imgseglogo.png",
                        lblContactName: name,
                        lblDay: time,
                        lblMeaasageType: msg
                        
                    };
			tempData.push(testData);
                  
                }
    
    mainPage.mainPageContentParent.myNotifications.segMessageNotification.setData(tempData);
   
  }
  
    }
 
  }catch(ex){
    
    //just to avoid undefined type error
  } 
  
}



