//Type your code here
var gblIsVol = false;
mobileFabricConfigurationForsearchBusiness = {
    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
    //appSecret:"c600a59925b36419de1546056cd21557", 
    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "BusinessSearchService",
        operations: ["getBusinessList"]
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
function searchBusiness() {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    //  alert("searchBusiness");
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
    if (!mobileFabricConfigurationForsearchBusiness.isKonySDKObjectInitialized) {
        mobileFabricConfigurationForsearchBusiness1();
    } else if (mobileFabricConfigurationForsearchBusiness.isKonySDKObjectInitialized) {
        getBusinessData();
    }
}
//            else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//            }
//}
function mobileFabricConfigurationForsearchBusiness1() {
    // alert (" ********** Entering into initializeMobileFabric ********** ");
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForsearchBusiness.konysdkObject = new kony.sdk();
        mobileFabricConfigurationForsearchBusiness.konysdkObject.init(mobileFabricConfigurationForsearchBusiness.appKey, mobileFabricConfigurationForsearchBusiness.appSecret, mobileFabricConfigurationForsearchBusiness.serviceURL, mobileFabricConfigurationForsearchBusinessSuccess, mobileFabricConfigurationForsearchBusinessFailure);
        //  alert("bbbb");
    } else
    //alert ("Network unavailable. Please check your network settings. ");
        kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
}

