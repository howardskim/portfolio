$(document).ready(function () {
    Typed.new("#writing-text", {
        strings: [
            "am a Front End Developer.", "love Chipotle.", "also love to solve problems."
        ],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 1,
        contentType: 'text',
        callback: function () {
            $("#writing-text").css({ "color": "#fff", "background-color": 'rgba(0, 103, 122, 0.47)' });
        },
        preStringTyped: function () { },
        onStringTyped: function () { }
    });
})