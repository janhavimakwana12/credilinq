import { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { TermsAndConditionsStepDiv } from "./index.styles";
import { saveFormData } from "@/store/stepperFormSlice";
import { useRouter } from "next/navigation";
import Link from 'next/link';

interface Props{
    onNext: () => void;
    onBack: () => void;
    isDisabled: boolean;
    resetStep: () => void;
}

export default function TermsAndConditionsStep(props: Props){
    const dispatch = useDispatch();
    const router = useRouter();
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setChecked(checked);
        dispatch(saveFormData({termsCheck: checked}));
    };

    return <TermsAndConditionsStepDiv className={props.isDisabled ? "disabled":""}>
            <div className="checkBox">
                <Checkbox checked={isChecked} disabled={props.isDisabled} onChange={handleCheckBox}/>
                By ticking, you are confirming that you have understood and are agreeing to the details mentioned:
            </div>
            <div className="terms">
                <CheckIcon/>
                I confirm that I am the authorized person to upload bank statements on behalf of my company
            </div>
            <div className="terms">
                <CheckIcon/>
                I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated
            </div>
            <div className="terms">
                <CheckIcon/>
                I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth
            </div>
            <div className="terms">
                <CheckIcon/>
                I have read and understand the  <Link target="_blank" href="terms-and-conditions"> Terms & Conditions</Link>
            </div>
    </TermsAndConditionsStepDiv>
}