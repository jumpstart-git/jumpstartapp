function validateDate(startDate,EndDate)
{
  //alert("startdateee"+JSON.stringify(startDate));
  // alert("EndDateeee"+JSON.stringify(EndDate));

var d1=startDate;//"19/10/2016";
var d2=EndDate;//"18/10/2016";
var fd1=d1.split("/");
//alert(fd1[2]);
var stryear1 =fd1[2];
var strmth1=fd1[1];
var strday1=fd1[0];
var date1 = new Date(stryear1 ,strmth1 ,strday1); 
//alert(date1);
var fd2=d2.split("/");
//alert(fd1[2]);
var stryear2 =fd2[2];
var strmth2=fd2[1];
var strday2=fd2[0];
var date2 = new Date(stryear2 ,strmth2 ,strday2); 
//alert(date2);
var t2=checkEnteredDates(date1,date2);
  return t2;


}
function checkEnteredDates(date1,date2){ 
 
var datediffval = (date2 - date1 )/864e5; 
if(datediffval <0){
//alert("end date should be greater than start date"); 
return false;
}
return true; 
}
function validateStartDate(startDate1,EndDate1)
{
  //alert("startdate"+JSON.stringify(startDate1));
   //alert("EndDate"+JSON.stringify(EndDate1));

var d1=startDate1;//"19/10/2016";
var d2=EndDate1;//"18/10/2016";
var fd1=d1.split("/");
//alert(fd1[2]);
var stryear1 =fd1[2];
var strmth1=fd1[1];
var strday1=fd1[0];
var date1 = new Date(stryear1 ,strmth1 ,strday1); 
//alert(date1);
var fd2=d2.split("/");
//alert(fd1[2]);
var stryear2 =fd2[2];
var strmth2=fd2[1];
var strday2=fd2[0];
var date2 = new Date(stryear2 ,strmth2 ,strday2); 
//alert(date2);
var t1=checkEnteredDates1(date1,date2);
  return t1;


}
function checkEnteredDates1(date1,date2){ 
 
var datediffval = (date1 - date2 )/864e5; 
if(datediffval < 0){
//alert("Start dateshould be greater than todays or equal to todays date"); 
return false;
}
return true; 
}





//indeginousTaskDetails();
