window.onload=function(){
	$(function(){
			$("#header .two .tab .you").mouseenter(function(){
				$(this).removeClass("righthover");
				$(this).addClass("right");
				$("#header .two .tab .zuo").removeClass("left");
				$("#header .two .tab .zuo").addClass("lefthover");
				$("#header .two .con .SJZC").css("display","none");
				$("#header .two .con .YXZC").css("display","block");
			});
			$("#header .two .tab .zuo").mouseenter(function(){
				$(this).removeClass("lefthover");
				$(this).addClass("left");
				$("#header .two .tab .you").removeClass("right");
				$("#header .two .tab .you").addClass("righthover");
				$("#header .two .con .YXZC").css("display","none");
				$("#header .two .con .SJZC").css("display","block");
			});


			for(var i=0; i<$("#content .tab li").length; i++){
				$("#content .tab li").eq(i).click(function(){
					$("#content .tab li").removeClass("click");
					$(this).addClass("click");
				});
			}
			$("#content .tab li").eq(0).click(function(){
				$("#content .background .DD").css("display","none");
				$("#content .background .DD").eq(0).css("display","block");
			});
			$("#content .tab li").eq(1).click(function(){
				$("#content .background .DD").css("display","none");
				$("#content .background .DD").eq(1).css("display","block");
			});
			$("#content .tab li").eq(2).click(function(){
				$("#content .background .DD").css("display","none");
				$("#content .background .DD").eq(2).css("display","block");
			});

			
		});




}