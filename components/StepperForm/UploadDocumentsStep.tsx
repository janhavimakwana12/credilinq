import { Grid } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function UploadDocumentsStep(){
    return <Grid container spacing={2}>
            <Grid size={6}>
                <span>Click to upload</span>
            </Grid>
            <Grid size={6}>
                <div>
                    <CheckIcon/>
                    PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months.
                    <br/>
                    Example: If today is 20 May 25, then please upload bank statements from Nov 24 to Apr 25 (both months inclusive)
                </div>
                <div>
                    <CheckIcon/>If your company is multi-banked, then please upload 6 months bank statements for each bank account
                </div>
                <div>
                    <CheckIcon/>If your file is password protected, we request you to remove the password and upload the file to avoid submission failure
                </div>
                <div>
                    <CheckIcon/>In case if you are facing any issue while uploading bank statements, Please contact us on support@credilinq.ai
                </div>
            </Grid>
    </Grid>
}