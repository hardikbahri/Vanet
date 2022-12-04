//https://eth-goerli.g.alchemy.com/v2/E7K1NaKG5ss1HaH-0-ZOwH7sPe3Rvn6O

require("@nomiclabs/hardhat-waffle");

module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/E7K1NaKG5ss1HaH-0-ZOwH7sPe3Rvn6O',
      accounts:['15037ec09f9d3ade013f31f1a49eeafb532ced952e5f1dacd3fdfb102747f073']

    },
    
  }
}