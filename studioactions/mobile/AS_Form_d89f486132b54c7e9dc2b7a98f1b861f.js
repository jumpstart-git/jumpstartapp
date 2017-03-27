function AS_Form_d89f486132b54c7e9dc2b7a98f1b861f(eventobject) {
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