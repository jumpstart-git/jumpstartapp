// notificationTitle
// notificationContent

//notificationContent
function getBusinessNotificationDetails()
{
  var busNoteRowDetails=mainPage.mainPageContentParent.myNotifications.segMessageNotification.selectedRowItems;
  var noteTitle=busNoteRowDetails[0].notificationMeaasageType;
  var noteDetails=busNoteRowDetails[0].notificationContent;
   if(noteDetails===null||noteDetails==="null"||noteDetails==="")
    {
      noteDetails="";
    } 
  mainPage.NotificationTitleContainer.NotificationTitleInputLabel.text=noteTitle;
  mainPage.NotificationDetailsContainerBody.NotificationDetailsTextArea.text=noteDetails;
  mainPage.NotificationDetailsContainerBody.NotificationDetailsTextArea.setEnabled(false);
  mainPage.NotificationModalGrayContainer.isVisible=true;
  
}

function getVolunteerNotificationDetails()
{
  var VolNoteRowDetails=mainPage.mainPageContentParent.myNotifications.segMessageNotification.selectedRowItems;
  var volnoteTitle=VolNoteRowDetails[0].notificationMeaasageType;
  var volnoteDetails=VolNoteRowDetails[0].notificationContent;
  if(volnoteDetails===null||volnoteDetails==="null"||volnoteDetails==="")
    {
      volnoteDetails="";
    }
    
  mainPage.NotificationTitleContainer.NotificationTitleInputLabel.text=volnoteTitle;
  mainPage.NotificationDetailsContainerBody.NotificationDetailsTextArea.text=volnoteDetails;
  mainPage.NotificationDetailsContainerBody.NotificationDetailsTextArea.setEnabled(false);
  mainPage.NotificationModalGrayContainer.isVisible=true;
  
}


