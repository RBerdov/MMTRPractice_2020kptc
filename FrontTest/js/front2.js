document.getElementById("addlist").addEventListener("click", function(event) {
event.preventDefault();


	document.getElementById("addlist").style.display = 'none';
	document.getElementById("listname").style.display = 'flex';


});

document.getElementById("listname").addEventListener("keydown", function(event){
	if (event.keyCode === 13) {
		ln = document.getElementById("listname");
		let p = document.getElementById("tmp1");
	let pe = p.cloneNode(true).content;
	pe.querySelector('.listinput').id = ln.value;
	pe.querySelector('.listlabel').textContent = ln.value; 
	let pee = document.getElementById("listcontainer");
	pee.appendChild(pe);
	mas2 = JSON.parse(localStorage.getItem('lists'));
	if (!mas2) {
		mas2 = new Array();
	}
	 listarr = new Array();
	 mas2.push(listarr);
	 let cl = ln.value;
	 console.log(cl);
	 document.getElementById(cl).addEventListener("keydown", function(event){
	 	if (event.keyCode === 13) {
	 		let b = document.getElementById("tmp2");
	 		li = document.getElementById(cl);
		let be = b.cloneNode(true).content;
		be.querySelector('.listelement__span').id = li.value;
		be.querySelector('.listelement__text').textContent = li.value; 
		let ll = li.value;
		let bee = li.closest('.tmpnode');
		bee.appendChild(be);

		$(".drop").droppable({
        drop: function(event, ui) {
        	$(".listelement").css({"left" : "0", "top" : "0", "position" : "inherit"});
          $(this).append(ui.draggable);
        }
     	 });
      	$(".drag").draggable();

  
			document.getElementById(ll).addEventListener('click', function(event){
				let s = document.getElementById(ll).closest('.listelement');
				col = window.getComputedStyle( s ,null).getPropertyValue('background-color');
				console.log(col);
				if (col === 'rgb(150, 150, 150)') {
					s.style.background = 'rgb(255, 186, 0)';
					s.style.color = 'rgb(0, 0, 0)';
					s.style.textDecoration = 'none';
				}
				if (col === 'rgb(255, 186, 0)') {
					s.style.background = 'rgb(150, 150, 150)';
					s.style.color = 'rgb(255, 255, 255)';
					s.style.textDecoration = 'line-through';
				}

		
			});

	var newelement = {

		
		element: li.value,
		


	}
	listarr.push(newelement);
	localStorage.setItem('lists' , JSON.stringify(mas2));
	 	}

	 });

	localStorage.setItem(ln.value , JSON.stringify(listarr));
	ln.style.display = 'none';
	document.getElementById("addlist").style.display = 'flex';

	
 	

	}
});

