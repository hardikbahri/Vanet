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
               
