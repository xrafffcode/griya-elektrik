import{m as V,V as a}from"./VSelectionControl-74f61ac8.js";import{p as f,a2 as I,g as v,I as c,z as l,u as k,H as x,c as h,K as b}from"./index-34776078.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:I,default:"$checkboxIndeterminate"},...V({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),y=v()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:u}=r;const t=c(e,"indeterminate"),n=c(e,"modelValue");function s(o){t.value&&(t.value=!1)}const i=l(()=>t.value?e.indeterminateIcon:e.falseIcon),m=l(()=>t.value?e.indeterminateIcon:e.trueIcon);return k(()=>{const o=x(a.filterProps(e),["modelValue"]);return h(a,b(o,{modelValue:n.value,"onUpdate:modelValue":[d=>n.value=d,s],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:m.value,"aria-checked":t.value?"mixed":void 0}),u)}),{}}});export{y as V,C as m};
