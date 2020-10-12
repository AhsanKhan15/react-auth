import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

class Auth extends PureComponent {
    state = {
        name:'',
        email: '',
        password: '',
        confirmpassword:'',
        isRegister: false
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

isRegister=(reg)=>{
    this.setState({
        isRegister:reg
    })
}

    login = () => {

    }
    register = () => {
        localStorage.setItem('auth','123321')
    }
    render() {
        let auth = JSON.parse(localStorage.getItem('auth'))

        return (
            <div>
                {auth ? <Redirect to='home'/>:null}
                {!this.state.isRegister ?
                    (<Login login={this.login} isRegister={this.isRegister}/>) : (<Register register={this.register} isRegister={this.isRegister}/>)
                }


            </div>
        )
    }

}
export default Auth;