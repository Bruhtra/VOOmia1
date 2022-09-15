function Mandar(){
    var pri = document.form1.pri.value;
    var gp1 = document.form1.gp1.value; 
    var gp2 = document.form1.gp2.value;
    var gp3 = document.form1.gp3.value;
    var gp4 = document.form1.gp4.value;
    var gp5 = document.form1.gp5.value;
    var gp6 = document.form1.gp6.value;
    var total = document.form1.ttlpax.value;
    var enc = document.form1.enc.value;

    document.write('<h1>')
    document.write(' 8190 MIA ');
    document.write('</h1>')
    document.write('<h2>')
    document.write(' Prioridade - ' + pri + '<br>');
    document.write(' G1 - ' + gp1+ '<br>');
    document.write(' G2 - ' + gp2+ '<br>');
    document.write(' G3 - ' + gp3+ '<br>');
    document.write(' G4 - ' + gp4+ '<br>');
    document.write(' G5 - ' + gp5+ '<br>');
    document.write(' G6 - ' + gp6+ '<br>');
    document.write(' Total de PAX - ' + total+ '<br>');
    document.write(' Termino -  ' + enc+ '<br>');
    document.write('</h2>')

    document.write('<a href="http://127.0.0.1:5500/Inicio/index.html"><button>INICIO</button></a>')
}