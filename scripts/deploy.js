
const fs = require('fs');
const {ethers} = require('hardhat')
async function main() {
	
	// const PoolContract = await ethers.getContractFactory("BSTRToken");
	// const poolContract = await PoolContract.deploy("Test Token", "TTT");


	// const PoolContract = await ethers.getContractFactory("BSTRToken");
	// const poolContract = await PoolContract.deploy("Beamstarter.token", "BSTR");


	const PoolContract = await ethers.getContractFactory("BeamStarterLaunchPad");
	const poolContract = await PoolContract.deploy("0xc014Ae9c52eA5431073aE3F3973cFb5369eE0164", "0xd59176DFc881cd22A78153cda31ACa86dE0E9a9c");

	// var tokens = ["0x9c2582bf7648dc75825a26758206b6610d7c989c6ac940285503d77e5ad27bdc"];
	// var tx = await poolContract.buy(tokens,0);
	// await tx.wait();

	const contract = poolContract.address;
	fs.writeFileSync(__dirname + '/./v1.json', JSON.stringify({ contract }, null, '\t'))
}

main().then(() => {
}).catch((error) => {
	console.error(error);
	// process.exit(1);
});
