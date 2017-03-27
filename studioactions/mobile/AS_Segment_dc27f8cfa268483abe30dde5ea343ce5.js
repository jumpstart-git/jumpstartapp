function AS_Segment_dc27f8cfa268483abe30dde5ea343ce5(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        showBusinessOpenTaskDetails();
        saveVolForVolViewProfileOpenTasks();
        var busSegOpen = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        var segmentTypeMyActivity = busSegOpen[0].segType;
        // alert(segmentTypeMyActivity);
        kony.store.setItem("segmentType", segmentTypeMyActivity);
    } else {
        saveBusIdForViewProfileOpenTask();
        showVolOpenTaskDetails();
        openVoltaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        var segmentTypeMyActivityVol = openVoltaskRowDetails[0].segType;
        //alert(segmentTypeMyActivityVol);
        kony.store.setItem("segmentType", segmentTypeMyActivityVol);
        //calllContactfromOpenTaskVolunteer();
    }
}