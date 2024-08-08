// for

const arr = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// contuinue and break

for (let index = 0; index < 20; index++) {  
  if (index ==5 ) break;                                    // break the iteration and take control to out of the loop
  console.log(index);
}

for (let index = 0; index < 20; index++) {
  if (index ==5 ) continue;                                  // continue to next iteration
  console.log(index);
}