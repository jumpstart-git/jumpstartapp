//Type your code here
var arrHours=[];
var gblArrHours=[];
var gblarrFinalVal=[];
var gbltotalHours;
var gblOutBus;
var gblBusHours;
var startTimeOfTask;
var endTimeOfTask;
var gblCanDelete=false;
var gblRowObject;


function addHours()
{
  arrHours=gblArrHours;
   LogHoursForms.listOfHoursSegment.widgetDataMap={
    "lblDate":"lblDate",
     "hoursId":"hoursId",
    "lblWorkingHours":"lblWorkingHours",
    "lblNonWorkingHours":"lblNonWorkingHours",
     "forDupCheck":"forDupCheck"
  }
  
  var dateVal=LogHoursForms.addHourCalendar.formattedDate;
  //start
// var str="28/10/2016";
var arr=dateVal.split("/");
var dateVal=arr[2]+"-"+arr[1]+"-"+arr[0];
  
  //end
  var hoursVal=LogHoursForms.hoursDropDownList.selectedKey;
  var minutesVal=LogHoursForms.minutesDropDownList.selectedKey;
  var isNonWorkingHour=LogHoursForms.CheckBoxGroup00dcf0e4d6e6a45.selectedKeys;
  var timeVal=hoursVal+"."+minutesVal;
  
  if(isNonWorkingHour!=null)
    {
      //alert("if");
      isNonWorkingHour=LogHoursForms.CheckBoxGroup00dcf0e4d6e6a45.selectedKeys[0];
    }else
      {
       // alert("else");
        isNonWorkingHour=" ";
      }
  if(isNonWorkingHour==" ")
    {
      //non working hourse is false
     // alert("ifffff");
      var workingtimeVal=timeVal;
      var nonWorkingtimeVal=" ";
    }else
      {
       // alert("elseeeee");
         var workingtimeVal=" ";
      var nonWorkingtimeVal=timeVal;
      }
  //var str=dateVal+" "+hoursVal+" "+minutesVal+" "+isNonWorkingHour;
  var dupChekVal=dateVal+workingtimeVal+nonWorkingtimeVal;
  
  //check start
  
  for(var j=0;j<arrHours.length;j++)
  {
    
    if(arrHours[j].forDupCheck===dupChekVal)
      {
        alert("already exist");
        return false;
      }
   
  }
  //check end
  //alert(str);
  var testObj={
    "lblDate":dateVal,
    "hoursId":"",
    "forDupCheck":dupChekVal,
    "lblWorkingHours":workingtimeVal,//workingtimeVal,
    "lblNonWorkingHours":nonWorkingtimeVal//nonWorkingtimeVal
  
    
    
  }
  arrHours.push(testObj);
  
  LogHoursForms.AddHoursModalContainer.isVisible=false;

  LogHoursForms.listOfHoursSegment.setData(arrHours);
  gblArrHours=arrHours;
// alert("arrHours"+JSON.stringify(arrHours));
}

function test(eventobj)
{
  
  //alert(JSON.stringify(eventobj));
}

function convertToFormat()
{
  var arrFinalVal=[];
  for(var i=0;i<gblArrHours.length;i++)
    {
      //start time
var arr= gblArrHours[i].lblDate.split("/");
var str1=arr[2]+"-"+arr[1]+"-"+arr[0];///confirm the format once more
     
      
      
      //end time
      var testValObj={
        "tasktaskVolHourId":gblArrHours[i].hoursId,
        "volunteerHoursBus":gblArrHours[i].lblWorkingHours,
        "volunteerHoursOutBus":gblArrHours[i].lblNonWorkingHours,
        "volunteerDate":gblArrHours[i].lblDate//str1
        
               
      }
      arrFinalVal.push(testValObj)
      
    }
  //alert("format to sent"+JSON.stringify(arrFinalVal));
  gblarrFinalVal=arrFinalVal;
  hoursCheck();
  
}
function removeHours(rowObject) {
  gblRowObject=rowObject;
// alert(gblCanDelete);
  if(gblCanDelete==true)
    {
      gblCanDelete=false;
    
  //alert("row");
  // alert("gblArrHours before deleting"+JSON.stringify(gblArrHours));
  
  var hoursToRemove = rowObject.selectedRowItems[0].forDupCheck;
     // alert("hoursToRemove"+hoursToRemove);
  if (hoursToRemove) {
    //start
    for(var i=0;i<gblArrHours.length;i++)
      {
        if(gblArrHours[i].forDupCheck==hoursToRemove)
          {
             var indexOfHoursToRemove=i;
          }
        
      }
    
    
    
    //end
  // var indexOfHoursToRemove = gblArrHours.indexOf(hoursToRemove);
    if (indexOfHoursToRemove != -1) {
    //  alert("indexOfHoursToRemove"+indexOfHoursToRemove);
      gblArrHours.splice(indexOfHoursToRemove, 1);
     // alert("gblArrHours after deleting"+JSON.stringify(gblArrHours));
      updateHoursSegment();
    
    }
  }
    }    
}

function updateHoursSegment()
{
  var arrHours=[];
  //alert("len"+gblArrHours.length);
  for(var i=0;i<gblArrHours.length;i++)
    {
       var testObj={
    "lblDate":gblArrHours[i].lblDate,
    "hoursId":gblArrHours[i].hoursId,
    "forDupCheck":gblArrHours[i].forDupCheck,
    "lblWorkingHours":gblArrHours[i].lblWorkingHours,
    "lblNonWorkingHours":gblArrHours[i].lblNonWorkingHours
  
  }
  arrHours.push(testObj);
    }
// alert("arrHours"+JSON.stringify(arrHours));
  if(gblArrHours.length=="0")
    {
      LogHoursForms.listOfHoursSegment.removeAll();
  
    }else
      {
        LogHoursForms.listOfHoursSegment.setData(arrHours);
      }
  gblArrHours=arrHours;
}

function loadTime1()
{
  var timeVal=startTimeOfTask;
  var timeValArr=timeVal.split('-');
   var timeEndVal=endTimeOfTask;
  var timeEndValArr=timeEndVal.split('-');
  
  LogHoursForms.addHourCalendar.dateComponents=[timeValArr[2],timeValArr[1],timeValArr[0]];
  LogHoursForms.addHourCalendar.validStartDate=[timeValArr[2],timeValArr[1],timeValArr[0]];
   LogHoursForms.addHourCalendar.validEndDate=[timeEndValArr[2],timeEndValArr[1],timeEndValArr[0]];
}
function appUpgrade1(response)
{
  if(response==true)
    {
      gblCanDelete=true;
      removeHours(gblRowObject);
    }else
      {
        gblCanDelete=false;
      }
}
