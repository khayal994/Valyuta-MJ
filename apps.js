let popup = document.getElementById("popup")
function openPopup() {
    popup.classList.add("open-popup")
} 
function closePopup() { 
    popup.classList.remove("open-popup") 
}
function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var currency = document.getElementById("currency").value;
    var result = 0;

    if(currency === "usd") {
        result = amount / 1.7; 
    } else if(currency === "eur") {
        result = amount / 1.80;
    } else if(currency === "gbp") {
        result = amount / 0.061; 
    }
    switch (currency) {
        case "usd":
            document.getElementById("result").innerHTML = (amount + "azn = " + result + "$")
            break;
        case "eur":
            document.getElementById("result").innerHTML = (amount + "azn = " + result + "€")
            break;
            case "gbp":
                document.getElementById("result").innerHTML = (amount + "azn = " + result + "₺")
                break;
    }
}