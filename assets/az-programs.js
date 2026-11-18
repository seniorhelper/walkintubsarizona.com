// City program finder (walkintubsarizona.com/arizona-city-home-modification-grants/). Runs locally; nothing is sent.
(()=>{'use strict';
const f=document.getElementById('azp-tool'),out=document.getElementById('azp-out');if(!f||!out)return;
const C={
 tucson:['City of Tucson Home Access Program','100% grant, target $15,000 per home (cap $20,000), owner-occupied, 80% of area median income, someone 62+ or disabled. Call 520-837-5346.'],
 chandler:['Chandler Home Modifications Program for Persons with Disabilities','Grant up to $10,000, names shower, sink and toilet changes. Proof of disability, one year of ownership, no reverse mortgage or mobile home. Call 480-782-4323.'],
 glendale:['Glendale accessibility modifications (Habitat for Humanity Central Arizona)','Lists shower, sink and toilet changes and grab bars for homes occupied by persons with disabilities. Call 623-583-2417, ext. 108.'],
 mesa:['Mesa Emergency Rehabilitation Program','On hold as of November 17, 2026. Fill out the interest form so the city contacts you when it reopens. Call 480-644-3208.'],
 gilbert:['Gilbert Emergency and Minor Home Repair Program','Lists ADA modifications and accessibility barriers. Owner-occupied, 80% of area median income, assets under $30,000. Call AZCEND, 480-892-5331.'],
 phoenix:['Phoenix Housing Repair Program','A no-cost, forgivable deferred loan for repairs such as plumbing and electrical. Accessibility is not named, so ask before you count on it. Call 602-534-4444.'],
 other:['Your Area Agency on Aging','Ask which city, county or nonprofit repair programs serve your address. Unincorporated areas such as Green Valley fall under county programs.']};
f.addEventListener('submit',e=>{e.preventDefault();
 const c=(f.querySelector('input[name=city]:checked')||{}).value;
 const hh=[...f.querySelectorAll('input[name=hh]:checked')].map(x=>x.value);
 const t=out.querySelector('.r-title'),l=out.querySelector('.r-list');l.textContent='';
 const add=s=>{const li=document.createElement('li');li.textContent=s;l.appendChild(li)};
 if(!c){t.textContent='Pick where the home is first.';out.hidden=false;return}
 if(hh.includes('altcs')){t.textContent='First call: your ALTCS case manager';add('ALTCS has its own home modification benefit, and Tucson\'s city programs exclude ALTCS recipients.');}
 else{t.textContent='First call: '+C[c][0];add(C[c][1]);}
 if(!hh.includes('own'))add('Most city programs require that you own the home and live in it. If you rent, ask the landlord about a reasonable modification and check the caregiver reimbursement below.');
 if(c==='tucson'&&!hh.includes('age')&&!hh.includes('altcs'))add('Tucson\'s Home Access Program needs someone in the home who is 62 or older or disabled.');
 if(hh.includes('vet'))add('Veterans: ask your VA prosthetics office about HISA, up to $6,800 lifetime for a service-connected condition or $2,000 otherwise.');
 add('Family caregiver? The Arizona Family Caregiver Reimbursement Program may repay 50% of qualifying costs, up to $1,000. Call 888-737-7494.');
 add('Rural address? USDA Section 504 offers grants up to $10,000 for owners 62 and older.');
 out.hidden=false;});
})();
