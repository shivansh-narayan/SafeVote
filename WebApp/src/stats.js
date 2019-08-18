import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {abi} from './abi.js';
import Web3 from 'web3';

class Stats extends Component{
    constructor(props){
        super(props);
        this.state={
            cand1: 0,
            cand2: 0,
            cand3: 0,
        }
        this.handleCand = this.handleCand.bind(this);
    }
    handleCand()
    {
        const web3 = new Web3(Web3.givenProvider);
        web3.eth.defaultAccount = web3.eth.accounts[0];
        const Contract = new web3.eth.Contract(abi,'0x67dcd61e23cb2746dc4c41c2f6bf2a252d09a8f1');
        Contract.methods.candidates(0).call().then((response)=>{
            this.setState({cand1: response.voteCount});
        });
        Contract.methods.candidates(1).call().then((response)=>{
            this.setState({cand2: response.voteCount});
        });
        Contract.methods.candidates(2).call().then((response)=>{
            this.setState({cand3: response.voteCount});
        });
    }
    render()
    {
        this.handleCand();
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <h2 className="text-center">Stats</h2>
                        <h4 className="display-1 text-center">Candidate 1:</h4>
                        <p className="text-center">{this.state.cand1}</p>
                        <br />
                        <h4 className="display-1 text-center">Candidate 2:</h4>
                        <p className="text-center">{this.state.cand2}</p>
                        <br />
                        <h4 className="display-1 text-center">Candidate 3:</h4>
                        <p className="text-center">{this.state.cand3}</p>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default Stats;