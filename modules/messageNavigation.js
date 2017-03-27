//Type your code here


function navToMsgScreen(){
 // mainPage.mainPageBody.mainPageContentParent.flxMessageConversation.setFocus(true); 
//  try
//    {
      
     
   var visible=true;
   var focus=true;
//  //  var len = mainPage.mainPageBody.mainPageContentParent.myNotifications.segMessageNotification.data.length;
      var selData= mainPage.mainPageBody.mainPageContentParent.myNotifications.segMessageNotification.selectedRowItems;
//  // var rowNumber=mainPage.mainPageBody.mainPageContentParent.myNotifications.segMessageNotification.selectedRowIndex;
     
     
     // alert("segdata"+selData);
   //var segdata=selData[0].lblMeaasageType;
  //alert("the text is"+selData[0].lblMeaasageType);
// //   for(var i = 0; i < len; i++)
// //   {
    if(selData[0].lblMeaasageType=="has left you a message"){
    // alert("1");
       mainPage.mainPageBody.mainPageContentParent.flxMessageConversation.setFocus(visible); 
       mainPage.mainPageBody.mainPageContentParent.flxMessageConversation.left="0%"; 
      mainPage.mainPageBody.mainPageContentParent.flxMessageConversation.isVisible=true;
      
     }
      else if(selData[0].lblMeaasageType=="has left you a recommendation"){
       // alert("2");
        
         mainPage.mainPageBody.mainPageContentParent.myRecommendations.setFocus(visible); 
       mainPage.mainPageBody.mainPageContentParent.myRecommendations.left="0%";
       mainPage.mainPageBody.mainPageContentParent.myNotifications.left="100%";
         
        mainPage.mainPageBody.mainPageContentParent.myRecommendations.isVisible=true;
        
    } 
           
       
    }
// //   }
     
//    //alert(JSON.stringify(mainPage.mainPageBody.mainPageContentParent.myNotifications.segMessageNotification.data));
//    }catch(e)
//   {
    
//     alert("error"+e);
//   }
//}


// else{
//   mainPage.mainPageBody.mainPageContentParent.myRecommendations.setFocus(focus)
// }  
 
// }

function navToMessageListScreen(){
  var enabled=true;
//  alert("here");
//  mainPage.mainPageBody.mainPageContentParent.myMessages.isVisible=true;
  // mainPage.mainPageBody.mainPageContentParent.flxMessageConversation.left="100%";
 
  
}

// function navigateToMessagePage(page) {
//   kony.print(page.id);
  
//   function moveLeft(pageId) {
//     mainPage[pageId].animate(
//       kony.ui.createAnimation({
//         "100": {
//           "left": "-100%",
//           "stepConfig": {
//             "timingFunction": kony.anim.EASE
//           }
//         }
//       }), {
//         "delay": 0,
//         "iterationCount": 1,
//         "fillMode": kony.anim.FILL_MODE_FORWARDS,
//         "duration": 0.25
//       }, {
//         "animationEnd": function() {
          
//         }
//       }
//     );
//   }
  
//   function moveRight(pageId) {
//      mainPage[pageId].animate(
//       kony.ui.createAnimation({
//         "100": {
//           "left": "100%",
//           "stepConfig": {
//             "timingFunction": kony.anim.EASE
//           }
//         }
//       }), {
//         "delay": 0,
//         "iterationCount": 1,
//         "fillMode": kony.anim.FILL_MODE_FORWARDS,
//         "duration": 0.25
//       }, {
//         "animationEnd": function() {
          
//         }
//       }
//     );
//   }
  
//   switch (page.id)
//   {
         
    
//        case "navMessageConversation":
//       moveLeft("myActivity");
//       moveLeft("myEvents");
//       moveLeft("myNews");
//       moveRight("myNotifications");
//       moveRight("myEndorsements");
//       moveRight("myRecommendations");
      
//       mainPage.myMessages.animate(
//         kony.ui.createAnimation({
//           "100": {
//             "left": "0%",
//             "stepConfig": {
//               "timingFunction": kony.anim.EASE
//             }
//           }
//         }), {
//           "delay": 0,
//           "iterationCount": 1,
//           "fillMode": kony.anim.FILL_MODE_FORWARDS,
//           "duration": 0.25
//         }, {
//           "animationEnd": function() {
            
//           }
//       	}
//       );
//       break;
           
//     case "navNotifications":
//       moveLeft("myActivity");
//       moveLeft("myEvents");
//       moveLeft("myNews");
//       moveLeft("myMessages");
//       moveRight("myEndorsements");
//       moveRight("myRecommendations");
      
//       mainPage.myNotifications.animate(
//         kony.ui.createAnimation({
//           "100": {
//             "left": "0%",
//             "stepConfig": {
//               "timingFunction": kony.anim.EASE
//             }
//           }
//         }), {
//           "delay": 0,
//           "iterationCount": 1,
//           "fillMode": kony.anim.FILL_MODE_FORWARDS,
//           "duration": 0.25
//         }, {
//           "animationEnd": function() {
            
//           }
//       	}
//       );
//       break;
    
//     case "navRecommendations":
//       moveLeft("myActivity");
//       moveLeft("myEvents");
//       moveLeft("myNews");
//       moveLeft("myMessages");
//       moveLeft("myNotifications");
//       moveLeft("myEndorsements");
      
      
//       mainPage.myRecommendations.animate(
//         kony.ui.createAnimation({
//           "100": {
//             "left": "0%",
//             "stepConfig": {
//               "timingFunction": kony.anim.EASE
//             }
//           }
//         }), {
//           "delay": 0,
//           "iterationCount": 1,
//           "fillMode": kony.anim.FILL_MODE_FORWARDS,
//           "duration": 0.25
//         }, {
//           "animationEnd": function() {
            
//           }
//       	}
//       );
//       break;
//     default:
//       moveLeft("myActivity");
//       moveRight("myEvents");
//       moveRight("myNews");
//       moveRight("myMessages");
//       moveRight("myNotifications");
//       moveRight("myEndorsements");
//       moveRight("myRecommendations");
      
//       mainPage.myActivity.animate(
//         kony.ui.createAnimation({
//           "100": {
//             "left": "0%",
//             "stepConfig": {
//               "timingFunction": kony.anim.EASE
//             }
//           }
//         }), {
//           "delay": 0,
//           "iterationCount": 1,
//           "fillMode": kony.anim.FILL_MODE_FORWARDS,
//           "duration": 0.25
//         }, {
//           "animationEnd": function() {
            
//           }
//       	}
//       );
//   }
// }

// function navigateToMainFromInfoPage() {
//   mainPage.show();
//   userInfoPage.destroy();
// }

// function navigateToMyProfile() {
//   myProfile.show();
//   hideSideBar();
// }