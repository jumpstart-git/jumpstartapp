//Type your code here

//Type your code here

function getVolNotificationForSort(resp)
{
  

var tempArray=[];
//From the response we fill filter json array .Beacause for sort we need data in array.
//tempArray  is the array [json array]
for(var i=0;i<resp.notificationList.length;i++)
{

  tempArray.push(resp.notificationList[i].NotificationDTO);

}
  
  tempArray.sort(custom_sort);
//console.log(JSON.stringify(tempArray));





//once we get sorted array we need to make the sorted response in json format.Below steps are done for the same
var sortedresp={};
sortedresp.notificationList=[];
for(var j=0;j<tempArray.length;j++)
{
  var testobj={"NotificationDTO":tempArray[j]};
  sortedresp.notificationList.push(testobj);
}
//sortedresp is the final sorted json response
//alert(JSON.stringify(sortedresp));
  gblVolNoteResponse =sortedresp;
}
//console.log(JSON.stringify(tempArray));

function custom_sort(a, b) {


    return new Date(parseInt(a.updatedDate)).getTime() - new Date(parseInt(b.updatedDate)).getTime();
}
