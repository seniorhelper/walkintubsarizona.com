// HB 2720 casita size floor (walkintubsarizona.com/casita-bathroom-for-aging-parent-arizona/). Runs locally; nothing is sent.
(()=>{'use strict';
const f=document.getElementById('adu-tool'),out=document.getElementById('adu-out');if(!f||!out)return;
f.addEventListener('submit',e=>{e.preventDefault();
 const v=parseFloat(document.getElementById('adu-sqft').value);
 const t=out.querySelector('.r-title'),m=out.querySelector('.r-msg');
 if(!(v>0)){t.textContent='Enter the main home floor area in square feet.';m.textContent='';out.hidden=false;return}
 const a=Math.min(Math.round(v*0.75),1000);
 t.textContent='At least '+a.toLocaleString('en-US')+' square feet';
 m.textContent=(v*0.75<1000?'75% of '+Math.round(v).toLocaleString('en-US')+' sq ft is less than 1,000, so 75% sets the floor.':'75% of your home is more than 1,000 sq ft, so 1,000 sq ft sets the floor.')+' This applies in cities over 75,000 people. A 60-inch turning circle and a 36 x 60 inch roll-in shower fit comfortably in an 8 x 9 foot bathroom.';
 out.hidden=false;});
})();
