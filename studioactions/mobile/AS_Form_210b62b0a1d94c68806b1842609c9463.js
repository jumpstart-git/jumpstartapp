function AS_Form_210b62b0a1d94c68806b1842609c9463(eventobject) {
    registrationProfessionalPage.regSkillsSegment.widgetDataMap = {
        "regSkillItem": "regSkillItem",
        "imgClose": "imgClose"
    };
    //alert(volunteerRegObject.skillsArray.length);
    if (volunteerRegObject.skillsArray.length == "0.0") {
        //alert("no val");
        registrationProfessionalPage.regSkillsSegment.removeAll();
    }
}