

//메뉴 가운데  반호 그리기
window.onload=function() {
  var cnvs = document.getElementById("sample");
      if (cnvs.getContext) {
          var ctx = cnvs.getContext('2d');
          ctx.shadowOffextX=50;
          ctx.shadowOffextY=50;
          ctx.shadowBlur = 25;
          ctx.shadowColor="black";
          ctx.beginPath();
          ctx.arc(0,0,100,0.5*Math.PI,Math.PI,true);
          ctx.fillStyle='#ff9900';
          ctx.font="30px Arial";
          ctx.fillText("bookmark",100,100);
          ctx.fill();
      }
      else alert('canvas를 지원하지 않는 브라우저입니다.');
  var cnvs = document.getElementById("sample1");
      if (cnvs.getContext) {
          var ctx = cnvs.getContext('2d');
          ctx.beginPath();
          ctx.shadowOffextX=50;
          ctx.shadowOffextY=50;
          ctx.shadowBlur = 25;
          ctx.shadowColor="black";
          ctx.arc(300,0,100,0,2*Math.PI,true);
          ctx.fillStyle='#cc00ff';
          ctx.font="30px Arial";
          ctx.fillText("Gallery",100,100);
          ctx.fill();

      }
      else alert('canvas를 지원하지 않는 브라우저입니다.');
  var cnvs = document.getElementById("sample2");
      if (cnvs.getContext) {
          var ctx = cnvs.getContext('2d');
          ctx.beginPath();
          ctx.arc(300,200,100,0,1*Math.PI,true);
          ctx.shadowOffextX=50;
          ctx.shadowOffextY=50;
          ctx.shadowBlur = 25;
          ctx.shadowColor="black";
          ctx.fillStyle='#ff0000';
          ctx.font="30px Arial";
          ctx.fillText("Profile",100,100);
          ctx.fill();
      }
      else alert('canvas를 지원하지 않는 브라우저입니다.');
  var cnvs = document.getElementById("sample3");
      if (cnvs.getContext) {
          var ctx = cnvs.getContext('2d');
          ctx.beginPath();
          ctx.arc(0,200,100,0,0.5*Math.PI,true);
          ctx.shadowOffextX=50;
          ctx.shadowOffextY=50;
          ctx.shadowBlur =25;
          ctx.shadowColor="black";
          ctx.fillStyle='#1a1aff';
          ctx.font="30px Arial";
          ctx.fillText("Courses",100,100);
          ctx.fill();
      }
      else alert('canvas를 지원하지 않는 브라우저입니다.');
    }


// 리스트 표시 및 숨김
$(document).ready(function(){
      var introduce = $('.intro');
      var box = $('#box');
      var list_Book = $('.list-group');      //4번째 메뉴 리스트
      var x = $('#sample');     //4번째 메뉴
        introduce.hide();
        list_Book.hide();       //4번째 메뉴 숨김

        x.css("opacity","0.7");
      x.mouseenter(
        function(){
        x.animate({left:'50px',top:'30px'},"slow");
        x.css("opacity","1");
        list_Book.fadeIn('fast');
        box.animate({marginTop:'45px'},'slow');
      });

      x.mouseleave(function(){
        x.animate({left:'0px',top:'0px'},"fast");
        x.css("opacity","0.7");
        box.animate({marginTop:'50px'},'fast');
        list_Book.fadeOut('slow');
      });
      list_Book.mouseenter(function(){
          list_Book.stop();
        })
      list_Book.mouseleave(function(){
        list_Book.hide()  ;
      });                    //4번째  메뉴 구현



      var gall = $('#gall');            //3번째 메뉴 구현
      var x1 = $('#sample1');
        x1.css("opacity","0.7");
        gall.hide();        //gallery 숨기기
        x1.mouseenter(function(){
        x1.animate({left:'-50px',top:'30px'},"slow");
        x1.css("opacity","1");
        gall.fadeIn('fast');
        box.animate({marginTop:'45px'},'slow');
      })
      x1.mouseleave(function(){
        x1.animate({left:'0px',top:'0px'},"fast");
        x1.css("opacity","0.7");
        gall.fadeOut('slow');
        box.animate({marginTop:'50px'},'fast');
      })

      gall.mouseenter(function(){
          gall.css("opacity","1");
          gall.stop();
        })
      gall.mouseleave(function(){
        gall.hide()  ;
      });                  //3번째  메뉴 구현

      var x2 = $('#sample2');         //1번째  프로필 화면구현
      x2.css("opacity","0.7");
      x2.mouseenter(function(){
        x2.animate({left:'-50px',top:'-30px'},"slow");
        x2.css("opacity","1");
      introduce.slideDown('slow');
      box.animate({marginTop:'80px'},'slow');
      })
      x2.mouseleave(function(){
        x2.animate({left:'0px',top:'0px'},"fast");
         x2.css("opacity","0.7");
         introduce.slideUp('fast');
         box.animate({marginTop:'50px'},'fast');
      })        //1번째 프로필 화면 구현

      var course = $('.list-course');     //코스 리스트 지정  2번째 메뉴 구현
      course.hide();                      //코스 리스트 숨김
      var x3 = $('#sample3');
      x3.css("opacity","0.7");
      x3.mouseenter(function(){
        x3.animate({left:'50px',top:'-30px'},"slow");
        x3.css("opacity","1");
        course.slideDown('fast');
        box.animate({marginTop:'80px'},'slow');
      })
      x3.mouseleave(function(){
        x3.animate({left:'0px',top:'0px'},"fast");
        x3.css("opacity","0.7");
        course.slideUp('slow');
        box.animate({marginTop:'50px'},'fast');
      
      })

      course.mouseenter(function(){
          course.stop();
        })
      course.mouseleave(function(){
        course.slideUp('slow')  ;
      });                //2번째 메뉴

      });

function popup(){
   window.open("gallery.html","_blank","top=300,left=300,width=800,height=500");
}
