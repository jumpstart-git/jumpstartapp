function GetVolunteerIdByCloseTaskSegDetails()
{
var clsoseTaskSegDetailsForEndorse=mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
//  alert(clsoseTaskSegDetailsForEndorse);
  var volIdForGettingSkills=clsoseTaskSegDetailsForEndorse[0].volunteerId;
  var CloseTaskIDForEndorement=clsoseTaskSegDetailsForEndorse[0].taskId;
// alert(CloseTaskIDForEndorement);
  
  kony.store.setItem("VolunteerIdForSkills", volIdForGettingSkills);
  kony.store.setItem("ClosedTaskId", CloseTaskIDForEndorement);
   
  BusGetVolSkillService();
}

//Type your code here

mobileFabricConfigurationForBusinessGetVolunteerTasks = 
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
                                                                service:"BusinessGetVolunteersSkills",
                                                                operations:["getVolunteersSkillsById"]
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
function BusGetVolSkillService (){
kony.application.showLoadingScreen(null, "Loading..", 
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {  
shouldShowLabelInBottom: "false", separatorHeight: 20} );
  //alert("inside Get volunteer skills service");             
      if (!mobileFabricConfigurationForBusinessGetVolunteerTasks.isKonySDKObjectInitialized)
      {
                                                initializeMobileFabricGetVolunteerSkillsForEndorsement();
            
      }
      else if (mobileFabricConfigurationForBusinessGetVolunteerTasks.isKonySDKObjectInitialized)
      {
          getVolunteerSkillsForEndorsement();
      }
                }
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}

