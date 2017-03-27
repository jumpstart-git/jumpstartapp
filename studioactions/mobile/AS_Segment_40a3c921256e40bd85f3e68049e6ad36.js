function AS_Segment_40a3c921256e40bd85f3e68049e6ad36(eventobject, sectionNumber, rowNumber) {
    if (gblIsVol == true) {
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        searchResultProfile.volunteerProfileContainer.requestAVolunteer.isVisible = true;
        volunteerProfilePageService();
    } else if (gblIsOpp == true) {
        //alert("inside isOpp");
        searchResultProfile.show();
        searchResultProfile.opprtunitiesReadOnlyContainer.isVisible = true;
        var busNameOpp = searchPage.volunteerdataSegment.selectedRowItems[0].CompanyNameLbl;
        kony.store.setItem("busName99", busNameOpp);
        var busIdNew = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("busIdNew", busIdNew);
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunityDetailsHdrModal.oppurtunitiesHeaderDetails1.opprtunitiesHeadingModal.opportunityBusinessName.text = kony.store.getItem("busName99");
        searchResultProfile.opprtunitiesReadOnlyContainer.oppurtunity1DetailsBodyModalContainer.oppurtunities1ListModal.isVisible = false;
        getNewTaskDetailsForVolSearch8();
        BusinessLoadExistingTaskForSearchScreen();
        // mainPage.BusinessRequestTaskDetailsModal.isVisible=true;
        // NewTaskDetailsForVolunteerOppSearch();
    } else {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        var busNameNew = searchPage.volunteerdataSegment.selectedRowItems[0].CompanyNameLbl;
        kony.store.setItem("busNameNew", busNameNew);
        searchResultProfile.businessProfileContainer.requestToVolunteerButton.isVisible = true;
        IndigenousBusinessProfileService();
    }
}