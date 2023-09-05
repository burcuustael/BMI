function CalculateBMI(){

    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var result = weight/Math.pow(height,2);

    document.getElementById('result').innerText = result.toFixed(2);

    if(result<18.5){

        document.getElementById('result-statu').innerText = "Under Weight";
        document.getElementById('result-statu').style.color='#2196f3';
    }

    if()


}