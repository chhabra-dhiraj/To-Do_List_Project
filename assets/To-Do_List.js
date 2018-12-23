$("input").on("keypress", function(event) {
	if(event.which === 13) {
		var inputTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + inputTodo + "</li>");
	}
});

$("ul").on("click", "span", function(event) {	
	event.stopPropagation();
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});	
});

$("ul").on("click", "li", function(event) {
	event.stopPropagation();
	$(this).toggleClass("completed-task");
});

$("h1 span").on("click", function() {
	$("input").fadeToggle();
});