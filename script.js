/** 
// untuk mengecek jQuery aktif tidaknya
$(document).ready(function () {
    $(`h1`).css(`color`, `blue`);
});

*/

$(`h1`).addClass(`big-title margin-50`) // .addClass jika ingin menambahkan class sebanyak mungkin

$ (`h1`).text (`Hi, Joshua!`) // .text untuk mengubah text 

$ (`button`). html (`<em> Let's connect! </em>`) // .html  untuk mengubah sifat html

$ (`a`). attr (`href`, `https://www.linkedin.com/`) // .attr yaitu untuk mengubah asal menjadi tujuan

$ (`button`). click (function() {
    $ (`h1`).css(`color`, `green`); // saat click button, akan muncul warna hijau di h1
});

$ (`input`). keypress (function(event) {
    $ (`h1`).text(event.key); // saat pencet input dan mengetik (keypress), h1 akan melakukan perintah yaitu mengganti text 
})

$ (`h1`). on (`click` , function () {
    $ (`h1`). css (`color` , `brown`); // saat h1 di klik, maka h1 akan berganti warna menjadi brown
})





