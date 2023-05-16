/** 
// untuk mengecek jQuery aktif tidaknya
$(document).ready(function () {
    $(`h1`).css(`color`, `blue`);
});

*/

$(`h1`).addClass(`big-title margin-50`) // .addClass jika ingin menambahkan class sebanyak mungkin

$ (`h1`).text (`Hi, Joshua!`) // pada h1, text html berupa hello world akan berubah menjadi Hi, Joshua!

$ (`button`). html (`<em> Let's connect! </em>`) // pada tombol button, sifat html akan berubah menjadi italic

$ (`a`). attr (`href`, `https://www.linkedin.com/`) // pada elemen a, attr mengubah href yaitu google menjadi linkedin.

$ (`button`). click (function() {
    $ (`h1`).css(`color`, `green`); // saat click button, akan muncul warna hijau di h1
});

$ (`input`). keypress (function(event) {
    $ (`h1`).text(event.key); // saat pencet input dan mengetik (keypress), h1 akan melakukan perintah yaitu mengganti text 
})

$ (`h1`). on (`click` , function () {
    $ (`h1`). css (`color` , `brown`); // saat h1 di klik, maka h1 akan berganti warna menjadi brown
});

/** 
$ (`h1`). before (`<button>New button</button>`) // new button sehelum h1

$ (`h1`). after (`<button>New button</button>`) // new button setelah h1

$ (`h1`). prepend (`<button>New button</button>`) //berada dalam konten h1 sebelum konten h1

$ (`h1`). append (`<button>New button</button>`) //berada dalam konten h1 setelah konten h1
*/


$ (`button`). on (`click`, function() {
    // $(`h1`).slideToggle (); // button yang diklik, h1 akan mengalami fadeOut (hilang perlahan), fadeIn (muncul perlahan), slideToggle (dapat muncul dan menghilang dengan smooth), slideUp (akan melakukan slide ke atas), slideDown (melakukan slide ke bawah), slideToggle(melakukan slide dengan otomatis), toggle (langsung menghilang dan muncul tiba-tiba), hide (hilang)

    $(`h1`).animate ({opacity : 0.5}) // h1 akan teranimasi dengan opacity 50%
   
});



