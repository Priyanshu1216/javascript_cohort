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
