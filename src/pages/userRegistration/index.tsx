import { RegistrationForm } from './../../components/registrationForm';
import { Typography } from '@material-ui/core'
import 'fontsource-roboto'

export function UserRegistration() {
    function submit(data: any) {
        console.log('data+++', data);
    }

    return (
        <>
            <Typography component="h1" variant="h5" align="center">User Registration Form</Typography>
            <RegistrationForm submit={submit}/>
        </>
    );
}