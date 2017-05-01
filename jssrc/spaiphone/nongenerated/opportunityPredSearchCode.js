var opportunityarray3 = [];
var skillOppArr = [];

function opportunityListValues() {
    // alert("1");
    var tempArray = [];
    var arr2 = [];
    for (var i = 0; i < gblForOpportunityPred.taskList.length; i++) {
        tempArray.push(gblForOpportunityPred.taskList[i].TasksDTO[0]);
    }
    //alert("temmm"+JSON.stringify(tempArray));
    var titletArr = [];
    // var skillArr=[];
    skillOppArr = [];
    for (var k = 0; k < tempArray.length; k++) {
        titletArr.push(tempArray[k].title);
        //start jan 15
        var skillstrVal = tempArray[k].taskSkills;
        //var strSkill="Java,Kony,mobility";
        var arr3 = skillstrVal.split(",");
        for (var i = 0; i < arr3.length; i++) {
            skillOppArr.push(arr3[i]);
        }
        //end jan 15
        // skillOppArr.push(tempArray[k].taskSkills) ;
    }
    var array2 = titletArr.concat(skillOppArr).unique();
    opportunityarray3 = array2; //firstArr.concat(locArr).unique();
    //alert("array3 business"+JSON.stringify(opportunityarray3));
}

function changeOppSearch() {
    try {
        // alert("here"+JSON.stringify(businessarray3));
        //console.log(JSON.stringify(array3)); 
        var str = searchPage.searchTxtbox.text;
        var b = str.toLowerCase();
        var myRegExp = "^" + b;
        var dispArr = [];
        for (var i = 0; i < opportunityarray3.length; i++) {
            if (opportunityarray3[i].toLowerCase().match(myRegExp)) {
                dispArr.push(opportunityarray3[i]);
            }
        }
        /*  
    for(var l=0;l<locArr.length;l++)
      {
        
        var result=containsWord(locArr[l].toLowerCase(),b);
        if(result==true)
          {
            
             dispArr.push(locArr[l]);
          }
        
        
      }
*/
        //  alert("disppp==="+JSON.stringify(dispArr));
        popuOppoprtunity(dispArr);
    } catch (e) {
        alert("the prob" + e);
    }
}

function popuOppoprtunity(dispArr) {
    //start///
    // alert("before"+JSON.stringify(dispArr));
    var uniqueNames = [];
    for (var i in dispArr) {
        if (uniqueNames.indexOf(dispArr[i]) === -1) {
            uniqueNames.push(dispArr[i]);
        }
    }
    dispArr = uniqueNames;
    dispArr.pop();
    // alert("after"+JSON.stringify(dispArr)); 
    //end
    try {
        searchPage.segPredictive.widgetDataMap = {
            "lblSuggestions": "lblSuggestions"
        };
        if (dispArr.length > 0) {
            var tempData = [];
            var lenVal = dispArr.length;
            for (var i = 0; i < lenVal; i++) {
                var fName = dispArr[i];
                var testobj = {
                    lblSuggestions: fName
                }
                tempData.push(testobj);
            }
            // alert(searchPage.searchTxtbox.text.length);
            if (searchPage.searchTxtbox.text.length == "0.0") {
                searchPage.segPredictive.removeAll();
                if (gblIsOpp == true) {
                    // alert("innn"+JSON.stringify(gblResponseOppurtunitySearch));
                    setSegDatasearchOppurtunitySetting(gblResponseOppurtunitySearch);
                } else {
                    if (gblIsVol == true) {
                        setSegData(gblResponse);
                        gblForVolSort = gblResponse;
                    } else {
                        setSegDatasearchBusiness(gblResponseBusinessSearch);
                        gblResponseBusinessSearchForSort = gblResponseBusinessSearch;
                    }
                }
            } else {
                searchPage.segPredictive.setData(tempData);
            }
        } else {
            searchPage.segPredictive.removeAll();
            //  alert("No Matches");
        }
    } catch (e) {
        alert("the problem" + e);
    }
}

