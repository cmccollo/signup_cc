<?php

//function used to trim whitespace and remove non-pritable characters
function signup_cc_trim($string) {
	$trimmed_string = trim($string);
	$val = preg_replace( '/[^[:print:]]/', '', $trimmed_string );
	return $val;
}

// Validation functions
function signup_cc_valid_email_address($mail) {
	$user = '[a-zA-Z0-9_\-\.\+\^!#\$%&*+\/\=\?\`\|\{\}~\']+';
	$domain = '(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.?)+';
	$ipv4 = '[0-9]{1,3}(\.[0-9]{1,3}){3}';
	$ipv6 = '[0-9a-fA-F]{1,4}(\:[0-9a-fA-F]{1,4}){7}';

	return preg_match("/^$user@($domain|(\[($ipv4|$ipv6)\]))$/", $mail);
}

function signup_cc_verify_email($mail) {
	// Add php email verification file
	drupal_add_php(drupal_get_path('module','signup_cc') . 'email_verify.php');
	//call to validateEmail in email_verify.php
	if (!isset($mail)||$mail==''){
		return " Address is blank.";
	} else {
		return validateEmail($mail);
	}
}// function signup_cc_verify_email

function signup_cc_format_postal_code($zip_code,$country='US'){
	// formats a postal code in US or International format
	// for consistent input in to database
	if($country == 'US'){	
		$zip_code =  preg_replace('/\D|-*/','', $zip); # remove non-numbers
	   	$zip_code = (strlen($zip)=='9')? substr($zip,0,5)."-".substr($zip,5,4) : substr($zip,0,5);
	}
	return $zip;
}// end function signup_cc_format_postal_code

function signup_cc_valid_postal_code($zip,$country='US'){
 	if ($country == 'US'){
 		//$zip =  preg_replace('/\D|-*/', '', trim($zip)); # remove non-numbers;
 		//echo "zip: $zip country: $country<br />";
 		//echo preg_match('/^[0-9]{5,9}$/', trim ($zip));
 		//$zip =  preg_replace('/-/', '', $zip); # remove non-numbers;
 		//return  (!(strlen($zip)<5) || preg_match('/^[0-9]{5,9}$/', trim ($zip))); #matches 5-10 digits
 		//echo preg_match("/^([0-9]{5})(-[0-9]{4})?$/i",$zip);
 		if (!(strlen($zip)<5) && preg_match("/^([0-9]{5})(-[0-9]{4})?$/i",trim($zip))){
 			return 1; #matches 5-9 digits
 		} else {
 			return 0;
 		}
 	} else {
 	  return 1;	//not currently validating zips other than US
 	}
}// end function signup_cc_valid_postalcode