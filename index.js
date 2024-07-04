//  1 - masala
// let numbers = [3, 7, 2, 10, 5, 18];
// let largeNumber = find(numbers);
// function find(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
//   console.log(largeNumber); 


// 2 - masala
// let numbers = [3, 7, 2, 10, 5, 18];
// let largeNumber = find(numbers);
// function find(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
//   console.log(largeNumber); 



// 3 - masala
// function smallNumbers(n) {
//     let son = +prompt("son kiriting")
//     let arr = [1,2,3,4,5,6,7,8,9,10]
//     for (let i = 0; i < arr.length; i++){
//         result = arr[i]
//         if (son > result) {
//             console.log(result);
//         }
//     }
// }
// smallNumbers()




// 4 - masala
// function primeNumbers(son) {
//     let count = 0
//     if (son > 1) {
//        for (let i = 1; i < son; i++) {
//         if (son % i == 0) {
//            count += i
//     }
// } 
//        if (count >= son) {
//         console.log("mukammal son");
//        } else{
//         console.log("mukammal son emas");
//        }
//     }
// }

// primeNumbers(28);




// 5 - masala
// const reverseNumber = () => {
//     let newArr = []
//     let arr = [1,2,3,4,5,6,7]
//     for (let i = arr.length - 1;  i >= 0; i--){
//        newArr.push(arr[i])
//     }
//     console.log(newArr);
// }
// reverseNumber()


// 6 - masala
// function primeNumbers(son) {
//     let count = 0
//     let result = ""
//     if (son > 2) {
//        for (let i = 1; i < son; i++) {
//         if (son % i == 0) {
//             count++
//         }
        
//        } 
//        if (count === 1) {
//         result = "tub son"
//        }else{
//         result = "tub son emas"
//        }
//     }else{
//         result = "xato son kiritilgan"
//     }
//     return result
// }
// console.log(primeNumbers(7));



//  7 - masala
// function objValue() {
//     let arr = []
//     let obj = {name: "123", age: "998", lastname: "15"}
//     for (let key in obj)
//     arr.push(obj[key])
//     arr.unshift("function")
//     arr.push("function")
//     console.log(arr);
// }
// objValue()