const arr = [1, 40, -5, 10, 0];
for (let i = 1; i < arr.length; i++) {
    for ( let j = 0; j < i; j++) {
        if(arr[i] < arr[j]) {
            let a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;
        }
    }
}
console.log(arr);