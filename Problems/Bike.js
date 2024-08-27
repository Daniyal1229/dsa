function assignBikes(workers, bikes) {
    const assignments = new Array(workers.length).fill(-1);
    const usedBikes = new Set();

    while (usedBikes.size < workers.length) {
        let minDistance = Infinity;
        let closestWorker, closestBike;

        for (let i = 0; i < workers.length; i++) {
            if (assignments[i] !== -1) continue;

            for (let j = 0; j < bikes.length; j++) {
                if (usedBikes.has(j)) continue;

                const distance = Math.abs(workers[i][0] - bikes[j][0]) + Math.abs(workers[i][1] - bikes[j][1]);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestWorker = i;
                    closestBike = j;
                }
            }
        }

        assignments[closestWorker] = closestBike;
        usedBikes.add(closestBike);
    }

    return assignments;
}

// Test the function
const workers = [[0, 0], [2, 1]];
const bikes = [[1, 2], [3, 3]];

console.log(assignBikes(workers,bikes));

