$(document).ready(function(){
	$('#signup-cc-block-form').validate({
		rules: {
			email: {
				required: true,
				email: true,
			}
		}
	});
	$('#signup-cc-form').validate({
		rules: {
			email: {
				required: true,
				email: true,
				equalTo: "#edit-temp-email"
			},
			zip_code: {
				required: true,
				digits: true,
				minlength: 5
			}
		},
		messages: {
			email: {
				required: 'Please provide an email address',
				email: 'Please provide a valid email address',
				equalTo: 'The specified email address do not match the address above'
			},
			first: {
				required: 'Please enter your first name.'
			},
			last: {
				required: 'Please enter your last name.'
			},
			title: {
				required: 'Please enter your job title.'
			},
			employer: {
				required: 'Please enter your employer.'
			}
		},
		errorPlacement: function(error, element) {
				$(element).parent().append(error);
				var w = $(element).width() + 147;
				$(error).css('left', w);
		}
	});
	$('#signup-cc-block-form, #signup-cc-form').submit(function(){
		var email = $('#edit-email').val()
		$.cookie('signup', email, { expires: 7, path: '/' });
	});
	var cookie = $.cookie('signup');
	$('#signup-cc-form #edit-temp-email').val(cookie);
	// alert(cookie)
	
});