const $homeEl = $('#home')
const $aboutMeEl = $('#about-me')
const $projectsEl = $('#projects')

$('nav').on('click', '.btn', handleSections)

function handleSections(event) {
    // event.preventDefault();

    if ($(this).data('section') == 'home') {
        $aboutMeEl.addClass('trans')
        $projectsEl.addClass('trans')
        setTimeout(() => $aboutMeEl.addClass('hide'), 1000)
        setTimeout(() => $projectsEl.addClass('hide'), 1000)
        setTimeout(() => $homeEl.removeClass('hide'), 1250)
    }

    if ($(this).data('section') == 'about-me') {
        $homeEl.addClass('hide')
        $projectsEl.addClass('hide')
        $aboutMeEl.removeClass('hide trans')
    }

    if ($(this).data('section') == 'projects') {
        $homeEl.addClass('hide')
        $aboutMeEl.addClass('hide')
        $projectsEl.removeClass('hide trans')
    };

}