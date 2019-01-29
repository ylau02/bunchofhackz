/*
	Name: Joyce Wing Yan Lau
	Student Number: 42377029
	Tutor: Jonathon Holland (T1)
	DECO7140 Part 1B
*/
/*-------------------------SIMPLE SLIDESHOW WITHOUT BUTTONS---- Followed tutorial on https://www.youtube.com/watch?v=AjJ7Dvlukdk */
$(document).ready(function(){

	var myImage = document.getElementById("slideshow");

	var imageArray = ["images/computers.jpg","images/artpainting.jpg","images/hacking.jpg",
					"images/meetup.jpg","images/retrosharebackbone.jpg"]; //stores the images to display

	var imageIndex = 0;
	changeImage = function(){
		myImage.setAttribute("src", imageArray [imageIndex]); //changes to the next image in the array
		imageIndex++;
		if (imageIndex>=imageArray.length) {
			imageIndex = 0;
		}
	}

	var intervalhandle = setInterval(changeImage, 3000); //sets the speend for changing images

	slideshow.onclick = function(){
		clearInterval(intervalhandle);
	}
});
/*---------------------- SHOWS ANY HIDDEN COMMENT ELEMENTS----------------------------- */
$(document).ready(function(){
		var comment = document.getElementById("cb"); //each comment box has its own id
		if(comment != null){ //makes sure the page doesn't return an error if there is no comment box
		comment.addEventListener("click",function(){
		
		var showcomment = document.getElementById("hidecomment");
		showcomment.removeAttribute("class","hidecomment");
		showcomment.setAttribute("class","showcomment");
	}	
	); 
		var comment1 = document.getElementById("cb1");
		
		comment1.addEventListener("click",function(){
		
		var showcomment1 = document.getElementById("hidecomment1");
		showcomment1.removeAttribute("class","hidecomment");
		showcomment1.setAttribute("class","showcomment");
	}	
	); 
		var comment2 = document.getElementById("cb2");
		comment2.addEventListener("click",function(){
		
		var showcomment2 = document.getElementById("hidecomment2");
		showcomment2.removeAttribute("class","hidecomment");
		showcomment2.setAttribute("class","showcomment");
	}	
	); 
		var comment3 = document.getElementById("cb3");
		
		comment3.addEventListener("click",function(){
		
		var showcomment3 = document.getElementById("hidecomment3");
		showcomment3.removeAttribute("class","hidecomment");
		showcomment3.setAttribute("class","showcomment");
	}	
	); 
		var comment4 = document.getElementById("cb4");
		
		comment4.addEventListener("click",function(){
		
		var showcomment4 = document.getElementById("hidecomment4");
		showcomment4.removeAttribute("class","hidecomment");
		showcomment4.setAttribute("class","showcomment");
	}	
	); 
}});
/*---------------------------GALLERY SLIDESHOW-------Followed tutorial on http://codepen.io/zuraizm/pen/vGDHl */
jQuery(document).ready(function($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#gallery ul li').length;
	var slideWidth = $('#gallery ul li').width();
	var slideHeight = $('#gallery ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#gallery').css({ width: slideWidth, height: slideHeight });
	
	$('#gallery ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#gallery ul li:last-child').prependTo('#gallery ul');

    function moveLeft() {
        $('#gallery ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#gallery ul li:last-child').prependTo('#gallery ul');
            $('#gallery ul').css('left', '');
        });
    };

    function moveRight() {
        $('#gallery ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#gallery ul li:first-child').appendTo('#gallery ul');
            $('#gallery ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    

