function fct_mare3(){
    
 //fct bile concurs
    var var_div=document.getElementById("div_concurs");
    var_div.onclick=function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        console.log(x.toString);
        var_div.style.backgroundColor = bgColor;
        
         var elem = document.getElementById("div_concurs");
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
  document.getElementById("cul_fundal_div").innerHTML = "Culoarea fundalului este "+theCSSprop;
        
    }   
    
    {
        let nr_bile=10;
        let deja_castig=0;
        s=setInterval (function()
                 {
        if(nr_bile<=0)
        {
            return;
        }
                 var bila_noua=document.createElement("img");
                 var_div.appendChild(bila_noua);
                 bila_noua.src="images/bila_mov.png";
                bila_noua.className="clasa_bila"
            
                 bila_noua.id="bila_concurs";
        nr_bile--;
                 bila_noua.style.left = Math.floor(Math.random()*750)+1 + "px";
                  var l=0;
                    while(l<100 || l>600)
                        l = Math.floor(Math.random()*800)+1;
        
                 bila_noua.style.left = l+ "px";
                        
                 
                 /*for (let i = 0; i < b.length; i++)
                  {
                  b[i].style.left = i*100 + "px";
                  }*/
                 
                 
                 //for (let i = 0; i < b.length; i++)
                 //b[i].onclick = function()
                 {
                 //var f_a=b[i];
                 bila_noua.xnou = 100;
                 t = setInterval (function(bila) {
                                  bila.xnou += 10;
                                if(bila.xnou>550)
                                    {
                                      bila_noua.parentElement.removeChild(bila_noua); 
                                    }
                                  bila.style.top = bila.xnou + "px";
                                  //b[i].style.left = b[i].xnou + "px";
                                                  }, 400,bila_noua)
                     
                 bila_noua.onclick = function(ev)
                 {
                 //clearInterval(t)
                 bila_noua.parentElement.removeChild(bila_noua);
                 ev.stopPropagation();
                     var castig=Math.floor(Math.random()*100);
                     if(castig%4==0 && deja_castig==0)
                     {
                         alert("Ati castigat");
                         deja_castig=1;
                         clearInterval(s);
                         var x = event.pageX;
                          var y = event.pageY;
                          var coords = "Bila castigatoare are coordonatele X: " + x + ", Y: " + y;
                          document.getElementById("coord_bila_div").innerHTML = coords;
                         
                     }
                 }
                 }
                 },3000)
        
    }
    var buton_close=document.getElementById("id_button_concurs_close");
    buton_close.onclick=function() {
        window.close(); }
    
    var buton_ultima_data=document.getElementById("ultima_data");
    buton_ultima_data.onclick = function(){
        var ultima;
        if(localStorage.ultima == undefined){
            var d = new Date();
            localStorage.ultima = d;
        }
        else{
            buton_ultima_data.value = localStorage.ultima;
            var d = new Date();
            localStorage.ultima = d;
        }
    }
   

    
 

    
    
}
window.onload=fct_mare3;
