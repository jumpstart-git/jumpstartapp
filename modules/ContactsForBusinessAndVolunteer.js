//********************For Business****************************
//Start Engagement from accepted segment
function callContactfromStartEngagementFromAcceptedrequestSeg()
{ try{
  var businessAcceptedRowClickData=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
  var volContactAccepted=businessAcceptedRowClickData[0].phoneNumber;
 //alert(JSON.stringify(volContactAccepted));
  kony.store.setItem("volContactAccepted", volContactAccepted);
  sendSMSFromStartEngageAcceptedSeg();}
 catch(e){}
 }
function sendSMSFromStartEngageAcceptedSeg()
{
  try{
    var phoneFromAcceptedSeg= kony.store.getItem("volContactAccepted");
  //alert(JSON.stringify(phoneFromAcceptedSeg));
    var msgFromAcceptedSeg="";
    kony.phone.sendSMS(phoneFromAcceptedSeg, msgFromAcceptedSeg); 
 }
catch(err){
  alert("error in sending sms:"+err);
}
}

//Fun1
function callVolFromAcceptedSeg()
{
  try{
  var busAcceptedRowClickData=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
  var volPhoneForCall=busAcceptedRowClickData[0].phoneNumber;
 //alert(JSON.stringify(volContactAccepted));
  kony.store.setItem("volPhoneForCall", volPhoneForCall);
    callVol();
    
}
  catch(e){}

}
function callVol()
{
  try{
    
  var num=kony.store.getItem("volPhoneForCall");
    if(num=="null"||num===null||num==="")
    {
      num="";
   }
  
    kony.phone.dial(num);
  }
  catch(e)
  {
    
  }
}

//Start Engagement from sent segment
function callContactfromStartEngagementSentRequestSeg()
{
  try{
  var sentSegRowItems=mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
  var volContactSent=sentSegRowItems[0].contactNumber;
 
  kony.store.setItem("volContactSent", volContactSent);
  sendSMSFromStartSentSeg();
  }catch(e){}
 }
function sendSMSFromStartSentSeg()
{
   try{
    var phoneFromSentSeg= kony.store.getItem("volContactSent");
    // alert(JSON.stringify(phoneFromSentSeg));
     var msgFromSentSeg="";
  kony.phone.sendSMS(phoneFromSentSeg, msgFromSentSeg);
  
}
catch(err){
  alert("error in sending sms:"+err);
}
}

//Fun2
function callContactSentSeg()
{
  try{
  var sent=mainPage.mainPageBody.mainPageContentParent.myActivity.mySentRequests.sentRequestsSegment.selectedRowItems;
  var volContactfrmSent=sent[0].contactNumber;
 
  kony.store.setItem("volPhoneForCall", volContactfrmSent);
  callVol();
 }
  catch(e){}
}



//OpenTask DetailsFor Business
function callContactfromOpenTaskBusiness()
{ try{
  var businessOpenTaskRowItems=mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
  var volContactOpenTask=businessOpenTaskRowItems[0].contactNumber;
  kony.store.setItem("volContactOpenTask", volContactOpenTask);
  sendSMSFromOpenTaskRow();
  
 }
 catch(e){}
}
function sendSMSFromOpenTaskRow()
{
   try{
    var phoneFromOpenTask= kony.store.getItem("volContactOpenTask");
     var msgFromOpenTask="";
  kony.phone.sendSMS(phoneFromOpenTask, msgFromOpenTask);
  
}
catch(err){
  alert("error in sending sms:"+err);
}
}
//Fun3
function callFromOpenSeg()
{
  try{
  var open=mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
  var volOpenTasknum=open[0].contactNumber;
  kony.store.setItem("volPhoneForCall", volOpenTasknum);
  callVol();
 }catch(e)
   {}
}


//CloseTask DetailsFor Business
function callContactfromCloseTaskBusiness()
{
  try{
  var businessCloseTaskRowItems=mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
  var volContactCloseTask=businessCloseTaskRowItems[0].contactNumber;
  //alert(JSON.stringify(businessCloseTaskRowItems));
  kony.store.setItem("volContactCloseTask", volContactCloseTask);
  sendSMSFromCloseTaskRow();
 }catch(e){}
}
function sendSMSFromCloseTaskRow()
{
   try{
    var phoneFromCloseTask= kony.store.getItem("volContactCloseTask");
     var msgFromCloseTask="";
  kony.phone.sendSMS(phoneFromCloseTask, msgFromCloseTask);
  
}
catch(err){
  alert("error in sending sms:"+err);
}
}
////Fun4
function callVolFromeCloseSeg()
{
  try{
  var closeTaskRow=mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
  var volPhoneCloseTask=closeTaskRow[0].contactNumber;
  //alert(JSON.stringify(businessCloseTaskRowItems));
  kony.store.setItem("volPhoneForCall", volPhoneCloseTask);
  callVol();
 }catch(e){}
}


