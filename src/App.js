import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import * as yup from 'yup';
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

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Form />}/>
        {/* <Route path="confirmation" element={<Confirm />}/> */}
      </Routes>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id="order-pizza">Order Pizza</Link>
      </nav>
      <Form values={formValues} change={handleChange} errors={formErrs}/>
    </div>
  );
};
export default App;
