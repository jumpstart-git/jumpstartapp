//Type your code here
var loggedInUserObject = {
  user : ""
};

var gblForRetreive;
var gblLoginData;
var gblemailVal;
var checkedHash;

function doSignIn() {

  var usernameInput = login.usernameField.text;
  var passWordInput = login.passwordField.text;

  var isAuthenticatedUser = false;

  if (usernameInput === "MyVolunteer" && passWordInput === "password") {
    isAuthenticatedUser = true;
    loggedInUserObject.user = "volunteer";
  } else if (usernameInput === "MyBusiness" && passWordInput === "password") {
    isAuthenticatedUser = true;
    loggedInUserObject.user = "indigenousBusiness";
  } else {
    kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_ERROR,
      "alertTitle": "Unauthenticated User",
      "yesLabel": "OK",
      "message": "You shall not pass!",
      "alertHandler": function() {}
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
  }

  if (isAuthenticatedUser) {
    if (loggedInUserObject.user === "volunteer") {
//       userInfoPage.show();
      mainPage.show();
    } else if (loggedInUserObject.user === "indigenousBusiness") {
      mainPage.show();
    }
  }

}


function getUserInfo() {
  kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print(loggedInUserInfo);
  kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - END: myString");

  if (loggedInUserObject.user === "volunteer") {
    userInfoPage.nameInfoField.text = loggedInUserInfo.firstName + ' ' + loggedInUserInfo.lastName;
    userInfoPage.addressInfoField.text = loggedInUserInfo.address;
    userInfoPage.companyInfoField.text = loggedInUserInfo.company;
    userInfoPage.roleInfoField.text = loggedInUserInfo.role;

    if (loggedInUserInfo.skills.length) {
      for(var i = 0; i < loggedInUserInfo.skills.length; i++) {

        // Textbox Basic Configuration
        var textboxBC = {
          id: i,
          skin: "userInfoPageInputField",
          focusskin: "userInfoPageInputField",
          isVisible: true,
          placeholder: ""
        };
        // Textbox Layout Configuration
        var textboxLC = {
          hExpand: false, // If set to false, the widget occupies the preferred width. The preferred width of a widget is the sum of its contents width, padding, and margin.
          margin: [15,15,15,15],
          padding: [0,0,0,0],
          containerWeight: 100,
          marginInPixel: false,
          paddingInPixel: false,
          widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT
        };
        // Textbox Platform Specific Properties configuration
        var textboxPC = {};

        var txtDynamic = new kony.ui.TextBox2(textboxBC, textboxLC, textboxPC);
        txtDynamic.text = loggedInUserInfo.skills[i];
//         userInfoPage.skillsList.add(txtDynamic);
      }
    }
  } else if (loggedInUserObject.user === "indigenousBusiness") {

  }

}




//Type your code here




// START OF LOGIN:
mobileFabricConfigurationForLogin = {
  appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba",
  appSecret:"da2e2dc029af1c2eedabd208d8469e7d",
  serviceURL:"https://100014964.auth.konycloud.com/appconfig",
  integrationServices:
  [
    {
      service:"CBALogin",
      operations:["getLoginDetails"]
    },
    {
      service:"BusinessChangePassword",
      operations:["changePasswordForBusiness"]
    }
  ],
  konysdkObject: null,
  authClient: null,
  integrationObj: null,
  isKonySDKObjectInitialized:false,
  isMFAuthenticated: false
};


function loginService (){
  kony.application.showLoadingScreen(null,
                                     "Loading..",
                                     constants.LOADING_SCREEN_POSITION_ONLY_CENTER,
                                     true,
                                     true,
                                     {shouldShowLabelInBottom: "false", separatorHeight: 20}
                                    );

  checkedHash = false;
  if (!mobileFabricConfigurationForLogin.isKonySDKObjectInitialized) {
    initializeMobileFabricForLogin();
  } else if (mobileFabricConfigurationForLogin.isKonySDKObjectInitialized) {
    getLogin();
  }
}

