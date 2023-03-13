import React from 'react';
import { FormContainer, FormGroup, Input, Label, Bar, Highlight } from "../styles/StyledForm"
import { useFormik } from 'formik';
import * as Yup from "yup";


const inputs = [
    {id: 1, label: "pin", placeholder: "Ingrasa tu PIN", name: "pin", type: "password" },
    {id: 2, label: "nickname", placeholder: "Escribe tu nombre de usuario", name: "nickname", type: "text"}
]



export const Formulario = ({handleFetchInfo}) => {  
    const campoObligatorio = "Campo obligatorio"

    const mensajeError = "Por favor chequea que la información sea correcta"

    const getValorInicial = () => ({
        pin: "",
        nickname: "",
    })

    const validationSchema = () => (
        Yup.lazy(() =>
            Yup.object().shape({
                pin: Yup.string()
                .required(campoObligatorio)
                .min(4, mensajeError)
                .matches(/^(?!\s)[A-Za-z0-9]{3,}$/, mensajeError),
                
                nickname: Yup.string()
                .required(campoObligatorio)
                .min(6, mensajeError),
            })
        )
    );
    
    const onSubmit = (values) =>{
        handleFetchInfo(values);
    }
    

    const {values, setFieldValue, errors, handleSubmit} = useFormik({
        initialValues: getValorInicial(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit 
    })

  return (
    <FormContainer form="login">
        <form onSubmit={handleSubmit}>
            {inputs.map((fields) => (
            <FormGroup key={fields.id}>
                <Input
                type="text"
                name={fields.name}
                value={values[fields.name]}
                onChange={(e) => setFieldValue(fields.name, e.target.value)}
                />
                <Label>{fields.label}</Label>
                <Bar className="bar" />
                <Highlight className="highlight" />
                {errors[fields.name] && <p>{errors[fields.name]}</p>}
            </FormGroup>
            ))}
            <button type="submit">Enviar</button> 
        </form>         
    </FormContainer>
  )
}
