/*
	Name: Joyce Wing Yan Lau
	Student Number: 42377029
	Tutor: Jonathon Holland (T1)
	DECO7140 Part 1B
*/
/*-----------------------FORM VALIDATION FOR CONTACT US---------------------------------------*/
$(document).ready(function(){
		var submitcontact = document.getElementById("submitcontact");
		var nameInput1 = document.getElementById("contactname");
		var emailInput1 = document.getElementById("contactemail");
		var subjectInput1 = document.getElementById("contactsubject");
		var messageInput1 = document.getElementById("contactmessage");
		var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //checks all elements of a valid email
		
		var nameinperror1 = document.getElementById("nameerror"); //these are linked to divs that will appear if there is an input error
		var emailinperror1 = document.getElementById("emailerror");
		var subjectinperror1 = document.getElementById("subjecterror");
		var messageinperror1 = document.getElementById("messageerror");
		
		checkname= function(){
			if(nameInput1.value == "" ){
				nameinperror1.removeAttribute("class","errorhide"); //if there is an input error, a message will appear
				nameinperror1.setAttribute("class","erroractive");
			}
		}

		checkemail=function(){
			if(!filter.test(emailInput1.value)){
				emailinperror1.removeAttribute("class","errorhide");
				emailinperror1.setAttribute("class","erroractive");
			}
		}


		checksubject=function(){
			if(subjectInput1.value != ""){
				subjectinperror1.removeAttribute("class","errorhide");
				subjectinperror1.setAttribute("class","erroractive");

			}
		}
		checkmessage=function(){
			if(messageInput1.value != ""){
				messageinperror1.removeAttribute("class","errorhide");
				messageinperror1.setAttribute("class","erroractive");
		}
	}
		revealsubmit = function(){
			if((nameInput1.value != "")&&(filter.test(emailInput1.value))&&(subjectInput1.value != "")&&(messageInput1.value != "")){
				submitcontact.setAttribute("class","active");
			}
			else{
				submitcontact.removeAttribute("class");
			}
	
				
		}
		if(nameInput1.value != null){ 
		nameInput1.addEventListener("keyup",function(){
			checkname(); revealsubmit();
		}, false
		);
		emailInput1.addEventListener("keyup",function(){
			checkemail(); revealsubmit();
		}, false
		);
		subjectInput1.addEventListener("keyup",function(){
			checksubject(); revealsubmit();
		}, false
		);		
		messageInput1.addEventListener("keyup",function(){
			 checkmessage(); revealsubmit();
		}, false
		);
		}
});

