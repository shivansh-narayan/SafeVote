pragma solidity >0.4.0 <0.6.0;


/*
    Return Codes
    1- Voter Not Registered
    2- Vote already casted
    3- Invalid Candidate Id
    4- Sab Badhiya
*/

contract SampleVoting {
    // cadidate info struct.
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // voters info struct
    struct Voter {
        uint aadhar;
        bool registered;
        bool voted;

        string name;
        string email;
        uint mobile_no;
    }

    // Store Candidates
    mapping(uint => Candidate) public candidates;
    // Store Candidates Count
    uint public candidatesCount;

    //mapping of aadhar to a boolean
    mapping(uint => Voter) public voters;

    constructor () public {
        addCandidate("Shivansh");
        addCandidate("Hardik");
        addCandidate("Utkarsh");
    }

    function addCandidate (string memory _name) private {
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        candidatesCount ++;
    }
    function register(uint aadhar,string memory name,string memory email,uint mob) public returns (uint) {

        //check if already registered
        if(voters[aadhar].registered==true) {
            return 1;
        }
        voters[aadhar] = Voter(aadhar,true,false,name,email,mob);

        return 4;

    }
    //functuion to caste vote
    function vote (uint _candidateId,uint aadhar) public returns (uint){

        //check if voter is registered
        if(voters[aadhar].registered==false) {
            return 1;
        }
        //check if already voted
        if(voters[aadhar].voted==true) {
            return 2;
        }
        //valid candidate
        if(_candidateId<1 && _candidateId > candidatesCount) {
            return 3;
        }
        //updating the voter
        voters[aadhar].voted = true;
        //incrementing the vote
        candidates[_candidateId].voteCount++;

        return 4;
    }
}
