//Type your code here
var gblscheduleArr=[];
function addScheduleInUpdate()
{
  //alert("initial"+JSON.stringify( volunteerUpdateObject.scheduleArray));
  try
    {
      
      if((volunteerMyProfilePage.listDays.selectedKey=="null")||(volunteerMyProfilePage.listDays.selectedKey==null))
        {
          alert("enter a day");
          return false;
        }
         
      if((volunteerMyProfilePage.listFromTime.selectedKey=="null")||(volunteerMyProfilePage.listFromTime.selectedKey==null))
        {
          alert("enter a start time");
          return false;
        }
         
      if((volunteerMyProfilePage.listFromTimeMeridiam.selectedKey=="null")||(volunteerMyProfilePage.listFromTimeMeridiam.selectedKey==null))
        {
          alert("enter a start meridiam");
          return false;
        }
         
      if((volunteerMyProfilePage.listEndTime.selectedKey=="null")||(volunteerMyProfilePage.listEndTime.selectedKey==null))
        {
          alert("enter an end time");
          return false;
        }
         
      if((volunteerMyProfilePage.listEndTimeMeridiam.selectedKey=="null")||(volunteerMyProfilePage.listEndTimeMeridiam.selectedKey==null))
        {
          alert("enter an end time meridiam");
          return false;
        }
      
      
      
      
      
  var daySelected=volunteerMyProfilePage.listDays.selectedKey;
  var fromTime=volunteerMyProfilePage.listFromTime.selectedKey+" "+volunteerMyProfilePage.listFromTimeMeridiam.selectedKey;
  var toTime=volunteerMyProfilePage.listEndTime.selectedKey+" "+volunteerMyProfilePage.listEndTimeMeridiam.selectedKey;
  
  var scheduleVal=daySelected+" "+fromTime+" TO "+toTime;
  
   switch (daySelected) {
    case "MON":
     {
        volunteerUpdateObject.availability.mon = true;
      }
      break;
       case "TUE":
     {
        volunteerUpdateObject.availability.tue = true;
      }
      break;
       case "WED":
     {
        volunteerUpdateObject.availability.wed = true;
      }
      break;
       case "THU":
     {
        volunteerUpdateObject.availability.thu = true;
      }
      break;
       case "FRI":
     {
        volunteerUpdateObject.availability.fri = true;
      }
      break;
       case "SAT":
     {
        volunteerUpdateObject.availability.sat = true;
      }
      break;
       case "SUN":
     {
        volunteerUpdateObject.availability.sun = true;
      }
      break;
       default:
      break;
   }
 
    volunteerUpdateObject.availability.startTime=volunteerMyProfilePage.listFromTime.selectedKey;
  volunteerUpdateObject.availability.startMeridiem=volunteerMyProfilePage.listFromTimeMeridiam.selectedKey;
  volunteerUpdateObject.availability.endTime=volunteerMyProfilePage.listEndTime.selectedKey;
  volunteerUpdateObject.availability.endMeridiem =volunteerMyProfilePage.listEndTimeMeridiam.selectedKey;
  var availId="";
  //start
   var testObj={
          lblSchedule:scheduleVal,
          imgclose:"cross.png",
          availId:availId
          
        }
  
  //end
   //submitUpdateInfo();
   validateSchedule();
   /*
   //alert("update array"+JSON.stringify(volunteerUpdateObject.scheduleArray));
  volunteerUpdateObject.scheduleArray.push(testObj);
  alert("update array"+JSON.stringify(volunteerUpdateObject.scheduleArray));
     setSegScheduleForUpdate(volunteerUpdateObject.scheduleArray);
      alert("after adding"+JSON.stringify( volunteerUpdateObject.scheduleArray));
      
      //code to reset
      
      volunteerMyProfilePage.listDays.selectedKey="";
      volunteerMyProfilePage.listFromTime.selectedKey="";
      volunteerMyProfilePage.listFromTimeMeridiam.selectedKey="";
      volunteerMyProfilePage.listEndTime.selectedKey="";
      volunteerMyProfilePage.listEndTimeMeridiam.selectedKey="";
    */  
    }catch(e)
      {
        alert(JSON.stringify(e));
      }
}

