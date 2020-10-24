$(document).ready(function () {
    /*valid inputs */

    function validName(name) {
        let nameRegex = /^[A-zا-ي]{2,}$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }
    /*valid inputs */

    function validEmail(email) {
        let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    /*valid inputs */

    function validPass(pass) {
        let passRegex = /^[A-z0-9]{8,}$/;
        if (passRegex.test(pass)) {
            return true;
        } else {
            return false;
        }
    }
    /*valid inputs */

    $(".passsSignInp").keyup(function () {
        let passSignIn = $(".passsSignInp").val();
        if (validPass(passSignIn) == true) {
            $("#errorPassSignIn").css("display", "none")
            $("#sendSignIn").removeAttr("disabled")

        }
        else {
            $("#errorPassSignIn").css("display", "block")
            $("#sendSignIn").attr("disabled", "true")

        }
    })

    $(".SurePassSignIn").keyup(function () {
        let surePassSignIn = $(".SurePassSignIn").val();
        if (validPass(surePassSignIn) == true) {
            $("#errorSurePassSignIn").css("display", "none")
            $("#sendSignIn").removeAttr("disabled")

        }
        else {
            $("#errorSurePassSignIn").css("display", "block")
            $("#sendSignIn").attr("disabled", "true")

        }
    })
    /*valid inputs */

    $("#inpNameSignIn").keyup(function () {
        let nameSignIn = $("#inpNameSignIn").val();
        if (validName(nameSignIn) == true) {
            $("#erorrNameSignIn").css("display", "none")
            $("#sendSignIn").removeAttr("disabled")

        }
        else {
            $("#erorrNameSignIn").css("display", "block")
            $("#sendSignIn").attr("disabled", "true")

        }
    })
    /*valid inputs */

    $("#inpEmailSignIn").keyup(function () {
        let emailSignIn = $("#inpEmailSignIn").val();
        if (validEmail(emailSignIn) == true) {
            $("#erorrEmailSignIn").css("display", "none")
            $("#sendSignIn").removeAttr("disabled")

        }
        else {
            $("#erorrEmailSignIn").css("display", "block")
            $("#sendSignIn").attr("disabled", "true")
        }
    })

    /*valid inputs */


    $("#sendSignIn").click(function () {
        resetInput();
    })
    /*rest input */

    function resetInput() {
        let inputs = document.getElementsByClassName("inp");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }

    /*toggle password to text and another*/


    $(".toggle-password ").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var toggle = $(this).attr("toggle");
        let stateInput = $("." + toggle).attr("type");
        if (stateInput == "password") {
            $("." + toggle).attr("type", "text");
        } else {
            $("." + toggle).attr("type", "password");
        }
    });
})