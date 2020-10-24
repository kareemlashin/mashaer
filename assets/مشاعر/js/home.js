$(document).ready(function () {
    var ctx2 = document.getElementById('myChart1').getContext('2d');
    var ctx2 = new Chart(ctx2, {
        type: 'horizontalBar',

        data: {
            labels: ["#نعم-نعم", "#نعم-نعم", "#ان-ان", "#نعم-نعم", "#الله-الله", "#ان", "#نعم-نعم", "#الله-الله", "#ان-ان"],

            datasets: [{
                label: "Negative",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "rgba(29, 33, 39, 0.7)"
            }, {
                label: "Neutral",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "rgba(212, 175, 55, 0.6)"
            }, {
                label: "Positive",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],

                backgroundColor: "rgba(101, 123, 122, 0.6)"
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,

                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart2').getContext('2d');
    var ctx = new Chart(ctx, {
        type: 'horizontalBar',

        data: {
            labels: ["نعم", "الله", "ان", "نعم", "الله", "ان", "نعم", "الله", "ان"],

            datasets: [{
                label: "Negative",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "rgba(29, 33, 39, 0.7)"
            }, {
                label: "Neutral",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "rgba(212, 175, 55, 0.6)"
            }, {
                label: "Positive",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],

                backgroundColor: "rgba(101, 123, 122, 0.6)"
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,

                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

})