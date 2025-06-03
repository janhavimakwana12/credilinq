import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialFormValues } from "@/lib/constants";

interface StepperFormState{
    step: number;
    formData: {
        uen: string;
        name: string;
        fullName: string;
        position: string;
        email: string;
        reEmail: string;
        phone: string;
        docs: File[];
        termsChecked: boolean;
    };
    list:any[];
}

const initialState: StepperFormState={
    step: 0,
    formData:initialFormValues,
    list:[]
}

const stepFormSlice = createSlice({
    name: 'stepperForm',
    initialState,
    reducers: {
        nextStep: (state) => {state.step += 1;},
        prevStep: (state) => {state.step -= 1;},
        resetStep: (state, action: PayloadAction<number>) =>{state.step = action.payload},
        saveFormData: (state, action: PayloadAction<{[key: string]: any}>) => {
            state.formData = {
            ...state.formData,
            ...action.payload
        }},
        submitForm: (state) => {
            state.list = [...state.list, {...state.formData}];
            state.formData = initialFormValues;
            state.step = 0;
        }
    }
})

export const {nextStep, prevStep, resetStep, saveFormData, submitForm} = stepFormSlice.actions;
export default stepFormSlice.reducer;