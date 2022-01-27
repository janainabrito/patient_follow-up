import { RegistrationForm } from './../../components/registrationForm';
import { Typography } from '@material-ui/core'
import 'fontsource-roboto'

export function UserRegistration() {
    function submit(data: any) {
        console.log('data:', data);
    }

    return (
        <>
            <div className="container">
                <h2 className="title-page">User Registration</h2>
            </div>
            <RegistrationForm submit={submit} />
        </>
    );
}