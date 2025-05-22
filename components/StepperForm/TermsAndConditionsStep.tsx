import { Container, Checkbox } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function TermsAndConditionsStep(){
    return <Container>
          <div >
            <Checkbox/>
                By ticking, you are confirming that you have understood and are agreeing to the details mentioned:
            <div>
                <CheckIcon/>
                I confirm that I am the authorized person to upload bank statements on behalf of my company
            </div>
            <div>
                <CheckIcon/>
                I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated
            </div>
            <div>
                <CheckIcon/>
                I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth
            </div>
            <div>
                <CheckIcon/>
                I have read and understand the Terms & Conditions
            </div>
          </div>
    </Container>
}