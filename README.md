
# Create Near Next

This is a Next JS app with Near Api bootstrapped using create-near-next

# Getting Started
In order to run the development server run:  

    yarn dev
    # or
    npm run dev
    
This will start the front-end at port ***localhost:3000***

## Building and Deploying the contract
The contract is located in under the ***contract/assembly*** folders, after editing the contract you can run

    yarn build-contract
    # or
    npm run build-contract
    
in order to build the contract and get the ***.wasm*** file , if you want to build and deploy the contract at the same time, you can run 

    yarn deploy-contract
    # or
    npm run deploy-contract
This will create a test account and deploy the contract into it.

after the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract

***#This step is not needed if you are going to use the contract with the front-end***

    export CONTRACT=ACCOUNT_ID
where the **ACCOUNT_ID** will be returned after the contract deployment

## Running the contract

**Running contract in the terminal**
If you want to run the contract in the terminal you can either:

 1. Run the `yarn run-contract # or npm run run-contract` which will run a bash file that will run the example methods available on the contract.
 Before running this command, **{NEAR_ACCOUNT}** placeholders must be replaced with correct Near accounts.
 
 3. You can call the contract manually in the terminal , examples are show below in the functions section.
 
**Running contract in the front-end**
Check the front-end section for instructions

# Functions
## helloWorld 

 - Does not take any parameters.
 - A view method that returns a Hello World string to the user
 

**Example call:**
`near view $CONTRACT helloWorld`


## helloYou

  - Does not take any parameters.
 - A view method that returns a Hello **{username}**  where username is the account that called the method

**Example call:**
`near call $CONTRACT helloYou --accountId {NEAR_ACCOUNT}`

# Front-end
The front-end for this project was build using NextJS as a framework.

In order to run the front-end locally you have to run the command:

    yarn dev
    # or
    npm run dev

 

## Linking front-end to the contract
The front-end is linked to the 	***dev-1643583533233-86904103016460*** contract by default ,  if you want to connect your own contract with the front-end, you need to replace the **CONTRACT_ID** variable in the ***near/near-setup.js*** file with your own contract id.

    export  const  CONTRACT_ID = "CONTRACT_IDs";

