$(document).ready(function () {
    validate_form_login();
});

function validate_form_login(){
    $('#formLogin').validate({
        ignore: ".ignore",

        rules: {
            'email': { required: true},
            'senha': { required: true}
        },

        messages: {
            'email':        { required: '<div class="alert">Digite seu email</div>', email: '<div class="alert">Email invalido</div>'},
            'senha':        { required: '<div class="alert">Digite sua senha</div>' }            
        },

        submitHandler: function (form) {
            var options = {
                resetForm: true
            };

            $(form).ajaxSubmit(options);
            return false;          
        },

    });
}
