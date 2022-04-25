import { useCallback, useState } from "react";

export function useFormValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [isValidInput, setIsValidInput] = useState(false);
    

    const handleChange = (e) => {
        const input = e.target;
        const value = input.type === "checkbox"? input.checked : input.value;
        const name = input.name;

        // === "checkbox"? input.checked : input.value

        setValues(prevState =>({...prevState, [name]: value}));

        setErrors(prevState=>({...prevState, [name]: input.validationMessage}));
        setIsValid(e.target.closest("form").checkValidity());
        setIsValidInput(input.checkValidity())
    }
    const resetFrom = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
          setValues(newValues);
          setErrors(newErrors);
          setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
      );
    return {values, handleChange, setValues, errors, isValid, isValidInput, resetFrom}
}