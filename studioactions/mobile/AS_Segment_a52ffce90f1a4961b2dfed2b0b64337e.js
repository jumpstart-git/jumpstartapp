function AS_Segment_a52ffce90f1a4961b2dfed2b0b64337e(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        saveVolForVolViewProfileCloseTask();
        showBusinessCloseTaskDetails();
        var rowData = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
        //alert("Close rowData"+JSON.stringify(rowData));
        var seg3 = rowData[0].segType;
        //alert(seg3);
        kony.store.setItem("segmentType", seg3);
    } else {
        mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible = false;
        saveBusIdForViewProfileCloseTask();
        showVolCloseTaskDetails();
        var rowData1 = mainPage.mainPageBody.mainPageContentParent.myActivity.myClosedTasksParent.myClosedTasksListContainer.myClosedTasksList.selectedRowItems;
        var seg4 = rowData1[0].segType;
        //alert(seg4);
        kony.store.setItem("segmentType", seg4);
    }
}