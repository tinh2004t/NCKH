document.addEventListener("DOMContentLoaded", () => {
    let arrowDiv;
    let lineHidden;
    let isArrow = false;
    const chatHidden = document.querySelector(".container-chat-hidden");
    const itemHelpChat = document.querySelector(".item-help-chat");

    function createArrow() {
        if (isArrow) return;

        arrowDiv = document.createElement("div");
        arrowDiv.classList.add("arrow-hidden", "flex-center");
        arrowDiv.innerHTML = `
            <div class="item-arrow-hidden item-help-chat">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="vnt3">
                    <g clip-path="url(#clip0_198_120258)">
                        <path d="M16 13V28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16 13L22 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16 13L10 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4 4H28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_198_120258">
                            <rect width="32" height="32" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        `;

        lineHidden = document.createElement("div");
        lineHidden.classList.add("hightline-border");

        arrowDiv.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(removeArrow, 500);
        });

        chatHidden.insertBefore(arrowDiv, itemHelpChat);
        chatHidden.insertBefore(lineHidden, itemHelpChat);

        isArrow = true;
    }

    function removeArrow() {
        if (arrowDiv) arrowDiv.remove();
        if (lineHidden) lineHidden.remove();
        isArrow = false;
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            createArrow();
        } else {
            removeArrow();
        }
    });

    // handle sub-navigation
    const plane = document.querySelector(".vnt354");
    const hotel = document.querySelector(".vnt353");
    const village = document.querySelector(".vnt355");
    const borderLine = document.createElement("div");
    borderLine.classList.add("border-line-place");


    function createSubNavigationWrrapperHotel() {
        return new Promise((resolve) => {
            const navigationWrapper = document.querySelector(".vnt203");
            if (!navigationWrapper.contains(document.querySelector(".vnt357"))) {
                const placeFooter = document.createElement("div");
                placeFooter.classList.add("place-nav-footer", "flex-align", "vnt357");
                placeFooter.innerHTML = `
                     <div class="place-hotel flex-column">
                                            <span class="hotel">Địa điểm</span>
                                            <div class="input-hotel">
                                                <input id="input-note-hotel" type="text"
                                                    class="note-hotel base-note-hotel"
                                                    placeholder="Địa điểm, khách sạn trong nước">
                                            </div>
                                        </div>
                                        <div class="vertical-line"></div>
                                        <div class="date-nav-footer flex-align">
                                            <div class="date-go  flex-column">
                                                <span class="title-contrainer">Ngày đến</span>
                                                <span class="title-content">Chọn ngày đi</span>
                                            </div>
                                            <div class="icon-date-nav flex-align">
                                                <svg width="10" height="9" fill="none" style="margin-left: 2px;">
                                                    <path
                                                        d="M4.982.504h.173A3.319 3.319 0 008.66 6.01 3.982 3.982 0 114.982.5v.004z"
                                                        stroke="#718096" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div class="date-backHome  flex-column">
                                                <span class="title-contrainer">Ngày về</span>
                                                <span class="title-content">Chọn ngày về</span>
                                            </div>
                                        </div>
                                        <div class="vertical-line"></div>
                                        <div class="number-peoples flex-align">
                                            <div class="number-people  flex-column">
                                                <span class="title-contrainer">Số phòng, số khách</span>
                                                <span class="title-content vnt123">1 phòng, 1 người lớn, 0 trẻ em</span>
                                            </div>
                                            <button class="btn-serach flex-align btn-serach-container serach-contents">
                                                <span class="serach-label flex-align">
                                                    <svg width="23" height="24" fill="none" class="svgFillAll"
                                                        style="stroke: white;">
                                                        <path
                                                            d="M21.312 22.5l-4.742-4.742m2.71-7.451a8.806 8.806 0 11-17.613 0 8.806 8.806 0 0117.613 0z"
                                                            stroke="#fff" stroke-width="3" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <span class="serach-label_wrrapper"></span>
                                            </button>
                                        </div>
                                        <div class="vertical-line" style="width: 0;"></div>
                                        <div class="sub-navigation vnt205 navigation-hotel flex" style="height: 0;">
                                        </div>
                                        <div class="sub-navigation vnt206 flex date-rent" style="height: 0;">
    
                                        </div>
                                        <div class="sub-navigation number_room-number-people  vnt207" id="roomWrapper"
                                            style="height: 0;">
                                        </div>
                `
                navigationWrapper.appendChild(placeFooter);



                document.querySelector(".serach-label_wrrapper").addEventListener("click", () => {
                    localStorage.removeItem("selectedDates");
                    updateSelectedDatesUI();
                    window.location.reload();
                })
            }
            resolve();
        })
    }
    window.addEventListener("load", () => {
        createSubNavigationWrrapperHotel();
        const hotelNav = document.querySelector(".vnt353");
        if (hotelNav) {
            hotelNav.appendChild(borderLine);
            hotelNav.classList.add("color-3366");
            plane.classList.remove("color-3366");
        }
        document.querySelectorAll(".vnt353 svg path").forEach(path => {
            path.setAttribute("fill", "#F36");
        });
        document.querySelectorAll(".vnt354 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });
        document.querySelectorAll(".vnt355 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });
    })
    function createSubNavigationWrrapperPlane() {
        return new Promise((resolve) => {
            const navigationWrapper = document.querySelector(".vnt203");
            if (!navigationWrapper.contains(document.querySelector(".plan-transitions"))) {
                const planTransitions = document.createElement("div");
                planTransitions.classList.add("plan-transitions");

                planTransitions.innerHTML = `
                    <div class="plan-transition"
                                                style="box-shadow: 0 15px 15px rgba(0, 0, 0, .2); height: 67px;">
                                                <div class="plan-start">
                                                    <div class="wrapper-plan-start">
                                                        <div class="title-Community12" style="text-align: left;">Từ
                                                        </div>
                                                        <div class="wrapper-geographical-start">
                                                            <div class="title-Community14 geographical-start"
                                                                style="opacity: 1; font-weight: bold;">
                                                                Hà Nội
                                                            </div>
                                                            <div class="wrapper-input-geographical flex-align"
                                                                style="opacity: 0;">
                                                                <input type="text" id="geographical-start"
                                                                    class="input-geographical" autocomplete="off"
                                                                    placeholder="Tìm kiếm chuyến bay trong nước">
                                                                <svg width="16" height="16" fill="none"
                                                                    style="cursor: pointer;" class="item-close">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M8 15A7 7 0 108 1a7 7 0 000 14zM6.869 5.631A.875.875 0 005.63 6.87L6.763 8 5.63 9.131A.875.875 0 106.87 10.37L8 9.237l1.131 1.132A.875.875 0 0010.37 9.13L9.237 8l1.132-1.131A.875.875 0 009.13 5.63L8 6.763 6.869 5.63z"
                                                                        fill="#A0AEC0"></path>
                                                                </svg>
                                                            </div>
    
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="return-start-destination">
                                                    <svg width="44" height="44" fill="none"
                                                        style="height: 32px; cursor: pointer;">
                                                        <g filter="url(#switch_svg__filter0_d)">
                                                            <rect x="38" width="32" height="32" rx="16"
                                                                transform="rotate(90 38 0)" fill="#00B6F3"></rect>
                                                        </g>
                                                        <path d="M28.667 11.833h-10 10z" fill="#fff"></path>
                                                        <path d="M28.667 11.833L25.333 8.5v6.667l3.334-3.334zm0 0h-10"
                                                            stroke="#fff" stroke-width="2.1" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M15.333 20.167h10-10z" fill="#fff"></path>
                                                        <path d="M15.333 20.167l3.334 3.333v-6.667l-3.334 3.334zm0 0h10"
                                                            stroke="#fff" stroke-width="2.1" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <defs>
                                                            <filter id="switch_svg__filter0_d" x="0" y="0" width="44"
                                                                height="44" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix">
                                                                </feFlood>
                                                                <feColorMatrix in="SourceAlpha"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                                                                </feColorMatrix>
                                                                <feOffset dy="6"></feOffset>
                                                                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                                                                <feColorMatrix
                                                                    values="0 0 0 0 0 0 0 0 0 0.713726 0 0 0 0 0.952941 0 0 0 0.2 0">
                                                                </feColorMatrix>
                                                                <feBlend in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow"></feBlend>
                                                                <feBlend in="SourceGraphic" in2="effect1_dropShadow"
                                                                    result="shape"></feBlend>
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div class="plan-destination">
                                                    <div class="wrapper-plan-destination">
                                                        <div class="title-Community12" style="text-align: left;">Đến
                                                        </div>
                                                        <div class="wrapper-geographical-destination"
                                                            style="position: relative;">
                                                            <div class="title-Community14 geographical-destination"
                                                                style="opacity: 0; font-weight: bold;">
                                                            </div>
                                                            <div class=" wrapper-input-geographical-destination"
                                                                style="opacity: 1; font-weight: bold;">
                                                                <input type=" text" id="geographical-destination"
                                                                    class="input-geographical" autocomplete="off"
                                                                    placeholder="Thành phố, sân bây trong nước quốc tế">
                                                            </div>
    
                                                        </div>
                                                       
                                                    </div>
    
                                                </div>
                                                <div class="plane-date flex-align" style="border-left: 1px solid #e2e8f0;">
                                                    <div class="plane-time flex-align">
                                                        <div class="time-plane-depart title-Community12">
                                                            Ngày đi
                                                            <div class="title-Community14">T7, 22 tháng 2</div>
                                                        </div>
                                                        <div class="title-Community12 time-plane-lading">
                                                            Ngày về
                                                            <div class="round-trip" style="position: absolute; top: -12px;">
                                                                <div class="toggle-round-trip flex-align">
                                                                    <div class="flex-center">
                                                                        <input type="checkbox" name="checked"
                                                                            class="vnt1673" id="">
                                                                        <span class="toggle-plane"></span>
                                                                    </div>
                                                                </div>
                                                                <span class="vnt1158"></span>
                                                            </div>
                                                            <div class="title-Community14">
                                                                <span style="color: #718096;">Chọn ngày về</span>
                                                            </div>
    
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="guest-plane" style="border-left: 1px solid #e2e8f0;">
                                                    <div class="flex-align vnt131" style="margin-left: 24px; position: relative;">
                                                        <div class="seat-class-guest">
                                                            <span class="title-Community12 vnt12">Số khách, hạng ghế</span>
                                                            <div class="title-Community14 vnt13">1 khách, phổ thông, phổ
                                                                thông đặc biệt</div>
                                                        </div>
                                                    </div>
    
                                                </div>
                                                <button class="btn-serach flex-align btn-serach-container serach-contents">
                                                    <span class="serach-label flex-align">
                                                        <svg width="23" height="24" fill="none" class="svgFillAll"
                                                            style="stroke: white;">
                                                            <path
                                                                d="M21.312 22.5l-4.742-4.742m2.71-7.451a8.806 8.806 0 11-17.613 0 8.806 8.806 0 0117.613 0z"
                                                                stroke="#fff" stroke-width="3" stroke-linecap="round"
                                                                stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="serach-label_wrrapper"></span>
                                                </button>
                                                  
                                        <div class="sub-navigation date-rent vnt206 flex" style="height: 0;">
                                        </div>
                                        
                                            </div>
                `;
                navigationWrapper.appendChild(planTransitions);
            }
            resolve();
        });
    }

    function createSubNavigationVillage() {
        return new Promise((resolve) => {
            const existingVillage = document.querySelector(".vnt358");
            const navigationWrapper = document.querySelector(".vnt203");
            if (!existingVillage) {
                const village = document.createElement("div");
                village.classList.add("place-nav-footer", "flex-align", "vnt358");
                village.innerHTML = `
              <div class="place-hotel flex-column">
                                            <span class="hotel">Địa điểm</span>
                                            <div class="input-hotel">
                                                <input id="input-note-hotel" type="text"
                                                    class="note-hotel base-note-hotel" placeholder="Bạn sắp đi đâu">
                                            </div>
                                        </div>
                                        <div class="vertical-line"></div>
                                        <div class="date-nav-footer flex-align">
                                            <div class="date-go  flex-column">
                                                <span class="title-contrainer">Ngày đến</span>
                                                <span class="title-content">Chọn ngày đi</span>
                                            </div>
                                            <div class="icon-date-nav flex-align">
                                                <svg width="10" height="9" fill="none" style="margin-left: 2px;">
                                                    <path
                                                        d="M4.982.504h.173A3.319 3.319 0 008.66 6.01 3.982 3.982 0 114.982.5v.004z"
                                                        stroke="#718096" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div class="date-backHome  flex-column">
                                                <span class="title-contrainer">Ngày về</span>
                                                <span class="title-content">Chọn ngày về</span>
                                            </div>
                                        </div>
                                        <div class="vertical-line"></div>
                                        <div class="vnt204 flex-align">
                                            <div class="number-people  flex-column">
                                                <span class="title-contrainer">Số khách</span>
                                                <span class="title-content vnt123">1 người lớn, 0 trẻ em</span>
                                            </div>
                                            <button class="btn-serach flex-align btn-serach-container serach-contents">
                                                <span class="serach-label flex-align">
                                                    <svg width="23" height="24" fill="none" class="svgFillAll"
                                                        style="stroke: white;">
                                                        <path
                                                            d="M21.312 22.5l-4.742-4.742m2.71-7.451a8.806 8.806 0 11-17.613 0 8.806 8.806 0 0117.613 0z"
                                                            stroke="#fff" stroke-width="3" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <span class="serach-label_wrrapper"></span>
                                            </button>
                                        </div>
                                        <div class="vertical-line" style="width: 0;"></div>
                                      <div class="sub-navigation vnt205 navigation-hotel flex" style="height: 0;">
                                        </div>
                                        <div class="sub-navigation vnt206 flex date-rent" style="height: 0;">
    
                                        </div>
                                        <div class="sub-navigation number-guest  vnt207" 
                                            style="height: 0;">
                                        </div>
                `
                navigationWrapper.appendChild(village);
            }
            resolve();
        })
    }
    village.addEventListener("click", async () => {
        const subNavHotel = document.querySelector(".vnt357");
        const subNavPlane = document.querySelector(".plan-transitions");
        if (subNavHotel) subNavHotel.remove();
        if (subNavPlane) subNavPlane.remove();

        setTimeout(() => {
            if (village) {
                village.appendChild(borderLine);
                village.classList.add("color-3366");
                hotel.classList.remove("color-3366");
                plane.classList.remove("color-3366");
            }
        }, 10);
        document.querySelectorAll(".vnt355 svg path").forEach(path => {
            path.setAttribute("fill", "#F36");
        });
        document.querySelectorAll(".vnt354 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });
        document.querySelectorAll(".vnt353 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });



        await createSubNavigationVillage();
        handleSubNavigationVillage();
    })
    plane.addEventListener("click", async () => {
        const subNavHotel = document.querySelector(".vnt357");
        const subVillage = document.querySelector(".vnt358");
        if (subNavHotel) subNavHotel.remove();
        if (subVillage) subVillage.remove();
        setTimeout(() => {
            if (plane) {
                plane.appendChild(borderLine);
                plane.classList.add("color-3366");
                hotel.classList.remove("color-3366");
                village.classList.remove("color-3366");
            }
        }, 10);


        document.querySelectorAll(".vnt354 svg path").forEach(path => {
            path.setAttribute("fill", "#F36");
        });
        document.querySelectorAll(".vnt353 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });
        document.querySelectorAll(".vnt355 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });

        await createSubNavigationWrrapperPlane();
        handleSubNavigationPlane();
    })
    hotel.addEventListener("click", async () => {
        const subNavPlane = document.querySelector(".plan-transitions");
        const subVillage = document.querySelector(".vnt358");

        if (subNavPlane) subNavPlane.remove();
        if (subVillage) subVillage.remove();

        setTimeout(() => {
            if (hotel) {
                hotel.appendChild(borderLine);
                hotel.classList.add("color-3366");
                plane.classList.remove("color-3366");
                village.classList.remove("color-3366");
            }
        }, 10);

        document.querySelectorAll(".vnt353 svg path").forEach(path => {
            path.setAttribute("fill", "#F36");
        });
        document.querySelectorAll(".vnt354 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });
        document.querySelectorAll(".vnt355 svg path").forEach(path => {
            path.setAttribute("fill", "#1A202C");
        });
        await createSubNavigationWrrapperHotel();
        waitForElement(".vnt357", handleSubNavigationHotel);

    })

    createSubNavigationWrrapperHotel().then(() => {
        handleSubNavigationHotel();
    });



    function handleSubNavigationPlane() {
        const wrapperGeographical = document.querySelector(".wrapper-geographical-start");
        const planeEnd = document.querySelector(".wrapper-plan-destination")
        const titleGeographical = document.querySelector(".geographical-start");
        const titlePlaneEnd = document.querySelector(".wrapper-input-geographical-destination")
        const wrapperInputGeographical = document.querySelector(".wrapper-input-geographical")
        const inputGeographical = document.querySelector(".input-geographical");
        const dateRent = document.querySelector(".plane-date");
        const timeRent = document.querySelector(".vnt206");
        const seatGuests = document.querySelector(".guest-plane");


        dateRent.addEventListener("click", () => {

            const guestSeat = document.querySelector(".guest-seat");
            if (subPlaneEnd || subPlane || guestSeat) {
                removeSubPlane();
                if (guestSeat) guestSeat.remove();
            }

            togglePlane.classList.toggle("active");
            backgroundPlane.classList.toggle("active");
            timeRent.style.height = "430px";
            timeRent.classList.add("opacity-block");
            timeRent.classList.add("vnt2061");
            createSubNavigationCalendar(timeRent);
            setTimeout(() => {
                updateSelectedDatesUI();
            }, 50);
        })


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
        const contentSeat = document.querySelector(".vnt131");

        seatGuests.addEventListener("click", () => {
            {
                if (subPlaneEnd || timeRent.classList.contains("opacity-block") || subPlane) {
                    removeSubPlane();
                }
                if (!seatGuests.contains(document.querySelector(".guest-seat"))) {
                    const seatGuest = document.createElement("div");
                    seatGuest.classList.add("sub-navigation", "guest-seat");
                    seatGuest.style.cssText = `width: 704px; right: -124px; opacity: 1;`
                    seatGuest.innerHTML = `
                      <div class="flex-column cotents-guest-seat">
                                                            <div class="flex content-guest-seat">
                                                                <div class="content-guest-seat-much">
                                                                    <h6 class="title-Community14"
                                                                        style="text-align: left;">Số khách</h6>
                                                                    <div class="flex-align vnt122 vnt123">
                                                                        <div class="flex">
                                                                            <h6 class="title-Community14">
                                                                                Người lớn
                                                                                <span
                                                                                    style="color: #718096; margin-left: 5px;">(từ
                                                                                    12 tuổi)</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div class="number-of-people flex-align">
                                                                            <button class="box-quanlity minus-people">
                                                                                <div class="flex-center">
                                                                                    <svg width="16" height="16"
                                                                                        fill="none" class="svgFillAll"
                                                                                        style="stroke: rgb(203, 213, 224);">
                                                                                        <path d="M3.333 8h9.334"
                                                                                            stroke="#cdd7e1"
                                                                                            stroke-width="1.5"
                                                                                            stroke-linecap="round"
                                                                                            stroke-linejoin="round">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                            </button>
                                                                            <span class="title-Community16"
                                                                                style="width: 24px; padding: 0 24px;">1</span>
                                                                            <button class="box-quanlity plus-people">
                                                                                <div class="flex-center">
                                                                                    <svg width="12" height="15"
                                                                                        class="svgFillAll"
                                                                                        style="stroke: rgb(255, 51, 102);">
                                                                                        <g fill="#ff3366"
                                                                                            stroke="#ff3366"
                                                                                            fill-rule="evenodd">
                                                                                            <path
                                                                                                d="M.5 7.192h11v1H.5z">
                                                                                            </path>
                                                                                            <path
                                                                                                d="M6.357 13.049h-.714v-11h.714v11z">
                                                                                            </path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-align vnt122 vnt124">
                                                                        <div class="flex">
                                                                            <h6 class="title-Community14">
                                                                                Trẻ em
                                                                                <span
                                                                                    style="color: #718096; margin-left: 5px;">(2
                                                                                    - 11 tuổi )</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div class="number-of-people flex-align">
                                                                            <button class="box-quanlity minus-people">
                                                                                <div class="flex-center">
                                                                                    <svg width="16" height="16"
                                                                                        fill="none" class="svgFillAll"
                                                                                        style="stroke: rgb(203, 213, 224);">
                                                                                        <path d="M3.333 8h9.334"
                                                                                            stroke="#cdd7e1"
                                                                                            stroke-width="1.5"
                                                                                            stroke-linecap="round"
                                                                                            stroke-linejoin="round">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                            </button>
                                                                            <span class="title-Community16"
                                                                                style="width: 24px; padding: 0 24px;">0</span>
                                                                            <button class="box-quanlity plus-people">
                                                                                <div class="flex-center">
                                                                                    <svg width="12" height="15"
                                                                                        class="svgFillAll"
                                                                                        style="stroke: rgb(255, 51, 102);">
                                                                                        <g fill="#ff3366"
                                                                                            stroke="#ff3366"
                                                                                            fill-rule="evenodd">
                                                                                            <path
                                                                                                d="M.5 7.192h11v1H.5z">
                                                                                            </path>
                                                                                            <path
                                                                                                d="M6.357 13.049h-.714v-11h.714v11z">
                                                                                            </path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-align vnt122 vnt125">
                                                                        <div class="flex">
                                                                            <h6 class="title-Community14">
                                                                                Em bé
                                                                                <span
                                                                                    style="color: #718096; margin-left: 5px;">(
                                                                                    < 2 tuổi)</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div class="number-of-people flex-align">
                                                                            <button class="box-quanlity minus-people">
                                                                                <div class="flex-center">
                                                                                    <svg width="16" height="16"
                                                                                        fill="none" class="svgFillAll"
                                                                                        style="stroke: rgb(203, 213, 224);">
                                                                                        <path d="M3.333 8h9.334"
                                                                                            stroke="#cdd7e1"
                                                                                            stroke-width="1.5"
                                                                                            stroke-linecap="round"
                                                                                            stroke-linejoin="round">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                            </button>
                                                                            <span class="title-Community16"
                                                                                style="width: 24px; padding: 0 24px;">0</span>
                                                                            <button class="box-quanlity plus-people">
                                                                                <div class="flex-center">
                                                                                    <svg width="12" height="15"
                                                                                        class="svgFillAll"
                                                                                        style="stroke: rgb(255, 51, 102);">
                                                                                        <g fill="#ff3366"
                                                                                            stroke="#ff3366"
                                                                                            fill-rule="evenodd">
                                                                                            <path
                                                                                                d="M.5 7.192h11v1H.5z">
                                                                                            </path>
                                                                                            <path
                                                                                                d="M6.357 13.049h-.714v-11h.714v11z">
                                                                                            </path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="content-guest-seat-much">
                                                                    <h6 class="title-Community14"
                                                                        style="text-align: left;">Hạng vé</h6>
                                                                    <div class="title-content-seat vnt126">
                                                                        <div class="flex title-seat vnt127">
                                                                            <div class="vnt128">
                                                                                <div class="vnt129">
                                                                                    <p class="title-Community16"
                                                                                        style="color: #00b6f3;">Phổ
                                                                                        thông</p>
                                                                                    <span class="title-Community14"
                                                                                        style="color: #718096;">Bay tiết
                                                                                        kiệm, đáp ứng mọi nhu cầu cơ
                                                                                        bản</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex-center vnt130">
                                                                                <div>
                                                                                    <svg width="32px" height="32px"
                                                                                        focusable="false"
                                                                                        viewBox="0 0 24 24"
                                                                                        aria-hidden="true">
                                                                                        <path
                                                                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <div class="flex title-seat vnt127">
                                                                            <div class="vnt128">
                                                                                <div class="vnt129">
                                                                                    <p class="title-Community16"
                                                                                        style="color: #00b6f3;">Phổ
                                                                                        thông đặc biệt</p>
                                                                                    <span class="title-Community14"
                                                                                        style="color: #718096;">Chi phí
                                                                                        hợp lý với bữa ăn ngon và chỗ để
                                                                                        chân rộng rãi.</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex-center vnt130">
                                                                                <div>
                                                                                    <svg width="32px" height="32px"
                                                                                        focusable="false"
                                                                                        viewBox="0 0 24 24"
                                                                                        aria-hidden="true">
                                                                                        <path
                                                                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <div class="flex title-seat vnt127">
                                                                            <div class="vnt128">
                                                                                <div class="vnt129">
                                                                                    <p class="title-Community16">Thương
                                                                                        gia</p>
                                                                                    <span class="title-Community14"
                                                                                        style="color: #718096;">Bay đẳng
                                                                                        cấp, với quầy làm thủ tục và khu
                                                                                        ghế ngồi riêng.</span>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                `
                    contentSeat.appendChild(seatGuest);

                }
            }
        })

        let subPlane = null
        let subPlaneEnd = null;
        const wrapperSubPlaneStart = document.querySelector(".wrapper-plan-start");
        wrapperInputGeographical.addEventListener("click", function (e) {
            const guestSeat = document.querySelector(".guest-seat");
            if (subPlaneEnd || timeRent.classList.contains("opacity-block") || guestSeat) {
                removeSubPlane();
                if (guestSeat) guestSeat.remove();
            }

            if (!subPlane) {
                subPlane = document.createElement("div");
                subPlane.classList.add("sub-plane-start", "sub-plane", "vnt463");
                subPlane.style.cssText = `left: -20px; z-index: 3;`;
                subPlane.innerHTML = `
                          <div class="wrapper-sub-plane flex-column" style="width: 500px; height: 100%;">
            <div class="content-sub-plane flex-column " style="flex-wrap: wrap; width: 100%; max-height: 260px;">
              <div class="flex-column vnt125">
                <h6 class="title-Community14" style="font-weight: bold;">Miền Bắc</h6>
                <div class="flex-column vnt126">
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                </div>
              </div>
              <div class="flex-column vnt125">
                <h6 class="title-Community14" style="font-weight: bold;">Miền Trung</h6>
                <div class="flex-column vnt126">
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                </div>
              </div>
              <div class="flex-column vnt125">
                <h6 class="title-Community14" style="font-weight: bold;">Miền Nam</h6>
                <div class="flex-column vnt126">
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                </div>
              </div>

            </div>
          </div>
                        `
                wrapperSubPlaneStart.appendChild(subPlane);

                subPlane.addEventListener("click", (e) => {
                    if (e.target.classList.contains("vnt127")) {
                        titleGeographical.textContent = e.target.textContent;
                        removeSubPlane();
                    }
                })

            }
        })
        const wrapperSubPlaneEnd = document.querySelector(".wrapper-geographical-destination");
        wrapperSubPlaneEnd.addEventListener("click", function (e) {

            const guestSeat = document.querySelector(".guest-seat");
            if (subPlane || timeRent.classList.contains("opacity-block") || guestSeat) {
                removeSubPlane();
                if (guestSeat) guestSeat.remove();
            }

            if (!subPlaneEnd) {
                subPlaneEnd = document.createElement("div");
                subPlaneEnd.classList.add("sub-plane-start", "sub-plane", "vnt464");
                subPlaneEnd.style.cssText = `left: 0px; z-index: 3;`;
                subPlaneEnd.innerHTML = `
                          <div class="wrapper-sub-plane flex-column" style="width: 500px; height: 100%;">
            <div class="content-sub-plane flex-column " style="flex-wrap: wrap; width: 100%; max-height: 260px;">
              <div class="flex-column vnt125">
                <h6 class="title-Community14" style="font-weight: bold;">Miền Bắc</h6>
                <div class="flex-column vnt126">
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Hà Nội
                  </div>
                </div>
              </div>
              <div class="flex-column vnt125">
                <h6 class="title-Community14" style="font-weight: bold;">Miền Trung</h6>
                <div class="flex-column vnt126">
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Huế
                  </div>
                </div>
              </div>
              <div class="flex-column vnt125">
                <h6 class="title-Community14" style="font-weight: bold;">Miền Nam</h6>
                <div class="flex-column vnt126">
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                  <div class="title-Community12 vnt127" style="cursor: pointer; margin-top: 4px">
                    Sài gòn
                  </div>
                </div>
              </div>

            </div>
          </div>
                        `
                planeEnd.appendChild(subPlaneEnd);

                subPlaneEnd.addEventListener("click", (e) => {
                    if (e.target.classList.contains("vnt127")) {
                        titlePlaneEnd.textContent = e.target.textContent;
                        removeSubPlane();
                    }
                })

            }
        })

        function removeSubPlane() {
            if (subPlane) {
                subPlane.remove();
                subPlane = null;
            }
            if (subPlaneEnd) {
                subPlaneEnd.remove();
                subPlaneEnd = null;
            }
            if (timeRent) {
                timeRent.style.height = "0px";
                timeRent.classList.remove("opacity-block");
                timeRent.classList.remove("vnt2061");
                timeRent.innerHTML = "";
                togglePlane.classList.remove("active");
                backgroundPlane.classList.remove("active");
            }
            const guestSeat = seatGuests.querySelector(".guest-seat");
            if (guestSeat) {
                guestSeat.remove();
            }

        }

        document.addEventListener("click", (e) => {
            const guestSeat = seatGuests.querySelector(".guest-seat");
            if (subPlane || subPlaneEnd || timeRent.classList.contains("opacity-block") || guestSeat) {
                if (!wrapperSubPlaneStart.contains(e.target) &&
                    !wrapperSubPlaneEnd.contains(e.target) &&
                    !subPlane?.contains(e.target) &&
                    !subPlaneEnd?.contains(e.target) &&
                    !dateRent.contains(e.target) &&
                    !timeRent.contains(e.target) &&
                    !seatGuests.contains(e.target) &&
                    !(guestSeat && guestSeat.contains(e.target))
                ) {
                    removeSubPlane();
                }
            }
        });



    }


    function createSubNavigationCalendar(timeRent) {
        if (!timeRent.contains(document.querySelector(".calendar-container"))) {
            const claendar = document.createElement("div");
            claendar.classList.add("calendar-container", "flex");
            claendar.id = "calendarContainer";
            claendar.style.width = "calc(100% + 24px)";
            claendar.style.justifyContent = "space-between";
            claendar.style.margin = "0 -12px";

            timeRent.appendChild(claendar);

            document.dispatchEvent(new Event("calendarReady"));
        }
    }

    function handleSubNavigationHotel() {
        const placeHotel = document.querySelector(".place-hotel");
        const subHotel = document.querySelector(".vnt205");
        const dateRent = document.querySelector(".date-nav-footer");
        const timeRent = document.querySelector(".vnt206");
        const guest = document.querySelector(".number-peoples");
        const numberRooms = document.querySelector(".vnt207");
        const inputHotel = document.getElementById("input-note-hotel");

        inputHotel.addEventListener("click", () => {
            if (inputHotel.value.trim() !== "") {
                inputHotel.select();
            }
        });

        let activeBlur = null;
        let activeSection = null;

        function createSubNavigationHotel() {
            if (!subHotel.contains(document.querySelector(".serach-recently"))) {
                const searchRecently = document.createElement("div");
                searchRecently.classList.add("serach-recently", "flex-column");
                searchRecently.id = "searchRecently";
                searchRecently.innerHTML = `
                    <div class="contaier-serach-recently">
                                                <div class="input-title-recently flex-align" style="padding: 7px 16px;">
                                                    <span>Tìm kiếm gần đây</span>
                                                </div>
                                                <div class="item-recently">
                                                    <span>Chưa có tìm kiếm gần đây</span>
                                                </div>
                                            </div>
                `;
                const locationTour = document.createElement("div");
                locationTour.classList.add("loaction-tour", "flex-column");
                locationTour.innerHTML = `
                      <span class="title-Community14-body">
                                                Địa điểm nổi bật
                                            </span>
                                           <div class="tour-item">
                ${["Đà Nẵng", "Hà Nội", "Hồ Chí Minh"].map(city => `
                    <div class="vn910 flex-align">
                        <div class="vn9101">
                            <div class="image-vn9101">
                                <div style="height: 100%;">
                                    <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                        alt="" class="item-vn9101">
                                </div>
                            </div>
                        </div>
                        <span>${city}</span>
                    </div>
                `).join('')}
            </div>
                `;
                subHotel.appendChild(searchRecently);
                subHotel.appendChild(locationTour);

                let recentSearches = getItemWithExpiry("recentSearches") || []
                updateSerachUI();

                document.querySelectorAll(".vn910").forEach(city => {
                    city.addEventListener("click", function (e) {
                        const cityElenment = e.target.closest(".vn910");
                        if (cityElenment) {
                            const cityName = cityElenment.querySelector("span").innerText;
                            document.querySelector("#input-note-hotel").value = cityName;

                            if (!recentSearches.includes(cityName)) {
                                recentSearches.unshift(cityName);
                            }

                            if (recentSearches.length > 5) {
                                recentSearches.pop();
                            }

                            setItemWithExpiry("recentSearches", recentSearches, 30);

                            setTimeout(() => {
                                dateRent.click();
                            }, 100);

                            updateSerachUI();
                        }
                    });
                });


                function updateSerachUI() {
                    let searchRecently = document.querySelector("#searchRecently");
                    if (!searchRecently) return;

                    if (recentSearches.length === 0) {
                        searchRecently.innerHTML = `
                            <div class="contaier-serach-recently">
                                <div class="input-title-recently flex-align" style="padding: 7px 16px;">
                                    <span>Tìm kiếm gần đây</span>
                                </div>
                                <div class="item-recently">
                                    <span>Chưa có tìm kiếm gần đây</span>
                                </div>
                            </div>
                        `;
                    } else {
                        searchRecently.innerHTML = `
                            <div class="contaier-serach-recently">
                                <div class="input-title-recently flex-align" style="padding: 7px 16px;">
                                    <span>Tìm kiếm gần đây</span>
                                </div>
                                <div class="vnt19 flex">
                                    <div class="vnt191 flex-center">
                                        <svg width="20" height="20" fill="none">
                                            <path d="M10 6.667V10l1.667 1.667" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2.542 9.167a7.5 7.5 0 11.416 3.333m-.416 4.167V12.5h4.166" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div class="vnt192 flex">
                                        ${recentSearches.map(city => `
                                            <div class="vnt1921 flex">
                                                <span>${city}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                }

            }
        };

        function createSubNavigationNumberRomms() {
            if (!numberRooms.contains(document.querySelector(".number-room-people"))) {
                const numberRoom = document.createElement("div");
                numberRoom.classList.add("number-room-people", "flex");
                numberRoom.id = "roomWrapper";
                numberRoom.innerHTML = `
                        <div class="wrapper-number-room">
                                                <div class="content-room vnt1021 flex-column b-left"
                                                    style="border-bottom:1px solid rgb(226, 232, 240); background-color: #fff;">
                                                    <span>
                                                        Đi một mình
                                                    </span>
                                                    <div class="title-Community12 vnt2010">1 phòng, 1 người lớn</div>
                                                </div>
                                                <div class="content-room vnt1021 flex-column "
                                                    style="border-bottom:1px solid rgb(226, 232, 240); background-color:inherit;">
                                                    <span>
                                                        Đi cặp đôi/2 người
                                                    </span>
                                                    <div class="title-Community12 vnt2010">1 phòng, 2 người lớn</div>
                                                </div>
                                                <div class="content-room vnt1022 flex-align vn1023"
                                                    style="border-bottom:1px solid rgb(226, 232, 240); background-color:inherit; justify-content: space-between;">
                                                    <span>
                                                        Đi theo gia đình
                                                    </span>
                                                    <svg width="8" height="14" fill="none">
                                                        <path d="M1 1l6 6-6 6" stroke="#718096" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                `;
                numberRooms.appendChild(numberRoom);
            }
        }

        function createBlur(target) {
            removeBlur();

            let blurDiv = document.createElement("div");
            blurDiv.classList.add("line-blur");

            let verticalLine = target.nextElementSibling;
            if (!verticalLine || !verticalLine.classList.contains("vertical-line")) return;

            verticalLine.parentElement.insertBefore(blurDiv, verticalLine);



            activeBlur = blurDiv;
        }

        function removeBlur() {
            if (activeBlur && activeBlur.parentElement) {
                activeBlur.parentElement.removeChild(activeBlur);
                activeBlur = null;
            }
            if (numberRooms) {
                numberRooms.style.right = "180px";
                numberRooms.style.width = "214px";
            }
        }

        placeHotel.addEventListener("click", (e) => {

            if (activeSection !== "placeHotel") {
                activeSection = "placeHotel";

                timeRent.style.height = "0";
                timeRent.classList.remove("vnt2061")
                timeRent.classList.remove("opacity-block");
                timeRent.innerHTML = "";

                numberRooms.style.height = "0";
                numberRooms.classList.remove("opacity-block");
                numberRooms.innerHTML = "";

                subHotel.style.height = "418px";
                subHotel.classList.add("opacity-block");

                createSubNavigationHotel();

                createBlur(placeHotel);

                setTimeout(() => {
                    if (activeBlur) {
                        activeBlur.classList.add("action-line-blur1");
                    }
                }, 50);
            }

        })
        dateRent.addEventListener("click", (e) => {

            if (activeSection !== "dateRent") {
                activeSection = "dateRent";

                localStorage.removeItem("selectedDates");

                subHotel.style.height = "0";
                subHotel.classList.remove("opacity-block");
                subHotel.innerHTML = "";

                numberRooms.style.height = "0";
                numberRooms.classList.remove("opacity-block");
                numberRooms.innerHTML = "";

                timeRent.style.height = "430px";
                timeRent.classList.add("opacity-block");
                timeRent.classList.add("vnt2061")

                createSubNavigationCalendar(timeRent);

                createBlur(dateRent);

                setTimeout(() => {
                    if (activeBlur) {
                        activeBlur.classList.add("action-line-blur2");
                    }
                    updateSelectedDatesUI();
                }, 50);
            }
        });

        guest.addEventListener("click", (e) => {

            if (activeSection !== "guest") {
                activeSection = "guest";

                subHotel.style.height = "0";
                subHotel.classList.remove("opacity-block");
                subHotel.innerHTML = "";

                timeRent.style.height = "0";
                timeRent.classList.remove("vnt2061")
                timeRent.classList.remove("opacity-block");
                timeRent.innerHTML = "";

                numberRooms.style.height = "182px";
                numberRooms.classList.add("opacity-block");

                createSubNavigationNumberRomms();

                createBlur(guest);

                setTimeout(() => {
                    if (activeBlur) {
                        activeBlur.classList.add("action-line-blur3");
                    }
                }, 50);

            }
        });



        document.addEventListener("click", (e) => {
            if (
                !placeHotel.contains(e.target) &&
                !subHotel.contains(e.target) &&
                !dateRent.contains(e.target) &&
                !timeRent.contains(e.target) &&
                !numberRooms.contains(e.target) &&
                !guest.contains(e.target)
            ) {
                if (subHotel) {
                    subHotel.style.height = "0px";
                    subHotel.classList.remove("opacity-block");
                    subHotel.innerHTML = "";
                }

                if (timeRent) {
                    timeRent.style.height = "0px";
                    timeRent.classList.remove("vnt2061")
                    timeRent.classList.remove("opacity-block");
                    timeRent.innerHTML = "";
                }

                if (numberRooms) {
                    numberRooms.style.height = "0";
                    numberRooms.classList.remove("opacity-block");
                    numberRooms.innerHTML = "";
                    waitForElement(".wrapper-number-room", handleRooms);

                    waitForElement(".wrapper-number-room", targetFamily);
                }

                removeBlur();
                activeSection = null;
            }
        });



    };
    function handleSubNavigationVillage() {
        const placeHotel = document.querySelector(".place-hotel");
        const subHotel = document.querySelector(".vnt205");
        const dateRent = document.querySelector(".date-nav-footer");
        const timeRent = document.querySelector(".vnt206");
        const numberGuests = document.querySelector(".vnt207");
        const navigationGuest = document.querySelector(".vnt204");


        let activeBlur = null;
        let activeSection = null;

        function createSubNavigationHotel() {
            if (!subHotel.contains(document.querySelector(".serach-recently"))) {
                const searchRecently = document.createElement("div");
                searchRecently.classList.add("serach-recently", "flex-column");
                searchRecently.innerHTML = `
                    <div class="contaier-serach-recently">
                                                <div class="input-title-recently flex-align" style="padding: 7px 16px;">
                                                    <span>Tìm kiếm gần đây</span>
                                                </div>
                                                <div class="item-recently">
                                                    <span>Chưa có tìm kiếm gần đây</span>
                                                </div>
                                            </div>
                `;
                const locationTour = document.createElement("div");
                locationTour.classList.add("loaction-tour", "flex-column");
                locationTour.innerHTML = `
                      <span class="title-Community14-body">
                                                Địa điểm nổi bật
                                            </span>
                                            <div class="tour-item">
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>
                                                <div class="vn910 flex-align">
                                                    <div class="vn9101">
                                                        <div class="image-vn9101">
                                                            <div style="height: 100%;">
                                                                <img src="./image/dinh-ban-co-dia-diem-du-lich-da-nang-1-25.webp"
                                                                    alt="" class="item-vn9101">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>Đà nẵng</span>
                                                </div>

                                            </div>
                `;
                subHotel.appendChild(searchRecently);
                subHotel.appendChild(locationTour);


            }
        };

        function createSubNavigationGuestVillage() {
            if (!numberGuests.contains(document.querySelector(".wrapper-number-geust"))) {
                const numberGuest = document.createElement("div");
                numberGuest.classList.add("wrapper-number-geust");
                numberGuest.innerHTML = `
                     <div class="flex-align vnt122 vnt123" style="margin: 4px;">
                                                    <div class="flex">
                                                        <h6 class="title-Community14">
                                                            Người lớn
                                                        </h6>
                                                    </div>
                                                    <div class="number-of-people flex-align">
                                                        <button class="box-quanlity minus-people">
                                                            <div class="flex-center">
                                                                <svg width="16" height="16" fill="none" class="svgFillAll"
                                                                    style="stroke: rgb(203, 213, 224);">
                                                                    <path d="M3.333 8h9.334" stroke="#cdd7e1"
                                                                        stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <span class="title-Community16"
                                                            style="width: 24px; padding: 0 24px;">1</span>
                                                        <button class="box-quanlity plus-people">
                                                            <div class="flex-center">
                                                                <svg width="12" height="15" class="svgFillAll"
                                                                    style="stroke: rgb(255, 51, 102);">
                                                                    <g fill="#ff3366" stroke="#ff3366" fill-rule="evenodd">
                                                                        <path d="M.5 7.192h11v1H.5z">
                                                                        </path>
                                                                        <path d="M6.357 13.049h-.714v-11h.714v11z">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="flex-align vnt122 vnt123" style="margin: 4px;">
                                                    <div class="flex">
                                                        <h6 class="title-Community14">
                                                            Trẻ em
                                                        </h6>
                                                    </div>
                                                    <div class="number-of-people flex-align">
                                                        <button class="box-quanlity minus-people">
                                                            <div class="flex-center">
                                                                <svg width="16" height="16" fill="none" class="svgFillAll"
                                                                    style="stroke: rgb(203, 213, 224);">
                                                                    <path d="M3.333 8h9.334" stroke="#cdd7e1"
                                                                        stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <span class="title-Community16"
                                                            style="width: 24px; padding: 0 24px;">0</span>
                                                        <button class="box-quanlity plus-people">
                                                            <div class="flex-center">
                                                                <svg width="12" height="15" class="svgFillAll"
                                                                    style="stroke: rgb(255, 51, 102);">
                                                                    <g fill="#ff3366" stroke="#ff3366" fill-rule="evenodd">
                                                                        <path d="M.5 7.192h11v1H.5z">
                                                                        </path>
                                                                        <path d="M6.357 13.049h-.714v-11h.714v11z">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                `;
                numberGuests.appendChild(numberGuest);

            }
        }




        placeHotel.addEventListener("click", (e) => {

            timeRent.style.height = "0";
            timeRent.classList.remove("opacity-block");
            timeRent.classList.remove("vnt2061")
            timeRent.innerHTML = ``;


            numberGuests.style.height = "0";
            numberGuests.classList.remove("opacity-block");
            numberGuests.innerHTML = ``;

            subHotel.style.height = "418px";
            subHotel.classList.add("opacity-block");

            createSubNavigationHotel();

        })
        dateRent.addEventListener("click", (e) => {

            subHotel.style.height = "0";
            subHotel.classList.remove("opacity-block");
            subHotel.innerHTML = ``;


            numberGuests.style.height = "0";
            numberGuests.classList.remove("opacity-block");
            numberGuests.innerHTML = ``;



            timeRent.style.height = "430px";
            timeRent.classList.add("opacity-block");
            timeRent.classList.add("vnt2061")



            createSubNavigationCalendar(timeRent);


        });
        navigationGuest.addEventListener("click", (e) => {

            subHotel.style.height = "0";
            subHotel.classList.remove("opacity-block");
            subHotel.innerHTML = ``;



            timeRent.style.height = "0";
            timeRent.classList.remove("opacity-block");
            timeRent.classList.remove("vnt2061")
            timeRent.innerHTML = ``;



            numberGuests.style.height = "224px";
            numberGuests.classList.add("opacity-block");

            createSubNavigationGuestVillage();

        });



        document.addEventListener("click", (e) => {
            if (
                !placeHotel.contains(e.target) &&
                !subHotel.contains(e.target) &&
                !dateRent.contains(e.target) &&
                !timeRent.contains(e.target) &&
                !numberGuests.contains(e.target) &&
                !navigationGuest.contains(e.target)
            ) {
                if (subHotel) {
                    subHotel.style.height = "0px";
                    subHotel.classList.remove("opacity-block");
                    subHotel.innerHTML = "";
                }

                if (timeRent) {
                    timeRent.style.height = "0px";
                    timeRent.classList.remove("opacity-block");
                    timeRent.classList.remove("vnt2061")
                    timeRent.innerHTML = "";
                }

                if (numberGuests) {
                    numberGuests.style.height = "0";
                    numberGuests.classList.remove("opacity-block");
                    numberGuests.innerHTML = "";
                    waitForElement(".wrapper-number-room", handleRooms);

                    waitForElement(".wrapper-number-room", targetFamily);
                }
            }
        });



    };


    function getSelectedDates() {
        let storedDates = localStorage.getItem("selectedDates");
        if (storedDates) {
            return JSON.parse(storedDates).map(date => ({
                day: date.day,
                month: date.month,
                year: date.year,
                dateObj: new Date(date.year, date.month - 1, date.day)
            }));
        }
        return [];
    }

    function updateSelectedDatesUI() {
        let selectedDates = getSelectedDates();
        if (selectedDates.length !== 2) return;

        let [firstDayObj, secondDayObj] = selectedDates;
        let firstDateObj = firstDayObj.dateObj;
        let secondDateObj = secondDayObj.dateObj;

        document.querySelectorAll(".day-number").forEach(d => {
            let dDay = parseInt(d.getAttribute("data-day"));
            let dMonth = parseInt(d.getAttribute("data-month")) - 1;
            let dYear = parseInt(d.getAttribute("data-year"));

            let dDate = new Date(dYear, dMonth, dDay);

            if (dDate >= firstDateObj && dDate <= secondDateObj) {
                d.style.background = "rgba(255,51,102,.1)";
                d.style.borderRadius = "0";
                d.classList.add("selected-date");
            }

            if (dDate.getTime() === firstDateObj.getTime()) {
                d.style.borderRadius = "40px 0 0 40px";
            }
            if (dDate.getTime() === secondDateObj.getTime()) {
                d.style.borderRadius = "0 40px 40px 0";
            }
        });
        setTimeout(() => {
            const guest = document.querySelector(".number-peoples");
            console.log(guest);
            if (guest) {
                guest.click();
            }
        }, 100);
    }


    function displaySelectedDates() {
        let selectedDates = getSelectedDates();
        if (selectedDates.length === 2) {
            let [firstDayObj, secondDayObj] = selectedDates;

            let firstDateObj = firstDayObj.dateObj;
            let secondDateObj = secondDayObj.dateObj;

            let thuTrongTuan = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
            let firstDayOfWeek = thuTrongTuan[firstDateObj.getDay()];
            let secondDayOfWeek = thuTrongTuan[secondDateObj.getDay()];

            const goDateTour = document.querySelector(".date-go .title-content");
            const backDateTour = document.querySelector(".date-backHome .title-content");

            goDateTour.innerText = `${firstDayOfWeek}, ${firstDayObj.day}/${firstDayObj.month + 1}`;
            backDateTour.innerText = `${secondDayOfWeek}, ${secondDayObj.day}/${secondDayObj.month + 1}`;

            goDateTour.classList.add("title-content");
            backDateTour.classList.add("title-content");

            let timeDiff = Math.abs(secondDateObj - firstDateObj);
            let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            const daysCountElement = document.querySelector(".icon-date-nav.flex-align");
            daysCountElement.innerHTML = `
            ${diffDays}
            <svg width="10" height="9" fill="none" style="margin-left: 2px;">
                <path d="M4.982.504h.173A3.319 3.319 0 008.66 6.01 3.982 3.982 0 114.982.5v.004z" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `;

        }

    }

    function observeCalendarChanges() {
        const calendarContainer = document.querySelector(".calendar-container");

        if (!calendarContainer) return;

        const observer = new MutationObserver(() => {
            updateSelectedDatesUI();
        });

        observer.observe(calendarContainer, { childList: true, subtree: true });
    }

    function attachDayClickEvent() {
        const days = document.querySelectorAll(".day-number");

        if (days.length === 0) {
            console.warn("Không tìm thấy phần tử .day-number để gắn sự kiện.");
            return;
        }

        days.forEach(day => {
            day.addEventListener("click", function () {
                const dayValue = parseInt(day.getAttribute("data-day"));
                const monthValue = parseInt(day.getAttribute("data-month"));
                const yearValue = parseInt(day.getAttribute("data-year"));

                handleDayClick(dayValue, monthValue, yearValue);
            });
        });

        console.log("Đã gắn sự kiện click vào các ngày.");
    }
    function handleDayClick(day, month, year) {
        let selectedDates = getSelectedDates();

        selectedDates.push({ day, month, year, dateObj: new Date(year, month - 1, day) });

        if (selectedDates.length === 2) {
            localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
        }

        updateSelectedDatesUI();
        displaySelectedDates();

        if (selectedDates.length === 2) {
            setTimeout(() => {
                const guest = document.querySelector(".number-peoples");
                console.log("Đã chọn đủ 2 ngày, chuyển sang phần chọn phòng:", guest);
                if (guest) {
                    guest.click();
                }
            }, 100);
        }
    }
    document.addEventListener("calendarReady", function () {
        console.log("Lịch đã sẵn sàng, gắn sự kiện click vào các ngày...");
        attachDayClickEvent();
    });
    function waitForElement(selector, callback) {
        const element = document.querySelector(selector);
        if (element) {
            callback();
        } else {
            setTimeout(() => waitForElement(selector, callback), 100);
        }
    }


    function handleRooms() {
        const wrapper = document.querySelector(".wrapper-number-room");
        if (!wrapper) return;

        const contentRooms = wrapper.querySelectorAll(".content-room");
        const oneSelfOption = wrapper.querySelector(".content-room:first-child");

        if (!oneSelfOption) {
            return;
        }

        contentRooms.forEach((room) => {
            room.addEventListener("click", function (e) {
                e.stopPropagation();

                contentRooms.forEach((r) => {
                    r.classList.remove("b-left");
                    r.style.backgroundColor = "inherit";
                });

                this.classList.add("b-left");
                this.style.backgroundColor = "#fff";
            });
        });

        document.addEventListener("click", (e) => {
            if (!wrapper.contains(e.target)) {
                contentRooms.forEach((r) => {
                    r.classList.remove("b-left");
                    r.style.backgroundColor = "inherit";
                });

                oneSelfOption.classList.add("b-left");
                oneSelfOption.style.backgroundColor = "#fff";
            }
        });
    }




    function targetFamily() {
        const familyOption = document.querySelector(".vn1023");
        const extraRooms = document.querySelectorAll(".vnt1021");
        const roomWrapper = document.querySelector(".wrapper-number-room");

        familyOption.addEventListener("click", (e) => {
            let extraRoomWrapper = document.querySelector(".wrapper-number-room-extra");

            if (!extraRoomWrapper) {
                extraRoomWrapper = document.createElement("div");
                extraRoomWrapper.classList.add("wrapper-number-room-extra");

                extraRoomWrapper.innerHTML = `
            <div class="numbers-extra flex-align">
                                      <span> Phòng</span>
                                      <div class="number-of-people flex-align">
                                          <button class="box-quanlity minus-people">
                                              <div class="flex-center">
                                                  <svg width="16" height="16" fill="none"
                                                      class="svgFillAll"
                                                      style="stroke: rgb(203, 213, 224);">
                                                      <path d="M3.333 8h9.334" stroke="#cdd7e1"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                  </svg>
                                              </div>
                                          </button>
                                          <span class="title-Community16"
                                              style="width: 24px; padding: 0 24px;">1</span>
                                          <button class="box-quanlity plus-people">
                                              <div class="flex-center">
                                                  <svg width="12" height="15" class="svgFillAll"
                                                      style="stroke: rgb(255, 51, 102);">
                                                      <g fill="#ff3366" stroke="#ff3366"
                                                          fill-rule="evenodd">
                                                          <path d="M.5 7.192h11v1H.5z"></path>
                                                          <path d="M6.357 13.049h-.714v-11h.714v11z">
                                                          </path>
                                                      </g>
                                                  </svg>
                                              </div>
                                          </button>
                                      </div>
                                  </div>
          <div class="numbers-extra flex-align">
                                      <span> Người lớn </span>
                                      <div class="number-of-people flex-align">
                                          <button class="box-quanlity minus-people">
                                              <div class="flex-center">
                                                  <svg width="16" height="16" fill="none"
                                                      class="svgFillAll"
                                                      style="stroke: rgb(203, 213, 224);">
                                                      <path d="M3.333 8h9.334" stroke="#ff3366"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                  </svg>
                                              </div>
                                          </button>
                                          <span class="title-Community16"
                                              style="width: 24px; padding: 0 24px;">2</span>
                                          <button class="box-quanlity plus-people">
                                              <div class="flex-center">
                                                  <svg width="12" height="15" class="svgFillAll"
                                                      style="stroke: rgb(255, 51, 102);">
                                                      <g fill="#ff3366" stroke="#ff3366"
                                                          fill-rule="evenodd">
                                                          <path d="M.5 7.192h11v1H.5z"></path>
                                                          <path d="M6.357 13.049h-.714v-11h.714v11z">
                                                          </path>
                                                      </g>
                                                  </svg>
                                              </div>
                                          </button>
                                      </div>
                                  </div>
          <div class="numbers-extra flex-align">
                                      <span> Trẻ em</span>
                                      <div class="number-of-people flex-align">
                                          <button class="box-quanlity minus-people">
                                              <div class="flex-center">
                                                  <svg width="16" height="16" fill="none"
                                                      class="svgFillAll"
                                                      style="stroke: rgb(203, 213, 224);">
                                                      <path d="M3.333 8h9.334" stroke="#cdd7e1"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                  </svg>
                                              </div>
                                          </button>
                                          <span class="title-Community16"
                                              style="width: 24px; padding: 0 24px;">0</span>
                                          <button class="box-quanlity plus-people">
                                              <div class="flex-center">
                                                  <svg width="12" height="15" class="svgFillAll"
                                                      style="stroke: rgb(255, 51, 102);">
                                                      <g fill="#ff3366" stroke="#ff3366"
                                                          fill-rule="evenodd">
                                                          <path d="M.5 7.192h11v1H.5z"></path>
                                                          <path d="M6.357 13.049h-.714v-11h.714v11z">
                                                          </path>
                                                      </g>
                                                  </svg>
                                              </div>
                                          </button>
                                      </div>
                                  </div>
        `;

                roomWrapper.after(extraRoomWrapper);
            }

            const wrapper = document.getElementById("roomWrapper");
            if (wrapper) {
                wrapper.style.width = "590px";
                wrapper.style.right = "0";
            }

            e.stopPropagation();
        });

        extraRooms.forEach(option => {
            option.addEventListener("click", () => {
                let extraRoomWrapper = document.querySelector(".wrapper-number-room-extra");
                if (extraRoomWrapper) {
                    extraRoomWrapper.remove();
                }
                const wrapper = document.getElementById("roomWrapper");
                if (wrapper) {
                    wrapper.style.width = "214px";
                    wrapper.style.right = "180px";
                }
            });
        });

        document.addEventListener("click", (e) => {
            let extraRoomWrapper = document.querySelector(".wrapper-number-room-extra");

            if (extraRoomWrapper &&
                !familyOption.contains(e.target) &&
                !extraRoomWrapper.contains(e.target)) {
                extraRoomWrapper.remove();
            }
        });
    }
    function setItemWithExpiry(key, value, expiryMinutes) {
        const now = new Date().getTime();
        const expiryTime = now + expiryMinutes * 60 * 1000;

        const data = {
            value: value,
            expiry: expiryTime
        };

        localStorage.setItem(key, JSON.stringify(data));
    }
    function getItemWithExpiry(key) {
        const dataStr = localStorage.getItem(key);
        if (!dataStr) return null;

        const data = JSON.parse(dataStr);
        const now = new Date().getTime();

        if (now > data.expiry) {
            localStorage.removeItem(key);
            return null;
        }

        return data.value;
    }



    // function updateGuestSelection() {
    //     const titleContent = document.querySelector(".title-content.vnt123");
    //     const numberRooms = document.querySelector(".number-room-people");

    //     if (!numberRooms) return;

    //     numberRooms.addEventListener("click", (event) => {
    //         const selectedOption = event.target.closest(".vnt1021");
    //         console.log(selectedOption);

    //         if (selectedOption) {
    //             const selectText = selectedOption.querySelector(".title-Community12").textContent.trim();
    //             console.log(selectText);
    //             const selectTextElenment = selectTextElenment.textContent.trim();
    //             const guests = selectTextElenment.match(/\d+ người lớn/);

    //             if (guests) {
    //                 titleContent.textContent = titleContent.textContent.replace(/\d+ người lớn/, guests[0]);
    //             }

    //             const extraRoomWrapper = document.querySelector(".wrapper-number-room-extra");
    //             if (extraRoomWrapper) {
    //                 extraRoomWrapper.remove();
    //             }

    //             numberRooms.style.height = "0";
    //             numberRooms.classList.remove("opacity-block");
    //             numberRooms.innerHTML = "";
    //         }
    //     });
    // }




    function runFunctions() {


        waitForElement(".wrapper-number-room", handleRooms);

        waitForElement(".wrapper-number-room", targetFamily);

        displaySelectedDates();

        observeCalendarChanges();

    }

    runFunctions();


});

