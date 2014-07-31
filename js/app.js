//Listen for a click event on a link/image

//1. Add overlay
  //1.1 Add the image
  //1.2 Add the caption

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);

$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	
//2.2 Update overlay with the image linked from the link that was clicked on.
  $image.attr("src", imageLocation);
//2.1 Show/fade-in the overlay after a click
  $overlay.fadeIn();
 //2.3 Get child alt attrivute and set the caption with it.
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText).show();
    
  });

//3. When overlay is clicked, hide and fadeout the overlay.
$($overlay).click(function(){
$overlay.fadeOut();


});


