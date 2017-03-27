/*
mobileFabricConfiguration = 
	{
		appKey:"5c5dca689314ad40285f1adf69cc8f56", 
		appSecret:"3e5a62e91fc6d08ede933fa541b6b743", 
		serviceURL:"http://PATILMAM2.asiapacific.hpqcorp.net:8085/authService/100000002/appconfig",
		
  		//appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
		//appSecret:"c600a59925b36419de1546056cd21557", 
		//serviceURL:"https://100000507.auth.konycloud.com/appconfig",
		
  		integrationServices: 
		[
			{
				service:"TaskRequestService",
				operations:["getTaskRequest"]
			}
		],
  		/*identityServices: 
		[
			{
				service:"userstore",
				username:"ravichandra.pitchuka@kony.com",
              	password: "Kony@123"
			}
		],
		konysdkObject: null,
		authClient: null,
		integrationObj: null,
		isKonySDKObjectInitialized:false,
  		isMFAuthenticated: false
	};
function myActivityService99 (){
	// Let's get the news type the user selected
	//var selectedKey = frmFoxNews.lstNewsType.selectedKey;
	alert ("########## Selected Key:" + selectedKey);
  alert ("alert inside my activity");
	// Let's first check that the user picked a valid value
	//if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      // Populating the input params for the service call and invoking the service
      // We're passing in the selected key for the user's selection in the combobox
      // var inputParams = {serviceID:"getFoxNews",newsType:selectedKey};
      // Now we make the call to the service using our input parameters and specifying
      // the function processServiceResults as our callback when the service returns results
      // appmiddlewareinvokerasync(inputParams, processServiceResults);
      if (!mobileFabricConfiguration.isKonySDKObjectInitialized)
      {
			initializeMobileFabric();
            
      }
      else if (mobileFabricConfiguration.isKonySDKObjectInitialized)
      {
          getMyActivity99();
      }
	}
function initializeMobileFabric ()
{
	alert (" ********** Entering into initializeMobileFabric ********** ");
	if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
	{
		//kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
		mobileFabricConfiguration.konysdkObject = new kony.sdk();
		mobileFabricConfiguration.konysdkObject.init(mobileFabricConfiguration.appKey,mobileFabricConfiguration.appSecret,mobileFabricConfiguration.serviceURL,initializeMobileFabricSuccess,initializeMobileFabricFailure);  
      // alert(getMyActivity());
    }
	else
		alert ("Network unavailable. Please check your network settings. ");
	kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricSuccess(response)
{
	kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
	alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
	mobileFabricConfiguration.isKonySDKObjectInitialized=true;
	kony.application.dismissLoadingScreen();
	//authenticateMFUsingUserStore();
     getMyActivity();
	kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricFailure(error)
{
	kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
	alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
	kony.application.dismissLoadingScreen();
	alert (" Unable to initialize the application. Please try again. ");
	kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}



*/