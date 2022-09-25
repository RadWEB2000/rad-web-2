export const getMonthName = (month:number):string|null => {
    if(month + 1 == 1){
        return 'Styczeń'
    }else if(month + 1 == 2){
        return 'Luty'
    }else if(month + 1 == 3){
        return 'Marzec'
    }else if(month + 1 == 4){
        return 'Kwiecień'
    }else if(month + 1 == 5){
        return 'Maj'
    }else if(month + 1 == 6){
        return 'Czerwiec'
    }else if(month + 1 == 7){
        return 'Lipiec'
    }else if(month + 1 == 8){
        return 'Sierpień'
    }else if(month + 1 == 9){
        return 'Wrzesień'
    }else if(month + 1 == 10){
        return 'Październik'
    }else if(month + 1 == 11){
        return 'Listopad'
    }else if(month + 1 == 12){
        return 'Grudzień'
    }else {
        return null;
    }
}