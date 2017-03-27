function AS_Form_c04c2de481c948ae876453c2c425440f(eventobject) {
    scheduleNewForm.segSchedule.widgetDataMap = {
        "lblSchedule": "lblSchedule",
        "imgclose": "imgclose"
    };
    //alert(volunteerRegObject.skillsArray.length);
    if (volunteerRegObject.scheduleArray.length == "0.0") {
        //alert("no val");
        scheduleNewForm.segSchedule.removeAll();
    }
}