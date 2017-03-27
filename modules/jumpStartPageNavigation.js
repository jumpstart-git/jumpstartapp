//Type your code here
function navigateToPage(page) {
//  alert("inside animation"+page.id);
  kony.print(page.id);
 // var selData=mainPage.mainPageBody.mainPageContentParent.myNotifications.segMessageNotification.selectedRowItems[0].lblMessageType;
  
  
  function moveLeft(pageId) {
    mainPage[pageId].animate(
      kony.ui.createAnimation({
        "100": {
          "left": "-100%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      }, {
        "animationEnd": function() {
          
        }
      }
    );
  }
  
  function moveRight(pageId) {
     mainPage[pageId].animate(
      kony.ui.createAnimation({
        "100": {
          "left": "100%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      }, {
        "animationEnd": function() {
          
        }
      }
    );
  }
  
  switch (page.id)
  {
    case "navMyActivity":
      moveRight("myEvents");
      moveRight("myNews");
      moveRight("myMessages");
      moveRight("myNotifications");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      
      mainPage.myActivity.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
        });
      
      break;
    case "navEvents":
      moveLeft("myActivity");
      moveRight("myNews");
      moveRight("myMessages");
      moveRight("myNotifications");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      
      mainPage.myEvents.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
      break;
    case "navNews":
      moveLeft("myActivity");
      moveLeft("myEvents");
      moveRight("myMessages");
      moveRight("myNotifications");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      
      mainPage.myNews.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
      break;
    case "navMessages":
      moveLeft("myActivity");
      moveLeft("myEvents");
      moveLeft("myNews");
      moveRight("myNotifications");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      
      mainPage.myMessages.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
      break;
       case "navMessageConversation":
      moveLeft("myActivity");
      moveLeft("myEvents");
      moveLeft("myNews");
      moveRight("myNotifications");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      
      mainPage.myMessages.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
      break;
           
    case "navNotifications":
      mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible=true;
      moveLeft("myActivity");
      moveLeft("myEvents");
      moveLeft("myNews");
      moveLeft("myMessages");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      //alert("yess notification calling");
      ///start merin
      
      if(kony.store.getItem("isBusOrVol")=="volunteer")
  {
   
    notificationServiceforVolunteer();
    
    
  }
else
  {
    
    BusinessNotificationService();
  }
      
      
      ///end merin
      
      mainPage.myNotifications.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
      break;
    case "navEndorsements":
      mainPage.mainPageBody.mainPageContentParent.myEndorsements.isVisible=true;
      moveLeft("myActivity");
      moveLeft("myEvents");
      moveLeft("myNews");
      moveLeft("myMessages");
      moveLeft("myNotifications");
      moveRight("myRecommendations");
      if(kony.store.getItem("isBusOrVol")=="volunteer"){
        endorsementsService();
      }
      
      mainPage.myEndorsements.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
      break;
      //stat merin
      case "btnBack":
      moveLeft("myActivity");
      moveLeft("myEvents");
      moveLeft("myNews");
      moveRight("myNotifications");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      
      mainPage.myMessages.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
      break;
      
      //end merin

      case "navRecommendations":
       
      if(kony.store.getItem("isBusOrVol")=="business")
  {
   mainPage.mainPageBody.mainPageContentParent.myNotifications.isVisible=true;
    BusinessRecommendationService();     
  }
      moveLeft("myActivity");
      moveLeft("myEvents");
      moveLeft("myNews");
      moveLeft("myMessages");
      moveLeft("myNotifications");
      moveLeft("myEndorsements");
      
      
      mainPage.myRecommendations.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
           
          }
      	}
      );
      break;
    default:
      moveLeft("myActivity");
      moveRight("myEvents");
      moveRight("myNews");
      moveRight("myMessages");
      moveRight("myNotifications");
      moveRight("myEndorsements");
      moveRight("myRecommendations");
      
      mainPage.myActivity.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function() {
            
          }
      	}
      );
  }
}

function navigateToMainFromInfoPage() {
  mainPage.show();
  userInfoPage.destroy();
}

function initAppHeader() {
  if (loggedInUserObject.user === "volunteer") {
    mainPage.appPageProfilePic.src = "nickgiles.png";
    mainPage.appPageGreeting.text = "Hello Nick!";
  } else if (loggedInUserObject.user === "indigenousBusiness") {
    mainPage.appPageProfilePic.src = "supplynationlogo.png";
    mainPage.appPageGreeting.text = "Hello Supply Nation!";
  }
}