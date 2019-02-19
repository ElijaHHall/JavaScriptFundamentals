var date,hour,min,sec,animate;

function init() {
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
};

function clock() {
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hour++;
            if(hour==24){
                hour=0;
            }
        }
    }
}