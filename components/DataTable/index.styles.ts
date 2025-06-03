import styled from "@emotion/styled";

export const StyledDataTable = styled("div")(({}) => ({
    display: "inline-flex",
    width: "100%",
    justifyContent: "space-between",
    "& table":{
        width: "80%"
    },
    "& button":{
        height: "40px"
    }
}));