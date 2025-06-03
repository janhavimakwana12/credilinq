import styled from "@emotion/styled";
import { FormControl, Grid } from "@mui/material";

export const ApplicantInfoDiv = styled(Grid)(({}) => ({
    "& .textReport":{
        fontSize: "12px",
        marginTop: "4px"
    }
}));

export const PhoneInputFormControl = styled(FormControl)(({}) => ({
    width: "100%"
}));