import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { TextField, Grid } from "@mui/material";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { companySchema } from "@/lib/validation";
import { saveFormData } from "@/store/stepperFormSlice";

interface Props{
    onNext: () => void;
    resetStep: () => void;
}

interface CompanyFormInputs {
    uen: string;
    name: string;
}

export default function CompanyInfoStep(props: Props){
    const dispatch = useDispatch();
    const {
        register,
        setValue,
        formState: { errors, isValid, touchedFields},
      } = useForm<CompanyFormInputs>({
        resolver: yupResolver(companySchema),
        mode: 'onChange',
      });

    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if(isValid){
        props.onNext();
      }else{
      !!touchedFields && Object.values(touchedFields).length !== 0 &&  props.resetStep();
      }
    },[isValid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setValue(e.target.name as keyof CompanyFormInputs, e.target.value, { shouldValidate: true });
        dispatch(saveFormData({[e.target.name]: e.target.value}));
      }, 500);
    };

    return <Grid container spacing={2}>
            <Grid size={6}>
                <TextField
                    placeholder="Enter your company UEN"
                    label="Company UEN"
                    {...register('uen')}
                    error={!!errors.uen}
                    helperText={errors.uen?.message}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid size={6}>
            <TextField
                    placeholder="Enter your company name"
                    label="Company Name"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    fullWidth
                    onChange={handleChange}
                />
            </Grid>
    </Grid>
}