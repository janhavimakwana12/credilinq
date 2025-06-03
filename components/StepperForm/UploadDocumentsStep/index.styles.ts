import styled from "@emotion/styled";

export const UploadDocuments = styled("div")<{dragging: boolean, isDisabled: boolean}>(({dragging, isDisabled}) => ({
  "& .uploadGrid": {
    "& .error":{
      color: "#d32f2f",
      fontSize: "12px"
    },
    "& .uploadContainer":{
      display: "flex",
      flexFlow: "column",
      position: "relative",
      "& input":{
        display: "none"
      },
      "& .dropableArea":{
        padding: "40px 24px",
        border: "1px dashed #aaa",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        color: isDisabled ? '#BDBDBD' : '#000',
        cursor: isDisabled ? "not-allowed": "pointer",
        backgroundColor: dragging ? "#f0f0f0" : "white",
        textAlign: "center",
        boxShadow: "none",
        "& p":{
          textAlign: "left"
        },
        "& .uploadFileIcon":{
          marginBottom: "8px",
          background: "#dcdce6",
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }
    },
    "& .overlay":{
      position: 'absolute',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: 'rgba(200, 200, 200, 0.005)',
      zIndex: 2,
      borderRadius: '4px',
      cursor: 'not-allowed',
    }
  },
  "& .pdfRequirement":{
    display: "inline-flex",
    "& svg":{
      marginRight: "8px"
    },
    marginBottom: "12px"
  },
  "& .listFiles":{
    marginTop: "54px",
    width: "100%",
    display: "flex",
    flexFlow: "column",
    "& .fileDiv":{
        border: "1px solid green",
        borderRadius: "15px",
        padding: "4px 12px",
        "& *":{
            color:"green"
        }
    },
    "& .removeAllBtn":{
        marginRight: "auto",
        marginLeft: "0px",
        marginTop: "24px",
        color: "purple"
    }
  }
}));
