import styled from "styled-components"
import { Form } from "formik"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    h1 {
        font-size: 2rem;
        margin: 0;
        color: #F2E7D5;
    }
    &.jobType {
        gap: 0.5rem;
    }
`

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 500px;
    // width: 100%;
    // max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #F7F7F7;
`

export const StyledLabel = styled.label`
    font-size: 1.2rem;
    color: #6D9886;
    margin-bottom: 0.5rem;
    font-weight: 600;
    &.checkbox-input {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
    }
    &.select {
        margin-top: 1rem;
    }
`

export const StyledInput = styled.input`
    width: 60%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #6D9886;
    font-size: 1.2rem;
    color: #6D9886;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
        border: 1px solid #F2E7D5;
        background-color: #F2E7D5;
    }
`

export const StyledButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #6D9886;
    font-size: 1.2rem;
    color: #F7F7F7;
    margin-bottom: 1rem;
    background-color: #6D9886;
    &:hover {
        cursor: pointer;
        background-color: #F2E7D5;
        color: #6D9886;
    }
    &:focus {
        outline: none;
    }
`

export const StyledSelect = styled.select`
    width: 60%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #6D9886;
    font-size: 1.2rem;
    color: #6D9886;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
        border: 1px solid #F2E7D5;
        background-color: #F2E7D5;
    }
`