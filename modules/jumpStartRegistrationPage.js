//Type your code here
var gblDays;
var gblRegistrationDetails={};
// Volunteer Registration Object
var volunteerRegObject = {
  firstName : "",
  lastName : "",
  username : "",
  password: "",
  reenteredPassword : "",
  workDetails : "",
  aboutMe : "",
  companyName : "",
  role : "",
  businessUnit : "",
  state : "",
  address : "",
  contactNumber : "",
  emailAddress : "",
  skillsArray : [],
  availability : {
    mon : false,
    tue : false,
    wed : false,
    thu : false,
    fri : false,
    sat : false,
    sun : false,
    startTime : "9:00",
    startMeridiem : "AM",
    endTime : "10:00",
    endMeridiem : "AM"
  }
};


// Update volunteer object on text change.
function onRegFieldUpdate(fieldEdited) {

  var fieldId = fieldEdited.id;
  var fieldContent = fieldEdited.text;

  switch (fieldId) {
    case "regFirstNameInput":
      //D007: Adding code to capitalize first character for fieldContent and fieldContent
      //volunteerRegObject.firstname = fieldContent;
      volunteerRegObject.firstName = fieldContent.charAt(0).toUpperCase() + fieldContent.slice(1);
      //End of D007
      break;
    case "regLastNameInput":
      //D007: Adding code to capitalize first character for fieldContent and fieldContent
      //volunteerRegObject.lastname = fieldContent;
      volunteerRegObject.lastName = fieldContent.charAt(0).toUpperCase() + fieldContent.slice(1);
      //End of D007
      break;
    case "regUsernameInput":
      volunteerRegObject.username = fieldContent;
      break;
    case "regPasswordInput":
      volunteerRegObject.password = fieldContent;
      break;
    case "regReenterPasswordInput":
      volunteerRegObject.reenteredPassword = fieldContent;
      break;
    case "regWorkDetailsInput":
      volunteerRegObject.workDetails = fieldContent;
      break;
    case "regAboutMeInput":
      volunteerRegObject.aboutMe = fieldContent;
      break;
    case "regCompanyInput":

    //Start of D012
      volunteerRegObject.companyName = fieldEdited.selectedKey;
      if(volunteerRegObject.companyName ==="Select" || volunteerRegObject.companyName === null || volunteerRegObject.companyName === "")
        {
          volunteerRegObject.companyName="";

        }
     //End of D012
      break;
    case "regRoleInput":
      volunteerRegObject.role = fieldContent;
      break;
    case "regBusinessUnitInput":
      volunteerRegObject.businessUnit = fieldContent;
      break;
    case "regStateInput":

      volunteerRegObject.state = fieldEdited.selectedKey;
      if(volunteerRegObject.state === "Select" || volunteerRegObject.state === null || volunteerRegObject.state === "")
        {
         volunteerRegObject.state="";

        }
      break;
    case "regAddressInput":
      volunteerRegObject.address = fieldContent;
      break;
      case "regCityInput":
      volunteerRegObject.city = fieldContent;
      break;
    case "regContactNumberInput":
      volunteerRegObject.contactNumber = fieldContent;
      break;
    case "regEmailAddressInput":
      volunteerRegObject.emailAddress = fieldContent;
      break;
    default:
      break;
  }
}


var userValidation = {
  usernameLength : 8,
  passwordLength : 8
};


/******************************************** PERSONAL INFORMATION *******************************************/

function validatePersonalInfo() {
  if (!volunteerRegObject.firstName) {
    return false;
  }
  if (!volunteerRegObject.lastName) {
    return false;
  }
  if (!volunteerRegObject.state) {
    return false;
  }
  if (!volunteerRegObject.address) {
    return false;
  }
   if (!volunteerRegObject.city) {
    return false;
  }
  if (!volunteerRegObject.contactNumber) {
    return false;
  }

  return true;
}



function submitPersonalInfo() {
  var isPersonalInfoComplete = validatePersonalInfo();
 // alert("submitPersonalInfo"+JSON.stringify(volunteerRegObject));
  if (isPersonalInfoComplete) {
    registrationAccountPage.show();




  } else {
    validationAlert("Action Required", "Please complete all mandatory fields marked with *");
    return false;
  }

  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print(volunteerRegObject);
  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - END: myString");
}


/**************************************** END OF PERSONAL INFORMATION ****************************************/


/******************************************** ACCOUNT INFORMATION *******************************************/

function validateAccountInfo() {
  if (!volunteerRegObject.emailAddress) {
    return false;
  }
  if (!volunteerRegObject.password) {
    return false;
  }
  if (!volunteerRegObject.reenteredPassword) {
    return false;
  }

  return true;
}

