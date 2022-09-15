function Mandar(){
    var gp1 = document.form1.gp1.value; 
    var gp2 = document.form1.gp2.value;
    var gp3 = document.form1.gp3.value;

    document.write('<h1>')
    document.write('Encerrando Check-in MIA ');
    document.write('</h1>')
    document.write('<h2>')
    document.write(' Carimbos - ' + gp1+ '<br>');
    document.write(' Tags Azuis - ' + gp2+ '<br>');
    document.write(' Tags Amarelas - ' + gp3+ '<br>');
    document.write('</h2>')
    document.write('<a href="http://127.0.0.1:5500/Inicio/index.html"><button>INICIO</button></a>')
}