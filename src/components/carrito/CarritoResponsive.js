import React from 'react'

const handleActive = () => {
    const menu = document.querySelector('.menu');
    menu.classList.add('active')
};

export const CarritoResponsive = () => {
    return (
        <div class="cheverisimo d-xs-block d-sm-block d-lg-none d-xl-none">
        <div class="boton-cheverisimo" onClick={handleActive}>
            <div class="target-items">4</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.41 71.25" height="20" widht="100%">
                <title>bolso</title>
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Capa_1-2" data-name="Capa 1">
                        <g class="cls-1">
                            <path class="bolso-2" d="M38.3,68.46H11.36v-50h7.41v7.13a1.39,1.39,0,0,0,2.78,0V18.46h19v7.13a1.39,1.39,0,1,0,2.78,0V18.46h7.18V33a1.4,1.4,0,0,0,2.79,0v-16a1.4,1.4,0,0,0-1.4-1.4H43.34V12.22A12.26,12.26,0,0,0,31.06,0a12.42,12.42,0,0,0-4.41.81A12.29,12.29,0,0,0,10,12.22v3.45H1.39A1.4,1.4,0,0,0,0,17.07V64.65a6.61,6.61,0,0,0,6.61,6.6H43.05a5.45,5.45,0,0,1-4.75-2.79ZM31.06,2.78a9.48,9.48,0,0,1,9.5,9.44v3.45h-6V12.22A12.16,12.16,0,0,0,30.1,2.83c.32,0,.63-.05,1-.05ZM26.65,3.86a9.44,9.44,0,0,1,5.1,8.36v3.45H21.55V12.22A9.44,9.44,0,0,1,26.65,3.86Zm-13.9,8.36a9.48,9.48,0,0,1,9.5-9.44c.32,0,.64,0,.95.05a12.19,12.19,0,0,0-4.43,9.39v3.45h-6ZM8.57,68.46h-2a3.83,3.83,0,0,1-3.83-3.81V18.46H8.57v50Z"></path>
                        </g>
                        <g class="cls-1">
                            <path class="bolso-2" d="M62,71.25H41.66a5.45,5.45,0,0,1-5.45-5.45V40.27h31.2V65.8A5.45,5.45,0,0,1,62,71.25Z"></path>
                            <path class="bolso-2" d="M57.78,48.56a1.4,1.4,0,0,1-1.4-1.4V39.45a4.6,4.6,0,0,0-9.19,0v7.71a1.39,1.39,0,1,1-2.78,0V39.45a7.38,7.38,0,0,1,14.76,0v7.71A1.4,1.4,0,0,1,57.78,48.56Z"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    )
}
