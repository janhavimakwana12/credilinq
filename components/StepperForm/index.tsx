"use client";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stepper, Step, StepLabel, StepContent, Button } from "@mui/material";
import CompanyInfoStep from "./CompanyInfoStep";
import ApplicantInfoStep from "./ApplicantInfoStep";
import UploadDocumentsStep from "./UploadDocumentsStep";
import TermsAndConditionsStep from "./TermsAndConditionsStep";
import { steps } from "@/lib/constants";
import { StepperFormDiv } from "./index.styles";
import {nextStep, prevStep, submitForm} from "@/store/stepperFormSlice";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";

export default function StepperForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const activeStep = useSelector((state: RootState) => state.stepperForm.step);

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    prevStep();
  };

  const resetStep = React.useCallback((step:number) => {
    resetStep(step);
  },[activeStep]);

  const renderStep = (index: number) => {
    switch (index) {
      case 0:
        return <CompanyInfoStep onNext={handleNext} resetStep={() => resetStep(0)} />;
      case 1:
        return <ApplicantInfoStep onNext={handleNext} resetStep={() => resetStep(1)} onBack={handleBack} isDisabled={activeStep < index} />;
      case 2:
        return <UploadDocumentsStep onNext={handleNext} resetStep={() => resetStep(2)} onBack={handleBack} isDisabled={activeStep < index} />;
      case 3:
        return (
          <TermsAndConditionsStep onBack={handleBack} resetStep={() => resetStep(3)} onNext={handleNext} isDisabled={activeStep < index} />
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    dispatch(submitForm());
    router.push("/list");
  };

  return (
    <StepperFormDiv>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label: string, index: number) => (
          <Step expanded className="stepDiv">
            <StepLabel className="stepLabelDiv">{label}</StepLabel>
            <StepContent className="stepContentDiv">{renderStep(index)}</StepContent>
          </Step>
        ))}
      </Stepper>
      <Button onClick={handleSubmit} disabled={activeStep !== 3} variant="contained" className="submitBtn">Submit</Button>
    </StepperFormDiv>
  );
}
