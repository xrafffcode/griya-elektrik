import{u as f}from"./productBrand-5da39ef4.js";import{O as v,r as C,e as y,o as w,B,c as a,i as e,N as s,C as T,l,U as n,s as h,j as m,F as D}from"./index-34776078.js";import{V as _,b as N,c as A}from"./VCard-03c594b7.js";import{V as M}from"./VDialog-5a54b9ce.js";import{a as d,V as U}from"./VRow-da07817e.js";import{V as j}from"./VTextField-4ab46247.js";import"./VAvatar-8dc9563c.js";import"./VImg-f830556b.js";import"./index-21eae2e0.js";import"./VOverlay-9b6fe595.js";import"./forwardRefs-e658ad70.js";/* empty css              */import"./VInput-c04ebae8.js";import"./index-284ca4f8.js";const E=m("h2",{class:"mb-0"}," Merk Produk ",-1),F=m("img",{src:"https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif",style:{width:"100px",height:"80px"}},null,-1),R=["src"],Z={__name:"product-brands",setup(z){const g=[{text:"Kode",value:"code",sortable:!0},{text:"Nama",value:"name",sortable:!0},{text:"Logo",value:"logo",sortable:!1},{text:"Aksi",value:"operation",width:200}],{brands:V,loading:u,error:P,success:r}=v(f()),{fetchBrands:c,deleteBrand:b}=f();c();async function k(p){confirm("Apakah Anda yakin ingin menghapus merk ini?")&&(await b(p.id),c())}const i=C("");return(p,t)=>{const x=y("EasyDataTable");return w(),B(D,null,[a(M,{modelValue:l(r),"onUpdate:modelValue":t[1]||(t[1]=o=>h(r)?r.value=o:null),"max-width":400},{default:e(()=>[a(_,null,{default:e(()=>[a(N,null,{default:e(()=>[s(T(l(r)),1)]),_:1}),a(A,null,{default:e(()=>[a(n,{color:"primary",text:"",onClick:t[0]||(t[0]=()=>r.value=!1)},{default:e(()=>[s(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(U,null,{default:e(()=>[a(d,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:e(()=>[E,a(n,{to:"/admin/merk-produk/tambah",color:"primary"},{default:e(()=>[s(" Tambah Merk ")]),_:1})]),_:1}),a(d,{cols:"12"},{default:e(()=>[a(j,{modelValue:l(i),"onUpdate:modelValue":t[2]||(t[2]=o=>h(i)?i.value=o:null),label:"Cari Merek",placeholder:"Cari Merek",clearable:"",loading:l(u),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),a(d,{cols:"12"},{default:e(()=>[a(_,null,{default:e(()=>[a(x,{headers:g,items:l(V),loading:l(u),"search-value":l(i),"buttons-pagination":"","show-index":""},{loading:e(()=>[F]),"item-logo":e(o=>[m("img",{src:o.logo_url||"https://via.placeholder.com/150",style:{width:"100px",height:"100px","object-fit":"contain"}},null,8,R)]),"item-operation":e(o=>[a(n,{to:`/admin/merk-produk/ubah/${o.id}`,color:"primary",class:"m-5",size:"small"},{default:e(()=>[s(" Ubah ")]),_:2},1032,["to"]),a(n,{color:"error",size:"small",class:"m-5",onClick:()=>k(o)},{default:e(()=>[s(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{Z as default};
