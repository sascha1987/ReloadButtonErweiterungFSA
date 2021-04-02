define(["jquery", "qlik", "text!./lib/css/style.css"], function($, qlik, cssContent) {
	$("<style>").html(cssContent).appendTo("head");

	return {
		paint: function ($element, layout) {

			let app = qlik.currApp(this);
			console.log(app);

			//Check if Qlik Sense Desktop or Server
			let isPersonalMode = true;

			//Open WebSocket connection to the Qlik associative engine for global methods
			let global = qlik.getGlobal();
			global.isPersonalMode( function ( reply ) {
				isPersonalMode = reply.qReturn;
			});


			// Display Extension Visualization
			let html = '<a href="#" id="modal-open" class="btn btn-primary">Reload</a>';
			$element.html( html );

			// Open modal
			$("#modal-open").click(function(event) {
				event.preventDefault();

				$(this).blur() ;

				// Check if modal is displayed
				if($("#modal-overlay")[0]) return false ;

				// Add modal overlay
				$(".qv-panel-sheet").append('<div id="modal-overlay"></div>');
				$("#modal-overlay").fadeIn("slow");

				// Add modal panel
				$(".qv-panel-sheet").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Are you sure to execute reload?</h2></div><div id="modal-checkbox"><input type="checkbox" id="partial" name="partial" value=""><label for="partial">Partial reload</label></div><div id="modal-botton"><a href="#" id="execute-reload" class="btn btn-primary"> OK </a><a href="#" id="modal-close" class="btn btn-danger">Cancel</a></div></div>');
				$("#modal-content").fadeIn("slow");

				// Close modal
				$("#modal-overlay, #modal-close").unbind().click(function(event) {
					event.preventDefault();
					$("#modal-content,#modal-overlay").fadeOut("slow", function() {
						$("#modal-content").remove();
						$("#modal-overlay").remove();
					});
				});

				// Execute reload
				$("#execute-reload").click(function(event) {
					event.preventDefault();

					// Check if reload is partial
					var isPartial = false;
					if($("#partial").prop('checked')) {
						isPartial = true;
					}

					// Remove modal
					$("#modal-content").remove();

					// Open loader circle
					$("#modal-overlay").append('<div id="loader" class="loader">Loading...</div>');

					//Execute reload
					if (isPersonalMode) {
						app.doReload( 0, isPartial, false).then(function(e) {
							$("#loader").remove();
							if(e) {
								app.doSave();
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload succeeded!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-success">Close</a></div></div>');
							} else {
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload failed!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-danger">Close</a></div></div>');
							}
							$("#modal-content").fadeIn("slow");
						});
					} else {
						app.doReload( 0, isPartial, true).then(function(e) {
							$("#loader").remove();
							if(e) {
								app.doSave();
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload succeeded!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-success">Close</a></div></div>');
							} else {
								$("#modal-overlay").append('<div id="modal-content" style="display:none"><div id="modal-message"><h2>Reload failed!</h2></div><br><div id="modal-checkbox"><a href="#" id="modal-close" class="btn btn-danger">Close</a></div></div>');
							}
							$("#modal-content").fadeIn("slow");


						});
						
					}
				});
			});
		}
	};
});