window.onload=function(){
	$(function(){
		$(".small:eq(1)").mouseover(function(){
			$(".line:eq(5)").stop().animate({"width":"100%"},200);
		});
		$(".small:eq(1)").mouseout(function(){
			$(".line:eq(5)").stop().animate({"width":"0px"},200);
		});

		$(".small:eq(2)").mouseover(function(){
			$(".line:eq(6)").stop().animate({"width":"100%"},200);
		});
		$(".small:eq(2)").mouseout(function(){
			$(".line:eq(6)").stop().animate({"width":"0px"},200);
		});

		$(".big:eq(3)").mouseover(function(){
			$(".line:eq(4)").stop().animate({"width":"100%"},200);
		});
		$(".big:eq(3)").mouseout(function(){
			$(".line:eq(4)").stop().animate({"width":"0px"},200);
		});

		$(".big:eq(2)").mouseover(function(){
			$(".line:eq(3)").stop().animate({"width":"100%"},200);
		});
		$(".big:eq(2)").mouseout(function(){
			$(".line:eq(3)").stop().animate({"width":"0px"},200);
		});

		$(".big:eq(1)").mouseover(function(){
			$(".line:eq(2)").stop().animate({"width":"100%"},200);
		});
		$(".big:eq(1)").mouseout(function(){
			$(".line:eq(2)").stop().animate({"width":"0px"},200);
		});

		$(".big:eq(0)").mouseover(function(){
			$(".line:eq(1)").stop().animate({"width":"100%"},200);
		});
		$(".big:eq(0)").mouseout(function(){
			$(".line:eq(1)").stop().animate({"width":"0px"},200);
		});


		$(".JWYX").mouseenter(function(){
			$(".JWYX_nav").stop().animate({"height":"260px"},400);
		});
		$(".JWYX").mouseleave(function(){
			$(".JWYX_nav").stop().animate({"height":"0"},400);
		});

		$(".DXYX").mouseenter(function(){
			$(".DXYX_nav").stop().animate({"height":"350px"},400);
		});
		$(".DXYX").mouseleave(function(){
			$(".DXYX_nav").stop().animate({"height":"0"},400);
		});

		$(".SJYX").mouseenter(function(){
			$(".SJYX_nav").stop().animate({"height":"300px"},400);
		});
		$(".SJYX").mouseleave(function(){
			$(".SJYX_nav").stop().animate({"height":"0"},400);
		});

		$(".WYYX").mouseenter(function(){
			$(".WYYX_nav").stop().animate({"height":"100px"},400);
		});
		$(".WYYX").mouseleave(function(){
			$(".WYYX_nav").stop().animate({"height":"0"},400);
		});

	});


	$(function(){
			setTimeout(autoplay);
			var i=0;
			var timer=null;
			$("#prev").click(function(){
				clearInterval(timer);
				i--;
				if(i<0){
					i=$("#box img").length-1;
				}
				$("#box img").animate({"opacity":"0"},100);
				$("#box img").eq(i).animate({"opacity":"1"},100);
				$("#btn li").css("background","#fff");
				$("#btn li").eq(i).css("background","#FF9900");
				console.log(i);	
				setTimeout(autoplay,2000);
			});


			$("#next").click(function(){
				clearInterval(timer);
				i++;
				if(i==$("#box img").length){
					i=0;
				}
				$("#box img").animate({"opacity":"0"},100);
				$("#box img").eq(i).animate({"opacity":"1"},100);
				$("#btn li").css("background","#fff");
				$("#btn li").eq(i).css("background","#FF9900");
				setTimeout(autoplay,2000);
			});

			function autoplay(){
				clearInterval(timer)
				timer=setInterval(function(){
					i++;
					if(i==$("#box img").length){
						i=0;
					}
					$("#box img").animate({"opacity":"0"},100);
					$("#box img").eq(i).animate({"opacity":"1"},100);
					$("#btn li").css("background","#fff");
					$("#btn li").eq(i).css("background","#FF9900");
				},4000);
			}
		});




		$(function(){
			var shadowtop=-115;
			var timer=null;
			var timer1=null;
			var timer2=null;
			var i=0;
			$("#box2 .one").stop().mouseenter(function(){
				if(shadowtop=$("#box2 .one .shadow").position().top){
					clearTimeout(timer);
					clearTimeout(timer1);
					clearTimeout(timer2);
					timer=setTimeout(function(){
						$("#box2 .one .shadow dt").css({"top":"70%","transition":"0.3s"});
					},600);
					timer1=setTimeout(function(){
						$("#box2 .one .shadow dt").css({"top":"50%","transition":"0.3s"});
					},800);
					timer2=setTimeout(function(){
						$("#box2 .one .shadow dt").css({"top":"60%","transition":"0.3s"});
					},900);
				}
			});

			$("#box2 .one").stop().mouseleave(function(){
					clearTimeout(timer);
					clearTimeout(timer1);
					clearTimeout(timer2);
				$("#box2 .one .shadow dt").css({"top":"17%"});
			});


			$("#box2 .two").stop().mouseenter(function(){
				if(shadowtop=$("#box2 .two .shadow").position().top){
					clearTimeout(timer);
					clearTimeout(timer1);
					clearTimeout(timer2);
					timer=setTimeout(function(){
						$("#box2 .two .shadow dt").css({"top":"70%","transition":"0.3s"});
					},600);
					timer1=setTimeout(function(){
						$("#box2 .two .shadow dt").css({"top":"50%","transition":"0.3s"});
					},800);
					timer2=setTimeout(function(){
						$("#box2 .two .shadow dt").css({"top":"60%","transition":"0.3s"});
					},900);
				}
			});

			$("#box2 .two").stop().mouseleave(function(){
					clearTimeout(timer);
					clearTimeout(timer1);
					clearTimeout(timer2);
				$("#box2 .two .shadow dt").css({"top":"17%"});
			});

			$("#box2 .three").stop().mouseenter(function(){
				if(shadowtop=$("#box2 .three .shadow").position().top){
					clearTimeout(timer);
					clearTimeout(timer1);
					clearTimeout(timer2);
					timer=setTimeout(function(){
						$("#box2 .three .shadow dt").css({"top":"70%","transition":"0.3s"});
					},600);
					timer1=setTimeout(function(){
						$("#box2 .three .shadow dt").css({"top":"50%","transition":"0.3s"});
					},800);
					timer2=setTimeout(function(){
						$("#box2 .three .shadow dt").css({"top":"60%","transition":"0.3s"});
					},900);
				}
			});

			$("#box2 .three").stop().mouseleave(function(){
					clearTimeout(timer);
					clearTimeout(timer1);
					clearTimeout(timer2);
				$("#box2 .three .shadow dt").css({"top":"17%"});
			});

			$(".tuijian .top .right").click(function(){
				i++;
				if(i==$("#box2 .eq").length){
					i=0;
				}
				$("#box2 .eq").animate({"opacity":"0","transition":"0.2s"},100).removeClass("chuxian");
				$("#box2 .eq").eq(i).animate({"opacity":"1","transition":"0.2s"},100).addClass("chuxian");			
			});

		});




















	
}