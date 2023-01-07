// Basic Functions

//Adding 2 Numbers
function add(a, b) {
    return a+b;
}

//Converting Minutes to Seconds
function convertMS(m) {
    return 60*m;
}

//Converting Hours to Minutes
function convertHM(h) {
    return 60*h;
}
//Converting Days to Hours
function convertDH(d){
    return 24*d;
}
//LeapYear Test 
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
//Converting age to seconds
function convertAS(age){
    return age * 12 * 30 * 24 * 60 * 60;
}

//Get First Item
function getFirstItem(array) {
    return array[0];
}

//Check if string is empty
function isEmpty(string) {
    if(string == "") 
        return true;
}

//Max of an array
function maxArray(array) {
    let i, max = array[0];
    for (i=0; i<array.length; i++){
        if(array[i] > max)
            max = array[i];
    }
    return max;
}

let array = new Array(200, 13, 10, 9, 2, -1);
console.log(maxArray(array));
console.log(minArray(array));

//Minimum if an array
function minArray(array) {
    let i, min = array[0];
    for (i=0; i<array.length; i++){
        if(array[i] < min)
            min = array[i];
    }
    return min;
}

//Sort array in Descending order
function sortDesc(array) {
    let i, j;
    for(i=0; i<=array.length; i++){
        for(j+=1; j<=array.length; j++){
            if(array[j] > array[i])
                array[i] = array[j];
        }
    }
    return array;
}
console.log(sortDesc(array));
