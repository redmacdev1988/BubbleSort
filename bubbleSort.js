"user strict";


// OUTPUT NODE //
function Output(arrayOfIntegers, firstIndex, secondIndex, notes) {
    // this = {}
    if (new.target === undefined) {
         console.log('You didnt use new. Giving you a new Output');
         return new Node();
    }
    // assign properties to self
    this.array = arrayOfIntegers.slice(0);
    this.index1 = firstIndex;
    this.index2 = secondIndex;
    this.toConsole = notes || "";

    this.display = function() {
        console.log(this.array);
        console.log("index 1: " + this.index1 + ", index 2:" + this.index2);
        console.log(this.toConsole);
    };
    // return this
}



// BUBBLE SORT //

function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleUpLargestViaTuples(data, lastIndex, outputArray, swapCallBack) {

    for (var inner = 0; inner < lastIndex; inner++) {

        var leftInt = parseInt(data[inner], 10);
        var rightInt = parseInt(data[inner+1], 10);

        if(leftInt > rightInt) {
           var note = leftInt + " > " + rightInt + ", BAD";
           outputArray.push(new Output(data, inner, inner+1, note));

            swap(data, inner, inner+1);
            outputArray.push(new Output(data, inner, inner+1, "swap"));
        } else {
          var note = leftInt + " < " + rightInt + ", OK";
          outputArray.push(new Output(data, -1, -1, note));
        }
    }
}


function bubbleSort(intArray, outputArray, swapCallBack, passCallBack) {
    var data = intArray.slice(0); // own copy
    var numElements = data.length;

    for (var lastIndex = numElements-1; lastIndex >=1; lastIndex--) {
        passCallBack(lastIndex);
        outputArray.push(new Output(data, -1, -1, "PASS " + lastIndex));
        bubbleUpLargestViaTuples(data, lastIndex, outputArray, swapCallBack);
    }
    return data;
}


var dataArray = [8, 4, 2, 10];
var globalOutputArray = [];

var sorted = bubbleSort(dataArray,
                        globalOutputArray,
                        function(data, index, nextIndex) {},
                        function(passIndex){});

console.log("-- Start --");
console.log(dataArray);

for ( var i = 0; i < globalOutputArray.length; i++) {
    console.log("-----------------------------");
    console.log(globalOutputArray[i].toConsole);
    console.log(globalOutputArray[i].array);
}

console.log("\n\n-- SORTED ARRAY --");
console.log(sorted);
