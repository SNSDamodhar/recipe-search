import React from 'react'

function Form(props) {
    return (
        <div>
            <form onSubmit = {props.getRecipe} style = {{ marginBottom : "2rem"}}>
                <input className = "form__input" type = "text" name = "recipeName"/>
                <button className = "form__button">Search</button>
            </form>
        </div>
    )
}

export default Form
