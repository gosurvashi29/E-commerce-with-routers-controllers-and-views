const getUsers=(req, res) => {
  
    res.send("Fetching all users.");
  };



  const getUsersById=(req, res) => {
  
    res.send(`Fetching user with ID: ${req.params.id}`);
  };



  const postUsers=(req, res) => {
    res.send("Adding a new user.");
   };

   const putUsers=(req, res) => {
    res.send("Put request called.");
   };
   

   const deleteUsers=(req, res) => {
    res.send("Delete request called.");
   };

  module.exports={
    getUsers,
    getUsersById,
    postUsers,putUsers,
    deleteUsers
  }