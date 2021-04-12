define( ['jquery','qlik'], function ( $, qlik) {

    function getLastDurationTime(){
        var reloadTime;
        var storedValue = JSON.parse(localStorage.getItem("duration"))
        console.log("stored Value from function: " + storedValue)
        if (app.id === storedValue.id) {
            reloadTime = storedValue.durationTime/1000
        }
        return reloadTime
    }
});