//Type your code here

// Business details confirmation object
var busDetailsConfirmationObject = {
  businessName : "",
  businessNumber : "",
  businessAddress : "",
  noOfIndiOwners : "",
  percentOfIndiOwners : "",
  noOfEmployees : "",
  percOfIndiEmployment : "",
  sector : "",
  affiliations : "",
  businessReach : {
  	international : false,
  	australiaWide : false,
  	state : false, 
  },
  governmentExperience : {
  	local : false,
    state : false,
    commonwealth : false,
    international : false
  },
  private : {
  	multinational : false,
    sme : false
  },
  nonProfit : false,
  noPreviousExp : false
};


function onBusinessDetailsUpdate(fieldEdited) {
  var fieldId = fieldEdited.id;
  var fieldContent = fieldEdited.text;
  
  switch (fieldId) {
    case "bdcBusinessNameInput":
      busDetailsConfirmationObject.businessName = fieldContent;
      
      break;
    case "bdcNumbersInput":
      busDetailsConfirmationObject.businessNumber = fieldContent;
      
      break;
    case "bdcBusinessAddressInput":
      busDetailsConfirmationObject.businessAddress = fieldContent;
      
      break;
    case "bdcNoOfIndiOwnersInput":
      busDetailsConfirmationObject.noOfIndiOwners = fieldContent;
      
      break;
    case "bdcPercentOfIndiOwnershipInput":
      busDetailsConfirmationObject.percentOfIndiOwners = fieldContent;
      
      break;
    case "bdcNoOfEmployeesInput":
      busDetailsConfirmationObject.noOfEmployees = fieldContent;
      
      break;
    case "bdcPercentIndiEmploymentInput":
      busDetailsConfirmationObject.percOfIndiEmployment = fieldContent;
      
      break;
    case "bdcSectorInput":
      busDetailsConfirmationObject.sector = fieldContent;
      
      break;
    case "bdcAffiliationsInput":
      busDetailsConfirmationObject.affiliations = fieldContent;
      
      break;
    default:
      break;
  }
}

function onBusinessDetailsButtonToggle(buttonPressed) {
  var buttonId = buttonPressed.id;
  
  switch(buttonId) {
    case "reachInternationalButton":
      if (busDetailsConfirmationObject.businessReach.international) {
        busDetailsConfirmationObject.businessReach.international = false;
      } else {
        busDetailsConfirmationObject.businessReach.international = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.businessReach.international, buttonPressed);
      
      break;
    case "reachAustraliaButton":
      if (busDetailsConfirmationObject.businessReach.australiaWide) {
        busDetailsConfirmationObject.businessReach.australiaWide = false;
      } else {
        busDetailsConfirmationObject.businessReach.australiaWide = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.businessReach.australiaWide, buttonPressed);
      
      break;
    case "reachStateButton":
      if (busDetailsConfirmationObject.businessReach.state) {
        busDetailsConfirmationObject.businessReach.state = false;
      } else {
        busDetailsConfirmationObject.businessReach.state = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.businessReach.state, buttonPressed);
      
      break;
    case "bdcGovExpLocalButton":
      if (busDetailsConfirmationObject.governmentExperience.local) {
        busDetailsConfirmationObject.governmentExperience.local = false;
      } else {
        busDetailsConfirmationObject.governmentExperience.local = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.governmentExperience.local, buttonPressed);
      
      break;
    case "bdcGovExpStateButton":
      if (busDetailsConfirmationObject.governmentExperience.state) {
        busDetailsConfirmationObject.governmentExperience.state = false;
      } else {
        busDetailsConfirmationObject.governmentExperience.state = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.governmentExperience.state, buttonPressed);
      
      break;
    case "bdcGovExpCommonwealthButton":
      if (busDetailsConfirmationObject.governmentExperience.commonwealth) {
        busDetailsConfirmationObject.governmentExperience.commonwealth = false;
      } else {
        busDetailsConfirmationObject.governmentExperience.commonwealth = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.governmentExperience.commonwealth, buttonPressed);
      
      break;
    case "bdcGovExpInternationalButton":
      if (busDetailsConfirmationObject.governmentExperience.international) {
        busDetailsConfirmationObject.governmentExperience.international = false;
      } else {
        busDetailsConfirmationObject.governmentExperience.international = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.governmentExperience.international, buttonPressed);
      
      break;
    case "bdcPrivateMultinationalButton":
      if (busDetailsConfirmationObject.private.multinational) {
        busDetailsConfirmationObject.private.multinational = false;
      } else {
        busDetailsConfirmationObject.private.multinational = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.private.multinational, buttonPressed);
      
      break;
    case "bdcPrivateSMEButton":
      if (busDetailsConfirmationObject.private.sme) {
        busDetailsConfirmationObject.private.sme = false;
      } else {
        busDetailsConfirmationObject.private.sme = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.private.sme, buttonPressed);
      
      break;
    case "bdcNonProfitButton":
      if (busDetailsConfirmationObject.nonProfit) {
        busDetailsConfirmationObject.nonProfit = false;
      } else {
        busDetailsConfirmationObject.nonProfit = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.nonProfit, buttonPressed);
      
      break;
    case "bdcNoExpButton":
      if (busDetailsConfirmationObject.noPreviousExp) {
        busDetailsConfirmationObject.noPreviousExp = false;
      } else {
        busDetailsConfirmationObject.noPreviousExp = true;
      }
      updateButtonToggleSkin(busDetailsConfirmationObject.noPreviousExp, buttonPressed);
      
      break;
    default:
  
      break;
  }
}

// Function for updating front-end skin
function updateButtonToggleSkin(isSelected, buttonObject) {
  if (isSelected) {
    buttonObject.skin = "jumpStartGreenButton90";
  } else {
    buttonObject.skin = "jumpStartGrayButton90";
  }
}

function confirmBusinessDetails() {
  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - START: myString");
  kony.print(busDetailsConfirmationObject);
  kony.print("__________________________________________$$$$$$$$$$$$$$$$$$$$$$$$$$ DEBUG - END: myString");
  
  mainPage.show();
  businessDetailsConfirmationPage.destroy();
}