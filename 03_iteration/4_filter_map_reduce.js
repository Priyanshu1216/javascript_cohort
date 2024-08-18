// filter  (filter the elements as per the given condition)


const arr = [1,2,3,4,5,6,7,8,9,10]

const newArr = arr.filter((item) => item > 4)

console.log(newArr);




// map  (apply expression to all the elements of array)


const anotherArr = arr.map((item) => item*2)

console.log(anotherArr);



// method chaining (applying one method after another)


const arr1 = arr.map((item) => item * 2).map((item) => item + 10).filter((item) => item > 12)

console.log(arr1);



// reduce

// this method is mainly used to sum up the elements (integers) from Array
// it has accumulator and current value and also one inittal value(take as paramenter)



const sum = arr.reduce((acc, current_value) => acc + current_value, 0)
console.log(sum);
.


