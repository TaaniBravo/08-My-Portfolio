$(nav).on('click', '.btn', handleSections)

function handleSections(event) {
    event.preventDefault();

    if (this.data('section') == 'about-me') {
        console.log('hello')
    }
}