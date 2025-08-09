import {a, p, render} from "./domBuilder";

let a1 = a("test link", {href: "/pow.html"});
render('app', p("POW!", a1, { onclick: () => console.log("pow.html")}));