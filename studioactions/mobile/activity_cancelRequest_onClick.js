function activity_cancelRequest_onClick(eventobject, linktext, attributes) {
    return AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes);
}

function AS_RichText_a8fe80bfbf2e418ca8cfeea30b981e7f(eventobject, linktext, attributes) {
    saveReqForCancel.call(this);
    saveCancelVolReqId.call(this);
}