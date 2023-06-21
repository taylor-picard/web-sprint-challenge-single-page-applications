import React from "react";


function Form(props) {
    const {change, submit, errors, values} = props;
    

    const onChange = (e) => {
        const {name, value} = e.target;
        change(name, value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h1>Build Your Pizza!</h1>
            <p>{errors.name}</p>
            
            <label>
                Name:
                <input
                id="name-input"
                type="text"
                name="name"
                value={values.name}
                onChange={onChange}
                />
            </label>
            
        </form>
    )
}

export default Form;