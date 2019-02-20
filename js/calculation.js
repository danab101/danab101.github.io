$( document ).ready(function() { 

	$("#z1").css("font-size","0px");
	$("#z2").css("font-size","0px");
	$("#z3").css("font-size","0px");
	$("#z4").css("font-size","0px");
	$("#z5").css("font-size","0px");
	$("#z6").css("font-size","0px");
	$("#z7").css("font-size","0px");
	$("#z8").css("font-size","0px");
	$("#z9").css("font-size","0px");
	
	$("#spanid1").click(function() {						 
		var a1 = $("#a1").html();
		var a2 = $("#a2").html();
		var a3 = $("#a3").html();
		var a4 = $("#a4").html();
		var a5 = $("#a5").html();
		var a6 = $("#a6").html();
		var a7 = $("#a7").html();
		var a8 = $("#a8").html();
		var a9 = $("#a9").html();
		
		if($( "#spanid1" ).hasClass( "add-ic" )){
			$("#calculation1").addClass("selected-row");
			$("#spanid1").removeClass("add-ic");  
			$("#spanid1").addClass("close-ic");
			$("#spanid1").html('X');
			var x1= (parseFloat($("#z1").html()) + parseFloat(a1));
			$("#z1").html(x1.toFixed(2));
			var x2= (parseFloat($("#z2").html()) + parseFloat(a2));
			$("#z2").html(x2.toFixed(2));
			var x3= (parseFloat($("#z3").html()) + parseFloat(a3));
			$("#z3").html(x3.toFixed(2));
			var x4= (parseFloat($("#z4").html()) + parseFloat(a4));
			$("#z4").html(x4.toFixed(2));
			var x5= (parseFloat($("#z5").html()) + parseFloat(a5));
			$("#z5").html(x5.toFixed(2));
			var x6= (parseFloat($("#z6").html()) + parseFloat(a6));
			$("#z6").html(x6.toFixed(2));
			var x7= (parseFloat($("#z7").html()) + parseFloat(a7));
			$("#z7").html(x7.toFixed(2));
			var x8= (parseFloat($("#z8").html()) + parseFloat(a8));
			$("#z8").html(x8.toFixed(2));
			var x9= (parseFloat($("#z9").html()) + parseFloat(a9));
			$("#z9").html(x9.toFixed(2));
			var i;
			for( i=1; i<=9; i++)
			{
				$("#a"+i).css("font-size","18px");
			}
			if(x1 == 0 && x2 == 0 && x3 == 0&& x4 == 0 && x5 == 0 && x6 == 0 && x7 == 0 && x8 == 0 && x9 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation1").removeClass("selected-row");
			 $("#spanid1").removeClass("close-ic");  
			 $("#spanid1").addClass("add-ic");
			 $("#spanid1").html('+');
			 
			var x1= (parseFloat($("#z1").html()) - parseFloat(a1));
			$("#z1").html(x1.toFixed(2));
			var x2= (parseFloat($("#z2").html()) - parseFloat(a2));
			$("#z2").html(x2.toFixed(2));
			var x3= (parseFloat($("#z3").html()) - parseFloat(a3));
			$("#z3").html(x3.toFixed(2));
			var x4= (parseFloat($("#z4").html()) - parseFloat(a4));
			$("#z4").html(x4.toFixed(2));
			var x5= (parseFloat($("#z5").html()) - parseFloat(a5));
			$("#z5").html(x5.toFixed(2));
			var x6= (parseFloat($("#z6").html()) - parseFloat(a6));
			$("#z6").html(x6.toFixed(2));
			var x7= (parseFloat($("#z7").html()) - parseFloat(a7));
			$("#z7").html(x7.toFixed(2));
			var x8= (parseFloat($("#z8").html()) - parseFloat(a8));
			$("#z8").html(x8.toFixed(2));
			var x9= (parseFloat($("#z9").html()) - parseFloat(a9));
			$("#z9").html(x9.toFixed(2));
			for(i=1; i<=9; i++)
			{
				$("#a"+i).css("font-size","0px");
			}
			if(x1 == 0 && x2 == 0 && x3 == 0&& x4 == 0 && x5 == 0 && x6 == 0 && x7 == 0 && x8 == 0 && x9 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
    });   
	
	$("#spanid2").click(function() { 
		var a10 = $("#a10").html();
		var a11 = $("#a11").html();
		var a12 = $("#a12").html();
		var a13 = $("#a13").html();
		var a14 = $("#a14").html();
		var a15 = $("#a15").html();
		var a16 = $("#a16").html();
		var a17 = $("#a17").html();
		var a18 = $("#a18").html();
		if($( "#spanid2" ).hasClass( "add-ic" )){
			$("#calculation2").addClass("selected-row");
			$("#spanid2").removeClass("add-ic");  
			$("#spanid2").addClass("close-ic");
			$("#spanid2").html('X');
			var x10 = (parseFloat($("#z1").html()) + parseFloat(a10) );
			$("#z1").html(x10.toFixed(2));
			var x11 = (parseFloat($("#z2").html()) + parseFloat(a11) );
			$("#z2").html(x11.toFixed(2));
			var x12 = (parseFloat($("#z3").html()) + parseFloat(a12) );
			$("#z3").html(x12.toFixed(2));
			var x13 = (parseFloat($("#z4").html()) + parseFloat(a13) );
			$("#z4").html(x13.toFixed(2));
			var x14 = (parseFloat($("#z5").html()) + parseFloat(a14) );
			$("#z5").html(x14.toFixed(2));
			var x15 = (parseFloat($("#z6").html()) + parseFloat(a15) );
			$("#z6").html(x15.toFixed(2));
			var x16 = (parseFloat($("#z7").html()) + parseFloat(a16) );
			$("#z7").html(x16.toFixed(2));
			var x17 = (parseFloat($("#z8").html()) + parseFloat(a17) );
			$("#z8").html(x17.toFixed(2));
			var x18 = (parseFloat($("#z9").html()) + parseFloat(a18) );
			$("#z9").html(x18.toFixed(2));
			for(i=10; i<=18; i++)
			{
				$("#a"+i).css("font-size","18px");
			}
			if(x10 == 0 && x11 == 0 && x12 == 0 && x13 == 0 && x14 == 0 && x15 == 0 && x16 == 0 && x17 == 0 && x18 == 0 ){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation2").removeClass("selected-row");
			 $("#spanid2").removeClass("close-ic");  
			 $("#spanid2").addClass("add-ic");
			 $("#spanid2").html('+');
			
			var x10 = (parseFloat($("#z1").html()) - parseFloat(a10) );
			$("#z1").html(x10.toFixed(2));
			var x11 = (parseFloat($("#z2").html()) - parseFloat(a11) );
			$("#z2").html(x11.toFixed(2));
			var x12 = (parseFloat($("#z3").html()) - parseFloat(a12) );
			$("#z3").html(x12.toFixed(2));
			var x13 = (parseFloat($("#z4").html()) - parseFloat(a13) );
			$("#z4").html(x13.toFixed(2));
			var x14 = (parseFloat($("#z5").html()) - parseFloat(a14) );
			$("#z5").html(x14.toFixed(2));
			var x15 = (parseFloat($("#z6").html()) - parseFloat(a15) );
			$("#z6").html(x15.toFixed(2));
			var x16 = (parseFloat($("#z7").html()) - parseFloat(a16) );
			$("#z7").html(x16.toFixed(2));
			var x17 = (parseFloat($("#z8").html()) - parseFloat(a17) );
			$("#z8").html(x17.toFixed(2));
			var x18 = (parseFloat($("#z9").html()) - parseFloat(a18) );
			$("#z9").html(x18.toFixed(2));
			 for( i=10; i<=18; i++)
			{
				$("#a"+i).css("font-size","0px");
			}
			if(x10 == 0 && x11 == 0 && x12 == 0 && x13 == 0 && x14 == 0 && x15 == 0 && x16 == 0 && x17 == 0 && x18 == 0 ){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}
		});
	
		$("#spanid3").click(function() { 
		var b1 = $("#b1").html();
		var b2 = $("#b2").html();
		var b3 = $("#b3").html();
		var b4 = $("#b4").html();
		var b5 = $("#b5").html();
		var b6 = $("#b6").html();
		var b7 = $("#b7").html();
		var b8 = $("#b8").html();
		var b9 = $("#b9").html();
		if($( "#spanid3" ).hasClass( "add-ic" )){
			$("#calculation3").addClass("selected-row");
			$("#spanid3").removeClass("add-ic");  
			$("#spanid3").addClass("close-ic");
			$("#spanid3").html('X');
			var y1= (parseFloat($("#z1").html()) + parseFloat(b1));
			$("#z1").html(y1.toFixed(2));
			var y2= (parseFloat($("#z2").html()) + parseFloat(b2));
			$("#z2").html(y2.toFixed(2));
			var y3= (parseFloat($("#z3").html()) + parseFloat(b3));
			$("#z3").html(y3.toFixed(2));
			var y4= (parseFloat($("#z4").html()) + parseFloat(b4));
			$("#z4").html(y4.toFixed(2));
			var y5= (parseFloat($("#z5").html()) + parseFloat(b5));
			$("#z5").html(y5.toFixed(2));
			var y6= (parseFloat($("#z6").html()) + parseFloat(b6));
			$("#z6").html(y6.toFixed(2));
			var y7= (parseFloat($("#z7").html()) + parseFloat(b7));
			$("#z7").html(y7.toFixed(2));
			var y8= (parseFloat($("#z8").html()) + parseFloat(b8));
			$("#z8").html(y8.toFixed(2));
			var y9= (parseFloat($("#z9").html()) + parseFloat(b9));
			$("#z9").html(y9.toFixed(2));
			 for( i=1; i<=9; i++)
			{
				$("#b"+i).css("font-size","18px");
			}
			if(y1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation3").removeClass("selected-row");
			 $("#spanid3").removeClass("close-ic");  
			 $("#spanid3").addClass("add-ic");
			 $("#spanid3").html('+');
			 var y1= (parseFloat($("#z1").html()) - parseFloat(b1));
			$("#z1").html(y1.toFixed(2));
			var y2= (parseFloat($("#z2").html()) - parseFloat(b2));
			$("#z2").html(y2.toFixed(2));
			var y3= (parseFloat($("#z3").html()) - parseFloat(b3));
			$("#z3").html(y3.toFixed(2));
			var y4= (parseFloat($("#z4").html()) - parseFloat(b4));
			$("#z4").html(y4.toFixed(2));
			var y5= (parseFloat($("#z5").html()) - parseFloat(b5));
			$("#z5").html(y5.toFixed(2));
			var y6= (parseFloat($("#z6").html()) - parseFloat(b6));
			$("#z6").html(y6.toFixed(2));
			var y7= (parseFloat($("#z7").html()) - parseFloat(b7));
			$("#z7").html(y7.toFixed(2));
			var y8= (parseFloat($("#z8").html()) - parseFloat(b8));
			$("#z8").html(y8.toFixed(2));
			var y9= (parseFloat($("#z9").html()) - parseFloat(b9));
			$("#z9").html(y9.toFixed(2));
			for( i=1; i<=9; i++)
			{
				$("#b"+i).css("font-size","0px");
			}
			if(y1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
    });   
	
	$("#spanid4").click(function() { 
		var b10 = $("#b10").html();
		var b11 = $("#b11").html();
		var b12 = $("#b12").html();
		var b13 = $("#b13").html();
		var b14 = $("#b14").html();
		var b15 = $("#b15").html();
		var b16 = $("#b16").html();
		var b17 = $("#b17").html();
		var b18 = $("#b18").html();
		if($( "#spanid4" ).hasClass( "add-ic" )){
			$("#calculation4").addClass("selected-row");
			$("#spanid4").removeClass("add-ic");  
			$("#spanid4").addClass("close-ic");
			$("#spanid4").html('X');
			var y10 = (parseFloat($("#z1").html()) + parseFloat(b10) );
			$("#z1").html(y10.toFixed(2));
			var y11 = (parseFloat($("#z2").html()) + parseFloat(b11) );
			$("#z2").html(y11.toFixed(2));
			var y12 = (parseFloat($("#z3").html()) + parseFloat(b12) );
			$("#z3").html(y12.toFixed(2));
			var y13 = (parseFloat($("#z4").html()) + parseFloat(b13) );
			$("#z4").html(y13.toFixed(2));
			var y14 = (parseFloat($("#z5").html()) + parseFloat(b14) );
			$("#z5").html(y14.toFixed(2));
			var y15 = (parseFloat($("#z6").html()) + parseFloat(b15) );
			$("#z6").html(y15.toFixed(2));
			var y16 = (parseFloat($("#z7").html()) + parseFloat(b16) );
			$("#z7").html(y16.toFixed(2));
			var y17 = (parseFloat($("#z8").html()) + parseFloat(b17) );
			$("#z8").html(y17.toFixed(2));
			var y18 = (parseFloat($("#z9").html()) + parseFloat(b18) );
			$("#z9").html(y18.toFixed(2));
			 for( i=10; i<=18; i++)
			{
				$("#b"+i).css("font-size","18px");
			}
			if(y10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation4").removeClass("selected-row");
			 $("#spanid4").removeClass("close-ic");  
			 $("#spanid4").addClass("add-ic");
			 $("#spanid4").html('+');
			 var y10 = (parseFloat($("#z1").html()) - parseFloat(b10) );
			$("#z1").html(y10.toFixed(2));
			var y11 = (parseFloat($("#z2").html()) - parseFloat(b11) );
			$("#z2").html(y11.toFixed(2));
			var y12 = (parseFloat($("#z3").html()) - parseFloat(b12) );
			$("#z3").html(y12.toFixed(2));
			var y13 = (parseFloat($("#z4").html()) - parseFloat(b13) );
			$("#z4").html(y13.toFixed(2));
			var y14 = (parseFloat($("#z5").html()) - parseFloat(b14) );
			$("#z5").html(y14.toFixed(2));
			var y15 = (parseFloat($("#z6").html()) - parseFloat(b15) );
			$("#z6").html(y15.toFixed(2));
			var y16 = (parseFloat($("#z7").html()) - parseFloat(b16) );
			$("#z7").html(y16.toFixed(2));
			var y17 = (parseFloat($("#z8").html()) - parseFloat(b17) );
			$("#z8").html(y17.toFixed(2));
			var y18 = (parseFloat($("#z9").html()) - parseFloat(b18) );
			$("#z9").html(y18.toFixed(2));
			for( i=10; i<=18; i++)
			{
				$("#b"+i).css("font-size","0px");
			}
			if(y10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
	
		$("#spanid5").click(function() { 
		var b19 = $("#b19").html();
		var b20 = $("#b20").html();
		var b21 = $("#b21").html();
		var b22 = $("#b22").html();
		var b23 = $("#b23").html();
		var b24 = $("#b24").html();
		var b25 = $("#b25").html();
		var b26 = $("#b26").html();
		var b27 = $("#b27").html();
		if($( "#spanid5" ).hasClass( "add-ic" )){
			$("#calculation5").addClass("selected-row");
			$("#spanid5").removeClass("add-ic");  
			$("#spanid5").addClass("close-ic");
			$("#spanid5").html('X');
			var y19 = (parseFloat($("#z1").html()) + parseFloat(b19) );
			$("#z1").html(y19.toFixed(2));
			var y20 = (parseFloat($("#z2").html()) + parseFloat(b20) );
			$("#z2").html(y20.toFixed(2));
			var y21 = (parseFloat($("#z3").html()) + parseFloat(b21) );
			$("#z3").html(y21.toFixed(2));
			var y22 = (parseFloat($("#z4").html()) + parseFloat(b22) );
			$("#z4").html(y22.toFixed(2));
			var y23 = (parseFloat($("#z5").html()) + parseFloat(b23) );
			$("#z5").html(y23.toFixed(2));
			var y24 = (parseFloat($("#z6").html()) + parseFloat(b24) );
			$("#z6").html(y24.toFixed(2));
			var y25 = (parseFloat($("#z7").html()) + parseFloat(b25) );
			$("#z7").html(y25.toFixed(2));
			var y26 = (parseFloat($("#z8").html()) + parseFloat(b26) );
			$("#z8").html(y26.toFixed(2));
			var y27 = (parseFloat($("#z9").html()) + parseFloat(b27) );
			$("#z9").html(y27.toFixed(2));
			 for( i=19; i<=27; i++)
			{
				$("#b"+i).css("font-size","18px");
			}
			if(y19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation5").removeClass("selected-row");
			 $("#spanid5").removeClass("close-ic");  
			 $("#spanid5").addClass("add-ic");
			 $("#spanid5").html('+');
			 var y19 = (parseFloat($("#z1").html()) - parseFloat(b19) );
			$("#z1").html(y19.toFixed(2));
			var y20 = (parseFloat($("#z2").html()) - parseFloat(b20) );
			$("#z2").html(y20.toFixed(2));
			var y21 = (parseFloat($("#z3").html()) - parseFloat(b21) );
			$("#z3").html(y21.toFixed(2));
			var y22 = (parseFloat($("#z4").html()) - parseFloat(b22) );
			$("#z4").html(y22.toFixed(2));
			var y23 = (parseFloat($("#z5").html()) - parseFloat(b23) );
			$("#z5").html(y23.toFixed(2));
			var y24 = (parseFloat($("#z6").html()) - parseFloat(b24) );
			$("#z6").html(y24.toFixed(2));
			var y25 = (parseFloat($("#z7").html()) - parseFloat(b25) );
			$("#z7").html(y25.toFixed(2));
			var y26 = (parseFloat($("#z8").html()) - parseFloat(b26) );
			$("#z8").html(y26.toFixed(2));
			var y27 = (parseFloat($("#z9").html()) - parseFloat(b27) );
			$("#z9").html(y27.toFixed(2));
			for( i=19; i<=27; i++)
			{
				$("#b"+i).css("font-size","0px");
			}
			if(y19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid6").click(function() { 
		var c1 = $("#c1").html();
		var c2 = $("#c2").html();
		var c3 = $("#c3").html();
		var c4 = $("#c4").html();
		var c5 = $("#c5").html();
		var c6 = $("#c6").html();
		var c7 = $("#c7").html();
		var c8 = $("#c8").html();
		var c9 = $("#c9").html();
		if($( "#spanid6" ).hasClass( "add-ic" )){
			$("#calculation6").addClass("selected-row");
			$("#spanid6").removeClass("add-ic");  
			$("#spanid6").addClass("close-ic");
			$("#spanid6").html('X');
			var w1 = (parseFloat($("#z1").html()) + parseFloat(c1) );
			$("#z1").html(w1.toFixed(2));
			var w2 = (parseFloat($("#z2").html()) + parseFloat(c2) );
			$("#z2").html(w2.toFixed(2));
			var w3 = (parseFloat($("#z3").html()) + parseFloat(c3) );
			$("#z3").html(w3.toFixed(2));
			var w4 = (parseFloat($("#z4").html()) + parseFloat(c4) );
			$("#z4").html(w4.toFixed(2));
			var w5 = (parseFloat($("#z5").html()) + parseFloat(c5) );
			$("#z5").html(w5.toFixed(2));
			var w6 = (parseFloat($("#z6").html()) + parseFloat(c6) );
			$("#z6").html(w6.toFixed(2));
			var w7 = (parseFloat($("#z7").html()) + parseFloat(c7) );
			$("#z7").html(w7.toFixed(2));
			var w8 = (parseFloat($("#z8").html()) + parseFloat(c8) );
			$("#z8").html(w8.toFixed(2));
			var w9 = (parseFloat($("#z9").html()) + parseFloat(c9) );
			$("#z9").html(w9.toFixed(2));
			 for( i=1; i<=9; i++)
			{
				$("#c"+i).css("font-size","18px");
			}
			if(w1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation6").removeClass("selected-row");
			 $("#spanid6").removeClass("close-ic");  
			 $("#spanid6").addClass("add-ic");
			 $("#spanid6").html('+');
			var w1 = (parseFloat($("#z1").html()) - parseFloat(c1) );
			$("#z1").html(w1.toFixed(2));
			var w2 = (parseFloat($("#z2").html()) - parseFloat(c2) );
			$("#z2").html(w2.toFixed(2));
			var w3 = (parseFloat($("#z3").html()) - parseFloat(c3) );
			$("#z3").html(w3.toFixed(2));
			var w4 = (parseFloat($("#z4").html()) - parseFloat(c4) );
			$("#z4").html(w4.toFixed(2));
			var w5 = (parseFloat($("#z5").html()) - parseFloat(c5) );
			$("#z5").html(w5.toFixed(2));
			var w6 = (parseFloat($("#z6").html()) - parseFloat(c6) );
			$("#z6").html(w6.toFixed(2));
			var w7 = (parseFloat($("#z7").html()) - parseFloat(c7) );
			$("#z7").html(w7.toFixed(2));
			var w8 = (parseFloat($("#z8").html()) - parseFloat(c8) );
			$("#z8").html(w8.toFixed(2));
			var w9 = (parseFloat($("#z9").html()) - parseFloat(c9) );
			$("#z9").html(w9.toFixed(2));
			 for( i=1; i<=9; i++)
			{
				$("#c"+i).css("font-size","0px");
			}
			if(w1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid7").click(function() { 
		var c10 = $("#c10").html();
		var c11 = $("#c11").html();
		var c12 = $("#c12").html();
		var c13 = $("#c13").html();
		var c14 = $("#c14").html();
		var c15 = $("#c15").html();
		var c16 = $("#c16").html();
		var c17 = $("#c17").html();
		var c18 = $("#c18").html();
		if($( "#spanid7" ).hasClass( "add-ic" )){
			$("#calculation7").addClass("selected-row");
			$("#spanid7").removeClass("add-ic");  
			$("#spanid7").addClass("close-ic");
			$("#spanid7").html('X');
			var w10 = (parseFloat($("#z1").html()) + parseFloat(c10) );
			$("#z1").html(w10.toFixed(2));
			var w11 = (parseFloat($("#z2").html()) + parseFloat(c11) );
			$("#z2").html(w11.toFixed(2));
			var w12 = (parseFloat($("#z3").html()) + parseFloat(c12) );
			$("#z3").html(w12.toFixed(2));
			var w13 = (parseFloat($("#z4").html()) + parseFloat(c13) );
			$("#z4").html(w13.toFixed(2));
			var w14 = (parseFloat($("#z5").html()) + parseFloat(c14) );
			$("#z5").html(w14.toFixed(2));
			var w15 = (parseFloat($("#z6").html()) + parseFloat(c15) );
			$("#z6").html(w15.toFixed(2));
			var w16 = (parseFloat($("#z7").html()) + parseFloat(c16) );
			$("#z7").html(w16.toFixed(2));
			var w17 = (parseFloat($("#z8").html()) + parseFloat(c17) );
			$("#z8").html(w17.toFixed(2));
			var w18 = (parseFloat($("#z9").html()) + parseFloat(c18) );
			$("#z9").html(w18.toFixed(2));
			 for( i=10; i<=18; i++)
			{
				$("#c"+i).css("font-size","18px");
			}
			if(w10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation7").removeClass("selected-row");
			 $("#spanid7").removeClass("close-ic");  
			 $("#spanid7").addClass("add-ic");
			 $("#spanid7").html('+');
			var w10 = (parseFloat($("#z1").html()) - parseFloat(c10) );
			$("#z1").html(w10.toFixed(2));
			var w11 = (parseFloat($("#z2").html()) - parseFloat(c11) );
			$("#z2").html(w11.toFixed(2));
			var w12 = (parseFloat($("#z3").html()) - parseFloat(c12) );
			$("#z3").html(w12.toFixed(2));
			var w13 = (parseFloat($("#z4").html()) - parseFloat(c13) );
			$("#z4").html(w13.toFixed(2));
			var w14 = (parseFloat($("#z5").html()) - parseFloat(c14) );
			$("#z5").html(w14.toFixed(2));
			var w15 = (parseFloat($("#z6").html()) - parseFloat(c15) );
			$("#z6").html(w15.toFixed(2));
			var w16 = (parseFloat($("#z7").html()) - parseFloat(c16) );
			$("#z7").html(w16.toFixed(2));
			var w17 = (parseFloat($("#z8").html()) - parseFloat(c17) );
			$("#z8").html(w17.toFixed(2));
			var w18 = (parseFloat($("#z9").html()) - parseFloat(c18) );
			$("#z9").html(w18.toFixed(2));
			 for( i=10; i<=18; i++)
			{
				$("#c"+i).css("font-size","0px");
			}
			if(w10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}	 
		});
		
		$("#spanid8").click(function() { 
		var c19 = $("#c19").html();
		var c20 = $("#c20").html();
		var c21 = $("#c21").html();
		var c22 = $("#c22").html();
		var c23 = $("#c23").html();
		var c24 = $("#c24").html();
		var c25 = $("#c25").html();
		var c26 = $("#c26").html();
		var c27 = $("#c27").html();
		if($( "#spanid8" ).hasClass( "add-ic" )){
			$("#calculation8").addClass("selected-row");
			$("#spanid8").removeClass("add-ic");  
			$("#spanid8").addClass("close-ic");
			$("#spanid8").html('X');
			var w19 = (parseFloat($("#z1").html()) + parseFloat(c19) );
			$("#z1").html(w19.toFixed(2));
			var w20 = (parseFloat($("#z2").html()) + parseFloat(c20) );
			$("#z2").html(w20.toFixed(2));
			var w21 = (parseFloat($("#z3").html()) + parseFloat(c21) );
			$("#z3").html(w21.toFixed(2));
			var w22 = (parseFloat($("#z4").html()) + parseFloat(c22) );
			$("#z4").html(w22.toFixed(2));
			var w23 = (parseFloat($("#z5").html()) + parseFloat(c23) );
			$("#z5").html(w23.toFixed(2));
			var w24 = (parseFloat($("#z6").html()) + parseFloat(c24) );
			$("#z6").html(w24.toFixed(2));
			var w25 = (parseFloat($("#z7").html()) + parseFloat(c25) );
			$("#z7").html(w25.toFixed(2));
			var w26 = (parseFloat($("#z8").html()) + parseFloat(c26) );
			$("#z8").html(w26.toFixed(2));
			var w27 = (parseFloat($("#z9").html()) + parseFloat(c27) );
			$("#z9").html(w27.toFixed(2));
			 for( i=19; i<=27; i++)
			{
				$("#c"+i).css("font-size","18px");
			}
			if(w19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation8").removeClass("selected-row");
			 $("#spanid8").removeClass("close-ic");  
			 $("#spanid8").addClass("add-ic");
			 $("#spanid8").html('+');
			var w19 = (parseFloat($("#z1").html()) - parseFloat(c19) );
			$("#z1").html(w19.toFixed(2));
			var w20 = (parseFloat($("#z2").html()) - parseFloat(c20) );
			$("#z2").html(w20.toFixed(2));
			var w21 = (parseFloat($("#z3").html()) - parseFloat(c21) );
			$("#z3").html(w21.toFixed(2));
			var w22 = (parseFloat($("#z4").html()) - parseFloat(c22) );
			$("#z4").html(w22.toFixed(2));
			var w23 = (parseFloat($("#z5").html()) - parseFloat(c23) );
			$("#z5").html(w23.toFixed(2));
			var w24 = (parseFloat($("#z6").html()) - parseFloat(c24) );
			$("#z6").html(w24.toFixed(2));
			var w25 = (parseFloat($("#z7").html()) - parseFloat(c25) );
			$("#z7").html(w25.toFixed(2));
			var w26 = (parseFloat($("#z8").html()) - parseFloat(c26) );
			$("#z8").html(w26.toFixed(2));
			var w27 = (parseFloat($("#z9").html()) - parseFloat(c27) );
			$("#z9").html(w27.toFixed(2));
			 for( i=19; i<=27; i++)
			{
				$("#c"+i).css("font-size","0px");
			}
			if(w19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid9").click(function() { 
		var c28 = $("#c28").html();
		var c29 = $("#c29").html();
		var c30 = $("#c30").html();
		var c31 = $("#c31").html();
		var c32 = $("#c32").html();
		var c33 = $("#c33").html();
		var c34 = $("#c34").html();
		var c35 = $("#c35").html();
		var c36 = $("#c36").html();
		if($( "#spanid9" ).hasClass( "add-ic" )){
			$("#calculation9").addClass("selected-row");
			$("#spanid9").removeClass("add-ic");  
			$("#spanid9").addClass("close-ic");
			$("#spanid9").html('X');
			var w28 = (parseFloat($("#z1").html()) + parseFloat(c28) );
			$("#z1").html(w28.toFixed(2));
			var w29 = (parseFloat($("#z2").html()) + parseFloat(c29) );
			$("#z2").html(w29.toFixed(2));
			var w30 = (parseFloat($("#z3").html()) + parseFloat(c30) );
			$("#z3").html(w30.toFixed(2));
			var w31 = (parseFloat($("#z4").html()) + parseFloat(c31) );
			$("#z4").html(w31.toFixed(2));
			var w32 = (parseFloat($("#z5").html()) + parseFloat(c32) );
			$("#z5").html(w32.toFixed(2));
			var w33 = (parseFloat($("#z6").html()) + parseFloat(c33) );
			$("#z6").html(w33.toFixed(2));
			var w34 = (parseFloat($("#z7").html()) + parseFloat(c34) );
			$("#z7").html(w34.toFixed(2));
			var w35 = (parseFloat($("#z8").html()) + parseFloat(c35) );
			$("#z8").html(w35.toFixed(2));
			var w36 = (parseFloat($("#z9").html()) + parseFloat(c36) );
			$("#z9").html(w36.toFixed(2));
			 for( i=28; i<=36; i++)
			{
				$("#c"+i).css("font-size","18px");
			}
			if(w28 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation9").removeClass("selected-row");
			 $("#spanid9").removeClass("close-ic");  
			 $("#spanid9").addClass("add-ic");
			 $("#spanid9").html('+');
			var w28 = (parseFloat($("#z1").html()) - parseFloat(c28) );
			$("#z1").html(w28.toFixed(2));
			var w29 = (parseFloat($("#z2").html()) - parseFloat(c29) );
			$("#z2").html(w29.toFixed(2));
			var w30 = (parseFloat($("#z3").html()) - parseFloat(c30) );
			$("#z3").html(w30.toFixed(2));
			var w31 = (parseFloat($("#z4").html()) - parseFloat(c31) );
			$("#z4").html(w31.toFixed(2));
			var w32 = (parseFloat($("#z5").html()) - parseFloat(c32) );
			$("#z5").html(w32.toFixed(2));
			var w33 = (parseFloat($("#z6").html()) - parseFloat(c33) );
			$("#z6").html(w33.toFixed(2));
			var w34 = (parseFloat($("#z7").html()) - parseFloat(c34) );
			$("#z7").html(w34.toFixed(2));
			var w35 = (parseFloat($("#z8").html()) - parseFloat(c35) );
			$("#z8").html(w35.toFixed(2));
			var w36 = (parseFloat($("#z9").html()) - parseFloat(c36) );
			$("#z9").html(w36.toFixed(2));
			 for( i=28; i<=36; i++)
			{
				$("#c"+i).css("font-size","0px");
			}
			if(w28 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid10").click(function() { 
		var c37 = $("#c37").html();
		var c38 = $("#c38").html();
		var c39 = $("#c39").html();
		var c40 = $("#c40").html();
		var c41 = $("#c41").html();
		var c42 = $("#c42").html();
		var c43 = $("#c43").html();
		var c44 = $("#c44").html();
		var c45 = $("#c45").html();
		if($( "#spanid10" ).hasClass( "add-ic" )){
			$("#calculation10").addClass("selected-row");
			$("#spanid10").removeClass("add-ic");  
			$("#spanid10").addClass("close-ic");
			$("#spanid10").html('X');
			var w37 = (parseFloat($("#z1").html()) + parseFloat(c37) );
			$("#z1").html(w37.toFixed(2));
			var w38 = (parseFloat($("#z2").html()) + parseFloat(c38) );
			$("#z2").html(w38.toFixed(2));
			var w39 = (parseFloat($("#z3").html()) + parseFloat(c39) );
			$("#z3").html(w39.toFixed(2));
			var w40 = (parseFloat($("#z4").html()) + parseFloat(c40) );
			$("#z4").html(w40.toFixed(2));
			var w41 = (parseFloat($("#z5").html()) + parseFloat(c41) );
			$("#z5").html(w41.toFixed(2));
			var w42 = (parseFloat($("#z6").html()) + parseFloat(c42) );
			$("#z6").html(w42.toFixed(2));
			var w43 = (parseFloat($("#z7").html()) + parseFloat(c43) );
			$("#z7").html(w43.toFixed(2));
			var w44 = (parseFloat($("#z8").html()) + parseFloat(c44) );
			$("#z8").html(w44.toFixed(2));
			var w45 = (parseFloat($("#z9").html()) + parseFloat(c45) );
			$("#z9").html(w45.toFixed(2));
			 for( i=37; i<=45; i++)
			{
				$("#c"+i).css("font-size","18px");
			}
			if(w37 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation10").removeClass("selected-row");
			 $("#spanid10").removeClass("close-ic");  
			 $("#spanid10").addClass("add-ic");
			 $("#spanid10").html('+');
			var w37 = (parseFloat($("#z1").html()) - parseFloat(c37) );
			$("#z1").html(w37.toFixed(2));
			var w38 = (parseFloat($("#z2").html()) - parseFloat(c38) );
			$("#z2").html(w38.toFixed(2));
			var w39 = (parseFloat($("#z3").html()) - parseFloat(c39) );
			$("#z3").html(w39.toFixed(2));
			var w40 = (parseFloat($("#z4").html()) - parseFloat(c40) );
			$("#z4").html(w40.toFixed(2));
			var w41 = (parseFloat($("#z5").html()) - parseFloat(c41) );
			$("#z5").html(w41.toFixed(2));
			var w42 = (parseFloat($("#z6").html()) - parseFloat(c42) );
			$("#z6").html(w42.toFixed(2));
			var w43 = (parseFloat($("#z7").html()) - parseFloat(c43) );
			$("#z7").html(w43.toFixed(2));
			var w44 = (parseFloat($("#z8").html()) - parseFloat(c44) );
			$("#z8").html(w44.toFixed(2));
			var w45 = (parseFloat($("#z9").html()) - parseFloat(c45) );
			$("#z9").html(w45.toFixed(2));
			 for( i=37; i<=45; i++)
			{
				$("#c"+i).css("font-size","0px");
			}
			if(w37 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid11").click(function() { 
		var c46 = $("#c46").html();
		var c47 = $("#c47").html();
		var c48 = $("#c48").html();
		var c49 = $("#c49").html();
		var c50 = $("#c50").html();
		var c51 = $("#c51").html();
		var c52 = $("#c52").html();
		var c53 = $("#c53").html();
		var c54 = $("#c54").html();
		if($( "#spanid11" ).hasClass( "add-ic" )){
			$("#calculation11").addClass("selected-row");
			$("#spanid11").removeClass("add-ic");  
			$("#spanid11").addClass("close-ic");
			$("#spanid11").html('X');
			var w46 = (parseFloat($("#z1").html()) + parseFloat(c46) );
			$("#z1").html(w46.toFixed(2));
			var w47 = (parseFloat($("#z2").html()) + parseFloat(c47) );
			$("#z2").html(w47.toFixed(2));
			var w48 = (parseFloat($("#z3").html()) + parseFloat(c48) );
			$("#z3").html(w48.toFixed(2));
			var w49 = (parseFloat($("#z4").html()) + parseFloat(c49) );
			$("#z4").html(w49.toFixed(2));
			var w50 = (parseFloat($("#z5").html()) + parseFloat(c50) );
			$("#z5").html(w50.toFixed(2));
			var w51 = (parseFloat($("#z6").html()) + parseFloat(c51) );
			$("#z6").html(w51.toFixed(2));
			var w52 = (parseFloat($("#z7").html()) + parseFloat(c52) );
			$("#z7").html(w52.toFixed(2));
			var w53 = (parseFloat($("#z8").html()) + parseFloat(c53) );
			$("#z8").html(w53.toFixed(2));
			var w54 = (parseFloat($("#z9").html()) + parseFloat(c54) );
			$("#z9").html(w54.toFixed(2));
			 for( i=46; i<=54; i++)
			{
				$("#c"+i).css("font-size","18px");
			}
			if(w46 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation11").removeClass("selected-row");
			 $("#spanid11").removeClass("close-ic");  
			 $("#spanid11").addClass("add-ic");
			 $("#spanid11").html('+');
			var w46 = (parseFloat($("#z1").html()) - parseFloat(c46) );
			$("#z1").html(w46.toFixed(2));
			var w47 = (parseFloat($("#z2").html()) - parseFloat(c47) );
			$("#z2").html(w47.toFixed(2));
			var w48 = (parseFloat($("#z3").html()) - parseFloat(c48) );
			$("#z3").html(w48.toFixed(2));
			var w49 = (parseFloat($("#z4").html()) - parseFloat(c49) );
			$("#z4").html(w49.toFixed(2));
			var w50 = (parseFloat($("#z5").html()) - parseFloat(c50) );
			$("#z5").html(w50.toFixed(2));
			var w51 = (parseFloat($("#z6").html()) - parseFloat(c51) );
			$("#z6").html(w51.toFixed(2));
			var w52 = (parseFloat($("#z7").html()) - parseFloat(c52) );
			$("#z7").html(w52.toFixed(2));
			var w53 = (parseFloat($("#z8").html()) - parseFloat(c53) );
			$("#z8").html(w53.toFixed(2));
			var w54 = (parseFloat($("#z9").html()) - parseFloat(c54) );
			$("#z9").html(w54.toFixed(2));
			 for( i=46; i<=54; i++)
			{
				$("#c"+i).css("font-size","0px");
			}
			if(w46 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}	 
		});
		
		$("#spanid12").click(function() {
		var d1 = $("#d1").html();
		var d2 = $("#d2").html();
		var d3 = $("#d3").html();
		var d4 = $("#d4").html();
		var d5 = $("#d5").html();
		var d6 = $("#d6").html();
		var d7 = $("#d7").html();
		var d8 = $("#d8").html();
		var d9 = $("#d9").html();									  
		if($( "#spanid12" ).hasClass( "add-ic" )){
			$("#calculation12").addClass("selected-row");
			$("#spanid12").removeClass("add-ic");  
			$("#spanid12").addClass("close-ic");
			$("#spanid12").html('X');
			var s1 = (parseFloat($("#z1").html()) + parseFloat(d1) );
			$("#z1").html(s1.toFixed(2));
			var s2 = (parseFloat($("#z2").html()) + parseFloat(d2) );
			$("#z2").html(s2.toFixed(2));
			var s3 = (parseFloat($("#z3").html()) + parseFloat(d3) );
			$("#z3").html(s3.toFixed(2));
			var s4 = (parseFloat($("#z4").html()) + parseFloat(d4) );
			$("#z4").html(s4.toFixed(2));
			var s5 = (parseFloat($("#z5").html()) + parseFloat(d5) );
			$("#z5").html(s5.toFixed(2));
			var s6 = (parseFloat($("#z6").html()) + parseFloat(d6) );
			$("#z6").html(s6.toFixed(2));
			var s7 = (parseFloat($("#z7").html()) + parseFloat(d7) );
			$("#z7").html(s7.toFixed(2));
			var s8 = (parseFloat($("#z8").html()) + parseFloat(d8) );
			$("#z8").html(s8.toFixed(2));
			var s9 = (parseFloat($("#z9").html()) + parseFloat(d9) );
			$("#z9").html(s9.toFixed(2));
			 for( i=1; i<=9; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation12").removeClass("selected-row");
			 $("#spanid12").removeClass("close-ic");  
			 $("#spanid12").addClass("add-ic");
			 $("#spanid12").html('+');
			 var s1 = (parseFloat($("#z1").html()) - parseFloat(d1) );
			$("#z1").html(s1.toFixed(2));
			var s2 = (parseFloat($("#z2").html()) - parseFloat(d2) );
			$("#z2").html(s2.toFixed(2));
			var s3 = (parseFloat($("#z3").html()) - parseFloat(d3) );
			$("#z3").html(s3.toFixed(2));
			var s4 = (parseFloat($("#z4").html()) - parseFloat(d4) );
			$("#z4").html(s4.toFixed(2));
			var s5 = (parseFloat($("#z5").html()) - parseFloat(d5) );
			$("#z5").html(s5.toFixed(2));
			var s6 = (parseFloat($("#z6").html()) - parseFloat(d6) );
			$("#z6").html(s6.toFixed(2));
			var s7 = (parseFloat($("#z7").html()) - parseFloat(d7) );
			$("#z7").html(s7.toFixed(2));
			var s8 = (parseFloat($("#z8").html()) - parseFloat(d8) );
			$("#z8").html(s8.toFixed(2));
			var s9 = (parseFloat($("#z9").html()) - parseFloat(d9) );
			$("#z9").html(s9.toFixed(2));
			 for( i=1; i<=9; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid13").click(function() {
		var d10 = $("#d10").html();
		var d11 = $("#d11").html();
		var d12 = $("#d12").html();
		var d13 = $("#d13").html();
		var d14 = $("#d14").html();
		var d15 = $("#d15").html();
		var d16 = $("#d16").html();
		var d17 = $("#d17").html();
		var d18 = $("#d18").html();
		if($( "#spanid13" ).hasClass( "add-ic" )){
			$("#calculation13").addClass("selected-row");
			$("#spanid13").removeClass("add-ic");  
			$("#spanid13").addClass("close-ic");
			$("#spanid13").html('X');
			var s10 = (parseFloat($("#z1").html()) + parseFloat(d10) );
			$("#z1").html(s10.toFixed(2));
			var s11 = (parseFloat($("#z2").html()) + parseFloat(d11) );
			$("#z2").html(s11.toFixed(2));
			var s12 = (parseFloat($("#z3").html()) + parseFloat(d12) );
			$("#z3").html(s12.toFixed(2));
			var s13 = (parseFloat($("#z4").html()) + parseFloat(d13) );
			$("#z4").html(s13.toFixed(2));
			var s14 = (parseFloat($("#z5").html()) + parseFloat(d14) );
			$("#z5").html(s14.toFixed(2));
			var s15 = (parseFloat($("#z6").html()) + parseFloat(d15) );
			$("#z6").html(s15.toFixed(2));
			var s16 = (parseFloat($("#z7").html()) + parseFloat(d16) );
			$("#z7").html(s16.toFixed(2));
			var s17 = (parseFloat($("#z8").html()) + parseFloat(d17) );
			$("#z8").html(s17.toFixed(2));
			var s18 = (parseFloat($("#z9").html()) + parseFloat(d18) );
			$("#z9").html(s18.toFixed(2));
			 for( i=10; i<=18; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation13").removeClass("selected-row");
			 $("#spanid13").removeClass("close-ic");  
			 $("#spanid13").addClass("add-ic");
			 $("#spanid13").html('+');
			 var s10 = (parseFloat($("#z1").html()) - parseFloat(d10) );
			$("#z1").html(s10.toFixed(2));
			var s11 = (parseFloat($("#z2").html()) - parseFloat(d11) );
			$("#z2").html(s11.toFixed(2));
			var s12 = (parseFloat($("#z3").html()) - parseFloat(d12) );
			$("#z3").html(s12.toFixed(2));
			var s13 = (parseFloat($("#z4").html()) - parseFloat(d13) );
			$("#z4").html(s13.toFixed(2));
			var s14 = (parseFloat($("#z5").html()) - parseFloat(d14) );
			$("#z5").html(s14.toFixed(2));
			var s15 = (parseFloat($("#z6").html()) - parseFloat(d15) );
			$("#z6").html(s15.toFixed(2));
			var s16 = (parseFloat($("#z7").html()) - parseFloat(d16) );
			$("#z7").html(s16.toFixed(2));
			var s17 = (parseFloat($("#z8").html()) - parseFloat(d17) );
			$("#z8").html(s17.toFixed(2));
			var s18 = (parseFloat($("#z9").html()) - parseFloat(d18) );
			$("#z9").html(s18.toFixed(2));
			 for( i=10; i<=18; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid14").click(function() {
		var d19 = $("#d19").html();
		var d20 = $("#d20").html();
		var d21 = $("#d21").html();
		var d22 = $("#d22").html();
		var d23 = $("#d23").html();
		var d24 = $("#d24").html();
		var d25 = $("#d25").html();
		var d26 = $("#d26").html();
		var d27 = $("#d27").html();
		if($( "#spanid14" ).hasClass( "add-ic" )){
			$("#calculation14").addClass("selected-row");
			$("#spanid14").removeClass("add-ic");  
			$("#spanid14").addClass("close-ic");
			$("#spanid14").html('X');
			var s19 = (parseFloat($("#z1").html()) + parseFloat(d19) );
			$("#z1").html(s19.toFixed(2));
			var s20 = (parseFloat($("#z2").html()) + parseFloat(d20) );
			$("#z2").html(s20.toFixed(2));
			var s21 = (parseFloat($("#z3").html()) + parseFloat(d21) );
			$("#z3").html(s21.toFixed(2));
			var s22 = (parseFloat($("#z4").html()) + parseFloat(d22) );
			$("#z4").html(s22.toFixed(2));
			var s23 = (parseFloat($("#z5").html()) + parseFloat(d23) );
			$("#z5").html(s23.toFixed(2));
			var s24 = (parseFloat($("#z6").html()) + parseFloat(d24) );
			$("#z6").html(s24.toFixed(2));
			var s25 = (parseFloat($("#z7").html()) + parseFloat(d25) );
			$("#z7").html(s25.toFixed(2));
			var s26 = (parseFloat($("#z8").html()) + parseFloat(d26) );
			$("#z8").html(s26.toFixed(2));
			var s27 = (parseFloat($("#z9").html()) + parseFloat(d27) );
			$("#z9").html(s27.toFixed(2));
			 for( i=19; i<=27; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
			
		}else{
			 $("#calculation14").removeClass("selected-row");
			 $("#spanid14").removeClass("close-ic");  
			 $("#spanid14").addClass("add-ic");
			 $("#spanid14").html('+');
			 var s19 = (parseFloat($("#z1").html()) - parseFloat(d19) );
			$("#z1").html(s19.toFixed(2));
			var s20 = (parseFloat($("#z2").html()) - parseFloat(d20) );
			$("#z2").html(s20.toFixed(2));
			var s21 = (parseFloat($("#z3").html()) - parseFloat(d21) );
			$("#z3").html(s21.toFixed(2));
			var s22 = (parseFloat($("#z4").html()) - parseFloat(d22) );
			$("#z4").html(s22.toFixed(2));
			var s23 = (parseFloat($("#z5").html()) - parseFloat(d23) );
			$("#z5").html(s23.toFixed(2));
			var s24 = (parseFloat($("#z6").html()) - parseFloat(d24) );
			$("#z6").html(s24.toFixed(2));
			var s25 = (parseFloat($("#z7").html()) - parseFloat(d25) );
			$("#z7").html(s25.toFixed(2));
			var s26 = (parseFloat($("#z8").html()) - parseFloat(d26) );
			$("#z8").html(s26.toFixed(2));
			var s27 = (parseFloat($("#z9").html()) - parseFloat(d27) );
			$("#z9").html(s27.toFixed(2));
			 for( i=19; i<=27; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid15").click(function() {
		var d28 = $("#d28").html();
		var d29 = $("#d29").html();
		var d30 = $("#d30").html();
		var d31 = $("#d31").html();
		var d32 = $("#d32").html();
		var d33 = $("#d33").html();
		var d34 = $("#d34").html();
		var d35 = $("#d35").html();
		var d36 = $("#d36").html();
		if($( "#spanid15" ).hasClass( "add-ic" )){
			$("#calculation15").addClass("selected-row");
			$("#spanid15").removeClass("add-ic");  
			$("#spanid15").addClass("close-ic");
			$("#spanid15").html('X');
			var s28 = (parseFloat($("#z1").html()) + parseFloat(d28) );
			$("#z1").html(s28.toFixed(2));
			var s29 = (parseFloat($("#z2").html()) + parseFloat(d29) );
			$("#z2").html(s29.toFixed(2));
			var s30 = (parseFloat($("#z3").html()) + parseFloat(d30) );
			$("#z3").html(s30.toFixed(2));
			var s31 = (parseFloat($("#z4").html()) + parseFloat(d31) );
			$("#z4").html(s31.toFixed(2));
			var s32 = (parseFloat($("#z5").html()) + parseFloat(d32) );
			$("#z5").html(s32.toFixed(2));
			var s33 = (parseFloat($("#z6").html()) + parseFloat(d33) );
			$("#z6").html(s33.toFixed(2));
			var s34 = (parseFloat($("#z7").html()) + parseFloat(d34) );
			$("#z7").html(s34.toFixed(2));
			var s35 = (parseFloat($("#z8").html()) + parseFloat(d35) );
			$("#z8").html(s35.toFixed(2));
			var s36 = (parseFloat($("#z9").html()) + parseFloat(d36) );
			$("#z9").html(s36.toFixed(2));
			for( i=28; i<=36; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s28 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation15").removeClass("selected-row");
			 $("#spanid15").removeClass("close-ic");  
			 $("#spanid15").addClass("add-ic");
			 $("#spanid15").html('+');
			 var s28 = (parseFloat($("#z1").html()) - parseFloat(d28) );
			$("#z1").html(s28.toFixed(2));
			var s29 = (parseFloat($("#z2").html()) - parseFloat(d29) );
			$("#z2").html(s29.toFixed(2));
			var s30 = (parseFloat($("#z3").html()) - parseFloat(d30) );
			$("#z3").html(s30.toFixed(2));
			var s31 = (parseFloat($("#z4").html()) - parseFloat(d31) );
			$("#z4").html(s31.toFixed(2));
			var s32 = (parseFloat($("#z5").html()) - parseFloat(d32) );
			$("#z5").html(s32.toFixed(2));
			var s33 = (parseFloat($("#z6").html()) - parseFloat(d33) );
			$("#z6").html(s33.toFixed(2));
			var s34 = (parseFloat($("#z7").html()) - parseFloat(d34) );
			$("#z7").html(s34.toFixed(2));
			var s35 = (parseFloat($("#z8").html()) - parseFloat(d35) );
			$("#z8").html(s35.toFixed(2));
			var s36 = (parseFloat($("#z9").html()) - parseFloat(d36) );
			$("#z9").html(s36.toFixed(2));
			for( i=28; i<=36; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s28 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid16").click(function() {
		var d37 = $("#d37").html();
		var d38 = $("#d38").html();
		var d39 = $("#d39").html();
		var d40 = $("#d40").html();
		var d41 = $("#d41").html();
		var d42 = $("#d42").html();
		var d43 = $("#d43").html();
		var d44 = $("#d44").html();
		var d45 = $("#d45").html();
		if($( "#spanid16" ).hasClass( "add-ic" )){
			$("#calculation16").addClass("selected-row");
			$("#spanid16").removeClass("add-ic");  
			$("#spanid16").addClass("close-ic");
			$("#spanid16").html('X');
			var s37 = (parseFloat($("#z1").html()) + parseFloat(d37) );
			$("#z1").html(s37.toFixed(2));
			var s38 = (parseFloat($("#z2").html()) + parseFloat(d38) );
			$("#z2").html(s38.toFixed(2));
			var s39 = (parseFloat($("#z3").html()) + parseFloat(d39) );
			$("#z3").html(s39.toFixed(2));
			var s40 = (parseFloat($("#z4").html()) + parseFloat(d40) );
			$("#z4").html(s40.toFixed(2));
			var s41 = (parseFloat($("#z5").html()) + parseFloat(d41) );
			$("#z5").html(s41.toFixed(2));
			var s42 = (parseFloat($("#z6").html()) + parseFloat(d42) );
			$("#z6").html(s42.toFixed(2));
			var s43 = (parseFloat($("#z7").html()) + parseFloat(d43) );
			$("#z7").html(s43.toFixed(2));
			var s44 = (parseFloat($("#z8").html()) + parseFloat(d44) );
			$("#z8").html(s44.toFixed(2));
			var s45 = (parseFloat($("#z9").html()) + parseFloat(d45) );
			$("#z9").html(s45.toFixed(2));
			for( i=37; i<=45; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s37 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation16").removeClass("selected-row");
			 $("#spanid16").removeClass("close-ic");  
			 $("#spanid16").addClass("add-ic");
			 $("#spanid16").html('+');
			 var s37 = (parseFloat($("#z1").html()) - parseFloat(d37) );
			$("#z1").html(s37.toFixed(2));
			var s38 = (parseFloat($("#z2").html()) - parseFloat(d38) );
			$("#z2").html(s38.toFixed(2));
			var s39 = (parseFloat($("#z3").html()) - parseFloat(d39) );
			$("#z3").html(s39.toFixed(2));
			var s40 = (parseFloat($("#z4").html()) - parseFloat(d40) );
			$("#z4").html(s40.toFixed(2));
			var s41 = (parseFloat($("#z5").html()) - parseFloat(d41) );
			$("#z5").html(s41.toFixed(2));
			var s42 = (parseFloat($("#z6").html()) - parseFloat(d42) );
			$("#z6").html(s42.toFixed(2));
			var s43 = (parseFloat($("#z7").html()) - parseFloat(d43) );
			$("#z7").html(s43.toFixed(2));
			var s44 = (parseFloat($("#z8").html()) - parseFloat(d44) );
			$("#z8").html(s44.toFixed(2));
			var s45 = (parseFloat($("#z9").html()) - parseFloat(d45) );
			$("#z9").html(s45.toFixed(2));
			for( i=37; i<=45; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s37 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid17").click(function() {
		var d46 = $("#d46").html();
		var d47 = $("#d47").html();
		var d48 = $("#d48").html();
		var d49 = $("#d49").html();
		var d50 = $("#d50").html();
		var d51 = $("#d51").html();
		var d52 = $("#d52").html();
		var d53 = $("#d53").html();
		var d54 = $("#d54").html();
		if($( "#spanid17" ).hasClass( "add-ic" )){
			$("#calculation17").addClass("selected-row");
			$("#spanid17").removeClass("add-ic");  
			$("#spanid17").addClass("close-ic");
			$("#spanid17").html('X');
			var s46 = (parseFloat($("#z1").html()) + parseFloat(d46) );
			$("#z1").html(s46.toFixed(2));
			var s47 = (parseFloat($("#z2").html()) + parseFloat(d47) );
			$("#z2").html(s47.toFixed(2));
			var s48 = (parseFloat($("#z3").html()) + parseFloat(d48) );
			$("#z3").html(s48.toFixed(2));
			var s49 = (parseFloat($("#z4").html()) + parseFloat(d49) );
			$("#z4").html(s49.toFixed(2));
			var s50 = (parseFloat($("#z5").html()) + parseFloat(d50) );
			$("#z5").html(s50.toFixed(2));
			var s51 = (parseFloat($("#z6").html()) + parseFloat(d51) );
			$("#z6").html(s51.toFixed(2));
			var s52 = (parseFloat($("#z7").html()) + parseFloat(d52) );
			$("#z7").html(s52.toFixed(2));
			var s53 = (parseFloat($("#z8").html()) + parseFloat(d53) );
			$("#z8").html(s53.toFixed(2));
			var s54 = (parseFloat($("#z9").html()) + parseFloat(d54) );
			$("#z9").html(s54.toFixed(2));
			for( i=46; i<=54; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s46 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation17").removeClass("selected-row");
			 $("#spanid17").removeClass("close-ic");  
			 $("#spanid17").addClass("add-ic");
			 $("#spanid17").html('+');
			 var s46 = (parseFloat($("#z1").html()) - parseFloat(d46) );
			$("#z1").html(s46.toFixed(2));
			var s47 = (parseFloat($("#z2").html()) - parseFloat(d47) );
			$("#z2").html(s47.toFixed(2));
			var s48 = (parseFloat($("#z3").html()) - parseFloat(d48) );
			$("#z3").html(s48.toFixed(2));
			var s49 = (parseFloat($("#z4").html()) - parseFloat(d49) );
			$("#z4").html(s49.toFixed(2));
			var s50 = (parseFloat($("#z5").html()) - parseFloat(d50) );
			$("#z5").html(s50.toFixed(2));
			var s51 = (parseFloat($("#z6").html()) - parseFloat(d51) );
			$("#z6").html(s51.toFixed(2));
			var s52 = (parseFloat($("#z7").html()) - parseFloat(d52) );
			$("#z7").html(s52.toFixed(2));
			var s53 = (parseFloat($("#z8").html()) - parseFloat(d53) );
			$("#z8").html(s53.toFixed(2));
			var s54 = (parseFloat($("#z9").html()) - parseFloat(d54) );
			$("#z9").html(s54.toFixed(2));
			for( i=46; i<=54; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s46 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid18").click(function() {
		var d55 = $("#d55").html();
		var d56 = $("#d56").html();
		var d57 = $("#d57").html();
		var d58 = $("#d58").html();
		var d59 = $("#d59").html();
		var d60 = $("#d60").html();
		var d61 = $("#d61").html();
		var d62 = $("#d62").html();
		var d63 = $("#d63").html();
		if($( "#spanid18" ).hasClass( "add-ic" )){
			$("#calculation18").addClass("selected-row");
			$("#spanid18").removeClass("add-ic");  
			$("#spanid18").addClass("close-ic");
			$("#spanid18").html('X');
			var s55 = (parseFloat($("#z1").html()) + parseFloat(d55) );
			$("#z1").html(s55.toFixed(2));
			var s56 = (parseFloat($("#z2").html()) + parseFloat(d56) );
			$("#z2").html(s56.toFixed(2));
			var s57 = (parseFloat($("#z3").html()) + parseFloat(d57) );
			$("#z3").html(s57.toFixed(2));
			var s58 = (parseFloat($("#z4").html()) + parseFloat(d58) );
			$("#z4").html(s58.toFixed(2));
			var s59 = (parseFloat($("#z5").html()) + parseFloat(d59) );
			$("#z5").html(s59.toFixed(2));
			var s60 = (parseFloat($("#z6").html()) + parseFloat(d60) );
			$("#z6").html(s60.toFixed(2));
			var s61 = (parseFloat($("#z7").html()) + parseFloat(d61) );
			$("#z7").html(s61.toFixed(2));
			var s62 = (parseFloat($("#z8").html()) + parseFloat(d62) );
			$("#z8").html(s62.toFixed(2));
			var s63 = (parseFloat($("#z9").html()) + parseFloat(d63) );
			$("#z9").html(s63.toFixed(2));
			for( i=55; i<=63; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s55 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation18").removeClass("selected-row");
			 $("#spanid18").removeClass("close-ic");  
			 $("#spanid18").addClass("add-ic");
			 $("#spanid18").html('+');
			 var s55 = (parseFloat($("#z1").html()) - parseFloat(d55) );
			$("#z1").html(s55.toFixed(2));
			var s56 = (parseFloat($("#z2").html()) - parseFloat(d56) );
			$("#z2").html(s56.toFixed(2));
			var s57 = (parseFloat($("#z3").html()) - parseFloat(d57) );
			$("#z3").html(s57.toFixed(2));
			var s58 = (parseFloat($("#z4").html()) - parseFloat(d58) );
			$("#z4").html(s58.toFixed(2));
			var s59 = (parseFloat($("#z5").html()) - parseFloat(d59) );
			$("#z5").html(s59.toFixed(2));
			var s60 = (parseFloat($("#z6").html()) - parseFloat(d60) );
			$("#z6").html(s60.toFixed(2));
			var s61 = (parseFloat($("#z7").html()) - parseFloat(d61) );
			$("#z7").html(s61.toFixed(2));
			var s62 = (parseFloat($("#z8").html()) - parseFloat(d62) );
			$("#z8").html(s62.toFixed(2));
			var s63 = (parseFloat($("#z9").html()) - parseFloat(d63) );
			$("#z9").html(s63.toFixed(2));
			for( i=55; i<=63; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s55 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid19").click(function() {
		var d64 = $("#d64").html();
		var d65 = $("#d65").html();
		var d66 = $("#d66").html();
		var d67 = $("#d67").html();
		var d68 = $("#d68").html();
		var d69 = $("#d69").html();
		var d70 = $("#d70").html();
		var d71 = $("#d71").html();
		var d72 = $("#d72").html();
		if($( "#spanid19" ).hasClass( "add-ic" )){
			$("#calculation19").addClass("selected-row");
			$("#spanid19").removeClass("add-ic");  
			$("#spanid19").addClass("close-ic");
			$("#spanid19").html('X');
			var s64 = (parseFloat($("#z1").html()) + parseFloat(d64) );
			$("#z1").html(s64.toFixed(2));
			var s65 = (parseFloat($("#z2").html()) + parseFloat(d65) );
			$("#z2").html(s65.toFixed(2));
			var s66 = (parseFloat($("#z3").html()) + parseFloat(d66) );
			$("#z3").html(s66.toFixed(2));
			var s67 = (parseFloat($("#z4").html()) + parseFloat(d67) );
			$("#z4").html(s67.toFixed(2));
			var s68 = (parseFloat($("#z5").html()) + parseFloat(d68) );
			$("#z5").html(s68.toFixed(2));
			var s69 = (parseFloat($("#z6").html()) + parseFloat(d69) );
			$("#z6").html(s69.toFixed(2));
			var s70 = (parseFloat($("#z7").html()) + parseFloat(d70) );
			$("#z7").html(s70.toFixed(2));
			var s71 = (parseFloat($("#z8").html()) + parseFloat(d71) );
			$("#z8").html(s71.toFixed(2));
			var s72 = (parseFloat($("#z9").html()) + parseFloat(d72) );
			$("#z9").html(s72.toFixed(2));
			for( i=64; i<=72; i++)
			{
				$("#d"+i).css("font-size","18px");
			}
			if(s64 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation19").removeClass("selected-row");
			 $("#spanid19").removeClass("close-ic");  
			 $("#spanid19").addClass("add-ic");
			 $("#spanid19").html('+');
			 var s64 = (parseFloat($("#z1").html()) - parseFloat(d64) );
			$("#z1").html(s64.toFixed(2));
			var s65 = (parseFloat($("#z2").html()) - parseFloat(d65) );
			$("#z2").html(s65.toFixed(2));
			var s66 = (parseFloat($("#z3").html()) - parseFloat(d66) );
			$("#z3").html(s66.toFixed(2));
			var s67 = (parseFloat($("#z4").html()) - parseFloat(d67) );
			$("#z4").html(s67.toFixed(2));
			var s68 = (parseFloat($("#z5").html()) - parseFloat(d68) );
			$("#z5").html(s68.toFixed(2));
			var s69 = (parseFloat($("#z6").html()) - parseFloat(d69) );
			$("#z6").html(s69.toFixed(2));
			var s70 = (parseFloat($("#z7").html()) - parseFloat(d70) );
			$("#z7").html(s70.toFixed(2));
			var s71 = (parseFloat($("#z8").html()) - parseFloat(d71) );
			$("#z8").html(s71.toFixed(2));
			var s72 = (parseFloat($("#z9").html()) - parseFloat(d72) );
			$("#z9").html(s72.toFixed(2));
			for( i=64; i<=72; i++)
			{
				$("#d"+i).css("font-size","0px");
			}
			if(s64 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid20").click(function() {
		var e1 = $("#e1").html();
		var e2 = $("#e2").html();
		var e3 = $("#e3").html();
		var e4 = $("#e4").html();
		var e5 = $("#e5").html();
		var e6 = $("#e6").html();
		var e7 = $("#e7").html();
		var e8 = $("#e8").html();
		var e9 = $("#e9").html();							  
		if($( "#spanid20" ).hasClass( "add-ic" )){
			$("#calculation20").addClass("selected-row");
			$("#spanid20").removeClass("add-ic");  
			$("#spanid20").addClass("close-ic");
			$("#spanid20").html('X');
			var r1 = (parseFloat($("#z1").html()) + parseFloat(e1) );
			$("#z1").html(r1.toFixed(2));
			var r2 = (parseFloat($("#z2").html()) + parseFloat(e2) );
			$("#z2").html(r2.toFixed(2));
			var r3 = (parseFloat($("#z3").html()) + parseFloat(e3) );
			$("#z3").html(r3.toFixed(2));
			var r4 = (parseFloat($("#z4").html()) + parseFloat(e4) );
			$("#z4").html(r4.toFixed(2));
			var r5 = (parseFloat($("#z5").html()) + parseFloat(e5) );
			$("#z5").html(r5.toFixed(2));
			var r6 = (parseFloat($("#z6").html()) + parseFloat(e6) );
			$("#z6").html(r6.toFixed(2));
			var r7 = (parseFloat($("#z7").html()) + parseFloat(e7) );
			$("#z7").html(r7.toFixed(2));
			var r8 = (parseFloat($("#z8").html()) + parseFloat(e8) );
			$("#z8").html(r8.toFixed(2));
			var r9 = (parseFloat($("#z9").html()) + parseFloat(e9) );
			$("#z9").html(r9.toFixed(2));
			for( i=1; i<=9; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation20").removeClass("selected-row");
			 $("#spanid20").removeClass("close-ic");  
			 $("#spanid20").addClass("add-ic");
			 $("#spanid20").html('+');
			 var r1 = (parseFloat($("#z1").html()) - parseFloat(e1) );
			$("#z1").html(r1.toFixed(2));
			var r2 = (parseFloat($("#z2").html()) - parseFloat(e2) );
			$("#z2").html(r2.toFixed(2));
			var r3 = (parseFloat($("#z3").html()) - parseFloat(e3) );
			$("#z3").html(r3.toFixed(2));
			var r4 = (parseFloat($("#z4").html()) - parseFloat(e4) );
			$("#z4").html(r4.toFixed(2));
			var r5 = (parseFloat($("#z5").html()) - parseFloat(e5) );
			$("#z5").html(r5.toFixed(2));
			var r6 = (parseFloat($("#z6").html()) - parseFloat(e6) );
			$("#z6").html(r6.toFixed(2));
			var r7 = (parseFloat($("#z7").html()) - parseFloat(e7) );
			$("#z7").html(r7.toFixed(2));
			var r8 = (parseFloat($("#z8").html()) - parseFloat(e8) );
			$("#z8").html(r8.toFixed(2));
			var r9 = (parseFloat($("#z9").html()) - parseFloat(e9) );
			$("#z9").html(r9.toFixed(2));
			for( i=1; i<=9; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r1 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid21").click(function() { 
		var e10 = $("#e10").html();
		var e11 = $("#e11").html();
		var e12 = $("#e12").html();
		var e13 = $("#e13").html();
		var e14 = $("#e14").html();
		var e15 = $("#e15").html();
		var e16 = $("#e16").html();
		var e17 = $("#e17").html();
		var e18 = $("#e18").html();
		if($( "#spanid21" ).hasClass( "add-ic" )){
			$("#calculation21").addClass("selected-row");
			$("#spanid21").removeClass("add-ic");  
			$("#spanid21").addClass("close-ic");
			$("#spanid21").html('X');
			var r10 = (parseFloat($("#z1").html()) + parseFloat(e10) );
			$("#z1").html(r10.toFixed(2));
			var r11 = (parseFloat($("#z2").html()) + parseFloat(e11) );
			$("#z2").html(r11.toFixed(2));
			var r12 = (parseFloat($("#z3").html()) + parseFloat(e12) );
			$("#z3").html(r12.toFixed(2));
			var r13 = (parseFloat($("#z4").html()) + parseFloat(e13) );
			$("#z4").html(r13.toFixed(2));
			var r14 = (parseFloat($("#z5").html()) + parseFloat(e14) );
			$("#z5").html(r14.toFixed(2));
			var r15 = (parseFloat($("#z6").html()) + parseFloat(e15) );
			$("#z6").html(r15.toFixed(2));
			var r16 = (parseFloat($("#z7").html()) + parseFloat(e16) );
			$("#z7").html(r16.toFixed(2));
			var r17 = (parseFloat($("#z8").html()) + parseFloat(e17) );
			$("#z8").html(r17.toFixed(2));
			var r18 = (parseFloat($("#z9").html()) + parseFloat(e18) );
			$("#z9").html(r18.toFixed(2));
			for( i=10; i<=18; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation21").removeClass("selected-row");
			 $("#spanid21").removeClass("close-ic");  
			 $("#spanid21").addClass("add-ic");
			 $("#spanid21").html('+');
			 var r10 = (parseFloat($("#z1").html()) - parseFloat(e10) );
			$("#z1").html(r10.toFixed(2));
			var r11 = (parseFloat($("#z2").html()) - parseFloat(e11) );
			$("#z2").html(r11.toFixed(2));
			var r12 = (parseFloat($("#z3").html()) - parseFloat(e12) );
			$("#z3").html(r12.toFixed(2));
			var r13 = (parseFloat($("#z4").html()) - parseFloat(e13) );
			$("#z4").html(r13.toFixed(2));
			var r14 = (parseFloat($("#z5").html()) - parseFloat(e14) );
			$("#z5").html(r14.toFixed(2));
			var r15 = (parseFloat($("#z6").html()) - parseFloat(e15) );
			$("#z6").html(r15.toFixed(2));
			var r16 = (parseFloat($("#z7").html()) - parseFloat(e16) );
			$("#z7").html(r16.toFixed(2));
			var r17 = (parseFloat($("#z8").html()) - parseFloat(e17) );
			$("#z8").html(r17.toFixed(2));
			var r18 = (parseFloat($("#z9").html()) - parseFloat(e18) );
			$("#z9").html(r18.toFixed(2));
			for( i=10; i<=18; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r10 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid22").click(function() { 
		var e19 = $("#e19").html();
		var e20 = $("#e20").html();
		var e21 = $("#e21").html();
		var e22 = $("#e22").html();
		var e23 = $("#e23").html();
		var e24 = $("#e24").html();
		var e25 = $("#e25").html();
		var e26 = $("#e26").html();
		var e27 = $("#e27").html();							  
		if($( "#spanid22" ).hasClass( "add-ic" )){
			$("#calculation22").addClass("selected-row");
			$("#spanid22").removeClass("add-ic");  
			$("#spanid22").addClass("close-ic");
			$("#spanid22").html('X');
			var r19 = (parseFloat($("#z1").html()) + parseFloat(e19) );
			$("#z1").html(r19.toFixed(2));
			var r20 = (parseFloat($("#z2").html()) + parseFloat(e20) );
			$("#z2").html(r20.toFixed(2));
			var r21 = (parseFloat($("#z3").html()) + parseFloat(e21) );
			$("#z3").html(r21.toFixed(2));
			var r22 = (parseFloat($("#z4").html()) + parseFloat(e22) );
			$("#z4").html(r22.toFixed(2));
			var r23 = (parseFloat($("#z5").html()) + parseFloat(e23) );
			$("#z5").html(r23.toFixed(2));
			var r24 = (parseFloat($("#z6").html()) + parseFloat(e24) );
			$("#z6").html(r24.toFixed(2));
			var r25 = (parseFloat($("#z7").html()) + parseFloat(e25) );
			$("#z7").html(r25.toFixed(2));
			var r26 = (parseFloat($("#z8").html()) + parseFloat(e26) );
			$("#z8").html(r26.toFixed(2));
			var r27 = (parseFloat($("#z9").html()) + parseFloat(e27) );
			$("#z9").html(r27.toFixed(2));
			for( i=19; i<=27; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation22").removeClass("selected-row");
			 $("#spanid22").removeClass("close-ic");  
			 $("#spanid22").addClass("add-ic");
			 $("#spanid22").html('+');
			 var r19 = (parseFloat($("#z1").html()) - parseFloat(e19) );
			$("#z1").html(r19.toFixed(2));
			var r20 = (parseFloat($("#z2").html()) - parseFloat(e20) );
			$("#z2").html(r20.toFixed(2));
			var r21 = (parseFloat($("#z3").html()) - parseFloat(e21) );
			$("#z3").html(r21.toFixed(2));
			var r22 = (parseFloat($("#z4").html()) - parseFloat(e22) );
			$("#z4").html(r22.toFixed(2));
			var r23 = (parseFloat($("#z5").html()) - parseFloat(e23) );
			$("#z5").html(r23.toFixed(2));
			var r24 = (parseFloat($("#z6").html()) - parseFloat(e24) );
			$("#z6").html(r24.toFixed(2));
			var r25 = (parseFloat($("#z7").html()) - parseFloat(e25) );
			$("#z7").html(r25.toFixed(2));
			var r26 = (parseFloat($("#z8").html()) - parseFloat(e26) );
			$("#z8").html(r26.toFixed(2));
			var r27 = (parseFloat($("#z9").html()) - parseFloat(e27) );
			$("#z9").html(r27.toFixed(2));
			for( i=19; i<=27; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r19 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid23").click(function() {
		var e28 = $("#e28").html();
		var e29 = $("#e29").html();
		var e30 = $("#e30").html();
		var e31 = $("#e31").html();
		var e32 = $("#e32").html();
		var e33 = $("#e33").html();
		var e34 = $("#e34").html();
		var e35 = $("#e35").html();
		var e36 = $("#e36").html();							  
		if($( "#spanid23" ).hasClass( "add-ic" )){
			$("#calculation23").addClass("selected-row");
			$("#spanid23").removeClass("add-ic");  
			$("#spanid23").addClass("close-ic");
			$("#spanid23").html('X');
			var r28 = (parseFloat($("#z1").html()) + parseFloat(e28) );
			$("#z1").html(r28.toFixed(2));
			var r29 = (parseFloat($("#z2").html()) + parseFloat(e29) );
			$("#z2").html(r29.toFixed(2));
			var r30 = (parseFloat($("#z3").html()) + parseFloat(e30) );
			$("#z3").html(r30.toFixed(2));
			var r31 = (parseFloat($("#z4").html()) + parseFloat(e31) );
			$("#z4").html(r31.toFixed(2));
			var r32 = (parseFloat($("#z5").html()) + parseFloat(e32) );
			$("#z5").html(r32.toFixed(2));
			var r33 = (parseFloat($("#z6").html()) + parseFloat(e33) );
			$("#z6").html(r33.toFixed(2));
			var r34 = (parseFloat($("#z7").html()) + parseFloat(e34) );
			$("#z7").html(r34.toFixed(2));
			var r35 = (parseFloat($("#z8").html()) + parseFloat(e35) );
			$("#z8").html(r35.toFixed(2));
			var r36 = (parseFloat($("#z9").html()) + parseFloat(e36) );
			$("#z9").html(r36.toFixed(2));
			for( i=28; i<=36; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r28 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation23").removeClass("selected-row");
			 $("#spanid23").removeClass("close-ic");  
			 $("#spanid23").addClass("add-ic");
			 $("#spanid23").html('+');
			 var r28 = (parseFloat($("#z1").html()) - parseFloat(e28) );
			$("#z1").html(r28.toFixed(2));
			var r29 = (parseFloat($("#z2").html()) - parseFloat(e29) );
			$("#z2").html(r29.toFixed(2));
			var r30 = (parseFloat($("#z3").html()) - parseFloat(e30) );
			$("#z3").html(r30.toFixed(2));
			var r31 = (parseFloat($("#z4").html()) - parseFloat(e31) );
			$("#z4").html(r31.toFixed(2));
			var r32 = (parseFloat($("#z5").html()) - parseFloat(e32) );
			$("#z5").html(r32.toFixed(2));
			var r33 = (parseFloat($("#z6").html()) - parseFloat(e33) );
			$("#z6").html(r33.toFixed(2));
			var r34 = (parseFloat($("#z7").html()) - parseFloat(e34) );
			$("#z7").html(r34.toFixed(2));
			var r35 = (parseFloat($("#z8").html()) - parseFloat(e35) );
			$("#z8").html(r35.toFixed(2));
			var r36 = (parseFloat($("#z9").html()) - parseFloat(e36) );
			$("#z9").html(r36.toFixed(2));
			for( i=28; i<=36; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r28 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid24").click(function() {
		var e37 = $("#e37").html();
		var e38 = $("#e38").html();
		var e39 = $("#e39").html();
		var e40 = $("#e40").html();
		var e41 = $("#e41").html();
		var e42 = $("#e42").html();
		var e43 = $("#e43").html();
		var e44 = $("#e44").html();
		var e45 = $("#e45").html();							  
		if($( "#spanid24" ).hasClass( "add-ic" )){
			$("#calculation24").addClass("selected-row");
			$("#spanid24").removeClass("add-ic");  
			$("#spanid24").addClass("close-ic");
			$("#spanid24").html('X');
			var r37 = (parseFloat($("#z1").html()) + parseFloat(e37) );
			$("#z1").html(r37.toFixed(2));
			var r38 = (parseFloat($("#z2").html()) + parseFloat(e38) );
			$("#z2").html(r38.toFixed(2));
			var r39 = (parseFloat($("#z3").html()) + parseFloat(e39) );
			$("#z3").html(r39.toFixed(2));
			var r40 = (parseFloat($("#z4").html()) + parseFloat(e40) );
			$("#z4").html(r40.toFixed(2));
			var r41 = (parseFloat($("#z5").html()) + parseFloat(e41) );
			$("#z5").html(r41.toFixed(2));
			var r42 = (parseFloat($("#z6").html()) + parseFloat(e42) );
			$("#z6").html(r42.toFixed(2));
			var r43 = (parseFloat($("#z7").html()) + parseFloat(e43) );
			$("#z7").html(r43.toFixed(2));
			var r44 = (parseFloat($("#z8").html()) + parseFloat(e44) );
			$("#z8").html(r44.toFixed(2));
			var r45 = (parseFloat($("#z9").html()) + parseFloat(e45) );
			$("#z9").html(r45.toFixed(2));
			for( i=37; i<=45; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r37 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation24").removeClass("selected-row");
			 $("#spanid24").removeClass("close-ic");  
			 $("#spanid24").addClass("add-ic");
			 $("#spanid24").html('+');
			 var r37 = (parseFloat($("#z1").html()) - parseFloat(e37) );
			$("#z1").html(r37.toFixed(2));
			var r38 = (parseFloat($("#z2").html()) - parseFloat(e38) );
			$("#z2").html(r38.toFixed(2));
			var r39 = (parseFloat($("#z3").html()) - parseFloat(e39) );
			$("#z3").html(r39.toFixed(2));
			var r40 = (parseFloat($("#z4").html()) - parseFloat(e40) );
			$("#z4").html(r40.toFixed(2));
			var r41 = (parseFloat($("#z5").html()) - parseFloat(e41) );
			$("#z5").html(r41.toFixed(2));
			var r42 = (parseFloat($("#z6").html()) - parseFloat(e42) );
			$("#z6").html(r42.toFixed(2));
			var r43 = (parseFloat($("#z7").html()) - parseFloat(e43) );
			$("#z7").html(r43.toFixed(2));
			var r44 = (parseFloat($("#z8").html()) - parseFloat(e44) );
			$("#z8").html(r44.toFixed(2));
			var r45 = (parseFloat($("#z9").html()) - parseFloat(e45) );
			$("#z9").html(r45.toFixed(2));
			for( i=37; i<=45; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r37 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid25").click(function() {
		var e46 = $("#e46").html();
		var e47 = $("#e47").html();
		var e48 = $("#e48").html();
		var e49 = $("#e49").html();
		var e50 = $("#e50").html();
		var e51 = $("#e51").html();
		var e52 = $("#e52").html();
		var e53 = $("#e53").html();
		var e54 = $("#e54").html();							  
		if($( "#spanid25" ).hasClass( "add-ic" )){
			$("#calculation25").addClass("selected-row");
			$("#spanid25").removeClass("add-ic");  
			$("#spanid25").addClass("close-ic");
			$("#spanid25").html('X');
			var r46 = (parseFloat($("#z1").html()) + parseFloat(e46) );
			$("#z1").html(r46.toFixed(2));
			var r47 = (parseFloat($("#z2").html()) + parseFloat(e47) );
			$("#z2").html(r47.toFixed(2));
			var r48 = (parseFloat($("#z3").html()) + parseFloat(e48) );
			$("#z3").html(r48.toFixed(2));
			var r49 = (parseFloat($("#z4").html()) + parseFloat(e49) );
			$("#z4").html(r49.toFixed(2));
			var r50 = (parseFloat($("#z5").html()) + parseFloat(e50) );
			$("#z5").html(r50.toFixed(2));
			var r51 = (parseFloat($("#z6").html()) + parseFloat(e51) );
			$("#z6").html(r51.toFixed(2));
			var r52 = (parseFloat($("#z7").html()) + parseFloat(e52) );
			$("#z7").html(r52.toFixed(2));
			var r53 = (parseFloat($("#z8").html()) + parseFloat(e53) );
			$("#z8").html(r53.toFixed(2));
			var r54 = (parseFloat($("#z9").html()) + parseFloat(e54) );
			$("#z9").html(r54.toFixed(2));
			for( i=46; i<=54; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r46 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation25").removeClass("selected-row");
			 $("#spanid25").removeClass("close-ic");  
			 $("#spanid25").addClass("add-ic");
			 $("#spanid25").html('+');
			var r46 = (parseFloat($("#z1").html()) - parseFloat(e46) );
			$("#z1").html(r46.toFixed(2));
			var r47 = (parseFloat($("#z2").html()) - parseFloat(e47) );
			$("#z2").html(r47.toFixed(2));
			var r48 = (parseFloat($("#z3").html()) - parseFloat(e48) );
			$("#z3").html(r48.toFixed(2));
			var r49 = (parseFloat($("#z4").html()) - parseFloat(e49) );
			$("#z4").html(r49.toFixed(2));
			var r50 = (parseFloat($("#z5").html()) - parseFloat(e50) );
			$("#z5").html(r50.toFixed(2));
			var r51 = (parseFloat($("#z6").html()) - parseFloat(e51) );
			$("#z6").html(r51.toFixed(2));
			var r52 = (parseFloat($("#z7").html()) - parseFloat(e52) );
			$("#z7").html(r52.toFixed(2));
			var r53 = (parseFloat($("#z8").html()) - parseFloat(e53) );
			$("#z8").html(r53.toFixed(2));
			var r54 = (parseFloat($("#z9").html()) - parseFloat(e54) );
			$("#z9").html(r54.toFixed(2));
			for( i=46; i<=54; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r46 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid26").click(function() {
		var e55 = $("#e55").html();
		var e56 = $("#e56").html();
		var e57 = $("#e57").html();
		var e58 = $("#e58").html();
		var e59 = $("#e59").html();
		var e60 = $("#e60").html();
		var e61 = $("#e61").html();
		var e62 = $("#e62").html();
		var e63 = $("#e63").html();
		if($( "#spanid26" ).hasClass( "add-ic" )){
			$("#calculation26").addClass("selected-row");
			$("#spanid26").removeClass("add-ic");  
			$("#spanid26").addClass("close-ic");
			$("#spanid26").html('X');
			var r55 = (parseFloat($("#z1").html()) + parseFloat(e55) );
			$("#z1").html(r55.toFixed(2));
			var r56 = (parseFloat($("#z2").html()) + parseFloat(e56) );
			$("#z2").html(r56.toFixed(2));
			var r57 = (parseFloat($("#z3").html()) + parseFloat(e57) );
			$("#z3").html(r57.toFixed(2));
			var r58 = (parseFloat($("#z4").html()) + parseFloat(e58) );
			$("#z4").html(r58.toFixed(2));
			var r59 = (parseFloat($("#z5").html()) + parseFloat(e59) );
			$("#z5").html(r59.toFixed(2));
			var r60 = (parseFloat($("#z6").html()) + parseFloat(e60) );
			$("#z6").html(r60.toFixed(2));
			var r61 = (parseFloat($("#z7").html()) + parseFloat(e61) );
			$("#z7").html(r61.toFixed(2));
			var r62 = (parseFloat($("#z8").html()) + parseFloat(e62) );
			$("#z8").html(r62.toFixed(2));
			var r63 = (parseFloat($("#z9").html()) + parseFloat(e63) );
			$("#z9").html(r63.toFixed(2));
			for( i=55; i<=63; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r55 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation26").removeClass("selected-row");
			 $("#spanid26").removeClass("close-ic");  
			 $("#spanid26").addClass("add-ic");
			 $("#spanid26").html('+');
			 var r55 = (parseFloat($("#z1").html()) - parseFloat(e55) );
			$("#z1").html(r55.toFixed(2));
			var r56 = (parseFloat($("#z2").html()) - parseFloat(e56) );
			$("#z2").html(r56.toFixed(2));
			var r57 = (parseFloat($("#z3").html()) - parseFloat(e57) );
			$("#z3").html(r57.toFixed(2));
			var r58 = (parseFloat($("#z4").html()) - parseFloat(e58) );
			$("#z4").html(r58.toFixed(2));
			var r59 = (parseFloat($("#z5").html()) - parseFloat(e59) );
			$("#z5").html(r59.toFixed(2));
			var r60 = (parseFloat($("#z6").html()) - parseFloat(e60) );
			$("#z6").html(r60.toFixed(2));
			var r61 = (parseFloat($("#z7").html()) - parseFloat(e61) );
			$("#z7").html(r61.toFixed(2));
			var r62 = (parseFloat($("#z8").html()) - parseFloat(e62) );
			$("#z8").html(r62.toFixed(2));
			var r63 = (parseFloat($("#z9").html()) - parseFloat(e63) );
			$("#z9").html(r63.toFixed(2));
			for( i=55; i<=63; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r55 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid27").click(function() {
		var e64 = $("#e64").html();
		var e65 = $("#e65").html();
		var e66 = $("#e66").html();
		var e67 = $("#e67").html();
		var e68 = $("#e68").html();
		var e69 = $("#e69").html();
		var e70 = $("#e70").html();
		var e71 = $("#e71").html();
		var e72 = $("#e72").html();							  
		if($( "#spanid27" ).hasClass( "add-ic" )){
			$("#calculation27").addClass("selected-row");
			$("#spanid27").removeClass("add-ic");  
			$("#spanid27").addClass("close-ic");
			$("#spanid27").html('X');
			var r64 = (parseFloat($("#z1").html()) + parseFloat(e64) );
			$("#z1").html(r64.toFixed(2));
			var r65 = (parseFloat($("#z2").html()) + parseFloat(e65) );
			$("#z2").html(r65.toFixed(2));
			var r66 = (parseFloat($("#z3").html()) + parseFloat(e66) );
			$("#z3").html(r66.toFixed(2));
			var r67 = (parseFloat($("#z4").html()) + parseFloat(e67) );
			$("#z4").html(r67.toFixed(2));
			var r68 = (parseFloat($("#z5").html()) + parseFloat(e68) );
			$("#z5").html(r68.toFixed(2));
			var r69 = (parseFloat($("#z6").html()) + parseFloat(e69) );
			$("#z6").html(r69.toFixed(2));
			var r70 = (parseFloat($("#z7").html()) + parseFloat(e70) );
			$("#z7").html(r70.toFixed(2));
			var r71 = (parseFloat($("#z8").html()) + parseFloat(e71) );
			$("#z8").html(r71.toFixed(2));
			var r72 = (parseFloat($("#z9").html()) + parseFloat(e72) );
			$("#z9").html(r72.toFixed(2));
			for( i=64; i<=72; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r64 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation27").removeClass("selected-row");
			 $("#spanid27").removeClass("close-ic");  
			 $("#spanid27").addClass("add-ic");
			 $("#spanid27").html('+');
			 var r64 = (parseFloat($("#z1").html()) - parseFloat(e64) );
			$("#z1").html(r64.toFixed(2));
			var r65 = (parseFloat($("#z2").html()) - parseFloat(e65) );
			$("#z2").html(r65.toFixed(2));
			var r66 = (parseFloat($("#z3").html()) - parseFloat(e66) );
			$("#z3").html(r66.toFixed(2));
			var r67 = (parseFloat($("#z4").html()) - parseFloat(e67) );
			$("#z4").html(r67.toFixed(2));
			var r68 = (parseFloat($("#z5").html()) - parseFloat(e68) );
			$("#z5").html(r68.toFixed(2));
			var r69 = (parseFloat($("#z6").html()) - parseFloat(e69) );
			$("#z6").html(r69.toFixed(2));
			var r70 = (parseFloat($("#z7").html()) - parseFloat(e70) );
			$("#z7").html(r70.toFixed(2));
			var r71 = (parseFloat($("#z8").html()) - parseFloat(e71) );
			$("#z8").html(r71.toFixed(2));
			var r72 = (parseFloat($("#z9").html()) - parseFloat(e72) );
			$("#z9").html(r72.toFixed(2));
			for( i=64; i<=72; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r64 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid28").click(function() {
		var e73 = $("#e73").html();
		var e74 = $("#e74").html();
		var e75 = $("#e75").html();
		var e76 = $("#e76").html();
		var e77 = $("#e77").html();
		var e78 = $("#e78").html();
		var e79 = $("#e79").html();
		var e80 = $("#e80").html();
		var e81 = $("#e81").html();							  
		if($( "#spanid28" ).hasClass( "add-ic" )){
			$("#calculation28").addClass("selected-row");
			$("#spanid28").removeClass("add-ic");  
			$("#spanid28").addClass("close-ic");
			$("#spanid28").html('X');
			var r73 = (parseFloat($("#z1").html()) + parseFloat(e73) );
			$("#z1").html(r73.toFixed(2));
			var r74 = (parseFloat($("#z2").html()) + parseFloat(e74) );
			$("#z2").html(r74.toFixed(2));
			var r75 = (parseFloat($("#z3").html()) + parseFloat(e75) );
			$("#z3").html(r75.toFixed(2));
			var r76 = (parseFloat($("#z4").html()) + parseFloat(e76) );
			$("#z4").html(r76.toFixed(2));
			var r77 = (parseFloat($("#z5").html()) + parseFloat(e77) );
			$("#z5").html(r77.toFixed(2));
			var r78 = (parseFloat($("#z6").html()) + parseFloat(e78) );
			$("#z6").html(r78.toFixed(2));
			var r79 = (parseFloat($("#z7").html()) + parseFloat(e79) );
			$("#z7").html(r79.toFixed(2));
			var r80 = (parseFloat($("#z8").html()) + parseFloat(e80) );
			$("#z8").html(r80.toFixed(2));
			var r81 = (parseFloat($("#z9").html()) + parseFloat(e81) );
			$("#z9").html(r81.toFixed(2));
			for( i=73; i<=81; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r73 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation28").removeClass("selected-row");
			 $("#spanid28").removeClass("close-ic");  
			 $("#spanid28").addClass("add-ic");
			 $("#spanid28").html('+');
			 var r73 = (parseFloat($("#z1").html()) - parseFloat(e73) );
			$("#z1").html(r73.toFixed(2));
			var r74 = (parseFloat($("#z2").html()) - parseFloat(e74) );
			$("#z2").html(r74.toFixed(2));
			var r75 = (parseFloat($("#z3").html()) - parseFloat(e75) );
			$("#z3").html(r75.toFixed(2));
			var r76 = (parseFloat($("#z4").html()) - parseFloat(e76) );
			$("#z4").html(r76.toFixed(2));
			var r77 = (parseFloat($("#z5").html()) - parseFloat(e77) );
			$("#z5").html(r77.toFixed(2));
			var r78 = (parseFloat($("#z6").html()) - parseFloat(e78) );
			$("#z6").html(r78.toFixed(2));
			var r79 = (parseFloat($("#z7").html()) - parseFloat(e79) );
			$("#z7").html(r79.toFixed(2));
			var r80 = (parseFloat($("#z8").html()) - parseFloat(e80) );
			$("#z8").html(r80.toFixed(2));
			var r81 = (parseFloat($("#z9").html()) - parseFloat(e81) );
			$("#z9").html(r81.toFixed(2));
			for( i=73; i<=81; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r73 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid29").click(function() {
		var e82 = $("#e82").html();
		var e83 = $("#e83").html();
		var e84 = $("#e84").html();
		var e85 = $("#e85").html();
		var e86 = $("#e86").html();
		var e87 = $("#e87").html();
		var e88 = $("#e88").html();
		var e89 = $("#e89").html();
		var e90 = $("#e90").html();
		if($( "#spanid29" ).hasClass( "add-ic" )){
			$("#calculation29").addClass("selected-row");
			$("#spanid29").removeClass("add-ic");  
			$("#spanid29").addClass("close-ic");
			$("#spanid29").html('X');
			var r82 = (parseFloat($("#z1").html()) + parseFloat(e82) );
			$("#z1").html(r82.toFixed(2));
			var r83 = (parseFloat($("#z2").html()) + parseFloat(e83) );
			$("#z2").html(r83.toFixed(2));
			var r84 = (parseFloat($("#z3").html()) + parseFloat(e84) );
			$("#z3").html(r84.toFixed(2));
			var r85 = (parseFloat($("#z4").html()) + parseFloat(e85) );
			$("#z4").html(r85.toFixed(2));
			var r86 = (parseFloat($("#z5").html()) + parseFloat(e86) );
			$("#z5").html(r86.toFixed(2));
			var r87 = (parseFloat($("#z6").html()) + parseFloat(e87) );
			$("#z6").html(r87.toFixed(2));
			var r88 = (parseFloat($("#z7").html()) + parseFloat(e88) );
			$("#z7").html(r88.toFixed(2));
			var r89 = (parseFloat($("#z8").html()) + parseFloat(e89) );
			$("#z8").html(r89.toFixed(2));
			var r90 = (parseFloat($("#z9").html()) + parseFloat(e90) );
			$("#z9").html(r90.toFixed(2));
			for( i=82; i<=90; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r82 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation29").removeClass("selected-row");
			 $("#spanid29").removeClass("close-ic");  
			 $("#spanid29").addClass("add-ic");
			 $("#spanid29").html('+');
			 var r82 = (parseFloat($("#z1").html()) - parseFloat(e82) );
			$("#z1").html(r82.toFixed(2));
			var r83 = (parseFloat($("#z2").html()) - parseFloat(e83) );
			$("#z2").html(r83.toFixed(2));
			var r84 = (parseFloat($("#z3").html()) - parseFloat(e84) );
			$("#z3").html(r84.toFixed(2));
			var r85 = (parseFloat($("#z4").html()) - parseFloat(e85) );
			$("#z4").html(r85.toFixed(2));
			var r86 = (parseFloat($("#z5").html()) - parseFloat(e86) );
			$("#z5").html(r86.toFixed(2));
			var r87 = (parseFloat($("#z6").html()) - parseFloat(e87) );
			$("#z6").html(r87.toFixed(2));
			var r88 = (parseFloat($("#z7").html()) - parseFloat(e88) );
			$("#z7").html(r88.toFixed(2));
			var r89 = (parseFloat($("#z8").html()) - parseFloat(e89) );
			$("#z8").html(r89.toFixed(2));
			var r90 = (parseFloat($("#z9").html()) - parseFloat(e90) );
			$("#z9").html(r90.toFixed(2));
			for( i=82; i<=90; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r82 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid30").click(function() { 
		var e91 = $("#e91").html();
		var e92 = $("#e92").html();
		var e93 = $("#e93").html();
		var e94 = $("#e94").html();
		var e95 = $("#e95").html();
		var e96 = $("#e96").html();
		var e97 = $("#e97").html();
		var e98 = $("#e98").html();
		var e99 = $("#e99").html();
		if($( "#spanid30" ).hasClass( "add-ic" )){
			$("#calculation30").addClass("selected-row");
			$("#spanid30").removeClass("add-ic");  
			$("#spanid30").addClass("close-ic");
			$("#spanid30").html('X');
			var r91 = (parseFloat($("#z1").html()) + parseFloat(e91) );
			$("#z1").html(r91.toFixed(2));
			var r92 = (parseFloat($("#z2").html()) + parseFloat(e92) );
			$("#z2").html(r92.toFixed(2));
			var r93 = (parseFloat($("#z3").html()) + parseFloat(e93) );
			$("#z3").html(r93.toFixed(2));
			var r94 = (parseFloat($("#z4").html()) + parseFloat(e94) );
			$("#z4").html(r94.toFixed(2));
			var r95 = (parseFloat($("#z5").html()) + parseFloat(e95) );
			$("#z5").html(r95.toFixed(2));
			var r96 = (parseFloat($("#z6").html()) + parseFloat(e96) );
			$("#z6").html(r96.toFixed(2));
			var r97 = (parseFloat($("#z7").html()) + parseFloat(e97) );
			$("#z7").html(r97.toFixed(2));
			var r98 = (parseFloat($("#z8").html()) + parseFloat(e98) );
			$("#z8").html(r98.toFixed(2));
			var r99 = (parseFloat($("#z9").html()) + parseFloat(e99) );
			$("#z9").html(r99.toFixed(2));
			for( i=91; i<=99; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r91 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation30").removeClass("selected-row");
			 $("#spanid30").removeClass("close-ic");  
			 $("#spanid30").addClass("add-ic");
			 $("#spanid30").html('+');
			 var r91 = (parseFloat($("#z1").html()) - parseFloat(e91) );
			$("#z1").html(r91.toFixed(2));
			var r92 = (parseFloat($("#z2").html()) - parseFloat(e92) );
			$("#z2").html(r92.toFixed(2));
			var r93 = (parseFloat($("#z3").html()) - parseFloat(e93) );
			$("#z3").html(r93.toFixed(2));
			var r94 = (parseFloat($("#z4").html()) - parseFloat(e94) );
			$("#z4").html(r94.toFixed(2));
			var r95 = (parseFloat($("#z5").html()) - parseFloat(e95) );
			$("#z5").html(r95.toFixed(2));
			var r96 = (parseFloat($("#z6").html()) - parseFloat(e96) );
			$("#z6").html(r96.toFixed(2));
			var r97 = (parseFloat($("#z7").html()) - parseFloat(e97) );
			$("#z7").html(r97.toFixed(2));
			var r98 = (parseFloat($("#z8").html()) - parseFloat(e98) );
			$("#z8").html(r98.toFixed(2));
			var r99 = (parseFloat($("#z9").html()) - parseFloat(e99) );
			$("#z9").html(r99.toFixed(2));
			for( i=91; i<=99; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r91 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
		$("#spanid31").click(function() {
		var e100 = $("#e100").html();
		var e101 = $("#e101").html();
		var e102 = $("#e102").html();
		var e103 = $("#e103").html();
		var e104 = $("#e104").html();
		var e105 = $("#e105").html();
		var e106 = $("#e106").html();
		var e107 = $("#e107").html();
		var e108 = $("#e108").html();
		if($( "#spanid31" ).hasClass( "add-ic" )){
			$("#calculation31").addClass("selected-row");
			$("#spanid31").removeClass("add-ic");  
			$("#spanid31").addClass("close-ic");
			$("#spanid31").html('X');
			var r100 = (parseFloat($("#z1").html()) + parseFloat(e100) );
			$("#z1").html(r100.toFixed(2));
			var r101 = (parseFloat($("#z2").html()) + parseFloat(e101) );
			$("#z2").html(r101.toFixed(2));
			var r102 = (parseFloat($("#z3").html()) + parseFloat(e102) );
			$("#z3").html(r102.toFixed(2));
			var r103 = (parseFloat($("#z4").html()) + parseFloat(e103) );
			$("#z4").html(r103.toFixed(2));
			var r104 = (parseFloat($("#z5").html()) + parseFloat(e104) );
			$("#z5").html(r104.toFixed(2));
			var r105 = (parseFloat($("#z6").html()) + parseFloat(e105) );
			$("#z6").html(r105.toFixed(2));
			var r106 = (parseFloat($("#z7").html()) + parseFloat(e106) );
			$("#z7").html(r106.toFixed(2));
			var r107 = (parseFloat($("#z8").html()) + parseFloat(e107) );
			$("#z8").html(r107.toFixed(2));
			var r108 = (parseFloat($("#z9").html()) + parseFloat(e108) );
			$("#z9").html(r108.toFixed(2));
			for( i=100; i<=108; i++)
			{
				$("#e"+i).css("font-size","18px");
			}
			if(r100 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}else{
			 $("#calculation31").removeClass("selected-row");
			 $("#spanid31").removeClass("close-ic");  
			 $("#spanid31").addClass("add-ic");
			 $("#spanid31").html('+');
			 var r100 = (parseFloat($("#z1").html()) - parseFloat(e100) );
			$("#z1").html(r100.toFixed(2));
			var r101 = (parseFloat($("#z2").html()) - parseFloat(e101) );
			$("#z2").html(r101.toFixed(2));
			var r102 = (parseFloat($("#z3").html()) - parseFloat(e102) );
			$("#z3").html(r102.toFixed(2));
			var r103 = (parseFloat($("#z4").html()) - parseFloat(e103) );
			$("#z4").html(r103.toFixed(2));
			var r104 = (parseFloat($("#z5").html()) - parseFloat(e104) );
			$("#z5").html(r104.toFixed(2));
			var r105 = (parseFloat($("#z6").html()) - parseFloat(e105) );
			$("#z6").html(r105.toFixed(2));
			var r106 = (parseFloat($("#z7").html()) - parseFloat(e106) );
			$("#z7").html(r106.toFixed(2));
			var r107 = (parseFloat($("#z8").html()) - parseFloat(e107) );
			$("#z8").html(r107.toFixed(2));
			var r108 = (parseFloat($("#z9").html()) - parseFloat(e108) );
			$("#z9").html(r108.toFixed(2));
			for( i=100; i<=108; i++)
			{
				$("#e"+i).css("font-size","0px");
			}
			if(r100 == 0){
				$("#z1").css("font-size","0px");
				$("#z2").css("font-size","0px");
				$("#z3").css("font-size","0px");
				$("#z4").css("font-size","0px");
				$("#z5").css("font-size","0px");
				$("#z6").css("font-size","0px");
				$("#z7").css("font-size","0px");
				$("#z8").css("font-size","0px");
				$("#z9").css("font-size","0px");
			}else{
				$("#z1").css("font-size","18px");
				$("#z2").css("font-size","18px")
				$("#z3").css("font-size","18px")
				$("#z4").css("font-size","18px")
				$("#z5").css("font-size","18px")
				$("#z6").css("font-size","18px")
				$("#z7").css("font-size","18px")
				$("#z8").css("font-size","18px")
				$("#z9").css("font-size","18px")
			}
		}	 
		});
		
/* New Calculation Page :: START */
$(".addcalc").click(function() { 
		
	if($(this).hasClass( "add-ic" )){
		$(this).removeClass("add-ic");  
		$(this).addClass("close-ic");
		$(this).html('X');
		var tid = '';
		tid = $(this).attr('id');
		tid = tid.replace("main_td_", "");

		$(this).parents("tr").addClass("selected-row");

		$("#rec_td_"+tid).css("display","table-row");
		$("#rec_td_"+tid).addClass("selected-row");

		$("#energy_"+tid).css("font-size","18px");
		$("#totalfat_"+tid).css("font-size","18px");
		$("#satfat_"+tid).css("font-size","18px");
		$("#sodium_"+tid).css("font-size","18px");
		$("#carbo_"+tid).css("font-size","18px");
		$("#protein_"+tid).css("font-size","18px");
		$("#difi_"+tid).css("font-size","18px");
		$("#chol_"+tid).css("font-size","18px");
		$("#sugars_"+tid).css("font-size","18px");
		
		var a1 = $("#energy_"+tid).html();
		var a2 = $("#totalfat_"+tid).html();
		var a3 = $("#satfat_"+tid).html();
		var a4 = $("#sodium_"+tid).html();
		var a5 = $("#carbo_"+tid).html();
		var a6 = $("#protein_"+tid).html();
		var a7 = $("#difi_"+tid).html();
		var a8 = $("#chol_"+tid).html();
		var a9 = $("#sugars_"+tid).html();
		
		
		
		if($(window).width() < 991){ 
			var ac = parseFloat($('#z1').html());
			if(ac < 0  || ac == 0){ 
			}else if(ac == '0 kcal <span class="addcalc close-ic total-plus">+</span>'){
				ac = ac.replace('0 kcal <span class="addcalc close-ic total-plus">+</span>', ' '); 
			}else if(ac == ' kcal <span class="addcalc close-ic total-plus">+</span>'){
				ac = ac.replace(' kcal <span class="addcalc close-ic total-plus">+</span>', ' '); 
			}
			var x1= (parseFloat(ac) + parseFloat(a1));
			
			var at = x1.toFixed(2);	
			var ht = at + ' kcal <span class="addcalc close-ic total-plus">+</span>'; 			
		}else{
			var ac = parseFloat($('#z1').html());
			var x1= (parseFloat(ac) + parseFloat(a1));
			var at = x1.toFixed(2);	
			var ht = at;
		}
		
		$("#z1").html(ht);
		//$("#z1").html(x1.toFixed(2));
		var x2= (parseFloat($("#z2").html()) + parseFloat(a2));
		$("#z2").html(x2.toFixed(2));
		var x3= (parseFloat($("#z3").html()) + parseFloat(a3));
		$("#z3").html(x3.toFixed(2));
		var x4= (parseFloat($("#z4").html()) + parseFloat(a4));
		$("#z4").html(x4.toFixed(2));
		var x5= (parseFloat($("#z5").html()) + parseFloat(a5));
		$("#z5").html(x5.toFixed(2));
		var x6= (parseFloat($("#z6").html()) + parseFloat(a6));
		$("#z6").html(x6.toFixed(2));
		var x7= (parseFloat($("#z7").html()) + parseFloat(a7));
		$("#z7").html(x7.toFixed(2));
		var x8= (parseFloat($("#z8").html()) + parseFloat(a8));
		$("#z8").html(x8.toFixed(2));
		var x9= (parseFloat($("#z9").html()) + parseFloat(a9));
		$("#z9").html(x9.toFixed(2));
		
		if($(window).width() < 360){ 
			$("#z1").css("font-size","10px");
		}else{
			$("#z1").css("font-size","18px");
		}
		$("#z2").css("font-size","18px");
		$("#z3").css("font-size","18px");
		$("#z4").css("font-size","18px");
		$("#z5").css("font-size","18px");
		$("#z6").css("font-size","18px");
		$("#z7").css("font-size","18px");
		$("#z8").css("font-size","18px");
		$("#z9").css("font-size","18px");
		
	}else{
		$(this).removeClass("close-ic");  
		$(this).addClass("add-ic");
		$(this).html('+');

		var tid = '';
		tid = $(this).attr('id');
		tid = tid.replace("main_td_", "");
		$(this).parents("tr").removeClass("selected-row");
		
		$("#energy_"+tid).css("font-size","0px");
		$("#totalfat_"+tid).css("font-size","0px");
		$("#satfat_"+tid).css("font-size","0px");
		$("#sodium_"+tid).css("font-size","0px");
		$("#carbo_"+tid).css("font-size","0px");
		$("#protein_"+tid).css("font-size","0px");
		$("#difi_"+tid).css("font-size","0px");
		$("#chol_"+tid).css("font-size","0px");
		$("#sugars_"+tid).css("font-size","0px");
		
		var a1 = $("#energy_"+tid).html();
		var a2 = $("#totalfat_"+tid).html();
		var a3 = $("#satfat_"+tid).html();
		var a4 = $("#sodium_"+tid).html();
		var a5 = $("#carbo_"+tid).html();
		var a6 = $("#protein_"+tid).html();
		var a7 = $("#difi_"+tid).html();
		var a8 = $("#chol_"+tid).html();
		var a9 = $("#sugars_"+tid).html();

		//var x1= (parseFloat($("#z1").html()) - parseFloat(a1));
		if($(window).width() < 991){ 
			var ac = parseFloat($('#z1').html());
			if(ac < 0  || ac == 0){ 
			}else if(ac == '0 kcal <span class="addcalc close-ic total-plus">+</span>'){
				ac = ac.replace('0 kcal <span class="addcalc close-ic total-plus">+</span>', ' '); 
			}else if(ac == ' kcal <span class="addcalc close-ic total-plus">+</span>'){
				ac = ac.replace(' kcal <span class="addcalc close-ic total-plus">+</span>', ' '); 
			}
			var x1= (parseFloat(ac) - parseFloat(a1));
			
			var at = x1.toFixed(2);	
			if(at < 0  || at == 0){ 
				var ht = at;
			}else{
				var ht = at + ' kcal <span class="addcalc close-ic total-plus">+</span>'; 			
			}
		}else{
			var ac = parseFloat($('#z1').html());
			var x1= (parseFloat(ac) - parseFloat(a1));
			var at = x1.toFixed(2);	
			var ht = at;
		}
		
		$("#z1").html(ht);

		var x2= (parseFloat($("#z2").html()) - parseFloat(a2));
		$("#z2").html(x2.toFixed(2));
		var x3= (parseFloat($("#z3").html()) - parseFloat(a3));
		$("#z3").html(x3.toFixed(2));
		var x4= (parseFloat($("#z4").html()) - parseFloat(a4));
		$("#z4").html(x4.toFixed(2));
		var x5= (parseFloat($("#z5").html()) - parseFloat(a5));
		$("#z5").html(x5.toFixed(2));
		var x6= (parseFloat($("#z6").html()) - parseFloat(a6));
		$("#z6").html(x6.toFixed(2));
		var x7= (parseFloat($("#z7").html()) - parseFloat(a7));
		$("#z7").html(x7.toFixed(2));
		var x8= (parseFloat($("#z8").html()) - parseFloat(a8));
		$("#z8").html(x8.toFixed(2));
		var x9= (parseFloat($("#z9").html()) - parseFloat(a9));
		$("#z9").html(x9.toFixed(2));

		if(x1 > 0 || x2 > 0 || x3 > 0 || x4 > 0 || x5 > 0 || x6 > 0 || x7 > 0 || x8 > 0 || x9){
			if($(window).width() < 360){ 
				$("#z1").css("font-size","10px");
			}else{
				$("#z1").css("font-size","18px");
			}
			$("#z2").css("font-size","18px");
			$("#z3").css("font-size","18px");
			$("#z4").css("font-size","18px");
			$("#z5").css("font-size","18px");
			$("#z6").css("font-size","18px");
			$("#z7").css("font-size","18px");
			$("#z8").css("font-size","18px");
			$("#z9").css("font-size","18px");
		}else{ 
			if($(window).width() < 991){ 
				if($(window).width() < 360){ 
					$("#z1").css("font-size","0px");
				}else{
					$("#z1").css("font-size","0px");
				}
			}else{
				$("#z1").css("font-size","0px");
			}
			$("#z2").css("font-size","0px");
			$("#z3").css("font-size","0px");
			$("#z4").css("font-size","0px");
			$("#z5").css("font-size","0px");
			$("#z6").css("font-size","0px");
			$("#z7").css("font-size","0px");
			$("#z8").css("font-size","0px");
			$("#z9").css("font-size","0px");
		}
	}
}); 


$(".show_rec_dtl").click(function() { 

	$(".show_rec_dtl").removeClass('show_rec_dtl_active');
	$(this).addClass('show_rec_dtl_active');
	var tid2 = '';
	tid2 = $(this).attr('id');
	tid2 = tid2.replace("click_", "");

	var showjason = $("#showjason").val();
	showjason = showjason.split(',');	
	/*alert(tid2);
	alert(showjason);*/
	
	var showcat = $("#showcat").val();
	showcat = showcat.split(',');
	for(var c=0; c<showcat.length; c++){	
		if(showcat[c] != ""){
			$('.cls_'+showcat[c]).hide();
		}
	}

	$("#z1").html(0);
	$("#z2").html(0);
	$("#z3").html(0);
	$("#z4").html(0);
	$("#z5").html(0);
	$("#z6").html(0);
	$("#z7").html(0);
	$("#z8").html(0);
	$("#z9").html(0);

	$("#z1").css("font-size","0px");
	$("#z2").css("font-size","0px");
	$("#z3").css("font-size","0px");
	$("#z4").css("font-size","0px");
	$("#z5").css("font-size","0px");
	$("#z6").css("font-size","0px");
	$("#z7").css("font-size","0px");
	$("#z8").css("font-size","0px");
	$("#z9").css("font-size","0px");
	
	$(".calc-tbl tbody tr").removeClass('selected-row');
	$(".addcalc").html('+');
	$(".addcalc").removeClass('close-ic');	
	$(".addcalc").addClass('add-ic');
	$(".calc-tbl tbody tr td.nofont").css("font-size","0px");
	
	$(".rectr").hide();
	//$(".rectr2").show();
	
	$(".calc-tbl thead").show();
	$(".rec_"+tid2).show();
	$(".total-row").show();
	
	$(".ext_tr").show();
	$("tfoot").show();
	$(".new_footer_row").show();
	
	var showcat = '';
	var showcatarr = '';
	for(var f=0; f<showjason.length; f++){		
		if(showjason[f] != ""){
			showcatarr = showjason[f].split(':');
			//alert(f+' => '+showjason[f]+' => '+showcatarr[1]+' => '+showcatarr[0]+' => '+tid2);
			//alert(showcatarr[1]+' => '+showcatarr[0]+' => '+tid2);
			if(tid2 == showcatarr[0]){ 
				//alert('true');
				$('.cls_'+showcatarr[1]).show();
			} 
		}
	}
	
	/*var mw2 = $('.thead_first_td').width();
	mw2 = mw2 + 29;
	
	var tddesc = $('table.calc-tbl tbody tr.rectr td.td_desc').width();
	var tdodd = $('table.calc-tbl tbody tr.rectr td.odd').width();
	tddesc = tddesc + 8;
	tdodd = tdodd + 9;
	
	$('table.calc-tbl tr td.total_row_tr').width(mw2);
	$('table.calc-tbl tr td.td_img').width(mw2);
	$('table.calc-tbl tr td.rectr').width(mw2);
	
	$('table.calc-tbl tr td.total_row_tr').css('width', mw2);
	$('table.calc-tbl tr td.td_img').css('width', mw2);	
	$('table.calc-tbl tr td.rectr').css('width', mw2);
	
	$('table.calc-tbl tr td.total_row_tr').css('min-width', mw2);
	$('table.calc-tbl tr td.td_img').css('min-width', mw2);	
	$('table.calc-tbl tr td.rectr').css('min-width', mw2);	
	
	//alert(tddesc+' '+tdodd);

	$('#z1').css('width', tddesc);
	$('#z2').css('width', tdodd);
	$('#z3').css('width', tddesc);
	$('#z4').css('width', tdodd);
	$('#z5').css('width', tddesc);
	$('#z6').css('width', tdodd);
	$('#z7').css('width', tddesc);
	$('#z8').css('width', tdodd);
	$('#z9').css('width', tddesc);
	
	$('#z1').css('min-width', tddesc);
	$('#z2').css('min-width', tdodd);	
	$('#z3').css('min-width', tddesc);
	$('#z4').css('min-width', tdodd);	
	$('#z5').css('min-width', tddesc);
	$('#z6').css('min-width', tdodd);	
	$('#z7').css('min-width', tddesc);
	$('#z8').css('min-width', tdodd);	
	$('#z9').css('min-width', tddesc);*/

}); 
/* New Calculation Page :: OVER */

		
});// JavaScript Document