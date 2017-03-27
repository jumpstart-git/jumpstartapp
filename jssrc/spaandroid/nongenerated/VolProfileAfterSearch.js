                mobileFabricConfigurationForVolunteerProfile = {
                    appKey: "b2af2c81b9433dab6ce8f1cf7ec558ba",
                    appSecret: "da2e2dc029af1c2eedabd208d8469e7d",
                    serviceURL: "https://100014964.auth.konycloud.com/appconfig",
                    //appKey:"5fd11c44af43e233f2a9bb09e0100f47", 
                    //appSecret:"c600a59925b36419de1546056cd21557", 
                    //serviceURL:"https://100000507.auth.konycloud.com/appconfig",
                    integrationServices: [{
                        service: ["VolunteerProfile"],
                        operations: ["getVolunteerProfile"]
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
                function volunteerProfilePageService() {
                    // alert("enetred volunterr..yeyyyy");////actualy we have to cal service
                    // getVolunteerSuccessCallback1(gblVolunteersProfileList);
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
                    if (!mobileFabricConfigurationForVolunteerProfile.isKonySDKObjectInitialized) {
                        initializeMobileFabricForVolunteerProfile11();
                    } else if (mobileFabricConfigurationForVolunteerProfile.isKonySDKObjectInitialized) {
                        getVolunteerProfilePage();
                    }
                }
                //            else{
                //                                            // The user didn't pick a value so we'll show the alert
                //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
                //            }
                //}
                function initializeMobileFabricForVolunteerProfile11() {
                    //alert (" ********** Entering into initializeMobileFabric ********** ");
                    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                        //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                        mobileFabricConfigurationForVolunteerProfile.konysdkObject = new kony.sdk();
                        mobileFabricConfigurationForVolunteerProfile.konysdkObject.init(mobileFabricConfigurationForVolunteerProfile.appKey, mobileFabricConfigurationForVolunteerProfile.appSecret, mobileFabricConfigurationForVolunteerProfile.serviceURL, mobileFabricConfigurationForVolunteerProfileSuccess, mobileFabricConfigurationForVolunteerProfileFailure);
                        // alert(getNotification());
                    } else
                    //alert ("Network unavailable. Please check your network settings. ");
                        kony.print(" ********** Exiting out of initializeMobileFabric ********** ");
                }

                function mobileFabricConfigurationForVolunteerProfileSuccess(response) {
                    //kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
                    // alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                    mobileFabricConfigurationForVolunteerProfile.isKonySDKObjectInitialized = true;
                    kony.application.dismissLoadingScreen();
                    //authenticateMFUsingUserStore();
                    getVolunteerProfilePage();
                    kony.print(" ********** Exiting out of initializeMobileFabricSuccess ********** ");
                }

                function mobileFabricConfigurationForVolunteerProfileFailure(error) {
                    kony.print(" ********** Entering into initializeMobileFabricFailure ********** ");
                    //  alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                    kony.application.dismissLoadingScreen();
                    // alert (" Unable to initialize the application. Please try again. ");
                    kony.print(" ********** Exiting out of initializeMobileFabricFailure ********** ");
                }
                /*function authenticateMFUsingUserStore(){
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
                                mobileFabricConfigurationForVolunteer.isMFAuthenticated = true;
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
                }*/
                function getVolunteerProfilePage() {
                    //  alert("inside getVolunteerProfilePage");
                    //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                        //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                        //mamata           
                        mobileFabricConfigurationForVolunteerProfile.integrationObj = mobileFabricConfigurationForVolunteerProfile.konysdkObject.getIntegrationService(mobileFabricConfigurationForVolunteerProfile.integrationServices[0].service);
                        var operationName = mobileFabricConfigurationForVolunteerProfile.integrationServices[0].operations[0];
                        var headers = {};
                        //                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
                        //                                            data= {"newsType": selectedKey};
                        //         }else{
                        //                                            // The user didn't pick a value so we'll show the alert
                        //                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
                        //         }
                        // alert("operation name"+operationName);
                        var profiledata = {};
                        profiledata["id"] = kony.store.getItem("selReqId");
                        // alert("the id=="+JSON.stringify(profiledata));
                        mobileFabricConfigurationForVolunteerProfile.integrationObj.invokeOperation(operationName, headers, profiledata, getVolunteerSuccessCallback1, getVolunteerErrorCallback1);
                    } else alert("Network unavailable. Please check your network settings. ");
                }

                function getVolunteerSuccessCallback1(gblVolunteersProfileList) {
                    // alert("inside success"+JSON.stringify(gblVolunteersProfileList));
                    // Check the opstatus for 0 meaning it worked
                    if (gblVolunteersProfileList !== null && gblVolunteersProfileList.opstatus === 0) {
                        // alert("1");
                        // Checking to make sure we DO have results
                        if (gblVolunteersProfileList.volunteersList[0].VolunteersDTO !== null) {
                            // alert("2");
                            // Making sure we have at least 1 article returned
                            if (gblVolunteersProfileList.volunteersList.length > 0) {
                                // Now we know we have results so we'll print them out to check
                                //alert ("########## Response received from service call: "+JSON.stringify(gblVolunteersProfileList.volunteersList));
                                gblVolunteerProfileResponse = gblVolunteersProfileList;
                                setSegVolunteerProfileData(gblVolunteerProfileResponse);
                                // var gblVolunteerProfileResponse=JSON.stringify(notificationList);
                                //         
                            }
                        }
                    } else {
                        kony.application.dismissLoadingScreen();
                        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
                        kony.ui.Alert({
                            message: "Service call failed with opstatus " + volunteersList.opstatus,
                            alertType: constants.ALERT_TYPE_ERROR,
                            alertTitle: "Fox News",
                            yesLabel: "OK"
                        }, {});
                    }
                }

                function getVolunteerErrorCallback1(error) {
                    kony.print(" ********** Entering into getNotificationSuccessCallback ********** ");
                    kony.print(" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                    kony.application.dismissLoadingScreen();
                    alert(" Failed  ");
                    kony.print(" ********** Exiting out of getNotificationSuccessCallback ********** ");
                }

                function setSegVolunteerProfileData(gblVolunteerProfileResponse) {
                    try {
                        if (gblVolunteerProfileResponse != "undefined" && gblVolunteerProfileResponse != undefined) {
                            //alert("InSide"+JSON.stringify(gblVolunteerProfileResponse));
                            if (gblVolunteerProfileResponse["volunteersList"].length > 0) {
                                // alert("InSide isss"+JSON.stringify(gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].volunteerId));
                                var id = kony.store.getItem("selReqId");
                                //        for (var i = 0; i < gblVolunteerProfileResponse["volunteersList"].length; i++) 
                                //        {
                                // //           if(id==(gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].volunteerId))
                                // //           {
                                var cmpnyName = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].companyName;
                                var aboutVolunteer = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].aboutMe;
                                var volunteerfNme = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].firstName;
                                var volunteerLNme = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].lastName;
                                var volunteerAddress = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].address;
                                var volunteerFullNme = volunteerfNme + " " + volunteerLNme;
                                var volunteerPostn = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].role;
                                var WorkExp = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].workDetails;
                                var volunteerLat = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].latitude;
                                var volunteerLong = gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].longitude;
                                //  }
                                //}
                                //         else{
                                //           alert("Its not correct");}
                                //}
                                var skills = "";
                                //  alert("skill"+JSON.stringify(gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet));
                                for (var j = 0; j < gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet.length; j++) {
                                    skills = skills + "" + gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet[j].SkillsDTO.skillName;
                                }
                                //  alert("final skills="+skills);
                                // var Skills=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet[0].SkillsDTO.skillName ;
                                //var scheduleDays=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.days ;
                                //var schedulefromTime=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.fromTime ;
                                // var scheduletoTime=gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].schedule[0].VolunteerScheduleDTO.toTime ;
                                // var scheduleTime= schedulefromTime + " " +scheduletoTime;
                                // alert("salma"+gblVolunteerProfileResponse["volunteersList"][0]["VolunteersDTO"][0].skillSet);
                                //Mamata
                                // searchResultProfile.show();
                                searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfilePic.volunteerProfilePicImage.src = "";
                                searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileName.text = volunteerFullNme;
                                searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileBusinessUnitRole.text = volunteerPostn;
                                searchResultProfile.volunteerProfileContainer.volunteerProfileDetailsHeader.volunteerProfileDetailsContainer.volunteerProfileCompanyName.text = cmpnyName;
                                searchResultProfile.volunteerProfileContainer.volunteerProfileLocationContainer.volunteerProfileLocationAddressParent.volunteerProfileLocationAddressStateText.text = volunteerAddress;
                                searchResultProfile.volunteerProfileContainer.volunteerProfileAboutContainer.volunteerProfileAboutHeader.volunteerProfileAboutTextParent.volunteerProfileAboutText.text = volunteerFullNme;
                                searchResultProfile.volunteerProfileContainer.volunteerProfileAboutContainer.volunteerProfileAboutBody.volunteerProfileAboutBodyText.text = aboutVolunteer;
                                // searchResultProfile.volunteerProfileContainer.volunteerProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBody.volunteerProfileAvailabilityScheduleParent.volunteerProfileAvailabilityScheduleDays=scheduleDays;
                                //  searchResultProfile.volunteerProfileContainer.volunteerProfileAvailabilityContainer.volunteerProfileAvailabilityExperienceBody.volunteerProfileAvailabilityScheduleParent.volunteerProfileAvailabilityScheduleTime=scheduleTime;
                                searchResultProfile.volunteerProfileContainer.volunteerProfileSkillsContainer.volunteerProfileSkillsBody.volunteerProfileSkillsList.text = skills;
                                searchResultProfile.volunteerProfileContainer.volunteerProfileWorkExperienceContainer.volunteerProfileWorkExperienceRT.text = WorkExp;
                                searchResultProfile.show();
                                //searchResultProfile.volunteerProfileContainer.volunteer
                                searchResultProfile.volunteerProfileContainer.isVisible = true;
                                searchResultProfile.volunteerRequestContainer.isVisible = false;
                            }
                        }
                    } catch (e) {
                        alert("e is " + e);
                    }
                }