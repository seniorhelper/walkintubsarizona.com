(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const gf=$('#gf');if(gf){if(gf.sheet)gf.media='all';else gf.addEventListener('load',()=>{gf.media='all'});setTimeout(()=>{gf.media='all'},2500)}
const b=$('.burger'),n=$('#nav');
if(b&&n){b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));n.classList.toggle('open',!o)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus()}});
$$('a',n).forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')}))}
const y=$('#yr');if(y)y.textContent=new Date().getFullYear();
const smooth=()=>matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';

// lead form
const T0=Date.now();
const dest=()=>atob('aW5mbw==')+String.fromCharCode(64)+atob('ZXlldG9hZA==')+'.'+atob('Y29t');
$$('form[data-lead]').forEach(f=>{
  let touched=false;['pointerdown','keydown','touchstart','input'].forEach(ev=>f.addEventListener(ev,()=>{touched=true},{passive:true}));
  const st=$('.status',f),btn=$('button[type=submit]',f);
  const say=(m,c)=>{st.textContent=m;st.className='status '+(c||'')};
  f.addEventListener('submit',async e=>{
    e.preventDefault();
    if(f._honey&&f._honey.value){say('Thank you!','ok');return}
    if(!touched||Date.now()-T0<3500){say('One moment, please try again in a few seconds.','err');return}
    const d=new FormData(f);d.delete('_honey');
    const name=(d.get('name')||'').trim(),phone=(d.get('phone')||'').trim(),email=(d.get('email')||'').trim();
    if(name.length<2||name.length>80){say('Please add your name.','err');f.name.focus();return}
    if(phone.replace(/\D/g,'').length<10){say('Please add a phone number so a specialist can call you back.','err');f.phone.focus();return}
    if(email&&!/^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}$/i.test(email)){say('That email looks incomplete. Fix it or leave it blank.','err');return}
    if(!d.get('consent')){say('Please check the box so we are allowed to contact you.','err');return}
    for(const [k,v] of d.entries()){if(typeof v==='string'&&v.length>(k==='goals'?2000:200)){say('That message is a little long. Please shorten it.','err');return}}
    const body={};d.forEach((v,k)=>{body[k]=v});
    body._subject='Arizona walk-in tub lead: '+name+' '+(body.zip||'')+' (walkintubsarizona.com'+location.pathname+')';
    body._template='table';body._captcha='false';body.page=location.pathname;
    btn.disabled=true;say('Sending…');
    try{
      const r=await fetch(['https:','','form'+'submit.co','aj'+'ax',dest()].join('/'),{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(body)});
      let j=null;try{j=await r.json()}catch(_){}
      if(r.ok&&j&&(j.success===true||j.success==='true')){say('Sent. Thank you! A specialist will call you within one business day. Need us sooner? Call 1-888-779-2284.','ok');f.reset()}
      else if(r.ok){say('Your request went out, but we could not confirm delivery. To be safe, please call 1-888-779-2284.','err')}
      else{say('That did not go through. Please call 1-888-779-2284 and we will help right away.','err')}
    }catch(_){say('No connection. Please call 1-888-779-2284 and we will help right away.','err')}
    finally{btn.disabled=false}
  });
});

const show=(out,title,items,msg)=>{out.hidden=false;$('.r-title',out).textContent=title;const ul=$('.r-list',out);ul.textContent='';items.forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.appendChild(li)});$('.r-msg',out).textContent=msg;out.scrollIntoView({behavior:smooth(),block:'nearest'})};

