
window.onload=function(){	

	function head(){
	   var oDiv=document.getElementById('head');
	   var aH5=oDiv.getElementsByTagName('h5');
	   var oA=document.getElementById('login');
	
	   oA.onclick=function(){
	
		 oDiv.style.display='block';
	   };
	   aH5[2].onclick=function(){
		oDiv.style.display='none';
	   };
	   aH5[1].onclick=function(){
	
		 oDiv.style.width=document.documentElement.clientWidth-35+'px';
		 oDiv.style.height=document.documentElement.clientHeight-35+'px';
	   }
	   aH5[0].onclick=function(){
		 oDiv.style.width='400px';
		 oDiv.style.height='400px';
	   }
	   
	   oDiv.onmousedown=function(ev){
		   var ev=ev||event;
		   var disX=ev.clientX-this.offsetLeft; //鼠标点下去的位置-它的Lfet值，得出来的值就是鼠标位置到Div左边框的值，这个值是不变的。
		   var disY=ev.clientY-this.offsetTop;
		   
		   if(oDiv.setCapture){
				oDiv.setCapture(); //设置全局捕获,兼容Ie。
		   }
		 document.onmousemove=function(ev){
			var ev=ev||event;
			var L=ev.clientX-disX;
			var T=ev.clientY-disY;
			
			if(L<0){
				L=0;  //如果小于0就限制它的left值等于0。
			}else if(L>document.documentElement.clientWidth-oDiv.offsetWidth){
				L=document.documentElement.clientWidth-oDiv.offsetWidth;	//如果大于可视区域的范围-它的宽度，那么就限制它等大于可视区域的范围-它的宽度。
			}
			
			if(T<0){
				T=0;
			}else if(T>document.documentElement.clientHeight-oDiv.offsetHeight){
				T=document.documentElement.clientHeight-oDiv.offsetHeight
			}
			
			oDiv.style.left=L+'px';//当前鼠标可视区域的值-之前不变的值就是它当前的Left值。
			oDiv.style.top=T+'px';
			 
		 };
		 
		 document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
			if(oDiv.releaseCapture){
				oDiv.releaseCaptrue(); //释放全局捕获。
			}
		 };
		 return false;
	   };	   
	}
	head();
    (function header(){  //鼠标移到导航栏显示的效果
	
	   var oUl=document.getElementById('list');
	   var aUl=oUl.getElementsByTagName('ul');
	   var aLit=document.getElementsByClassName('nav_li');		    
	   var A=oUl.getElementsByTagName('a');
	 
	   for(var i=0;i<aLit.length;i++){	   
			aLit[i].onmouseover=function(){		 	
			 this.getElementsByTagName('ul')[0].style.display='block'; 
			};
			  
			aLit[i].onmouseout=function(){
			 this.getElementsByTagName('ul')[0].style.display='none'; 
			};
	   }
	 
	   for(var i=0;i<A.length;i++){
			A[i].onmouseover=function(){
				this.style.color='red';
			};
			A[i].onmouseout=function(){
				this.style.color='#333';
			};
	  }
    })();
	 
	(function header1(){  //鼠标移入到网站导航的效果。
	   var oLi=document.getElementById('nan');
	   var oDiv=document.getElementById('last');
	
	   oLi.onmouseover=function(){
		  oDiv.style.display='block';
      
	   }
	   oLi.onmouseout=function(){
	      oDiv.style.display='none';
	   }
	})();
	
	(function text1(){   //头部的搜索框
	   var oIpt=document.getElementById('text1');
	   var oMg1=document.getElementById('mg1');
	   var arr=['自行车','空调','钱包','裤袋','行李箱','单反相机','平板电脑'];
	   var num=0;
	   var timer=null;
	   oIpt.value=arr[num];
	   oIpt.style.color='#666';
       play();  //开一个定时器让搜索框里的内容自动跑
	   oIpt.onfocus=function(){
		  for(var i=0;i<arr.length;i++){
			  if(this.value==arr[i]){
				  this.value='';
				  clearInterval(timer);
			  }
		  }
	   };
	   oIpt.onblur=function(){
	      if(this.value==='1'){
		    this.value='';
		  }
          play();
	   }
	   oMg1.onclick=function(){
	      oIpt.value='欢迎来到京东商城';
	   };
	   function play(){
		   timer=setInterval(function(){
			  if(num==arr.length-1){
				  num=0;
			  }else{
					num++;
				  oIpt.value=arr[num];
			  }
		   },2500);
	   }
	})();
	
	(function body_lunbo(){   //给中间的图片加的效果
	  var oAuto=document.getElementById('auto');
	  var oImg1=document.getElementById('body_img1'); 
	  var oImg2=document.getElementById('body_img3');
	  var oLeft=document.getElementById('body_ipt1');
	  var oRight=document.getElementById('body_ipt2');
	  var oUl=document.getElementById('lunbo_li');
	  var aLi=oUl.getElementsByTagName('li');
	  var arr=['img/lunbotu/1.jpg','img/lunbotu/2.jpg','img/lunbotu/3.jpg','img/lunbotu/4.jpg','img/lunbotu/5.jpg','img/lunbotu/6.jpg','img/lunbotu/7.jpg'];
	  var num=0;
	  ///////////////////////////////////////////////
	  	
      var timer=null;  //开的定时器
	 function auto(){ 
	  clearInterval(timer);
	  timer=setInterval(function(){
		  num++;
		  num%=arr.length;
		  playauto();
	  },2000);
	 }
	 auto();
	  oAuto.onmouseover=function(){
	      clearInterval(timer); 
	  };
	  oAuto.onmouseout=auto;
	  //////////////////////////////////////////////
	  
	  function playauto(){
	   oImg1.src=arr[num];
	   function Lb(){
		   for(var i=0;i<aLi.length;i++){
			 aLi[i].className='';
		   }
	 	   aLi[num].className='lunboACT';
	   }
	   Lb();
	   oLeft.onclick=function(){		 
	     num--;
		 if(num===-1){
			 num=6;
		 }		 
		 oImg1.src=arr[num];
         Lb();
	   };
	  
	   oRight.onclick=function(){
	  	 num++;
		 if(num===arr.length){
			 num=0;
		 }		
		 oImg1.src=arr[num];
         Lb();
	   }

	   for(var i=0;i<aLi.length;i++){
		 aLi[i].index=i;
		 aLi[i].onmouseover=function(){
		    for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			}
			this.className='lunboACT';			 
			oImg1.src=arr[this.index];
		 };	 
	   }
	  }
	})();
	(function count(){  //倒计时商品
	   var oStrong=document.getElementById('strong');
	   var iNow=null;
	   var iNew=null;
	   var t=0;
	   var str='';
	   var timer=null;
       iNow=new Date('january 1,2018 18:00:00'); 
	   clearInterval(timer);
	     setInterval(function(){
			 iNew=new Date();
			 t=Math.floor((iNew-iNow)/1000);
			 str=Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+'时'+Math.floor(t%86400%3600/60)+'分'+t%60+'秒';
			 oStrong.innerHTML=str;
		 },1000);
	})();
	
	(function cai(){
		var aLi=document.getElementsByClassName('cai_li');
		for(var i=0;i<aLi.length;i++){
		   aLi[i].onmouseover=function(){
		      this.style.border='1px solid red';
		   };
		   aLi[i].onmouseout=function(){
		      this.style.border='';
		   };
		}
    })();
	(function two(){
		fnTab('uzi_1');
		fnTab('uzi_2');
	  function fnTab(id){
	   var oDiv1=document.getElementById(id);
	   var aLi1=oDiv1.getElementsByTagName('li');
	   var oDiv2=document.getElementById('uzi_2');
	   var aLi2=document.getElementsByClassName('li');
	   var oThy=document.getElementById('thy');
	   var oTy_li=oThy.getElementsByTagName('li');
	   
	   for(var i=0;i<aLi1.length;i++){
		   aLi1[i].onmouseover=function(){
		      this.style.border='1px solid #ffffff';
		   }; 
		   aLi1[i].onmouseout=function(){
		      this.style.border='';
		   };	   	   
	   }
	   for(var i=0;i<oTy_li.length;i++){
		   oTy_li[i].onmouseover=function(){
		      this.style.border='1px solid #ffffff';
		   };
		   oTy_li[i].onmouseout=function(){
		      this.style.border='';
		   };		   	
	   }
	  }
	})();
	
	(function xiang(){// 想品质
       var oDiv=document.getElementById('xiang');
	   var aLi=oDiv.getElementsByTagName('li');
	   
	   for(var i=0;i<aLi.length;i++){
		   aLi[i].onmouseover=function(){
		     this.style.border='1px solid red';
		   };
		   aLi[i].onmouseout=function(){
		     this.style.border='';
		   };
	   }
	})();
	
	(function hot(){ //热卖单品
       var oDiv=document.getElementById('hot');
	   var aDiv=oDiv.getElementsByTagName('div');	   
	   for(var i=0;i<aDiv.length;i++){
		   aDiv[i].onmouseover=function(){
		     this.style.opacity='1';
			 this.style.border='1px solid red';
		   };
		   aDiv[i].onmouseout=function(){
		     this.style.opacity='0.6';
			 this.style.border='';
		   };
	   }
	})();

    (function footer(){
	   var oDiv1=document.getElementById('foot-1');
	   var oDiv2=document.getElementById('foot-2');
	   var aLi1=oDiv1.getElementsByTagName('li');
	   var aLi2=oDiv2.getElementsByTagName('li');
	   for(var i=0;i<aLi1.length;i++){
		   aLi1[i].onmouseover=function(){
		     this.style.color='red';
		   }
		   aLi1[i].onmouseout=function(){
		     this.style.color='';
		   }		   
	   }
	   for(var i=0;i<aLi2.length;i++){
		   aLi2[i].onmouseover=function(){
		     this.style.color='red';
		   }
		   aLi2[i].onmouseout=function(){
		     this.style.color='';
		   }		   
	   }	   
	})();
};

