function AS_Form_ff88a823a12642bd9500657d6a2e0b06(eventobject) {
    var DivInfo = kony.os.deviceInfo();
    //    //alert(DivInfo.name); 
    if (DivInfo.name === "iPhone") {
        getPushNote();
    }
}