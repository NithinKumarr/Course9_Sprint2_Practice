const products4 = [
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

//Find the stock of each non-premium products using function chaining
//Write code here

function countNonPremium(productName){
    let count=0;
    let stockOfProducts=products4.filter(item=>(item.productName==productName && item.price<=300)).reduce(function(acc,curr){ return ++count},0);
    return stockOfProducts;
}

console.log(`Product Name                 Stock`)
console.log(`Gucci Round Bucklet Belt     ${countNonPremium("Gucci Round Bucklet Belt")}`);
console.log(`Smiley T-Shirt               ${countNonPremium("Smiley T-Shirt")}`);
console.log(`Shinie Nail Paint            ${countNonPremium("Shinie Nail Paint")}`);
console.log(`Esbeda Wallet                ${countNonPremium("Esbeda Wallet")}`);