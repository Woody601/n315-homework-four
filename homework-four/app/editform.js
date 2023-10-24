$("#edit").click(function(e) {
    e.preventDefault();

    let shoppingList = {
        item1: "Eggs",
        item2: "Milk",
        item3: "Sausage",
        item4: "Apples",
        item5: "Broccoli",
        item6: "Butter",
        item7: "Ham",
        item8: "Ketchup",
        item9: "Cereal",
        item10: "Chips"
    }
    
    console.log(shoppingList);
    $("#item1").val(shoppingList.item1);
    $("#item2").val(shoppingList.item2);
    $("#item3").val(shoppingList.item3);
    $("#item4").val(shoppingList.item4);
    $("#item5").val(shoppingList.item5);
    $("#item6").val(shoppingList.item6);
    $("#item7").val(shoppingList.item7);
    $("#item8").val(shoppingList.item8);
    $("#item9").val(shoppingList.item9);
    $("#item10").val(shoppingList.item10);
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