import{a as J}from"./chunk-5X23HYSV.js";import{a as R}from"./chunk-XJREJFDG.js";import"./chunk-CWGJGK5M.js";import{$ as O,E as I,F as _,G as l,H as P,K as v,L as u,N as r,O as s,P as C,Q as b,R as g,S as d,U as a,V as y,e as x,ea as E,fa as V,ga as F,h as w,ia as T,na as j,o as k,s as M,u as S,va as D,x as p,y as m}from"./chunk-E7ILVK6W.js";var U=(()=>{let n=class n{constructor(){this.rand=0,this.http=M(T)}getPeliculas(){return this.http.get("https://api-movies.fly.dev/api/v1/movies").pipe(w(t=>t.sort((e,i)=>e.title<i.title?-1:e.title>i.title?1:0)))}getPelicula(){return new x(t=>{this.getPeliculas().subscribe(e=>{let i;do this.rand=Math.floor(Math.random()*e.length),i=e[this.rand];while(!i);t.next(i),t.complete()})})}getOpcionesPeliculas(){return new x(t=>{this.getPeliculas().subscribe(e=>{let i=[],f=new Set;for(;i.length<4;){let h=Math.floor(Math.random()*e.length);f.has(h)||(f.add(h),i.push(e[h]))}t.next(i),t.complete()})})}getPreguntaConOpciones(){return new x(t=>{this.getOpcionesPeliculas().subscribe(e=>{let i=Math.floor(Math.random()*e.length),f=e[i];t.next({imagen:f.backdrops[3],opciones:e.map(h=>h.title),correcta:f.title}),t.complete()})})}};n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();function N(o,n){if(o&1){let c=b();r(0,"div")(1,"button",12),g("click",function(){let e=p(c).$implicit,i=d(2);return m(i.verificarRespuesta(e))}),a(2),s()()}if(o&2){let c=n.$implicit;l(2),y(c)}}function X(o,n){if(o&1&&(r(0,"div"),C(1,"img",10),v(2,N,3,1,"div",11),s()),o&2){let c=d();l(),u("src",c.imagen,I),l(),u("ngForOf",c.opciones)}}function G(o,n){if(o&1){let c=b();r(0,"div",13)(1,"div",7)(2,"h1"),a(3,"Ganaste! \u{1F917}"),s(),r(4,"div",14)(5,"button",15),g("click",function(){p(c);let e=d();return m(e.goTo("home"))}),a(6,"Ir a home"),s(),r(7,"span"),a(8,"|"),s(),r(9,"button",15),g("click",function(){p(c);let e=d();return m(e.goTo())}),a(10,"Volver a jugar"),s()()()()}}function Q(o,n){if(o&1){let c=b();r(0,"div",16)(1,"div",7)(2,"h1"),a(3,"Perdiste \u{1F494}"),s(),r(4,"div",14)(5,"button",15),g("click",function(){p(c);let e=d();return m(e.goTo("home"))}),a(6,"Ir a home"),s(),r(7,"span"),a(8,"|"),s(),r(9,"button",15),g("click",function(){p(c);let e=d();return m(e.reiniciar())}),a(10,"Volver a jugar"),s()()()()}}var et=(()=>{let n=class n{constructor(t,e){this.peliculasService=t,this.router=e,this.opciones=[],this.imagen="",this.correcta="",this.intentosFallidos="\u{1F497} \u{1F497} \u{1F497} ",this.intentos=0,this.perdio=!1,this.gano=!1,this.contador=0}reiniciar(){this.perdio=!1,this.gano=!1,this.intentos=0,this.intentosFallidos="\u{1F497} \u{1F497} \u{1F497} ",this.nuevaPregunta()}ngOnInit(){this.nuevaPregunta()}nuevaPregunta(){this.peliculasService.getPreguntaConOpciones().subscribe(t=>{this.pregunta=t,this.opciones=t.opciones,this.imagen=t.imagen,this.correcta=t.correcta})}verificarRespuesta(t){t!=this.correcta&&this.intentos++,this.actualizarVidas(),this.nuevaPregunta()}actualizarVidas(){this.intentosFallidos="",this.intentos==3?this.perdio=!0:this.contador==10&&(this.gano=!0),this.contador++;for(let t=0;t<3-this.intentos;t++)this.intentosFallidos+="\u{1F497} "}goTo(t=""){t==="home"&&this.router.navigate(["/home"])}};n.\u0275fac=function(e){return new(e||n)(P(U),P(j))},n.\u0275cmp=S({type:n,selectors:[["app-preguntados"]],standalone:!0,features:[O],decls:19,vars:4,consts:[["rel","stylesheet","href",_`https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css`,"integrity","sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm","crossorigin","anonymous"],["rel","preconnect","href",_`https://fonts.googleapis.com`],["rel","preconnect","href",_`https://fonts.gstatic.com`,"crossorigin",""],["href",_`https://fonts.googleapis.com/css2?family=Bitter:wght@100&family=Jersey+10+Charted&family=Jersey+15&family=Jersey+20+Charted&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap`,"rel","stylesheet"],["id","background"],[4,"ngIf"],["id","intentos",1,"row"],[1,"col","text-center"],["class","row","id","gano",4,"ngIf"],["class","row","id","perdio",4,"ngIf"],["alt","Imagen de la pel\xEDcula",1,"img-pelicula",3,"src"],[4,"ngFor","ngForOf"],[1,"btn-opcion",3,"click"],["id","gano",1,"row"],[1,"container"],["type","submit",3,"click"],["id","perdio",1,"row"]],template:function(e,i){e&1&&(r(0,"head"),C(1,"link",0)(2,"link",1)(3,"link",2)(4,"link",3),s(),r(5,"body",4)(6,"h1"),a(7,"Preguntados"),s(),v(8,X,3,2,"div",5),r(9,"div",6)(10,"div",7)(11,"h3"),a(12,"Intentos: "),r(13,"small"),a(14),s()()()(),v(15,G,11,0,"div",8)(16,Q,11,0,"div",9),C(17,"app-logout")(18,"app-chat"),s()),e&2&&(l(8),u("ngIf",i.pregunta&&!i.gano&&!i.perdio),l(6),y(i.intentosFallidos),l(),u("ngIf",i.gano),l(),u("ngIf",i.perdio))},dependencies:[F,E,V,D,R,J],styles:['#background[_ngcontent-%COMP%]{width:100%;height:100vh;background-size:cover;background-image:url("./media/login-desktop2-RMQDQUJU.jpg");background-repeat:no-repeat}body[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{padding-top:15px;color:#fff;font-family:"Jersey 10 Charted",sans-serif;font-size:50px}.img-pelicula[_ngcontent-%COMP%]{width:40%;height:40%;border:6px solid #d067c9}.btn-opcion[_ngcontent-%COMP%]{border-radius:5px;color:#fff;font-size:30px;background:#f766d0;padding:10px 20px;margin:5px;text-decoration:none;font-family:Courier New,Courier,monospace}.btn-opcion[_ngcontent-%COMP%]:hover{cursor:pointer;background:#f20cc4}#gano[_ngcontent-%COMP%], #perdio[_ngcontent-%COMP%]{background-color:#ee1fbe80;color:#fff;width:300px;height:200px;text-align:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center}#intentos[_ngcontent-%COMP%]{font-family:sans-serif;position:fixed;bottom:0;left:0;width:100%;text-align:center;display:flex;justify-content:center;align-items:center;background-color:#ee1fbe80}button[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{background:none;color:#fff;border:none;padding:5px;font-weight:700}button[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}']});let o=n;return o})();export{et as PreguntadosComponent};