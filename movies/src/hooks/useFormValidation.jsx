import { useState } from "react";

export function useFormValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [isValidInput, setIsValidInput] = useState(false);

    const handleChange = (e) => {
        const input = e.target;
        const value = input.value;
        const name = input.name;

        setValues(prevState =>({...prevState, [name]: value}));
        setErrors(prevState=>({...prevState, [name]: input.validationMessage}))
        setIsValid(input.closest('form').checkValidity());
        setIsValidInput(input.checkValidity())

    }
    return {values, handleChange, setValues, errors, isValid, isValidInput}
}

export function useForm() {
    const [values, setValues] = useState({});

    const handleChange = (e) => {
        const input = e.target;
        const value = input.value;
        const name = input.name;

        setValues(prevState =>({...prevState, [name]: value}));
    }
    return {values, handleChange, setValues}
}