////*********************For Volunteer****************************


//below code is accept task for volunteer 
function contactVolunteerFromAcceptTaskDetailsPage()
{
  try{
 var volSentRowClick=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
 //alert(JSON.stringify(volSentRowClick));
  var businessContactSengSeg=volSentRowClick[0].phoneNumber;
 kony.store.setItem("businessContactSengSeg", businessContactSengSeg);
 
  sendSMSToVolFromTaskDetailsPage();
  
}catch(e){}
}

function sendSMSToVolFromTaskDetailsPage()
{
 
  try{
   
  var businessPhoneNumFromSentSeg= kony.store.getItem("businessContactSengSeg");
  var msgVolFromSentSeg="";
  kony.phone.sendSMS(businessPhoneNumFromSentSeg, msgVolFromSentSeg);
  
}
catch(err){
  alert("error in sending sms:"+err);
}
}
//Fun1
function callBusFromAcceptedSeg()
{
  try{
  var busPhone=mainPage.mainPageBody.mainPageContentParent.myActivity.myAcceptedRequests.acceptedRequestsSegment.selectedRowItems;
  var busPhoneForCall=busPhone[0].phoneNumber;
 //alert(JSON.stringify(volContactAccepted));
  kony.store.setItem("volPhoneForCall", busPhoneForCall);
    callVol();
}catch(e){}
}


//below code is open task details task for volunteer 
function callContactfromOpenTaskVolunteer()
{
  try{
 var volOpenTaskRowClick=mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
 var businessContactOpenTask=volOpenTaskRowClick[0].contactNumber;
 kony.store.setItem("businessContactOpenTask", businessContactOpenTask);
 //alert(businessContactOpenTask);
 sendSMSToVolFromOpenTask();
  }
  catch(e)
    {//alert(e);
    }
}

function sendSMSToVolFromOpenTask()
{
 
  try{
   
  var businessPhoneNumFromOpenTask= kony.store.getItem("businessContactOpenTask");
  var msgVolFromOpenTask="";
  kony.phone.sendSMS(businessPhoneNumFromOpenTask, msgVolFromOpenTask);
  
}
catch(err){
  alert("error in sending sms:"+err);
}
}


//Fun 2
function callBusContactOpenSeg()
{
  try{
  var volOpenSeg=mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
  var busContactfrmOpen=volOpenSeg[0].contactNumber;
  //alert(busContactfrmOpen);
   kony.store.setItem("volPhoneForCall", busContactfrmOpen);
  callVol();
 }catch(e){}
}



//CloseTask DetailsFor Volunteer
function callContactfromCloseTaskVolunteer()
{ try{
  var volCloseTaskRowItems=mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
  var busContactCloseTask=volCloseTaskRowItems[0].contactNumber;
  kony.store.setItem("busContactCloseTask", busContactCloseTask);
  sendSMSFromCloseTaskRowVol();
 }catch(e){}
}
function sendSMSFromCloseTaskRowVol()
{
   try{
    var phoneFromVolCloseTask= kony.store.getItem("busContactCloseTask");
     var msgFromVolCloseTask="";
  kony.phone.sendSMS(phoneFromVolCloseTask, msgFromVolCloseTask);
  
}
catch(err){
  alert("error in sending sms:"+err);
}
}


//Fun3
function callBusFromeCloseSeg()
{try{
  var closeTask=mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
  var busPhoneCloseTask=closeTask[0].contactNumber;
  //alert(JSON.stringify(businessCloseTaskRowItems));
  kony.store.setItem("volPhoneForCall", busPhoneCloseTask);
  callVol();
 }catch(e){}
}

/////////////////////////////////////////////////
function msgVol()
{ try{
  var data=searchPage.searchPageDashboardFlex.DataFlexScrollContainer.volunteerdataSegment.selectedRowItems;
  var number=data[0].contactNumber;
  //alert(number);
  kony.store.setItem("volContactNumber1", number);
  imessageFoeVol();
}catch(e){}
}
function imessageFoeVol()
{
   try{
    var searchSegContact= kony.store.getItem("volContactNumber1");
     var msgText="";
  kony.phone.sendSMS(searchSegContact, msgText);
  
}
catch(err){
  alert("error in sending sms:"+err);
}
}

function CallVol1()
{
  var data1=searchPage.searchPageDashboardFlex.DataFlexScrollContainer.volunteerdataSegment.selectedRowItems;
  var number1=data1[0].contactNumber;
// alert(number1);
  kony.store.setItem("volPhoneForCall",number1);
  callVol();
}
























































