define(["jquery", "qlik","./ReloadButtonErweiterungFSAFunc" , "text!./lib/css/style.css"], function($, qlik, ReloadButtonErweiterungFSAFunc, cssContent) {
	$("<style>").html(cssContent).appendTo("head")

	return {
		paint: function ($element, layout) {

			// Get a reference to the current app
			var app = qlik.currApp(this)

			//Check if Qlik Sense Desktop or Server
			var isPersonalMode = true

			//Open WebSocket connection to the Qlik associative engine for global methods
			var global = qlik.getGlobal()
			global.isPersonalMode( function ( reply ) {
				isPersonalMode = reply.qReturn
			})

			// Display Extension Visualization
			var html = '<a href="#" id="modal-open" class="btn btn-primary">Reload</a>'
			$element.html(html)

			//Store random time
			ReloadButtonErweiterungFSAFunc.checkIfLocalStorageisEmtpy()

			// Open modal
			$("#modal-open").click(function(event) {
				event.preventDefault()
				$(this).blur()

				// Check if modal is displayed
				if($("#modal-overlay")[0]) return false

				// Add modal overlay
				$(".qv-panel-sheet").append('<div id="modal-overlay"></div>')
				$("#modal-overlay").fadeIn("slow")

				// Add modal panel
				$(".qv-panel-sheet").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Are you sure to execute reload?</h2></div><div id="modal-checkbox"><input type="checkbox" id="partial" name="partial" value=""><label for="partial">Partial reload</label></div><div id="modal-botton"><a href="#" id="execute-reload" class="btn btn-primary"> OK </a><a href="#" id="modal-close" class="btn btn-danger">Cancel</a></div></div>')
				$("#modal-content").fadeIn("slow")

				// Close modal
				$("#modal-overlay, #modal-close").unbind().click(function(event) {
					event.preventDefault()
					$("#modal-content,#modal-overlay").fadeOut("slow", function() {
						$("#modal-content").remove()
						$("#modal-overlay").remove()
					})
				})

				// Execute reload
				$("#execute-reload").click(function(event) {
					event.preventDefault()

					// Check if reload is partial
					var isPartial = false
					if($("#partial").prop('checked')) {
						isPartial = true
					}

					// Remove modal
					$("#modal-content").remove()

					// Open loader circle
					$("#modal-overlay").append('<div id="loader" class="loader">Loading...</div>')

					//Execute reload
					if (isPersonalMode) {
						var start = new Date().getTime()
						var start1 = new Date()
						var end1 = new Date()

						// Progressbar
						$("#modal-overlay").append('<div id="prog1"></div>')
						end1.setSeconds(end1.getSeconds() + Math.round(ReloadButtonErweiterungFSAFunc.getLastDurationTime()))
						ReloadButtonErweiterungFSAFunc.setUpProgressBar("#prog1", start1.getTime(), end1.getTime(), 1000)

						app.doReload( 0, isPartial, false).then(function(e) {
							$("#loader").remove()
							$("#prog1").remove()
							if(e) {
								app.doSave()
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload succeeded!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-success">Close</a></div></div>')
							} else {
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload failed!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-danger">Close</a></div></div>')
							}
							$("#modal-content").fadeIn("slow")
							var end = new Date().getTime()
							var duration = end - start

							//Store measured time
							var storeDuration = {
								id: app.id,
								durationTime: duration
							}
							localStorage.setItem("duration", JSON.stringify(storeDuration))
						})
					} else {
						var start = new Date().getTime()
						var start1 = new Date()
						var end1 = new Date()

						// Progressbar
						$("#modal-overlay").append('<div id="prog1"></div>')
						end1.setSeconds(end1.getSeconds() + Math.round(ReloadButtonErweiterungFSAFunc.getLastDurationTime()))
						ReloadButtonErweiterungFSAFunc.setUpProgressBar("#prog1", start1.getTime(), end1.getTime(), 1000)

						app.doReload( 0, isPartial, false).then(function(e) {
							$("#loader").remove()
							$("#prog1").remove()
							if(e) {
								app.doSave()
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload succeeded!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-success">Close</a></div></div>')
							} else {
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload failed!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-danger">Close</a></div></div>')
							}
							$("#modal-content").fadeIn("slow")
							var end = new Date().getTime()
							var duration = end - start

							//Store measured time
							var storeDuration = {
								id: app.id,
								durationTime: duration
							}
							localStorage.setItem("duration", JSON.stringify(storeDuration))
						})
					}
				})
			})
		}
	}
})