import{a as m}from"./crudFireBase-FagNTyCr.js";import{u as y,r as o,g as D,c as a,a as e,t,h as f,o as c}from"./index-diUTJ9Yz.js";const b={key:0,class:"container"},x=e("h1",{class:"alert alert-danger text-center"}," Dispositivo no encontrado ",-1),R=[x],g={key:1},k={key:0,class:"container"},j={class:"alert alert-primary text-center"},E={class:"row"},B={class:"col-12"},I={class:"card"},U={class:"card-body"},w={class:"card-title"},C={class:"card-text"},L={key:1,class:"container"},M={class:"alert alert-primary text-center"},N={class:"row"},S={class:"col-12"},V={class:"card"},A={class:"card-body"},q={class:"card-title"},z={class:"card-text"},J={__name:"DetalleDispositivo",setup(F){const r=y(),l=o(""),d=o(""),u=o(""),_=o(""),v=o([]),s=o(""),h=()=>{try{u.value=r.currentRoute.value.params.UserId,l.value=r.currentRoute.value.params.espacioId,d.value=r.currentRoute.value.params.tipo,_.value=r.currentRoute.value.params.ideje}catch(n){console.error("Error al obtener parámetros desde la URL",n)}},p=n=>{v.value=n.data().espacios.find(i=>i.id==l.value)[d.value],s.value=v.value.find(i=>i.id==_.value)||!1};return D(()=>{h(),m("usuarios",u.value,p)}),(n,i)=>(c(),a("div",null,[s.value===!1?(c(),a("div",b,R)):(c(),a("div",g,[d.value==="ejecutores"?(c(),a("div",k,[e("h1",j," Dispositivo "+t(s.value.nombre),1),e("div",E,[e("div",B,[e("div",I,[e("div",U,[e("h5",w,t(s.value.nombre),1),e("p",C,t(s.value.estado?"Encendido":"Apagado"),1)])])])])])):d.value==="sensores"?(c(),a("div",L,[e("h1",M," Sensor "+t(s.value.nombre),1),e("div",N,[e("div",S,[e("div",V,[e("div",A,[e("h5",q,t(s.value.nombre),1),e("p",z,t(s.value.valor)+" "+t(s.value.unidadMedida),1)])])])])])):f("",!0)]))]))}};export{J as default};
