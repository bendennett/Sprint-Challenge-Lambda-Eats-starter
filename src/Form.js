import React, { useState } from 'react'
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'

const PizzaForm = () => {

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        size: "",
        sauce: "",
        mushroom: false,
        pineapple: false,
        bacon: false,
        peppers: false,
        sausage: false,
        balsamic: false,
        special: ''
    });

    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        size: yup.number().required().positive().integer().min(1),
        sauce: yup.string().required(),
    })

    const submit = () => {
        schema.validate(formData).then(() => {
            axios.post("https://reqres.in/api/users", formData).then((res) => {
                console.log(res.data, 'This is your order.')
            })
        })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleToppings = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }
    const toggle = () => setDropDownOpen((prevState) => !prevState)

    return(
        <>
        <Card color='success'>
            <h2 style={{color: 'white', margin: '0 auto'}}>
                Build Your Own Pizza!
            </h2>
            <CardImg src={require('./Assets/Pizza.jpg')} />
        </Card>
<Form data-cy='submit' onSubmit={(e) => {
    e.preventDefault()
    submit()
}} style={{margin:'5%'}}>
<FormGroup>
    <legend>Name</legend>
    <input type='name' name='name' data-cy='name' value={formData.name} onChange={handleChange}
/></FormGroup>
<FormGroup>
    <Dropdown isOpen={dropDownOpen} toggle={toggle}>
        <DropdownToggle caret>
            {formData.size === 0 ? 'Pizza Size' : formData.size}
        </DropdownToggle>
        <DropdownMenu>
            <div onClick={() => {
                toggle();
                setFormData({...formData, size: 0})
            }}>Select</div>
            <div onClick={() => {
                toggle();
                setFormData({...formData, size: 12})
            }}>12 inch</div>
            <div onClick={() => {
                toggle();
                setFormData({...formData, size: 16})
            }}>16 inch</div>
            <div onClick={() => {
                toggle();
                setFormData({...formData, size: 24})
            }}>24 inch</div>
        </DropdownMenu>
    </Dropdown>
</FormGroup>
<FormGroup tag='fieldset'>
    <legend>Sauce</legend>
    <FormGroup check>
        <Label check>
            <Input type="radio" name='sauce' value='marinara' onChange={handleChange} />
            Marinara
        </Label>
    </FormGroup>
    <FormGroup check>
        <Label check>
            <Input type="radio" name='sauce' value='parmesan' onChange={handleChange} />
            Parmesan
        </Label>
    </FormGroup>
    <FormGroup check>
        <Label check>
            <Input type="radio" name='sauce' value='alfredo' onChange={handleChange} />
            Alfredo
        </Label>
    </FormGroup>
</FormGroup>
<legend>Toppings</legend>
<FormGroup check>
    <Label check>
        <Input type='checkbox' name='mushroom' data-cy='checkbox1' checked={formData.mushroom} onChange={handleToppings} />
        Mushroom
    </Label>
</FormGroup>

<FormGroup check>
    <Label check>
        <Input type='checkbox' name='pineapple' data-cy='checkbox2' checked={formData.pineapple} onChange={handleToppings} />
        Pineapple
    </Label>
</FormGroup>

<FormGroup check>
    <Label check>
        <Input type='checkbox' name='bacon' data-cy='checkbox3' checked={formData.bacon} onChange={handleToppings} />
        Bacon
    </Label>
</FormGroup>

<FormGroup check>
    <Label check>
        <Input type='checkbox' name='peppers' data-cy='checkbox4' checked={formData.peppers} onChange={handleToppings} />
        Peppers
    </Label>
</FormGroup>

<FormGroup check>
    <Label check>
        <Input type='checkbox' name='sausage' data-cy='checkbox5' checked={formData.sausage} onChange={handleToppings} />
        Sausage
    </Label>
</FormGroup>

<FormGroup check>
    <Label check>
        <Input type='checkbox' name='balsamic' data-cy='checkbox6' checked={formData.balsamic} onChange={handleToppings} />
        Balsamic Vinegar
    </Label>
</FormGroup>

<FormGroup>
    <legend>Special Instructions</legend>
    <Input type="textarea" name='special' value={formData.special} onChange={handleChange} />
</FormGroup>
<Button>
    Add to Order
</Button>
</Form>
        </>
    )
}



export default PizzaForm