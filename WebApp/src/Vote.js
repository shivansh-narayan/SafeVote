import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {abi} from './abi.js';
import Web3 from 'web3';

function Candidate()
{
    const web3 = new Web3(Web3.givenProvider);
    web3.eth.defaultAccount = web3.eth.accounts[0];
    const Contract = new web3.eth.Contract(abi,'0x086a079148ae6393df19385204c09e23d178de13');
    let ans = 3;
    Contract.methods.candidatesCount().call().then((response)=>{
        ans = response;
    });
    return(
        <div>
            <h4>Candidate Count</h4>
            <p>{ans}</p>
        </div>
    );
}

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
        const Contract = new web3.eth.Contract(abi,'0x086a079148ae6393df19385204c09e23d178de13');
        Contract.methods.candidatesCount().call().then((error,response)=>{
            console.log(response);
        });
    }
    async vote(){
        if(this.state.candidate < 3)
        {
            const web3 = new Web3(Web3.givenProvider);
            var accounts = await web3.eth.getAccounts();
            web3.eth.defaultAccount = accounts[0];
            //console.log(web3.eth.defaultAccount);
            const Contract = new web3.eth.Contract(abi,'0x086a079148ae6393df19385204c09e23d178de13');
            Contract.methods.vote(this.state.candidate,this.state.aadhar).send({from: web3.eth.defaultAccount}).then((response)=>{
                //console.log(response);
            }).catch(function(e){
                alert("Either The User has voted already or the user is not registered");
            });
        }
        else
        {
            alert("Invalid CandidateID");
        }
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
                <Candidate />
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