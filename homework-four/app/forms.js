$(document).ready(function () {
    $("#login").click(function(e) {
        e.preventDefault();
        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();
        if (email != '' && password != '') {
            let userLoggedIn = {
                email: email,
                password: password
            }
            console.log(userLoggedIn);
        }
        else {
            alert("Please enter your email and password.")
        }
        // console.log("inputs " + firstName + ' ' + lastName);
    })
    $("#register").click(function(e) {
        e.preventDefault();
        let firstName = $("#registerfName").val();
        let lastName = $("#registerlName").val();
        let email = $("#registerEmail").val();
        let password = $("#registerPassword").val();
        if (firstName != '' || lastName != '' || email != '' || password != '') {
            let userLoggedIn = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
            console.log(userLoggedIn);
        }
        else {
            alert("Please fill out all the form boxes.")
        }
        // console.log("inputs " + firstName + ' ' + lastName);
    })
    $("#submitList").click(function(e) {
        e.preventDefault();
        let item1 = $("#item1").val();
        let item2 = $("#item2").val();
        let item3 = $("#item3").val();
        let item4 = $("#item4").val();
        let item5 = $("#item5").val();
        let item6 = $("#item6").val();
        let item7 = $("#item7").val();
        let item8 = $("#item8").val();
        let item9 = $("#item9").val();
        let item10 = $("#item10").val();
    
        let shoppingList = {
            item1: item1,
            item2: item2,
            item3: item3,
            item4: item4,
            item5: item5,
            item6: item6,
            item7: item7,
            item8: item8,
            item9: item9,
            item10: item10
        }
        console.log(shoppingList);
    });
});