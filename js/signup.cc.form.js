$(document).ready(function(){

	$('#signup-cc-form span.form-required').text('(required)').css('font-size','0.85em');

	$('#signup-cc-form input#edit-email').example('Please confirm your email address.');
	$('#signup-cc-form input#edit-first').example('Please enter your first name.');
	$('#signup-cc-form input#edit-last').example('Please enter your last name');
	$('#signup-cc-form input#edit-phone').example('888.555.1212');
	$('#signup-cc-form input#edit-phone-ext').example('1254');
	$('#signup-cc-form input#edit-address-1').example('Postal Street Address (50 chars max)');
	$('#signup-cc-form input#edit-address-2').example('Suite, Department, School, etc. (50 chars max)');
	$('#signup-cc-form input#edit-city').example('Postal City');
	$('#signup-cc-form input#edit-zip-code').example('95060-2243');
	$('#signup-cc-form input#edit-title').example('Please enter your preferred job title.');
	$('#signup-cc-form input#edit-employer').example('Please provide the name of your employer');

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