function initializeMobileFabricGetVolunteerSkillsForEndorsement ()
{
//alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessGetVolunteerTasks.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForBusinessGetVolunteerTasks.konysdkObject.init(mobileFabricConfigurationForBusinessGetVolunteerTasks.appKey,mobileFabricConfigurationForBusinessGetVolunteerTasks.appSecret,mobileFabricConfigurationForBusinessGetVolunteerTasks.serviceURL,initializeMobileFabricGetVolunteerSkillsForEndorsementSuccess,initializeMobileFabricGetVolunteerSkillsForEndorsementFailure);  
      // alert(getVolunteerSkillsForEndorsement());
    }
                else
                                alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricGetVolunteerSkillsForEndorsementSuccess(response)
{//alert("mf Success"); 
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForBusinessGetVolunteerTasks.isKonySDKObjectInitialized=true;
              //  kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     getVolunteerSkillsForEndorsement();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricGetVolunteerSkillsForEndorsementFailure(error)
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
                mobileFabricConfigurationForBusinessGetVolunteerTasks.isMFAuthenticated = true;
                kony.application.dismissLoadingScreen();
                getVolunteerSkillsForEndorsement();
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

function getVolunteerSkillsForEndorsement()
{
  
          // alert("inside getVolunteerSkillsForEndorsement");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForBusinessGetVolunteerTasks.integrationObj = mobileFabricConfigurationForBusinessGetVolunteerTasks.konysdkObject.getIntegrationService(mobileFabricConfigurationForBusinessGetVolunteerTasks.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForBusinessGetVolunteerTasks.integrationServices[0].operations[0];
                                var headers= {};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
      
      
      var dataVolIdForSkills={} ;
       dataVolIdForSkills["id"]=kony.store.getItem("VolunteerIdForSkills"); //"1";//kony.store.getItem("businessId"); 
    //  alert("operation name"+dataVolIdForSkills["id"]);
                mobileFabricConfigurationForBusinessGetVolunteerTasks.integrationObj.invokeOperation(operationName, headers, dataVolIdForSkills, getVolunteerSkillsForEndorsementSuccessCallback, getVolunteerSkillsForEndorsementErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. ");  
}

function getVolunteerSkillsForEndorsementSuccessCallback (gblVolSkillsResponse)
{
  
 //alert("inside getVolunteerSkillsForEndorsementSuccessCallback"+JSON.stringify(gblVolSkillsResponse));
  // Check the opstatus for 0 meaning it worked
  if (gblVolSkillsResponse !== null && gblVolSkillsResponse.opstatus === 0){//first if
    
  if (gblVolSkillsResponse.volunteersList!=null && gblVolSkillsResponse.volunteersList!=undefined)
  {//second if
    if (gblVolSkillsResponse.volunteersList[0].VolunteersDTO !== null && gblVolSkillsResponse.volunteersList[0].VolunteersDTO!=undefined)
    {//3rd if
       // alert("2");
      // Making sure we have at least 1 article returned
      if (gblVolSkillsResponse.volunteersList.length > 0)
      {//4th if
        // Now we know we have results so we'll print them out to check
       // alert ("########## Response received from service call: "+JSON.stringify(gblVolSkillsResponse.BusinessGetVolunteerTasksList));
        gblVolSkillsResponse=gblVolSkillsResponse;
        getExistingVolSkillsResponse(gblVolSkillsResponse);
        
        
      }//end of 4th if
    }//end of 3rd if
  }//end of 2nd if
  else{
                kony.application.dismissLoadingScreen();
   
  }
}//end first if
}//end of fun

function getVolunteerSkillsForEndorsementErrorCallback (error)
{
                kony.print (" ********** Entering into getVolunteerSkillsForEndorsementSuccessCallback ********** ");
                kony.print (" ********** Failure in getVolunteerSkillsForEndorsementSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
              //  alert (" Failed to fetch the news. Please try again. ");
                kony.print (" ********** Exiting out of getVolunteerSkillsForEndorsementSuccessCallback ********** ");
}



function getExistingVolSkillsResponse(gblVolSkillsResponse)
{
  try
  {
  if(gblVolSkillsResponse!="undefined"&& gblVolSkillsResponse!=undefined)
    {
   // alert("InSide getExistingVolSkillsResponse"+JSON.stringify(gblVolSkillsResponse));
      
  if (gblVolSkillsResponse["volunteersList"].length > 0) {
   // alert("if task list lengh is greater than zero");
                var tempTaskDta = [];
    var data=[];
                var len = gblVolSkillsResponse["volunteersList"][0]["VolunteersDTO"][0]["skillSet"].length;
   
    //alert("if task list lengh is greater than zero");
                var tempSkillOfVolForEndorse = [];
 // alert(len);
  var vID=kony.store.getItem("VolunteerIdForSkills"); 
   // alert(vID);
    var tempArray=[];
          tempArray.push("");
          tempArray.push("Select");
    tempSkillOfVolForEndorse.push(tempArray);
    for (var i =0; i < len; i++)
      {
           if(gblVolSkillsResponse["volunteersList"][0]["VolunteersDTO"][0].volunteerId==vID)
    
           {
             //alert(vID);
      var skillId=gblVolSkillsResponse["volunteersList"][0]["VolunteersDTO"][0]["skillSet"][i]["SkillsDTO"].skillId;
      var skillName=gblVolSkillsResponse["volunteersList"][0]["VolunteersDTO"][0]["skillSet"][i]["SkillsDTO"].skillName;
      var companyName=gblVolSkillsResponse["volunteersList"][0]["VolunteersDTO"][0]["companyName"];
      mainPage.BusinessEndorsementModalContainer.EndorseMentHeaderContainer.CompanyNameContainer.CompanyName.text=companyName;
      //kony.store.setItem("VolCompanyName", companyName);
       var tempArr1=[];
       tempArr1.push(skillId);
       tempArr1.push(skillName);
          //alert("title:"+title);
          
                 tempSkillOfVolForEndorse.push(tempArr1);
                 
             //  alert("tempSkillOfVolForEndorse"+JSON.stringify(tempSkillOfVolForEndorse));
             kony.application.dismissLoadingScreen();
               
        }       
                  
                  
   
  }
    
  //   searchResultProfile.startEngagementModalContainer.startEngagementHeaderContainer.AssignExistingTaskContainer.assignToExistingvolunteersListBoxContainer.existingOpenTasksListBox.masterData=tempSkillOfVolForEndorse;
  mainPage.BusinessEndorsementModalContainer.SkillsListBoxContainer.VolunteerSkillsListbox.masterData=tempSkillOfVolForEndorse;
    var items=mainPage.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems; 
  var volName=items[0].closedTaskBusiness;
  //  alert(volName);
 // mainPage.BusinessEndorsementModalContainer.EndorseMentHeaderContainer.VolNameContainer.EndorsementVolNameContainer.VolunteerNameLabel.text=volName;  
mainPage.BusinessEndorsementModalContainer.EndorseMentHeaderContainer.VolNameContainer.EndorsementLabelContainer.EndorseLabel.text="Endorse"+" "+volName+ " "+ "for"; 
    mainPage.BusinessEndorsementModalGrayContainer.isVisible=true;
  }

  kony.application.dismissLoadingScreen();
     
  
  }}catch(e) 
  {
    //just to avoid undefined type error
  }
}


