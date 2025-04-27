import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import './Login.css'

class Login extends React.Component{

    //The names in the state should exactly match the names in the input elements
    state = {
        email:'',
        pwd:''
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.isLogin(true);
    }
    

    render(){
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="email..."
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="pwd"
                            placeholder="password..."
                            required
                            value={this.state.pwd}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;