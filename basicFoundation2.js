function biggieSize(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr;
}

// var bigTester = biggieSize([-1,3,5,-5]);
// console.log(bigTester);

function printLowReturnHigh(arr){
    var high = arr[0];
    var low = arr[0];
    for(var i=0; i<arr.length; i++){
        if(high<arr[i]){
            high=arr[i];
        }
        if(low>arr[i]){
            low=arr[i];
        }
    }
    console.log(low);
    return high;
}

// var testPrintLowReturnHigh = printLowReturnHigh([-2,4,10,0,9]);
// console.log(testPrintLowReturnHigh);

function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            return arr[i];
        }
    }
}

// var testRun = printOneReturnAnother([0,-7, -2,8,3,-4,10,2]);
// console.log(testRun);

function doubleVision(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]*2)
        }
        return newArr;

    }
    
// var arr = [1,2,3,4,5,8,20,-4];
// var doubleTest = doubleVision(arr);
// console.log(arr)
// console.log(doubleTest);

function countPositives(arr){
    var count=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            count++;
        }
    }
    arr[arr.length-1]=count;
    return arr;
}

// var testCountPositives = countPositives([-2,3,5,-8,9,0]);
// console.log(testCountPositives);