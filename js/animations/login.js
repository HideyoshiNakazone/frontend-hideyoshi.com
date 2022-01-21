// const inputs = document.querySelectorAll(".input");


// function addcl(){
// 	let parent = this.parentNode.parentNode;
// 	parent.classList.add("focus");
// }

// function remcl(){
// 	let parent = this.parentNode.parentNode;
// 	if(this.value == ""){
// 		parent.classList.remove("focus");
// 	}
// }

// inputs.forEach(input => {
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });

// function onSignIn(googleUser) {
// 	// Useful data for your client-side scripts:
// 	var profile = googleUser.getBasicProfile();
// 	console.log("ID: " + profile.getId()); // Don't send this directly to your server!
// 	console.log('Full Name: ' + profile.getName());
// 	console.log('Given Name: ' + profile.getGivenName());
// 	console.log('Family Name: ' + profile.getFamilyName());
// 	console.log("Image URL: " + profile.getImageUrl());
// 	console.log("Email: " + profile.getEmail());

// 	// The ID token you need to pass to your backend:
// 	// var id_token = googleUser.getAuthResponse().id_token;
// 	// postAJAX('/server/sign-in', {id_token: id_token})
// 	// .then(function(user) {
// 	// 	// The user is now signed in on the server too
// 	// 	// and the user should now have a session cookie
// 	// 	// for the whole site. 
// 	// 	document.location.href = '/dashboard/' + user.full_name
// 	// })
	
	
//   };

function loginClose() {

	let loginClose = document.querySelector(".loginClose")
	let loginContain = document.querySelector('.login-container');

	loginClose.classList.add('.deactive');
	loginContain.style.display = "none"
};