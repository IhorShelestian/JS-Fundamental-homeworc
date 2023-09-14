console.log($('a[href^="https://"]'));
$('a[href^="https://"]').each(function() {
    $(this).attr('target', '_blank');
});


