/* A fake Qlik module must be loaded for unit tests, so that the tests work without Qlik Engine:

1. Delete "qlik" in define statement
2. Add "./test/unit/Qlik"
3. Run npm test in terminal

-->

 */

define( ["jquery","qlik"], function ($, qlik) {

    var app = qlik.currApp(this)

    function checkIfLocalStorageisEmtpy(){
        if(localStorage.getItem("duration") === null){

            var storeRandomDuration = {
                id: app.id,
                durationTime: 300000
            }

            localStorage.setItem("duration", JSON.stringify(storeRandomDuration))
            return JSON.parse(localStorage.getItem("duration"))

        }
    }

    function getLastDurationTime(){
        var reloadTime
        var storedValue = JSON.parse(localStorage.getItem("duration"))
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

        var setValue = function () {
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
        setValue()
        timer = window.setInterval(setValue, update)
        return
    }

    return {
        checkIfLocalStorageisEmtpy: checkIfLocalStorageisEmtpy,
        getLastDurationTime: getLastDurationTime,
        setUpProgressBar: setUpProgressBar
    }
})