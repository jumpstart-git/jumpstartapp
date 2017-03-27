function mainPage_contactRequest_action_onClick(eventobject, linktext, attributes, context) {
    return AS_RichText_d139311450264a85ba1ca9faefef3f8a(eventobject, linktext, attributes, context);
}

function AS_RichText_d139311450264a85ba1ca9faefef3f8a(eventobject, linktext, attributes, context) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        contactVolunteer();
    } else {
        contactVolunteerFromAcceptTaskDetailsPage();
    }
}