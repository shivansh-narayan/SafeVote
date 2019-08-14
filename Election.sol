pragma solidity >0.4.0 <0.6.0;

contract Election {
    // cadidate info struct
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
    function register(uint aadhar) public {

        //check if already registered
        if(voters[aadhar].registered==true) {
            revert("Voter is already registered");
        }
        voters[aadhar] = Voter(aadhar,true,false);

    }
    //functuion to caste vote
    function vote (uint _candidateId,uint aadhar) public {

        //check if voter is registered
        if(voters[aadhar].registered==false) {
            revert("Voter not registered");
        }
        //check if already voted
        if(voters[aadhar].voted==true) {
            revert("Voter has already casted the vote");
        }
        //valid candidate
        if(_candidateId<1 && _candidateId > candidatesCount) {
            revert("invalid Candidate Id");
        }
        //updating the voter
        voters[aadhar].voted = true;
        //incrementing the vote
        candidates[_candidateId].voteCount++;
    }


}
