const express = require("express");
const app = express();

const PORT = 4001;
//DATA
const products = [
  {
    name: "iPHONE",
    cost: "12tr",
  },
  {
    name: "samsung",
    cost: "13tr",
  },
  {
    name: "oppo",
    cost: "14tr",
  },
];

let productsString='';
products.forEach(product=>{
    productsString+=`<div style='padding:40px; border:solid 1px #000000'>
        <img src="http://localhost:4001/images/book.jpeg" width="100" height="auto ">
        <p>Name : ${product.name}</p>
        <p>Cost : ${product.cost}</p>
    </div>`
})

app.get("/", (req, res) => {
  res.send("Konj luu");
});
app.get("/products", (req, res) => {
  res.status(200).json({
    data: products,
  });
});
app.get("/html", (req, res) => {
  res.set("Content-Type", "text/html");
  const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Learn Node JS</title>
        </head>
        <body>
            <h1>My first website</h1>
            <p>PHONE LIST :</p>
            <div style="display:flex">
                ${productsString}
            <div/>
        </body>
    </html>
    `;
    res.send(html);
});

app.use("/images", express.static("images"));

// app.post("/products",(req,res)=>{})
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
