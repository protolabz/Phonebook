import React from 'react';
import './login.css';
import User from './User'
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            error:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentWillMount(){
        this.setState({
            error:''
        })
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
       if(this.state.email===User.email && this.state.password===User.password){
           this.props.history.push('/dashboard');
       }else {
           this.setState({
               error:'please check username and password'
           })
       }
    }
    render(){
        return(
            <div className="container">
                <div className="card card-container">
                    <img alt="pns" id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="email" id="email" className="form-control" placeholder="Email address"   onChange={this.onChange} value={this.state.email} name="email" required />
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.onChange} value={this.state.password} name="password" required />
                         <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>
                    {this.state.error===''?'':<p className="error">{this.state.error}</p>}
                </div>
            </div>
        );
    }
}
export default LoginPage;
