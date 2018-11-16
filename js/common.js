$(function(){
  // 添加进度条
  $(document).ajaxStart(function(){
    NProgress.start();
  })
  $(document).ajaxStop(function(){
    setTimeout(function(){
      NProgress.done();

    },500)
  })
})


$(function(){
  // 功能一显示和隐藏二级菜单
$(".category").click(function(){
  $(this).next().stop().slideToggle();
});


// 功能二侧边栏的显示和隐藏
$(".icon_left").click(function(){
  $(".lt_aside").toggleClass("hidemenu");
  $(".lt_main").toggleClass("hidemenu");
  $(".lt_topbar").toggleClass("hidemenu");
})


// 功能三模态框的显示和隐藏
  $(".icon_right").click(function(){
    $("#logOut").modal().show();

    // 退出当前页
    $(".btn-out").click(function(){
      // 发送请求
      $.ajax({
        data:"get",
        url:"/employee/employeeLogout",
        dataType:"json",
        success:function(info){
          console.log(info);
          if(info.success){
            location.href = "login.html";
           }
          if(info.error){
            alert("操作失败");
          }
        }
      })
    })
  })
})