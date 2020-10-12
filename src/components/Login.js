import React, { PureComponent } from 'react';

class Login extends PureComponent {

    render() {
        return (
            <div>
                <input type='text' placeholder='email' name='email' onChange={(e) => { this.onChange(e) }} /><br /><br />
                <input type='password' placeholder='password' name='password' onChange={(e) => { this.onChange(e) }} /><br /><br />
                <button onClick={() => { this.props.login()}}>Login</button>
                <button onClick={() => {this.props.isRegister(true)}}>go to Register</button>


            </div>
        )
    }

}
export default Login;