const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const intialValue = 0
const totalBatteries = batteryBatches.reduce((battery, currentValue) => battery + currentValue, intialValue)


console.log(totalBatteries)