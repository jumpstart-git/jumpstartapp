function AS_Button_bd7db8e1514f431dacae75ed5f8ed7a3(eventobject) {
    //Type your code here
    if (gblIsVol == true) {
        //start
        var tempArrayForCity = [];
        for (var i = 0; i < gblForVolSort.volunteersList.length; i++) {
            tempArrayForCity.push(gblForVolSort.volunteersList[i].VolunteersDTO[0]);
        }

        function SortByCity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city > y.city) ? 1 : -1));
        }
        //calling sort function
        tempArrayForCity.sort(SortByCity);
        var sortedrespCity = {};
        sortedrespCity.volunteersList = [];
        var arrCity = [];
        for (var j = 0; j < tempArrayForCity.length; j++) {
            arrCity.push(tempArrayForCity[j]);
            // alert("arr before  modifying"+JSON.stringify(arr));
            var testobj = {
                "VolunteersDTO": arrCity
            };
            arrCity = [];
            sortedrespCity.volunteersList.push(testobj);
        }
        gblForVolSort = sortedrespCity;
        //end
        var tempArray = [];
        for (var i = 0; i < gblForVolSort.volunteersList.length; i++) {
            tempArray.push(gblForVolSort.volunteersList[i].VolunteersDTO[0]);
        }
        for (var i = 0; i < tempArray.length; i++) {
            if (tempArray[i].skillSet != null) {
                var user = tempArray[i].skillSet;
                var ar = user.sort(function(a, b) {
                    var nA = a.SkillsDTO.skillName.toLowerCase();
                    var nB = b.SkillsDTO.skillName.toLowerCase();
                    if (nA < nB) return -1;
                    else if (nA > nB) return 1;
                    return 0;
                });
                tempArray[i].skillSet = ar;
            }
        }
        //alert(JSON.stringify(tempArray));
        skillSortedResponse(tempArray);
    } else {
        /////start city business
        var tempArrayBusinessCity = [];
        for (var i = 0; i < gblResponseBusinessSearchForSort.businessBbj.length; i++) {
            tempArrayBusinessCity.push(gblResponseBusinessSearchForSort.businessBbj[i].BusinessDTO);
        }

        function SortByBusinessCity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city > y.city) ? 1 : -1));
        }
        //calling sort function
        tempArrayBusinessCity.sort(SortByBusinessCity);
        var sortedrespBusinessCity = {};
        sortedrespBusinessCity.businessBbj = [];
        for (var j = 0; j < tempArrayBusinessCity.length; j++) {
            //alert("1"+tempArray[j]);
            var testtobj = {
                "BusinessDTO": tempArrayBusinessCity[j]
            };
            sortedrespBusinessCity.businessBbj.push(testtobj);
        }
        gblResponseBusinessSearchForSort = sortedrespBusinessCity;
        //end city business
        var tempArray = [];
        for (var i = 0; i < gblResponseBusinessSearchForSort.businessBbj.length; i++) {
            tempArray.push(gblResponseBusinessSearchForSort.businessBbj[i].BusinessDTO);
        }

        function SortByBusinessNamee(x, y) {
            return ((x.businessName == y.businessName) ? 0 : ((x.businessName > y.businessName) ? 1 : -1));
        }
        //calling sort function
        tempArray.sort(SortByBusinessNamee);
        var sortedrespBusiness = {};
        sortedrespBusiness.businessBbj = [];
        for (var j = 0; j < tempArray.length; j++) {
            //alert("1"+tempArray[j]);
            var testtobj = {
                "BusinessDTO": tempArray[j]
            };
            sortedrespBusiness.businessBbj.push(testtobj);
        }
        setSegDatasearchBusiness(sortedrespBusiness);
        gblResponseBusinessSearchForSort = sortedrespBusiness;
    }
}