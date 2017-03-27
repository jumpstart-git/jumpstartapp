function AS_Segment_a10b49ad5346483ab77628da44d5d83f(eventobject, sectionNumber, rowNumber) {
    var selItem = searchPage.segPredictive.selectedRowItems;
    //alert(JSON.stringify(selItem));
    searchPage.searchTxtbox.text = selItem[0].lblSuggestions;
    searchPage.segPredictive.removeAll();
}