//Type your code here

function cancelRequest() {
  showModalBackground();
  mainPage.cancelRequestModalContainer.isVisible = true;
  mainPage.cancelRequestModalContainer.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "backgroundColor": "ffffff00",
        "opacity": 100
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.25
    }, {
      "animationEnd": {}
    });
}
function declineRequest() {
  showModalBackground();
  mainPage.declineRequestModalContainer.isVisible = true;
  mainPage.declineRequestModalContainer.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "backgroundColor": "ffffff00",
        "opacity": 100
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.25
    }, {
      "animationEnd": {}
    });
}

function acceptRequest() {
  showModalBackground();
}

function acceptTask() {
  showModalBackground();
  mainPage.acceptTaskModalContainer.isVisible = true;
  mainPage.acceptTaskModalContainer.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "backgroundColor": "ffffff00",
        "opacity": 100
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.25
    }, {
      "animationEnd": {}
    });
}
function showAcceptTaskDetails() {
  fadeInModal(mainPage.acceptTaskDetailsModalContainer);
}

function startEngagement() {
  showModalBackground();
  mainPage.startEngagementModalContainer.isVisible = true;
  mainPage.startEngagementModalContainer.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "backgroundColor": "ffffff00",
        "opacity": 100
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.25
    }, {
      "animationEnd": {}
    });
}

function checkIfTaskOrStartEngagement(type) {
  
  //if (loggedInUserObject.user === "volunteer") {
  if(kony.store.getItem("isBusOrVol")=="volunteer"){
    if (type) {
      acceptRequest();
    } else {
      acceptTask();
    }
  } else if (kony.store.getItem("isBusOrVol") == "business") {
    startEngagement();
  }
}

function closeModal() {
  mainPage.mainPageModalsBackground.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "opacity": 0.01
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.25
    }, {
      "animationEnd": {}
    });
  
  fadeOutModal(mainPage.cancelRequestModalContainer);
  fadeOutModal(mainPage.declineRequestModalContainer);
  fadeOutModal(mainPage.acceptTaskModalContainer);
  fadeOutModal(mainPage.startEngagementModalContainer);  
}

function showModalBackground() {
  mainPage.mainPageModalsBackground.isVisible = true;
  mainPage.mainPageModalsBackground.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "backgroundColor": "7a7a7a00",
        "opacity": 0.4
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
}

function fadeInModal(modal) {
  modal.isVisible = true;
  modal.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "backgroundColor": "ffffff00",
        "opacity": 100
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.25
    }, {
      "animationEnd": {}
    });
}

function fadeOutThisModal(modal) {
  modal.animate(
    kony.ui.createAnimation({
      "100": {
        "stepConfig": {
          "timingFunction": kony.anim.EASE
        },
        "backgroundColor": "ffffff00",
        "opacity": 0.01
      }
    }), {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.25
    }, {
      "animationEnd": {}
    });
  
  modal.isVisible = false;
}

// This also hides the gray modal BG.
function fadeOutModal(modal) {
  fadeOutThisModal(modal);
  mainPage.mainPageModalsBackground.isVisible = false;
}

function contactRequest() {
  kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print("contact");
  kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - END: myString");
}














