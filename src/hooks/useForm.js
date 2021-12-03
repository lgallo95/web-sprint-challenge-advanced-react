// write your custom hook here to control your checkout form

import {useState, useEffect} from 'react';

const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const handleChanges = x => {
      setValues({
        ...values,
        [x.target.name]: x.target.value
      });
    };
  
    const handleSubmit = (x) => {
        x.preventDefault();
        setShowSuccessMessage(true);
      };
  
    return [values, showSuccessMessage, handleChanges, handleSubmit];
}

export default useForm;

