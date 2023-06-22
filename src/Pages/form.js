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
            <label>
                Size:
                <input
                    id="size-dropdown"
                    type="dropdown"
                />
            </label>
            <label>
                Toppings:
                <label>
                    Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                    />
                </label>
                <label>
                    Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                    />
                </label>
                <label>
                    Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                    />
                </label>
                <label>
                    Jalapenos
                    <input
                        type="checkbox"
                        name="jalapenos"
                    />
                </label>
            </label>
        </form>
    )
}

export default Form;