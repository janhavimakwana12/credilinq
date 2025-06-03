"use client";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CancelIcon from "@mui/icons-material/Cancel";
import { UploadDocuments } from "./index.styles";
import { saveFormData } from "@/store/stepperFormSlice";

interface Props {
  onNext: () => void;
  onBack: () => void;
  isDisabled: boolean;
  resetStep: () => void;
}

const MAX_FILES = 6;

export default function UploadDocumentsStep(props: Props) {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    if(selectedFiles.length > 6){
      setError("Only 6 files are allowed!");
      return;
    }
    const duplicate = selectedFiles.find((file) => files.some((f) => f.name === file.name));
    if (duplicate) {
      setError(`File "${duplicate.name}" is already added.`);
      return;
    }
    addFiles(selectedFiles);
    setError(null);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const addFiles = (newFiles: File[]): void => {
    const pdfFiles = newFiles.filter((file) => file.type === "application/pdf");
    const combined = [...files, ...pdfFiles].slice(0, MAX_FILES);
    setFiles(combined);
    dispatch(saveFormData({docs: combined}));
    if (combined.length === 6) {
      props.onNext();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (): void => {
    setDragging(false);
  };

  const removeAllFiles = (): void => {
    setFiles([]);
    props.resetStep();
  };

  const removeLastFile = (): void => {
    if (files.length > 0) {
      const updated = files.slice(0, -1);
      setError(null);
      setFiles(updated);
    }
  };

  return (
    <UploadDocuments isDisabled={props.isDisabled || files.length === 6} dragging>
      <Grid className="uploadGrid" container spacing={2}>
        <Grid size={6}>
          <div
            className="uploadContainer"
          >
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="application/pdf"
              onChange={handleFileChange}
              disabled={props.isDisabled}
            />
             {props.isDisabled && (
              <div
                className="overlay"
              />
            )}
            <Paper
              onClick={handleClick}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className="dropableArea"
            >
              {!dragging && <span className="uploadFileIcon"><UploadFileIcon /></span>}
              <Typography>
                {dragging ? (
                  "Drop the files here..."
                ) : (
                  <>
                    <u>Click to upload</u> or drag and drop Bank Statements
                  </>
                )}
              </Typography>
            </Paper>
          </div>
          <div className="error">{error}</div>
        </Grid>
        <Grid size={6}>
          <div className="pdfRequirement">
            <CheckIcon />
            PDFs (not scanned copies) of company's operating bank current
            account(s) statements for the past 6 months.
            <br />
            Example: If today is 20 May 25, then please upload bank statements
            from Nov 24 to Apr 25 (both months inclusive)
          </div>
          <div className="pdfRequirement">
            <CheckIcon />
            If your company is multi-banked, then please upload 6 months bank
            statements for each bank account
          </div>
          <div className="pdfRequirement">
            <CheckIcon />
            If your file is password protected, we request you to remove the
            password and upload the file to avoid submission failure
          </div>
          <div className="pdfRequirement">
            <CheckIcon />
            In case if you are facing any issue while uploading bank statements,
            Please contact us on support@credilinq.ai
          </div>
        </Grid>
      </Grid>
      <div className="listFiles">
        <Grid container spacing={2}>
          {files.length > 0 &&
            files.map((file, index) => {
              return (
                <Grid className="fileDiv" size={4} key={index}>
                  <span>{file.name}</span>
                  {index === files.length && <CancelIcon />}
                </Grid>
              );
            })}
        </Grid>
        <Button className="removeAllBtn" onClick={removeAllFiles}>
          Remove all
        </Button>
      </div>
    </UploadDocuments>
  );
}
