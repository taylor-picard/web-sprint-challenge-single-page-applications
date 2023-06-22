import React, {useState} from "react";


function Form(props) {
    const {change, submit, errors, values} = props;

    const [isChecked, setIsChecked] = useState(false);

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
                    checked={isChecked}
                    onChange={onChange}
                />
            </label>
            <label>
                Toppings:
                <label>
                    Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        onChange={onChange}
                    />
                </label>
                <label>
                    Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                        onChange={onChange}
                    />
                </label>
                <label>
                    Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        onChange={onChange}
                    />
                </label>
                <label>
                    Jalapenos
                    <input
                        type="checkbox"
                        name="jalapenos"
                        onChange={onChange}
                    />
                </label>
            </label>
            <br/>
            <label>
                Special Instructions:
                <input
                    id="special-text"
                    type="text"
                    name="specialInstructions"
                    onChange={onChange}
                />
            </label>
            <br/>
            <button
                id="order-button"
            >
                Add to Order
            </button>
        </form>
    )
}

export default Form;