function validateEmail() {
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailFormat.test(volunteerRegObject.emailAddress)) {
    return false;
  }

  return true;
}

function validatePasswordEquality() {
  if (volunteerRegObject.password != volunteerRegObject.reenteredPassword) {
    return false;
  }

  return true;
}

function validatePassword() {
  var specialChars = /[^A-Za-z0-9]/;          // Regexp for special characters
  var digits = /[0-9]+/;                                                      // Regexp for digits
  var capitalLetters = /[A-Z]+/;                    // Regexp for capital letters

  if (volunteerRegObject.password.length >= userValidation.passwordLength) {
    if (specialChars.test(volunteerRegObject.password)) {
      if (digits.test(volunteerRegObject.password)) {
        if (capitalLetters.test(volunteerRegObject.password)) {
          return 5;
        } else {
          return 4;
        }
      } else {
        return 3;
      }
    } else {
      return 2;
    }
  } else {
    return 1;
  }
}

//Start of D058
function validateEmailDomain() {
  var domains = ["@hpe.com","@dxc.com","@supplynation.org.au","@cba.com.au"];
  var emailAddress = volunteerRegObject.emailAddress;
  var count = 0;

  for (var i = 0; i < domains.length; i++) {
    if (emailAddress.indexOf(domains[i]))>=0
    {
        count++;
    }
  }

  // if (emailAddress.indexOf("@hpe.com")<0 && emailAddress.indexOf("@dxc.com")<0 && emailAddress.indexOf("@supplynation.org.au")<0 && emailAddress.indexOf("@cba.com.au")<0)
  // {
  //   return false;
  // }

  if count > 0
  {
    return true;
  }

  return false;

}
//End of D058

function submitAccountInfo() {
  var isAccountInfoComplete = validateAccountInfo();
  if (!isAccountInfoComplete) {
    validationAlert("Action Required", "Please complete all mandatory fields marked with *");
    return false;
  }

  var isValidEmail = validateEmail();
  if (!isValidEmail) {
    validationAlert("Warning", "Please check the format of the email address");
   return false;
  }

  var isEqualPassword = validatePasswordEquality();
  if (!isEqualPassword) {
    validationAlert("Warning", "Password entered does not match");
    return false;
  }

  var isValidPassword = validatePassword();
  if (isValidPassword == 1) {
    validationAlert("Warning", "Passwords must have at least " + userValidation.passwordLength + " characters");
    return false;
  } else if (isValidPassword == 2) {
    validationAlert("Warning", "Passwords must have at least 1 special character");
    return false;
  } else if (isValidPassword == 3) {
    validationAlert("Warning", "Passwords must have at least 1 digit");
    return false;
  } else if (isValidPassword == 4) {
    validationAlert("Warning", "Passwords must have at least 1 capital letter");
    return false;
  }

  //Start of D058
  var isValidateEmailDomain = validateEmailDomain();
  if (!isValidateEmailDomain) {
    //Start of D051
    validationAlert("Warning", "The domain of the email you have entered is not registered.");
    //End of D051
    return false;
  }

  if (isAccountInfoComplete && isValidEmail && isEqualPassword && isValidPassword == 5 && isValidateEmailDomain) {
    registrationProfessionalPage.show();
  }
  //End of D058

  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print(volunteerRegObject);
  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - END: myString");
}

/**************************************** END OF PERSONAL INFORMATION ****************************************/




/******************************************** PROFESSIONAL INFORMATION *******************************************/

//////////////////////////// SKILL FUNCTIONS ///////////////////////////
function updateSkillsSegment() {
  var skillSegmentData = [];
  if (volunteerRegObject.skillsArray.length > 0) {
    for (var i = 0; i < volunteerRegObject.skillsArray.length; i++) {
      var skillObj = {
        "regSkillItem" : volunteerRegObject.skillsArray[i],
        "imgClose":"cross.png"
      };
      skillSegmentData.push(skillObj);
    }
    registrationProfessionalPage.regSkillsSegment.setData(skillSegmentData);
  } else {
    var emptySkillObj = {
        "regSkillItem" : "",
       "imgClose":""
      };
    skillSegmentData.push(emptySkillObj);
    registrationProfessionalPage.regSkillsSegment.setData(skillSegmentData);
  }
}

// Function for adding new skill.
function addNewSkill () {
  var skillInput = registrationProfessionalPage.regSkillInputField.text;

  if (skillInput) {
    volunteerRegObject.skillsArray.push(skillInput);

                updateSkillsSegment();

    registrationProfessionalPage.regSkillInputField.text = "";
  } else {
    kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_ERROR,
      "alertTitle": "Action Required",
      "yesLabel": "OK",
      "message": "Please enter a skill name",
      "alertHandler": null
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
  }
}

