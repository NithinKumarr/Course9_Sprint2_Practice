const products2 = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each product type
//Write code here
function countProduct(productName){
    let count=0;
    let stockOfProducts=products2.filter(item=>item.productName==productName).reduce(function(acc,curr){ return ++count},0);
    return stockOfProducts;
}
console.log(`Product Name                 Stock`)
console.log(`Gucci Round Bucklet Belt     ${countProduct("Gucci Round Bucklet Belt")}`);
console.log(`Smiley T-Shirt               ${countProduct("Smiley T-Shirt")}`);
console.log(`Shinie Nail Paint            ${countProduct("Shinie Nail Paint")}`);
console.log(`Esbeda Wallet                ${countProduct("Esbeda Wallet")}`);