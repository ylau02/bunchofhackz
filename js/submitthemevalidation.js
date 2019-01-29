/*
	Name: Joyce Wing Yan Lau
	Student Number: 42377029
	Tutor: Jonathon Holland (T1)
	DECO7140 Part 1B
*/
/*-----------------------FORM VALIDATION FOR SUBMIT A THEME---------------------------------------*/
$(document).ready(function(){
		var submittheme = document.getElementById("submittheme");
		var nameInput2 = document.getElementById("submitthemename");
		var emailInput2 = document.getElementById("submitthemeemail");
		var dateInput2 = document.getElementById("submitthemedate")
		var messageInput2 = document.getElementById("submitthememessage");
		var filter2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //checks all elements of a valid email
		
		var nameinperror2 = document.getElementById("nameerror1"); //these are linked to divs that will appear if there is an input error
		var emailinperror2 = document.getElementById("emailerror1");
		var dateinperror2 = document.getElementById("dateerror1");
		var messageinperror2 = document.getElementById("messageerror1")

		
		checkname= function(){
			if(nameInput2.value == "" ){
				nameinperror2.removeAttribute("class","errorhide"); //if there is an input error, a message will appear
				nameinperror2.setAttribute("class","erroractive")
			}
		}

		checkemail=function(){
			if(!filter2.test(emailInput2.value)){
				emailinperror2.removeAttribute("class","errorhide");
				emailinperror2.setAttribute("class","erroractive")
			}
		}


		checkdate=function(){
			if(dateInput2.value != ""){
				dateinperror2.removeAttribute("class","errorhide");
				dateinperror2.setAttribute("class","erroractive")

			}
		}
		checkmessage=function(){
			if(messageInput2.value != ""){
				messageinperror2.removeAttribute("class","errorhide");
				messageinperror2.setAttribute("class","erroractive")
		}
	}
		revealsubmit = function(){
			if((nameInput2.value != "")&&(filter2.test(emailInput2.value))&&(messageInput2.value != "")){ //the submit button will only become active once all of the inputs are filled
				submittheme.setAttribute("class","active");
			}
			else{
				submittheme.removeAttribute("class")
			}
	
				
			}
		if(nameInput2.value != null){ //prevents error if there is no form on the page
		nameInput2.addEventListener("keyup",function(){
			checkname(); revealsubmit();
		}, false
		);
		emailInput2.addEventListener("keyup",function(){
			checkemail(); revealsubmit();
		}, false
		);
		dateInput2.addEventListener("keyup",function(){
			checkdate(); revealsubmit();
		}, false
		);		
		messageInput2.addEventListener("keyup",function(){
			 checkmessage(); revealsubmit();
		}, false
		);}}); 