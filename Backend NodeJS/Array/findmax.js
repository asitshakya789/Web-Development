let arr= [12,2,43,45,436,576,6576,58,6798,899,0,9];

function findMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("The maximum number in the array is: " + max);
}

findMax(arr);