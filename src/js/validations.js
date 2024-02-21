$('.form-ajax--js').on('submit', function(e){
    var form   = $(this),
        errors = true;

    form.find('[type="text"][data-required], [type="tel"][data-required], textarea[data-required], [type="hidden"][data-required]').each(function(){        
        var field = $(this);
        var val = field.val();

        if(val == ''){                
            field.parent().addClass('error');
            errors = false;
            field.focus();
        } else {
            field.parent().removeClass('error');
        }        
    });
   

    if (errors) {        
        var data = form.serialize();
        var action = form.attr('action');
        var method = form.attr('method');

        $.ajax({
            type: method,
            url: action, 
            data: data,
            success: function(data) {},
            error:  function(){}
        });
        form.get(0).reset();
        $.fancybox.close();
        $.fancybox.open({
            loop: false,
            src: '#modal-thanks',
            baseClass: 'dark-fancybox',
            touch: false,
        });
        return false;
    } else {
        return false;
    }

});

