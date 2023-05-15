function calculatePace() {
    var distanceInput = document.getElementById('distance');
    var timeInput = document.getElementById('time');
    var resultDiv = document.getElementById('result');

    var distance = parseFloat(distanceInput.value);
    var time = parseFloat(timeInput.value);

    if (!isNaN(distance) && !isNaN(time) && time > 0) {
        var pace = time / distance;
        var paceMinutes = Math.floor(pace);
        var paceSeconds = Math.floor((pace - paceMinutes) * 60);

        resultDiv.innerHTML = "Pace: " + paceMinutes + " min " + paceSeconds + " seg por km";
    } else {
        resultDiv.innerHTML = "Por favor, insira valores válidos.";
    }
}
