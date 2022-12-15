$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").slideToggle();
		$(".stream1").slideToggle('slow');
		$(".stream1").slideToggle('medium');
		$(".stream1").slideToggle('fast');
		$(".stream1").slideToggle(1000);
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
