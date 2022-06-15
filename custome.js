window.addEventListener( "load", () => {

    const sounds = document.querySelectorAll( ".sound" );
    const pads = document.querySelectorAll( ".pads div" );
    const visual = document.querySelector( ".visual" );
    const colors = [
        "#26547c",
        "#ef476f",
        "#ffd166",
        "#06d6a0",
        "#f18f01",
        "#48a9a6"
    ];

    pads.forEach( ( pad, index ) => {

        pad.addEventListener( "click", function () {

            sounds[ index ].currentTime = 0;
            sounds[ index ].play();
            pad.classList.remove( "fire" );
            pad.offsetWidth;
            pad.classList.add( "fire" );

            createBubbles( index );

        } );
    } );


    const createBubbles = ( index ) => {

        const bubble = document.createElement( "div" );
        visual.appendChild( bubble );
        bubble.style.backgroundColor = colors[ index ];
        bubble.style.animation = "jump 1.5s ease";
        bubble.style.left = ((index + 1) * 16.6667) - 9.3337 + "%";
        bubble.style.boxShadow = "0px 0px 8px 2px " + colors[ index ];

        bubble.addEventListener( "animationend", function () {
            visual.removeChild( this );
        } );
    }
} );