function removeSkill(rowObject) {
  var skillToRemove = rowObject.selectedRowItems[0].regSkillItem;
  if (skillToRemove) {
    var indexOfSkillToRemove = volunteerRegObject.skillsArray.indexOf(skillToRemove);
    if (indexOfSkillToRemove != -1) {
      volunteerRegObject.skillsArray.splice(indexOfSkillToRemove, 1);
      updateSkillsSegment();
    }
  }
}
//////////////////////// END OF SKILL FUNCTIONS ////////////////////////


function validateProfessionalInfo() {
  if (!volunteerRegObject.companyName) {
    return false;
  }
  if (!volunteerRegObject.role) {
    return false;
  }

  return true;
}

function submitProfessionalInfo() {
  var isProfessionalInfoComplete = validateProfessionalInfo();
  if (!isProfessionalInfoComplete) {
    validationAlert("Action Required", "Please complete all mandatory fields marked with *");
    return false;
  }

  var hasSkill = volunteerRegObject.skillsArray.length;
  if (!hasSkill) {
    validationAlert("Action Required", "Please add at least 1 skill");
    return false;
  }

  if (isProfessionalInfoComplete && hasSkill) {
    //registrationSchedulePage.show();
   // CopyregistrationSchedulePage07348ad65c97f4c.show();
    scheduleNewForm.show();

  }

  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print(volunteerRegObject);
  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - END: myString");
}


/**************************************** END OF PROFESSIONAL INFORMATION ****************************************/



/******************************************** SCHEDULE INFORMATION ****************************************/

//////////////////////////// DAYS FUNCTIONS ///////////////////////////
// Function for toggling days, updates availabilityObject
function toggleDay(eventobject) {
  var dayToggled = eventobject.id;

  switch (dayToggled) {
    case "regMondayButton":
      if (volunteerRegObject.availability.mon) {
        volunteerRegObject.availability.mon = false;
      } else {
        volunteerRegObject.availability.mon = true;
      }
      updateDayToggleSkin(volunteerRegObject.availability.mon, eventobject);
      break;
    case "regTuesdayButton":
      if (volunteerRegObject.availability.tue) {
        volunteerRegObject.availability.tue = false;
      } else {
        volunteerRegObject.availability.tue = true;
      }
      updateDayToggleSkin(volunteerRegObject.availability.tue, eventobject);
      break;
    case "regWednesdayButton":
      if (volunteerRegObject.availability.wed) {
        volunteerRegObject.availability.wed = false;
      } else {
        volunteerRegObject.availability.wed = true;
      }
      updateDayToggleSkin(volunteerRegObject.availability.wed, eventobject);
      break;
    case "regThursdayButton":
      if (volunteerRegObject.availability.thu) {
        volunteerRegObject.availability.thu = false;
      } else {
        volunteerRegObject.availability.thu = true;
      }
      updateDayToggleSkin(volunteerRegObject.availability.thu, eventobject);
      break;
    case "regFridayButton":
      if (volunteerRegObject.availability.fri) {
        volunteerRegObject.availability.fri = false;
      } else {
        volunteerRegObject.availability.fri = true;
      }
      updateDayToggleSkin(volunteerRegObject.availability.fri, eventobject);
      break;
    case "regSaturdayButton":
      if (volunteerRegObject.availability.sat) {
        volunteerRegObject.availability.sat = false;
      } else {
        volunteerRegObject.availability.sat = true;
      }
      updateDayToggleSkin(volunteerRegObject.availability.sat, eventobject);
      break;
                case "regSundayButton":
      if (volunteerRegObject.availability.sun) {
        volunteerRegObject.availability.sun = false;
      } else {
        volunteerRegObject.availability.sun = true;
      }
      updateDayToggleSkin(volunteerRegObject.availability.sun, eventobject);
      break;
    default:
      break;
  }
}

// Function for updating front-end skin
function updateDayToggleSkin(isSelected, buttonObject) {
  if (isSelected) {
    buttonObject.skin = "jumpStartGreenButton90";
  } else {
    buttonObject.skin = "jumpStartGrayButton90";
  }
}
// Resets all skins
function resetAvailability() {

  registrationSchedulePage.regMondayButton.skin = "jumpStartGrayButton90";
  registrationSchedulePage.regTuesdayButton.skin = "jumpStartGrayButton90";
  registrationSchedulePage.regWednesdayButton.skin = "jumpStartGrayButton90";
  registrationSchedulePage.regThursdayButton.skin = "jumpStartGrayButton90";
  registrationSchedulePage.regFridayButton.skin = "jumpStartGrayButton90";
  registrationSchedulePage.regSaturdayButton.skin = "jumpStartGrayButton90";
  registrationSchedulePage.regSundayButton.skin = "jumpStartGrayButton90";
}