function initializeMobileFabricForLogin () {

  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    mobileFabricConfigurationForLogin.konysdkObject = new kony.sdk();

    mobileFabricConfigurationForLogin.konysdkObject.init(
      mobileFabricConfigurationForLogin.appKey,
      mobileFabricConfigurationForLogin.appSecret,
      mobileFabricConfigurationForLogin.serviceURL,
      initializeMobileFabricLoginSuccess,
      initializeMobileFabricLoginFailure
    );
  } else {
    validationAlert ("Warning", "Network unavailable. Please check your network settings. ");
  }

  kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricLoginSuccess(response) {
  kony.print(" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");

  mobileFabricConfigurationForLogin.isKonySDKObjectInitialized=true;

  getLogin();
  kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricLoginFailure(error) {
  kony.print(" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  kony.print(" Unable to initialize the application. Please try again. ");
}



function authenticateMFUsingUserStore() {
  mobileFabricConfigurationForLogin.authClient = mobileFabricConfigurationForLogin.konysdkObject.getIdentityService(mobileFabricConfigurationForLogin.identityServices[0].service);

  var authParams = {"userid": mobileFabricConfigurationForLogin.identityServices[0].username, "password": mobileFabricConfigurationForLogin.identityServices[0].password};
  mobileFabricConfigurationForLogin.authClient.login(authParams, loginMFSuccess, loginMFFailure);

  kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");

}
function loginMFSuccess(response) {
  mobileFabricConfigurationForLogin.isMFAuthenticated = true;

  getNotification();
  kony.print (" ********** Exiting out of loginMFSuccess ********** ");
}
function loginMFFailure(error) {
  kony.print (" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  validationAlert ("Warning", "Unable to authenticate to Server, Login failed. Please try again.");
}



function getLogin() {
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    mobileFabricConfigurationForLogin.integrationObj = mobileFabricConfigurationForLogin.konysdkObject.getIntegrationService(mobileFabricConfigurationForLogin.integrationServices[0].service);
    var operationName = mobileFabricConfigurationForLogin.integrationServices[0].operations[0];
    var headers= {};

    var dataLogin={};
    dataLogin["userName"]=login.usernameField.text;
    //dataLogin["password"]=login.passwordField.text;
    //For password hashing
    dataLogin["password"]=kony.crypto.createHash("sha256",login.passwordField.text);
    //End of password hasing
    mobileFabricConfigurationForLogin.integrationObj.invokeOperation(operationName,headers, dataLogin,getLoginSuccessCallback,getLoginErrorCallback);
    
  } else {
    validationAlert ("Warning","Network unavailable. Please check your network settings. ");
  }
}

function getLoginSuccessCallback(gblLoginData1) {
  try {
    gblLoginData=gblLoginData1;

    if(gblLoginData!="undefined"&& gblLoginData!=undefined) {
      if((gblLoginData.LoginBusinessVolunteer[0]["result"]=="true")) {
		  //Password Auto Hasher
        if(checkedHash)
            {
               mobileFabricConfigurationForLogin.integrationObj = mobileFabricConfigurationForLogin.konysdkObject.getIntegrationService(mobileFabricConfigurationForLogin.integrationServices[1].service);
                var operationName = mobileFabricConfigurationForLogin.integrationServices[1].operations[0];
                var headers= {};

                var credentials={};
                  credentials["userName"]=login.usernameField.text;
                  credentials["oldPassword"]=login.passwordField.text;
                  credentials["newPassword"]=kony.crypto.createHash("sha256", login.passwordField.text);
                mobileFabricConfigurationForLogin.integrationObj.invokeOperation(operationName, headers, credentials, null, null);
            }
        //End Auto Hasher
        if((gblLoginData.LoginBusinessVolunteer[0]["result"]=="true") && (gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"]=="business")) {

          var businessIdVal = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessId;
          kony.store.setItem("businessId", businessIdVal);

          var isBusOrVol=gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"];
          kony.store.setItem("isBusOrVol",isBusOrVol);

          var adminVal=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.adminCredential;
          kony.store.setItem("adminVal",adminVal);

          var adminValnew=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.acceptEmail;
          kony.store.setItem("adminValnew",adminValnew);

          var businessName = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessName;
          kony.store.setItem("loginBusinessName",businessName);

          var ACNNumber = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].acnNumber;
          var busImgPath=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.imagePath;
          var businessAddress = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].address1;
          var numberofBusinessOwners = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].numberOfIndigenousOwners;
          var numberOfEmployees = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].numberOfEmployees ;
          var percentageOfBusinessOwnership = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].percentOfIndigenousOwnership;
          var percentageOfEmployment = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].percentIndigenousEmployment;
          var businessSector = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].sector;
          var professionalAffiliations = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].affiliations;
          var aboutCompany= gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].indigenousBusinessesCol;
          var businessReach= gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].business_reach;
          var businessActivity=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].sector;
          var skills=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].skills;
          var city= gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].city;
          var hours=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].hours;
          var opportunities=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].opportunities;
          var notForProfit=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].notForProfit;
          var noExperience=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].noExperience;
          var private=gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].privatee;
          var governmentExperience= gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].governmentExperience;
          var businessContactNumber = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].phoneNumber;
          var busEmail = gblLoginData.LoginBusinessVolunteer[0].business[0].BusinessDTO[0].businessUserId.userName;

          kony.store.setItem("loginEmail", busEmail);
          kony.store.setItem("BusinessEmailId", busEmail);

          if(null != busImgPath && busImgPath != "null"){
            var imgUrl="http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+busImgPath;
            kony.store.setItem("imgUrlBusiness", imgUrl);
          }else{
            kony.store.setItem("imgUrlBusiness", "imgseglogo.png");
          }

          if(ACNNumber===null||ACNNumber==="null") {
            ACNNumber=" ";
          }
          if(businessAddress===null||businessAddress==="null"){
            businessAddress=" ";
          }
          if(numberofBusinessOwners===null|numberofBusinessOwners==="null"){
            numberofBusinessOwners=" ";
          }
          if(numberOfEmployees===null || numberOfEmployees==="null"){
            numberOfEmployees=" ";
          }
          if(percentageOfBusinessOwnership===null || percentageOfBusinessOwnership==="null"){
            percentageOfBusinessOwnership=" ";
          }
          if(percentageOfEmployment===null || percentageOfEmployment==="null" ){
            percentageOfEmployment=" ";
          }
          if(businessSector===null || businessSector==="null"){
            businessSector=" ";
          }
          if(professionalAffiliations===null || professionalAffiliations==="null"){
            professionalAffiliations=" ";
          }
          if(aboutCompany===null || aboutCompany==="null"){
            aboutCompany=" ";
          }
          if(businessActivity===null || businessActivity==="null"){
            businessActivity=" ";
          }
          if(skills===null || skills==="null"){
            skills=" ";
          }
          if(hours===null || hours==="null"){
            hours=" ";
          }
          if(opportunities===null || opportunities==="null"){
            opportunities=" ";
          }

          var imageurlPath  = kony.store.getItem("imgUrlBusiness");
          if(imageurlPath !=null){
            BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.imgContainer.imgBusinessLogo.src="";
            BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.imgContainer.imgBusinessLogo.src=imageurlPath;
          }

          BusinessProfile.businessProfileContainer.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.lblCompanyName.text=businessName;
          BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.companyAddressContainer.lblcompanyAddress.text=businessAddress;
          BusinessProfile.businessProfileDetailsContainer.aboutCompanyContainer.AboutRichtext.text=aboutCompany;
          BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.contactNumberContainer.phoneNumContainer.phoneNumRichText.text=businessContactNumber;
          BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.emailContainer.emailIdContainer.emailIdRichText.text=busEmail;
          BusinessProfile.businessProfileDetailsContainer.businessActivityContainer.BusinessActivityRichText.text=businessActivity;
          BusinessProfile.businessProfileDetailsContainer.AffiliationContainer.affiliationRichText.text=professionalAffiliations;
          BusinessProfile.businessProfileDetailsContainer.businessReachContainer.businessReachrichText.text=businessReach;
          BusinessProfile.businessProfileDetailsContainer.LoginDetailsContainer.loginEmailIdContainer.lblLoggedInEmail.text=busEmail;
          BusinessProfile.businessProfileContainer.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.lblCompanyName.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.companyNameContainer.companyAddressContainer.lblcompanyAddress.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.aboutCompanyContainer.AboutRichtext.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.contactNumberContainer.phoneNumContainer.phoneNumRichText.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.ContactInfoContainer.emailContainer.emailIdContainer.emailIdRichText.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.businessActivityContainer.BusinessActivityRichText.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.AffiliationContainer.affiliationRichText.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.businessReachContainer.businessReachrichText.setEnabled(false);
          BusinessProfile.businessProfileDetailsContainer.LoginDetailsContainer.loginEmailIdContainer.setEnabled(false);
          BusinessProfile.show();

          kony.application.dismissLoadingScreen();

          //start comment
          mainPage.mainPageBody.navBarScroller.recommendationNavContainer.isVisible=true;
          mainPage.mainPageContentParent.myRecommendations.isVisible=true;
          mainPage.mainPageBody.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible=true;
          mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible=false;
          mainPage.mainPageContentParent.myActivity.CreateOpportunityButtonContainer.isVisible=true;
          mainPage.unAssignedTasksContainer.isVisible=true;

          var ksid=kony.store.getItem("KSID");
          if((ksid!=="null")&&(ksid!==null)&&(ksid!=="undefined")&&(ksid!==undefined)&&(ksid!=="")) {
            AttachKSIDService();
          }
		// End of business
        } else {
          if(gblLoginData.LoginBusinessVolunteer[0]["isFirstLogin"]=="true") {
            gblemailVal=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].emailAddress;
            login.validateCodeContainer.isVisible=true;
            //D045 Add code to make modular bg visible
            login.validateCodeContainerModular.isVisible=true;
            kony.application.dismissLoadingScreen();
          } else {

            var valVolunteerId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].volunteerId;
            kony.store.setItem("volunteerId", valVolunteerId);

            var skillList=" ";

            for(var i=0;i<gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet.length;i++) {
              skillList=skillList+gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName+",";
            }

            skillList=skillList.slice(0,-1);

            ///skills end
            var isBusOrVol=gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"];
            kony.store.setItem("isBusOrVol",isBusOrVol);
            var adminVal=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].adminCredential;
            kony.store.setItem("adminVal",adminVal);
            var adminValnew9=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].acceptEmail;
            kony.store.setItem("adminValnew",adminValnew9);
            var firstName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].firstName;
            kony.store.setItem("volLoginName", firstName);

            var lastName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].lastName;

            //Start of defect D058
            var companyName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].companyName;
            var emailAddress=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].emailAddress;
            var domainsList = ["@hpe.com","@supplynation.org.au","@cba.com.au","@microsoft.com"];
            var companyNameList = ["HPE", "SupplyNation", "CBA", "DXC"];
            var countEmail = 0;
            var countCompany = 0;

            for (var i = 0; i < domainsList.length; i++) {
              if (emailAddress.indexOf(domainsList[i])>=0)
              {
                  countEmail++;
              }
            }

            for (var j = 0; j < companyNameList.length; j++) {
              if (companyName.indexOf(companyNameList[j])>=0)
              {
                  countCompany++;
              }
            }

            if ((countEmail === 0)||(countCompany === 0))
            {
              validationAlert("Warning","This volunteer is associated with an unauthorized company or domain. Access is denied!");
              kony.application.dismissLoadingScreen();
              return;
            }


            kony.store.setItem("loginEmail", emailAddress);
            //End of D058

            var role=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].role;
            var aboutMe=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].aboutMe;
            var workDetails=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].workDetails;
            var state=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].state;

            var schedule=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days;
            var availId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.availabilityId;
            kony.store.setItem("availId", availId);
            kony.store.setItem("schedule", schedule);

            var daySelectedNew=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days;
            var fromTimeNew=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.fromTime;
            var toTimeNew=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.toTime;

            var scheduleValNew=daySelectedNew+" "+fromTimeNew+" TO "+toTimeNew;
            for(var s=0;s<gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule.length;s++) {
              if(s===0){
                scheduleValNew=scheduleValNew+"\n";
                kony.store.setItem("scheduleValNew", scheduleValNew);
              }
              else{
                scheduleValNew=scheduleValNew+gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[s].VolunteerScheduleDTO.days+" "+gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[s].VolunteerScheduleDTO.fromTime+" TO "+gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[s].VolunteerScheduleDTO.toTime+"\n";
                kony.store.setItem("scheduleValNew", scheduleValNew);
              }
            }

            var pathVal=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].imagePath;

            if(null != pathVal && pathVal != "null"){
              var VolimgUrl="http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+pathVal;
              kony.store.setItem("imgUrlVal", VolimgUrl);
            } else {
              kony.store.setItem("imgUrlVal", "imgseglogo.png");
            }

            var VolimageurlPath  = kony.store.getItem("imgUrlVal");
            if(VolimageurlPath !=null){
              volunteerMyProfilePage.volunteerMyProfileHeader.volunteerMyProfilePic.src=VolimageurlPath;
            }

            kony.store.setItem("schedule", schedule);

            var arr=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days.split(" ");

            var fromTimeFull=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.fromTime;
            kony.store.setItem("fromTimeFull", fromTimeFull);

            var fromTimeSplitted=fromTimeFull.split(" ");
            var fromTime=fromTimeSplitted[0];
            var fromTimeMeridian=fromTimeSplitted[1];

            var mArr=[  ["fromTime", fromTime]];
            var mArrMer=[  ["fromTimeMeridian", fromTimeMeridian]];

            var toTimeFull=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.toTime;
            kony.store.setItem("toTimeFull", toTimeFull);
            var toTimeSplitted=toTimeFull.split(" ");

            var toTime=toTimeSplitted[0];
            var toTimeMeridian=toTimeSplitted[1];
            var mArr1=[  ["toTime", toTime]];

            var mArr1Mer=[  ["toTimeMeridian", toTimeMeridian]];

            var address=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].address;
            var level=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].level;
            var longitude=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].longitude;
            var latitude=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].latitude;
            var contactNumber=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].contactNumber;
            var volunteerTaskId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].volunteerTaskId;
            var businessUnit=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].businessUnit;
            var userName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].userName;
            var password=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].password;
            var userId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].userId;

            kony.store.setItem("userId", userId);
            var usersUserTypeId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].usersUserTypeId;

            if(businessUnit===null||businessUnit==="null") {
              businessUnit=" ";
            }

            mainPage.mainPageBody.mainPageContentParent.myActivity.unAssignedTasksContainer.isVisible=false;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileFirstNameInput.text= firstName;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileLastNameInput.text= lastName;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileUsernameInput.text= userName;
            //Will be stored in a hidden field.
            volunteerMyProfilePage.volunteerMyProfileBody.StoreOriginalPassword.text = password;
            
            //Bad practice for password hashing
            //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfilePasswordInput.text= password;
            //volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileReenterPasswordInput.text= password;
            //Bad practice for password hashing
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text= "";//workDetails;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text= "";//aboutMe;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.text= companyName;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileRoleInput.text= role;
            volunteerMyProfilePage.volunteerMyProfileBody.regBusinessUnitInput.text=businessUnit;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileStateInput.text= state;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAddressInput.text= address;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileContactNumberInput.text= contactNumber;
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileEmailAddressInput.text= emailAddress;//" ";//emailAddress;

            var skillSegmentData=[];
            for (var i = 0; i < gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet.length; i++) {
              var skillObj = {
                "volunteerMyProfileSkillItem" : gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName,
                "skillIdHidden": gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillId
              };
              skillSegmentData.push(skillObj);
            }
            volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillTags.volunteerMyProfileSkillSegment.setData(skillSegmentData);

            gblForRetreive=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0];
            var DivInfo=kony.os.deviceInfo();
            var ksid=kony.store.getItem("KSID");

            if((ksid!=="null")&&(ksid!==null)&&(ksid!=="undefined")&&(ksid!==undefined)&&(ksid!=="")) {
              AttachKSIDService();
            } else {
              mainPage.show();
            }
          }
        }
      } else {
        if(checkedHash)
        {
                        validationAlert("Warning","Invalid credentials");
                        kony.application.dismissLoadingScreen();  
        }
        else
        {
            checkedHash = true;
            mobileFabricConfigurationForLogin.integrationObj = mobileFabricConfigurationForLogin.konysdkObject.getIntegrationService(mobileFabricConfigurationForLogin.integrationServices[0].service);
            var operationName = mobileFabricConfigurationForLogin.integrationServices[0].operations[0];
            var headers= {};

            var dataLogin={};
            dataLogin["userName"]=login.usernameField.text;
            dataLogin["password"]=login.passwordField.text;

            mobileFabricConfigurationForLogin.integrationObj.invokeOperation(
              operationName,
              headers, dataLogin,
              getLoginSuccessCallback,
              getLoginErrorCallback
            );
        }
      }
    }
  } catch(e) {
    validationAlert("Warning","Network Error Please try again.");
    kony.print (" ********** Failure: " + JSON.stringify(e) + " ********** ");
    kony.application.dismissLoadingScreen();
  }
}

function getLoginErrorCallback (error)
{
  kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
  kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  validationAlert ("Warning","Network Error Please try again. "+JSON.stringify(error));
  kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}

//04.07.2017 To make alert validation less of a hassle.
// Utility functions
function validationAlert(title, description) {
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": title,
        "yesLabel": "OK",
        "message": description,
        "alertHandler": null
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}
