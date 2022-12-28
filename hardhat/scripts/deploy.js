const Web3 = require('web3');

async function deployPolygon(web3, bytecode, contractName, args, deploymentOptions) {
  console.log(`Deploying contract ${contractName}...`);
  const contractInstance = new web3.eth.Contract(bytecode.abi);
  const deployedContract = await contractInstance
    .deploy({
      data: bytecode.bytecode,
      arguments: args,
    })
    .send(deploymentOptions);
  console.log(`Deployed contract ${contractName} at address ${deployedContract.options.address}`);
  return deployedContract;
}

async function main() {
  // Set up web3
  const web3 = new Web3(process.env.WEB3_PROVIDER_URL);

  // Set up deployment options
  const deploymentOptions = {
    from: process.env.DEPLOYER_ADDRESS,
    gas: 4000000,
  };

  // Read the compiled SacPayments contract
  const bytecode = require('./SacPayments.json');

  // Deploy the SacPayments contract
  const deployedContract = await deployPolygon(web3, bytecode, 'SacPayments', [arg1, arg2, arg3], deploymentOptions);
}

main();