$('#home').ready().removeClass('hide')

$('nav').on('click', '.btn', handleSections)

function handleSections(event) {
    // event.preventDefault();

    if ($(this).data('section') == 'home') {
        $('#about-me').addClass('hide')
        $('#projects').addClass('hide')
        $('#home').removeClass('hide')
    }

    if ($(this).data('section') == 'about-me') {
        $('#home').addClass('hide')
        $('#projects').addClass('hide')
        $('#about-me').removeClass('hide')
    }

    if ($(this).data('section') == 'projects') {
        $('#home').addClass('hide')
        $('#about-me').addClass('hide')
        $('#projects').removeClass('hide')
    };

}