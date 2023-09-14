$('div').each(function() {
    const $allH3prevDiv = $(this).prev($('h3'));
    // $(this).after($allH3prevDiv);
    $allH3prevDiv.before($(this));
})