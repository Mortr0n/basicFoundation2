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



function evensAndOdds(arr){
    var oddCount = 0;
    var evenCount = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]!=0){                     //Added this if to check if it's zero before handling the rest.  Didn't think we wanted to count 0 as even.  Easily removed if we do.
            if(arr[i]%2==0){
                evenCount++;
                if(evenCount%3==0){
                    console.log("Even more so!");
                }
            }
            if(arr[i]%2!=0){
                oddCount++;
                if(oddCount%3==0){
                    console.log("Thats odd!");
                }
            }
        }
    }
}

// evensAndOdds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,22,22,3,3,3,3,3,3,-2,-2,-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

function incrementTheSeconds(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2!=0){
            arr[i]++;
            console.log(arr[i]);
        }
    }
    return arr;
}

// var incrementTheSecondsTest = incrementTheSeconds([1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,0,0,0,0,0,0,0,0,0]);
// console.log(incrementTheSecondsTest);

function previousLengths(arr){
    var stringLength = 0;
    for(var i=arr.length-1; i>0; i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}

// var testPreviousLengths = previousLengths(["Hello", "Dojo", "Awesome", "Allmight", "Jiraiya", "Naruto", "Kakashi"]);
// console.log(testPreviousLengths);

function addSeven(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]+7);
    }
    console.log("Arr is: " + arr);
    return newArr;
}

var addSevenTest = addSeven([1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,0,0,0,0,0,0,0,0,0]);
console.log("newArr is: " + addSevenTest);