//Type your code here
function navigateToPage(page) {
    kony.print(page.id);

    function moveLeft(pageId) {
        mainPage[pageId].animate(kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": function() {}
        });
    }

    function moveRight(pageId) {
        mainPage[pageId].animate(kony.ui.createAnimation({
            "100": {
                "left": "100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": function() {}
        });
    }
    switch (page.id) {
        case "navMyActivity":
            moveRight("myEvents");
            moveRight("myNews");
            moveRight("myMessages");
            moveRight("myNotifications");
            moveRight("myEndorsements");
            moveRight("myRecommendations");
            mainPage.myActivity.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            break;
        case "navEvents":
            moveLeft("myActivity");
            moveRight("myNews");
            moveRight("myMessages");
            moveRight("myNotifications");
            moveRight("myEndorsements");
            moveRight("myRecommendations");
            mainPage.myEvents.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            break;
        case "navNews":
            moveLeft("myActivity");
            moveLeft("myEvents");
            moveRight("myMessages");
            moveRight("myNotifications");
            moveRight("myEndorsements");
            moveRight("myRecommendations");
            mainPage.myNews.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            break;
        case "navMessages":
            moveLeft("myActivity");
            moveLeft("myEvents");
            moveLeft("myNews");
            moveRight("myNotifications");
            moveRight("myEndorsements");
            moveRight("myRecommendations");
            mainPage.myMessages.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            break;
        case "navNotifications":
            moveLeft("myActivity");
            moveLeft("myEvents");
            moveLeft("myNews");
            moveLeft("myMessages");
            moveRight("myEndorsements");
            moveRight("myRecommendations");
            mainPage.myNotifications.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            break;
        case "navEndorsements":
            moveLeft("myActivity");
            moveLeft("myEvents");
            moveLeft("myNews");
            moveLeft("myMessages");
            moveLeft("myNotifications");
            moveRight("myRecommendations");
            mainPage.myEndorsements.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            break;
        case "navRecommendations":
            moveLeft("myActivity");
            moveLeft("myEvents");
            moveLeft("myNews");
            moveLeft("myMessages");
            moveLeft("myNotifications");
            moveLeft("myEndorsements");
            mainPage.myRecommendations.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            break;
        default:
            moveLeft("myActivity");
            moveRight("myEvents");
            moveRight("myNews");
            moveRight("myMessages");
            moveRight("myNotifications");
            moveRight("myEndorsements");
            moveRight("myRecommendations");
            mainPage.myActivity.animate(kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
    }
}

function navigateToMainFromInfoPage() {
    mainPage.show();
    userInfoPage.destroy();
}

function navigateToMyProfile() {
    myProfile.show();
    hideSideBar();
}