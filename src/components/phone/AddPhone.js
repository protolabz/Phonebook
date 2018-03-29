import React from 'react';
import "./phone.css";
class AddPhonePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            DOB:'',
            PhoneNumber:'',
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentWillMount(){
        if(Object.keys(this.props.modData).length === 0){
        } else {
            this.setState({
                firstName:this.props.modData.firstName,
                lastName:this.props.modData.lastName,
                DOB:this.props.modData.DOB,
                PhoneNumber:this.props.modData.PhoneNumber
            })
        }
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    onSubmit(e){
        e.preventDefault();
        if(Object.keys(this.props.modData).length === 0){

                this.props.insertData(this.state);
        }
        else {
            this.props.modifyData(this.state);
            this.setState({
                firstName:'',
                lastName:'',
                DOB:'',
                PhoneNumber:'',
            });
        }

     }
    render(){
        if(Object.keys(this.props.modData).length === 0){
            return(
            <div className="container">
                    <h1>Add Contact</h1>
                <div className="col-sm-6 col-sm-offset-3">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:
                                <input type="text"
                                       value={this.state.firstName}
                                       onChange={this.onChange}
                                       name="firstName"
                                       className="form-control" id="firstName"/></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">last Name:
                                <input type="text" onChange={this.onChange} value={this.state.lastName} name="lastName" className="form-control" id="lastName"/></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="DOB">Date Of Birth:
                                <input   name="DOB" type="date" onChange={this.onChange} value={this.state.DOB} className="form-control" id="DOB"/></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="PhoneNumber">Phone Number:
                                <input   name="PhoneNumber" type="text" onChange={this.onChange} value={this.state.PhoneNumber} className="form-control" id="PhoneNumber"/></label>
                        </div>
                        <div className="checkbox">
                            <button type="submit" className="btn btn-default submit">Submit</button>
                            <button type="button" className="btn btn-danger" onClick={()=>{this.props.hideForm();}}>Cancel</button>
                        </div>

                    </form>
                </div>
                </div>
            );
        } else{
            return(
                <div className="container">
                    <div className="col-sm-6 col-sm-offset-3">
                    <h1>Edit Contact</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:
                                <input type="text"
                                       value={this.state.firstName}
                                       onChange={this.onChange}
                                       name="firstName"
                                       className="form-control" id="firstName"/></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">last Name:
                                <input type="text" onChange={this.onChange} value={this.state.lastName} name="lastName" className="form-control" id="lastName"/></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="DOB">Date Of Birth:
                                <input   name="DOB" type="date" onChange={this.onChange} value={this.state.DOB} className="form-control" id="DOB"/></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="PhoneNumber">Phone Number:
                                <input   name="PhoneNumber" type="text" onChange={this.onChange} value={this.state.PhoneNumber} className="form-control" id="PhoneNumber"/></label>
                        </div>
                        <div className="checkbox">
                            <button type="submit" className="btn btn-default submit">Submit</button>
                            <button type="button" className="btn btn-danger" onClick={()=>{this.props.hideForm();}}>Cancel</button>
                        </div>

                    </form>
                </div>
                </div>
            );
        }
    }
}
export default AddPhonePage;
