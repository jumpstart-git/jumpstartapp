//Type your code here
var volunteerRegObjectVol = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    reenteredPassword: "",
    workDetails: "",
    aboutMe: "",
    companyName: "",
    role: "",
    businessUnit: "",
    state: "",
    address: "",
    contactNumber: "",
    emailAddress: "",
    skillsArray: [],
    availability: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
        startTime: "9:00",
        startMeridiem: "AM",
        endTime: "10:00",
        endMeridiem: "AM"
    }
};

function addNewSkillUpdateee() {
    //var skillInput = registrationProfessionalPage.regSkillInputField.text;
    //start
    var arrDataVol = [];
    var skillDatas = volunteerMyProfilePage.volunteerMyProfileSkillSegment.data;
    if (skillDatas != null) {
        for (var i = 0; i < skillDatas.length; i++) {
            var testObj = {
                "skillId": skillDatas[i].skillIdHidden,
                "skillName": skillDatas[i].volunteerMyProfileSkillItem,
                "imgClose": "cross.png"
            }
            arrDataVol.push(testObj);
        }
        volunteerRegObjectVol.skillsArray = arrDataVol;
        //end
        var skillInput = volunteerMyProfilePage.volunteerMyProfileSkillInputField.text;
        if (skillInput) {
            var skillid = "";
            var newskill = {
                "skillName": skillInput,
                "skillId": skillid
            }
            volunteerRegObjectVol.skillsArray.push(newskill);
            // alert("after pushing"+JSON.stringify(volunteerRegObjectVol.skillsArray));
            updateSkillsSegmentVol();
            volunteerMyProfilePage.volunteerMyProfileSkillInputField.text = "";
        } else {
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_ERROR,
                "alertTitle": "Missing Skill Name",
                "yesLabel": "OK",
                "message": "Please enter a skill name",
                "alertHandler": null
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
    } else {
        //  alert("inside else");
        var skillInput = volunteerMyProfilePage.volunteerMyProfileSkillInputField.text;
        if (skillInput) {
            var skillid = "";
            var newskill = {
                "skillName": skillInput,
                "skillId": skillid
            }
            volunteerRegObjectVol.skillsArray.push(newskill);
            //  alert("after pushing"+JSON.stringify(volunteerRegObjectVol.skillsArray));
            updateSkillsSegmentVol();
            volunteerMyProfilePage.volunteerMyProfileSkillInputField.text = "";
        } //merin end
    }
}

function updateSkillsSegmentVol() {
    var skillSegmentData = [];
    if (volunteerRegObjectVol.skillsArray.length > 0) {
        for (var i = 0; i < volunteerRegObjectVol.skillsArray.length; i++) {
            var skillObj = {
                "volunteerMyProfileSkillItem": volunteerRegObjectVol.skillsArray[i].skillName,
                "skillIdHidden": volunteerRegObjectVol.skillsArray[i].skillId,
                "imgClose": "cross.png"
            };
            skillSegmentData.push(skillObj);
        }
        // registrationProfessionalPage.regSkillsSegment.setData(skillSegmentData);
        // alert("skillSegmentData"+JSON.stringify(skillSegmentData));
        volunteerMyProfilePage.volunteerMyProfileSkillSegment.setData(skillSegmentData);
    } else {
        /*
        var emptySkillObj = {
            "volunteerMyProfileSkillItem" : "",
           "skillIdHidden":" ",
           "imgClose":""
          };
        skillSegmentData.push(emptySkillObj);
        */
        //registrationProfessionalPage.regSkillsSegment.setData(skillSegmentData);
        volunteerMyProfilePage.volunteerMyProfileSkillSegment.setData(skillSegmentData);
    }
}

function toggleVol(eventobject) {
    var dayToggled = eventobject.id;
    // alert(JSON.stringify(eventobject));
    switch (dayToggled) {
        case "volunteerMyProfileMondayButton":
            if (eventobject.skin == "jumpStartGreenButton90") {
                volunteerRegObjectVol.availability.mon = false;
            } else {
                volunteerRegObjectVol.availability.mon = true;
            }
            //       if (volunteerRegObjectVol.availability.mon) {
            //         volunteerRegObjectVol.availability.mon = false;
            //       } else {
            //         volunteerRegObjectVol.availability.mon = true;
            //       }
            updateDayToggleSkinVol(volunteerRegObjectVol.availability.mon, eventobject);
            break;
        case "volunteerMyProfileTuesdayButton":
            if (eventobject.skin == "jumpStartGreenButton90") {
                volunteerRegObjectVol.availability.tue = false;
            } else {
                volunteerRegObjectVol.availability.tue = true;
            }
            //       if (volunteerRegObjectVol.availability.tue) {
            //         volunteerRegObjectVol.availability.tue = false;
            //       } else {
            //         volunteerRegObjectVol.availability.tue = true;
            //       }
            updateDayToggleSkinVol(volunteerRegObjectVol.availability.tue, eventobject);
            break;
        case "volunteerMyProfileWednesdayButton":
            if (eventobject.skin == "jumpStartGreenButton90") {
                volunteerRegObjectVol.availability.wed = false;
            } else {
                volunteerRegObjectVol.availability.wed = true;
            }
            //       if (volunteerRegObjectVol.availability.wed) {
            //         volunteerRegObjectVol.availability.wed = false;
            //       } else {
            //         volunteerRegObjectVol.availability.wed = true;
            //       }
            updateDayToggleSkinVol(volunteerRegObjectVol.availability.wed, eventobject);
            break;
        case "volunteerMyProfileThursdayButton":
            if (eventobject.skin == "jumpStartGreenButton90") {
                volunteerRegObjectVol.availability.thu = false;
            } else {
                volunteerRegObjectVol.availability.thu = true;
            }
            //       if (volunteerRegObjectVol.availability.thu) {
            //         volunteerRegObjectVol.availability.thu = false;
            //       } else {
            //         volunteerRegObjectVol.availability.thu = true;
            //       }
            updateDayToggleSkin(volunteerRegObjectVol.availability.thu, eventobject);
            break;
        case "volunteerMyProfileFridayButton":
            if (eventobject.skin == "jumpStartGreenButton90") {
                volunteerRegObjectVol.availability.fri = false;
            } else {
                volunteerRegObjectVol.availability.fri = true;
            }
            //       if (volunteerRegObjectVol.availability.fri) {
            //         volunteerRegObjectVol.availability.fri = false;
            //       } else {
            //         volunteerRegObjectVol.availability.fri = true;
            //       }
            updateDayToggleSkinVol(volunteerRegObjectVol.availability.fri, eventobject);
            break;
        case "volunteerMyProfileSaturdayButton":
            if (eventobject.skin == "jumpStartGreenButton90") {
                volunteerRegObjectVol.availability.sat = false;
            } else {
                volunteerRegObjectVol.availability.sat = true;
            }
            //       if (volunteerRegObjectVol.availability.sat) {
            //         volunteerRegObjectVol.availability.sat = false;
            //       } else {
            //         volunteerRegObjectVol.availability.sat = true;
            //       }
            updateDayToggleSkinVol(volunteerRegObjectVol.availability.sat, eventobject);
            break;
        case "volunteerMyProfileSundayButton":
            if (eventobject.skin == "jumpStartGreenButton90") {
                volunteerRegObjectVol.availability.sun = false;
            } else {
                volunteerRegObjectVol.availability.sun = true;
            }
            //       if (volunteerRegObjectVol.availability.sun) {
            //         volunteerRegObjectVol.availability.sun = false;
            //       } else {
            //         volunteerRegObjectVol.availability.sun = true;
            //       }
            updateDayToggleSkinVol(volunteerRegObjectVol.availability.sun, eventobject);
            break;
        default:
            break;
    }
}

function updateDayToggleSkinVol(isSelected, buttonObject) {
    if (isSelected) {
        buttonObject.skin = "jumpStartGreenButton90";
    } else {
        buttonObject.skin = "jumpStartGrayButton90";
    }
}

function removeSkillForVolUpdate(rowObject) {
    //start
    var arrDataVol = [];
    var skillDatas = volunteerMyProfilePage.volunteerMyProfileSkillSegment.data;
    for (var i = 0; i < skillDatas.length; i++) {
        var testObj = {
            "skillId": skillDatas[i].skillIdHidden,
            "skillName": skillDatas[i].volunteerMyProfileSkillItem,
            "imgClose": "cross.png"
        }
        arrDataVol.push(testObj);
    }
    volunteerRegObjectVol.skillsArray = arrDataVol;
    // alert("before"+JSON.stringify(volunteerRegObjectVol.skillsArray));
    //end
    var skillToRemove = rowObject.selectedRowItems[0].volunteerMyProfileSkillItem;
    // alert("skillToRemove"+skillToRemove);
    if (skillToRemove) {
        // alert("inside");
        //start merin
        // var str="susan";
        for (var i = 0; i < volunteerRegObjectVol.skillsArray.length; i++) {
            if (volunteerRegObjectVol.skillsArray[i].skillName == skillToRemove) {
                volunteerRegObjectVol.skillsArray.splice(i, 1);
            }
        }
        ///end merin
        // var indexOfSkillToRemove = volunteerRegObjectVol.skillsArray.indexOf(skillToRemove);
        // if (indexOfSkillToRemove != -1) {
        //  volunteerRegObjectVol.skillsArray.splice(indexOfSkillToRemove, 1);
        // alert("after"+JSON.stringify(volunteerRegObjectVol.skillsArray));
        updateSkillsSegmentVol();
        //}
    }
}