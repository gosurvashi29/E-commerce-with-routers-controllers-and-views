// Import Express
const express = require('express');

// Initialize the Express app
const app = express();


//Importing router

const cartRouter= require('./routes/cart')

const errorRouter=require('./routes/error404')

const productRouter= require('./routes/products')

const userRouter=require('./routes/user')



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
