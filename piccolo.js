function parkingLot(input) {
    let parkingLot = new Set();
 
    for (let command of input) {
        let [direction, carNumber] = command.split(', ');
 
        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }
 
    let sortedCars = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
 
    if (sortedCars.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sortedCars.join('\n'));
    }
}

parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI',
            'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);