function mobileFabricConfigurationForsearchBusinessSuccess(response) {
    kony.print(" ********** Entering into initializeMobileFabricSuccess ********** ");
    //      alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForsearchBusiness.isKonySDKObjectInitialized = true;
    //kony.application.dismissLoadingScreen();
    //authenticateMFUsingUserStore();
    getBusinessData();
    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function mobileFabricConfigurationForsearchBusinessFailure(error) {
    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert (" Unable to initialize the application. Please try again. ");
    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore() {
    //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
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
    //  alert (" ********** Entering into loginMFSuccess ********** ");
    // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    mobileFabricConfigurationForsearchBusiness.isMFAuthenticated = true;
    kony.application.dismissLoadingScreen();
    getNotification();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
}

function getBusinessData() {
    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
        mobileFabricConfigurationForsearchBusiness.integrationObj = mobileFabricConfigurationForsearchBusiness.konysdkObject.getIntegrationService(mobileFabricConfigurationForsearchBusiness.integrationServices[0].service);
        // mobileFabricConfigurationForVolunteer.integrationObj = mobileFabricConfigurationForVolunteer.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteer.integrationServices[0].service);
        var operationName = mobileFabricConfigurationForsearchBusiness.integrationServices[0].operations[0];
        var headers = {};
        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        //                                            data= {"newsType": selectedKey};
        //         }else{
        //                                            // The user didn't pick a value so we'll show the alert
        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
        //         }
        //var data="1";
        var data = {};
        // alert("operation name"+operationName);
        mobileFabricConfigurationForsearchBusiness.integrationObj.invokeOperation(operationName, headers, data, getBusinessDataSuccessCallback, getBusinessDataErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getBusinessDataSuccessCallback(gblBusinessDataList) {
    //alert("innnnnn");
    // Check the opstatus for 0 meaning it worked
    if (gblBusinessDataList !== null && gblBusinessDataList.opstatus === 0) {
        // alert("1");
        // Checking to make sure we DO have results
        if (gblBusinessDataList.businessBbj[0].BusinessDTO !== null) {
            // alert("2");
            // Making sure we have at least 1 article returned
            if (gblBusinessDataList.businessBbj.length > 0) {
                // Now we know we have results so we'll print them out to check
                //alert ("########## Response received from service call: "+JSON.stringify(gblVolunteersList.volunteersList));
                gblResponseBusinessSearch = gblBusinessDataList;
                gblForPred = gblBusinessDataList;
                gblResponseBusinessSearchForSort = gblBusinessDataList;
                businessListValues();
                setSegDatasearchBusiness(gblResponseBusinessSearch);
                // var gblResponse=JSON.stringify(notificationList);
                //Setting the segment widgetdataMap 
                //          frmFoxNews.segNewsTitle.widgetDataMap={lblTitle:"title",hiddenDesc:"desc",hiddenPubDate:"pubDate"}; 
                //      //      Setting the data to the segment
                //      frmFoxNews.segNewsTitle.setVisibility(true);
                //          frmFoxNews.segNewsTitle.setData(notificationList.MessageDTO.news_item.title);
                //          kony.application.dismissLoadingScreen();
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + businessBbj.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Fox News",
            yesLabel: "OK"
        }, {});
    }
}

function getBusinessDataErrorCallback(error) {
    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    // alert ("Failed to fetch response ");
    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
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
function setSegDatasearchBusiness(gblResponseBusinessSearch) {
    try {
        if (gblResponseBusinessSearch != "undefined" && gblResponseBusinessSearch != undefined) {
            // alert("InSide setSegDatasearchBusiness"+JSON.stringify(gblResponseBusinessSearch));
            // alert("InSide"+JSON.stringify(gblResponse));
            searchPage.searchPageDashboardFlex.DataFlexScrollContainer.volunteerdataSegment.widgetDataMap = {
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
                "volunteerId": "volunteerId",
                "searchBookmarkLabel": "searchBookmarkLabel",
                "searchDistanceLabel": "searchDistanceLabel"
            };
            //alert("1meeee");
            if (gblResponseBusinessSearch["businessBbj"].length > 0) {
                var tempData = [];
                var len = gblResponseBusinessSearch["businessBbj"].length;
                for (var i = 0; i < len; i++) {
                    var cmpnyName = gblResponseBusinessSearch["businessBbj"][i]["BusinessDTO"].businessName;
                    var businessLat1 = gblResponseBusinessSearch["businessBbj"][i]["BusinessDTO"].latitude;
                    var businessLong1 = gblResponseBusinessSearch["businessBbj"][i]["BusinessDTO"].longitude;
                    var businessId = gblResponseBusinessSearch["businessBbj"][i]["BusinessDTO"].businessId;
                    var busAddress = gblResponseBusinessSearch["businessBbj"][i]["BusinessDTO"].address1;
                    var volunteerImgPath1 = gblResponseBusinessSearch["businessBbj"][i]["BusinessDTO"]["businessUserId"].imagePath;
                    var imagepathVol1 = "imgseglogo.png";
                    if (volunteerImgPath1 != null && volunteerImgPath1 != "null") {
                        imagepathVol1 = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + volunteerImgPath1;
                    }
                    // var volunteerLNme=gblResponseBusinessSearch["businessBbj"][i]["BusinessDTO"].lastName ;
                    // var volunteerFullNme= volunteerfNme + " " +volunteerLNme
                    // var volunteerPostn=gblResponse["businessBbj"][i]["BusinessDTO"].role ;        
                    var testBusinessSearchData = {
                        "CompanyNameLbl": cmpnyName,
                        "volunteerName": " ",
                        "volunteerPosition": " ",
                        "VolunteerLevel": "Looking for skills",
                        "searchBookmarkImage": " ", //"bookmarkoff.png",
                        "searchBookmarkLabel": " ", //"BookMark",
                        "searchDistanceLabel": busAddress,
                        "searchDistanceImage": "location.png",
                        "volunteerImg": imagepathVol1, // "imgseglogo.png",
                        "businessLat": businessLat1,
                        "businessLong": businessLong1,
                        "volunteerId": businessId
                    };
                    tempData.push(testBusinessSearchData);
                }
                searchPage.DataFlexScrollContainer.volunteerdataSegment.setData(tempData);
                kony.application.dismissLoadingScreen();
                // gblResponse=tempData;
            } else {
                alert("no items to display");
                searchPage.DataFlexScrollContainer.volunteerdataSegment.removeAll();
                kony.application.dismissLoadingScreen();
            }
        }
    } catch (e) {
        //    alert("error "+e);
        kony.application.dismissLoadingScreen();
    }
}

function sortResponse(gblResponseBusinessSearch) {
    //alert("received"+JSON.stringify(gblResponse));
    var tempArray = [];
    //From the response we fill filter json array .Beacause for sort we need data in array.
    //tempArray  is the array [json array]
    for (var i = 0; i < gblResponseBusinessSearch.businessBbj.length; i++) {
        //alert("inside for"+gblResponse.volunteersList.length);
        tempArray.push(gblResponseBusinessSearch.businessBbj[i].BusinessDTO);
    }
    //alert("before"+JSON.stringify(tempArray)) ;
    //now we will get complete json array in tempArray
    //sorting is done on the basis of first name
    function SortByName(x, y) {
        return ((x.firstName == y.firstName) ? 0 : ((x.firstName > y.firstName) ? 1 : -1));
    }
    //calling sort function
    tempArray.sort(SortByName);
    // for(var n=0;n<tempArray.length;n++){
    //onsole.log(tempArray[n].volunteerId + ' ' + tempArray[n].firstName + '<br>');
    //  }
    //once we get sorted array we need to make the sorted response in json format.Below steps are done for the same
    //alert("once"+JSON.stringify(tempArray));
    var sortedresp = {};
    sortedresp.businessBbj = [];
    for (var j = 0; j < tempArray.length; j++) {
        //alert("1"+tempArray[j]);
        var testtobj = {
            "BusinessDTO": tempArray[j]
        };
        sortedresp.businessBbj.push(testtobj);
    }
    //sortedresp is the final sorted json response
    //console.log(JSON.stringify(sortedresp));
    //now map this "sortedresp" to segment
    //alert("sortedresp"+JSON.stringify(sortedresp));
    setSegDatasearchBusiness(sortedresp);
}

function searchData() {
    var tempArray = [];
    for (var i = 0; i < gblResponse.businessBbj.length; i++) {
        tempArray.push(gblResponse.businessBbj[i].BusinessDTO);
    }
    //alert("tempArray"+JSON.stringify(tempArray));
    var b = searchPage.searchTxtbox.text.toLowerCase();
    //alert(b);
    var myRegExp = "^" + b;
    hasTag(tempArray, myRegExp);
}
var hasTag = function(tempArray, myRegExp) {
        var searchres = [];
        var i = null;
        // alert("after tempArray"+JSON.stringify(tempArray));
        for (i = 0; tempArray.length > i; i += 1) {
            //if (tags[i].tagName === tagName) {
            //searchres.push(tags[i]);
            //}
            //alert("innn");
            if (tempArray[i].firstName.toLowerCase().match(myRegExp)) {
                searchres.push(tempArray[i]);
            }
        }
        //console.log("First"+JSON.stringify(searchres));
        // console.log(JSON.stringify(resp));
        // alert("searchres"+JSON.stringify(searchres));
        var searchedresp = {};
        searchedresp.businessBbj = [];
        for (var j = 0; j < searchres.length; j++) {
            var testobj = {
                "BusinessDTO": searchres[j]
            };
            searchedresp.businessBbj.push(testobj);
        }
        //alert("searchedresp"+JSON.stringify(searchedresp));
        setSegDatasearchBusiness(searchedresp);
        gblResponseBusinessSearch = searchedresp;
    }
    ///////start merin
function sortBusinessResponse(gblResponseBusinessSearch) {
    try {
        //alert("received"+JSON.stringify(gblResponseBusinessSearch));
        var tempArray = [];
        //From the response we fill filter json array .Beacause for sort we need data in array.
        //tempArray  is the array [json array]
        for (var i = 0; i < gblResponseBusinessSearch.businessBbj.length; i++) {
            //alert("inside for"+gblResponse.volunteersList.length);
            tempArray.push(gblResponseBusinessSearch.businessBbj[i].BusinessDTO);
        }

        function SortByNameBusiness(x, y) {
            return ((x.businessName == y.businessName) ? 0 : ((x.businessName > y.businessName) ? 1 : -1));
        }
        //calling sort function
        tempArray.sort(SortByNameBusiness);
        // for(var n=0;n<tempArray.length;n++){
        //onsole.log(tempArray[n].volunteerId + ' ' + tempArray[n].firstName + '<br>');
        //  }
        //once we get sorted array we need to make the sorted response in json format.Below steps are done for the same
        //alert("once"+JSON.stringify(tempArray));
        var sortedresp = {};
        sortedresp.businessBbj = [];
        for (var j = 0; j < tempArray.length; j++) {
            //alert("1"+tempArray[j]);
            var testtobj = {
                "BusinessDTO": tempArray[j]
            };
            sortedresp.businessBbj.push(testtobj);
        }
        //sortedresp is the final sorted json response
        //console.log(JSON.stringify(sortedresp));
        //now map this "sortedresp" to segment
        //alert("sortedresp"+JSON.stringify(sortedresp));
        setSegDatasearchBusiness(sortedresp);
    } catch (e) {
        //   alert("the error is" +e);
    }
}
///end merin
//Type your code here