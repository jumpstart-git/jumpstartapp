function AS_ListBox_1d4f72cf0af34cb79b523b99af66f5ad(eventobject) {
    var gblSkillName = mainPage.BusinessEndorsementModalContainer.SkillsListBoxContainer.VolunteerSkillsListbox.selectedKeyValue;
    var skill = gblSkillName[1];
    var value = gblSkillName[0];
    kony.store.setItem("skillsOfSelectedVolunteers", skill);
    //alert("Skill Name"+skill);
}