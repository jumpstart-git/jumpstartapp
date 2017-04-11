function getOppTaskId() {
    var segOppRowClickForBusEdit = mainPage.mainPageContentParent.myActivity.unAssignedTasksContainer.unAssignedTaskListContainer.unassignedTaskList.selectedRowItems;
    var oppRowTaskId = segOppRowClickForBusEdit[0].taskId;
    // alert(segOppRowClickForBusEdit);
    kony.store.setItem("TaskIdFromOppSegForEdit", oppRowTaskId);
    // alert("task ID"+oppRowTaskId);
    BusinessGetOppDetailsService();
}
mobileFabricConfigurationForGetOppDetailsforBus = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: ["BusinessGetTaskDetails"],
        operations: ["getTaskDetailsByBusinessId"]
    }],
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
    isKonySDKObjectInitialized: false,
    isMFAuthenticated: false
};
// Function to invoke getFoxNews Service call
function BusinessGetOppDetailsService() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //alert("inside edit task");  
    //  getOppTaskId();
    if (!mobileFabricConfigurationForGetOppDetailsforBus.isKonySDKObjectInitialized) {
        initializeMobileFabricForGetOppDetailsForBus();
    } else if (mobileFabricConfigurationForGetOppDetailsforBus.isKonySDKObjectInitialized) {
        getBusinessGetOpportunityDetails();
    }
}
// 	else{
// 			// The user didn't pick a value so we'll show the alert
// 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//	}
//}
function initializeMobileFabricForGetOppDetailsForBus() {
    //alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetOppDetailsforBus.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForGetOppDetailsforBus.konysdkObject.init(mobileFabricConfigurationForGetOppDetailsforBus.appKey, mobileFabricConfigurationForGetOppDetailsforBus.appSecret, mobileFabricConfigurationForGetOppDetailsforBus.serviceURL, initializeMobileFabricForGetOppDetailsForBusSuccess, initializeMobileFabricForGetOppDetailsForBusFailure);
        // alert(getBusinessGetOpportunityDetails());
    } else alert("Network unavailable. Please check your network settings. ");
    kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForGetOppDetailsForBusSuccess(response) {
    // alert("mf success inside edit task"); 
    //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
    //alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetOppDetailsforBus.isKonySDKObjectInitialized = true;
    kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessGetOpportunityDetails();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForGetOppDetailsForBusFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
    //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfiguration.authClient = mobileFabricConfiguration.konysdkObject.getIdentityService(mobileFabricConfiguration.identityServices[0].service);
    var authParams = {
        "userid": mobileFabricConfiguration.identityServices[0].username,
        "password": mobileFabricConfiguration.identityServices[0].password
    };
    mobileFabricConfiguration.authClient.login(authParams, loginMFSuccess, loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");
}

function loginMFSuccess(response) {
    //	alert (" ********** Entering into loginMFSuccess ********** ");
    //	alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForGetOppDetailsforBus.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getBusinessGetOpportunityDetails();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessGetOpportunityDetails() {
    //alert("inside getBusinessGetOpportunityDetails");
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForGetOppDetailsforBus.integrationObj = mobileFabricConfigurationForGetOppDetailsforBus.konysdkObject.getIntegrationService(mobileFabricConfigurationForGetOppDetailsforBus.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForGetOppDetailsforBus.integrationServices[0].operations[0];
        var headers = {};
        // 		if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        // 			data= {"newsType": selectedKey};
        //         }else{
        // 			// The user didn't pick a value so we'll show the alert
        // 		    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        var oppTaskId = {};
        oppTaskId["id"] = kony.store.getItem("TaskIdFromOppSegForEdit"); //"1";//kony.store.getItem("businessId"); 
        //alert(oppTaskId["id"]);
        mobileFabricConfigurationForGetOppDetailsforBus.integrationObj.invokeOperation(operationName, headers, oppTaskId, getBusinessGetOpportunityDetailsSuccessCallback, getBusinessGetOpportunityDetailsErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessGetOpportunityDetailsSuccessCallback(gblOpportunityDetailsList) {
    //alert("inside getBusinessGetOpportunityDetailsSuccessCallback nov 21 "+JSON.stringify(gblOpportunityDetailsList));
    // alert("type==="+typeof(gblOpportunityDetailsList));
    // Check the opstatus for 0 meaning it worked
    if (gblOpportunityDetailsList !== null && gblOpportunityDetailsList.opstatus === 0) {
        ///start merin
        //  alert("gblOpportunityDetailsList.TasksDTO"+JSON.stringify(gblOpportunityDetailsList.TasksDTO));
        if (gblOpportunityDetailsList.TasksDTO !== "undefined" && gblOpportunityDetailsList.TasksDTO != undefined) {
            if (gblOpportunityDetailsList.TasksDTO !== null && gblOpportunityDetailsList.TasksDTO !== "null") {
                // alert("2");
                // Making sure we have at least 1 article returned
                // if (gblOpportunityDetailsList.ReqTaskDetailsList.length > 0){
                // Now we know we have results so we'll print them out to check
                //  alert ("########## Response received from service call nov 21: "+JSON.stringify(gblOpportunityDetailsList.TasksDTO));
                gblOppBusinessResponse = gblOpportunityDetailsList;
                getSegBusinessGetOpportunityDetailsData(gblOppBusinessResponse);
                //  var gblOppBusinessResponse=JSON.stringify(TasksDTO);
                // var gblOppBusinessResponse=JSON.stringify(gblOpportunityDetailsList);
            }
        }
    } //merin end
}

function getBusinessGetOpportunityDetailsErrorCallback(error) {
    kony.print(" ********** Entering into getBusinessGetOpportunityDetailsSuccessCallback ********** ");
    kony.print(" ********** Failure in getBusinessGetOpportunityDetailsSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //  alert (" Coming Inside Error call back");
    kony.print(" ********** Exiting out of getBusinessGetOpportunityDetailsSuccessCallback ********** ");
}

function getSegBusinessGetOpportunityDetailsData(gblOppBusinessResponse) {
    if (gblOppBusinessResponse != "undefined" && gblOppBusinessResponse != undefined) {
        //  alert("InSide"+JSON.stringify(gblOppBusinessResponse));
        if (gblOppBusinessResponse["TasksDTO"].length > 0) {
            var tempData = [];
            var tempDataSentReq = [];
            var len = gblOppBusinessResponse["TasksDTO"].length;
            var status;
            var RequestType;
            var taskId = gblOppBusinessResponse["TasksDTO"][0].taskId;
            var title = gblOppBusinessResponse["TasksDTO"][0].title;
            var details = gblOppBusinessResponse["TasksDTO"][0].details;
            var start_date = gblOppBusinessResponse["TasksDTO"][0].start_date;
            var end_date = gblOppBusinessResponse["TasksDTO"][0].end_date;
            var hoursRequired = gblOppBusinessResponse["TasksDTO"][0].hoursRequired;
            var skills = gblOppBusinessResponse["TasksDTO"][0].taskSkills;
            var time = gblOppBusinessResponse["TasksDTO"][0].messageTime;
            if (skills === "null" || skills === null || skills === "") {
                skills = "";
            }
            //alert(title);
            var dateTest = [];
            dateTest = start_date.split("-"); //"2016-01-19"
            //var date1=dateTest[2]+"/"+dateTest[1]+"/"+dateTest[0];//"19/10/2016"
            //var date2=date1.split('/');
            //var date2=date1[0]+"/"+date1[1]+"/"+date1[2];
            // mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppStartDateCalendarInput.dateComponents=[dateTest[2],dateTest[1],dateTest[0]];
            // alert(JSON.stringify(dateTest));
            var dateTest1 = [];
            dateTest1 = end_date.split("-");
            // var date3=dateTest1[2]+"/"+dateTest1[1]+"/"+dateTest1[0];
            // var date4=date3[0]+"/"+date3[1]+"/"+date3[2];
            //mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppEndDateCalendarInput.dateComponents=[dateTest1[2],dateTest1[1],dateTest1[0]];
            //alert(JSON.stringify(dateTest1));
            mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppTitleInputLabel.text = title;
            mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppDetailsInputLabel.text = details;
            mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppSkillsInputLabel.text = skills;
            mainPage.opportunityDetailsContainer.EditOpprotunityBodyContainer.OppHoursInputLabel.text = hoursRequired;
            mainPage.opportunityDetailsContainer.isVisible = true;
            kony.application.dismissLoadingScreen();
        }
    }
}