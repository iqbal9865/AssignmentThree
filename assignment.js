//https://github.com/iqbal9865/AssignmentThree

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