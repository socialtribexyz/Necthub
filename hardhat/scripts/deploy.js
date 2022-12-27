const Web3 = require("web3");
const { readArtifact } = require("@hardhat/typechain");

async function main() {
  // Read in the compiled contract artifact
  const contractArtifact = readArtifact("SacPayments");

  // Connect to the Polygon network
  const web3 = new Web3(
    "https://polygon-mainnet.alchemyapi.io/v2/ctJBwu3UcEXA_ZmYG00jMp2tsxXcZ5GI"
  );

  // Get the account to use for deploying the contract
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];

  // Deploy the contract
  const contract = new web3.eth.Contract(contractArtifact.abi);
  const deployment = contract.deploy({
    data: "0x" + contractArtifact.bytecode,
  });
  const deployedContract = await deployment.send({
    from: deployer,
    gas: 6000000,
  });

  console.log(`Contract deployed at address ${deployedContract.options.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });