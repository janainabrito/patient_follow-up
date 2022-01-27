import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel, Container } from '@material-ui/core';
import { IUser } from '../../types/user';
import { IError } from '../../types/error';
import '../../assets/css/components/inputs.css'
import '../../assets/css/components/button.css'

interface Props {
    submit: (data: IUser) => void
}

export function RegistrationForm({ submit }: Props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setactive] = useState(true);
    const [errors, setErrors] = useState<IError[]>([]);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        submit({ name, age, phone, active });
    }

    function validate(type: string) {
        return errors.filter(e => e.type === type && e.message.length > 0).length > 0
    }

    function getHelperText(type: string) {
        const errorsList = errors.filter(e => e.type === type);
        let message = "";
        if (errorsList.length > 0) {
            message = errorsList[0].message;
        }
        return message
    }

    function updateValidationList(error: IError) {
        setErrors(e => [
            ...e.filter(e => e.type !== error.type),
            error
        ]);
    }

    function validateAttribute(attribute: any, attrType: string) {
        let attrMessage = "";
        let attrValidation = { type: attrType, valid: true, message: attrMessage }

        if (!attribute) {
            switch (attrType) {
                case "name":
                    attrMessage = "Field name is required! Please fill it."
                    break;
                case "age":
                    attrMessage = "Field age is required! Please fill it."
                    break;
                case "phone":
                    attrMessage = "Field phone is required! Please fill it."
                    break;
                default:
                    attrMessage = "";
            }
            attrValidation = { type: attrType, valid: false, message: attrMessage }
        }

        updateValidationList(attrValidation);
        return attrValidation;
    }

    const stylesFn = () => ({
        input: {
            color: "blue"
        },
        focused: {
            background: "red"
        }
    });

    return (
        <form onSubmit={onSubmit} className='form'>
            <div className="container">
                <div className="input-container">
                    <TextField
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        onBlur={(event) => validateAttribute(name, "name")}
                        helperText={getHelperText("name")}
                        error={validate("name")}
                        id="name"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        onBlur={(event) => validateAttribute(age, "age")}
                        helperText={getHelperText("age")}
                        error={validate("age")}
                        id="age"
                        label="Age"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        onBlur={(event) => validateAttribute(phone, "phone")}
                        helperText={getHelperText("phone")}
                        error={validate("phone")}
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />

                    {/* <FormControlLabel
                        label="Is active"
                        control={<Switch
                            checked={active}
                            onChange={(event) => setactive(event.target.checked)}
                            name="active"
                            color="primary"
                        />}
                    /> */}

                    <Button className="button" type="submit" variant="contained" color="primary">
                        Register
                    </Button>
                </div>
            </div>

        </form>
    )
}