import styled from "@emotion/styled";

export const TermsAndConditionsStepDiv = styled("div")<{className: string}>(({className}) => ({
    color: className === "disabled" ? "#c4c4c4": "",
    "& .checkBox":{
         marginLeft: "-14px !important",
        marginBottom: "10px"
    },
    "& .terms":{
        display: "inline-flex",
        "& svg":{
        marginRight: "20px"
        },
        marginBottom: "12px",
        "& a":{
            textDecoration: "none",
            whiteSpace: "break-spaces"
        }
    }
}));