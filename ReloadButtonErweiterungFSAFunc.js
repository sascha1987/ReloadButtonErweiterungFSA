/* A fake Qlik module must be loaded for unit tests, so that the tests work without Qlik Engine:

1. Delete 'qlik' in define statement
2. Add './test/unit/qlik'
3. Run npm test in terminal

-->

 */

define( ["jquery","./test/unit/qlik"], function ($, qlik) {

    var app = qlik.currApp(this);
    console.log(app.id);

    function checkIfLocalStorageisEmtpy(){
        if(localStorage.getItem("duration") === null){

            var storeRandomDuration = {
                id: app.id,
                durationTime: 60000
            }

            localStorage.setItem("duration", JSON.stringify(storeRandomDuration))
            return JSON.parse(localStorage.getItem("duration"));

        }
    }

    function getLastDurationTime(){
        var reloadTime;
        var storedValue = JSON.parse(localStorage.getItem("duration"))
        console.log("stored Value from function: " + storedValue)
        if (app.id === storedValue.id) {
            reloadTime = storedValue.durationTime/1000
        }
        return reloadTime
    }

    function setUpProgressBar (tag, startTime, endTime, update){
        var timer
        var element = document.querySelector(tag)
        var maxTime = endTime - startTime
        element.maxTime = maxTime

        setValue(startTime, maxTime, timer)
        timer = window.setInterval(setValue, update)
        return maxTime
    }

     function setValue (startTime, maxTime, timer) {
        var currentTime = new Date().getTime()
        var elapsedTime = currentTime - startTime
        if (elapsedTime >= maxTime){
            elapsedTime = maxTime
            window.clearTimeout(timer)
        }
        element.value = elapsedTime
        var percentage = elapsedTime/maxTime * 100
        element.setAttribute("data-label", percentage.toFixed(0) + "%")
    }

    return {
        checkIfLocalStorageisEmtpy: checkIfLocalStorageisEmtpy,
        getLastDurationTime: getLastDurationTime,
        setUpProgressBar: setUpProgressBar,
        setValue: setValue
    }
});