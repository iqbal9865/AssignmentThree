//https://github.com/iqbal9865/AssignmentThree


//start first problem
function kilometerToMeter(km){
    if(km < 0){
        return 'Please Input a Positive Number';
    }
    else{
    var meter = km * 1000;
    return meter;
    }
}
var distance = kilometerToMeter(7);
console.log(distance);
//end first problem



//start second problem
function budgetCalculator(numOfWatch,numOfPhone,numOfLaptop){
    if(numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0){
        return "Invalid Input";
    }
    else{
    var watchAmount = numOfWatch * 50;
    var phoneAmount = numOfPhone * 100;
    var laptopAmount = numOfLaptop * 500;
    var total = watchAmount + phoneAmount + laptopAmount;
    return total;
    }
}
var totalCost = budgetCalculator(5,4,3);
console.log(totalCost);
//end second problem