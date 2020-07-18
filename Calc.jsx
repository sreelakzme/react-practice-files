function add(n, m) {
    let s = n + m;
    return s;
}
function sub(n,m){
    let s = n - m;
    return s;
}
function div(n,m){
    let s = n / m;
    s = s.toFixed(2);
    return s;
}
function mult(n,m){
    let s = n * m;
    return s;
}

export default add;
export { sub, div, mult};