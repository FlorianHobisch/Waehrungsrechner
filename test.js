        var waehrung = {
            USD: 1.1402,
            JPY: 124.0110,
            CHF: 1.1313,
            RUB: 75.8590,
        }
            
        function myFunktion ()
        {   
            var alpha = document.getElementById("text1").value;
            var test = document.getElementById("choice").value;
           
            
            
            if (isNaN(alpha) == "true"){
                
                alert("Bitte eine Zahl eingeben");
                
                } else {
            
                document.getElementById("result").value = alpha * waehrung[test]
                }    
            
              
            
            if (test =='USD')
                {
            
                 document.getElementById("rechnungstabelle").innerHTML = ("<table><tr><th>EUR</th><th>USD</th></tr><tr><td>1</td><td>1,14</td> </tr><tr><td>5</td><td>5,70</td></tr><tr><td>10</td><td>11,4</td> </tr><tr><td>50</td><td>57</td></tr><tr><td>100</td><td>114</td> </tr><tr><td>500</td><td>570</td></tr></table>");
 
                }
            
            if (test =='JPY')
                {
            
                document.getElementById("rechnungstabelle").innerHTML = ("<table><tr><th>EUR</th><th>JPY</th></tr><tr><td>1</td><td>124,01</td> </tr><tr><td>5</td><td>620,05</td></tr><tr><td>10</td><td>1240,1</td> </tr><tr><td>50</td><td>6200,5</td></tr><tr><td>100</td><td>12401</td> </tr><tr><td>500</td><td>62005</td></tr></table>");
 
                }
            
            if (test =='CHF')
                {
            
                document.getElementById("rechnungstabelle").innerHTML = ("<table><tr><th>EUR</th><th>CHF</th></tr><tr><td>1</td><td>1,13</td> </tr><tr><td>5</td><td>5,65</td></tr><tr><td>10</td><td>11,3</td> </tr><tr><td>50</td><td>56,5</td></tr><tr><td>100</td><td>113</td> </tr><tr><td>500</td><td>565</td></tr></table>");
 
                }
            
            if (test =='RUB')
                {
            
                document.getElementById("rechnungstabelle").innerHTML = ("<table><tr><th>EUR</th><th>RUB</th></tr><tr><td>1</td><td>75,85</td> </tr><tr><td>5</td><td>379,25</td></tr><tr><td>10</td><td>758,5</td> </tr><tr><td>50</td><td>3792,5</td></tr><tr><td>100</td><td>7585</td> </tr><tr><td>500</td><td>37925</td></tr></table>");
 
                }
     
        }

        var umrechnung = {
            mm: 1,
            cm: 0.1,
            m: 0.001,
            Yard: 0.00109361,
            Fuß: 0.00328084,
        }

        
        function rechnen (){
            
            var text1 = document.getElementById("text1").value;
            var text2 = document.getElementById("text2").value;
            var choice1 = document.getElementById("choice1").value;
            var choice2 = document.getElementById("choice2").value;
            
  
                document.getElementById("text2").value = text1 / umrechnung[choice1] * umrechnung[choice2]
            
        if (choice1 == choice2){
            
            alert("Fehler - Bitte eine andere Auswahl treffen.")

                
            }
                
            
            
        }
        
        



    