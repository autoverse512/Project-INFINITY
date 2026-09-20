const poemContent = document.getElementById("poemContent");
const poemTitle = document.getElementById("poemTitle");

const colorButton = document.getElementById("colorButton");
const fontButton = document.getElementById("fontButton");

const colorMenu = document.getElementById("colorMenu");
const fontMenu = document.getElementById("fontMenu");

const doneButton = document.getElementById("doneButton");

/* =========================================
COLOUR MENU
========================================= */

colorButton.addEventListener("click", function () {

```
fontMenu.classList.remove("show");

colorMenu.classList.toggle("show");
```

});

/* =========================================
FONT MENU
========================================= */

fontButton.addEventListener("click", function () {

```
colorMenu.classList.remove("show");

fontMenu.classList.toggle("show");
```

});

/* =========================================
CHANGE TEXT COLOUR
========================================= */

document.querySelectorAll("[data-color]").forEach(function (button) {

```
button.addEventListener("click", function () {

    const color = this.dataset.color;

    poemContent.style.color = color;

    poemTitle.style.color = color;

    colorMenu.classList.remove("show");

});
```

});

/* =========================================
CHANGE FONT
========================================= */

document.querySelectorAll("[data-font]").forEach(function (button) {

```
button.addEventListener("click", function () {

    const font = this.dataset.font;

    poemContent.style.fontFamily = font;

    poemTitle.style.fontFamily = font;

    fontMenu.classList.remove("show");

});
```

});

/* =========================================
CLOSE MENUS WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

```
if (
    !colorButton.contains(event.target) &&
    !colorMenu.contains(event.target)
) {
    colorMenu.classList.remove("show");
}


if (
    !fontButton.contains(event.target) &&
    !fontMenu.contains(event.target)
) {
    fontMenu.classList.remove("show");
}
```

});

/* =========================================
DONE BUTTON
NOTHING HAPPENS YET
========================================= */

doneButton.addEventListener("click", function () {

```
// Publishing will be added later.
```

});
