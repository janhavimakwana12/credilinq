import styled from "@emotion/styled";

export const StepperFormDiv = styled("div")(({}) => ({
    "& .stepDiv":{
        "& .stepContentDiv":{
            paddingTop: "24px"
        },
        "& .stepLabelDiv":{
            '& .MuiStepLabel-label':{
                background: "#64056b",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "18px"
            },
            '& .MuiStepIcon-root.Mui-active': {
                color: 'rgb(236, 0, 85) !important', // changes icon color
            },
            '& .MuiStepIcon-root.Mui-completed': {
                color: 'rgb(46, 125, 50) !important', // changes icon color
            },
        }
    },
    "& .submitBtn":{
        display: "block",
        marginRight: "0px",
        marginLeft: "auto"
    }
}));