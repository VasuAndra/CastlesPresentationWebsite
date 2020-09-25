function fct_mare2(){
    
 //fct buton concurs open
    
        var x=document.getElementById("id_button_concurs_open");
          x.onclick=function funct() {
            window.open("concurs.html");
        }
          
          
var buton_afis=document.getElementById("id_button2");
    buton_afis.onclick=function(){
        var n=document.getElementById("nume_input").value;
        var p=document.getElementById("prenume_input").value;
        var v="";
        var v1=document.getElementById("varsta_sub25_input");
        var v2=document.getElementById("varsta_2535_input");
        var v3=document.getElementById("varsta_peste35_input");
        
        if (v1.checked)
        {
            v=v1.value;
        }
        else
            if(v2.checked)
            {
                v=v2.value;
            }
        else
            if(v3.checked)
               {
                 v=v3.value;
               }
        
        var c1=document.getElementById("neuschwanstein_input");
        var c2=document.getElementById("babelsberg_input");
        var c3=document.getElementById("hohenzollern_input");
        var a1="";
        var a2="";
        var a3="";
    if (c1.checked)
    {
        a1=c1.value;
    }
     if (c2.checked) 
     {
         a2=c2.value;
     }
    if (c3.checked) 
        a3=c3.value; 
        
            
        document.getElementById("div_inputuri").innerHTML="<br><h2>Datele introduse sunt </h2><b>"+n+"<br>"+p+"</b><br>"+v+"<br>"+a1+"<br>"+a2+"<br>"+a3+"<br>";
        
        alert("Datele introduse sunt \n"+n+"\n"+p+"\n"+v+"\n"+a1+"\n"+a2+"\n"+a3);
        
    }

          
}
window.onload=fct_mare2;
