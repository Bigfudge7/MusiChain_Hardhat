const hre = require("hardhat");


async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();
    const coffee = await hre.ethers.getContractFactory("coffee");
    const contract = await coffee.deploy(); //instance of contract
  
    await contract.deployed();
    console.log("Address of contract:", contract.address);
}  

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });