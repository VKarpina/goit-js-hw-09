import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},a="feedback-form-state",l=document.querySelector(".feedback-form"),s=document.querySelector("input"),o=document.querySelector("textarea");l.addEventListener("input",m);function m(e){e.target.name==="email"?t.email=e.target.value.trim():t.message=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(t))}const r=localStorage.getItem(a);if(r){const e=JSON.parse(r);s.value=e.email,o.value=e.message}l.addEventListener("submit",i);function i(e){if(e.preventDefault(),localStorage.removeItem(a),l.reset(),t.email===""||t.message==="")return alert("Fill please all fields");console.log(t),t.email="",t.message=""}
//# sourceMappingURL=2-form.js.map