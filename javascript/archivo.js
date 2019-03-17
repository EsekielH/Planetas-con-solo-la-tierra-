var usuario = prompt ("Comprueba tu peso, curioso! Cual es tu peso?");
     var planeta = parseInt(prompt("Elige el planeta en el que quieres saber tu peso, adelante!. \n 1 para Mercurio. \n 2 para Venus. \n 3 para Marte. \n 4 para Jupiter. \n 5 para Saturno. \n 6 para Urano. \n 7 para Neptuno. \n 8 para Pluton. \n 9 para la luna"));
     var peso = parseInt (usuario);
     var g_mercurio = 3.7;
     var g_venus = 8.87;
     var g_luna = 1.62;
     var g_jupiter = 24.8;
     var g_marte = 3.7;
     var g_tierra = 9.8;
     var g_jupiter = 24.8;
     var g_saturno = 10.44;
     var g_urano = 8.7;
     var g_neptuno = 11.15;
     var g_pluton = 0.62;
     var peso_final;
     if (planeta == 1) {
         peso_final = peso * g_mercurio / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Mercurio es de <strong>" + peso_final + " Kilos</strong>");
     }
     else if (planeta == 2) {
         peso_final = peso * g_venus / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Venus es de <strong>" + peso_final + " Kilos</strong>"); 
     }
     else if (planeta == 3) {
         peso_final = peso * g_marte / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Marte es de <strong>" + peso_final + " Kilos</strong>");
     }
     else if (planeta == 4){
         peso_final = peso * g_jupiter / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Jupiter es de <strong>" + peso_final + " Kilos</strong>");
     }
     else if (planeta == 5){
         peso_final = peso * g_saturno / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Saturno es de <strong>" + peso_final + " Kilos</strong>");
     }
     else if (planeta == 6){
         peso_final = peso * g_urano / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Urano es de <strong>" + peso_final + " Kilos</strong>");
     }
     else if (planeta == 7){
         peso_final = peso * g_neptuno / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Neptuno es de <strong>" + peso_final + " Kilos</strong>");
     }
     else if (planeta == 8){
         peso_final = peso * g_pluton / g_tierra;
         peso_final = parseInt(peso_final);
         document.write("Tu peso en Plutón es de <strong>" + peso_final + " Kilos</strong>");
     }
     else if (planeta == 9) {
        peso_final = peso * g_luna / g_tierra;
        peso_final = parseInt(peso_final);
        document.write("Tu peso en la luna es de <strong>" + peso_final + " Kilos</strong>"); 
     }
     else {
         peso_final = parseInt("peso_final");
         document.write ("Dígito incorrecto");
     }
