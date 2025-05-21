import{R as t}from"./CLFUSJ_o.js";function e(e,o){const[r,s]=t.useState(e);return t.useEffect((()=>{const t=setTimeout((()=>{s(e)}),o);return()=>{clearTimeout(t)}}),[e,o]),r}export{e as u};
