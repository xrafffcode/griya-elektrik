import{u as f}from"./productCategory-e3c69483.js";import{O as C,r as y,e as v,o as w,B as T,c as e,i as a,N as l,C as D,l as r,U as s,s as g,j as m,F as B}from"./index-34776078.js";import{V as _,b as N,c as A}from"./VCard-03c594b7.js";import{V as K}from"./VDialog-5a54b9ce.js";import{a as d,V as U}from"./VRow-da07817e.js";import{V as j}from"./VTextField-4ab46247.js";import"./VAvatar-8dc9563c.js";import"./VImg-f830556b.js";import"./index-21eae2e0.js";import"./VOverlay-9b6fe595.js";import"./forwardRefs-e658ad70.js";/* empty css              */import"./VInput-c04ebae8.js";import"./index-284ca4f8.js";const z=m("h2",{class:"mb-0"}," Kategori Produk ",-1),E=m("img",{src:"https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif",style:{width:"100px",height:"80px"}},null,-1),F=["src"],Z={__name:"product-categories",setup(P){const h=[{text:"Gambar",value:"gambar",width:200},{text:"Parent",value:"parent.name",sortable:!0},{text:"Nama",value:"name",sortable:!0},{text:"Sort Order",value:"sort_order"},{text:"Aksi",value:"operation",width:300}],{categories:x,loading:u,error:R,success:i}=C(f()),{fetchCategories:c,deleteCategory:b}=f();c();async function V(p){confirm("Apakah Anda yakin ingin menghapus kategori ini?")&&(await b(p.id),c())}const n=y("");return(p,o)=>{const k=v("EasyDataTable");return w(),T(B,null,[e(K,{modelValue:r(i),"onUpdate:modelValue":o[1]||(o[1]=t=>g(i)?i.value=t:null),"max-width":400},{default:a(()=>[e(_,null,{default:a(()=>[e(N,null,{default:a(()=>[l(D(r(i)),1)]),_:1}),e(A,null,{default:a(()=>[e(s,{color:"primary",text:"",onClick:o[0]||(o[0]=()=>i.value=!1)},{default:a(()=>[l(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(U,null,{default:a(()=>[e(d,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[z,e(s,{to:"/admin/kategori-produk/tambah",color:"primary"},{default:a(()=>[l(" Tambah Kategori ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(j,{modelValue:r(n),"onUpdate:modelValue":o[2]||(o[2]=t=>g(n)?n.value=t:null),label:"Cari Kategori",placeholder:"Cari Kategori",clearable:"",loading:r(u),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(_,null,{default:a(()=>[e(k,{headers:h,items:r(x),loading:r(u),"search-value":r(n),"buttons-pagination":"","show-index":""},{loading:a(()=>[E]),"item-gambar":a(t=>[m("img",{src:t.image_url,alt:"gambar",style:{"max-width":"100px","max-height":"100px","object-fit":"cover","border-radius":"5px",margin:"10px 0"}},null,8,F)]),"item-operation":a(t=>[e(s,{to:`/admin/kategori-produk/ubah/${t.id}`,color:"primary",class:"m-5",size:"small"},{default:a(()=>[l(" Ubah ")]),_:2},1032,["to"]),e(s,{to:`/admin/kategori-produk/${t.id}`,color:"info",class:"m-5",size:"small"},{default:a(()=>[l(" Detail ")]),_:2},1032,["to"]),e(s,{color:"error",size:"small",class:"m-5",onClick:()=>V(t)},{default:a(()=>[l(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{Z as default};
