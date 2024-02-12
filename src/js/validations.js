$(document).ready(function () {
    // Сброс ошибок и классов при вводе в поле
    $('.order .field').on('input', function () {
        $(this).closest('.order-form__label').removeClass('error');
    });

    function validatePhoneInput(input) {
        var phoneValue = (input.val() || '').trim(); // Добавляем проверку на существование значения

        console.log(phoneValue);

        if (phoneValue === '') {
            input.closest('.order-form__label').addClass('error');
            return false; // Возвращаем false, если есть ошибка
        }

        return true; // Возвращаем true, если ошибок нет
    }

    $('.order-form__btn').on('click', function (event) {
		event.preventDefault();
	
		console.log("Button clicked");
	
		// Сброс предыдущих ошибок и классов
		var parent = $(this).parent();
		parent.find('.order-form__label').removeClass('error');
	
		// Валидация телефона
		var orderPhoneInput = parent.find('input[name="phone"]');
		console.log(orderPhoneInput.val());
		if (!validatePhoneInput(orderPhoneInput)) {
			return; // Прерываем выполнение функции, если есть ошибки
		}
	
		// Если нет ошибок, открываем fancybox
		console.log("No errors, opening fancybox");
		$.fancybox.close();
		$.fancybox.open({
			loop: false,
			src: '#modal-thanks',
			baseClass: 'dark-fancybox',
			touch: false,
		});
	});
	
});

$(document).ready(function () {
    // Сброс ошибок и классов при вводе в поле
    $('.back-call .form__field').on('input', function () {
        $(this).closest('.form__label').removeClass('error');
    });

    $('.back-call .form__btn').on('click', function (event) {
        event.preventDefault();

        // Сброс предыдущих ошибок и классов
        $('.form__label').removeClass('error');

        // Валидация имени
        var nameInput = $('.form__label input[name="name"]');
        var nameValue = nameInput.val();
		console.log(nameValue)
        if (nameValue.trim() === '') {
            nameInput.closest('.form__label').addClass('error');
        }

        // Валидация телефона с использованием jQuery Masked Input
        var phoneInput = $('.form__label input[name="phone"]');
        var phoneValue = phoneInput.val();
		console.log(phoneValue)
        if (phoneValue.trim() === '') {
            phoneInput.closest('.form__label').addClass('error');
        }

        // Если нет ошибок, открываем fancybox
        if (!$('.form__label').hasClass('error')) {
            $.fancybox.close();
            $.fancybox.open({
                loop: false,
                src: '#modal-thanks',
                baseClass: 'dark-fancybox',
                touch: false,
            });
        }
    });
});

$(document).ready(function () {
    // Сброс ошибок и классов при вводе в поле
    $('.contacts .form__field').on('input', function () {
        $(this).closest('.form__label').removeClass('error');
    });

    $('.contacts .form__btn').on('click', function (event) {
        event.preventDefault();

        // Сброс предыдущих ошибок и классов
        $('.form__label').removeClass('error');

        // Валидация имени
        var nameInput = $('.form__label input[name="name"]');
        var nameValue = nameInput.val();
		console.log(nameValue)
        if (nameValue.trim() === '') {
            nameInput.closest('.form__label').addClass('error');
        }

        // Валидация телефона с использованием jQuery Masked Input
        var phoneInput = $('.form__label input[name="phone"]');
        var phoneValue = phoneInput.val();
		console.log(phoneValue)
        if (phoneValue.trim() === '') {
            phoneInput.closest('.form__label').addClass('error');
        }

        // Если нет ошибок, открываем fancybox
        if (!$('.form__label').hasClass('error')) {
            $.fancybox.close();
            $.fancybox.open({
                loop: false,
                src: '#modal-thanks',
                baseClass: 'dark-fancybox',
                touch: false,
            });
        }
    });
});

$(document).ready(function () {
    // Сброс ошибок и классов при вводе в поле внутри конкретного modal-car
    $('.modal-car .form__field').on('input', function () {
        $(this).closest('.form__label').removeClass('error');
    });

    $('.modal-car .form__btn').on('click', function (event) {
        event.preventDefault();

        // Сброс предыдущих ошибок и классов внутри конкретного modal-car
        $(this).closest('.modal-car').find('.form__label').removeClass('error');

        // Валидация имени внутри конкретного modal-car
        var nameInput = $(this).closest('.modal-car').find('.form__label input[name="name"]');
        var nameValue = nameInput.val();
        console.log(nameValue);
        if (nameValue.trim() === '') {
            nameInput.closest('.form__label').addClass('error');
        }

        // Валидация телефона с использованием jQuery Masked Input внутри конкретного modal-car
        var phoneInput = $(this).closest('.modal-car').find('.form__label input[name="phone"]');
        var phoneValue = phoneInput.val();
        console.log(phoneValue);
        if (phoneValue.trim() === '') {
            phoneInput.closest('.form__label').addClass('error');
        }

        // Если нет ошибок, открываем fancybox внутри конкретного modal-car
        if (!$(this).closest('.modal-car').find('.form__label').hasClass('error')) {
            $.fancybox.close();
            $.fancybox.open({
                loop: false,
                src: '#modal-thanks',
                baseClass: 'dark-fancybox',
                touch: false,
            });
        }
    });
});

$(document).ready(function () {
    // Сброс ошибок и классов при вводе в поле
    $('.modal-calculate .form__field').on('input', function () {
        $(this).closest('.form__label').removeClass('error');
    });
    // Обработчик клика по кнопке "Рассчитать стоимость перевозки" внутри modal-calculate
    $('.modal-calculate .form__btn').on('click', function (event) {
        event.preventDefault();

        // Сброс предыдущих ошибок и классов внутри modal-calculate
        $(this).closest('.modal-calculate').find('.form__label').removeClass('error');

        // Валидация каждого поля внутри modal-calculate
        var isValid = true;

        $(this).closest('.modal-calculate').find('.form__label').each(function () {
            var input = $(this).find('.form__field');
            var value = input.val().trim();

            if (value === '') {
                // Если поле пустое, добавляем класс ошибки
                $(this).addClass('error');
                isValid = false;
            }
        });

		// Валидация телефона с использованием jQuery Masked Input
        var calcPhoneInput = $('.form__label input[name="phone"]');
        var calcPhoneValue = calcPhoneInput.val();
        if (calcPhoneValue.trim() === '') {
            calcPhoneInput.closest('.form__label').addClass('error');
        } else {
            calcPhoneInput.closest('.form__label').removeClass('error');
		}

        // Если есть хотя бы одна ошибка, не продолжаем обработку
        if (!isValid) {
            return;
        }

        // Все поля прошли валидацию, можно выполнять дополнительные действия
        // Например, закрыть форму и открыть благодарность
        $.fancybox.close();
        $.fancybox.open({
            loop: false,
            src: '#modal-thanks',
            baseClass: 'dark-fancybox',
            touch: false,
        });
    });
});






