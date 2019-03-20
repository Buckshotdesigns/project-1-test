<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>spin.js example</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/spin.js/1.2.7/spin.min.js"></script>
</head>
<body>
    <div id="foo"></div>
    <script>
        var opts = {
            lines: 10, // The number of lines to draw
            length: 7, // The length of each line
            width: 4, // The line thickness
            radius: 10, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#000', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 25, // Top position relative to parent in px
            left: 25 // Left position relative to parent in px
        };
        var target = document.getElementById('foo');
        var spinner = new Spinner(opts).spin(target);
    </script>
</body>
</html>





var shelters = [
    {
        shelterId: "OH290",
        shelterName: "Cleveland APL",
        shelterURL: "http://clevelandapl.org",
    },
    {
        shelterId: "OH605",
        shelterName: "Secondhand Mutts",
        shelterURL: "http://secondhandmutts.org/",
    },
    {
        shelterId: "OH1043",
        shelterName: "Cleveland Animal Care and Control",
        shelterURL: "$http://www.city.cleveland.oh.us/CityofCleveland/Home/Government/CityAgencies/PublicSafety/AnimalControl",
    },
    {
        shelterId: "OH1012",
        shelterName: "Live Love Resue",
        shelterURL: "$000",
    },
    {
        shelterId: "OH74",
        shelterName: "Parma Animal Shelter, Inc.",
        shelterURL: "$000",
    },
    {
        shelterId: "OH481",
        shelterName: "Pack Pride Sanctuary",
        shelterURL: "$000",
    },
    {
        shelterId: "OH1129",
        shelterName: "Doberman Underground",
        shelterURL: "$000",
    },
    {
        shelterId: "OH214",
        shelterName: "Oasis Animal Shelter",
        shelterURL: "$000",
    },
    {
        shelterId: "OH1073",
        shelterName: "Mutts in a Rut Rescue, Inc.",
        shelterURL: "$000",
    },
    {
        shelterId: "OH92",
        shelterName: "Lakewood Animal Shelter",
        shelterURL: "$000",
    },
    {
        shelterId: "OH674",
        shelterName: "Lucky Paws Animal Shelter",
        shelterURL: "$000",
    },
    {
        shelterId: "OH472",
        shelterName: "Cuyahoga Animal Shelter",
        shelterURL: "$000",
    },
];
