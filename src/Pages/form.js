

function Form() {
    return (
        <form id='pizza-form'>
            <h1>Build Your Pizza!</h1>
            <label>
                Name:
                <input
                id="name-input"
                type="text"
                name="name"
                onChange={onChange}
                />
            </label>
            
        </form>
    )
}

export default Form;