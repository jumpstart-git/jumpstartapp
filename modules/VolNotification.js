mobileFabricConfigurationForVolunteerNotification = 
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
                                                                service:"VolunteerNotification",
                                                                operations:["NewOperation"]
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
function notificationServiceforVolunteer(){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
// alert("enetered notifcation funtn");
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
      if (!mobileFabricConfigurationForVolunteerNotification.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricForNotificationForVolunteer();
            
      }
      else if (mobileFabricConfigurationForVolunteerNotification.isKonySDKObjectInitialized)
      {
        getNotificationforVolunteer();
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }

}

function initializeMobileFabricForNotificationForVolunteer ()
{
// alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolunteerNotification.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForVolunteerNotification.konysdkObject.init(mobileFabricConfigurationForVolunteerNotification.appKey,mobileFabricConfigurationForVolunteerNotification.appSecret,mobileFabricConfigurationForVolunteerNotification.serviceURL,initializeMobileFabricForNotificationForVolunteerSuccess,initializeMobileFabricForNotificationForVolunteerFailure);  
      // alert(getNotification());
    }
                else {
					alert ("Network unavailable. Please check your network settings. ");
					kony.application.dismissLoadingScreen();                  
                }
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForNotificationForVolunteerSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
//                 alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForVolunteerNotification.isKonySDKObjectInitialized=true;
//                 kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
   getNotificationforVolunteer();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForNotificationForVolunteerFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
//                alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Unable to initialize the application. Please try again. ");
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
                mobileFabricConfigurationForVolunteerNotification.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                
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

function getNotificationforVolunteer()
{
  
//              alert("insidegetNotificationforVolunteer");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForVolunteerNotification.integrationObj = mobileFabricConfigurationForVolunteerNotification.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerNotification.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForVolunteerNotification.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
      //alert("operation name"+operationName);
               var noteVolId={} ;
       noteVolId["id"]=kony.store.getItem("volunteerId");
//alert("vol id:"+JSON.stringify(noteVolId["id"]));
                mobileFabricConfigurationForVolunteerNotification.integrationObj.invokeOperation(operationName, headers, noteVolId,getNotificationforVolunteerSuccessCallback,getNotificationforVolunteerErrorCallback);
                }
                else {
					alert ("Network unavailable. Please check your network settings. ");
                    kony.application.dismissLoadingScreen();
                }
}

