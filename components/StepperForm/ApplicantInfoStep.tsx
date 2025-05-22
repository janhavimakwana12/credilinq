import { TextField, Grid } from "@mui/material";

export default function ApplicantInfoStep(){
    return <Grid container spacing={2}>
            <Grid size={6}>
                <TextField
                    label="Full Name"
                />
            </Grid>
            <Grid size={6}>
                <TextField
                    label="Position within company"
                />
            </Grid>
            <Grid size={6}>
                <TextField
                    label="Email Address"
                />
            </Grid>
            <Grid size={6}>
                <TextField
                    label="Re-enter Email Address"
                />
            </Grid>
            <Grid size={6}>
                <TextField
                    label="Mobile Number"
                />
            </Grid>
    </Grid>
}