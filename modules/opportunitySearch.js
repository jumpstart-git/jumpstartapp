//Type your code here

var gblIsVol=false;
var gblIsOpp=false;
var gblResponseForOpportunitySearch;
var gblForOpportunityPred;
var gblBackForOpprtunity;
mobileFabricConfigurationForsearchOpportunity = 
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
                                                                service:"oppurtunitiesSearch",
                                                                operations:["searchOppurtunity"]
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
function searchOppurtunity(){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );


  //  alert("searchOppurtunity");
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
      if (!mobileFabricConfigurationForsearchOpportunity.isKonySDKObjectInitialized)
      {
                                                mobileFabricConfigurationForsearchOpportunity1();
            
      }
      else if (mobileFabricConfigurationForsearchOpportunity.isKonySDKObjectInitialized)
      {
          getOpportunityData();
      }
  }
               
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function mobileFabricConfigurationForsearchOpportunity1()
{
   
 
 // alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForsearchOpportunity.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForsearchOpportunity.konysdkObject.init(mobileFabricConfigurationForsearchOpportunity.appKey,mobileFabricConfigurationForsearchOpportunity.appSecret,mobileFabricConfigurationForsearchOpportunity.serviceURL,mobileFabricConfigurationForsearchOpportunitySuccess,mobileFabricConfigurationForsearchOpportunityFailure);  
     //  alert("bbbb");
    }
                else
                                //alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
  
}

function mobileFabricConfigurationForsearchOpportunitySuccess(response)
{
                
  
  kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
          //      alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForsearchOpportunity.isKonySDKObjectInitialized=true;
                //kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getOpportunityData();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
  
}

function mobileFabricConfigurationForsearchOpportunityFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
              //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
             //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfiguration.identityServices[0].username, "password": mobileFabricConfiguration.identityServices[0].password};
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);

   kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  
}

