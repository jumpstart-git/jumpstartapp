//Type your code here
/*
var resp={
    "notificationList":[
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"3 days ago",
            "senderName":"Allen, Blaine",
            "notificationStatus":"1",
            "notificationTitle":"has cancelled the request",
            "notificationId":"1014",
            "notificationType":"1",
            "updatedDate":"1477552343000",
            "notificationContent":""
        }

    }
,
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"Allen, Blaine",
            "notificationStatus":"1",
            "notificationTitle":"has cancelled the request",
            "notificationId":"1020",
            "notificationType":"1",
            "updatedDate":"1477655188000",
            "notificationContent":""
        }

    }
,
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"lastname, firstname",
            "notificationStatus":"1",
            "notificationTitle":"has cancelled the request",
            "notificationId":"1021",
            "notificationType":"1",
            "updatedDate":"1477658010000",
            "notificationContent":""
        }

    }
,
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"Allen, Blaine",
            "notificationStatus":"1",
            "notificationTitle":"has accepted the request",
            "notificationId":"1022",
            "notificationType":"1",
            "updatedDate":"1477658143000",
            "notificationContent":""
        }

    }
,
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"lastname, firstname",
            "notificationStatus":"1",
            "notificationTitle":"has accepted the request",
            "notificationId":"1023",
            "notificationType":"1",
            "updatedDate":"1477658225000",
            "notificationContent":""
        }

    }
,
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"lastname, firstname",
            "notificationStatus":"1",
            "notificationTitle":"has requested to Volunteer",
            "notificationId":"1025",
            "notificationType":"1",
            "updatedDate":"1477659691000",
            "notificationContent":""
        }

    }
,
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"lastname, firstname",
            "notificationStatus":"1",
            "notificationTitle":"has accepted the request",
            "notificationId":"1026",
            "notificationType":"1",
            "updatedDate":"1477660159000",
            "notificationContent":""
        }

    }
,
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"Allen, Blaine",
            "notificationStatus":"1",
            "notificationTitle":"has accepted the request",
            "notificationId":"1027",
            "notificationType":"1",
            "updatedDate":"1477660167000",
            "notificationContent":""
        }

    }
,
{
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"43 minutes ago",
            "senderName":"Allen, Blaine",
            "notificationStatus":"1",
            "notificationTitle":"has cancelled the request",
            "notificationId":"1036",
            "notificationType":"1",
            "updatedDate":"1477894568000",
            "notificationContent":""
        }

    },
    {
        "NotificationDTO":
        {
            "notificationTypeId":"113",
            "messageTime":"2 days ago",
            "senderName":"lastname, firstname",
            "notificationStatus":"1",
            "notificationTitle":"has accepted the request",
            "notificationId":"1028",
            "notificationType":"1",
            "updatedDate":"1477660182000",
            "notificationContent":""
        }

    }

    
],"opstatus":0,"httpStatusCode":200
}


*/
function getTempForSort(resp) {
    var tempArray = [];
    //From the response we fill filter json array .Beacause for sort we need data in array.
    //tempArray  is the array [json array]
    for (var i = 0; i < resp.notificationList.length; i++) {
        tempArray.push(resp.notificationList[i].NotificationDTO);
    }
    tempArray.sort(custom_sort);
    //console.log(JSON.stringify(tempArray));
    //once we get sorted array we need to make the sorted response in json format.Below steps are done for the same
    var sortedresp = {};
    sortedresp.notificationList = [];
    for (var j = 0; j < tempArray.length; j++) {
        var testobj = {
            "NotificationDTO": tempArray[j]
        };
        sortedresp.notificationList.push(testobj);
    }
    //sortedresp is the final sorted json response
    //alert(JSON.stringify(sortedresp));
    gblBusNoteResponse = sortedresp;
}
//console.log(JSON.stringify(tempArray));
function custom_sort(a, b) {
    return new Date(parseInt(a.updatedDate)).getTime() - new Date(parseInt(b.updatedDate)).getTime();
}
///////////////////////////////////////////////////////////////////////////
//Mamta
function getTempForBusReqSort(reqresp) {
    var tempArrayReq = [];
    //From the response we fill filter json array .Beacause for sort we need data in array.
    //tempArray  is the array [json array]
    for (var i = 0; i < reqresp.requestList.length; i++) {
        tempArrayReq.push(reqresp.requestList[i].Request);
    }
    tempArrayReq.sort(custom_sort);
    //console.log(JSON.stringify(tempArrayReq));
    //once we get sorted array we need to make the sorted response in json format.Below steps are done for the same
    var sortedresp = {};
    sortedresp.requestList = [];
    for (var j = 0; j < tempArrayReq.length; j++) {
        var testobj = {
            "Request": tempArrayReq[j]
        };
        sortedresp.requestList.push(testobj);
    }
    //sortedresp is the final sorted json response
    //alert(JSON.stringify(sortedresp));
    gblReqBusinessResponse = sortedresp;
}
//console.log(JSON.stringify(tempArray));
function custom_sort(a, b) {
    return new Date(parseInt(a.updated_date)).getTime() - new Date(parseInt(b.updated_date)).getTime();
}
//////////////////////////////////////////////////////////////////////////////////////////
//Below code is for sorting unAssigned Opportunities
function getTempForUnAssignedOpportunitySort(oppresp) {
    var tempArrayOpp = [];
    //From the response we fill filter json array .Beacause for sort we need data in array.
    //tempArray  is the array [json array]
    for (var i = 0; i < oppresp.taskList.length; i++) {
        tempArrayOpp.push(oppresp.taskList[i].TasksDTO);
    }
    tempArrayOpp.sort(custom_sort);
    //console.log(JSON.stringify(tempArrayOpp));
    //once we get sorted array we need to make the sorted response in json format.Below steps are done for the same
    var sortedresp = {};
    sortedresp.taskList = [];
    for (var j = 0; j < tempArrayOpp.length; j++) {
        var testobj = {
            "Request": tempArrayOpp[j]
        };
        sortedresp.taskList.push(testobj);
    }
    //sortedresp is the final sorted json response
    //alert(JSON.stringify(sortedresp));
    gblTaskResponse = sortedresp;
}
//console.log(JSON.stringify(tempArray));
function custom_sort(a, b) {
    return new Date(parseInt(a.updated_date)).getTime() - new Date(parseInt(b.updated_date)).getTime();
}