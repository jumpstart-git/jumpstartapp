function AS_Button_df13c25023874207a65c88b802d79b02(eventobject) {
    BusinessExistingOpenTaskService();
    //searchResultProfile.businessProfileContainer.isVisible=false;
    searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.isVisible = true;
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunityDetailsHdrModal.oppurtunitiesHeaderDetails1.opprtunitiesHeadingModal.opportunityBusinessName.text = kony.store.getItem("busNameNew");
    var availabilty = kony.store.getItem("scheduleValNew");
    var name = kony.store.getItem("busNameNew");
    //alert("name"+name);
    searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.availabilityContainer.availabiltyTxt.text = availabilty;
}