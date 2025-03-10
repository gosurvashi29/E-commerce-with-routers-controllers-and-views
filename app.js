// Import Express
const express = require('express');

// Initialize the Express app
const app = express();


//Importing router

const cartRouter= require('./routes/cart')

const errorRouter=require('./routes/error404')

const productRouter= require('./routes/products')

const userRouter=require('./routes/user')

app.use(express.static("public")) //this means the files inside public folder are static, that is the files are already present on the server, and wedo not need to make any requests to get those files// so these files are already present on the server to the client

app.use(express.json());

// Define routes

//Integrating 
app.use('/product', productRouter);

app.use('/cart',cartRouter);

app.use('/user', userRouter);

app.use(errorRouter);


  
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
