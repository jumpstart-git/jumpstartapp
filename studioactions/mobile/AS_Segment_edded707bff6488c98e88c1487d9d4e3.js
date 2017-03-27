function AS_Segment_edded707bff6488c98e88c1487d9d4e3(eventobject, sectionNumber, rowNumber) {
    if (gblIsVol == true) {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        // searchPage.volunteerdataSegment.s
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        //alert("row clicked vol"+kony.store.getItem("selReqId"));
        //volunteerProfilePageService(selReqId);
        volunteerProfilePageService();
    } else {
        //alert("row is "+JSON.stringify(searchPage.volunteerdataSegment.selectedRowItems));
        var selReqId = searchPage.volunteerdataSegment.selectedRowItems[0].volunteerId;
        kony.store.setItem("selReqId", selReqId);
        IndigenousBusinessProfileService();
        //alert("row clicked business"+kony.store.getItem("selReqId"));
    }
}