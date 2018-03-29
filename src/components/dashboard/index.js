import React from 'react';
import './dashboard.css';
import AddPhonePage from "../phone/AddPhone";
import ShowPhonePage from "../phone/ShowPhone";
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:0,
            modData:{},
            NewData:[],
            data:[],
            showForm:false,
        }
        this.AddForm=this.AddForm.bind(this);
    }
    AddForm(){
        this.setState({
           showForm:true
        });
     }
     componentDidMount(){
         this.setState({
             NewData:this.state.data
         });
     }
     insertData(data){

         this.state.data.push(data);
         this.setState({
             showForm:false
         });

     }
     editData(data,index){
         console.log(index);
         this.setState({
             modData:data,
             showForm:true,
             id:index,
         });
     }
     modifyData(data){
         console.log(data);
         let index =this.state.id;
         this.state.data[index].firstName=data.firstName;
         this.state.data[index].lastName=data.lastName;
         this.state.data[index].DOB=data.DOB;
         this.state.data[index].PhoneNumber=data.PhoneNumber;
         this.setState({
             modData:{},
             showForm:false,
         });
     }
     deleteData(index) {
         console.log(index);
         this.state.data.splice(index,1);
         console.log(this.state.data);
         this.setState({
             data:this.state.data
         });
     }
    updateData(item){
         console.log('working');
         if(item==''){
             console.log('item is empty');
             console.log(this.state.NewData);
             this.setState({
                 data:this.state.NewData
             });
         }else{
             this.setState({
                 data:item
             });
         }

    }
    hideForm(){
        this.setState({
            showForm:false
        });
    }
    LogOut(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container-fluid dashboard">
                <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h3>PhoneBook</h3>
                    </div>
                    <div className="col-sm-9">
                        <ul>
                            <li><button className="btn btn-success btnAdd add" onClick={this.AddForm}>Add New Phone</button></li>
                            <li><button className="btn btn-danger btnAdd logout" onClick={this.LogOut.bind(this)}>Log Out</button></li>
                        </ul>



                    </div>


                </div>
                <div className="row">

                </div>
                    {this.state.showForm ? <AddPhonePage insertData={this.insertData.bind(this)} modData={this.state.modData} modifyData={this.modifyData.bind(this)} hideForm={this.hideForm.bind(this)}/>:<ShowPhonePage  data={this.state.data} updateData={this.updateData.bind(this)} editData={this.editData.bind(this)} deleteData={this.deleteData.bind(this)}/>}
                </div>
            </div>
        );
    }
}
