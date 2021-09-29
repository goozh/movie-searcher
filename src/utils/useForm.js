import { useState, useCallback } from "react";
import { EMAIL_REGEX, NAME_REGEX } from '../utils/constants';

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const validators = {
    "email": (inputString) => (EMAIL_REGEX.test(inputString)),
    "name": (inputString) => (
      !NAME_REGEX.test(inputString)
    )
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let validity = true;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    validity = validity && target.closest("form").checkValidity();

    if (name === 'email' && target.validationMessage === '') {
      setErrors({...errors, [name]: validators.email(value) ? '' : 'Введите валидный email адрес' });
      validity = validity && validators.email(value);
    }
    if (name === 'name' && target.validationMessage === '') {
      setErrors({...errors, [name]: validators.name(value) ? '' : 'Имя должно содержать только латиницу, кириллицу, пробел или дефис' });
      validity = validity && validators.name(value);
    }

    setIsValid(validity);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}