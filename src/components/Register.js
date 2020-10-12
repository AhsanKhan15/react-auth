import React, { PureComponent } from 'react';

class Register extends PureComponent {

    render() {
        return (
            <div>
                <input type='text' placeholder='name' name='name' onChange={(e) => { this.onChange(e) }} /><br /><br />
                <input type='text' placeholder='email' name='email' onChange={(e) => { this.onChange(e) }} /><br /><br />
                <input type='password' placeholder='password' name='password' onChange={(e) => { this.onChange(e) }} /><br /><br />
                <input type='password' placeholder='confirm password' name='confirmpassword' onChange={(e) => { this.onChange(e) }} /><br /><br />
                <button onClick={() => { this.props.register() }}>Register</button>
                <button  onClick={() => {this.props.isRegister(false)}}>go to login</button>


            </div>
        )
    }

}
export default Register;