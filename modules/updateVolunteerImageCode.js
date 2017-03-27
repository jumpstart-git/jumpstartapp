//Type your code here
function changeProfPicVolunteer()
{
  var returnStatus1 = kony.phone.openMediaGallery(onselectioncallbackUpdateVolunteer, {mimetype:"image/*"});
  
}
function onselectioncallbackUpdateVolunteer(rawbytes)
{
  
    if (rawbytes == null){
           alert("Nothing selected");
           return;
     }
  var base64Val = kony.convertToBase64(rawbytes);
  kony.print("The base 64 value is==  "+base64Val);
  volunteerMyProfilePage.volunteerMyProfilePic.base64=base64Val;
  kony.store.setItem("imageValUpdateVolunteer",base64Val);
  kony.store.setItem("imageFileNameValUpdateVolunteer","efg.jpg");
}