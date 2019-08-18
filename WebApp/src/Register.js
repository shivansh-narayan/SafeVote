import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {abi} from './abi.js';
import Web3 from 'web3';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            aadhar: 0,
            name: '',
            email: '',
            no: 0,
        }
        this.handleName = this.handleName.bind(this);
        this.handleNo = this.handleNo.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAadhar = this.handleAadhar.bind(this);
        this.register = this.register.bind(this);
    }
    handleEmail(event){
        this.setState({email: event.target.value});
    }
    handleName(event){
        this.setState({name: event.target.value});
    }
    handleNo(event){
        this.setState({no: event.target.value});
    }
    handleAadhar(event){
        this.setState({aadhar: event.target.value});
    }
    async register(){
        const web3 = new Web3(Web3.givenProvider);
        //console.log(Accounts._getEthereumCall);
        var accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];
        console.log(web3.eth.defaultAccount);
        const Contract = new web3.eth.Contract(abi,'0x67dcd61e23cb2746dc4c41c2f6bf2a252d09a8f1');
        Contract.methods.register(this.state.aadhar,this.state.name,this.state.email,this.state.no).send({from: web3.eth.defaultAccount}).then((response)=>{
            console.log(response.status);
        });
    }
    render(){
        const style = {
            marginLeft: 150,
        }
        const style1 = {
            marginLeft: 160,
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <h2 className="text-info text-center">Register here!</h2>
                        <h4 className="display-1 text-center">Aadhar ID:</h4>
                        <input value={this.state.aadhar} onChange={this.handleAadhar} type="text" className="form-control"></input>
                        <br />
                        <h4 className="display-1 text-center">Name:</h4>
                        <input value={this.state.name} onChange={this.handleName} type="text" className="form-control"></input>
                        <br />
                        <h4 className="display-1 text-center">Email:</h4>
                        <input value={this.state.email} onChange={this.handleEmail} type="text" className="form-control"></input>
                        <br />
                        <h4 className="display-1 text-center">Mob. No.:</h4>
                        <input value={this.state.no} onChange={this.handleNo} type="text" className="form-control"></input>
                        <br />
                        <br />
                        <a onClick={this.register} style={style} className="text-center btn btn-primary">Register</a>
                        <br />
                        <br />
                        <Link to="/vote">
                            <a style={style1} className="btn btn-primary">Vote</a>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;