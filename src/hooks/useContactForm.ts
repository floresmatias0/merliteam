import {useState} from 'react';

const useContactForm = () => {
  let initalValues = {
    email: '',
    subject: '',
    message: ''
  }

  const [values, setValues] = useState(initalValues);

  const handleChange = (e : any) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const resetForm = () => {
    setValues(initalValues)
  }

  return {values, handleChange, resetForm};
};

export default useContactForm;