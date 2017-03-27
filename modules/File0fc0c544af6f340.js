//Type your code here

 
mobileFabricConfigurationForReg =
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
                                                                service:"RegistrationService",
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
function regService(){
              
      if (!mobileFabricConfigurationForReg.isKonySDKObjectInitialized)
      {
        initializeMobileFabricForRegister();
           
      }
      else if (mobileFabricConfigurationForReg.isKonySDKObjectInitialized)
      {
          registerVolunteer();
      }
                }

 
function initializeMobileFabricForRegister ()
{
               // alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForReg.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForReg.konysdkObject.init(mobileFabricConfigurationForReg.appKey,mobileFabricConfigurationForReg.appSecret,mobileFabricConfigurationForReg.serviceURL,initializeMobileFabricForRegisterSuccess,initializeMobileFabricForRegisterFailure); 
      // alert(getNotification());
    }
                else
                                //alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForRegisterSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
              //  alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForReg.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     registerVolunteer();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForRegisterFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
          //      alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
             //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfigurationForReg.authClient = mobileFabricConfigurationForReg.konysdkObject.getIdentityService(mobileFabricConfigurationForReg.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForReg.identityServices[0].username, "password": mobileFabricConfigurationForReg.identityServices[0].password};
    mobileFabricConfigurationForReg.authClient.login(authParams, loginMFSuccess, loginMFFailure);

   kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");

}

function loginMFSuccess(response){
              //  alert (" ********** Entering into loginMFSuccess ********** ");
               // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForReg.isMFAuthenticated = true;
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

function registerVolunteer()
{

               // alert("inside registerVolunteer");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForReg.integrationObj = mobileFabricConfigurationForReg.konysdkObject.getIntegrationService(mobileFabricConfigurationForReg.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForReg.integrationServices[0].operations[0];
                             //  var headers= {"Content-Type":"application/json"};
                  
                   var headers= {};
                  //inputparam["httpheaders"] = {"Content-Type":"application/json"};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }
     
     // alert("operation name"+operationName);
       //var data="1";
                 
                  
                  //start
             
                var data={};
              //  var schedule={};
                  //schedule[0]
               
                  var schedule=[{"days":"30",
                                 "fromTime":"1454391000000",
                                 "toTime":"1454391000000"}];
                 
                  var skillSet=[{"skillName":"Salma_java"}];
                              
                 
                  
                  var users={
"userName":"one",
"password":"Password",
"usersUserTypeId":"123"
};
                  data["volunteerTaskId"]="51" ;
                  data["firstName"]="mamata1Successagainnoon" ;
                  data["lastName"]="Salma156" ;
                  data["address"]="address" ;
                  data["contactNumber"]="999988888" ;
                  data["companyName"]="mphasisdelphi" ;
                  data["role"]="senior" ;
                  data["createdDate"]="2016-10-26" ;
                  data["VolunteerScheduleDTO"]= schedule;
                  data["SkillsDTO"]= skillSet;
                  data["userName"]="MerinSavingggg" ;
                  data["password"]="passss" ;
                  data["usersUserTypeId"]="121" ;

                 
                
 
//                   data["volunteerTaskId"]="51" ;
//                   data["firstName"]="Salma1" ;
//                   data["lastName"]="Salma1" ;
//                   data["address"]="address" ;
//                   data["contactNumber"]="99999999" ;
//                   data["companyName"]="mphasis" ;
//                   data["role"]="senior" ;
//                   data["createdDate"]="2016-10-17" ;
//                   data["schedule"]=schedule ;
//                   data["skillSet"]=skillSet ;
//                   data["users"]=users ;
                 
                  
                  
                  
                  //end
                 
               
//                   var data=      {"VolunteersDTO":
//            {
//                            "volunteerTaskId":"51","firstName":"SalmaOneabccc","lastName":"Salma1","address":"address","contactNumber":"99999999",
//       "companyName":"mphasis","role":"senior",
//                            "schedule":[
//                                            {"VolunteerScheduleDTO":
//                                            {"days":"30","fromTime":"1454391000000","toTime":"1454391000000"}}],
//                                            "skillSet":[{"SkillsDTO":{"skillName":"Salma_java"}}],
//                                            "users":{"userName":"xyz","password":"Password","usersUserTypeId":"11"}
//                                            }
//                                            };
          //  var header={};
                  //data["httpheaders"] = {"Content-Type":"application/json"};
                 // data["httpheaders"] = "application/json";
                   //alert("input=="+JSON.stringify(data));
//                   data = JSON.stringify(data);
             //   mobileFabricConfigurationForReg.integrationObj.invokeOperation(operationName, {"Content-Type":"application/json"},data , getRegisterSuccessCallback, getRegisterErrorCallback);
                  
                  mobileFabricConfigurationForReg.integrationObj.invokeOperation(operationName,headers ,data , getRegisterSuccessCallback, getRegisterErrorCallback);
                }
                else
                                alert ("Network unavailable. Please check your network settings. "); 
}

function getRegisterSuccessCallback (gblSave)
{
  //alert("inside success"+JSON.stringify(gblSave));
        
      }
  
 
 
 
function getRegisterErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
            //    alert (" Failed to fetch the news. Please try again. "+JSON.stringify(error));
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}


