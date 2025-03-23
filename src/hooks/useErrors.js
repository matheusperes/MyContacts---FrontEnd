import { useState } from "react";

export function useErrors() {
  const [errors, setErrors] = useState([])

  function setError({field, message}) {

    const errorAlredyExists = errors.find((error) => error.field === field)

    if (errorAlredyExists) {
      return
    }

    setErrors((prevState) => [
      ...prevState,
      {field, message},
    ]);
  }

  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ))
  }

  function getErrorMessageByFieldName(fieldname) {
    return errors.find((error) => error.field === fieldname)?.message
  }

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors
  }

}
