var date,h,m,s,animate;

function init() {
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    console.log('working')
};

function clock() {
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            hr++;
            if(hr==24){
                hr=0;
            }
        }
    }
    $('sec','s' );
    $('min', 'm');
    $('hr', 'h');
}


animate = setTimeout(clock, 1000);

function $(id,val){
    if(val < 10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;

}

window.onload=init;