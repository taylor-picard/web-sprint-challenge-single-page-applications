import React from "react";


function Form(props) {
    const {change, submit, errors, values, checked} = props;
    // const {name, isChecked} = props.values;


    const onChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
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
                <select
                    id="size-dropdown"
                    name="sizes"
                    type="dropdown"
                    onChange={onChange}
                >
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <label>
                Toppings:
                <label>
                    Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={checked.isChecked}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                        checked={checked.isChecked}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={checked.isChecked}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Jalapenos
                    <input
                        type="checkbox"
                        name="jalapenos"
                        checked={checked.isChecked}
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
                    value={values.specialInstructions}
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