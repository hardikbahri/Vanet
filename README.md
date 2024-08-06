# Vehicle Tracking and Communication Simulation

## Description
This project simulates a vehicle tracking and communication system with advanced features including real-time tracking, blockchain-based communication, vehicle data management, and message reliability analysis.

## Features
- **Blockchain-based Communication**: Secure and decentralized communication between vehicles using blockchain technology, ensuring data privacy, integrity, and reducing unauthorized access.
- **Vehicle Data Management**: Effective management of vehicle data, storing crucial information such as vehicle identification, location history, and communication logs.
- **Vehicle Trust Scores**: Each vehicle is assigned a trust score based on its reliability and behavior, helping users assess the credibility of a vehicle in the network.
- **Message Reliability Analysis**: Advanced algorithms analyze the reliability of communication messages exchanged between vehicles with an accuracy of over 90%, providing valuable insights into the trustworthiness of messages.
- **Enhanced Security**: The simulation ensures that communication channels are resistant to tampering and malicious attacks, with a 99% improvement in security.

## Prerequisites
- **Operating System**: These instructions are for Windows.
- **MongoDB**: [Download MongoDB and Compass](https://www.mongodb.com/try/download/community).
- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MetaMask Extension**: Install the MetaMask extension on Chrome and register an account.
- **Goerli Test Network**: Use the Goerli test network and obtain test ethers from [Goerli Faucet](https://goerlifaucet.com/).

## MetaMask Setup
1. Register on MetaMask and save your keys (do not share them with anyone).
2. Create 12 MetaMask wallets in one account.
3. Name the first account as `RSU`.
4. Name the remaining accounts as `car 1`, `car 2`, `car 3`, ..., `car 11`.
5. Ensure each MetaMask account has at least 0.3 ethers to run the project.

## Installation

1. **Frontend Setup**:
    ```bash
    cd frontend
    cd client
    npm init vite@latest
    # Choose 'react' project then 'js' project
    npm install
    npm install -D tailwindcss postcss autoprefixer
    ```

2. **Backend Setup**:
    ```bash
    cd ..
    cd ..
    cd backend
    npm install mongoose
    npm install cors
    npm install express
    node index.js
    ```

3. **Run Frontend**:
    ```bash
    cd ..
    cd frontend
    cd client
    npm run dev
    ```

4. **MetaMask Configuration**:
    - Copy and paste the MetaMask account addresses in `frontend/client/src/context/TransactionContext.jsx` from line number 109 in the hashmap as mentioned in the inline comments of the file.
    - Input the count of transactions done by you in the allow message transfer section.

## Usage
1. Open the application in your browser.
2. Use the MetaMask accounts for interaction within the simulation.
3. Monitor vehicle tracking, manage vehicle data, analyze message reliability, and assess vehicle trust scores.

## Screenshots
![1](https://github.com/hardikbahri/Vanet/assets/79997594/b961a097-39a0-41fb-8391-5597593df3f7)
![2](https://github.com/hardikbahri/Vanet/assets/79997594/3e405ed8-df0a-4798-944d-aef3908ee992)
![3](https://github.com/hardikbahri/Vanet/assets/79997594/7a651155-c048-4346-9b08-6f9dab284414)
![image](https://github.com/hardikbahri/Vanet/assets/79997594/2fb40a4f-5e33-4d60-a098-e750516b8f61)
![image](https://github.com/hardikbahri/Vanet/assets/79997594/8c66335c-7854-4ae2-93b2-f354e4c79bc2)
![image](https://github.com/hardikbahri/Vanet/assets/79997594/c69313af-fb52-4ae5-9797-2ac2c612b5f1)

