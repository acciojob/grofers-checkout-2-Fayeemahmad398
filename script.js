//your code here

 
//your code here
 const table = document.querySelector('table');
 const lastRow = document.createElement('tr');
 // const prices = document.querySelectorAll('[data-ns-test=price]');
 let sum = 0;
 // for(let i = 0; i < prices.length; i++) {
 //  sum += parseInt(prices[i].textContent);
 // }

// const allRows=document.getElementsByTagName("tr");

for(let i=0;i<allRows.length;i++)
	{
		let eachrow=allRows[i].lastChild;
		sum+=parseInt(eachrow.textContent);
		
	}

 const child = document.createElement("td");
 child.setAttribute('data-ns-test', 'grandTotal');
 
 
 child.textContent = sum;
 lastRow.appendChild(child);
 table.appendChild(lastRow);