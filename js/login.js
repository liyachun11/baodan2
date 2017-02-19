//登陆页
$(function() {
	var btnLogin = $('#login-but'),
		form = $('#loginForm');

	$('body').keydown(function(e) {
		if(e.keyCode == 13) {
			dologin();
		}
	});
	btnLogin.on('click', function() {
		dologin();
	});
	var dologin = function() {
		var userNameElement = $("#logiName");
		var passwordElement = $("#loginPass");
		var authCode = $("#loginCode");
		if(userNameElement.val().length == 0) {
			layer.tips('请输入登陆ID', '#logiName', {
				tips: [3, '#26a6de']
			});
			userNameElement.focus();
			return false;
		}

		if(passwordElement.val().length == 0) {
			layer.tips('请输入您的密码', '#loginPass', {
				tips: [3, '#26a6de']
			});
			passwordElement.focus();
			return false;
		}

		if(authCode.val().length == 0) {
			layer.tips('请输入验证码', '#loginCode', {
				tips: [3, '#26a6de']
			});
			authCode.focus();
			return false;
		}
		btnLogin.attr('disabled', 'disabled').addClass('.login-but-gray').html('正在登录...');
		var obj = {
			"username": userNameElement.val(),
			"password": passwordElement.val(),
		};
		$.ajax({
			type: "post",
			url: '',
			async: false,
			contentType: "application/json",
			data: obj,
			processData: false,
			dataType: "json",
			success: function(data) {
				if(data.code == 200) {
					//					do something..
				} else {
					btnLogin.removeAttr('disabled').removeClass('.login-but-gray').html('立即登录');
					layer.msg(data.msg);
				}
			}
		});
	};
});

$(function() {
	var landing = $('.BDD-login .landing'), //登陆
		forgot_password = $('.BDD-login .forgot-password'), //找回密码
		new_password = $('.BDD-login .new-password'); //重置密码

	//	忘记密码
	landing.find('.BDB-password').click(function() {
		layer.closeAll();
		landing.hide();
		forgot_password.show();
	});
	//	返回
	forgot_password.find('.BDB-return').click(function() {
		layer.closeAll();
		landing.show();
		forgot_password.hide();
	});
	//	下一步
	forgot_password.find('.next-step').click(function() {
		layer.closeAll();
		var loginAccount = forgot_password.find('#loginAccount'),
			loginPhone = forgot_password.find('#loginPhone');
		if(loginAccount.val().length == 0) {
			layer.tips('请输入账号', '#loginAccount', {
				tips: [3, '#26a6de']
			});
			loginAccount.focus();
			return false;
		}

		if(loginPhone.val().length == 0) {
			layer.tips('请输入手机验证码', '#loginPhone', {
				tips: [3, '#26a6de']
			});
			loginPhone.focus();
			return false;
		}

		forgot_password.hide();
		new_password.show();

	});
	//	返回
	new_password.find('.BDB-return').click(function() {
		layer.closeAll();
		forgot_password.show();
		new_password.hide();
	});
	//	下一步
	new_password.find('.next-step').click(function() {
		layer.closeAll();
		var loginNewPass = new_password.find('#loginNewPass'),
			loginSurePass = new_password.find('#loginSurePass');
		if(loginNewPass.val().length == 0) {
			layer.tips('请输入新密码', '#loginNewPass', {
				tips: [3, '#26a6de']
			});
			loginNewPass.focus();
			return false;
		}

		if(loginSurePass.val().length == 0) {
			layer.tips('请确认新密码', '#loginSurePass', {
				tips: [3, '#26a6de']
			});
			loginSurePass.focus();
			return false;
		}

		forgot_password.hide();
		new_password.show();

	});
	//	输入框
	$('.BDB-moudles .BDB-input').focus(function() {
		$(this).css('background-color', '#f1f9ff');
		$(this).parent().addClass("BDB-moudles-focus");
	}).blur(function() {
		$(this).css('background-color', '');
		$(this).parent().removeClass("BDB-moudles-focus");
	});
});