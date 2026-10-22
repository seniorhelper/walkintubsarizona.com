// Permit question builder (walkintubsarizona.com/blog/arizona-bathroom-remodel-permits/). Runs locally; nothing is sent.
(()=>{'use strict';
const f=document.getElementById('permit-tool'),out=document.getElementById('permit-out');if(!f||!out)return;
const PHX={
 swap:['Replacing an existing plumbing fixture in the same spot','is listed as NOT requiring a permit in Phoenix.'],
 drain:['Moving a drain or relocating the tub or shower','matches "Sinks, toilets or tubs to be added or relocated," which REQUIRES a permit in Phoenix.'],
 elec:['A new circuit for jets, a heater, a heated seat, a fan or lights','matches "Electrical updates/rewires," which REQUIRES a permit in Phoenix.'],
 wall:['Removing or moving a wall, or reframing a doorway','matches "Wall removal and/or relocation," which REQUIRES a permit in Phoenix.'],
 wh:['Replacing the water heater','is listed as NOT requiring a permit in Phoenix when a licensed contractor replaces an existing heater.'],
 gas:['A change to a gas line','matches "Projects involving gas line," which REQUIRES a permit in Phoenix.'],
 soft:['Adding a water softener','is listed as REQUIRING a permit in Phoenix.'],
 minor:['Grab bars, tile, paint or trim','fits "Carpet and tile," "Paint" and "Minor repairs of non-structural items," listed as NOT requiring a permit in Phoenix. Grab bars are not named, so ask if the wall is opened for blocking.']};
const Q={
 swap:'Does replacing my bathtub with a walk-in tub (or shower) on the same drain need a permit?',
 drain:'Does moving the drain, or cutting the slab for a curbless shower, need a plumbing permit and plan review?',
 elec:'Does a new dedicated GFCI circuit for tub jets or a heater need an electrical permit?',
 wall:'Does removing part of a wall or widening the bathroom doorway need a building permit?',
 wh:'Does replacing my water heater with a larger one need a permit here?',
 gas:'Does changing the gas line to my water heater need a permit?',
 soft:'Does adding a water softener need a permit here?',
 minor:'Do grab bars or new blocking inside the wall need a permit?'};
f.addEventListener('submit',e=>{e.preventDefault();
 const w=(f.querySelector('input[name="where"]:checked')||{}).value,jobs=[...f.querySelectorAll('input[name="job"]:checked')].map(i=>i.value);
 const t=out.querySelector('.r-title'),ul=out.querySelector('.r-list'),m=out.querySelector('.r-msg');ul.textContent='';out.hidden=false;
 if(!w||!jobs.length){t.textContent='Almost there';m.textContent='Choose where the home is and tick at least one part of the project, then press the button again.';return}
 const add=s=>{const li=document.createElement('li');li.textContent=s;ul.appendChild(li)};
 if(w==='phx'){t.textContent='What the City of Phoenix guide says';jobs.forEach(j=>add(PHX[j][0]+' '+PHX[j][1]));
  const need=jobs.some(j=>['drain','elec','wall','gas','soft'].includes(j));
  m.textContent=(need?'At least one part of your project is on the permit list, so expect a permit; minor work may get an over-the-counter permit. ':'Your project matches only no-permit lines in the guide. ')+'The guide is from 2011 and is not complete, so confirm with Phoenix Planning and Development at 602-262-7811 or ask your ROC-licensed installer.'}
 else{t.textContent=w==='county'?'Questions for your county building office':'Questions for your city or town building department';
  jobs.forEach(j=>add(Q[j]));add('Is my address inside your jurisdiction, and which inspections will I need?');
  m.textContent=(w==='county'?'Outside city limits, the county decides. Maricopa County and Pima County both handle permits for unincorporated areas. ':'Each Arizona city writes its own rules. ')+'In Phoenix, the guide lists moved fixtures, new circuits, wall changes, gas work and water softeners as permit work, which is a useful benchmark.'}
 out.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'})});
const pb=document.getElementById('permit-print');if(pb)pb.addEventListener('click',()=>window.print());
})();
