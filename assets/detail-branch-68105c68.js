import{u as C}from"./branch-dc095a5f.js";import{d as M,O as R,r as t,Q as T,o as p,f as k,i as s,c as l,j as w,C as L,U as S,N as I,l as a,B as A,F as P,G as j,P as D}from"./index-34776078.js";import{a as m,V as B}from"./VRow-da07817e.js";import{V as G}from"./VCard-03c594b7.js";import{V as O}from"./VForm-d688bd60.js";import{V as u}from"./VTextField-4ab46247.js";import{V as Y}from"./VTextarea-fae7a21c.js";import{a as Q}from"./VInput-c04ebae8.js";import{V as q}from"./VImg-f830556b.js";/* empty css              */import"./VAvatar-8dc9563c.js";import"./forwardRefs-e658ad70.js";import"./index-21eae2e0.js";import"./index-284ca4f8.js";const z={class:"mb-0"},H=["src"],ie={__name:"detail-branch",setup(J){const N=M(),{loading:W,error:e}=R(C()),{fetchBranchById:F}=C(),x=N.params.id,f=t("AUTO"),n=t(""),c=t(""),i=t(""),V=t(""),g=t(""),b=t(""),v=t(""),y=t(""),_=t(""),h=t(""),U=t([]),E=async()=>{try{const d=await F(x);f.value=d.code,n.value=d.name,c.value=d.map_url,i.value=d.iframe_map,V.value=d.address,g.value=d.city,b.value=d.email,v.value=d.phone,y.value=d.facebook,_.value=d.instagram,h.value=d.youtube,U.value=d.branch_images}catch(d){console.error("Error fetching branch data:",d)}};return T(()=>{E()}),(d,r)=>(p(),k(B,null,{default:s(()=>[l(m,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:s(()=>[w("h2",z,L(n.value),1),l(S,{to:"/admin/konfigurasi-web/cabang",color:"error"},{default:s(()=>[I(" Kembali ")]),_:1})]),_:1}),l(m,{cols:"12"},{default:s(()=>[l(G,null,{default:s(()=>[l(O,null,{default:s(()=>[l(B,null,{default:s(()=>[l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:f.value,"onUpdate:modelValue":r[0]||(r[0]=o=>f.value=o),label:"Kode Cabang",placeholder:"Kode Cabang","error-messages":a(e)&&a(e).code?[a(e).code]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=o=>n.value=o),label:"Nama",placeholder:"Nama Cabang","error-messages":a(e)&&a(e).name?[a(e).name]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:c.value,"onUpdate:modelValue":r[2]||(r[2]=o=>c.value=o),label:"Map URL",placeholder:"Map URL","error-messages":a(e)&&a(e).map?[a(e).map]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:i.value,"onUpdate:modelValue":r[3]||(r[3]=o=>i.value=o),label:"Iframe Map",placeholder:"Iframe Map","error-messages":a(e)&&a(e).iframe_map?[a(e).iframe_map]:[],readonly:"",onInput:d.getEmbedCode},null,8,["modelValue","error-messages","onInput"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(Y,{modelValue:V.value,"onUpdate:modelValue":r[4]||(r[4]=o=>V.value=o),label:"Alamat",placeholder:"Alamat","error-messages":a(e)&&a(e).address?[a(e).address]:[],rows:11,readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[w("iframe",{src:i.value,width:"100%",height:"300",frameborder:"0",style:{border:"0"},allowfullscreen:"","aria-hidden":"false"},null,8,H)]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:g.value,"onUpdate:modelValue":r[5]||(r[5]=o=>g.value=o),label:"Kota",placeholder:"Kota","error-messages":a(e)&&a(e).city?[a(e).city]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:b.value,"onUpdate:modelValue":r[6]||(r[6]=o=>b.value=o),label:"Email",placeholder:"Email","error-messages":a(e)&&a(e).email?[a(e).email]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:v.value,"onUpdate:modelValue":r[7]||(r[7]=o=>v.value=o),label:"Phone",placeholder:"Phone","error-messages":a(e)&&a(e).phone?[a(e).phone]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:y.value,"onUpdate:modelValue":r[8]||(r[8]=o=>y.value=o),label:"Facebook",placeholder:"Facebook","error-messages":a(e)&&a(e).facebook?[a(e).facebook]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:_.value,"onUpdate:modelValue":r[9]||(r[9]=o=>_.value=o),label:"Instagram",placeholder:"Instagram","error-messages":a(e)&&a(e).instagram?[a(e).instagram]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:h.value,"onUpdate:modelValue":r[10]||(r[10]=o=>h.value=o),label:"Youtube",placeholder:"Youtube","error-messages":a(e)&&a(e).youtube?[a(e).youtube]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"6"},{default:s(()=>[l(u,{modelValue:d.sort,"onUpdate:modelValue":r[11]||(r[11]=o=>d.sort=o),label:"Sort",placeholder:"Sort","error-messages":a(e)&&a(e).sort?[a(e).sort]:[],readonly:""},null,8,["modelValue","error-messages"])]),_:1}),l(m,{cols:"12",md:"12"},{default:s(()=>[l(Q,{for:"branch_images",class:"mb-2"},{default:s(()=>[I(" Gambar Cabang ")]),_:1}),U.value.length>0?(p(),k(B,{key:0},{default:s(()=>[(p(!0),A(P,null,j(U.value,(o,K)=>(p(),k(m,{key:K,cols:"12",md:"3"},{default:s(()=>[l(q,{src:o.image_url,width:"100%",height:"200",class:"mb-2"},null,8,["src"])]),_:2},1024))),128))]),_:1})):D("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{ie as default};
