$(function () {
    $('.summary').hide();
    $('deliveryDets').hide();})
    //choices made
    $("#finish").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);})

        let order = (flavour, size, crust, topping, number, total) => {
            return {flavour, size, crust, topping, number, total};
        };
// getting price of flavour chosen
        let price, totalPrice;
        switch (flavour) {
            case flavour = "veggetarian":
                switch (size) {
                    case size = "Small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crunchy") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "soft") {
                            totalPrice = (price * number) + 150;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                        case size = "Medium":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crunchy") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "soft") {
                            totalPrice = (price * number) + 150;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                        case size = "Large":
                            price = 1000;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "crunchy") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "soft") {
                                totalPrice = (price * number) + 150;
                            } else {
                                totalPrice = (price * number) + 150;
                            }
                            break;