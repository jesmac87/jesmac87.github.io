$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['summary', 'education', 'experience', 'technical-skills'],
        // menu: '#myMenu',

        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['summary', 'education', 'experience', 'technical-skills'],
        showActiveTooltip: true,
        sectionsColor: ['brown', '#4BBFC3', '#7BAABE', 'green'],




    });
});
