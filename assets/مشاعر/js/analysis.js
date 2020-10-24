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

    function inc1() {
        let num1 = $("#countOne").text();
        if (num1 < 1000) {
            num1++;
            clearInterval(inc1)
        }
        $("#countOne").text(num1)


    }
    function inc2() {
        let num2 = $("#countTwo").text();
        if (num2 < 1000) {
            num2++;
            clearInterval(inc2)
        }
        $("#countTwo").text(num2)


    }
    function inc3() {
        let num3 = $("#countThree").text();
        if (num3 < 1000) {
            num3++;
            clearInterval(inc3)
        }
        $("#countThree").text(num3)


    }

    function inc4() {
        let num4 = $("#countFour").text();
        if (num4 < 1000) {
            num4++;
            clearInterval(inc4)
        }
        $("#countFour").text(num4)


    }
    setInterval(inc3, 20);
    setInterval(inc2, 20);
    setInterval(inc1, 20);
    setInterval(inc4, 20);




})