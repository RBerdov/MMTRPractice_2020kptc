
mas = JSON.parse(localStorage.getItem('boards'));
if (mas != null){
if (localStorage.key = 'boards'){

	mas.forEach(function(item){
	var p = document.getElementById("tmp1");
	let pe = p.cloneNode(true).content;
	pe.querySelector('#tmpspan').textContent = item.name; 
	let pee = document.getElementById("main__left");
	pee.appendChild(pe);
	
	})
}

else{


};
};


document.getElementById("show_newboard").addEventListener("click", function(event) {
event.preventDefault();
	
	document.getElementById("newboard").style.display = 'flex';


});
document.getElementById("newboard__cancel").addEventListener("click", function(event) {
event.preventDefault();
	document.getElementById("Board_name").value = "";
	document.getElementById("newboard").style.display = 'none';


});
document.getElementById("newboard__save").addEventListener("click", function(event) {
event.preventDefault();
var p = document.getElementById("tmp1");
	let pe = p.cloneNode(true).content;
	pe.querySelector('#tmpspan').textContent = document.getElementById("Board_name").value; 
	pe.Id = document.getElementById("Board_name").value;
	let pee = document.getElementById("main__left");
	pee.appendChild(pe);
	mas = JSON.parse(localStorage.getItem('boards'));
	if (!mas) {
		mas = new Array();
	}

	var newboard = {

		
		name: document.getElementById("Board_name").value,
		


	}

	mas.push(newboard);
	localStorage.setItem('boards' , JSON.stringify(mas));
	
 	


});

