export const getRelease = (time:number|string) => {
    const date = new Date(time);
    const {day,month,year} = {
        day:date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        month:date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        year:date.getFullYear()
    }
    const release = {
        day,
        month,
        year
    }
    return release;
}