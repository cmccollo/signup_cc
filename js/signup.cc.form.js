$(document).ready(function(){
	$('#signup-cc-data-block').validate({
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
				minlength: 4
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
			address_1: {
				required: 'Please enter your street address.'
			},
			city: {
				required: 'Please enter your city.'
			},
			zip_code: {
				required: 'Please enter your postal code.'
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
	$('#signup-cc-data-block, #signup-cc-form').submit(function(){
		var email = $('#edit-email').val()
		$.cookie('signup', email, { expires: 7, path: '/' });
	});
	var cookie = $.cookie('signup');
	$('#signup-cc-form #edit-temp-email').val(cookie);
	// alert(cookie)
	
});