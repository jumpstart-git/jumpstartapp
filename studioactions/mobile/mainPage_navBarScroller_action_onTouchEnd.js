function mainPage_navBarScroller_action_onTouchEnd(eventobject, x, y) {
    return AS_Label_aa89a83117354a428c60df29bee9a46c(eventobject, x, y);
}

function AS_Label_aa89a83117354a428c60df29bee9a46c(eventobject, x, y) {
    return navigateToPage.call(this, eventobject);
}