function fct_mare(){
//function functie_1()


var var1=document.getElementById("image_babelsberg1");
//alert(var1); 
var1.style.width="500px";
var1.style.height="500px";
var1.style.border="dotted pink thick";
var1.onclick=function gfunctie_1(){alert("Click pe poza si se va modifica.");
                          var1.onclick=function h(){
											var1.src="pics15.jpg";
											var1.style.border="solid green 3px";}
						  }



//function functie_2()

	var aux_b=document.getElementById("id_button1");
	var aux_t=document.getElementById("id_text1"); 
	var aux_sect=document.getElementById("id_section1");
	/*aux_b.onclick=function(){
							 alert(aux_t.value);
							 }*/
	aux_b.onclick=function() { 
					var aux_bn=document.createElement("input");
					aux_bn.type="button";
					aux_bn.value=aux_t.value;
					aux_bn.style.color="red";
					aux_bn.onclick=function(){
                          aux_sect.removeChild(aux_bn)
											}
					aux_sect.appendChild(aux_bn);	
								}
    
								
	

}
window.onload=fct_mare;
