function AS_Form_6d75ab4f077e46fa89248dace203f617(eventobject) {
    if (kony.store.getItem("isBusOrVol") === "business") {
        ReportingPage.ReportingContainer.ReportingActionsContainer.IndigenousBusinessContainer.BusinessIndicator.isVisible = true;
    } else if (kony.store.getItem("isBusOrVol") === "volunteer") {
        ReportingPage.ReportingContainer.ReportingActionsContainer.corporateFlexContainer.corporateIndicatorFlex.isVisible = true;
    } else {
        ReportingPage.ReportingContainer.ReportingActionsContainer.supplyNationContainer.supplyNationIndicator.isVisible = true;
    }
}