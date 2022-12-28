const {
  use,
  projectPath,
  artifacts,
  getNamedAccounts,
} = require('hardhat/config');
const {
  deployments,
} = require('hardhat/plugins');
const {
  deployContract,
} = deployments;

use(require('@nomiclabs/hardhat-waffle'));

async function main() {
  // Set up web3
  const {
    web3,
  } = require('hardhat/web3');

  // Read the compiled contract
  const contractArtifact = artifacts.require('SacPayments');

  // Get the deployer account
  const {
    deployer,
  } = await getNamedAccounts();

  // Deploy the contract
  console.log(`Deploying contract ${contractArtifact.contractName}...`);
  const deployedContract = await deployContract(contractArtifact, [], { from: deployer });
  console.log(`Deployed contract ${contractArtifact.contractName} at address ${deployedContract.address}`);
}

main();

