import"./assets/styles-D2sto1Mm.js";const a=document.querySelector(".feedback-form"),m="feedback-form-state",l=a.elements.email,s=a.elements.message;a.addEventListener("input",o);i();const t={email:"",message:""};function o(e){e.target.name==="email"?t.email=e.target.value:e.target.name==="message"&&(t.message=e.target.value),localStorage.setItem(m,JSON.stringify(t))}function i(){const e=localStorage.getItem(m);if(e){const n=JSON.parse(e);l.value=n.email.trim(),s.value=n.message.trim()}}a.addEventListener("submit",r);function r(e){e.preventDefault(),!l.value||!s.value?alert("Fill please all fields"):(console.log({email:l.value,message:s.value}),localStorage.removeItem(m),a.reset())}
//# sourceMappingURL=2-form.js.map
