const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
]

export default function getDate(time:string,type:"long"|"short"|"number"){

    const day = new Date(time).getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate() ;
    
    function month() {
        const monthNumber = new Date(time).getMonth();
        if(type === "long"){
            return months[monthNumber]
        }else if(type === "short"){
            return months[monthNumber].slice(0,2)
        }else if(type === "number"){
            return monthNumber + 1 < 10 ? `0${monthNumber + 1}` : monthNumber + 1
        }
    }

    const year = new Date().getFullYear();


    return {
        day,
        month,
        year
    }

}