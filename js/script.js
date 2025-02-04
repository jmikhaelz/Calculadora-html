let x='0',y='0';
let p=0;
function resultado(){
    document.getElementById('resul').style='display:grid;';
    document.getElementById('op').style='font-size:1rem;';
    document.getElementById('op').innerHTML='<i>'+x+' =</i>';
    y=eval(y);
    document.getElementById('resul').textContent=y;
}
function op(){
    document.getElementById('op').style='font-size:2rem;';
    document.getElementById('op').textContent=x;
}
function cero(){
    if(x!='0'){
        x=x+'0';
        y=y+'0';
    }
    else{
        x='0';
        y='0';
    }
    op();
}
function uno(){
    if(x!='0'){
        x=x+'1';
        y=y+'1';
    }
    else{
        x='1';
        y='1';
    }
    op();
}
function dos(){
    if(x!='0'){
        x=x+'2';
        y=y+'2';
    }
    else{
        x='2';
        y='2';
    }
    op();
}
function tres(){
    if(x!='0'){
        x=x+'3';
        y=y+'3';
    }
    else{
        x='3';
        y='3';
    }
    op();
}
function cuatro(){
    if(x!='0'){
        x=x+'4';
        y=y+'4';
    }
    else{
        x='4';
        y='4';
    }
    op();
}
function cinco(){
    if(x!='0'){
        x=x+'5';
        y=y+'5';
    }
    else{
        x='5';
        y='5';
    }
    op();
}
function seis(){
    if(x!='0'){
        x=x+'6';
        y=y+'6';
    }
    else{
        x='6';
        y='6';
    }
    op();
}
function siete(){
    if(x!='0'){
        x=x+'7';
        y=y+'7';
    }
    else{
        x='7';
        y='7';
    }
    op();
}
function ocho(){
    if(x!='0'){
        x=x+'8';
        y=y+'8';
    }
    else{
        x='8';
        y='8';
    }
    op();
}
function nueve(){
    if(x!='0'){
        x=x+'9';
        y=y+'9';
    }
    else{
        x='9';
        y='9';
    }
    op();
}
function corta(){
    let z = x.length;
    z=z-1;
    x = x.substring(0,z);
    if(y>0||y<0){
        document.getElementById('resul').style='display:none;';
        y=x;
    }
    else{
        y = y.substring(0,z);
    }
    if(z==0){
        x='0';
        y='0';
    }
    op();
}
function mult(){
    if(x!='0'){
        x=x+'x';
        y=y+'*';
    }
    p=0;
    op();
}
function div(){
    if(x!='0'){
        x=x+'÷';
        y=y+'/';
    }
    p=0;
    op();
}
function suma(){
    if(x!='0'){
        x=x+'+';
        y=y+'+';
    }
    p=0;
    op();
}
function resta(){
    if(x!='0'){
        x=x+'-';
        y=y+'-';
    }
    else{
        x='-';
        y='-';
    }
    p=0;
    op();
}
function ex(){
    if(x!='0'){
        x=x+'^';
        y=y+'**';
    }
    p=0;
    op();
}
function punto(){
    if(p==0){
        x=x+'.';
        y=y+'.';
        p=1;
    }
    op();
}
function cls(){
    x='0';
    y='0';
    p=0;
    op();
    document.getElementById('resul').style = "display: none;";
}