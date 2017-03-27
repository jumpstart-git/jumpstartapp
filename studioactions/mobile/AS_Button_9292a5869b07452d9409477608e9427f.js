function AS_Button_9292a5869b07452d9409477608e9427f(eventobject) {
    //var gblSkillsName=mainPage.BusinessEndorsementModalContainer.SkillsListBoxContainer.VolunteerSkillsListbox.selectedKeyValue;
    var skillsFromListBox = kony.store.getItem("skillsOfSelectedVolunteers");
    var skillsFromTextBox = mainPage.BusinessEndorsementModalContainer.SkillsTextBoxContainer.AnotherSkillInputField.text;
    var msg = mainPage.BusinessEndorsementModalContainer.MessageContaioner.EndorsingMessageTextArea.text;
    if (((skillsFromListBox == "Select") || (skillsFromListBox == "") || (skillsFromListBox == " ") || (skillsFromListBox == "null") || (skillsFromListBox == null)) && ((skillsFromTextBox == null) || (skillsFromTextBox == "null") || (skillsFromTextBox == ""))) {
        alert("Please enter at least one skill to endorse");
        return false;
    }
    // if(msg==null||msg=="null"||msg=="")
    //   {  
    //        alert("Please enter message for endorsement");
    //     return false;
    //   }
    if ((skillsFromTextBox != null) && (skillsFromTextBox != "null") && (skillsFromTextBox != "")) {
        kony.store.setItem("skillsOfSelectedVolunteers", skillsFromTextBox);
    }
    createEndorsements();
}