/*
	Name: Joyce Wing Yan Lau
	Student Number: 42377029
	Tutor: Jonathon Holland (T1)
	DECO7140 Part 1B
*/
/*-----------------------------------------------------FORM VALIDATION FOR RSVP------------------------*/
$(document).ready(function(){
		var submitrsvp = document.getElementById("submitrsvp");
		var nameInput3 = document.getElementById("rsvpname");
		var emailInput3 = document.getElementById("rsvpemail");
		var dateInput3 = document.getElementById("rsvpdate")
		var messageInput3 = document.getElementById("rsvpmessage");
		var filter3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //checks all elements of a valid email
		
		var nameinperror3 = document.getElementById("nameerror2"); //these are linked to divs that will appear if there is an input error
		var emailinperror3 = document.getElementById("emailerror2");
		var dateinperror3 = document.getElementById("dateerror2");
		var messageinperror3 = document.getElementById("messageerror2")


		
		checkname= function(){
			if(nameInput3.value == "" ){
				nameinperror3.removeAttribute("class","errorhide"); //if there is an input error, a message will appear
				nameinperror3.setAttribute("class","erroractive")
			}
		}

		checkemail=function(){
			if(!filter3.test(emailInput3.value)){
				emailinperror3.removeAttribute("class","errorhide");
				emailinperror3.setAttribute("class","erroractive")
			}
		}


		checkdate=function(){
			if(dateInput3.value == ""){
				dateinperror3.removeAttribute("class","errorhide");
				dateinperror3.setAttribute("class","erroractive")

			}
		}
		checkmessage=function(){
			if(messageInput3.value == ""){
				messageinperror3.removeAttribute("class","errorhide");
				messageinperror3.setAttribute("class","erroractive")
		}
	}
		revealsubmit = function(){
			if((nameInput3.value != "")&&(filter3.test(emailInput3.value))&&(messageInput3.value != "")){ //the submit button will only become active once all of the inputs are filled
				submitrsvp.setAttribute("class","active");
			}
			else{
				submitrsvp.removeAttribute("class")
			}
	
				
			}
		if(nameInput3.value != null){ //prevents error if there is no form on the page
		nameInput3.addEventListener("keyup",function(){
			checkname(); revealsubmit();
		}, false
		);
		emailInput3.addEventListener("keyup",function(){
			checkemail(); revealsubmit();
		}, false
		);
		dateInput3.addEventListener("keyup",function(){
			checkdate(); revealsubmit();
		}, false
		);		
		messageInput3.addEventListener("keyup",function(){
			 checkmessage(); revealsubmit();
		}, false
		);}});