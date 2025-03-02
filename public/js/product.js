const onSumbitHandler=(e)=>{
    e.preventDefault();
    console.log("submit");
    const product=e.target.productName.value;

    const obj={
        "productName":product
    }

    axios.post("http://localhost:3000"+"/product",obj).then((result)=>{
        console.log("value returned from post request"+result.data.value)
    })
}