$(function(){
     
    (function nack(){ //鼠标点击输入框下面的商品时会跳转页面
	  var oUl1=$('.nack_ul');
	  var aLi1=oUl1.children();
	  var oUl2=$('.boby_nav');
	  var aLi2=oUl2.children();
	  for(var i=0;i<aLi1.length;i++){
        aLi1.click(function(){
		  window.open('https://sale.jd.com/act/EUakB3Mm1v.html?spm=1.1.0','_self'); //本窗口打开
		})
		aLi2.click(function(){
		  window.open('https://miaosha.jd.com/');//新窗口打开
		});
	  }	  
	})();
	 //京东市场
	(function show_top(){ 
	   var oDiv=$('#body_left');
	   var oH4=oDiv.children();
	   var oUl=$('#body_one');
	   var aLi=oUl.children();
	   var oShow=$('.show');
	   var oH3=document.getElementById('h3_nan');
	   var aLi1=$('.ali').children('li');
	   var aLi2=$('#show_top').children('li');
	   var timer=null;
       var arr=['床上用品','小龙虾','京东雷雨','厨房用品','笔记本电脑','手机','苹果电脑','小龙虾','京东雷雨','厨房用品','笔记本电脑','手机','苹果电脑'
	   ,'小龙虾','京东雷雨','厨房用品','笔记本电脑','手机','苹果电脑'];
       var num=0;
	   for(var i=0;i<aLi.length;i++){
		  aLi[i].index=i;
		  aLi[i].onmouseover=function(){
			 oH3.innerHTML=arr[this.index];	
		  }
	   }
       oH4.mouseover(function(){
		  clearInterval(timer);
	      oShow.show();		  
	   });
	   oH4.mouseout(function(){ //鼠标移开的时候要开个定时器否则，移不上去
		  timer=setTimeout(function(){
			   oShow.hide();
		  },200);
	   });	
		aLi1.mouseover(function(){
			$(this).css('color','red');
		});
		aLi1.mouseout(function(){
			$(this).css('color','#000');
		});
		aLi1.click(function(){
			window.open('https://www.jd.com/')
		});	
		aLi2.mouseover(function(){
		    $(this).css('background','red').css('color','#000');
		});	
		aLi2.mouseout(function(){
		    $(this).css('background','#6E6568').css('color','#ffffff');
		});    		    
	})();
	//新人福利盒会员
    (function xin(){
		var oSuny=$('.suny');
		var aP=oSuny.children('p');
		aP.click(function(){
		 window.open('https://xinren.jd.com/?channel=99');
		});
	})();
	//话费充值
	(function luck_text(){
	    var oIpt=$('#luck_text');
		oIpt.focus(function(){
		   if(this.value!=''){
			   this.value='';			   	  
		   }	   
		});
		oIpt.blur(function(){
           this.value='移动/联通/全球通';
		});
	})();
    (function return1(){ //返回顶部
	  $('#return1').click(function(){
	     $('html,body').animate({ 'scrollTop' : 0 },1000);
	  });
	})();
});