// ARCHIVED:
function generateMyAcceptedRequests(dataArray) {
  
  if (dataArray.length > 0) {
    for (var i = 0; i < dataArray.length; i++) {
      var requestBusinessName = dataArray[i].businessName;
      
      /***** TOP ELEMENTS *****/
      //Defining the properties for a label 
      var lblBasicNew = { id:"", text: "New", skin: "requestsNewSkin", right: "0dp", isVisible: true};
      var lblLayoutNew = { containerWeight:100, padding:[5,5,5,5], margin:[0,0,0,0], hExpand:false, vExpand:false };
      var lblPspNew = {renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};
      var acceptedReqNew = new kony.ui.Label(lblBasicNew, lblLayoutNew, lblPspNew);
      
      var acceptedRequestNewParent = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "width": "20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_VERTICAL
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestNewParent.add(acceptedReqNew);

      //Defining the properties for a label 
      var lblBasicBusName = { id:"", skin: "requestsCompanySkin", isVisible: true};
      var lblLayoutBusName = { containerWeight:100, padding:[10,15,5,5], margin:[5,5,5,5], hExpand:false, vExpand:false };
      var lblPspBusName = {renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};
      var acceptedReqInfo = new kony.ui.Label(lblBasicBusName, lblLayoutBusName, lblPspBusName);
      acceptedReqInfo.text = requestBusinessName;

      var lblBasicReqStat = { id:"", text: "Has accepted your request", skin: "requestsStatusSkin", isVisible: true};
      var lblLayoutReqStat = { containerWeight:100, padding:[10,0,0,0], margin:[5,5,5,5], hExpand:false, vExpand:false };
      var lblPspReqStat = {renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};
      var acceptedReqStatus = new kony.ui.Label(lblBasicReqStat, lblLayoutReqStat, lblPspReqStat);

      var acceptedRequestInfoParent = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "width": "50%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_VERTICAL
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestInfoParent.add(acceptedReqInfo);
      acceptedRequestInfoParent.add(acceptedReqStatus);

      //Creating the Image with isVisible:true.
      var basicConfImage = {
        id : "",
        isVisible: true,
        src: "imagedrag.png",
        imageWhenFailed: "imagedrag.png",
        imageWhileDownloading: "imagedrag.png",
        height: "100%",
        width: "100%"
      };
      var layoutConfImage = { containerWeight:100 };
      var PSPConfImage = { };
      var acceptedReqImage = new kony.ui.Image2(basicConfImage, layoutConfImage, PSPConfImage);

      var acceptedRequestImageParent = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "width": "30%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestImageParent.add(acceptedReqImage);

      var acceptedRequestTop = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "80dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestTop.add(acceptedRequestImageParent);
      acceptedRequestTop.add(acceptedRequestInfoParent);
      acceptedRequestTop.add(acceptedRequestNewParent);

      
      /***** BOTTOM ELEMENTS *****/
      //Defining the properties for a label 
      var rtBasicCancel = { id:"", text: "<u>Cancel<br>Request</u>", skin: "rtRequestsActionSkin", centerX: "50%", isVisible: true };
      var rtLayoutCancel = { containerWeight:100, padding:[0,0,0,0], margin:[0,0,0,0], contentAlignment: "center" };
      var rtPspCancel = {};
      var cancelReq = new kony.ui.RichText(rtBasicCancel, rtLayoutCancel, rtPspCancel);
      
      var rtBasicAccept = { id:"", text: "<u>Accept<br>Request</u>", skin: "rtRequestsActionSkin", centerX: "50%", isVisible: true };
      var rtLayoutAccept = { containerWeight:100, padding:[0,0,0,0], margin:[0,0,0,0] };
      var rtPspAccept = {renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};
      var acceptReq = new kony.ui.RichText(rtBasicAccept, rtLayoutAccept, rtPspAccept);
      
      var rtBasicContact = { id:"", text: "<u>Contact</u>", skin: "rtRequestsActionSkin", centerX: "50%", isVisible: true };
      var rtLayoutContact = { containerWeight:100, padding:[0,0,0,0], margin:[0,0,0,0] };
      var rtPspContact = {renderAsAnchor:true, wrapping:constants.WIDGET_TEXT_WORD_WRAP};
      var contactReq = new kony.ui.RichText(rtBasicContact, rtLayoutContact, rtPspContact);
      
      
      var acceptedRequestCancel = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "width": "33%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "onClick": cancelRequest
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestCancel.add(cancelReq);
      
      var acceptedRequestAccept = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "width": "34%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "onClick": acceptRequest
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestAccept.add(acceptReq);
      
      var acceptedRequestContact = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "width": "33%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "onClick": contactRequest
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestContact.add(contactReq);
      
      var acceptedRequestBottom = new kony.ui.FlexContainer({
        "id": "",
        "top": "20dp",
        "left": "0dp",
        "width": "100%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestBottom.add(acceptedRequestCancel);
      acceptedRequestBottom.add(acceptedRequestAccept);
      acceptedRequestBottom.add(acceptedRequestContact);

      /***** PARENT ELEMENTS *****/
      var acceptedRequestParent = new kony.ui.FlexContainer({
        "id": "",
        "top": "0dp",
        "left": "0dp",
        "bottom": "15dp",
        "width": "100%",
        "height": "150dp",
        "skin": "acceptedRequestParentSkin",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "layoutType": kony.flex.FLOW_VERTICAL
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      acceptedRequestParent.setDefaultUnit(kony.flex.DP);
      acceptedRequestParent.add(acceptedRequestTop);
      acceptedRequestParent.add(acceptedRequestBottom);

      mainPage.myAcceptedRequests.add(acceptedRequestParent);
      
    }
  } 
}
