function AddPoints() {
    this.startPoints = 0;
    this.calcPoints = function (points) {
        this.startPoints += points;
        return this.startPoints;
    }
}

