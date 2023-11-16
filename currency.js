var select = document.querySelectorAll('.currency');
var input = document.getElementById('input');
var output = document.getElementById('output');
const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
	.then((data) => data.json())
	.then((data) => {
		const entries = Object.entries(data);
		//console.log(entries);
		for(i=0; i<entries.length;i++){
			select[0].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
			select[1].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;

		}
	});

function converter(){
	var inputvalue = input.value;
	if(select[0].value != select[1].value){
		const host = 'api.frankfurter.app';
		fetch(`https://${host}/latest?amount=${inputvalue}&from=${select[0].value}&to=${select[1].value}`)
  			.then(val => val.json())
  			.then((val) => {
    		output.value= Object.values(val.rates)[0]
  		});
	}
	else{
		alert('select two different currencies');
	}
}