function setSegScheduleForUpdate(test)
{
  volunteerMyProfilePage.segUpdateSchedule.widgetDataMap={
    "lblSchedule":"lblSchedule",
    "imgclose":"imgclose",
    "availId":"availId"
    
  }
 // alert("length of test"+test.length);
  if(test.length=="0")
    {
      volunteerMyProfilePage.segUpdateSchedule.removeAll();
    }else
      {
        volunteerMyProfilePage.segUpdateSchedule.setData(test);
      }
  
  //convert to the format we needed
  var scheduleArr=[];
  for(var i=0;i<volunteerUpdateObject.scheduleArray.length;i++)
    {
      //start
      var str=volunteerUpdateObject.scheduleArray[i].lblSchedule;
      var arr=str.split(" ");
     // alert(JSON.stringify(arr));
      var days=arr[0];
      var fromTime=arr[1]+" "+arr[2];
      var toTime=arr[4]+" "+arr[5];
      
      
      //end
      var testObj={
        
        "availabilityId":volunteerUpdateObject.scheduleArray[i].availId,
        "days":days,
        "fromTime":fromTime,
        "toTime":toTime
        
      }
       scheduleArr.push(testObj);
      

    }
      gblscheduleArr=scheduleArr;
      scheduleArr=[];
  
}
function removeScheduleForUpdate(rowObject)
{
  try
    {
 // alert("roww before removing"+JSON.stringify(volunteerUpdateObject.scheduleArray));
   var scheduleToRemove = rowObject.selectedRowItems[0].lblSchedule;
 // alert("scheduleToRemove"+scheduleToRemove);
  if (scheduleToRemove) {
 // var indexOfScheduleToRemove = volunteerRegObject.scheduleArray.indexOf(scheduleToRemove);
    for(var i=0;i<volunteerUpdateObject.scheduleArray.length;i++)
      {
        
        if(volunteerUpdateObject.scheduleArray[i].lblSchedule==scheduleToRemove)
          {
            var indexOfScheduleToRemove=i;
           // alert("innn");
            break;
          }
      }
     if (indexOfScheduleToRemove != -1) {
      volunteerUpdateObject.scheduleArray.splice(indexOfScheduleToRemove, 1);
    //   alert("roww after removing"+JSON.stringify(volunteerUpdateObject.scheduleArray));
      setSegScheduleForUpdate(volunteerUpdateObject.scheduleArray);
    }
  }
    }catch(e)
      {
        alert(JSON.stringify(e));
      }
}
function validateSchedule()
{
  var hasAvailability =  validateAvailabilityUpdate();
     if(hasAvailability===false)
       {
         return false;
       }
  var isCorrectTime = startLessThanEndUpdate();
     if(isCorrectTime===false)
       {
         return false;
       }
  var isValidHours = validateVolunteerHoursUpdate();
 //alert("isValidHours"+isValidHours);
   if ( hasAvailability && isCorrectTime && isValidHours ) {
   
       var availId="";
  
   var daySelected=volunteerMyProfilePage.listDays.selectedKey;
  var fromTime=volunteerMyProfilePage.listFromTime.selectedKey+" "+volunteerMyProfilePage.listFromTimeMeridiam.selectedKey;
  var toTime=volunteerMyProfilePage.listEndTime.selectedKey+" "+volunteerMyProfilePage.listEndTimeMeridiam.selectedKey;
  
  var scheduleVal=daySelected+" "+fromTime+" TO "+toTime;
  
  
  
   var testObj={
          lblSchedule:scheduleVal,
          imgclose:"cross.png",
          availId:availId
          
        }
   //start duplicate check
  //  alert("for dup1"+JSON.stringify(volunteerUpdateObject.scheduleArray));
    var indexOfSchedule=-1;
  if (scheduleVal) {
    for(var i=0;i<volunteerUpdateObject.scheduleArray.length;i++)
      {
        if(volunteerUpdateObject.scheduleArray[i].lblSchedule==scheduleVal)
          {
             indexOfSchedule = 1;
             break;
            
          }
         
        
      }
 
     if (indexOfSchedule != -1) {
       alert("this schedule already exists");
       return false;
      //volunteerRegObject.scheduleArray.splice(indexOfSchedule, 1);
     }
  }
    //end duplicate check
    
   //alert("update array"+JSON.stringify(volunteerUpdateObject.scheduleArray));
  volunteerUpdateObject.scheduleArray.push(testObj);
 // alert("update array"+JSON.stringify(volunteerUpdateObject.scheduleArray));
     setSegScheduleForUpdate(volunteerUpdateObject.scheduleArray);
      //alert("after adding"+JSON.stringify( volunteerUpdateObject.scheduleArray));
      
      //code to reset
      
      volunteerMyProfilePage.listDays.selectedKey="";
      volunteerMyProfilePage.listFromTime.selectedKey="";
      volunteerMyProfilePage.listFromTimeMeridiam.selectedKey="";
      volunteerMyProfilePage.listEndTime.selectedKey="";
      volunteerMyProfilePage.listEndTimeMeridiam.selectedKey="";
    
  }
}