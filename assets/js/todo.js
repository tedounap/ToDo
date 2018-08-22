// check off specific todos 
// long logic
/*$("li").click(function(){
	// if li gray, then black
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black",
			textDecoration: "none"
	});
	} 
// else gray
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	};
});*/

// Simple class toggle for completed todos.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		console.log("pressed enter");
		var todoText = $(this).val();
		// create a new li
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})