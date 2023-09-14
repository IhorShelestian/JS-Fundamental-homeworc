let counter = 0;
$('input').on('change', function() {
    counter++;
    if (counter === 3) {
        $('input').each(function() {
            $(this).prop('disabled', true)
        })
    }
});