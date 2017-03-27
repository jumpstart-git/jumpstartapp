//Type your code here
function initMainPage() {
    // Do AJAX call here...
    if (loggedInUserObject.user === "volunteer") {
        mainPage.myOpenTasksList.setData(myOpenTasksData); // Set data for My Open Tasks.
        mainPage.myClosedTasksList.setData(myClosedTasksData); // Set data for My Closed Tasks.
        mainPage.acceptedRequestsSegment.setData(acceptedRequests);
        // generateMyAcceptedRequests(myAcceptedRequests); 			// Used segments instead.
    } else if (loggedInUserObject.user === "indigenousBusiness") {
        mainPage.navRecommendations.isVisible = true;
        mainPage.myOpenTasksList.setData(businessOpenTasksData); // Set data for My Open Tasks.
        mainPage.myClosedTasksList.setData(businessClosedTasksData); // Set data for My Closed Tasks.
        mainPage.acceptedRequestsSegment.setData(businessAcceptedRequests);
    }
}

function setGroupsToClose() {
    var transExpandCollapse = kony.ui.makeAffineTransform();
    transExpandCollapse.rotate(90);
    mainPage.myRegisteredWorkshopsExpandImage.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transExpandCollapse
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": function() {}
    });
    mainPage.myBookmarksExpandImage.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transExpandCollapse
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

function expandCollapseGroup(group, groupName) {
    var transExpandCollapse = kony.ui.makeAffineTransform();
    var container = groupName + 'ListContainer';
    var image = groupName + 'ExpandImage';
    if ((mainPage[container].isVisible === true)) {
        mainPage[container].isVisible = false;
        transExpandCollapse.rotate(90);
        mainPage[image].animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": transExpandCollapse
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": function() {}
        });
    } else {
        mainPage[container].isVisible = true;
        transExpandCollapse.rotate(0);
        mainPage[image].animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": transExpandCollapse
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