import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component
{
    render(){
        const style={
            marginLeft: 100,
            marginRight: 100,
        } 
        return(
            <div style={style} className="body">
                <h2 className="text-primary text-center">Information</h2>
                <ul className="list-group">
                    <li className="text-center list-group-item">Item1</li>
                    <li className="text-center list-group-item">Item2</li>
                    <li className="text-center list-group-item">Item3</li>
                    <li className="text-center list-group-item">Item4</li>
                </ul>
                <br />
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-2">
                            <Link to="/register">
                                <a className="btn btn-primary">Register</a>
                            </Link>
                        </div>
                        <div className="text-center col-sm-3">
                            <Link to="/vote">
                                <a className="btn btn-primary">Vote</a>
                            </Link>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Home;