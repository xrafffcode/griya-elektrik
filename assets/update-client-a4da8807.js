import{d as F,O as I,r as u,Q as E,R as L,o as V,f as b,i as l,c as e,U as v,N as p,W as j,l as a,P as k,B as D,C as M,j as K}from"./index-34776078.js";import{u as x}from"./client-a55903ca.js";import{a as s,V as f}from"./VRow-da07817e.js";import{V as B,a as O,b as P}from"./VCard-03c594b7.js";import{V as Q}from"./VForm-d688bd60.js";import{V as N}from"./VTextField-4ab46247.js";import{V as W}from"./VImg-f830556b.js";import{V as q}from"./VFileInput-e4543e03.js";/* empty css              */import"./VAvatar-8dc9563c.js";import"./VInput-c04ebae8.js";import"./index-284ca4f8.js";import"./index-21eae2e0.js";import"./forwardRefs-e658ad70.js";import"./VChip-555cf257.js";const z=K("h2",{class:"mb-0"}," Edit Client ",-1),A={key:0},ue={__name:"update-client",setup(G){const w=F(),{loading:n,error:o}=I(x()),{fetchClientById:R,updateClient:S}=x(),C=w.params.id,i=u(""),m=u(null),_=u(""),c=u(""),g=u(""),h=async()=>{try{const r=await R(C);i.value=r.name,c.value=r.url,g.value=r.logo_url}catch(r){console.error("Error fetching client data:",r)}};E(()=>{h()});const y=()=>{h()},T=()=>{S({id:C,name:i.value,logo:m.value,url:c.value})};L(()=>{y(),o.value=null});const U=r=>{const t=r.target.files[0];t&&(m.value=t,_.value=t.name)};return(r,t)=>(V(),b(f,null,{default:l(()=>[e(s,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[z,e(v,{to:"/admin/merk-produk",color:"error"},{default:l(()=>[p(" Kembali ")]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(B,null,{default:l(()=>[e(Q,{onSubmit:j(T,["prevent"])},{default:l(()=>[e(f,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(N,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d),label:"Nama",placeholder:"Nama Client","error-messages":a(o)&&a(o).name?[a(o).name]:[],disabled:a(n),loading:a(n)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(N,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=d=>c.value=d),label:"Link",placeholder:"Link Client","error-messages":a(o)&&a(o).url?[a(o).url]:[],disabled:a(n),loading:a(n)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(B,null,{default:l(()=>[e(O,null,{default:l(()=>[p(" Logo ")]),_:1}),e(P,null,{default:l(()=>[e(f,null,{default:l(()=>[e(s,{cols:"12",md:"12"},{default:l(()=>[g.value?(V(),b(W,{key:0,src:g.value,cover:"",style:{width:"100%",height:"auto"}},null,8,["src"])):k("",!0)]),_:1})]),_:1}),e(f,{cols:"12",md:"12"},{default:l(()=>[e(q,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=d=>m.value=d),"error-messages":a(o)&&a(o).logo?[a(o).logo]:[],loading:a(n),"prepend-inner-icon":"mdi-logo",onChange:U},{"prepend-inner":l(()=>[_.value?(V(),D("span",A,M(_.value),1)):k("",!0)]),_:1},8,["modelValue","error-messages","loading"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(v,{type:"submit",loading:a(n),color:"primary"},{default:l(()=>[p(" Simpan ")]),_:1},8,["loading"]),e(v,{type:"reset",color:"secondary",variant:"tonal",onClick:y},{default:l(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{ue as default};
