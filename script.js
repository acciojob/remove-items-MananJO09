//your JS code here. If required
	var select =document.getElementById('colorSelect');
	var removebtn=document.getElementById('btn');

	btn.addEventListener('click', function()){
		const selectedval=select.value;

		const options =select.options;
		for (let i = 0; i < options.length; i++) {
			if(options[i].value===selectedval){
				colorSelect[i].remove(i);
				break;
			}
		}
	});

