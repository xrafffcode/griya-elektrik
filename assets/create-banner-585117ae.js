import{O as x,r as m,R as y,o as R,f as F,i as a,c as e,U as _,N as f,W as G,l,s as b,j as M}from"./index-34776078.js";import{u as V}from"./banner-ad4f174e.js";import{a as t,V as h}from"./VRow-da07817e.js";import{V as N}from"./VCard-03c594b7.js";import{V as S}from"./VForm-d688bd60.js";import{V as v}from"./VFileInput-e4543e03.js";/* empty css              */import"./VAvatar-8dc9563c.js";import"./VImg-f830556b.js";import"./index-21eae2e0.js";import"./VInput-c04ebae8.js";import"./index-284ca4f8.js";import"./forwardRefs-e658ad70.js";import"./VChip-555cf257.js";const U=M("h2",{class:"mb-0"}," Tambah Banner ",-1),Q={__name:"create-banner",setup(T){const{loading:u,error:s}=x(V()),{createBanner:k}=V(),d=m(null),r=m(null),c=m(null),n=m(null),g=()=>{d.value=null,r.value=null,c.value=null,n.value=null,s.value=null},B=()=>{k({desktop_image:d.value,mobile_image:c.value})};y(()=>{g(),s.value=null});const C=i=>{const o=i.target.files[0];o&&(d.value=o)},w=i=>{const o=i.target.files[0];o&&(c.value=o)};return(i,o)=>(R(),F(h,null,{default:a(()=>[e(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[U,e(_,{to:"/admin/konfigurasi-web/banner",color:"error"},{default:a(()=>[f(" Kembali ")]),_:1})]),_:1}),e(t,{cols:"12"},{default:a(()=>[e(N,null,{default:a(()=>[e(S,{onSubmit:G(B,["prevent"])},{default:a(()=>[e(h,null,{default:a(()=>[e(t,{cols:"12",md:"12"},{default:a(()=>[e(v,{modelValue:l(r),"onUpdate:modelValue":o[0]||(o[0]=p=>b(r)?r.value=p:null),label:"Gambar Desktop",placeholder:"Pilih Gambar Desktop","error-messages":l(s)&&l(s).desktop_image?[l(s).desktop_image]:[],disabled:l(u),"show-size":"",accept:"image/*","prepend-icon":"mdi-camera",onChange:C},null,8,["modelValue","error-messages","disabled"])]),_:1}),e(t,{cols:"12",md:"12"},{default:a(()=>[e(v,{modelValue:l(n),"onUpdate:modelValue":o[1]||(o[1]=p=>b(n)?n.value=p:null),label:"Gambar Mobile",placeholder:"Pilih Gambar Mobile","error-messages":l(s)&&l(s).mobile_image?[l(s).mobile_image]:[],disabled:l(u),"show-size":"",accept:"image/*","prepend-icon":"mdi-camera",onChange:w},null,8,["modelValue","error-messages","disabled"])]),_:1}),e(t,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[e(_,{type:"submit",loading:l(u),color:"primary"},{default:a(()=>[f(" Simpan ")]),_:1},8,["loading"]),e(_,{color:"secondary",variant:"tonal",onClick:g},{default:a(()=>[f(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Q as default};
