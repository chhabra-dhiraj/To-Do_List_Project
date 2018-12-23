$("input").on("keypress", function(event) {
	if(event.which === 13) {
		var inputTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + inputTodo + "</li>");
	}
});

$("ul").on("click", "span", function(event) {	
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});	
});