function setSegDatasearchOppurtunitySetting(gblResponseOppurtunitySearch) {
    kony.application.showLoadingScreen(null, "Loading..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
        shouldShowLabelInBottom: "false",
        separatorHeight: 20
    });
    try {
        if (gblResponseOppurtunitySearch != "undefined" && gblResponseOppurtunitySearch != undefined) {
            //kony.print("InSide setSegDatasearchOppurtunity:"+JSON.stringify(gblResponseOppurtunitySearch));
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
                "searchDistanceLabel": "searchDistanceLabel",
                "searchTaskId": "searchTaskId"
            };
            //alert("1meeee");
            if (gblResponseOppurtunitySearch["taskList"].length > 0) {
                var tempData = [];
                var len = gblResponseOppurtunitySearch["taskList"].length; // 20;//
                // alert("len"+len);
                //var len=29;
                // for (var i = 0; i < len; i++) {
                for (var i = len - 1; i >= 0; i--) {
                    var taskName = gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].title;
                    // alert("taskName:"+JSON.stringify(taskName));
                    ///strt 18
                    // alert("req:"+JSON.stringify(gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"]));
                    // alert(i);
                    if ((gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !== null) && (gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !== "null") && (gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !== "") && (gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !== " ") && (gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !== undefined) && (gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !== "undefined") && (gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"] !== 'undefined')) {
                        var volunteerOppImgPath1 = gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessImagePath;
                    } else {
                        var volunteerOppImgPath1 = "imgseglogo.png";
                    }
                    //end 18
                    // var volunteerOppImgPath1=gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0]["request"][0]["Request"].businessImagePath;
                    // alert("volunteerOppImgPath1"+volunteerOppImgPath1);
                    var skills = gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].taskSkills;
                    var oppTaskId = gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].taskId;
                    //alert("skills:"+JSON.stringify(skills));
                    // alert("oppTaskId:"+oppTaskId);
                    kony.store.setItem("oppTaskId", oppTaskId);
                    var busName = gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].businessName;
                    //alert("busName:"+JSON.stringify(busName));
                    var busIOpp = gblResponseOppurtunitySearch["taskList"][i]["TasksDTO"][0].businessId;
                    kony.store.setItem("busIOpp", busIOpp);
                    var oppimagepathVol77 = "imgseglogo.png";
                    if (volunteerOppImgPath1 != null && volunteerOppImgPath1 != "null") {
                        oppimagepathVol77 = "http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/" + volunteerOppImgPath1;
                    }
                    //alert("her1");       
                    // var volunteerLNme=gblResponseOppurtunitySearch["businessBbj"][i]["BusinessDTO"].lastName ;
                    // var volunteerFullNme= volunteerfNme + " " +volunteerLNme
                    // var volunteerPostn=gblResponse["businessBbj"][i]["BusinessDTO"].role ;        
                    var testOppurtunitySearchData = {
                        "CompanyNameLbl": busName,
                        "volunteerName": taskName,
                        "volunteerPosition": "",
                        "VolunteerLevel": "Looking for skills",
                        "searchBookmarkImage": " ", //"bookmarkoff.png",
                        "searchBookmarkLabel": " ", //"BookMark",
                        "searchDistanceLabel": " ",
                        "searchDistanceImage": "location.png",
                        "volunteerImg": oppimagepathVol77, // "imgseglogo.png",
                        "businessLat": " ",
                        "businessLong": " ",
                        "searchTaskId": oppTaskId,
                        "volunteerId": busIOpp
                    };
                    // kony.print
                    kony.print("her2" + i);
                    tempData.push(testOppurtunitySearchData);
                }
                //alert("tempDatamerrr"+JSON.stringify(tempData));
                // alert("salma");
                searchPage.DataFlexScrollContainer.volunteerdataSegment.setData(tempData);
                kony.application.dismissLoadingScreen();
                // kony.application.dismissLoadingScreen();
                // gblResponse=tempData;
            } else {
                alert("no items to display");
                searchPage.DataFlexScrollContainer.volunteerdataSegment.removeAll();
                kony.application.dismissLoadingScreen();
            }
        }
    } catch (e) {
        alert("error " + JSON.stringify(e));
        kony.application.dismissLoadingScreen();
    }
}