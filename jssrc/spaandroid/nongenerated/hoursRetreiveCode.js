//Type your code here
var hoursComplete = [];
//var gblMer=false;
function loadHours() {
    try {
        gblArrHours = [];
        //alert("hoursComplete"+JSON.stringify(hoursComplete));
        LogHoursForms.listOfHoursSegment.widgetDataMap = {
                "lblDate": "lblDate",
                "hoursId": "hoursId",
                "lblWorkingHours": "lblWorkingHours",
                "lblNonWorkingHours": "lblNonWorkingHours",
                "forDupCheck": "forDupCheck"
            }
            //alert("hoursCompletelength"+hoursComplete.length) ;
        if ((hoursComplete == "undefined") || (hoursComplete == undefined) || (hoursComplete == "null") || (hoursComplete == null)) {
            //alert("do not proceed");
            //return false;
            LogHoursForms.listOfHoursSegment.removeAll();
            return false;
        }
        var localHourArr = [];
        for (var i = 0; i < hoursComplete.length; i++) {
            //start
            var dateVAl = hoursComplete[i].TasksVolHoursDTO.volunteerDate;
            var id = hoursComplete[i].TasksVolHoursDTO.tasktaskVolHourId;
            var wrkngHoursVAl = hoursComplete[i].TasksVolHoursDTO.volunteerHoursBus;
            if (wrkngHoursVAl === "") {
                // alert("inside");
                wrkngHoursVAl = " ";
            }
            var nonwrkngHoursVAl = hoursComplete[i].TasksVolHoursDTO.volunteerHoursOutBus;
            var dupVal = dateVAl + wrkngHoursVAl + nonwrkngHoursVAl;
            //end
            var testObj = {
                    lblDate: dateVAl,
                    hoursId: id,
                    lblWorkingHours: wrkngHoursVAl,
                    lblNonWorkingHours: nonwrkngHoursVAl,
                    forDupCheck: dupVal
                }
                // alert("testObj"+JSON.stringify(testObj))
            localHourArr.push(testObj);
        }
        if (localHourArr.length == "0") {
            LogHoursForms.listOfHoursSegment.removeAll();
        } else {
            LogHoursForms.listOfHoursSegment.setData(localHourArr);
        }
        gblArrHours = localHourArr;
        LogHoursForms.numOfHoursLabel.text = "";
        LogHoursForms.numOfWorkingHours.text = "";
        LogHoursForms.CopynumOfWorkingHours0a76ec538d2864f.text = "";
    } catch (e) {
        //alert(JSON.stringify(e));
    }
}