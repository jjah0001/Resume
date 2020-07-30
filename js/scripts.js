/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

function summonTextFlag(flagId) {
    if (flagId == 0) {
        document.getElementById("langPara").innerHTML = "Bahasa Indonesia<br>C1/Native<br>Minor understanding in Basa Jawa/Javanese";
    }
    else if (flagId == 1) {
        document.getElementById("langPara").innerHTML = "English<br>C1/Native";
    }
    else if (flagId == 2) {
        document.getElementById("langPara").innerHTML = "中文<br>B2/High Working Proficiency<br>Proficient in Mandarin Chinese while understanding a bit of Cantonese and Hokkien.<br>Literate in Simplified and Traditional to some extent.";
    }
    else if (flagId == 3) {
        document.getElementById("langPara").innerHTML = "Deutsch<br>B1/Low Working Proficiency";
    }
    else if (flagId == 4) {
        document.getElementById("langPara").innerHTML = "日本語<br>A1/Beginners<br>Able to read Hiragana, Katakana and some Kanji.";
    }
}
