 import {abi} from './abi.js';
     function load(){
        setTimeout(function(){
            location.reload();
        },60000);
    }
    web3 = new Web3(web3.currentProvider);
    web3.eth.defaultAccount = web3.eth.accounts[0];
    //console.log(abi);
    let CoursetroContract = web3.eth.contract(abi);
    let Contract = CoursetroContract.at('0xfa641dcd8fbca93f8894dabda69e75ab426249d8');
    //console.log(web3.eth.gasPrice);
    //console.log(Coursetro);

    Contract.candidates(0,function(error, result){  
         $("#shivansh").html(result[2].c);
         //console.log(result);    
    });

    Contract.candidates(1,function(error, result){  
         $("#hardik").html(result[2].c);
         //console.log(result);    
    });

    Contract.candidates(2,function(error, result){  
         $("#utkarsh").html(result[2].c);
         //console.log(result);    
    });

    $("#register").click(function(error) {
        let num=parseInt($("#aadhar").val());
        //console.log(num);
            Contract.register(num,function(error, result){
                if(!error)
                {
                 //   console.log(result);
                }
                else
                    alert(error);
                });
            });
        $("#vote").click(function(error) {
        let a = parseInt($("#aadhar1").val());
        let can = parseInt($("#can_id").val());
        Contract.vote(can,a,function(error, result){
            if(!error)
            {
               // console.log(result);
            }
            else
                alert(error);
            });
        });