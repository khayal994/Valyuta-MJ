function myFunction() {
    let yeniSetr = "\r\n"
    let secim = prompt("1- USD (Dollar) :" + yeniSetr
        + "2- EUR (Avro) :" + yeniSetr +
        "3- TRY (Lira) :" + yeniSetr +
        "Bir Valyuta Deyeri Secin.")
    switch (secim) {
        case "1":
            let azn = prompt("Girmek istediyiniz AZN deyerini yazin :")
            let cavab = (azn / 1.7)
            alert(azn + "azn = " + cavab + "$") 
            break;
        case "2":
            let azn1 = prompt("Girmek istediyiniz AZN deyerini yazin :")
            let cavab1 = (azn1 / 1.79)
            alert(azn1 + "azn = " + cavab1 + "€") 
            break;
            case "3":
                let azn2 = prompt("Girmek istediyiniz AZN deyerini yazin :")
                let cavab2 = (azn2 / 0.062)
                alert(azn2 + "azn = " + cavab2 + "₺") 
                break;
    }
}