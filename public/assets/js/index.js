const $homeEl = $('#home')
const $aboutMeEl = $('#about-me')
const $projectsEl = $('#projects')

$('nav').on('click', '.btn', handleSections)

// $(document).ready(() => {
//     setTimeout(() => $('header').addClass('header-trans'), 1000)
    
// })

// Upon intial load of the page we want this open if statement to make the page be responsive to the size of the screen.
if (window.innerWidth <= 768) {
    if ($('nav').hasClass('flex-column')) {
        $('nav').removeClass('flex-column')
        $('nav').addClass('flex-row')
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        if ($('nav').hasClass('flex-column')) {
            $('nav').removeClass('flex-column')
            $('nav').addClass('flex-row')
        }
    }

    if (window.innerWidth > 768) {
        if ($('nav').hasClass('flex-row')) {
            $('nav').removeClass('flex-row')
            $('nav').addClass('flex-column')
        }
    }
});

function handleSections(event) {
    // event.preventDefault();

    if ($(this).data('section') == 'home') {
        $aboutMeEl.addClass('trans')
        $projectsEl.addClass('trans')
        setTimeout(() => {
            $aboutMeEl.addClass('hide')
            $projectsEl.addClass('hide')
            $homeEl.removeClass('hide')
        }, 1000)
        setTimeout(() => $homeEl.removeClass('trans'), 1050)
    }

    if ($(this).data('section') == 'about-me') {
        $homeEl.addClass('trans')
        $projectsEl.addClass('trans')
        setTimeout(() => {
            $homeEl.addClass('hide')
            $projectsEl.addClass('hide')
            $aboutMeEl.removeClass('hide')
        }, 1000)
        setTimeout(() => $aboutMeEl.removeClass('trans'), 1050)
    }

    if ($(this).data('section') == 'projects') {
        $homeEl.addClass('trans')
        $aboutMeEl.addClass('trans')
        setTimeout(() => {
            $homeEl.addClass('hide')
            $aboutMeEl.addClass('hide')
            $projectsEl.removeClass('hide')
        }, 1000)
        setTimeout(() => $projectsEl.removeClass('trans'), 1050)
    }

};