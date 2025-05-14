window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('lightgallery');
    if (el && window.lightGallery) {
        window.lightGallery(el, {
            plugins: [lgZoom, lgThumbnail],
            speed: 500,
            selector: 'a'
        });
    }
});
