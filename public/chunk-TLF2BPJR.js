import{a as v,b as A,c as D,d as L,e as N,g as W}from"./chunk-2INKUQTR.js";import{G as r,H as _,K as f,L as l,N as c,O as a,P as x,Q as b,R as C,S as s,U as p,V as h,X as O,Y as j,Ya as V,Z as P,_ as w,aa as y,fa as k,ga as S,ha as I,qa as z,ra as F,u as M,ua as E,wa as T,x as u,y as g}from"./chunk-JPDSU4GN.js";function $(n,i){if(n&1){let o=b();c(0,"button",2),C("click",function(){u(o);let t=s();return g(t.abrirChat())}),a()}}function Q(n,i){if(n&1&&(c(0,"div",12)(1,"div",13)(2,"p",14),p(3),a(),c(4,"p"),p(5),a(),x(6,"div",15),a()()),n&2){let o=s().$implicit,e=s(2);r(3),h(e.formatearFecha(o.fecha.toDate())),r(2),h(o.mensaje)}}function Z(n,i){if(n&1&&(c(0,"div",16)(1,"div",17)(2,"p",18),p(3),a(),x(4,"div",19),c(5,"p"),p(6),a(),x(7,"div",15),a()()),n&2){let o=s().$implicit,e=s(2);r(3),O("",e.formatearFecha(o.fecha.toDate())," | ",o.usuario,""),r(3),h(o.mensaje)}}function q(n,i){if(n&1&&(c(0,"div"),f(1,Q,7,2,"div",10)(2,Z,8,3,"div",11),a()),n&2){let o=i.$implicit,e=s(2);r(),l("ngIf",o.usuario===e.usuarioActual),r(),l("ngIf",o.usuario!==e.usuarioActual)}}function H(n,i){if(n&1){let o=b();c(0,"div",3)(1,"div",4),f(2,q,3,2,"div",5),a(),c(3,"div",6)(4,"div",7)(5,"input",8),w("ngModelChange",function(t){u(o);let d=s();return P(d.nuevoMensaje,t)||(d.nuevoMensaje=t),g(t)}),a(),c(6,"button",9),C("click",function(){u(o);let t=s();return g(t.enviarMensaje(t.nuevoMensaje))}),a()()()()}if(n&2){let o=s();r(2),l("ngForOf",o.mensajes),r(3),j("ngModel",o.nuevoMensaje)}}var nt=(()=>{let i=class i{constructor(e,t){this.authService=e,this.firestore=t,this.chat=!1,this.mensajes=[],this.nuevoMensaje="",this.usuarioActual=null,this.esInvitado=!1}ngOnInit(){this.usuarioActual=this.authService.getCurrentUser(),this.getMensajes(),this.usuarioActual=="invitado@gmail.com"&&(this.esInvitado=!0)}abrirChat(){this.chat=!this.chat}getMensajes(){let e=v(this.firestore,"mensajes"),t=A(e,D("fecha","asc")),d=W(t,{idField:"id"});this.sub=d.subscribe(m=>{this.mensajes=m,console.log(m)})}enviarMensaje(e){let t=v(this.firestore,"mensajes");L(t,{mensaje:e,usuario:this.usuarioActual,fecha:new Date}),this.nuevoMensaje="",this.getMensajes()}formatearFecha(e){let t={day:"2-digit",month:"2-digit"},d={hour:"2-digit",minute:"2-digit"},m=e.toLocaleDateString("es-ES",t),B=e.toLocaleTimeString("es-ES",d);return`${m} ${B}`}};i.\u0275fac=function(t){return new(t||i)(_(V),_(N))},i.\u0275cmp=M({type:i,selectors:[["app-chat"]],standalone:!0,features:[y],decls:2,vars:2,consts:[["class","btn-chat",3,"click",4,"ngIf"],["class","chat-box",4,"ngIf"],[1,"btn-chat",3,"click"],[1,"chat-box"],[1,"message-box"],[4,"ngFor","ngForOf"],[1,"input-box"],[1,"write-reply"],["type","text","placeholder","Responder...",1,"inputText",3,"ngModelChange","ngModel"],[1,"send-button",3,"click"],["class","first-chat-container",4,"ngIf"],["class","second-chat-container",4,"ngIf"],[1,"first-chat-container"],[1,"first-chat"],[1,"encabezado_msj","propio"],[1,"arrow"],[1,"second-chat-container"],[1,"second-chat"],[1,"encabezado_msj","ajeno"],[1,"circle"]],template:function(t,d){t&1&&f(0,$,1,0,"button",0)(1,H,7,2,"div",1),t&2&&(l("ngIf",!d.esInvitado),r(),l("ngIf",d.chat))},dependencies:[I,k,S,T,z,F,E],styles:['*[_ngcontent-%COMP%]{padding:0;margin:0;text-decoration:none;list-style:none;box-sizing:border-box}.btn-chat[_ngcontent-%COMP%]{position:fixed;left:90%;bottom:5%;background-image:url("./media/chat-icon-4LVOBAQ5.png");background-size:contain;background-repeat:no-repeat;width:50px;height:50px;cursor:pointer;border-radius:90px;border:none}.chat-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:332px;height:434px;border-radius:10px;background-color:#ffffff96;padding:16px;z-index:9999999;position:fixed;border-color:#b00287;bottom:100px;right:54px;border-style:double;box-shadow:#0000001a 0 1px 6px,#0003 0 2px 24px}.message-box[_ngcontent-%COMP%]{height:316px;width:100%;padding-right:5px;overflow:auto}.first-chat-container[_ngcontent-%COMP%], .second-chat-container[_ngcontent-%COMP%]{margin-bottom:14px}.first-chat-container[_ngcontent-%COMP%]   .encabezado_msj[_ngcontent-%COMP%], .second-chat-container[_ngcontent-%COMP%]   .encabezado_msj[_ngcontent-%COMP%]{display:block;margin-bottom:2px}.first-chat[_ngcontent-%COMP%]{width:250px;margin-left:auto;background-color:#fd7ddb;padding:10px;border-radius:5px;color:#fff;position:relative}.first-chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;overflow-wrap:break-word}.second-chat-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.second-chat[_ngcontent-%COMP%]{width:250px;background-color:#ecf1fb;padding:12px;border-radius:10px;color:#000;position:relative}.second-chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;overflow-wrap:break-word}.second-chat[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{content:"";width:0px;height:0px;border-right:9px solid transparent;border-left:9px solid #ecf1fb;border-top:12px solid #ecf1fb;border-bottom:9px solid transparent;margin-left:40px;margin-top:-2%;display:inline-block}.input-box[_ngcontent-%COMP%]{position:absolute;font-size:12px;bottom:0;left:0;right:0;padding:0 15px 10px;border-top:1px solid lightgray;width:100%}.input-box[_ngcontent-%COMP%]   .write-reply[_ngcontent-%COMP%]{float:left}.input-box[_ngcontent-%COMP%]   .write-reply[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:none;outline:none;font-size:20px}.input-box[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]{float:right;border:none;outline:none}.input-box[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:transparent;cursor:pointer;outline:none}.send-button[_ngcontent-%COMP%]{position:fixed;background-image:url("./media/send-Z2Z47SW2.png");background-size:contain;background-repeat:no-repeat;width:25px;height:22px;cursor:pointer;border:none}.encabezado_msj[_ngcontent-%COMP%]{font-size:7px;text-align:left}.encabezado_msj.propio[_ngcontent-%COMP%]{color:#fff}.encabezado_msj.ajeno[_ngcontent-%COMP%]{color:#fd7ddb}']});let n=i;return n})();export{nt as a};