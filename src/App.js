import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import * as yup from 'yup';
import axios from "axios";
import Home from "./Pages/homepage";
import Form from "./Pages/form";
import formSchema from "./Validation/FormSchema";


const initialValues = {
  name: ''
}
const initialFormErrs = {
  name: ''
}


const App = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrs, setFormErrs] = useState(initialFormErrs);

  const sizeOpt = ['Small','Medium','Large']

  const [size, setSize] = useState('Select a size!')

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(()=> setFormErrs({...formErrs, [name]: ''}))
      .catch(err => setFormErrs({...formErrs, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = () => {
    axios.post(formValues)
      .then(res => {

      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Form 
          values={formValues} 
          change={handleChange} 
          errors={formErrs}
          submit={handleSubmit}/>}
        />
        {/* <Route path="confirmation" element={<Confirm />}/> */}
      </Routes>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id="order-pizza">Order Pizza</Link>
      </nav>
    </div>
  );
};
export default App;
