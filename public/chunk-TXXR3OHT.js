import{a as J}from"./chunk-5X23HYSV.js";import{a as R}from"./chunk-XJREJFDG.js";import"./chunk-CWGJGK5M.js";import{$ as S,E as I,F as _,G as l,H as P,K as x,L as d,N as r,O as a,P as v,Q as b,R as g,S as p,U as c,V as y,e as C,ea as E,fa as V,ga as T,h as w,ia as F,na as j,o as k,s as M,u as O,va as D,x as m,y as u}from"./chunk-E7ILVK6W.js";var U=(()=>{let i=class i{constructor(){this.rand=0,this.http=M(F)}getPeliculas(){return this.http.get("https://api-movies.fly.dev/api/v1/movies").pipe(w(e=>e.sort((t,n)=>t.title<n.title?-1:t.title>n.title?1:0)))}getPelicula(){return new C(e=>{this.getPeliculas().subscribe(t=>{let n;do this.rand=Math.floor(Math.random()*t.length),n=t[this.rand];while(!n);e.next(n),e.complete()})})}getOpcionesPeliculas(){return new C(e=>{this.getPeliculas().subscribe(t=>{let n=[],f=new Set;for(;n.length<4;){let h=Math.floor(Math.random()*t.length);f.has(h)||(f.add(h),n.push(t[h]))}e.next(n),e.complete()})})}getPreguntaConOpciones(){return new C(e=>{this.getOpcionesPeliculas().subscribe(t=>{let n=Math.floor(Math.random()*t.length),f=t[n];e.next({imagen:f.backdrops[3],opciones:t.map(h=>h.title),correcta:f.title}),e.complete()})})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function N(o,i){o&1&&v(0,"div",13)}function X(o,i){if(o&1){let s=b();r(0,"div")(1,"button",14),g("click",function(){let t=m(s).$implicit,n=p(2);return u(n.verificarRespuesta(t))}),c(2),a()()}if(o&2){let s=i.$implicit;l(2),y(s)}}function G(o,i){if(o&1&&(r(0,"div"),x(1,N,1,0,"div",10),v(2,"img",11),x(3,X,3,1,"div",12),a()),o&2){let s=p();l(),d("ngIf",s.cargando),l(),d("src",s.imagen,I),l(),d("ngForOf",s.opciones)}}function Q(o,i){if(o&1){let s=b();r(0,"div",15)(1,"div",7)(2,"h1"),c(3,"Ganaste! \u{1F917}"),a(),r(4,"div",16)(5,"button",17),g("click",function(){m(s);let t=p();return u(t.goTo("home"))}),c(6,"Ir a home"),a(),r(7,"span"),c(8,"|"),a(),r(9,"button",17),g("click",function(){m(s);let t=p();return u(t.goTo())}),c(10,"Volver a jugar"),a()()()()}}function W(o,i){if(o&1){let s=b();r(0,"div",18)(1,"div",7)(2,"h1"),c(3,"Perdiste \u{1F494}"),a(),r(4,"div",16)(5,"button",17),g("click",function(){m(s);let t=p();return u(t.goTo("home"))}),c(6,"Ir a home"),a(),r(7,"span"),c(8,"|"),a(),r(9,"button",17),g("click",function(){m(s);let t=p();return u(t.reiniciar())}),c(10,"Volver a jugar"),a()()()()}}var ne=(()=>{let i=class i{constructor(e,t){this.peliculasService=e,this.router=t,this.opciones=[],this.imagen="",this.correcta="",this.intentosFallidos="\u{1F497} \u{1F497} \u{1F497} ",this.intentos=0,this.perdio=!1,this.gano=!1,this.contador=0,this.cargando=!1}reiniciar(){this.perdio=!1,this.gano=!1,this.intentos=0,this.intentosFallidos="\u{1F497} \u{1F497} \u{1F497} ",this.nuevaPregunta()}ngOnInit(){this.nuevaPregunta()}nuevaPregunta(){this.cargando=!0,this.peliculasService.getPreguntaConOpciones().subscribe(e=>{this.pregunta=e,this.opciones=e.opciones,this.imagen=e.imagen,this.correcta=e.correcta,this.cargando=!1})}verificarRespuesta(e){e!=this.correcta&&this.intentos++,this.actualizarVidas(),this.nuevaPregunta()}actualizarVidas(){this.intentosFallidos="",this.intentos==3?this.perdio=!0:this.contador==10&&(this.gano=!0),this.contador++;for(let e=0;e<3-this.intentos;e++)this.intentosFallidos+="\u{1F497} "}goTo(e=""){e==="home"&&this.router.navigate(["/home"])}};i.\u0275fac=function(t){return new(t||i)(P(U),P(j))},i.\u0275cmp=O({type:i,selectors:[["app-preguntados"]],standalone:!0,features:[S],decls:19,vars:4,consts:[["rel","stylesheet","href",_`https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css`,"integrity","sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm","crossorigin","anonymous"],["rel","preconnect","href",_`https://fonts.googleapis.com`],["rel","preconnect","href",_`https://fonts.gstatic.com`,"crossorigin",""],["href",_`https://fonts.googleapis.com/css2?family=Bitter:wght@100&family=Jersey+10+Charted&family=Jersey+15&family=Jersey+20+Charted&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap`,"rel","stylesheet"],["id","background"],[4,"ngIf"],["id","intentos",1,"row"],[1,"col","text-center"],["class","row","id","gano",4,"ngIf"],["class","row","id","perdio",4,"ngIf"],["class","spinner",4,"ngIf"],["alt","Imagen de la pel\xEDcula",1,"img-pelicula",3,"src"],[4,"ngFor","ngForOf"],[1,"spinner"],[1,"btn-opcion",3,"click"],["id","gano",1,"row"],[1,"container"],["type","submit",3,"click"],["id","perdio",1,"row"]],template:function(t,n){t&1&&(r(0,"head"),v(1,"link",0)(2,"link",1)(3,"link",2)(4,"link",3),a(),r(5,"body",4)(6,"h1"),c(7,"Preguntados"),a(),x(8,G,4,3,"div",5),r(9,"div",6)(10,"div",7)(11,"h3"),c(12,"Intentos: "),r(13,"small"),c(14),a()()()(),x(15,Q,11,0,"div",8)(16,W,11,0,"div",9),v(17,"app-logout")(18,"app-chat"),a()),t&2&&(l(8),d("ngIf",n.pregunta&&!n.gano&&!n.perdio),l(6),y(n.intentosFallidos),l(),d("ngIf",n.gano),l(),d("ngIf",n.perdio))},dependencies:[T,E,V,D,R,J],styles:['#background[_ngcontent-%COMP%]{width:100%;height:100vh;background-size:cover;background-image:url("./media/login-desktop2-RMQDQUJU.jpg");background-repeat:no-repeat}body[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{padding-top:15px;color:#fff;font-family:"Jersey 10 Charted",sans-serif;font-size:50px}.img-pelicula[_ngcontent-%COMP%]{width:40%;height:40%;border:6px solid #d067c9}.btn-opcion[_ngcontent-%COMP%]{border-radius:5px;color:#fff;font-size:30px;background:#f766d0;padding:10px 20px;margin:5px;text-decoration:none;font-family:Courier New,Courier,monospace}.btn-opcion[_ngcontent-%COMP%]:hover{cursor:pointer;background:#f20cc4}#gano[_ngcontent-%COMP%], #perdio[_ngcontent-%COMP%]{background-color:#ee1fbe80;color:#fff;width:300px;height:200px;text-align:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center}#intentos[_ngcontent-%COMP%]{font-family:sans-serif;position:fixed;bottom:0;left:0;width:100%;text-align:center;display:flex;justify-content:center;align-items:center;background-color:#ee1fbe80}button[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{background:none;color:#fff;border:none;padding:5px;font-weight:700}button[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.spinner[_ngcontent-%COMP%]{width:36px;height:36px;border:5px solid rgba(255,253,253,.3);border-radius:50%;border-left-color:#ad4dca;animation:_ngcontent-%COMP%_spin 1s ease infinite;display:flex;justify-content:center;align-items:center;margin:10px auto auto}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']});let o=i;return o})();export{ne as PreguntadosComponent};