// find Factorial of given number
function factorial()
{
	let inputbox=document.getElementById("input")
	let button=document.getElementsByName("box")
	let h2=document.getElementById("output")
    let legend=document.getElementById("legend")
	let number=inputbox.value
	let factor=1
	
	for(let i=1; i<=number;i++)
	{
     factor*=i
	}
    legend.innerText = "Factorial of "+number
	h2.innerText=factor

}
// find square of given number
function square()
{
	let inputbox=document.getElementById("input")
	let h2=document.getElementById("output")
    let legend=document.getElementById("legend")
	// to take input from input box/user
	  let number=inputbox.value
   // find square
	 let square=number*number
   //print output
	 legend.innerText = "Square of "+number
	 h2.innerText=square
}

// find cube of given number
function cube()
{
	let inputbox=document.getElementById("input")
    let h2=document.getElementById("output")
	let legend=document.getElementById("legend")

	// to take input from input box/user
	  let number=inputbox.value
   // find square
	 let cube=number*number*number
   //print output
	 legend.innerText = "Cube of "+number
	 h2.innerText=cube

}

/* 2.Another program solution*/


 function percentage()
		  {
			  let inputbox=document.getElementById("percentInput")
			  let legend=document.getElementById("percentLegend")
			  let label=document.getElementById("percentOutput")
			  let percentage=inputbox.value
			
			  if(percentage >=81 && percentage<=100)
			  {
				label.innerText =  " Your grade is A"
			  }
			  else if(percentage >=61 && percentage<81)
			  {
				  label.innerText = " your grade is B "
			  }
			  else if(percentage >35 && percentage<61)
			  {
				 label.innerText = " your grade is C "
			  }
			  else
			  {
				  label.innerText = "congratulations you are failed!!!"
			  
			  }
			
		}