// TOOL 1: Fit Check
const fc=$('#fit-check');
if(fc){fc.addEventListener('submit',e=>{e.preventDefault();
  const out=$('#fit-out'),g=k=>{const el=fc.querySelector('[name="'+k+'"]:checked')||fc.elements[k];return el&&el.value!==undefined?el.value:''},num=k=>{const v=parseFloat((fc.elements[k]||{}).value);return isFinite(v)&&v>0&&v<400?Math.round(v):null};
  const L=num('len'),W=num('wid'),D=num('door'),chair=g('chair'),step=g('step'),soak=g('soak'),users=g('users');
  if(!chair||!step||!soak||!users){show(out,'Almost there',[],'Answer the four questions about how you bathe, then press the button again.');return}
  const notes=[];let pick;
  if(chair==='wheel'){pick='Roll-in (barrier-free) shower';notes.push('A wheelchair or rolling shower chair needs a level, curbless entry. Walk-in tubs still require a step and a seated transfer.')}
  else if(step==='no'){pick='Roll-in or low-threshold shower';notes.push('If stepping over even a few inches is hard, a curbless or low-threshold shower avoids the step that every walk-in tub door still has.')}
  else if(soak==='yes'&&chair==='ok'){pick='Walk-in tub';notes.push('You can sit and stand from a chair-height seat and you want to soak, which is exactly what a walk-in tub is built for.')}
  else if(soak==='yes'){pick='Walk-in tub with a wide door, or a tub-shower combo';notes.push('Soaking matters to you, but standing up is harder. Ask about wider doors, a seat at chair height and grab bars placed for your stronger hand.')}
  else{pick='Walk-in or low-threshold shower';notes.push('If you prefer quick showers to baths, a shower is usually easier, faster and lower maintenance than a tub.')}
  if(users==='multi')notes.push('Several people use this bathroom: a handheld shower on a slide bar and a fast-drain option keep it practical for everyone.');
  if(L!==null){if(L>=58)notes.push('A '+L+'-inch space usually fits a full-size 60-inch walk-in tub or a 60-inch shower base, the same footprint as a standard tub.');else if(L>=48)notes.push('A '+L+'-inch space fits many compact walk-in tubs and shower bases. A measurement visit confirms the exact model.');else notes.push('Under 48 inches is tight for most walk-in tubs. A custom-sized shower base is often the better fit.')}
  if(W!==null&&W<28)notes.push('Under 28 inches wide is narrow for most tubs. Ask about narrow models or a shower conversion.');
  if(D!==null){if(D<26)notes.push('A '+D+'-inch doorway is narrow. Many tubs are 26 to 32 inches wide, so we check the path from the driveway to the bathroom before ordering. Shower kits come in panels and fit through narrow doors.');else notes.push('A '+D+'-inch doorway is workable for most delivery paths. We still confirm hallway turns before ordering.')}
  notes.push('Arizona tip: the cold line can run near 100 degrees in summer, and hard water scales jets and heaters. Ask about air jets, a water softener and a fast drain.');
  show(out,pick,notes,'This is a starting point, not a final fit. A free measurement call or photo review confirms the exact model for your bathroom.');
})}

// TOOL 2: Arizona Funding Finder
const ff=$('#fund-finder');
if(ff){ff.addEventListener('submit',e=>{e.preventDefault();
  const out=$('#fund-out'),g=k=>{const el=ff.querySelector('input[name="'+k+'"]:checked');return el?el.value:''};
  const vet=g('vet'),sc=g('sc'),altcs=g('altcs'),aaa=g('aaa'),mc=g('mc');
  if(!vet||!altcs||!aaa||!mc||(vet==='yes'&&!sc)){show(out,'Almost there',[],'Answer each question (choose "Not sure" if you need to), then press the button again.');return}
  const L=[];
  if(vet==='yes'){
    if(sc==='yes50')L.push('VA HISA grant: up to $6,800 lifetime for a service-connected disability or a 50%+ rating. A VA doctor must prescribe the change. If your disability affects mobility, ask about the SAH and SHA housing grants too.');
    else if(sc==='yes')L.push('VA HISA grant: up to $6,800 lifetime because your disability is service-connected. A VA doctor must prescribe the change.');
    else L.push('VA HISA grant: up to $2,000 lifetime for veterans eligible for VA medical care. A VA doctor must prescribe the change.');
    L.push('Arizona VA medical centers: Phoenix (Carl T. Hayden), Tucson (Southern Arizona VA) and Prescott (Bob Stump). Start with your VA primary care team.');
  }
  if(altcs==='yes')L.push('ALTCS (Arizona Medicaid long-term care): home modifications can be covered when your case manager writes them into your service plan. Roll-in and walk-in showers fit that policy far better than walk-in tubs.');
  else if(altcs==='maybe')L.push('Ask AHCCCS whether you qualify for ALTCS. If you do, a roll-in shower can be requested through your case manager.');
  if(aaa==='yes')L.push('Area Agency on Aging help: Region One in Maricopa County (602-264-4357) and the Pima Council on Aging (520-790-7262) run home repair and barrier-removal programs for qualifying adults 60+. Funds are limited and often waitlisted, so call early.');
  if(mc==='yes')L.push('Original Medicare generally does not pay for walk-in tubs or shower conversions. Some Medicare Advantage plans offer limited home-safety benefits, so call the number on your card and ask.');
  if(L.length===0)L.push('Most families pay out of pocket. Ask about supply-only pricing, which lets your own licensed contractor install and can lower the total.');
  L.push('We provide the itemized quote and product specs that VA and agency applications ask for.');
  show(out,'Programs worth checking',L,'Amounts and rules can change, so confirm with each program. VA amounts shown are the current lifetime limits under 38 CFR 17.3105.');
})}
})();
