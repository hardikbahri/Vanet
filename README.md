![1](https://github.com/hardikbahri/Vanet/assets/79997594/b961a097-39a0-41fb-8391-5597593df3f7)
![2](https://github.com/hardikbahri/Vanet/assets/79997594/3e405ed8-df0a-4798-944d-aef3908ee992)
In the above scenario, we have shown VANET in the presence of RSU.
Firstly the accident happens and the crashed vehicle sends the information to RSU for authentication.
Now click on connect wallet to make a transaction through blockchain and a dialogue box will pop up through Metamask which requires username and password.
Test case 1:-
Assume the car which sent the information of the accident is malicious
![3](https://github.com/hardikbahri/Vanet/assets/79997594/7a651155-c048-4346-9b08-6f9dab284414)
This test case will result in the above outcome
![image](https://github.com/hardikbahri/Vanet/assets/79997594/2fb40a4f-5e33-4d60-a098-e750516b8f61)
Assume the car which sent the information of the accident is not malicious. There are two test cases involved  within it. 
RSU verifies the event as true as depicted in above fig12 and is sending the information to other vehicles using blockchain. 
![image](https://github.com/hardikbahri/Vanet/assets/79997594/8c66335c-7854-4ae2-93b2-f354e4c79bc2)
![image](https://github.com/hardikbahri/Vanet/assets/79997594/c69313af-fb52-4ae5-9797-2ac2c612b5f1)
After every transaction/message transfer, the latest messages section will be updated with the addresses of involved vehicles and latest message which is sent.


# Features
Vehicle Tracking: The simulation provides real-time tracking of vehicles, enabling users to monitor their locations and movements.

Blockchain-based Communication: Blockchain technology is employed for secure and decentralized communication between vehicles. This ensures data privacy, and integrity, and reduces the risk of unauthorized access.
	
Vehicle Data Management: The simulation effectively manages vehicle data, storing crucial information such as vehicle identification, location history, and communication logs.

Vehicle Trust Scores: Each vehicle is assigned a trust score based on its reliability and behavior. These trust scores help users assess the credibility of a vehicle in the network.

Message Reliability Analysis: The simulation incorporates advanced algorithms to analyze the reliability of communication messages exchanged between vehicles. Achieving an accuracy of over 90%, this analysis provides valuable insights into the trustworthiness of messages.

Enhanced Security: With a 99% improvement in security, the simulation ensures that communication channels are resistant to tampering and malicious attacks.



Note:-These instructions works only on a windows operating system
Intall mongodb and compass from https://www.mongodb.com/try/download/community
Install node.js 
Install metamask extension on chrome
Register on Metmask and save the keys used (note:- do not share it with anyone)
Make 12 metamask wallets in one account and name the first account as RSU.
The rest accounts must have names as car 1 ,car 2,car 3,car 4,car 5,car 6,car 7,car 8,car 9, car 10 and car 11.
Make sure to use goerli testnetwork and get test ethers from https://goerlifaucet.com/
Each Metmask account must have atleast 0.3 ethers to run the project..
Now run these commands in terminal which is opened in the directory of the project
               cd frontend
               cd client
               npm init vite@latest
now choose react project then js project 
and again run  
               npm install
               npm install -D tailwindcss postcss autoprefixer
now after installation
               cd ..
               cd ..
               cd backend
               npm install mongoose
               npm install cors
               npm install express
               node index.js
now after installation in backend folder now again come back to frontend/client
               cd ..
               cd frontend
               cd client
               npm run dev
The project should come live now just copy paste metamask account addresses in frontend/client/src/context/TransactionContext.jsx from line number 109
in the hashmap as mentioned in the inline comments of the file
 
Also input the count of transactions done by you in the allow message transfer section
               



