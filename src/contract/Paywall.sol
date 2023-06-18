// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DrcToken.sol";
import "./DataRegistry.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Paywall   {
    DrcToken public token;
    DataRegistry public dataregistry;
    address public owner;

     struct Access {
    
        string cid;
        bool isPaid;
    }


    mapping(address => Access) public hasAccess;

    event AccessGranted(address indexed user);
    event AccessRevoked(address indexed user);
    event PayGate(address to, uint256 amount);

    constructor(address _tokenAddress) {
        token = DrcToken(_tokenAddress);
         owner = msg.sender;
    }


 

    function requestAccess(address 4to, uint256 amount ,string memory cid) external returns (bool) {
        require(token.balanceOf(msg.sender) > 0, "Insufficient tokens in wallet");
        // check if have paid for the data before
        // require ( dataregistry.checkPayment(msg.sender , cid) == false , "already paid" );
                  Access storage access = hasAccess[msg.sender];
         require(keccak256(abi.encodePacked(access.cid)) !=  keccak256(abi.encodePacked(cid)), "Access already granted");

    //    require(!hasAccess[msg.sender], "Access already granted");
    //   if ( dataregistry.addPayment( to , cid ,amount) == true) {
           token.tranfast( msg.sender, to, amount);
           access.cid=cid;
        access.isPaid= true;
        
             emit PayGate(to,  amount);
        emit AccessGranted(msg.sender);
        return true;
    //    } else {
        //    return false;
    //    }
        
        
       
    }



    // function revokeAccess(address _user) external {
    //     require(hasAccess[_user], "Access not granted");

    //     hasAccess[_user] = false;
    //     emit AccessRevoked(_user);
    // }
}
