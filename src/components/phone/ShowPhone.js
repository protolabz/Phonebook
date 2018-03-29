import React from 'react';
import Autocomplete from 'react-autocomplete';
class ShowPhonePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            search:'',
            emptyKeyword:'',
            data:[],
            ListItem:[]
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onSort = this.onSort.bind(this);
        this.searchFunction=this.searchFunction.bind(this);
    }
    searchFunction(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].firstName === nameKey) {
                return myArray;
            }
            if (myArray[i].lastName === nameKey) {
                return myArray;
            }
            if (myArray[i].DOB === nameKey) {
                return myArray;
            }
            if (myArray[i].PhoneNumber === nameKey) {
                return myArray;
            }
        }
    }
    componentWillMount(){
        let NewItem=this.state.ListItem;
        this.setState({data:this.props.data},()=>{
            this.state.data.forEach(function(item) {
                NewItem.push({label:item.firstName});
                NewItem.push({label:item.lastName});
                NewItem.push({label:item.DOB});
                NewItem.push({label:item.PhoneNumber});
            });
            this.setState({
                ListItem:NewItem
            })

        })

    }
    onSort(event, sortKey){
        /*
        assuming your data is something like
        [
          {accountname:'foo', negotiatedcontractvalue:'bar'},
          {accountname:'monkey', negotiatedcontractvalue:'spank'},
          {accountname:'chicken', negotiatedcontractvalue:'dance'},
        ]
        */
        const data = this.state.data;
        this.props.data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
        console.log(this.props.data);
        this.setState({data})
    }
    onSubmit(e){
        e.preventDefault();
        this.props.insertData(this.state);

    }
    render(){
        if(this.props.data.length ===0){
            return(
                <h1>No Phone records</h1>
            );
        } else{
            const PhoneItems = this.props.data.map((item,index) =>
                <tr key={index}><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.DOB}</td><td>{item.PhoneNumber}</td><td><button className="btn btn-primary editbtn" onClick={() =>this.props.editData(item,index)}><i className="fa fa-edit"></i></button><button className="btn btn-danger" onClick={() =>this.props.deleteData(index)}><i className="fa fa-trash"></i></button></td></tr>
            );
            return(
                <div className="row">
                    <div className="col-md-6 col-sm-offset-3" >
                        {/*<input type="text" name="search" onChange={this.onChange}/>*/}
                        {/*{this.state.search}*/}
                        <Autocomplete
                            inputProps={{ style: { width: '50%',height: '30px' ,float:'right', margin:'20px 0px'}, placeholder: 'Search Here...'}}
                            wrapperStyle={{ width:  '100%'   }}
                            items={this.state.ListItem}
                            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            getItemValue={item => item.label}
                            renderItem={(item, isHighlighted) =>
                                <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white',padding:'10px' }}>
                                    {this.state.search?item.label:null}
                                    {/*{console.log('it is working fine')}*/}
                                </div>
                            }
                            value={this.state.search}
                            onChange={(e) =>{
                                // let keyword=this.state.search;
                                if(e.target.value === ''){
                                    let  key=e.target.value;
                                    this.setState({
                                        search:e.target.value
                                    },()=>{
                                        let item = this.state.data.filter(function(value,index,array) {
                                            if(value.firstName==key){
                                                return value;
                                            }
                                            if(value.lastName==key){
                                                return value;
                                            }
                                            if(value.DOB==key){
                                                return value;
                                            }
                                            if(value.PhoneNumber==key){
                                                return value;
                                            }
                                        });
                                        this.props.updateData(item);
                                    });
                                } else{
                                    this.setState({
                                        search:e.target.value
                                    },()=>{
                                        let keyword=this.state.search;
                                        let item = this.state.data.filter(function(value,index,array) {
                                            if(value.firstName==keyword){
                                                return value;
                                            }
                                            if(value.lastName==keyword){
                                                return value;
                                            }
                                            if(value.DOB==keyword){
                                                return value;
                                            }
                                            if(value.PhoneNumber==keyword){
                                                return value;
                                            }
                                        });
                                        this.props.updateData(item);
                                    });
                                }

                            }
                            }
                            onSelect={(val) => {
                                {
                                    this.setState({
                                        search:val
                                    },()=>{
                                        let item = this.state.data.filter(function(value,index,array) {
                                            if(value.firstName===val){
                                                return value;
                                            }
                                            if(value.lastName===val){
                                                return value;
                                            }
                                            if(value.DOB===val){
                                                return value;
                                            }
                                            if(value.PhoneNumber===val){
                                                return value;
                                            }
                                        });
                                        this.props.updateData(item);
                                    })
                                }
                            }}
                        />
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th onClick={e => this.onSort(e, 'firstName')}>Firstname</th>
                                <th onClick={e => this.onSort(e, 'lastName')}>Lastname</th>
                                <th onClick={e => this.onSort(e, 'DOB')}>DOB</th>
                                <th onClick={e => this.onSort(e, 'PhoneNumber')}>Phone</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {PhoneItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

    }
}
export default ShowPhonePage;
