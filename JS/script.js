function calcularMelhorPreco(){

  let precoAlcool = document.getElementById('alcool').value
  let precoGasolina = document.getElementById('gasolina').value

  if(precoAlcool != ""){
    if(precoGasolina != ""){

      //calculo


      let resultado = precoAlcool / precoGasolina
      if(resultado >= 0.7){

        //alert("Melhor utilizar gasolina")
        document.getElementById('resultado').innerHTML = "melhor utilizar Gasolina"
      }else{

        //alert("Melhor utilizar álcool")   
        document.getElementById('resultado').innerHTML = "melhor utilizar Álcool"
      }


    }else{

      alert("Preencha o preço da Gasolina")
    }

  }else{

    alert("Preencha o preço do Álcool")
  }
}