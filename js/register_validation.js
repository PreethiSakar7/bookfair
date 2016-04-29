/*
 *  Document   : base_pages_register.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Register Page
 */

var BasePagesRegister = function() {
    // Init Register Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initValidationRegister = function(){
        jQuery('.js-validation-register').validate({
            errorClass: 'help-block text-right animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-material').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            rules: {
                'fullname': {
                    required: true,
                    minlength: 5
                },
                'email': {
                    required: true,
                    email: true
                },
                'phone': {
                    required: true,
                    number: true
                },
                'city': {
                    required: true
                },
                'state': {
                    required: true
                }
            },
            messages: {
                'fullname': {
                    required: 'Please enter a Fullname',
                    minlength: 'Your Fullname must consist of at least 5 characters'
                },
                'email':{
                  email:'Please enter a valid email address',
                    required: 'Please enter valid email.'
                } ,
                'phone': 'Phone is required',
                'city':{
                    required : 'Please enter city'
                },
                'state':{
                    required : 'Please enter state'
                }
            }
        });
    };

    return {
        init: function () {
            // Init Register Form Validation
            initValidationRegister();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BasePagesRegister.init(); });