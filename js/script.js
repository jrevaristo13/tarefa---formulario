
function media(){
    let nota1 = parseFloat(document.getElementById("campoA").value);
    let nota2 = parseFloat(document.getElementById("campoB").value);

   

    if(nota2 > nota1)
      alert("Esta Correto Parabens");
     else
      alert("Incorreto Digite o Campo B maior que o  A ");
};

