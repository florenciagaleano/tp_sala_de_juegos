import{a as O}from"./chunk-5X23HYSV.js";import{a as F}from"./chunk-XJREJFDG.js";import"./chunk-CWGJGK5M.js";import{$ as M,E as b,F as u,G as f,H as C,K as w,L as x,N as o,O as r,P as p,Q as y,R as h,S as l,T as k,U as a,W as S,c,fa as I,ga as P,na as V,o as _,u as v,va as E,x as d,y as m}from"./chunk-E7ILVK6W.js";var j=(()=>{let i=class i{constructor(){}getCard(){return fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1").then(t=>t.json()).then(t=>t.cards[0])}cardIsHigher(t,e){return c(this,null,function*(){return e.value>t.value})}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function J(n,i){if(n&1){let s=y();o(0,"div"),p(1,"img",9),o(2,"div")(3,"div"),a(4,"La carta que sigue es..."),r(),o(5,"button",10),h("click",function(){d(s);let e=l();return m(e.seleccionarMayor())}),a(6,"Mayor"),r(),o(7,"button",10),h("click",function(){d(s);let e=l();return m(e.seleccionarMenor())}),a(8,"Menor"),r()(),o(9,"h2",11),a(10),r()()}if(n&2){let s=l();f(),k("src",s.currentCard.image,b),f(9),S("Vidas: ",s.intentosFallidos,"")}}function N(n,i){if(n&1){let s=y();o(0,"div",12)(1,"div",13)(2,"h3"),a(3,"Perdiste \u{1F494}"),r(),o(4,"div",14)(5,"button",15),h("click",function(){d(s);let e=l();return m(e.goTo("home"))}),a(6,"Ir a home"),r(),o(7,"span"),a(8,"|"),r(),o(9,"button",15),h("click",function(){d(s);let e=l();return m(e.reiniciar())}),a(10,"Volver a jugar"),r()()()()}}var W=(()=>{let i=class i{constructor(t,e){this.cardService=t,this.router=e,this.intentos=0,this.intentosFallidos="\u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} ",this.mayorSeleccionado=!1,this.perdio=!1}ngOnInit(){this.getNewCard()}reiniciar(){this.intentos=0,this.intentosFallidos="\u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} \u{1F497} ",this.mayorSeleccionado=!1,this.perdio=!1,this.getNewCard()}getNewCard(){return c(this,null,function*(){this.currentCard=yield this.cardService.getCard(),this.nextCard=yield this.cardService.getCard()})}seleccionarMayor(){return c(this,null,function*(){this.mayorSeleccionado=!0,yield this.evaluateGuess()})}seleccionarMenor(){return c(this,null,function*(){this.mayorSeleccionado=!1,yield this.evaluateGuess()})}evaluateGuess(){return c(this,null,function*(){let t=yield this.cardService.cardIsHigher(this.currentCard,this.nextCard);t&&this.mayorSeleccionado||!t&&!this.mayorSeleccionado||this.intentos++,this.currentCard=this.nextCard,this.nextCard=yield this.cardService.getCard(),this.actualizarVidas()})}actualizarVidas(){this.intentosFallidos="";for(let t=0;t<9-this.intentos;t++)this.intentosFallidos+="\u{1F497} "}goTo(t=""){t==="home"&&this.router.navigate(["/home"])}};i.\u0275fac=function(e){return new(e||i)(C(j),C(V))},i.\u0275cmp=v({type:i,selectors:[["app-cartas"]],standalone:!0,features:[M],decls:13,vars:2,consts:[["charset","utf-8"],["rel","stylesheet","href",u`https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css`,"integrity","sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm","crossorigin","anonymous"],["rel","preconnect","href",u`https://fonts.googleapis.com`],["rel","preconnect","href",u`https://fonts.gstatic.com`,"crossorigin",""],["href",u`https://fonts.googleapis.com/css2?family=Bitter:wght@100&family=Jersey+10+Charted&family=Jersey+15&family=Jersey+20+Charted&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap`,"rel","stylesheet"],["id","background"],["id","titulo"],[4,"ngIf"],["class","row","id","perdio",4,"ngIf"],["alt","",3,"src"],[1,"btn",3,"click"],["id","intentos"],["id","perdio",1,"row"],[1,"col","text-center"],[1,"container"],["type","submit",1,"button-resultados",3,"click"]],template:function(e,g){e&1&&(p(0,"meta",0),o(1,"head"),p(2,"link",1)(3,"link",2)(4,"link",3)(5,"link",4),r(),o(6,"body",5)(7,"h1",6),a(8," Mayor o Menor "),r(),w(9,J,11,2,"div",7)(10,N,11,0,"div",8),p(11,"app-logout")(12,"app-chat"),r()),e&2&&(f(9),x("ngIf",g.currentCard&&g.intentos<9),f(),x("ngIf",g.intentos==9))},dependencies:[E,P,I,F,O],styles:['#background[_ngcontent-%COMP%]{width:100%;height:100vh;background-size:cover;background-image:url("./media/login-desktop2-RMQDQUJU.jpg");background-repeat:no-repeat}body[_ngcontent-%COMP%]{text-align:center;font-family:Courier New,Courier,monospace;font-size:25px;color:#34005f;font-weight:700}#titulo[_ngcontent-%COMP%]{padding-top:15px;color:#fff;font-family:"Jersey 10 Charted",sans-serif;font-size:50px}#perdio[_ngcontent-%COMP%]{background-color:#ee1fbe80;color:#fff;width:300px;height:200px;text-align:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center}#intentos[_ngcontent-%COMP%]{color:#fff;font-family:sans-serif;position:fixed;bottom:0;left:0;width:100%;text-align:center;display:flex;justify-content:center;align-items:center;background-color:#ee1fbe80}.btn[_ngcontent-%COMP%]{border-radius:5px;color:#fff;font-size:30px;background:#f766d0;padding:10px 20px;margin:5px;text-decoration:none;font-family:Courier New,Courier,monospace}.btn[_ngcontent-%COMP%]:hover{cursor:pointer;background:#f20cc4}.button-resultados[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{background:none;color:#fff;border:none;padding:5px;font-weight:700}.button-resultados[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}']});let n=i;return n})();export{W as CartasComponent};
