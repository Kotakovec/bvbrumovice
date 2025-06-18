async function gallerymain() {
    const resp = await fetch("/api/gallery.js");
    const json = await resp.json();
    json.files.forEach(file => {
        addImg(file);
    });
}
function addImg(file) {
    const img = document.createElement('img');
    img.src = file;
    img.classList.add('photoimg');
    img.onclick = onclose;
}
gallerymain();