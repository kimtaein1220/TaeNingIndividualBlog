
		$(document).ready(function(){
			// 마우스 클릭 : console.log 출력
			    $.ajax({
		        type: "GET",
		        url : "http://localhost:8080/privateBlog/sample/getMenuList.do",
		        dataType : "jsonp",
		        error : function(data){
		            alert("수신 실패");
		        },
		        success : function(data){
		            //console.log(data);
		            
		          for (var i =0; i < data.menuList.length; i++){
		                 
		            //console.log('data.menuList['+i+'].BM_NAME : ' + data.menuList[i].BM_NAME);
		            //console.log('data.menuList['+i+'].BM_LEV : ' + data.menuList[i].BM_LEV);
		            //console.log('data.menuList['+i+'].BM_STEP : ' + data.menuList[i].BM_STEP);
		            //console.log('data.menuList['+i+'].ROWNUM : ' + data.menuList[i].ROWNUM);
		            //console.log('data.menuList['+i+'].BM_REF : ' + data.menuList[i].BM_REF);
		            //console.log('data.menuList['+i+'].BM_STEP : ' + data.menuList[i].BM_STEP);
		            //console.log('data.menuList['+i+'].BM_ISDEL : ' + data.menuList[i].BM_ISDEL);
                    $(".nav-menu").append('<li><a href="#" id="'+data.menuList[i].BM_IDNUM+'">'+data.menuList[i].BM_NAME+'</a></li>');
		           }

		            $(".nav-menu a").click(function(){
		            	var id =$(this).attr('id');
		            	console.log("id :" + id);
		            });

		        }  
		    });

       
			
			$(".menuLv1").click(function(){
				var id = $(this).attr('id');
				alert("id : " + id);
			});

			$("#menu100").on("click",function(){
				alert('clicked!');
				/* 다른 사이트로 이동 */
				// $(location).attr('href',"http://www.naver.com");
				// location.href = "http://www.naver.com";
				/* 다른 파일(html)로 이동 */
				location.href = "./moved.html";
			});

			// nav-menu 클래스에 마우스 호버링 시
			$(".nav-menu li").hover(function(){
				// 해당 li 태그에 속한 ul 태그를 보여준다
				$("ul:first",this).show();
			}, function(){
				// 마우스 뗐을 때 : 숨긴다.
				$("ul:first",this).hide();
			
			}); 
			 var file = document.querySelector('#getfile');

             file.onchange = function() {
             var fileList = file.files;

             var reader = new FileReader();
             reader.readAsDataURL(fileList[0]);

             reader.onload = function() {
             document.querySelector('#preview').src = reader.result;
             }; 
           }; 

		});
		

		//JQuery
       $(function() {
	           $('#put').click(function() {
	                 location.href ="file:///C:/dev_sources/KimTaeInBlog/html/resumePage.html";
	           });
       });

       $(function() {
       	        $('#facebook').click(function() {
       	             location.href="https://www.facebook.com/profile.php?id=100002023941582&ref=bookmarks";
       	       });     
       });

       $(function(){
                $('.menuRead').click(function(){
                	location.href = "file:///C:/dev_sources/KimTaeInBlog/html/readPage.html";
                });     	
       });

       $(function(){
       	        $('.logoImage').click(function(){
       	        	location.href= "file:///C:/dev_sources/KimTaeInBlog/html/TaeNingStartBlog.html";
       	        });
       });