//////////////////////////// END OF DAYS FUNCTIONS ///////////////////////////

//////////////////////////// TIME FUNCTIONS ///////////////////////////
function onTimeChange(eventobject) {
  var wheelChanged = eventobject.id;

  switch (wheelChanged) {
    case "fromTimeDropdown":
      volunteerRegObject.availability.startTime = eventobject.selectedKey;
      break;
    case "fromMeridiem":
      volunteerRegObject.availability.startMeridiem = eventobject.selectedKey;
      break;
    case "toTimeDropdown":
      volunteerRegObject.availability.endTime = eventobject.selectedKey;
      break;
    case "toMeridiem":
      volunteerRegObject.availability.endMeridiem = eventobject.selectedKey;
      break;
   default:
      break;
  }
}
//////////////////////////// END OF TIME FUNCTIONS ///////////////////////////

function validateAvailability() {
  if (!volunteerRegObject.availability.mon && !volunteerRegObject.availability.tue &&
      !volunteerRegObject.availability.wed && !volunteerRegObject.availability.thu &&
      !volunteerRegObject.availability.fri && !volunteerRegObject.availability.sat &&
      !volunteerRegObject.availability.sun) {

    kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_ERROR,
      "alertTitle": "Action Required",
      "yesLabel": "OK",
      "message": "At least one day of the week must be selected.",
      "alertHandler": null
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });

    return false;
  }

  return true;
}

function hideOutsideHoursModal() {
  scheduleNewForm.outsideScheduletime.isVisible=false;
  //registrationSchedulePage.regScheduleOutsideHoursModal.isVisible = false;
 // CopyregistrationSchedulePage07348ad65c97f4c.regScheduleOutsideHoursModal.isVisible=false;
}


function hoursAgreeAndContinue() {
  hideOutsideHoursModal();
 var daySelected=scheduleNewForm.listDays.selectedKey;
  var fromTime=scheduleNewForm.listFromTime.selectedKey+" "+scheduleNewForm.listFromTimeMerdidian.selectedKey;
  var toTime=scheduleNewForm.listToTime.selectedKey+" "+scheduleNewForm.listToTimeMeridian.selectedKey;

  var scheduleVal=daySelected+" "+fromTime+" TO "+toTime;
   //start duplicate check

  if (scheduleVal) {
  var indexOfSchedule = volunteerRegObject.scheduleArray.indexOf(scheduleVal);
     if (indexOfSchedule != -1) {
       validationAlert("Warning","This schedule already exists!");
       return false;
      //volunteerRegObject.scheduleArray.splice(indexOfSchedule, 1);
     }
  }
    //end duplicate check
 volunteerRegObject.scheduleArray.push(scheduleVal);
    setScheduleSeg();
}

