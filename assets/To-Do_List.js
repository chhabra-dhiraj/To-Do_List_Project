$("input").on("keypress", function(event) {
	if(event.which === 13) {
		var inputTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + inputTodo + "</li>");
	}
});