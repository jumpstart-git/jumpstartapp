function AS_Segment_9bdb3704db05419d913b9e86104e6dea(eventobject, sectionNumber, rowNumber) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        showBusinessOpenTaskDetails();
        saveVolForVolViewProfileOpenTasks();
        var busSegOpen = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        // alert("busSegOpen"+JSON.stringify(busSegOpen));
        var segmentTypeMyActivity = busSegOpen[0].segType;
        // alert(segmentTypeMyActivity);
        kony.store.setItem("segmentType", segmentTypeMyActivity);
    } else {
        mainPage.TaskDetailsContainer.totalHoursContainers.LogHoursButton.isVisible = true;
        saveBusIdForViewProfileOpenTask();
        showVolOpenTaskDetails();
        openVoltaskRowDetails = mainPage.mainPageBody.mainPageContentParent.myActivity.myOpenTasksParent.myOpenTasksListContainer.myOpenTasksList.selectedRowItems;
        var segmentTypeMyActivityVol = openVoltaskRowDetails[0].segType;
        //alert(segmentTypeMyActivityVol);
        hoursComplete = openVoltaskRowDetails[0].hoursArray;
        gbltotalHours = openVoltaskRowDetails[0].totHours;
        gblOutBus = openVoltaskRowDetails[0].outHours;
        gblBusHours = openVoltaskRowDetails[0].busHours;
        startTimeOfTask = openVoltaskRowDetails[0].startDate;
        endTimeOfTask = openVoltaskRowDetails[0].endDate;
        //alert("busSegOpen"+JSON.stringify(openVoltaskRowDetails));
        // alert("row"+gblBusHours);
        kony.store.setItem("segmentType", segmentTypeMyActivityVol);
        //calllContactfromOpenTaskVolunteer();
    }
}