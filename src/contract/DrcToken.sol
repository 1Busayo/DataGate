// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract DrcToken is ERC20  {

   constructor(uint256 initialSupply) ERC20("DrcToken", "DRCT"){
        _mint(msg.sender,  initialSupply);
   }

   function tranfast (address from ,address to, uint256 amount) external {
         
         require(balanceOf(from) > 0, "Insufficient tokens!");

         _transfer(from, to , amount);

   }

}