$(document).ready(function() {

    $(".startDate").change(() => {
        let startDate = $(".startDate").val();
        $(".endDate").attr("min", startDate);
    })

    $("input[type='date']").on("change", function() {
        this.setAttribute(
            "data-date",
            moment(this.value, "YYYY-MM-DD")
            .format(this.getAttribute("data-date-format"))
        )
    })


    $(".startDate , .endDate").on("change", function() {
        this.setAttribute(
            "data-date",
            moment(this.value, "YYYY-MM-DD")
            .format(this.getAttribute("data-date-format"))
        )
    })
    $("tr td input[type='checkbox']").click(function() {
        let index_checkbox = $(this).index("tr td input[type='checkbox']");

        if ($(this).prop("checked") == true) {
            $("tbody tr").eq(index_checkbox).addClass("active-tr");
        } else if ($(this).prop("checked") == false) {
            $("tbody tr").eq(index_checkbox).removeClass("active-tr");
        }
    });
    $(".loading").fadeOut(1500);
    let aside = $("aside");
    let main = $("main");
    let sidePos = $("aside").css("right");
    $("#big-bar").click(function() {
        if (sidePos == "0px") {
            $("main").animate({ width: "100%" }, 700);
            $("aside").animate({
                right: "-25%"

            }, 700);
            sidePos = '-100px';
        } else {
            $("main").animate({ width: "78%" }, 700);
            $("aside").animate({
                right: "0%"
            }, 700);
            sidePos = '0px';

        }

    });
    $("#small-bar").click(function() {
        if (sidePos == "0px") {
            $("aside").animate({
                right: "-80%"

            }, 700);
            sidePos = '-100px';
        } else {
            $("aside").animate({
                right: "0%"
            }, 700);
            sidePos = '0px';

        }

    });

    $("#close").click(function() {
        $("aside").animate({
            right: "-80%"
        }, 700);
        sidePos = '-100px';


    });

    $(".toggle-password").click(function() {
        let typeIcon = $(this).attr('id');
        let typeInput = $(this).attr('attr');
        let input = $('#' + typeInput).attr('type');
        let sibling = $(this).next().attr('id');
        if (sibling == undefined) {
            sibling = $(this).prev().attr('id');
        }


        if (input == 'password') {
            $('#' + typeInput).attr('type', 'text');
            $('#' + typeIcon).hide();
            $('#' + sibling).show();
            input = 'password';
        } else if (input == 'text') {

            $('#' + typeInput).attr('type', 'password');
            $('#' + typeIcon).hide();
            $('#' + sibling).show();
            input = 'text';

        }
    });
});