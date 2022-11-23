let kritilgan = new Date(
  prompt(
    "Tugilgan sanangizni kritib necha sekund, minut, soat va yil yashaganingizni bilib oling! Misol uchun (mm-dd-yyyy)"
  )
);
let now = Date.now();
let milisekund = Math.round((now - kritilgan) / 1000);
let sekund = Math.round((now - kritilgan) / 1000 / 60);
let minut = Math.round((now - kritilgan) / 1000 / 60 / 60);
let kun = Math.round((now - kritilgan) / 1000 / 60 / 60 / 24);
let yil = Math.round((now - kritilgan) / 1000 / 60 / 60 / 24 / 365.25);

alert(
  `Siz ${milisekund} milisekund yashagansiz` +
    "\n" +
    `Siz ${sekund} sekund yashagansiz` +
    "\n" +
    `Siz ${minut} minut yashagansiz` +
    "\n" +
    `Siz ${kun} kun yashagansiz` +
    "\n" +
    `Siz ${yil} yil yashagansiz` +
    "\n" +
    "Nahotki, shuncha vaqt ichida bir ishni qoyil qilmagansz"
);
