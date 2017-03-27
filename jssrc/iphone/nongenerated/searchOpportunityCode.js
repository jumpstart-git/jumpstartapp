//Type your code here
function searchDataofOpportunity() {
    //alert("searchData21"+JSON.stringify(gblResponse)); 
    try {
        if ((gblResponseForOpportunitySearch != "undefined") && (gblResponseForOpportunitySearch != undefined)) {
            var tempArray = [];
            for (var i = 0; i < gblResponseForOpportunitySearch.taskList.length; i++) {
                tempArray.push(gblResponseForOpportunitySearch.taskList[i].TasksDTO[0]);
            }
            //alert("gblResponseForOpportunitySearch"+JSON.stringify(gblResponseForOpportunitySearch));
            var b = searchPage.searchTxtbox.text.toLowerCase();
            //alert(b);
            //start 20
            var arrofB = b.split(',');
            var testArrCombine = [];
            for (var l = 0; l < arrofB.length; l++) {
                var newB = arrofB[l];
                newB = newB.trim();
                var myRegExp = "^" + newB;
                var testArr = hasTagOpportunity(tempArray, myRegExp, newB);
                testArrCombine = testArrCombine.concat(testArr);
            }
            // alert("testArrCombine"+JSON.stringify(testArrCombine));
            //start 20 noon
            testArrCombine = removeDuplicateOpportunity(testArrCombine, 'taskId');
            testArrCombine.pop();
            // alert("testArrCombine after"+JSON.stringify(testArrCombine));
            //end jan 20 noon
            searchjan20Opp(testArrCombine);
            //end 20
            //var myRegExp="^"+b;
            //hasTagOpportunity(tempArray,myRegExp,b);
        } else {
            alert("no items to display");
            searchPage.DataFlexScrollContainer.volunteerdataSegment.removeAll();
            kony.application.dismissLoadingScreen();
        }
    } catch (e) {
        alert("error1" + e);
    }
}
var hasTagOpportunity = function(tempArray, myRegExp, b) {
        try {
            var searchres = [];
            var i = null;
            //alert("after tempArray "+JSON.stringify(tempArray));
            for (i = 0; tempArray.length > i; i += 1) {
                // var n1 = tempArray[i].title.toLowerCase().search(b);
                //if ((tempArray[i].businessName.toLowerCase().match(myRegExp))
                // var n1 = tempArray[i].title.toLowerCase().match(myRegExp);
                //start again
                var test = tempArray[i].taskSkills.toLowerCase(); //'java,mobility,kony';
                if (test.indexOf(b) >= 0) {
                    //console.log("Found");
                    var n2 = 1;
                } else {
                    //console.log("not Found");
                    var n2 = -1;
                }
                //end again
                // if ((n1!=-1)||(n2!=-1)) {
                if (tempArray[i].title.toLowerCase().match(myRegExp) || (n2 != -1)) {
                    searchres.push(tempArray[i]);
                }
            }
            return searchres;
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }
    //alert("searchres before  modifying"+JSON.stringify(searchres));
function searchjan20Opp(searchres) {
    try {
        // alert("the result==="+JSON.stringify(searchres))
        var searchedresp = {};
        searchedresp.taskList = [];
        var arr = [];
        for (var k = 0; k < searchres.length; k++) {
            arr.push(searchres[k]);
            //alert("arr before  modifying"+JSON.stringify(arr));
            var testobj = {
                "TasksDTO": arr
            };
            arr = [];
            searchedresp.taskList.push(testobj);
        }
        // searchedresp.volunteersList.push(testobj);
        //alert("searchedresp"+JSON.stringify(searchedresp));
        //setSegData(searchedresp);
        setSegDatasearchOppurtunitySetting(searchedresp);
        //gblForVolSort=searchedresp;
    } catch (e) {
        alert("error2222" + e);
    }
}