function loginMFSuccess(response){
              //  alert (" ********** Entering into loginMFSuccess ********** ");
               // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForsearchOpportunity.isMFAuthenticated = true;
               // kony.application.dismissLoadingScreen();
                getNotification();
                kony.print (" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error)
{
                kony.print (" ********** Entering into loginMFFailure ********** ");
                kony.print (" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
                //kony.application.dismissLoadingScreen();
                alert (" Unable to authenticate to Server, Login failed. Please try again. ");
                kony.print (" ********** Exiting out of loginMFFailure ********** ");
}

function getOpportunityData()
{
  
             //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForsearchOpportunity.integrationObj = mobileFabricConfigurationForsearchOpportunity.konysdkObject.getIntegrationService(mobileFabricConfigurationForsearchOpportunity.integrationServices[0].service);
                 // mobileFabricConfigurationForVolunteer.integrationObj = mobileFabricConfigurationForVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteer.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForsearchOpportunity.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
     
     //var data="1";
                  var data={};
                // alert("operation name"+operationName);
                mobileFabricConfigurationForsearchOpportunity.integrationObj.invokeOperation(operationName, headers, data, getOpportunityDataSuccessCallback, getOpportunityDataErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
  
}

function getOpportunityDataSuccessCallback (gblOpportunityDataList)
{
  
  
 // alert("innnnnn");
  // Check the opstatus for 0 meaning it worked
  if (gblOpportunityDataList !== null && gblOpportunityDataList.opstatus === 0){
    
    if (gblOpportunityDataList.taskList !== null)
      {
    //alert("1");
    // Checking to make sure we DO have results
    if ((gblOpportunityDataList.taskList !== null) &&( gblOpportunityDataList.taskList !== undefined)){
       // alert("2");
       if (gblOpportunityDataList.taskList[0].TasksDTO !== null) 
         {
      // Making sure we have at least 1 article returned
      if (gblOpportunityDataList.taskList.length > 0){
        // Now we know we have results so we'll print them out to check
        //alert ("########## Response received from service call: "+JSON.stringify(gblVolunteersList.volunteersList));
       gblResponseOppurtunitySearch=gblOpportunityDataList;
        gblResponseForOpportunitySearch=gblOpportunityDataList;
        gblForOpportunityPred=gblOpportunityDataList;
        gblBackForOpprtunity=gblOpportunityDataList;
        //gblForPred=gblOpportunityDataList;
        //gblResponseOppurtunitySearchForSort=gblOpportunityDataList;
       // OppurtunityListValues();
       // kony.print("InSide setSegDatasearchOppurtunity:"+JSON.stringify(gblResponseOppurtunitySearch));
        setSegDatasearchOppurtunity(gblResponseOppurtunitySearch);
        opportunityListValues();
        // var gblResponse=JSON.stringify(notificationList);
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
           //alert("testing ");           
          kony.application.dismissLoadingScreen();
        }
   }
  }
  else{
    
    kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + businessBbj.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
  
}

function getOpportunityDataErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
                //alert ("Failed to fetch response ");
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
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



//     var gblResponse=
    
//     {"notificationList":
//      [{"MessageDTO":
//        {"messageId":200,"messageTitle":"Received a Message","messageContent":"Hi","messageBusinessId":"1","messageVolunteerId":"2310085","createdDate":"2016-09-01",
//         "updatedDate":"2016-09-01"}},
//       {"MessageDTO":
//        {"messageId":201,"messageTitle":"Received a Message","messageContent":"ello","messageBusinessId":"2",
//         "messageVolunteerId":"2310085","createdDate":"2016-09-01","updatedDate":"2016-09-01"}}]};


function setSegDatasearchOppurtunity(gblResponseOppurtunitySearch)
{
  try{
  
  if(gblResponseOppurtunitySearch!="undefined"&& gblResponseOppurtunitySearch!=undefined)
    {
      //kony.print("InSide setSegDatasearchOppurtunity:"+JSON.stringify(gblResponseOppurtunitySearch));
      
  
 // alert("InSide"+JSON.stringify(gblResponse));
searchPage.searchPageDashboardFlex.DataFlexScrollContainer.volunteerdataSegment.widgetDataMap={
   
              "CompanyNameLbl": "CompanyNameLbl",
            "SegActionsDownFlex": "SegActionsDownFlex",
            "SegVolunteerUpFlex": "SegVolunteerUpFlex",
            "SegmentMainFlex": "SegmentMainFlex",
            "VolunteerPosition": "VolunteerPosition",
            "searchBookmarkImage": "searchBookmarkImage",
            //"bookmarkRichTxt": "bookmarkRichTxt",
            //"distanceRichTxt": "distanceRichTxt",
            "searchDistanceImage": "searchDistanceImage",
            "volunteerImg": "volunteerImg",
            "volunteerName": "volunteerName",
            "volunteerPosition": "volunteerPosition",
            "volunteerId":"volunteerId",
  "searchBookmarkLabel":"searchBookmarkLabel",
  "searchDistanceLabel":"searchDistanceLabel",
  "searchTaskId":"searchTaskId"

        };
  
 
//alert("1meeee");
  if (gblResponseOppurtunitySearch["taskList"].length > 0) {
                var tempData = [];
                var len =gblResponseOppurtunitySearch["taskList"].length;// 20;//
               // alert("len"+len);
              //  for (var i = 0; i < len; i++) {
                  for (var i = len-1; i >=0; i--) { 
                    
                  var taskName=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].title ;
                  // alert("taskName:"+JSON.stringify(taskName));
                  ///strt 18
                 // alert("req:"+JSON.stringify(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"]));
                 // alert(i);
                  if((gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !==null ) &&(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"]!=="null")&&(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"]!=="")&&(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"]!==" ")&&(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !==undefined)&&(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !=="undefined")&&(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !=='undefined' ))
                  
                  {
                    var volunteerOppImgPath1=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessImagePath;
                     
                  }
                  else{
                     var volunteerOppImgPath1="imgseglogo.png";
                  }
                
                  
                  //end 18
                  // var volunteerOppImgPath1=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessImagePath;
             // alert("volunteerOppImgPath1"+volunteerOppImgPath1);
                  var skills=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].taskSkills;
              var oppTaskId=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].taskId ;
                  //alert("skills:"+JSON.stringify(skills));
                 // alert("oppTaskId:"+oppTaskId);
     kony.store.setItem("oppTaskId", oppTaskId);
    var busName=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].businessName ;
                    // kony.store.setItem("busName", busName);
                  //alert("busName:"+JSON.stringify(busName));
      var busIOpp=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].businessId ;  
         kony.store.setItem("busIOpp", busIOpp);   
       var busAddress=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].address1;
                  var oppimagepathVol77 = "imgseglogo.png";
                   if(volunteerOppImgPath1 !=null && volunteerOppImgPath1!="null"){
                     oppimagepathVol77 = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerOppImgPath1;
                   }
                  
          //alert("her1");       
                 // var volunteerLNme=gblResponseOppurtunitySearch["businessBbj"][i]["BusinessDTO"].lastName ;
                 // var volunteerFullNme= volunteerfNme + " " +volunteerLNme
                 // var volunteerPostn=gblResponse["businessBbj"][i]["BusinessDTO"].role ;        
                  
                  
                  var testOppurtunitySearchData = {
            "CompanyNameLbl": busName,
                    "volunteerName": taskName,
                    "volunteerPosition":"",
                    
           "VolunteerLevel": "Looking for skills",
            "searchBookmarkImage": " ",//"bookmarkoff.png",
            "searchBookmarkLabel": " ",//"BookMark",
             "searchDistanceLabel": busAddress,
          "searchDistanceImage": "location.png",
            "volunteerImg":oppimagepathVol77,// "imgseglogo.png",
            "businessLat": " ",
             "businessLong": " ",
              "searchTaskId":oppTaskId,
               "volunteerId":busIOpp

                            
                        
                    };
                 // kony.print
                  //kony.print("her2"+i);
                                                tempData.push(testOppurtunitySearchData);
                  
                }
   //alert("tempDatamerrr"+JSON.stringify(tempData));
   // alert("salma");
    searchPage.DataFlexScrollContainer.volunteerdataSegment.setData(tempData);
    kony.application.dismissLoadingScreen();
   // kony.application.dismissLoadingScreen();
   // gblResponse=tempData;
   
  }else
    {
      
      alert("no items to display");
       searchPage.DataFlexScrollContainer.volunteerdataSegment.removeAll();
      kony.application.dismissLoadingScreen();
    }
  
    }

  }catch(e)
    {
      
     alert("error "+JSON.stringify(e));
      kony.application.dismissLoadingScreen();
    }
  
}
