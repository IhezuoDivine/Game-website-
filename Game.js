



document.getElementById("searchBox").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll("#searchResults li");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.classList.toggle("hide", !text.includes(filter));
    });
});