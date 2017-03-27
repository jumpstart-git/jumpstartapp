function login_signInButton_action_onTouchStart(eventobject, x, y) {
    return AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y);
}

function AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y) {
    return loginService.call(this);
}