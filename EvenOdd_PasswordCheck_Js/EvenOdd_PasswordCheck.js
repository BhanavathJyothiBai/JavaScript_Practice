function evenOrOdd()
{
	let input=document.getElementById("box")
	let h1=document.getElementById("result")
	let number=input.value
	let length = number.length
	console.log("length of input"+number.length)
	
	 if( length == 0)
	   {
	     h1.innerText="Please Enter Number"
		 h1.style.color="red"
		 h1.style.fontSize="50px"
		 input.style.color="red"
		 input.style.backgroundColor="red"
	    }
	 else
	   {
	     if(number%2==0)
	     {
		  h1.innerText="Even Number"
		  h1.style.color="blue"
		  h1.style.fontSize="50px"
		  input.style.color="red"
		  input.style.backgroundColor="blue"

	     }
	    else 
	     {
           h1.innerText="Odd Number"
		   h1.style.color="purple"
		   h1.style.fontSize="50px"
		   input.style.color="red"
		   input.style.backgroundColor="purple"

	     }
	 }
	
}

// 2.Another Program//
   
   function password()
   {
    let inputbox=document.getElementById("input")
	let h2=document.getElementById("output")
	let password=inputbox.value
	let passLength = password.length
	console.log("length of input"+password.length)

	     if(passLength>=1 && passLength < 4)
	       {
		   
		   h2.innerText="Weak"
		   h2.style.color="red"
		   h2.style.fontSize="50px"
		   input.style.backgroundColor="red"
		   input.style.color="cyan"

		   }

        else if(passLength>=4 && passLength < 8)
	       {
		   
		   h2.innerText="Medium"
		   h2.style.color="blue"
		   h2.style.fontSize="50px"
		   input.style.color="cyan"
		   input.style.backgroundColor="blue"

		   }
		 else if(passLength>=8 && passLength <= 10)
	       {
		   
		   h2.innerText="Strong"
		   h2.style.color="green"
		   h2.style.fontSize="50px"
		   input.style.color="cyan"
		   input.style.backgroundColor="green"

		   }
		 else
	       {
		   
		   h2.innerText=" Enter Proper Password"
		   h2.style.color="hotpink"
		   h2.style.fontSize="50px"
		   input.style.color="cyan"
		   input.style.backgroundColor="hotpink"

		   }

   }
	