document.addEventListener("DOMContentLoaded", () => {
    const wrapperGeographical = document.querySelector(".wrapper-geographical-start");
    const titleGeographical = document.querySelector(".geographical-start");
    const wrapperInputGeographical = document.querySelector(".wrapper-input-geographical")
    const inputGeographical = document.querySelector(".input-geographical");

    wrapperGeographical.addEventListener("click", () => {
        wrapperInputGeographical.style.opacity = "1";
        inputGeographical.value = titleGeographical.innerText.trim();
        inputGeographical.focus();

        setTimeout(() => {
            inputGeographical.select();
        }, 50)

        titleGeographical.style.opacity = "0";
    })

    const itemClose = document.querySelector(".item-close");
    itemClose.addEventListener("click", (e) => {
        inputGeographical.blur();
        e.stopPropagation();
    })
    inputGeographical.addEventListener("blur", () => {
        titleGeographical.innerText = inputGeographical.value.trim();
        wrapperInputGeographical.style.opacity = "0";
        titleGeographical.style.opacity = "1";
    })

    inputGeographical.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            inputGeographical.blur();
            e.stopImmediatePropagation
        }
    })

    const titleDestination = document.querySelector(".geographical-destination");
    const wrapperInputDestination = document.querySelector(".wrapper-input-geographical-destination");
    const inputDestination = document.getElementById("geographical-destination");

    inputDestination.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const inputValue = inputDestination.value.trim();

            if (inputValue !== "") {
                titleDestination.innerText = inputValue;
                titleDestination.style.opacity = "1";
                wrapperInputDestination.style.opacity = "0";
                inputDestination.blur();
            }
        }

    })

    const roundTrip = document.querySelector(".round-trip");
    const togglePlane = document.querySelector(".toggle-plane");
    const backgroundPlane = document.querySelector(".vnt1158");

    roundTrip.addEventListener("click", () => {
        togglePlane.classList.toggle("active");
        backgroundPlane.classList.toggle("active");
    });




})