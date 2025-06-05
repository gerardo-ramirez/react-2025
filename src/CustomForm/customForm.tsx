import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm, type SubmitHandler } from "react-hook-form";
import InputForm from "./Components/CustomInput";
import { schema, type FormValues } from "./Models/form.schema.model";

const CustomForm = ()=> {
const{control, handleSubmit, formState:{errors}} = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode:'onBlur',
    defaultValues:{
        name:"test",
        email:"test@email.com",
        password:"123",
        confirmPassword:"123"
    }
}); 
const onSubmit: SubmitHandler<FormValues>= (data)=>{
    console.log(data)
};
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm name="name" control={control} label="name" type="text"  error={errors.name}/>
          <InputForm name="email" control={control} label="Email" type="email"  error={errors.email}/>
          <InputForm name="password" control={control} label="Password" type="pass"  error={errors.password}/>
          <InputForm name="confirmPassword" control={control} label="confirm Password" type="pass"  error={errors.confirmPassword}/>
        <button type="submit">Submit</button>
        </form>
    )
};

export default CustomForm