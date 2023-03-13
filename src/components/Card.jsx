import React from 'react'
import { FormContainer } from "../styles/StyledForm"

export const Card = ({pin, nickname}) => {
  return (
    <FormContainer>
        <h2>Información ingresada:</h2>
        <p>PIN: {pin}</p>
        <p>Nombre de usuario: {nickname}</p>
    </FormContainer>
  )
}