function startLessThanEnd() {
  var start = convertToMilTime(volunteerRegObject.availability.startTime, volunteerRegObject.availability.startMeridiem);
  var end = convertToMilTime(volunteerRegObject.availability.endTime, volunteerRegObject.availability.endMeridiem);

  if (start >= end) {
    kony.ui.Alert({
      "alertType": constants.ALERT_TYPE_ERROR,
      "alertTitle": "Warning",
      "yesLabel": "OK",
      "message": "Start time must be less than end time.",
      "alertHandler": null
    }, {
      "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });

    return false;
  }

  return true;
}

function validateVolunteerHours() {
  var start = convertToMilTime(volunteerRegObject.availability.startTime, volunteerRegObject.availability.startMeridiem);
  var end = convertToMilTime(volunteerRegObject.availability.endTime, volunteerRegObject.availability.endMeridiem);

  if (start >= 900 && end <= 1700) {
    return true;
  } else {
    scheduleNewForm.outsideScheduletime.isVisible=true;
  //  registrationSchedulePage.regScheduleOutsideHoursModal.isVisible = true;
    //CopyregistrationSchedulePage07348ad65c97f4c.regScheduleOutsideHoursModal.isVisible=true;
  //  alert("outside");
    return false;
  }
}

function submitScheduleInfo() {
  var hasAvailability =validateAvailability();// true;//validateAvailability();
  if(hasAvailability===false)
    {
      return false;
    }
  var isCorrectTime = startLessThanEnd();
  if(isCorrectTime===false)
    {
      return false;
    }
  var isValidHours = validateVolunteerHours();

  if (hasAvailability && isCorrectTime && isValidHours) {
    //updateSummaryPageInfo();
    //registrationSummaryPage.show();
   var daySelected=scheduleNewForm.listDays.selectedKey;
  var fromTime=scheduleNewForm.listFromTime.selectedKey+" "+scheduleNewForm.listFromTimeMerdidian.selectedKey;
  var toTime=scheduleNewForm.listToTime.selectedKey+" "+scheduleNewForm.listToTimeMeridian.selectedKey;

  var scheduleVal=daySelected+" "+fromTime+" TO "+toTime;
    //start duplicate check

  if (scheduleVal) {
  var indexOfSchedule = volunteerRegObject.scheduleArray.indexOf(scheduleVal);
     if (indexOfSchedule != -1) {
       alert("this schedule already exists");
       return false;
      //volunteerRegObject.scheduleArray.splice(indexOfSchedule, 1);
     }
  }
    //end duplicate check
    volunteerRegObject.scheduleArray.push(scheduleVal);
    setScheduleSeg();
   scheduleNewForm.listDays.selectedKey="";
    scheduleNewForm.listFromTime.selectedKey="";
  scheduleNewForm.listFromTimeMerdidian.selectedKey="";
    scheduleNewForm.listToTime.selectedKey="";
   scheduleNewForm.listToTimeMeridian.selectedKey="";
   // alert("done");
  }

  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print(volunteerRegObject);
  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - END: myString");
}

function updateSummaryPageInfo() {
  // Place object details into summary page:
  registrationSummaryPage.summUserNameLabel.text =volunteerRegObject.emailAddress; //volunteerRegObject.firstName + " " + volunteerRegObject.lastName;
  registrationSummaryPage.summEmailLabel.text = volunteerRegObject.emailAddress;
  registrationSummaryPage.summContactNumberLabel.text = volunteerRegObject.contactNumber;
  //start pass

   var str=volunteerRegObject.password;
 var text="";
 for(var i=0;i<str.length;i++)
{
text=text+"*";

}

  //end pass


  registrationSummaryPage.summPasswordLabel.text = text;//volunteerRegObject.password;
  registrationSummaryPage.summAddressLabel.text = volunteerRegObject.address + ", " +volunteerRegObject.city+","+ volunteerRegObject.state;
  registrationSummaryPage.summCompanyLabel.text = volunteerRegObject.companyName;
  registrationSummaryPage.summRoleLabel.text = volunteerRegObject.role;

  var skillsString = "";
  for (var i = 0; i < volunteerRegObject.skillsArray.length; i++) {
    if (skillsString) {
      skillsString = skillsString + ", " + volunteerRegObject.skillsArray[i];
    } else {
      skillsString = volunteerRegObject.skillsArray[i];
    }
  }
  registrationSummaryPage.summSkillsRT.text = skillsString;

  var availabilityString = "";
  if (volunteerRegObject.availability.mon) {
    availabilityString += "MON ";
  }
  if (volunteerRegObject.availability.tue) {
    availabilityString += "TUE ";
  }
  if (volunteerRegObject.availability.wed) {
    availabilityString += "WED ";
  }
  if (volunteerRegObject.availability.thu) {
    availabilityString += "THU ";
  }
  if (volunteerRegObject.availability.fri) {
    availabilityString += "FRI ";
  }
  if (volunteerRegObject.availability.sat) {
    availabilityString += "SAT ";
  }
  if (volunteerRegObject.availability.sun) {
    availabilityString += "SUN ";
  }
  gblDays=availabilityString;

  availabilityString += volunteerRegObject.availability.startTime + " " + volunteerRegObject.availability.startMeridiem +
    " - " + volunteerRegObject.availability.endTime + " " + volunteerRegObject.availability.endMeridiem;
  //registrationSummaryPage.summAvailabilityRT.text = availabilityString;
   var scheduleString = "";
  for (var i = 0; i < volunteerRegObject.scheduleArray.length; i++) {
    if (scheduleString) {
      scheduleString = scheduleString + ", " + volunteerRegObject.scheduleArray[i];
    } else {
      scheduleString = volunteerRegObject.scheduleArray[i];
    }
  }
  registrationSummaryPage.summAvailabilityRT.text = scheduleString;
}

/**************************************** END OF SCHEDULE INFORMATION ****************************************/




function submitRegistration() {

  //******************************* Do backend web service call in here.


  ////start merin

    var schedule=[{"days":gblDays,
                                 "fromTime":volunteerRegObject.availability.startTime + " " + volunteerRegObject.availability.startMeridiem ,
                                 "toTime":volunteerRegObject.availability.endTime + " " + volunteerRegObject.availability.endMeridiem}];
  var arr=volunteerRegObject.skillsArray;
var skills=[];
for(var i=0;i<arr.length;i++)
{
var testObj={"skillName":arr[i]};
skills.push(testObj);
}
    gblRegistrationDetails["firstName"]=volunteerRegObject.firstName ;
    gblRegistrationDetails["lastName"]=volunteerRegObject.lastName;
    gblRegistrationDetails["address"]=volunteerRegObject.address + ", " + volunteerRegObject.state;
  	gblRegistrationDetails["city"]=volunteerRegObject.city;
    gblRegistrationDetails["contactNumber"]=volunteerRegObject.contactNumber;
    gblRegistrationDetails["emailAddress"]=volunteerRegObject.emailAddress;
   gblRegistrationDetails["state"]=volunteerRegObject.state;
    gblRegistrationDetails["userName"]=volunteerRegObject.emailAddress;
    gblRegistrationDetails["password"]=volunteerRegObject.password;
    gblRegistrationDetails["companyName"]=volunteerRegObject.companyName;
    gblRegistrationDetails["role"]=volunteerRegObject.role;
    gblRegistrationDetails["businessUnit"]=volunteerRegObject.businessUnit;
    gblRegistrationDetails["SkillsDTO"]=skills;////need to cross check
    gblRegistrationDetails["VolunteerScheduleDTO"]=gblFinalSchedule;//finalSchedule;//schedule;//registrationSummaryPage.summAvailabilityRT.text;//need to check how to pass it
  //  gblRegistrationDetails["usersUserTypeId"]="11";//dont know which value should be passed
 // gblRegistrationDetails["volunteerTaskId"]="51" ;
  gblRegistrationDetails["createdDate"]="2016-10-17" ;
  gblRegistrationDetails["file"]=kony.store.getItem("imageVal");
  gblRegistrationDetails["fileName"]=kony.store.getItem("imageFileNameVal");//"abcdec6.jpg" ;kony.store.setItem("imageFileNameVal



 // alert("the input'"+JSON.stringify(gblRegistrationDetails));
//  alert("calling reg service");
  regService();
  //end merin

//   registrationDonePage.registrationDonePageThankYou.text = "Thank you " + volunteerRegObject.firstName + "!";
//   registrationDonePage.show();

//   // Make sure to destroy registration forms after done to save memory.
//   registrationPage.destroy();
//   registrationPersonalPage.destroy();
//   registrationAccountPage.destroy();
//   registrationProfessionalPage.destroy();
//   registrationSchedulePage.destroy();
//   registrationSummaryPage.destroy();

  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print(volunteerRegObject);
  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - END: myString");
}





// Utility functions
function validationAlert(title, description) {
  kony.ui.Alert({
    "alertType": constants.ALERT_TYPE_ERROR,
    "alertTitle": title,
    "yesLabel": "OK",
    "message": description,
    "alertHandler": null
  }, {
    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
  });
}

function convertToMilTime(time, meridiem) {
  var timeString = time + meridiem;

  var milTimeObject = {
    "12:00AM" : 0,
    "12:30AM" : 30,
    "1:00AM" : 100,
    "1:30AM" : 130,
    "2:00AM" : 200,
    "2:30AM" : 230,
    "3:00AM" : 300,
    "3:30AM" : 330,
    "4:00AM" : 400,
    "4:30AM" : 430,
    "5:00AM" : 500,
    "5:30AM" : 530,
    "6:00AM" : 600,
    "6:30AM" : 630,
    "7:00AM" : 700,
    "7:30AM" : 730,
    "8:00AM" : 800,
    "8:30AM" : 830,
    "9:00AM" : 900,
    "9:30AM" : 930,
    "10:00AM" : 1000,
    "10:30AM" : 1030,
    "11:00AM" : 1100,
    "11:30AM" : 1130,
    "12:00PM" : 1200,
    "12:30PM" : 1230,
    "1:00PM" : 1300,
    "1:30PM" : 1330,
    "2:00PM" : 1400,
    "2:30PM" : 1430,
    "3:00PM" : 1500,
    "3:30PM" : 1530,
    "4:00PM" : 1600,
    "4:30PM" : 1630,
    "5:00PM" : 1700,
    "5:30PM" : 1730,
    "6:00PM" : 1800,
    "6:30PM" : 1830,
    "7:00PM" : 1900,
    "7:30PM" : 1930,
    "8:00PM" : 2000,
    "8:30PM" : 2030,
    "9:00PM" : 2100,
    "9:30PM" : 2130,
    "10:00PM" : 2200,
    "10:30PM" : 2230,
    "11:00PM" : 2300,
    "11:30PM" : 2330,
  };

  return milTimeObject[timeString];
}
 //start ser

//Type your code here


mobileFabricConfigurationForReg =
                {
                                appKey:"b2af2c81b9433dab6ce8f1cf7ec558ba",
                                appSecret:"da2e2dc029af1c2eedabd208d8469e7d",
                                serviceURL:"https://100014964.auth.konycloud.com/appconfig",


                                //appKey:"5fd11c44af43e233f2a9bb09e0100f47",
                                //appSecret:"c600a59925b36419de1546056cd21557",
                                //serviceURL:"https://100000507.auth.konycloud.com/appconfig",

                                integrationServices:
                                [
                                                {
                                                                service:"RegistrationService",
                                                                operations:["NewOperation"]
                                                }
                                ],
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
                                isKonySDKObjectInitialized:false,
                                isMFAuthenticated: false
                };


// Function to invoke getFoxNews Service call
function regService(){
kony.application.showLoadingScreen(null, "Loading..",
constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {
shouldShowLabelInBottom: "false", separatorHeight: 20} );

      if (!mobileFabricConfigurationForReg.isKonySDKObjectInitialized)
      {
        initializeMobileFabricForRegister();

      }
      else if (mobileFabricConfigurationForReg.isKonySDKObjectInitialized)
      {
          registerVolunteer();
      }
                }


function initializeMobileFabricForRegister ()
{
             //   alert (" ********** Entering into initializeMobileFabric ********** ");
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForReg.konysdkObject = new kony.sdk();
                                mobileFabricConfigurationForReg.konysdkObject.init(mobileFabricConfigurationForReg.appKey,mobileFabricConfigurationForReg.appSecret,mobileFabricConfigurationForReg.serviceURL,initializeMobileFabricForRegisterSuccess,initializeMobileFabricForRegisterFailure);
      // alert(getNotification());
    }
                else
                                //alert ("Network unavailable. Please check your network settings. ");
                kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricForRegisterSuccess(response)
{
                kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
             //   alert (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForReg.isKonySDKObjectInitialized=true;
                kony.application.dismissLoadingScreen();
                //authenticateMFUsingUserStore();
     registerVolunteer();
                kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricForRegisterFailure(error)
{
                kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
               // alert (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert (" Unable to initialize the application. Please try again. ");
                kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
             //   alert (" ********** Entering into authenticateMFUsingUserStore ********** ");
                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                mobileFabricConfigurationForReg.authClient = mobileFabricConfigurationForReg.konysdkObject.getIdentityService(mobileFabricConfigurationForReg.identityServices[0].service);
                var authParams = {"userid": mobileFabricConfigurationForReg.identityServices[0].username, "password": mobileFabricConfigurationForReg.identityServices[0].password};
    mobileFabricConfigurationForReg.authClient.login(authParams, loginMFSuccess, loginMFFailure);

   kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");

}

function loginMFSuccess(response){
               // alert (" ********** Entering into loginMFSuccess ********** ");
               // alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
                mobileFabricConfigurationForReg.isMFAuthenticated = true;
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
}

function registerVolunteer()
{

               // alert("inside registerVolunteer");
                //var selectedKey = frmFoxNews.lstNewsType.selectedKey;
                if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
                {
                                //kony.application.showLoadingScreen("loadskin","Fetching news !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
                                mobileFabricConfigurationForReg.integrationObj = mobileFabricConfigurationForReg.konysdkObject.getIntegrationService(mobileFabricConfigurationForReg.integrationServices[0].service);
                var operationName = mobileFabricConfigurationForReg.integrationServices[0].operations[0];
                             //  var headers= {"Content-Type":"application/json"};

                   var headers= {};
                  //inputparam["httpheaders"] = {"Content-Type":"application/json"};
//                            if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
//                                            data= {"newsType": selectedKey};
//         }else{
//                                            // The user didn't pick a value so we'll show the alert
//                                kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
//         }

     // alert("operation name"+operationName);
       //var data="1";


                  //start

                var data={};
              //  var schedule={};
                  //schedule[0]

                  var schedule=[{"days":"30",
                                 "fromTime":"1454391000000",
                                 "toTime":"1454391000000"}];

                  var skillSet=[{"skillName":"Salma_java"}];



                  var users={
"userName":"one",
"password":"Password",
"usersUserTypeId":"123"
};
                  data["volunteerTaskId"]="51" ;
                  data["firstName"]="mamata1Successagainnoon" ;
                  data["lastName"]="Salma156" ;
                  data["address"]="address" ;
                  data["contactNumber"]="999988888" ;
                  data["companyName"]="mphasisdelphi" ;
                  data["role"]="senior" ;
                  data["createdDate"]="2016-10-26" ;
                  data["VolunteerScheduleDTO"]= schedule;
                  data["SkillsDTO"]= skillSet;
                  data["userName"]="MerinSavingggg" ;
                  data["password"]="passss" ;
                  data["usersUserTypeId"]="121" ;




//                   data["volunteerTaskId"]="51" ;
//                   data["firstName"]="Salma1" ;
//                   data["lastName"]="Salma1" ;
//                   data["address"]="address" ;
//                   data["contactNumber"]="99999999" ;
//                   data["companyName"]="mphasis" ;
//                   data["role"]="senior" ;
//                   data["createdDate"]="2016-10-17" ;
//                   data["schedule"]=schedule ;
//                   data["skillSet"]=skillSet ;
//                   data["users"]=users ;




                  //end


//                   var data=      {"VolunteersDTO":
//            {
//                            "volunteerTaskId":"51","firstName":"SalmaOneabccc","lastName":"Salma1","address":"address","contactNumber":"99999999",
//       "companyName":"mphasis","role":"senior",
//                            "schedule":[
//                                            {"VolunteerScheduleDTO":
//                                            {"days":"30","fromTime":"1454391000000","toTime":"1454391000000"}}],
//                                            "skillSet":[{"SkillsDTO":{"skillName":"Salma_java"}}],
//                                            "users":{"userName":"xyz","password":"Password","usersUserTypeId":"11"}
//                                            }
//                                            };
          //  var header={};
                  //data["httpheaders"] = {"Content-Type":"application/json"};
                 // data["httpheaders"] = "application/json";
                //   alert("input=="+JSON.stringify(data));
//                   data = JSON.stringify(data);
             //   mobileFabricConfigurationForReg.integrationObj.invokeOperation(operationName, {"Content-Type":"application/json"},data , getRegisterSuccessCallback, getRegisterErrorCallback);
                //  alert("innnn"+JSON.stringify(gblRegistrationDetails));
                  mobileFabricConfigurationForReg.integrationObj.invokeOperation(operationName,headers ,gblRegistrationDetails , getRegisterSuccessCallback, getRegisterErrorCallback);

                }
                else
                                alert ("Network unavailable. Please check your network settings. ");
}

function getRegisterSuccessCallback (gblSave)
{


  //alert("inside success"+JSON.stringify(gblSave));


  //start

        if (gblSave !== null && gblSave.opstatus === 0){
     if(gblSave["success"]=="true")
       {
   //start merin dec 19

          volunteerRegObject = {
  firstName : "",
  lastName : "",
  username : "",
  password: "",
  reenteredPassword : "",
  workDetails : "",
  aboutMe : "",
  companyName : "",
  role : "",
  businessUnit : "",
  state : "",
  address : "",
  contactNumber : "",
  emailAddress : "",
  skillsArray : [],
  scheduleArray:[],
  availability : {
    mon : false,
    tue : false,
    wed : false,
    thu : false,
    fri : false,
    sat : false,
    sun : false,
    startTime : "9:00",
    startMeridiem : "AM",
    endTime : "10:00",
    endMeridiem : "AM"
  }
};







         //end merin dec 19
  registrationDonePage.registrationDonePageThankYou.text = "Thank you " + volunteerRegObject.firstName + "!";
         registrationDonePage.emailTxt.text=registrationSummaryPage.summUserNameLabel.text;
  registrationDonePage.show();
  login.loginBody.usernameField.text="";
  login.loginBody.passwordField.text="";

  // Make sure to destroy registration forms after done to save memory.
  registrationPage.destroy();
  registrationPersonalPage.destroy();
  registrationAccountPage.destroy();
  registrationProfessionalPage.destroy();
  registrationSchedulePage.destroy();
  registrationSummaryPage.destroy();

   //tank you page image
    var volunteerImagePathAfterReg=gblSave.volunteerDto[0].VolunteersDTO.users.imagePath;
    var imagePathAfterReg = "imgseglogo.png"
    if(volunteerImagePathAfterReg !=null && volunteerImagePathAfterReg!="null"){
    imagePathAfterReg = "http://jumpstart:PwdJump5tartApp@ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+volunteerImagePathAfterReg;
    }
     registrationDonePage.registerDoneVolunteerPic.src=imagePathAfterReg;
      kony.application.dismissLoadingScreen();


      }//inner if
          else
            {
              validationAlert("Warning","This username already exists.Please change your email");
            }
        }//outer if
}


function getRegisterErrorCallback (error)
{
                kony.print (" ********** Entering into getNotificationSuccessCallback ********** ");
                kony.print (" ********** Failure in getNotificationSuccessCallback: " + JSON.stringify(error) + " ********** ");
                kony.application.dismissLoadingScreen();
               // alert ("  Please try again. "+JSON.stringify(error));
                kony.print (" ********** Exiting out of getNotificationSuccessCallback ********** ");
}





//end ser
