import { TextField, Grid } from "@mui/material";

export default function CompanyInfoStep(){
    return <Grid container spacing={2}>
            <Grid size={6}>
                <TextField
                    placeholder="Enter your company UEN"
                    label="Company UEN"
                />
            </Grid>
            <Grid size={6}>
            <TextField
                    placeholder="Enter your company name"
                    label="Company Name"
                />
            </Grid>
    </Grid>
}