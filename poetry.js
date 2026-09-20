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

colorButton.addEventListener("click", function (event) {

```
event.stopPropagation();

fontMenu.classList.remove("show");

colorMenu.classList.toggle("show");
```

});

/* =========================================
FONT MENU
========================================= */

fontButton.addEventListener("click", function (event) {

```
event.stopPropagation();

colorMenu.classList.remove("show");

fontMenu.classList.toggle("show");
```

});

/* =========================================
COLOUR OPTIONS
========================================= */

const colorOptions = document.querySelectorAll("[data-color]");

colorOptions.forEach(function (button) {

```
const color = button.dataset.color;

button.style.setProperty("--color", color);

button.addEventListener("click", function () {

    poemContent.style.color = color;

    poemTitle.style.color = color;

    colorMenu.classList.remove("show");

});
```

});

/* =========================================
FONT OPTIONS
========================================= */

const fontOptions = document.querySelectorAll("[data-font]");

fontOptions.forEach(function (button) {

```
button.addEventListener("click", function () {

    const font = button.dataset.font;

    poemContent.style.fontFamily = font;

    poemTitle.style.fontFamily = font;

    fontMenu.classList.remove("show");

});
```

});

/* =========================================
CLOSE MENUS
========================================= */

document.addEventListener("click", function (event) {

```
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
```

});

/* =========================================
DONE
NOTHING YET
========================================= */

doneButton.addEventListener("click", function () {

```
// Publishing will be added later.
```

});
