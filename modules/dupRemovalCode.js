//Type your code here
function removeDuplicateOpportunity(arr, prop) {
var new_arr = [];
var lookup = {};
for (var i in arr) {
    lookup[arr[i][prop]] = arr[i];
}
for (i in lookup) {
    new_arr.push(lookup[i]);
}
return new_arr;}

function removeDuplicateBusiness(arr, prop) {
var new_arr = [];
var lookup = {};
for (var i in arr) {
    lookup[arr[i][prop]] = arr[i];
}
for (i in lookup) {
    new_arr.push(lookup[i]);
}
return new_arr;}




function removeDuplicateVolunteer(arr, prop) {
var new_arr = [];
var lookup = {};
for (var i in arr) {
    lookup[arr[i][prop]] = arr[i];
}
for (i in lookup) {
    new_arr.push(lookup[i]);
}
return new_arr;}