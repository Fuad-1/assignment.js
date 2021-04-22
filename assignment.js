// https://github.com/Fuad-1/assignment.js



function kilometerToMeter(kiloMeter) {
    if (kiloMeter >= 0) {
        var meter = kiloMeter * 1000;
        return meter;
    }
    else {
        console.log("undefined Input");
    }

}
var result = kilometerToMeter(55);
console.log(result);




function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    if (watchQuantity >= 0 && phoneQuantity >= 0 && laptopQuantity >= 0) {
        var watchCost = watchQuantity * 50;
        var phoneCost = phoneQuantity * 100;
        var laptopCost = laptopQuantity * 500;

        var totalCost = watchCost + phoneCost + laptopCost;

        return totalCost;
    }

    else {
        console.log("undefined Input");
    }

}
var result = budgetCalculator(8, 5, 10);
console.log(result);




function hotelCost(livingday) {
    if (livingday >= 0) {
        var hotelCost = 0;

        if (livingday <= 10) {
            var hotelCost = livingday * 100;
        }
        else if (livingday <= 20) {
            var firstdays = 10 * 100;
            var remaining = livingday - 10;
            var seconddays = remaining * 80;
            hotelCost = firstdays + seconddays;

        }
        else {
            var firstdays = 10 * 100;
            var seconddays = 10 * 80;
            var remaining = livingday - 20;
            var thirddays = remaining * 50;
            hotelCost = firstdays + seconddays + thirddays;
        }
        return hotelCost;
    }

    else {
        console.log("undefined Input");
    }

}
var result = hotelCost(45);
console.log(result);



function megaFriend(friends) {
    var max = friends[0].length;
    var bigName = friends[0];

    for (var i = 0; i < friends.length; i++) {
        var names = friends[i].length;
        if (names > max) {
            bigName = friends[i];
        }
    }
    return bigName;

}
var result = megaFriend(['ali', 'alif', 'noman', 'sajjad', 'Rafiqul']);
console.log(result);


