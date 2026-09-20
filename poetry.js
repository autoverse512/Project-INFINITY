document.addEventListener("DOMContentLoaded", function () {

```
const poemContent = document.getElementById("poemContent");
const poemTitle = document.getElementById("poemTitle");

const colorButton = document.getElementById("colorButton");
const fontButton = document.getElementById("fontButton");

const colorMenu = document.getElementById("colorMenu");
const fontMenu = document.getElementById("fontMenu");

const doneButton = document.getElementById("doneButton");


/* ================================
   COLOUR BUTTON
================================ */

colorButton.addEventListener("click", function (event) {

    event.stopPropagation();

    fontMenu.classList.remove("show");

    colorMenu.classList.toggle("show");

});


/* ================================
   FONT BUTTON
================================ */

fontButton.addEventListener("click", function (event) {

    event.stopPropagation();

    colorMenu.classList.remove("show");

    fontMenu.classList.toggle("show");

});


/* ================================
   COLOUR SELECTION
================================ */

document.querySelectorAll(".color-option").forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedColor = this.getAttribute("data-color");

        poemContent.style.color = selectedColor;
        poemTitle.style.color = selectedColor;

        colorMenu.classList.remove("show");

    });

});


/* ================================
   FONT SELECTION
================================ */

document.querySelectorAll(".font-menu button").forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedFont = this.getAttribute("data-font");

        poemContent.style.fontFamily = selectedFont;
        poemTitle.style.fontFamily = selectedFont;

        fontMenu.classList.remove("show");

    });

});


/* ================================
   CLOSE MENUS
================================ */

document.addEventListener("click", function (event) {

    if (
        !colorMenu.contains(event.target) &&
        event.target !== colorButton
    ) {
        colorMenu.classList.remove("show");
    }


    if (
        !fontMenu.contains(event.target) &&
        event.target !== fontButton
    ) {
        fontMenu.classList.remove("show");
    }

});


/* ================================
   DONE BUTTON
   NOTHING YET
================================ */

doneButton.addEventListener("click", function () {

    // We will add saving/publishing later.

});
```

});
