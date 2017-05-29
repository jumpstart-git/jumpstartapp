//Type your code here
function setLoginData()
{


     //alert("inside else");
var valVolunteerId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].volunteerId;
      kony.store.setItem("volunteerId", valVolunteerId);
      // kony.store.getItem("volunteerId");


      ////skills start

      var skillList=" ";
//console.log(JSON.stringify(res.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet));
for(var i=0;i<gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet.length;i++)
{


//skillList+=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName;
skillList=skillList+gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName+",";

}

 skillList=skillList.slice(0,-1);

      ///skills end
      var isBusOrVol=gblLoginData.LoginBusinessVolunteer[0]["businessOrVolunteer"];
                   kony.store.setItem("isBusOrVol",isBusOrVol);
var firstName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].firstName;
kony.store.setItem("volLoginName", firstName);
var lastName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].lastName;
var companyName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].companyName;
var role=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].role;
//var skillSet=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet;
var aboutMe=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].aboutMe;
var workDetails=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].workDetails;
     // var businessUnit=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].businessUnit;
var state=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].state;
var emailAddress=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].emailAddress;
    //  alert(JSON.stringify(gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule));
var schedule=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days;
      var availId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.availabilityId;
       kony.store.setItem("availId", availId);
      kony.store.setItem("schedule", schedule);








      var pathVal=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].imagePath;

      if(null != pathVal && pathVal != "null"){

      var VolimgUrl="http://ec2-54-206-61-225.ap-southeast-2.compute.amazonaws.com/file/download/"+pathVal;
      kony.store.setItem("imgUrlVal", VolimgUrl);
      }else{

       kony.store.setItem("imgUrlVal", "imgseglogo.png");
      }
       var VolimageurlPath  = kony.store.getItem("imgUrlVal");

                 if(VolimageurlPath !=null){
//                      //alert("haveimage"+imageurlPath);
                    // businessMyProfile.businessMyProfileHeader.businessMyProfileHeaderPic.src = VolimageurlPath;
                  volunteerMyProfilePage.volunteerMyProfileHeader.volunteerMyProfilePic.src=VolimageurlPath;

                 }


      kony.store.setItem("schedule", schedule);

      ///start merin

           ///start merin

     var arr=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.days.split(" ");
      //alert("arr"+JSON.stringify(arr));

for(var k=0;k<arr.length;k++)
{
switch(arr[k])
{
case "MON":
{


// volunteerMyProfilePage.volunteerMyProfileMondayButton.skin="jumpStartGreenButton90";
break;
}
case "TUE":
{

//volunteerMyProfilePage.volunteerMyProfileTuesdayButton.skin="jumpStartGreenButton90";
break;
}
case "WED":
{

//volunteerMyProfilePage.volunteerMyProfileWednesdayButton.skin="jumpStartGreenButton90";
break;
}
case "THU":
{

//volunteerMyProfilePage.volunteerMyProfileThursdayButton.skin="jumpStartGreenButton90";
break;
}
case "FRI":
{

//volunteerMyProfilePage.volunteerMyProfileFridayButton.skin="jumpStartGreenButton90";
break;
}
    case "SAT":
{

//volunteerMyProfilePage.volunteerMyProfileSaturdayButton.skin="jumpStartGreenButton90";
  break;
break;
}
    case "SUN":
{

//volunteerMyProfilePage.volunteerMyProfileSundayButton.skin="jumpStartGreenButton90";
break;
}


}

}





      //end merin





      //emd merin
