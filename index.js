const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;

// // Code your solution here

// function getTotalAmountForProducts(products) {
//     let totalPrice = 0;
  
//     for (const product of products) {
//       totalPrice += product.price;
//     };
  
//     return totalPrice;
//   }
  
//   console.log(getTotalAmountForProducts(products)); // LOG: 33.46

//====================  

// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
  
//   function ourReduce(arr, reducer, init) {
//       let accum = init;
//       for (const element of arr) {
//           accum = reducer(accum, element);
//       };
//       return accum;
//   }
  
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }
  
//   console.log(ourReduce(couponLocations, couponCounter, 0)); // LOG: 15





//   const produceStock = [
//       {vegetable: 'onion', quantity: 17},
//       {vegetable: 'broccoli', quantity: 30}, 
//       {vegetable: 'sweetPotato', quantity: 30}, 
//       {vegetable: 'carrot', quantity: 30}
//   ];

//   function theReducer(arrayData, reducer, initialValue) {
//       let counter = initialValue;
//       for (let item of arrayData) {
//           counter = reducer(counter, item);
//       }
//       return counter;
//   };

//   function produceCounter(totalAmount, veggieType) {
//       return totalAmount + veggieType.quantity;
//   }

//   console.log(theReducer(produceStock, produceCounter, 0));