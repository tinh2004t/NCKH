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
    const borderLine = document.createElement("div");
    borderLine.classList.add("border-line-place");


    function createSubNavigationWrrapperHotel() {
        return new Promise((resolve) => {
            const navigationWrapper = document.querySelector(".vnt203");
            if (!navigationWrapper.contains(document.querySelector(".place-nav-footer"))) {
                const placeFooter = document.createElement("div");
                placeFooter.classList.add("place-nav-footer", "flex-align");
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
                                        <div class="sub-navigation navigation-hotel flex" style="height: 0;">
                                        </div>
                                        <div class="sub-navigation date-rent flex" style="height: 0;">
    
                                        </div>
                                        <div class="sub-navigation number_room-number-people" id="roomWrapper"
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
        }
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
                                                    <div class="flex-align" style="margin-left: 24px; position: relative;">
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
    
    
    
                                                <div class="sub-navigation navigation-hotel flex" style="height: 0;">
    
                                                </div>
                                                <div class="sub-navigation date-rent flex" style="height: 0;">
    
                                                </div>
                                                <div class="sub-navigation number_room-number-people" id="roomWrapper"
                                                    style="height: 0;">
                                                </div>
    
                                            </div>
                `;
                navigationWrapper.appendChild(planTransitions);
            }
            resolve();
        });
    }
    plane.addEventListener("click", () => {
        const subNavHotel = document.querySelector(".place-nav-footer");
        if (subNavHotel) subNavHotel.remove();

        createSubNavigationWrrapperPlane();

        setTimeout(() => {
            const planeNav = document.querySelector(".vnt354");
            if (planeNav) {
                planeNav.appendChild(borderLine);
            }
        }, 10);
    })
    hotel.addEventListener("click", () => {
        const subNavPlane = document.querySelector(".plan-transitions");
        if (subNavPlane) subNavPlane.remove();

        createSubNavigationWrrapperHotel();
        setTimeout(() => {
            const hotelNav = document.querySelector(".vnt353");
            if (hotelNav) {
                hotelNav.appendChild(borderLine);
            }
        }, 10);
    })

    createSubNavigationWrrapperHotel().then(() => {
        handleSubNavigation();
    });



    const placeHotel = document.querySelector(".place-hotel");
    const subHotel = document.querySelector(".navigation-hotel");
    const dateRent = document.querySelector(".date-nav-footer");
    const timeRent = document.querySelector(".date-rent");
    const guest = document.querySelector(".number-peoples");
    const numberRooms = document.querySelector(".number_room-number-people");




    function handleSubNavigation() {

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
        function createSubNavigationCalendar() {
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
                timeRent.classList.remove("opacity-block");

                numberRooms.style.height = "0";
                numberRooms.classList.remove("opacity-block");

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

                subHotel.style.height = "0";
                subHotel.classList.remove("opacity-block");

                numberRooms.style.height = "0";
                numberRooms.classList.remove("opacity-block");

                timeRent.style.height = "430px";
                timeRent.classList.add("opacity-block");

                createSubNavigationCalendar();

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

                timeRent.style.height = "0";
                timeRent.classList.remove("opacity-block");

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


    function getSelectedDates() {
        let storedDates = localStorage.getItem("selectedDates");
        if (storedDates) {
            return JSON.parse(storedDates).map(date => ({
                day: date.day,
                month: date.month,
                year: date.year,
                dateObj: new Date(date.year, date.month - 1, date.day) // Chuyển về đối tượng Date
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
            let dMonth = parseInt(d.getAttribute("data-month")) - 1; // Chuyển tháng về 0-11
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
    function waitForElement(selector, callback) {
        let checkExist = setInterval(() => {
            let element = document.querySelector(selector);
            if (element) {
                clearInterval(checkExist);
                callback();
            }
        }, 5);
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

