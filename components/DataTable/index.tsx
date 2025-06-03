'use client';
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { Table, TableRow, TableCell, TableHead, TableBody, Button } from "@mui/material";
import { StyledDataTable } from "./index.styles";

export default function DataTable (){
    const list = useSelector((state: RootState) => state.stepperForm.list);
    const router = useRouter();

    const handleBack = () => {
        router.push("/");
    }

    return (
        <StyledDataTable>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Company UEN</TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Position In Company</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.length > 0 && list.map((l: any, index: number) => <TableRow key={l.uen}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{l.uen}</TableCell>
                        <TableCell>{l.name}</TableCell>
                        <TableCell>{l.fullName}</TableCell>
                        <TableCell>{l.position}</TableCell>
                        <TableCell>{l.email}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            <Button onClick={handleBack} variant="contained">Back</Button>
        </StyledDataTable>
    )
}