//Mamata Recommendation
function getTempForRecSort(recResp) {
    var tempArray = [];
    //From the recResponse we fill filter json array .Beacause for sort we need data in array.
    //tempArray  is the array [json array]
    for (var i = 0; i < recResp.recommendationList.length; i++) {
        tempArray.push(recResp.recommendationList[i].RecommendationDTO);
    }
    tempArray.sort(custom_sort);
    //console.log(JSON.stringify(tempArray));
    //once we get sorted array we need to make the sorted recResponse in json format.Below steps are done for the same
    var sortedrecResp = {};
    sortedrecResp.recommendationList = [];
    for (var j = 0; j < tempArray.length; j++) {
        var testobj = {
            "RecommendationDTO": tempArray[j]
        };
        sortedrecResp.recommendationList.push(testobj);
    }
    //sortedrecResp is the final sorted json recResponse
    //alert(JSON.stringify(sortedrecResp));
    gblBusRecrecResponse = sortedrecResp;
}
//console.log(JSON.stringify(tempArray));
function custom_sort(a, b) {
    return new Date(parseInt(a.updatedDate)).getTime() - new Date(parseInt(b.updatedDate)).getTime();
}