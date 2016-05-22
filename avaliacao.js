	var resultado = {"log":function(x){
		document.getElementById('resultado').innerHTML +=("\r\n"+x);
	}};
	
	function init(e){
		
		

		document.getElementById('ex1').addEventListener('click',ex1);
		document.getElementById('ex2').addEventListener('click',ex2);
		document.getElementById('ex3').addEventListener('click',ex3);
		document.getElementById('ex4').addEventListener('click',ex4);
		document.getElementById('ex6').addEventListener('click',ex6);

		document.getElementById('soma').addEventListener('click',ex5);
		document.getElementById('menos').addEventListener('click',ex5);
		document.getElementById('mult').addEventListener('click',ex5);
		document.getElementById('divi').addEventListener('click',ex5);

		document.getElementById('limpa').addEventListener('click',limpaResultado);


	}

	window.addEventListener('load',init);

	//Funções dos exercícios

	function ex1() {
		for (var i = 0; i<=2000; i++)
		{
			if (i%2==1)
				resultado.log(i);
		}
	}
	function ex2() {
		var soma = 0;
		for (var i = 1; i<=100; i++)
			soma+= i;
		resultado.log(soma);
	}
	function ex3() {
		var pessoas = ['João', 'José', 'Maria','Sebastião','Antônio'];
		for(var i in pessoas) {
			if(pessoas[i].length==4)
				resultado.log(pessoas[i]);
		}
	}
	function ex4() {
		resultado.log((Math.random()*100%50).toFixed());
	}
	function ex5(e) {
		var f = document.getElementById('frm');
		var termos = f.getElementsByClassName('valor');
		var vl1 = termos[0].value;
		var vl2 = termos[1].value;

		if (e.target.id == 'soma')
		{	
			resultado.log('Soma de '+vl1+' com '+vl2+' = '+(parseFloat(vl1)+parseFloat(vl2)));		
		}
		if (e.target.id == 'menos')
		{
			resultado.log('Diferença de '+vl1+' com '+vl2+' = '+(parseFloat(vl1)-parseFloat(vl2)));
		}
		if (e.target.id == 'mult')
		{
			resultado.log('Multiplicação de '+vl1+' por '+vl2+' = '+(parseFloat(vl1)*parseFloat(vl2)));
		}
		if (e.target.id == 'divi')
		{
			resultado.log('Divisão de '+vl1+' por '+vl2+' = '+(parseFloat(vl1)/parseFloat(vl2)));
		}

	}
	function ex6() {
		resultado.log(retornaStringEmOrdem("Marcelo"));
	}
	function retornaStringEmOrdem(str) {
		var a = [];
		for (var i in str) 
			a.push(str[i]);
		a.sort(function(z, w){return z.localeCompare(w,z.caseFirst);});
		var resultado = '';
		for (var x in a) 
			resultado+=a[x];		
		return resultado;
	}
	function limpaResultado() {
		document.getElementById('resultado').innerHTML = '';
	}

