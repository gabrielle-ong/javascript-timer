// function pageLoad() {

	// console.clear();
	// console.log("hi!");
	var seconds = 0;
	var display = document.getElementById('timer');

	var reset = document.getElementById('reset');
	var start = document.getElementById('start');
	var pause = document.getElementById('pause');

	function startTimer() {
		timerID = window.setInterval(updateTime, 1000);
        document.getElementById("start").disabled = true;
		pause.addEventListener("click",pauseTimer,false);
	}

	function updateTime() {
    	seconds++;
		display.innerHTML = "Time Elapsed: " + seconds;
    }
    function pauseTimer () {
    	window.clearInterval(timerID);
    }
    function resetTimer() {
    	seconds = 0;
    	window.clearInterval(timerID);
    	display.innerHTML = "Stop Watch";
    }
    start.addEventListener("click",startTimer);

    reset.addEventListener("click",resetTimer,false);
