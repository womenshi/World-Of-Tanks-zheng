$(function(){
			var i=0;
			var n=0;
			var $this=$("#header .all_game");
			var timer=null;			
			var num=$("#banner .BBG li").size();
			var index=0;
			var temp=0;
			var C=null;
			var N=null;
			function startMove(obj){
				var $all_game=obj.find("ul:first");
				var lineheight= $all_game.find("li:first").height();
				$all_game.animate({"margin-top":-lineheight+"px"},300,function(){
					$all_game.css("margin-top","0px").find("li:first").appendTo($all_game);
				});
			}

			// timer=setInterval(function(){
			// 	startMove($this);
			// },2000);

			$this.hover(function(){
				clearInterval(timer);
			},function(){
				timer=setInterval(function(){
					startMove($this);
				},2000);
			}).trigger("mouseout");	
			var $L1=$("#header .all_gamerun .L1");
			var $L2=$("#header .all_gamerun .L2");
			$L2.mouseenter(function(){
				$("#header .all_gamepic ul").eq(0).animate({"height":"194px"},200);
				$("#header .all_gamepic ul img").eq(0).css("display","block");
				$("#header .all_gamerun").css("display","none");
			});
			$("#header .all_gamepic ul").stop().mouseleave(function(){				
				$("#header .all_gamepic ul").eq(0).css("height","0px");
				$("#header .all_gamepic ul img").eq(0).css("display","none");
				$("#header .all_gamerun").css("display","block");
			});
			$L1.mouseenter(function(){
				$("#header .all_gamepic ul").eq(1).animate({"height":"194px"},200);
				$("#header .all_gamepic ul img").eq(1).css("display","block");
				$("#header .all_gamerun").css("display","none");
			});
			$("#header .all_gamepic ul").stop().mouseleave(function(){				
				$("#header .all_gamepic ul").eq(1).css("height","0px");
				$("#header .all_gamepic ul img").eq(1).css("display","none");
				$("#header .all_gamerun").css("display","block");
			});

			$("#header .another").mouseenter(function(){
				$("#header #anotherBox").stop().animate({"height":"260px"},300);
				$("#header .anotherbox").stop().css("display","block");
			});


			$("#header .another").mouseleave(function(){
				$("#header #anotherBox").stop().css("height","0px");
				$("#header .anotherbox").stop().css("display","none");
			});

			function move(){								
				index++;
				if(index==num) index=0;
					
				$("#banner .BBG li").eq(index).fadeIn().siblings().fadeOut();
				$("#banner .Btn p").eq(index).addClass("curr").siblings().removeClass("curr");
			};
			
			timer=setInterval(move,4000);
			$("#banner .Btn p").click(function(){

				var temp=$(this).index();
				index=temp;
				$(this).addClass("curr").siblings().removeClass("curr");
				var i=$(this).index();
				$("#banner .BBG li").eq(i).stop().fadeIn(400).siblings().fadeOut();
			});
			var timer=null;
			$("#nav .tnav").mouseenter(function(){
				clearTimeout(timer);
				$("#nav .navbg").stop().animate({"height":"285px"},300).addClass("background");
				$("#nav .tnav").stop().animate({"height":"285px"},300);
			});
			$("#nav .tnav").mouseleave(function(){
				$("#nav .navbg").stop().animate({"height":"55px"},300);
				$("#nav .tnav").stop().animate({"height":"55px"},300);	
				timer=setTimeout(function(){
					$("#nav .navbg").removeClass("background");
				},250);
			});
			for(i=0; i<=$(".newlist .tab1 a").length; i++){
				$(".newlist .tab1 a").eq(i).click(function(){
					$(this).addClass("curror").siblings().removeClass("curror");
					var n=$(this).index();
					$(".newlist .tablist div").eq(n).css({"display":"block"}).siblings().css({"display":"none"});
				});
			}

			for(var i=0; i<=$(".content2 .newlistN .tab a").length; i++){
			$(".content2 .newlistN .tab a").eq(i).click(function(){
				$(this).addClass("cour").siblings().removeClass("cour");
				var n=$(this).index();
				//console.log(n);
				$(".content2 .newlistN .tablist .list2").eq(n).css({"display":"block"}).siblings().css({"display":"none"});
			});
		}
		var $Li=$("#content4 .YXG .tab li");
			var $picwidth=$("#content4 .YXG .tablist .box .smallbox li").width()+8;
			var n=0;
			var u=0;
			var k=0;
			for(var i=0; i<=$Li.length; i++){
				$Li.eq(i).click(function(){
					$(this).addClass("curr").siblings().removeClass("curr");
						var m=$(this).index();
						$("#content4 .YXG .tablist .box .smallbox").eq(m).css({"display":"block"}).siblings().css({"display":"none"});
				});						
			}				
			$("#prev").click(function(){
				n++;
				$("#content4 .YXG .tablist .box .smallbox0").stop().animate({"margin-left":-(n-1)*$picwidth+"px"},500);
				if(n>=3) n=0;
			});
			$("#next").click(function(){
				if(n<=0) n=3;
				n--;
				$("#content4 .YXG .tablist .box .smallbox0").stop().animate({"margin-left":-n*$picwidth+"px"},500);	
			});

			$("#prev").click(function(){
				u++;
				$("#content4 .YXG .tablist .box .smallbox1").stop().animate({"margin-left":-(u-1)*$picwidth+"px"},500);
				if(u>=12) u=0;
			});
			$("#next").click(function(){
				if(u<=0) u=12;
				u--;
				$("#content4 .YXG .tablist .box .smallbox1").stop().animate({"margin-left":-u*$picwidth+"px"},500);	
			});

			$("#prev").click(function(){
				k++;
				$("#content4 .YXG .tablist .box .smallbox2").stop().animate({"margin-left":-(k-1)*$picwidth+"px"},500);
				if(k>=5) k=0;
			});
			$("#next").click(function(){
				if(k<=0) k=5;
				k--;
				$("#content4 .YXG .tablist .box .smallbox2").stop().animate({"margin-left":-k*$picwidth+"px"},500);	
			});



			for(var i=0; i<=$("#country ul li").length; i++){
				$("#country ul li").click(function(){
					$(this).addClass("curr").siblings().removeClass("curr");
					var $msg=$(this).html();
					$('#country p').html($msg);
				});
			}
			for(var i=0; i<=$("#type ul li").length; i++){
				$("#type ul li").click(function(){
					$(this).addClass("curr").siblings().removeClass("curr");
					var $msg=$(this).html();
					$('#type p').html($msg);
				});
			}
			for(var i=0; i<=$("#tanks ul li").length; i++){
				$("#tanks ul li").click(function(){
					$(this).addClass("curr").siblings().removeClass("curr");
					var $msg=$(this).html();
					$('#tanks p').html($msg);
				});
			}
			for(var i=0; i<=$("#option ul li").length; i++){
				$("#option ul li").click(function(){
					$(this).addClass("curr").siblings().removeClass("curr");
					var $msg=$(this).html();
					$('#option p').html($msg);
				});
			}
			
/*			for(var n=0; n<=$("#content5 .se p").length; n++){
				console.log(n);
				$("#content5 .se p").eq(n).click(function(){
					console.log(n);
					var cc=$(this).index();
					$("#content5 .se ul").eq(cc).stop().slideToggle();
				});
			}*/
			$("#country p").click(function(){
				$("#country  ul").stop().slideToggle();
			});
			$("#type p").click(function(){
				$("#type  ul").stop().slideToggle();
			});
			$("#tanks p").click(function(){
				$("#tanks  ul").stop().slideToggle();
			});
			$("#option p").click(function(){
				$("#option  ul").stop().slideToggle();
			});

			var VVV=null;
			function scroll(){
				$("#content6 .LunBo .long").animate({"margin-left":"-303px"},function(){
					$("#content6 .LunBo .long li:eq(0)").appendTo($("#content6 .LunBo .long"));$("#content6 .LunBo .long").css({"margin-left":0})
				})
			}
			VVV=setInterval(scroll,2000);
			$("#content6 .LunBo").hover(function(){
				clearInterval(VVV);
			},function(){
				VVV=setInterval(scroll,2000);
			})
});