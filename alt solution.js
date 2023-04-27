let lista = [
    {
        "code": [true, false, false, false],
        "ansvear": array4[Math.floor(Math.random() * array4.length)]
    }
]
odp = [checkboxes[0].checked, checkboxes[1].checked, checkboxes[2].checked, checkboxes[3].checked]
for(code of lista){
    for (let i; i<4; i++){
        if (odp[i] != code.code[i]){
            break;
        }
        result += code.ansvear
    }
}