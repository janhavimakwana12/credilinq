import { configureStore } from "@reduxjs/toolkit";
import stepperFormReducer from "./stepperFormSlice";

export const store = configureStore({
    reducer: {
        stepperForm: stepperFormReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredPaths: ['stepperForm.formData.docs', 'stepperForm.list'],
            ignoredActions: ['stepperForm/saveFormData', 'stepperForm/submitForm']
        }
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
