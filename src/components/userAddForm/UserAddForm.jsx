import React from 'react';
import * as EmailValidator from 'email-validator';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            salary: '',
            photo: '',
            isGoldClient: false            
        };
    }

    updateName(e) {
        this.setState({name: e.target.value});
    }

    updateEmail(e) {
        const emailError = document.querySelector(".emailError");
        EmailValidator.validate(e.target.value) 
            ? emailError.style.display = "none"
            : emailError.style.display= "block"
        this.setState({ email: e.target.value })
    }

    updateSalary(e){
        this.setState({salary: e.target.value});
    }

    updateIsGoldClient(e) {
        this.setState({isGoldClient: e.target.checked});
    }

    render() {
        const {name, email, salary, photo, isGoldClient} = this.state;
        return (
            <form
                className="user-add-form ui form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, salary, photo, isGoldClient)}
            >
                <h2>Add users:</h2>
                <label htmlFor="name">Name:</label>
                <input
                    style={{ marginBottom: '20px' }}
                    type="text"
                    name="name"
                    required
                    onChange={(event) => this.updateName(event)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    style={{ marginBottom: '20px' }}
                    type="text"
                    name="email"
                    required
                    onChange={(event) => this.updateEmail(event)}
                />

                <p className="emailError" style={{display: 'none'}}>Email is not valid</p>

                <label htmlFor="salary">Salary:</label>
                <input
                    style={{ marginBottom: '20px' }}
                    type="number"
                    name="salary"
                    required
                    onChange={(event) => this.updateSalary(event)}
                />

                <div className="ui checkbox checkbox">
                    <input
                        style={{ marginBottom: '20px' }}
                        type="checkbox"
                        name="isGoldClient"
                        value="true"
                        onChange={(event) => this.updateIsGoldClient(event)}
                    />
                    <label htmlFor="is-gold-client">Gold client?</label>
                </div>             
                <input className="ui button" type="submit" value="Submit user" style={{backgroundColor: 'peachpuff'}}/>
            </form>
        );
    };
};

export default UserAddForm;