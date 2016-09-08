// запрет на ввод букв, только цифры
$("#test").keypress(function( b ){
    var C = /[0-9\x25\x24\x23]/;
    var a = b.which;
    var c = String.fromCharCode(a);
    return !!(a==0||a==8||a==9||a==13||c.match(C));
});