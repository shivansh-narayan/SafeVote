import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {abi} from './abi.js';
import Web3 from 'web3';
import Accounts from 'web3-eth-accounts';
class Vote extends Component{
    constructor(props){
        super(props);
        this.state = {
            aadhar: 0,
            candidate: 0,
        };
        this.handleAadhar = this.handleAadhar.bind(this);
        this.handleCand = this.handleCand.bind(this);
        this.vote = this.vote.bind(this);
        this.candidate = this.candidate.bind(this);
    }
    handleAadhar(event){
        this.setState({aadhar: event.target.value});
    }
    handleCand(event){
        this.setState({candidate: event.target.value});
    }
    candidate()
    {
        const web3 = new Web3(Web3.givenProvider);
        web3.eth.defaultAccount = web3.eth.accounts[0];
        const Contract = new web3.eth.Contract(abi,'0xfa641dcd8fbca93f8894dabda69e75ab426249d8');
        Contract.methods.candidatesCount().call().then((response)=>{
            console.log(response);
        });
        Contract.methods.candidates(0).call().then((response)=>{
            console.log(response.voteCount);
        });
        Contract.methods.candidates(1).call().then((response)=>{
            console.log(response.voteCount);
        });
        Contract.methods.candidates(2).call().then((response)=>{
            console.log(response.voteCount);
        });
    }
    async vote(){
        const web3 = new Web3(Web3.givenProvider);
        //console.log(Accounts._getEthereumCall);
        var accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];
        console.log(web3.eth.defaultAccount);
        const Contract = new web3.eth.Contract(abi,'0xfa641dcd8fbca93f8894dabda69e75ab426249d8');
        Contract.methods.vote(this.state.candidate,this.state.aadhar).send({from: web3.eth.defaultAccount}).then((response)=>{
            console.log(response);
        });
    }
    render(){
        const style = {
            marginLeft: 150,
        }
        const style1 = {
            marginLeft: 150,
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <h2 className="text-info text-center">Vote here!</h2>
                        <h4 className="display-1 text-center">Aadhar ID:</h4>
                        <input type="text" value={this.state.aadhar} onChange={this.handleAadhar} className="form-control"></input>
                        <br />
                        <br />
                        <h4 className="display-1 text-center">Candidate ID:</h4>
                        <input type="text" value={this.state.candidate} onChange={this.handleCand} className="form-control"></input>
                        <br />
                        <br />
                        <a onClick={this.vote} style={style} className="text-center btn btn-primary">Vote</a>
                        <br />
                        <br />
                        <Link to="/stats">
                            <a style={style1} className="btn btn-primary">Stats</a>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
            </div>
        );
    }
}

export default Vote;