var fromTimeFull=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.fromTime;
      kony.store.setItem("fromTimeFull", fromTimeFull);
      var fromTimeSplitted=fromTimeFull.split(" ");
      var fromTime=fromTimeSplitted[0];
      var fromTimeMeridian=fromTimeSplitted[1];
   // var fromTime="1";
      //start merin


        var mArr=[  ["fromTime", fromTime]];

     // volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.masterData=mArr;
     // volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKey=fromTime;//fromTime;
     // volunteerMyProfilePage.volunteerMyProfileFromTimeDropdown.selectedKeyValue=["fromTime",fromTime] ;


       var mArrMer=[  ["fromTimeMeridian", fromTimeMeridian]];
    //  volunteerMyProfilePage.volunteerMyProfileFromMeridiem.masterData=mArrMer;
     /// volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKey=fromTimeMeridian;//fromTime;
     // volunteerMyProfilePage.volunteerMyProfileFromMeridiem.selectedKeyValue=["fromTimeMeridian",fromTimeMeridian] ;

      var toTimeFull=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].schedule[0].VolunteerScheduleDTO.toTime;
      kony.store.setItem("toTimeFull", toTimeFull);
      var toTimeSplitted=toTimeFull.split(" ");
      var toTime=toTimeSplitted[0];
      var toTimeMeridian=toTimeSplitted[1];
     // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey=toTime;
      var mArr1=[  ["toTime", toTime]];
     // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.masterData=mArr1;
     // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKey=toTime;//fromTime;
     // volunteerMyProfilePage.volunteerMyProfileToTimeDropdown.selectedKeyValue=["toTime",toTime] ;

      var mArr1Mer=[  ["toTimeMeridian", toTimeMeridian]];
     // volunteerMyProfilePage.volunteerMyProfileToMeridiem.masterData=mArr1Mer;
    //  volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKey=toTimeMeridian;//fromTime;
     // volunteerMyProfilePage.volunteerMyProfileToMeridiem.selectedKeyValue=["toTimeMeridian",toTimeMeridian] ;

var address=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].address;
var level=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].level;
var longitude=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].longitude;
var latitude=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].latitude;
var contactNumber=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].contactNumber;
var volunteerTaskId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].volunteerTaskId;
var businessUnit=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].businessUnit;
var userName=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].userName;
var password=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].password;
var userId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].userId;
//var usersUserTypeId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].usersUserTypeId;
kony.store.setItem("userId", userId);
var usersUserTypeId=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].users[0].usersUserTypeId;

if(businessUnit===null||businessUnit==="null")
{
  businessUnit=" ";
}

volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileFirstNameInput.text= firstName;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileLastNameInput.text= lastName;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileUsernameInput.text= userName;
  
//Will be stored in a hidden field.
volunteerMyProfilePage.volunteerMyProfileBody.StoreOriginalPassword.text = password;
//Bad practice for password hashing
//volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfilePasswordInput.text= password;
//volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileReenterPasswordInput.text= password;
//Bad practice for password hashing
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileWorkDetailsInput.text= "";//workDetails;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAboutMeInput.text= "";//aboutMe;
//volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.text= companyName;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileCompanyInput.selectedKey=companyName;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileRoleInput.text= role;
volunteerMyProfilePage.volunteerMyProfileBody.regBusinessUnitInput.text=businessUnit;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileStateInput.text= state;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileAddressInput.text= address;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileContactNumberInput.text= contactNumber;
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileEmailAddressInput.text= emailAddress;//" ";//emailAddress;
//volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillListContainer.volunteerMyProfileSkillsList.volunteerMyProfileSkillInputField.text=skillList;
//volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileTimeContainer.fromTimeContainer.lblFrom.text=fromTime;
//volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileTimeContainer.toTimeContainer.lblTo.text=toTime;
//start skill

      var skillSegmentData=[];
       for (var i = 0; i < gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet.length; i++) {
      var skillObj = {
        "volunteerMyProfileSkillItem" : gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillName,
        "skillIdHidden": gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0].skillSet[i].SkillsDTO.skillId
      };
      skillSegmentData.push(skillObj);
    }
volunteerMyProfilePage.volunteerMyProfileBody.volunteerMyProfileSkillTags.volunteerMyProfileSkillSegment.setData(skillSegmentData);
      //end skill

//       volunteerMyProfilePage.show();
//         volunteerMyProfilePage.volunteerMyProfileFooter.isVisible=true;
//   volunteerMyProfilePage.volunteerMyProfileFooter2Buttons.isVisible=false;
     gblForRetreive=gblLoginData.LoginBusinessVolunteer[0].volunteer[0].VolunteersDTO[0];
        //Start Push
            var DivInfo=kony.os.deviceInfo();
  // alert(DivInfo.name);
 if(DivInfo.name==="iPhone")
    {
     // getPushNote();
     var ksid=kony.store.getItem("KSID");
//       alert(ksid);
      if((ksid!=="null")&&(ksid!==null)&&(ksid!=="undefined")&&(ksid!==undefined)&&(ksid!==""))
        {
//          alert("Calling Attach Function"+ksid);
          AttachKSIDService();
        }else
          {
                mainPage.show();
          }
    } else
      {
        mainPage.show();
      }
//       //end push
//mainPage.show();



}
