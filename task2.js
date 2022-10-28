function Getanswer(sender){
    let a=document.getElementById('name1').value;
    let Z=document.getElementById('name2').value;
    if ((a!=0)&&(a>0) && (Z!=0) && (Z>0)){
        a=Number(a);
        Z=Number(Z);
        let C=((((Z+(Z/(Z**2+a**2))+(a**3)*(Z+2.3)*(Z**2+a**2)-a)**5)-Z**(a*(Z**2+a**2))+Z*Math.log(Z))**1.5);
        let B=(((a**2)+(C**2))*(C-(a**2)-(Z**2)));
       C=String(C);
       B=String(B);
        document.getElementById('result').innerHTML=C;
        document.getElementById('result2').innerHTML=B;}
    else if (Z<0){
        document.getElementById('result').innerHTML="";
        document.getElementById('result2').innerHTML="";
        alert("Значение Z не может быть отрицательным"); 
    }
    else if (a<0){
        document.getElementById('result').innerHTML="";
        document.getElementById('result2').innerHTML="";
        alert("Значение a не может быть отрицательным");
    }
    else if (Z==0){
        document.getElementById('result').innerHTML="";
        document.getElementById('result2').innerHTML="";
        alert("Значение Z не может равняться нулю")
    }
    else if (a==0){
        document.getElementById('result').innerHTML="";
        document.getElementById('result2').innerHTML="";
        alert("Значение a не может равняться нулю")

    }
    else {
        document.getElementById('result').innerHTML="";
        document.getElementById('result2').innerHTML="";
        alert('Введите значения')
    }   
}
function Getanswer2(sender){
    let x=document.getElementById('namex').value;
    let y=document.getElementById('namey').value;
    if ((x!=0)&&(x>0)&&(x!=1)&&(y==1)){
        x=Number(x);
        y=Number(y);
        let Y=(Math.log(Math.abs(x+1)));
       Y=String(Y);
        document.getElementById('result22').innerHTML=Y;}
    else if (y<0){
        document.getElementById('result22').innerHTML="";
        alert("Значение k не может быть отрицательным"); 
    }
    else if (y=2){
        x=Number(x);
        y=Number(y);
        let Y=((Math.log(Math.abs(x-1)))/(Math.log(Math.abs(x+1))));
       Y=String(Y);
        document.getElementById('result22').innerHTML=Y;
    }
    else if (y>2){
        x=Number(x);
        y=Number(y);
        let Y=((Math.E(Math.abs(x))));
       Y=String(Y);
        document.getElementById('result22').innerHTML=Y;
    }
    else if (x<0){
        document.getElementById('result22').innerHTML="";
        alert("Значение x не может быть отрицательным");
    }
    else if (y==0){
        document.getElementById('result22').innerHTML="";
        alert("Значение x не может равняться нулю")

    }
    else if (x==1){
        document.getElementById('result22').innerHTML="";
        alert("Значение x не может равняться одному")
    }
    else if (x==0){
        document.getElementById('result22').innerHTML="";
        alert("Значение a не может равняться нулю")
    }
    else {
        document.getElementById('result').innerHTML="";
        document.getElementById('result2').innerHTML="";
        alert('Введите значения')
    }
    
}
function Getanswer3(sender){
    let i=1.40;
    let x=1.5+(0.1*i);
    let S=(((x**2)-(3*x)+2)/(Math.sqrt(2*(x**2)-1)))
    document.getElementById('results').innerHTML=S;} 
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// let second=[0, 1, false, 2, undefined, '', 3, null];
// function secondfunc(sender){
//     b=second.filter(Number);
//     document.getElementById('array2').innerHTML = b;
