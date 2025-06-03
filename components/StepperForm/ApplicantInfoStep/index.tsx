import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { TextField, Grid, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { applicantSchema } from "@/lib/validation";
import { ApplicantInfoDiv } from "./index.styles";
import SingaporeOnlyPhoneInput from "@/components/SingaporePhoneInput";
import { saveFormData } from "@/store/stepperFormSlice";
import { PhoneInputFormControl } from "./index.styles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  isDisabled: boolean;
  resetStep: () => void;
}

export interface ApplicantFormInputs {
  fullName: string;
  position: string;
  email: string;
  reEmail: string;
  mobile: string;
}

export default function ApplicantInfoStep(props: Props) {
  const dispatch = useDispatch();

  const {
    register,
    setValue,
    control,
    formState: { isValid, errors, touchedFields },
  } = useForm<ApplicantFormInputs>({
    resolver: yupResolver(applicantSchema),
    mode: "onChange",
  });
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isValid) {
      props.onNext();
    } else {
      !props.isDisabled && touchedFields &&Object.values(touchedFields).length !== 0 && props.resetStep();
    }
  }, [isValid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setValue(e.target.name as keyof ApplicantFormInputs, e.target.value, {
        shouldValidate: true,
      });
      dispatch(saveFormData({[e.target.name]: e.target.value}));
    }, 500);
  };

  return (
    <ApplicantInfoDiv container spacing={2}>
      <Grid size={6}>
        <TextField
          {...register("fullName")}
          disabled={props.isDisabled}
          label="Full Name"
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid size={6}>
        <TextField
          {...register("position")}
          disabled={props.isDisabled}
          label="Position within company"
          error={!!errors.position}
          helperText={errors.position?.message}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid size={6} style={{display: "flex", flexFlow: "column"}}>
        <TextField
          {...register("email")}
          disabled={props.isDisabled}
          label="Email Address"
          error={!!errors.email}
          helperText={errors.email?.message}
          onChange={handleChange}
          fullWidth
        />
        <span className="textReport">The report will be delivered to this email address</span>
      </Grid>
      <Grid size={6}>
        <TextField
          {...register("reEmail")}
          disabled={props.isDisabled}
          label="Re-enter Email Address"
          error={!!errors.reEmail}
          helperText={errors.reEmail?.message}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid size={6}>
        <PhoneInputFormControl>
          <SingaporeOnlyPhoneInput control={control} error={errors.mobile}/>
          <FormHelperText className="helperText"> {errors.mobile?.message}</FormHelperText>
        </PhoneInputFormControl>
      </Grid>
    </ApplicantInfoDiv>
  );
}
