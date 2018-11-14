// 表单校验

$(function(){
  $("#form").bootstrapValidator({
    // 指定校验字段
    fields:{
      // 用户名
      username:{
        // 进行多个规则配置
        validators:{
          notEmpty:{
            message:"用户名不能为空"
          },
          stringLength:{
            min:2,
            max:6,
            message:"用户名长度必须是2-6位"
          },
          callback:{
            message:"用户名不存在"
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"密码不能为空"
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码长度必须是6-12位"
          },
          callback:{
            message:"密码错误"
          }
        }
      }
    },
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    }
  })



})

// 发送请求
$(function(){
  $("#form").on("success.form.bv",function(e){
    e.preventDefault();
    // 发送ajax请求
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data:$("#form").serialize(),
      dataType:"json",
      success:function(info){
        // console.log(info);
        if(info.success){
          location.href = "index.html";
        }
        if(info.error==1000){
          $("#form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
        }
        if(info.error == 1001){
          // alert("密码错误")
          $("#form").data("bootstrapValidator").updateStatus("password","INVALID","callback");
        }
      }
    })
  })




})

// 重置表单
// $(form).data('bootstrapValidator').resetForm();
$(function(){
  $('[type = "reset"]').on("click",function(){
    $("#form").data('bootstrapValidator').resetForm();
  })



})