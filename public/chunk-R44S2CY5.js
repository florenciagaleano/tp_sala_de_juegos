import{a as R}from"./chunk-RTS4IFWE.js";import{a as y,b as J,c as U,d as V,e as N,g as W}from"./chunk-TF3MN3MJ.js";import{E as D,b as A}from"./chunk-Y3LGP6MG.js";import{Aa as d,Ab as F,Ba as u,Ja as _,Ka as f,La as t,Ma as n,Na as c,Oa as O,Pa as m,Qa as p,Sa as l,Ta as M,Va as P,Wa as w,Xa as k,Za as b,ba as h,ka as C,la as v,nb as j,ob as S,pb as E,ub as z,vb as I,ya as x,yb as T}from"./chunk-QGH44FHM.js";function Q(i,o){if(i&1&&(t(0,"div",11)(1,"p"),l(2),n(),c(3,"div",12),n()),i&2){let a=p().$implicit;d(2),M(a.mensaje)}}function q(i,o){if(i&1&&(t(0,"div",13),c(1,"div",14),t(2,"p"),l(3),n(),c(4,"div",12),n()),i&2){let a=p().$implicit;d(3),M(a.mensaje)}}function H(i,o){if(i&1&&(t(0,"div"),_(1,Q,4,1,"div",9)(2,q,5,1,"div",10),n()),i&2){let a=o.$implicit,r=p(2);d(),f("ngIf",a.usuario===r.usuarioActual),d(),f("ngIf",a.usuario!==r.usuarioActual)}}function G(i,o){if(i&1){let a=O();t(0,"div",2)(1,"div",3),_(2,H,3,2,"div",4),n(),t(3,"div",5)(4,"div",6)(5,"input",7),k("ngModelChange",function(e){C(a);let s=p();return w(s.nuevoMensaje,e)||(s.nuevoMensaje=e),v(e)}),n(),t(6,"button",8),m("click",function(){C(a);let e=p();return v(e.enviarMensaje(e.nuevoMensaje))}),n()()()()}if(i&2){let a=p();d(2),f("ngForOf",a.mensajes),d(3),P("ngModel",a.nuevoMensaje)}}var B=(()=>{let o=class o{constructor(r,e){this.authService=r,this.firestore=e,this.chat=!1,this.mensajes=[],this.nuevoMensaje="",this.usuarioActual=null}ngOnInit(){this.usuarioActual=this.authService.getCurrentUser(),this.getMensajes()}abrirChat(){this.chat=!this.chat}getMensajes(){let r=y(this.firestore,"mensajes"),e=J(r,U("fecha","asc")),s=W(e,{idField:"id"});this.sub=s.subscribe(g=>{this.mensajes=g,console.log(g)})}enviarMensaje(r){let e=y(this.firestore,"mensajes");V(e,{mensaje:r,usuario:this.usuarioActual,fecha:new Date}),this.nuevoMensaje="",this.getMensajes()}};o.\u0275fac=function(e){return new(e||o)(u(D),u(N))},o.\u0275cmp=h({type:o,selectors:[["app-chat"]],standalone:!0,features:[b],decls:2,vars:1,consts:[[1,"btn-chat",3,"click"],["class","chat-box",4,"ngIf"],[1,"chat-box"],[1,"message-box"],[4,"ngFor","ngForOf"],[1,"input-box"],[1,"write-reply"],["type","text","placeholder","Write a reply...",1,"inputText",3,"ngModelChange","ngModel"],[1,"send-button",3,"click"],["class","first-chat",4,"ngIf"],["class","second-chat",4,"ngIf"],[1,"first-chat"],[1,"arrow"],[1,"second-chat"],[1,"circle"]],template:function(e,s){e&1&&(t(0,"button",0),m("click",function(){return s.abrirChat()}),n(),_(1,G,7,2,"div",1)),e&2&&(d(),f("ngIf",s.chat))},dependencies:[E,j,S,F,z,I,T],styles:['*[_ngcontent-%COMP%]{padding:0;margin:0;text-decoration:none;list-style:none;box-sizing:border-box}.btn-chat[_ngcontent-%COMP%]{position:fixed;left:90%;bottom:5%;background-image:url("./media/chat-icon-4LVOBAQ5.png");background-size:contain;background-repeat:no-repeat;width:50px;height:50px;cursor:pointer;border-radius:90px;border:none}.chat-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:332px;height:434px;border-radius:10px;background-color:#ffffff96;padding:16px;z-index:9999999;position:fixed;border-color:#b00287;bottom:120px;right:54px;border-style:double;box-shadow:#0000001a 0 1px 6px,#0003 0 2px 24px}.message-box[_ngcontent-%COMP%]{height:316px;width:100%;padding-right:5px;overflow:auto}.first-chat[_ngcontent-%COMP%]{width:200px;float:right;background-color:#fd7ddb;padding:10px;margin:14px 0;border-radius:5px;color:#fff}.first-chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;overflow-wrap:break-word}.second-chat[_ngcontent-%COMP%]{display:inline-block}.second-chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;overflow-wrap:break-word;width:200px;float:left;background-color:#ecf1fb;padding:12px;margin:0 5px;border-radius:10px;color:#000}.second-chat[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{content:"";width:0px;height:0px;border-right:9px solid transparent;border-left:9px solid #ecf1fb;border-top:12px solid #ecf1fb;border-bottom:9px solid transparent;margin-left:40px;margin-top:-2%;display:inline-block}.input-box[_ngcontent-%COMP%]{position:absolute;font-size:12px;bottom:0;left:0;right:0;padding:0 15px 18px;border-top:1px solid lightgray;width:100%}.input-box[_ngcontent-%COMP%]   .write-reply[_ngcontent-%COMP%]{float:left}.input-box[_ngcontent-%COMP%]   .write-reply[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:none;outline:none;font-size:20px}.input-box[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]{float:right;border:none;outline:none}.input-box[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:transparent;cursor:pointer;outline:none}.send-button[_ngcontent-%COMP%]{position:fixed;background-image:url("./media/send-Z2Z47SW2.png");background-size:contain;background-repeat:no-repeat;width:25px;height:22px;cursor:pointer;border:none}']});let i=o;return i})();var se=(()=>{let o=class o{constructor(r){this.router=r}irAJuego(r){this.router.navigate(["/"+r])}};o.\u0275fac=function(e){return new(e||o)(u(A))},o.\u0275cmp=h({type:o,selectors:[["app-home"]],standalone:!0,features:[b],decls:30,vars:0,consts:[["rel","preconnect","href",x`https://fonts.googleapis.com`],["rel","preconnect","href",x`https://fonts.gstatic.com`,"crossorigin",""],["href",x`https://fonts.googleapis.com/css2?family=Bitter:wght@100&family=Jersey+10+Charted&family=Jersey+15&family=Jersey+20+Charted&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap`,"rel","stylesheet"],["id","background"],["id","juegos-titulo"],["id","juegos"],["src","../../../assets/aparato.jpg",3,"click"],[1,"info"],["src","../../../assets/calculadora.jpg",3,"click"],["src","../../../assets/maquinita.jpg"],["src","../../../assets/maquina-munecos.jpg"]],template:function(e,s){e&1&&(t(0,"head"),c(1,"link",0)(2,"link",1)(3,"link",2),n(),t(4,"body",3)(5,"h3",4),l(6,"\u2728Juegos\u2728"),n(),t(7,"ul",5)(8,"li")(9,"img",6),m("click",function(){return s.irAJuego("ahorcado")}),n(),t(10,"div",7)(11,"p"),l(12,"AHORCADO"),n()()(),t(13,"li")(14,"img",8),m("click",function(){return s.irAJuego("cartas")}),n(),t(15,"div",7)(16,"p"),l(17,"MAYOR O MENOR"),n()()(),t(18,"li"),c(19,"img",9),t(20,"div",7)(21,"p"),l(22,"PREGUNTADOS"),n()()(),t(23,"li"),c(24,"img",10),t(25,"div",7)(26,"p"),l(27,"JUEGO FLOR"),n()()()(),c(28,"app-logout")(29,"app-chat"),n())},dependencies:[R,B],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}#juegos-titulo[_ngcontent-%COMP%]{text-align:center;padding-top:30px;font-size:50px;font-family:Source Code Pro,monospace;color:#fff}#background[_ngcontent-%COMP%]{width:100%;height:100vh;background-size:cover;background-image:url("./media/login-desktop2-RMQDQUJU.jpg");background-repeat:no-repeat}ul[_ngcontent-%COMP%]{list-style-type:none;display:grid;grid-template-columns:repeat(4,1fr);padding:100px;grid-gap:25px;position:relative}li[_ngcontent-%COMP%]{position:relative;margin:0 15px 15px 0;cursor:pointer;transition:all .3s;overflow:hidden;border:5px groove #97087b}li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}li[_ngcontent-%COMP%]:hover{transform:scale(1.05)}li[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%]{display:block}li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.8}.info[_ngcontent-%COMP%]{padding:10px;display:none;position:absolute;z-index:10;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);font-weight:700;background-color:#ffc0cb80;font-size:25px;font-family:Source Code Pro,monospace;color:#fff}']});let i=o;return i})();export{se as a};