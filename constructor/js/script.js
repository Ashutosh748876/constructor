let userBudget = Number(localStorage.getItem("userBudget")) || 0;

document.getElementById("budget").innerHTML =
"₹" + Number(userBudget).toLocaleString();

let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];



function showData(){


let total=0;


let rows="";


expenses.forEach(e=>{


total += Number(e.amount);


rows += `

<tr>

<td>${e.date}</td>
<td>${e.category}</td>
<td>${e.desc}</td>
<td>₹${e.amount}</td>

</tr>

`;

});


document.getElementById("list").innerHTML=rows;


document.getElementById("total").innerHTML=
"₹"+total.toLocaleString();



document.getElementById("remain").innerHTML=
"₹"+(userBudget-total).toLocaleString();


}



function addExpense(){


let data={

date:date.value,
category:category.value,
desc:desc.value,
amount:amount.value

};



if(data.amount=="")
{
alert("Enter amount");
return;
}



expenses.push(data);



localStorage.setItem(
"expenses",
JSON.stringify(expenses)
);



showData();


}



showData();