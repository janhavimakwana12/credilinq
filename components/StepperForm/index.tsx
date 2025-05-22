'use client';
import * as React from "react";
import { Stepper, Step, StepLabel, StepContent } from "@mui/material";
import CompanyInfoStep from "./CompanyInfoStep";
import ApplicantInfoStep from "./ApplicantInfoStep";
import UploadDocumentsStep from "./UploadDocumentsStep";
import TermsAndConditionsStep from "./TermsAndConditionsStep";

export default function StepperForm(){
    const [activeStep, setActiveStep] = React.useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return <Stepper activeStep={activeStep} orientation="vertical">
        <Step expanded>
            <StepLabel>Company Information</StepLabel>
            <StepContent>
                <CompanyInfoStep/>
            </StepContent>
        </Step>
        <Step expanded>
            <StepLabel>Applicant Information</StepLabel>
            <StepContent>
            <ApplicantInfoStep/>
            </StepContent>
        </Step>
        <Step expanded>
            <StepLabel>Upload Documents</StepLabel>
            <StepContent>
                <UploadDocumentsStep/>
            </StepContent>
        </Step>
        <Step expanded>
            <StepLabel>Terms & Conditions</StepLabel>
            <StepContent>
                <TermsAndConditionsStep/>
            </StepContent>
        </Step>
    </Stepper>
}