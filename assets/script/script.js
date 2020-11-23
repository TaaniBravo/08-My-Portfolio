const $homeEl = $('#home')
const $aboutMeEl = $('#about-me')
const $projectsEl = $('#projects')

$('nav').on('click', '.btn', handleSections)

function handleSections(event) {
    // event.preventDefault();

    if ($(this).data('section') == 'home') {
        $aboutMeEl.addClass('trans')
        $projectsEl.addClass('trans')
        setTimeout(() =>  {
            $aboutMeEl.addClass('hide')
            $projectsEl.addClass('hide')
            $homeEl.removeClass('hide')
        }, 1000)
        setTimeout(() => $homeEl.removeClass('trans'), 1050)
    }

    if ($(this).data('section') == 'about-me') {
        $homeEl.addClass('trans')
        $projectsEl.addClass('trans')
        setTimeout(() =>  {
            $homeEl.addClass('hide')
            $projectsEl.addClass('hide')
            $aboutMeEl.removeClass('hide')
        }, 1000)
        setTimeout(() => $aboutMeEl.removeClass('trans'), 1050)
    }

    if ($(this).data('section') == 'projects') {
        $homeEl.addClass('trans')
        $aboutMeEl.addClass('trans')
        setTimeout(() =>  {
            $homeEl.addClass('hide')
            $aboutMeEl.addClass('hide')
            $projectsEl.removeClass('hide')
        }, 1000)
        setTimeout(() => $projectsEl.removeClass('trans'), 1050)
    }

};