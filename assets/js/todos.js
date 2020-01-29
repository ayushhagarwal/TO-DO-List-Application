window.setTimeout(function(){

// strike of spwcific todos by clicking
$("ul").on("click","li",function(){     // on using because it works for all potential added ul's || also it means when a li is clicked inside the ul
	$(this).toggleClass("completed");
	
});

//click on X to delete a specific todo
$("ul").on("click","span",function(event){              //this nam event can be anything like evt,e but the the most common is event or e
	$(this).parent().fadeOut(500,function(){  //parent gives the li otherwise only span will be deleted
       $(this).remove();                     //remove because fadeout only hides it and the "this" in the line refer to element while the before "this" refers to span
	});               
	event.stopPropagation();                  //this stops event bubbling since span is inside li which is inside ul which is inside div and so on || put it after commands becuase we need to propagation after our given command has been executed
});
$("input[type='text']").keypress(function(event){
	if(event.which===13)                      //13 is the code for enter key in keyboard
	{
		//grabbing new todo text from input
		var todoText=$(this).val();
		$(this).val("");           //to empty the text box as soon as something is added to the list
		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span></span> " + todoText + "</li>")  //inside append we can write html

	}


});
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});







},1);