function getNotificationforVolunteerSuccessCallback (gblVolNotificationList)
{
  
//   alert("inside success"+JSON.stringify(gblVolNotificationList));
  // Check the opstatus for 0 meaning it worked
  if (gblVolNotificationList !== null && gblVolNotificationList.opstatus === 0){
    if (gblVolNotificationList.notificationList!== null && gblVolNotificationList.notificationList!== undefined){
      if (gblVolNotificationList.notificationList[0].NotificationDTO !== null && gblVolNotificationList.notificationList[0].NotificationDTO!=undefined){
//        alert("2");
      // Making sure we have at least 1 article returned
      if (gblVolNotificationList.notificationList.length > 0){
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblNotificationList.notificationList));
       gblVolNoteResponse=gblVolNotificationList;
        getVolNotificationForSort(gblVolNoteResponse);
        setVolNotSegData(gblVolNoteResponse);
        // vargblVolNoteResponse=JSON.stringify(notificationList);
          //Setting the segment widgetdataMap 
//          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
//      //      Setting the data to the segment
//      frmFoxNews.segNewsTitle.setVisibility(true);
//          frmFoxNews.segNewsTitle.setData(notificationList.MessageDTO.news_item.title);
//          kony.application.dismissLoadingScreen();
        
      }
    }
  }
  else 
   kony.application.dismissLoadingScreen(); //if there are no notifs for the user
 }
  else{
                kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + notificationList.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getNotificationforVolunteerErrorCallback (error)
{
                kony.print (" ********** Entering intogetNotificationforVolunteerSuccessCallback ********** ");
                kony.print (" ********** Failure ingetNotificationforVolunteerSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
                //alert (" Failed to fetch response. ");
                kony.print (" ********** Exiting out ofgetNotificationforVolunteerSuccessCallback ********** ");
}

//This function navigates to frmNewsDetails and displays the selected segment Record information
// function displayDetails()
// {
//            var selData = frmFoxNews.segNewsTitle.selectedItems[0];
//            kony.print("########## Selected Row Details: " + JSON.stringify(selData));
//            //Setting the title
//            frmNewsDetails.lblTitle.text = selData.title;
//            //Setting the pubDate
//            frmNewsDetails.lblPubDate.text = "Publication date: " + selData.pubdate;
//            // Finding out the location of the first instance of first Image tag
//            var imgTagLocation = selData.desc.search("<img");
//            //Trimming the data till imgTagLocation and setting the description
//            frmNewsDetails.lblDescription.text = ((selData.desc).slice(0,imgTagLocation));
//            //frmNewsDetails.lblDescription.text = frmFoxNews.segNewsTitle.selectedItems[0].desc;
//            frmNewsDetails.show();
// }



//     vargblVolNoteResponse=
    
//     {"notificationList":
//      [{"MessageDTO":
//        {"messageId":200,"messageTitle":"Received a Message","messageContent":"Hi","messagevolunteerId":"1","messageVolunteerId":"2310085","createdDate":"2016-09-01",
//         "updatedDate":"2016-09-01"}},
//       {"MessageDTO":
//        {"messageId":201,"messageTitle":"Received a Message","messageContent":"ello","messagevolunteerId":"2",
//         "messageVolunteerId":"2310085","createdDate":"2016-09-01","updatedDate":"2016-09-01"}}]};


function setVolNotSegData(gblVolNoteResponse)
{
  
  if(gblVolNoteResponse!="undefined"&&gblVolNoteResponse!=undefined)
    {
     // alert("Inside set function");
     // alert("InSide"+JSON.stringify(gblVolNoteResponse));
      
  
// alert("InSide"+JSON.stringify(gblVolNoteResponse));
mainPage.mainPageBody.mainPageContentParent.myNotifications.segMessageNotification.widgetDataMap={
             "notificationContactImage": "notificationContactImage",
        "notificationContactName": "notificationContactName",
        "notificationDay": "notificationDay",
        "notificationMeaasageType": "notificationMeaasageType",
        "notificationContent":"notificationContent"
        };
  
 
  if (gblVolNoteResponse["notificationList"].length > 0) {
                var tempVolNotData = [];
                var len =gblVolNoteResponse["notificationList"].length;
             //alert("len"+JSON.stringify(gblVolNoteResponse["notificationList"].length));  
              //  for (var i = 0; i < len; i++) {
    for (var i = len-1; i >=0; i--) {
                 
                  //var volNotificationID=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].notificationId ;
                  //var volNotificationTypeId=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].notificationTypeId ;
                  var volSenderName9=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].senderName;
                    var volNotificationTitle9=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].notificationTitle;
      var details=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].notificationContent;
                    //var volNotificationContent=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].notificationContent;
                    //var volNotificationType=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].notificationType;
                  var volmessageTime9=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].messageTime;
                // alert("insde for :"+JSON.stringify(gblVolNoteResponse["notificationList"][i]["NotificationDTO"].messageTime));
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

            var date = new Date(volmessageTime9);
            var day = date.getDate();
            var dayweekIndex = date.getDay();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();


            var notificationVolStr = dayNames[dayweekIndex] + ', ' +day + ' ' + monthNames[monthIndex] + ' ' + year+ ' '+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      
      
       var volunteerimagepathNote1=gblVolNoteResponse["notificationList"][i]["NotificationDTO"].businessImagePath ;
                  var imagepathNote1 = "imgseglogo.png";
                   if(volunteerimagepathNote1 !=null && volunteerimagepathNote1!="null"){
                     imagepathNote1 = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerimagepathNote1;
                   }
                          var VolNottestData9 = {
                        notificationContactImage:imagepathNote1,// "imgseglogo.png",
                        notificationContactName: volSenderName9,
                        notificationDay: notificationVolStr,
                        notificationMeaasageType: volNotificationTitle9,
                        notificationContent:details
                        
                    };
                                                tempVolNotData.push(VolNottestData9);
                  
                }
    
    mainPage.mainPageBody.mainPageContentParent.myNotifications.segMessageNotification.setData(tempVolNotData);
    kony.application.dismissLoadingScreen();
    mainPage.mainPageContentParent.myNotifications.isVisible=true;
  }
      else {
    	kony.application.dismissLoadingScreen();        
      }
    }

  
  
}

 


