//capturing the data

		document.getElementById("theForm").addEventListener("submit", function(event){
			event.preventDefault(); //prevents the form from submiting normally

			//capturing the values
			const firstName=document.getElementById('firstName').value;
			const secondName=document.getElementById('secondName').value;
			const email=document.getElementById('email').value;
			const iNumber=document.getElementById('iNumber').value;
			const password=document.getElementById("password").value;

			//Displaying the captured info
			console.log('The First Name is', firstName);
			console.log('The Second Name is:', secondName);
			console.log('The User Email Address is', email);
			console.log("Password:", password);

		});