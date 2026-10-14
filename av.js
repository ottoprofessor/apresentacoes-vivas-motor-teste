(function(){var F={"noite": "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "neon": "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "papel": "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "coral": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "vidro": "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "jornal": "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&family=Libre+Franklin:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "terminal": "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "pop": "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "neural": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "synth": "https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800;900&family=Rajdhani:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "holo": "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap", "clean": "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap"},R=document.documentElement;function poe(){var t=R.getAttribute('data-tema')||'noite',u=F[t]||F.noite,l=document.getElementById('av-fontes');if(!l){l=document.createElement('link');l.id='av-fontes';l.rel='stylesheet';document.head.appendChild(l);}if(l.href!==u)l.href=u;}poe();if(window.MutationObserver)new MutationObserver(poe).observe(R,{attributes:true,attributeFilter:['data-tema']});})();
/* ==========================================================================
   APRESENTAÇÕES VIVAS · motor
   Navegação, revelação clique a clique, contagens, gráficos, simuladores,
   quiz, cartões que viram, checklist, fundos animados e cenas-metáfora.
   ========================================================================== */
(function(){
  'use strict';
  var D=document,R=D.documentElement;
  var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EMB=window.self!==window.top;
  if(EMB)R.classList.add('embutido');
  var COR=R.getAttribute('data-cor');if(COR&&/^#[0-9a-f]{6}$/i.test(COR)){var rr=parseInt(COR.substr(1,2),16),gg=parseInt(COR.substr(3,2),16),bb=parseInt(COR.substr(5,2),16);
    R.style.setProperty('--ac',COR);R.style.setProperty('--ac-tx',(rr*299+gg*587+bb*114)/1000>150?'#0B0B12':'#FFFFFF');}
  var TOQUE=window.matchMedia('(pointer:coarse)').matches||('ontouchstart' in window&&navigator.maxTouchPoints>0);
  if(TOQUE)R.classList.add('toque');

  /* ---------------- ícones ---------------- */
  var IC={
    seta:'<path d="M5 12h14M13 6l6 6-6 6"/>',
    check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x:'<path d="M6 6l12 12M18 6L6 18"/>',
    mais:'<path d="M12 5v14M5 12h14"/>',
    estrela:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    foguete:'<path d="M12 2.5c3.5 2.5 5 6 5 10.5l-2.5 3h-5L7 13c0-4.5 1.5-8 5-10.5z"/><circle cx="12" cy="9.5" r="1.7"/><path d="M7 13l-3 3.2 3.6.8M17 13l3 3.2-3.6.8M10.5 19.5L12 22l1.5-2.5"/>',
    alvo:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2"/>',
    grafico:'<path d="M4 20h16M7 16v-5M12 16V7M17 16v-8"/>',
    tendencia:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
    pizza:'<path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12z"/><path d="M14.5 2.8a8.5 8.5 0 0 1 6.7 6.7h-6.7z"/>',
    dinheiro:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6.5 9.5v.01M17.5 14.5v.01"/>',
    moeda:'<circle cx="12" cy="12" r="9"/><path d="M14.8 9.2c-.5-1-1.6-1.6-2.8-1.6-1.6 0-2.8.9-2.8 2.1 0 2.9 5.8 1.6 5.8 4.6 0 1.2-1.2 2.2-3 2.2-1.3 0-2.5-.6-3-1.6M12 6v1.6M12 16.4V18"/>',
    cartao:'<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h3"/>',
    porcento:'<path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    pessoas:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14c2.4 0 4 1.5 4.5 4"/>',
    pessoa:'<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.8 3.6-6 7-6s6.2 2.2 7 6"/>',
    relogio:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    calendario:'<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    ideia:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>',
    coracao:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z"/>',
    escudo:'<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
    raio:'<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
    chave:'<circle cx="8" cy="15" r="4"/><path d="M11 12l8.5-8.5M16 7l2.5 2.5M14 9l2 2"/>',
    cadeado:'<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    mensagem:'<path d="M4 5h16v11H9l-5 4z"/>',
    conversa:'<path d="M4 4.5h11v8H8.5L4 16z"/><path d="M17 8.5h3V19l-4.5-3.5H9v-1"/>',
    celular:'<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/>',
    email:'<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    carrinho:'<path d="M3 4h2.5l2.2 11h10.3l2-7.5H6.6"/><circle cx="9.5" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/>',
    loja:'<path d="M4.5 11.5V20h15v-8.5M3 9.5l2-5.5h14l2 5.5"/><path d="M3 9.5c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5M10 20v-4.5h4V20"/>',
    casa:'<path d="M4 10.5L12 4l8 6.5V20H4z"/><path d="M10 20v-6h4v6"/>',
    livro:'<path d="M5 4.5h11a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>',
    formatura:'<path d="M2.5 9.5L12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5V16c1.5 1.6 3.5 2.4 5.5 2.4s4-.8 5.5-2.4v-4.5M21.5 9.5V15"/>',
    trofeu:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H4.5c0 3 1.5 4.5 3.7 4.8M16 6h3.5c0 3-1.5 4.5-3.7 4.8M12 13v4M9.5 17h5v3.5h-5z"/>',
    lupa:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/>',
    engrenagem:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    nuvem:'<path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.2 4.7 4.7 0 0 0 7 18.5z"/>',
    planta:'<path d="M12 21v-9M12 12c0-4 2.5-6.5 7-6.5 0 4.5-2.5 6.5-7 6.5zM12 15c0-3-2-5-6-5 0 3.5 2 5 6 5zM8 21h8"/>',
    mapa:'<path d="M9 4.5L3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5z"/><path d="M9 4.5v13M15 6.5v13"/>',
    bandeira:'<path d="M5 21V4M5 4.5h11l-2 4 2 4H5"/>',
    presente:'<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8.5h14V12M12 8v12.5M12 8c-1.5-3.5-5.5-4-5.5-1.5S10 8 12 8zm0 0c1.5-3.5 5.5-4 5.5-1.5S14 8 12 8z"/>',
    maleta:'<rect x="3" y="7.5" width="18" height="12.5" rx="2"/><path d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3 13h18"/>',
    globo:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    play:'<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
    documento:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    alerta:'<path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5M12 17.5v.01"/>',
    olho:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    robo:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4.8V8M10 16h4M3 12.5v3M21 12.5v3"/><circle cx="12" cy="3.8" r="1.1"/><circle cx="9.5" cy="12.5" r="1.1"/><circle cx="14.5" cy="12.5" r="1.1"/>',
    caminhao:'<path d="M2.5 6.5h11v10h-11zM13.5 10h4.5l3.5 3.5v3h-8"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
    sino:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15zM10 21h4"/>',
    funil:'<path d="M3.5 4.5h17l-6.5 8v6l-4 2v-8z"/>',
    microfone:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    instagram:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7v.01"/>',
    link:'<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
    escada:'<path d="M3 20h5v-5h5v-5h5V5h3"/>',
    ponte:'<path d="M2 15h20M4 15V9M20 15V9M4 9c4 4 12 4 16 0M8 15v-3M12 15v-2.5M16 15v-3"/>'
  };
  function ic(n){return '<span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24">'+(IC[n]||IC.estrela)+'</svg></span>';}
  function iconify(root){[].forEach.call(root.querySelectorAll('i[data-ic]'),function(i){var w=D.createElement('span');w.innerHTML=ic(i.getAttribute('data-ic'));var s=w.firstChild;if(i.className)s.className+=' '+i.className;i.replaceWith(s);});}

  /* ---------------- utilidades ---------------- */
  function cssv(n){return getComputedStyle(R).getPropertyValue(n).trim();}
  function real(v){return (v<0?'-':'')+'R$ '+fmt(Math.abs(v),Math.abs(v)>=1000?0:2);}
  function fmt(v,c){c=c==null?0:c;var s=Math.abs(v).toFixed(c).split('.');s[0]=s[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.');return (v<0?'-':'')+s.join(',');}
  function num(s){if(s==null)return NaN;s=String(s).trim();if(/,\d+$/.test(s))s=s.replace(/\./g,'').replace(',','.');return parseFloat(s);}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function lista(s){if(!s)return [];return (s.indexOf('|')>-1?s.split('|'):s.split(',')).map(function(x){return x.trim();}).filter(Boolean);}
  function pares(s){return lista(s).map(function(x){var i=x.lastIndexOf(':');return i>-1?{r:x.slice(0,i).trim(),v:num(x.slice(i+1))}:{r:x,v:NaN};});}
  function tween(dur,f,fim){if(RM){f(1);if(fim)fim();return;}var t0=performance.now(),done=false;
    function k(){if(done)return;var p=Math.max(0,Math.min(1,(performance.now()-t0)/dur));f(1-Math.pow(1-p,3));if(p<1)requestAnimationFrame(k);else if(!done){done=true;if(fim)fim();}}
    requestAnimationFrame(k);setTimeout(function(){if(!done){done=true;f(1);if(fim)fim();}},dur+400);}
  function cor(i){return ['var(--ac)','var(--c2)','var(--c3)','var(--c4)','var(--tx3)'][i%5];}

  /* ---------------- contagem ---------------- */
  function conta(el){var alvo=num(el.getAttribute('data-conta')),c=+(el.getAttribute('data-casas')||0),pre=el.getAttribute('data-prefixo')||'',suf=el.getAttribute('data-sufixo')||'';
    if(isNaN(alvo))return;tween(1300,function(p){el.textContent=pre+fmt(alvo*p,c)+suf;});}

  /* ---------------- barras ---------------- */
  function montaBarras(el){var d=pares(el.getAttribute('data-valores')),pre=el.getAttribute('data-prefixo')||'',suf=el.getAttribute('data-sufixo')||'',c=+(el.getAttribute('data-casas')||0);
    var mx=Math.max.apply(null,d.map(function(x){return x.v;}));
    el.innerHTML=d.map(function(x){return '<div class="bc'+(x.v===mx?' top':'')+'" data-h="'+(x.v/mx*100)+'"><span class="bv">'+esc(pre+fmt(x.v,c)+suf)+'</span><div class="bb"></div><span class="bl">'+esc(x.r)+'</span></div>';}).join('');
    el.style.marginBottom='calc(var(--u)*3.6)';}
  function animaBarras(el,on){el.classList.toggle('vivo',on);[].forEach.call(el.querySelectorAll('.bc'),function(b,i){var bb=b.querySelector('.bb');bb.style.transitionDelay=on?(i*.09)+'s':'0s';bb.style.height=on?b.getAttribute('data-h')+'%':'0';});}

  /* ---------------- rosca ---------------- */
  function montaRosca(el){var d=pares(el.getAttribute('data-valores')),tot=d.reduce(function(a,x){return a+(x.v||0);},0),suf=el.getAttribute('data-sufixo');suf=suf==null?'%':suf;
    var meio=el.getAttribute('data-centro')||'',sub=el.getAttribute('data-legenda-centro')||'';
    el._d=d;el._t=tot;
    el.innerHTML='<div class="caixa"><div class="anel"></div><div class="meio"><b style="--k:'+Math.min(4.2,22/Math.max(1,meio.length)).toFixed(2)+'">'+esc(meio)+'</b><span>'+esc(sub)+'</span></div></div><ul class="leg">'+
      d.map(function(x,i){return '<li><i style="background:'+cor(i)+'"></i>'+esc(x.r)+'<em>'+esc(fmt(x.v,0)+suf)+'</em></li>';}).join('')+'</ul>';}
  function pintaRosca(el,p){var a=el.querySelector('.anel'),acc=0,st=[];el._d.forEach(function(x,i){var s=acc/el._t*100*p,e=(acc+x.v)/el._t*100*p;acc+=x.v;st.push(cor(i)+' '+s+'% '+e+'%');});
    st.push('var(--sup2) '+(100*p)+'% 100%');a.style.background='conic-gradient('+st.join(',')+')';}

  /* ---------------- simulador ---------------- */
  function montaSim(el){
    var ins=[].slice.call(el.querySelectorAll('input'));if(!ins.length)return;
    var campos=D.createElement('div');campos.className='campos';
    ins.forEach(function(i){if(!i.type||i.type==='text')i.type='range';var lb=D.createElement('label'),top=D.createElement('span');top.className='lv';
      top.innerHTML='<span>'+esc(i.getAttribute('data-rotulo')||i.name)+'</span><b></b>';lb.appendChild(top);lb.appendChild(i);campos.appendChild(lb);i._b=top.querySelector('b');});
    var saida=D.createElement('div');saida.className='saida';
    saida.innerHTML='<small>'+esc(el.getAttribute('data-titulo')||'Resultado')+'</small><output>0</output><span></span>'+(el.getAttribute('data-formula2')?'<em class="r2"><small>'+esc(el.getAttribute('data-titulo2')||'')+'</small> <b></b></em>':'');
    [].slice.call(el.childNodes).forEach(function(n){if(n.nodeType===3)el.removeChild(n);});
    el.innerHTML='';el.appendChild(campos);el.appendChild(saida);
    function mk(fx){try{return new Function(ins.map(function(i){return i.name;}).join(','),'return ('+fx+');');}catch(e){return function(){return NaN;};}}
    var f=mk(el.getAttribute('data-formula')),f2=el.getAttribute('data-formula2')?mk(el.getAttribute('data-formula2')):null;
    function fv(v,i){var t=i.getAttribute('data-formato')||'numero',c=+(i.getAttribute('data-casas')||0);
      return t==='real'?real(v):t==='porcento'?fmt(v,c)+'%':(i.getAttribute('data-prefixo')||'')+fmt(v,c)+(i.getAttribute('data-sufixo')||'');}
    function calc(){var vals=ins.map(function(i){var v=+i.value;i.style.setProperty('--p',((v-i.min)/(i.max-i.min)*100)+'%');i._b.textContent=fv(v,i);return v;});
      var r=f.apply(null,vals),t=el.getAttribute('data-formato')||'numero',c=+(el.getAttribute('data-casas')||0);
      saida.querySelector('output').textContent=isFinite(r)?(t==='real'?real(r):t==='porcento'?fmt(r,c)+'%':(el.getAttribute('data-prefixo')||'')+fmt(r,c)+(el.getAttribute('data-sufixo')||'')):'Confira';
      var tx=el.getAttribute('data-texto')||'';ins.forEach(function(i,k){tx=tx.split('{'+i.name+'}').join(fv(vals[k],i));});saida.querySelector('span').textContent=tx;
      if(f2){var r2=f2.apply(null,vals),t2=el.getAttribute('data-formato2')||t;saida.querySelector('.r2 b').textContent=isFinite(r2)?(t2==='real'?real(r2):t2==='porcento'?fmt(r2,1)+'%':fmt(r2,+(el.getAttribute('data-casas2')||0))+(el.getAttribute('data-sufixo2')||'')):'Confira';}}
    ins.forEach(function(i){i.addEventListener('input',calc);i._ini=i.value;});
    el._reset=function(){ins.forEach(function(i){i.value=i._ini;});calc();};calc();
  }

  /* ---------------- cenas ---------------- */
  function gear(cx,cy,r,n){var p=[],t=r*.2;for(var k=0;k<n*2;k++){var a0=k*Math.PI/n,a1=(k+1)*Math.PI/n,rr=k%2?r-t:r;var m=(a1-a0)*.18;
      p.push((k?'L':'M')+(cx+rr*Math.cos(a0+m)).toFixed(1)+' '+(cy+rr*Math.sin(a0+m)).toFixed(1));p.push('L'+(cx+rr*Math.cos(a1-m)).toFixed(1)+' '+(cy+rr*Math.sin(a1-m)).toFixed(1));}
    return p.join('')+'Z';}
  /* texto em até 2 linhas, centralizado em (x,y) */
  function tl(x,y,str,size,max,st){var w=String(str).split(/\s+/),l=[''];w.forEach(function(p){var c=l[l.length-1];if(c&&(c+' '+p).length>max&&l.length<2)l.push(p);else l[l.length-1]=c?c+' '+p:p;});
    var y0=y-(l.length-1)*size*.56;return '<text x="'+x+'" y="'+y0+'" text-anchor="middle" font-size="'+size+'"'+(st?' style="'+st+'"':'')+'>'+l.map(function(t,i){return '<tspan x="'+x+'" dy="'+(i?size*1.12:0)+'">'+esc(t)+'</tspan>';}).join('')+'</text>';}
  var CENAS={
    dominos:function(el,rot){if(!rot.length)rot=['1','2','3','4','5'];var n=rot.length,w=800,gap=w/(n+1),s='',lw=Math.max(7,Math.min(15,Math.round(gap/12.5)));
      rot.forEach(function(r,i){var h=95+i*(140/Math.max(1,n-1)),x=gap*(i+1)-18,y=250-h;
        s+='<g><rect class="dom" x="'+x+'" y="'+y+'" width="36" height="'+h+'" rx="6" style="fill:'+(i===0?'var(--ac)':i===n-1?'var(--c2)':'var(--sup2)')+';stroke:var(--linha2);stroke-width:2;transition-delay:'+(i*.16)+'s"/>'+
          tl(x+18,292,r,n>4?22:24,lw)+'</g>';});
      el.innerHTML='<svg class="desenho" viewBox="0 0 800 330"><line x1="20" y1="251" x2="780" y2="251" style="stroke:var(--linha2);stroke-width:2"/>'+s+'</svg><span class="dica">clique para derrubar</span>';
      el.addEventListener('click',function(){el.classList.toggle('caiu');});el._reset=function(){el.classList.remove('caiu');};},
    funil:function(el,rot){var d=pares(el.getAttribute('data-rotulos'));if(!d.length)d=[{r:'Visitantes',v:1000},{r:'Interessados',v:300},{r:'Clientes',v:60}];
      var n=d.length,h=300/n,s='';d.forEach(function(x,i){var t=390-i*(290/n),b=390-(i+1)*(290/n)+18,y=10+i*h;
        s+='<g><path class="fx" style="fill:'+cor(i)+';opacity:.92;transition-delay:'+(i*.18)+'s" d="M'+(400-t)+' '+y+'H'+(400+t)+'L'+(400+b)+' '+(y+h-6)+'H'+(400-b)+'Z"/>'+
          '<text x="400" y="'+(y+h/2+10)+'" text-anchor="middle" font-size="'+(n>4?26:30)+'" style="fill:var(--ac-tx)">'+esc(x.r)+(isNaN(x.v)?'':'  ·  '+fmt(x.v,0))+'</text></g>';});
      el.innerHTML='<svg class="desenho" viewBox="0 0 800 320">'+s+'</svg>';},
    balanca:function(el){var e=el.getAttribute('data-esquerda')||'Hoje',dd=el.getAttribute('data-direita')||'Com o novo jeito',lado=(el.getAttribute('data-pende')||'direita')==='esquerda'?-1:1;
      el.innerHTML='<svg class="desenho" viewBox="0 0 800 360"><path d="M400 320V70M320 332h160" style="stroke:var(--tx2);stroke-width:9;stroke-linecap:round"/>'+
        '<g class="braco"><path d="M170 80H630" style="stroke:var(--tx);stroke-width:9;stroke-linecap:round"/><circle cx="400" cy="80" r="13" style="fill:var(--ac)"/>'+
        '<path d="M170 80l-65 110M170 80l65 110M630 80l-65 110M630 80l65 110" style="stroke:var(--linha2);stroke-width:2"/>'+
        '<path d="M90 190h160a80 32 0 0 1-160 0z" style="fill:var(--sup2);stroke:var(--tx3);stroke-width:2"/><path d="M550 190h160a80 32 0 0 1-160 0z" style="fill:color-mix(in srgb,var(--ac) 30%,var(--sup2));stroke:var(--ac);stroke-width:2"/>'+
        tl(170,268,e,30,14)+tl(630,268,dd,30,14,'fill:var(--ac)')+'</g></svg><span class="dica">clique para pesar de novo</span>';
      var b=el.querySelector('.braco');function pesa(){b.style.transformOrigin='400px 80px';b.style.transform='rotate('+(lado*9)+'deg)';}
      el._enter=function(){b.style.transform='none';setTimeout(pesa,700);};el.addEventListener('click',function(){b.style.transform='none';setTimeout(pesa,500);});},
    engrenagens:function(el,rot){if(!rot.length)rot=['Pessoas','Processos','Ferramentas'];var G=[[200,150,110,12,'h'],[365,106,80,9,'a'],[461,187,60,7,'h2']],s='',lg='';
      G.forEach(function(g,i){if(!rot[i])return;s+='<g><path class="eng '+g[4]+'" d="'+gear(g[0],g[1],g[2],g[3])+'" style="fill:'+cor(i)+';opacity:.95"/><circle cx="'+g[0]+'" cy="'+g[1]+'" r="'+(g[2]*.5)+'" style="fill:var(--bg)"/>'+
        '<text x="'+g[0]+'" y="'+(g[1]+g[2]*.2)+'" text-anchor="middle" font-size="'+(g[2]*.55)+'" style="fill:'+cor(i)+'">'+(i+1)+'</text></g>';
        lg+='<span style="--k:'+cor(i)+'"><b>'+(i+1)+'</b>'+esc(rot[i])+'</span>';});
      el.innerHTML='<svg class="desenho" viewBox="70 20 470 290">'+s+'</svg><div class="legenda-cena">'+lg+'</div>';},
    escada:function(el,rot){if(!rot.length)rot=['Começo','Prática','Resultado','Meta'];var n=rot.length,w=640/n,s='';
      rot.forEach(function(r,i){var h=70+i*(190/Math.max(1,n-1)),x=80+i*w;s+='<g><rect class="deg" x="'+x+'" y="'+(300-h)+'" width="'+(w-8)+'" height="'+h+'" rx="6" style="fill:'+(i===n-1?'var(--ac)':'color-mix(in srgb,var(--ac) '+(18+i*14)+'%,var(--sup2))')+';transition-delay:'+(i*.15)+'s"/>'+
        tl(x+w/2-4,300-h+40,r,n>4?21:25,Math.max(7,Math.round(w/15)),'fill:'+(i===n-1?'var(--ac-tx)':'var(--tx)'))+'</g>';});
      var tops=rot.map(function(r,i){return {x:80+i*w+w/2-4,y:300-(70+i*(190/Math.max(1,n-1)))};});
      s+='<g class="boneco"><circle cx="0" cy="-44" r="11" style="fill:var(--tx)"/><path d="M0 -32V-10M0 -10l-9 10M0 -10l9 10M-11 -24h22" style="stroke:var(--tx);stroke-width:5;stroke-linecap:round"/></g>';
      el.innerHTML='<svg class="desenho" viewBox="0 0 800 320"><path d="M60 300H740" style="stroke:var(--linha2);stroke-width:2"/>'+s+'</svg>';
      var bo=el.querySelector('.boneco'),tm=[];function pos(i){bo.style.transform='translate('+tops[i].x+'px,'+tops[i].y+'px)';}
      el._enter=function(){tm.forEach(clearTimeout);tm=[];bo.style.transition='none';pos(0);bo.getBoundingClientRect();bo.style.transition='';tops.forEach(function(t,i){if(i)tm.push(setTimeout(function(){pos(i);},900+i*800));});};},
    alvo:function(el,rot){if(!rot.length)rot=['Todo mundo','Quem tem o problema','Seu cliente'];var s='',n=rot.length;
      rot.forEach(function(r,i){var rr=165-i*(118/n);s+='<circle cx="400" cy="170" r="'+rr+'" style="fill:'+(i===n-1?'var(--ac)':i%2?'var(--sup2)':'color-mix(in srgb,var(--sup2) 60%,var(--bg))')+';stroke:var(--linha2);stroke-width:2"/>';});
      rot.forEach(function(r,i){var rr=165-i*(118/n),nx=165-(i+1)*(118/n);s+=i===n-1?tl(400,176,r,22,10,'fill:var(--ac-tx)'):'<text x="400" y="'+(170-rr+(rr-nx)/2+9)+'" text-anchor="middle" font-size="22" style="fill:var(--tx2)">'+esc(r)+'</text>';});
      s+='<g class="flecha" style="transform:translate(-520px,-90px)"><path d="M400 170L250 115" style="stroke:var(--tx);stroke-width:6;stroke-linecap:round"/><path d="M250 115l-16-22M250 115l-28 4" style="stroke:var(--c3);stroke-width:6;stroke-linecap:round"/><circle cx="400" cy="170" r="6" style="fill:var(--tx)"/></g>';
      el.innerHTML='<svg class="desenho" viewBox="160 0 480 340">'+s+'</svg><span class="dica">clique para acertar de novo</span>';
      var f=el.querySelector('.flecha');function atira(){f.style.transition='none';f.style.transform='translate(-520px,-90px)';f.getBoundingClientRect();f.style.transition='';setTimeout(function(){f.style.transform='none';},60);}
      el._enter=function(){setTimeout(atira,500);};el.addEventListener('click',atira);},
    ponte:function(el,rot){var de=el.getAttribute('data-de')||'Onde você está',para=el.getAttribute('data-para')||'Onde quer chegar';if(!rot.length)rot=['Passo 1','Passo 2','Passo 3'];var n=rot.length,s='',w=420/n;
      rot.forEach(function(r,i){var x=190+i*w;s+='<g><rect class="tabua" x="'+(x+4)+'" y="176" width="'+(w-8)+'" height="24" rx="4" style="fill:'+cor(i)+';transition-delay:'+(.4+i*.35)+'s"/>'+
        tl(x+w/2,i%2?236:142,r,24,Math.max(8,Math.round(w/13)))+'</g>';});
      el.innerHTML='<svg class="desenho" viewBox="0 30 800 290"><path d="M10 180H190V320H10zM610 180H790V320H610z" style="fill:var(--sup2);stroke:var(--linha2);stroke-width:2"/>'+
        tl(100,240,de,25,12)+tl(700,240,para,25,12,'fill:var(--ac)')+
        '<path class="pulsa" d="M700 92v60M700 92l26 12-26 12" style="stroke:var(--ac);stroke-width:4;fill:none"/>'+s+'</svg>';}
  };
  function montaCena(el){var t=el.getAttribute('data-cena');if(CENAS[t])CENAS[t](el,lista(el.getAttribute('data-rotulos')));}

  /* ---------------- fundos animados ---------------- */
  function Fundo(cv,modo){var ctx=cv.getContext('2d'),W,H,dpr,pts=[],run=false,t0=0,mouse=null;
    function size(){dpr=Math.min(2,window.devicePixelRatio||1);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
    function seed(){size();pts=[];var n=modo==='particulas'?70:modo==='neural'?70:58;for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:1+Math.random()*2.2,k:i%3});}
    var gotas=[],pul=[];
    function fr(t){if(!run)return;requestAnimationFrame(fr);var ac=cssv('--ac'),c2=cssv('--c2'),ln=cssv('--linha2');
      if(modo==='matriz'){var fs=Math.max(12,W/70);if(gotas.length!==Math.ceil(W/fs))gotas=[];if(!gotas.length)for(var g0=0;g0<Math.ceil(W/fs);g0++)gotas.push(Math.random()*-50);
        ctx.fillStyle='rgba(3,6,5,.12)';ctx.fillRect(0,0,W,H);ctx.font=fs+'px monospace';for(var q=0;q<gotas.length;q++){var ch='01アイウエオカキクケコABCDEF<>/{}'.charAt(Math.floor(Math.random()*26));ctx.fillStyle=Math.random()<.04?'#fff':ac;ctx.globalAlpha=.55;ctx.fillText(ch,q*fs,gotas[q]*fs);ctx.globalAlpha=1;
          if(gotas[q]*fs>H&&Math.random()>.975)gotas[q]=0;gotas[q]+=.5;}return;}
      ctx.clearRect(0,0,W,H);
      if(modo==='grade'){var hz=H*.8,sol=ctx.createLinearGradient(0,hz-H*.14,0,hz);sol.addColorStop(0,cssv('--c3'));sol.addColorStop(1,ac);ctx.save();ctx.beginPath();ctx.arc(W*.5,hz,H*.13,Math.PI,0);ctx.fillStyle=sol;ctx.globalAlpha=.75;ctx.fill();ctx.globalAlpha=1;
        for(var f0=0;f0<7;f0++){var yy=hz-H*.03-f0*f0*H*.006;ctx.fillStyle=cssv('--bg');ctx.fillRect(0,yy,W,H*.008+f0*.6);}ctx.restore();
        ctx.strokeStyle=c2;ctx.lineWidth=1.4;ctx.shadowColor=c2;ctx.shadowBlur=8;for(var vx=-12;vx<=12;vx++){ctx.beginPath();ctx.moveTo(W/2+vx*W*.02,hz);ctx.lineTo(W/2+vx*W*.16,H);ctx.globalAlpha=.55;ctx.stroke();}
        var off=(t/1400)%1;for(var hy=0;hy<14;hy++){var p0=Math.pow((hy+off)/14,2.2),y2=hz+(H-hz)*p0;ctx.globalAlpha=.25+.5*p0;ctx.beginPath();ctx.moveTo(0,y2);ctx.lineTo(W,y2);ctx.stroke();}ctx.globalAlpha=1;ctx.shadowBlur=0;return;}
      if(modo==='ondas'){for(var j=0;j<6;j++){ctx.beginPath();for(var x=0;x<=W;x+=8){var y=H*(.55+j*.06)+Math.sin(x/W*6+t/1400+j*.7)*H*.05*(1+j*.2);x?ctx.lineTo(x,y):ctx.moveTo(x,y);}
          ctx.strokeStyle=j%2?c2:ac;ctx.globalAlpha=.18+j*.05;ctx.lineWidth=1.5;ctx.stroke();}ctx.globalAlpha=1;return;}
      var R2=Math.pow(Math.min(W,H)*.19,2);
      pts.forEach(function(p){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
        if(mouse){var dx=mouse.x-p.x,dy=mouse.y-p.y;if(dx*dx+dy*dy<R2*1.5){p.x+=dx*.004;p.y+=dy*.004;}}});
      if(modo==='rede'||modo==='neural'){var lk=[];ctx.strokeStyle=ln;for(var a=0;a<pts.length;a++)for(var b=a+1;b<pts.length;b++){var dx=pts[a].x-pts[b].x,dy=pts[a].y-pts[b].y,d=dx*dx+dy*dy;
        if(d<R2){if(modo==='neural'){var gr=ctx.createLinearGradient(pts[a].x,pts[a].y,pts[b].x,pts[b].y);gr.addColorStop(0,ac);gr.addColorStop(1,c2);ctx.strokeStyle=gr;lk.push([pts[a],pts[b]]);}ctx.globalAlpha=(1-d/R2)*(modo==='neural'?.6:.8);ctx.beginPath();ctx.moveTo(pts[a].x,pts[a].y);ctx.lineTo(pts[b].x,pts[b].y);ctx.stroke();}}ctx.globalAlpha=1;
        if(modo==='neural'){if(lk.length&&Math.random()<.3)pul.push({l:lk[(Math.random()*lk.length)|0],p:0});pul=pul.filter(function(o){o.p+=.02;if(o.p>=1)return false;var x=o.l[0].x+(o.l[1].x-o.l[0].x)*o.p,y=o.l[0].y+(o.l[1].y-o.l[0].y)*o.p,gg=ctx.createRadialGradient(x,y,0,x,y,10);gg.addColorStop(0,'#fff');gg.addColorStop(.3,c2);gg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=gg;ctx.beginPath();ctx.arc(x,y,10,0,7);ctx.fill();return true;});}}
      pts.forEach(function(p){ctx.fillStyle=p.k===0?ac:p.k===1?c2:ln;ctx.globalAlpha=modo==='particulas'?.5+.5*Math.sin(t/900+p.x):.9;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fill();});ctx.globalAlpha=1;}
    cv.parentNode.addEventListener('mousemove',function(e){var r=cv.getBoundingClientRect();mouse={x:e.clientX-r.left,y:e.clientY-r.top};});
    cv.parentNode.addEventListener('mouseleave',function(){mouse=null;});
    window.addEventListener('resize',function(){if(run)seed();});
    return {start:function(){if(run||RM)return;run=true;seed();requestAnimationFrame(fr);},stop:function(){run=false;}};}

  /* ==================== EXTRAS: componentes interativos ==================== */
  var UID=0;
  function fv2(v,el,c){var t=el.getAttribute('data-formato');c=c==null?+(el.getAttribute('data-casas')||0):c;
    if(t==='real')return real(v);if(t==='porcento')return fmt(v,c)+'%';return (el.getAttribute('data-prefixo')||'')+fmt(v,c)+(el.getAttribute('data-sufixo')||'');}
  function json(el){var t=el.getAttribute('data-dados');if(!t){var sc=el.querySelector('script');t=sc?sc.textContent:'';}try{return JSON.parse(t);}catch(e){return null;}}

  /* ---------- gráfico de linha (também usado no dashboard) ---------- */
  function GrafLinha(box,rot,series,fmtv){
    var id='l'+(++UID),W=800,H=330,L=64,Rr=28,T=26,B=46,n=rot.length;
    box.innerHTML='<svg class="lsvg" viewBox="0 0 '+W+' '+H+'"><defs>'+series.map(function(s,i){return '<linearGradient id="'+id+i+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:'+cor(i)+';stop-opacity:.32"/><stop offset="1" style="stop-color:'+cor(i)+';stop-opacity:0"/></linearGradient>';}).join('')+
      '</defs><g class="grade"></g>'+series.map(function(s,i){return '<path class="area" fill="url(#'+id+i+')"/><path class="traco" pathLength="1" style="stroke:'+cor(i)+'"/>';}).join('')+
      '<g class="pts"></g><g class="tip" style="opacity:0"><rect rx="8" height="38"/><text y="25" text-anchor="middle"></text></g></svg>'+
      (series.length>1?'<div class="leg-linha">'+series.map(function(s,i){return '<span><i style="background:'+cor(i)+'"></i>'+esc(s.nome||'')+'</span>';}).join('')+'</div>':'');
    var svg=box.querySelector('svg'),cur=series.map(function(s){return s.valores.slice();});
    function X(i){return L+(n<2?0:i*(W-L-Rr)/(n-1));}
    function draw(vals){var mx=0,mn=Infinity;vals.forEach(function(v){v.forEach(function(x){if(x>mx)mx=x;if(x<mn)mn=x;});});mx=mx*1.12||1;
      var p=Math.pow(10,Math.floor(Math.log10(mx)));mx=Math.ceil(mx/p)*p;var lo=mn>mx*.35?Math.floor(mn*.75/p)*p:0;
      var lmax=0;for(var q=0;q<=4;q++)lmax=Math.max(lmax,String(fmtv(lo+(mx-lo)*(1-q/4),true)).length);L=Math.max(64,22+lmax*11);
      function Y(v){return T+(H-T-B)*(1-(v-lo)/(mx-lo));}
      var g='';for(var k=0;k<=4;k++){var y=T+(H-T-B)*k/4;g+='<line x1="'+L+'" x2="'+(W-Rr)+'" y1="'+y+'" y2="'+y+'"/><text x="'+(L-12)+'" y="'+(y+5)+'" text-anchor="end">'+esc(fmtv(lo+(mx-lo)*(1-k/4),true))+'</text>';}
      rot.forEach(function(r,i){g+='<text x="'+X(i)+'" y="'+(H-14)+'" text-anchor="middle">'+esc(r)+'</text>';});
      svg.querySelector('.grade').innerHTML=g;
      var pts='';vals.forEach(function(v,si){var d=v.map(function(x,i){return (i?'L':'M')+X(i).toFixed(1)+' '+Y(x).toFixed(1);}).join('');
        svg.querySelectorAll('.traco')[si].setAttribute('d',d);svg.querySelectorAll('.area')[si].setAttribute('d',d+'L'+X(v.length-1)+' '+(H-B)+'L'+X(0)+' '+(H-B)+'Z');
        v.forEach(function(x,i){pts+='<circle class="pt'+(i===v.length-1?' ult':'')+'" cx="'+X(i)+'" cy="'+Y(x)+'" r="'+(i===v.length-1?7:5)+'" data-s="'+si+'" data-i="'+i+'" style="fill:'+cor(si)+'"/>';});});
      svg.querySelector('.pts').innerHTML=pts;
      [].forEach.call(svg.querySelectorAll('.pt'),function(c){c.addEventListener('pointerenter',dica);c.addEventListener('click',dica);});}
    function dica(e){var c=e.target,s=+c.getAttribute('data-s'),i=+c.getAttribute('data-i'),t=svg.querySelector('.tip'),tx=t.querySelector('text'),rc=t.querySelector('rect');
      tx.textContent=rot[i]+': '+fmtv(cur[s][i]);var w=tx.getComputedTextLength?tx.getComputedTextLength()+28:120;var x=Math.max(w/2,Math.min(W-w/2,+c.getAttribute('cx'))),y=Math.max(4,+c.getAttribute('cy')-54);
      rc.setAttribute('width',w);rc.setAttribute('x',x-w/2);rc.setAttribute('y',y);tx.setAttribute('x',x);tx.setAttribute('y',y+25);t.style.opacity=1;clearTimeout(t._t);t._t=setTimeout(function(){t.style.opacity=0;},2600);}
    draw(cur);
    return {anima:function(on){box.classList.toggle('vivo',false);if(on)setTimeout(function(){box.classList.add('vivo');},60);},
      muda:function(novas,novosRot){if(novosRot&&novosRot.length!==rot.length){rot=novosRot;n=rot.length;cur=novas.map(function(v){return v.slice();});draw(cur);return;}
        if(novosRot)rot=novosRot;var de=cur.map(function(v){return v.slice();});tween(700,function(p){cur=de.map(function(v,si){return v.map(function(x,i){return x+(novas[si][i]-x)*p;});});draw(cur);});}};
  }
  function montaLinha(el){var a=pares(el.getAttribute('data-valores'));if(!a.length)return;var series=[{nome:(el.getAttribute('data-nomes')||'').split('|')[0],valores:a.map(function(x){return x.v;})}];
    var b=pares(el.getAttribute('data-valores2')||'');if(b.length)series.push({nome:(el.getAttribute('data-nomes')||'').split('|')[1]||'',valores:b.map(function(x){return x.v;})});
    el._g=GrafLinha(el,a.map(function(x){return x.r;}),series,function(v,eixo){return fv2(v,el,eixo?0:null);});el._enter=function(){el._g.anima(true);};}

  /* ---------- dashboard com filtros ---------- */
  function montaDash(el){var d=json(el);if(!d)return;var fs=d.filtros||['Todos'],k=0;
    var h='<div class="dash-topo"><b class="dash-tit">'+esc(d.titulo||'')+'</b><div class="dash-filtros">'+fs.map(function(f,i){return '<button data-f="'+i+'"'+(i?'':' class="on"')+'>'+esc(f)+'</button>';}).join('')+'</div></div>';
    h+='<div class="dash-kpis">'+(d.kpis||[]).map(function(x){return '<div class="kpi"><span>'+esc(x.nome)+'</span><b>0</b><em></em></div>';}).join('')+'</div>';
    h+='<div class="dash-corpo"><div class="dash-g"><span class="dash-sub">'+esc((d.grafico||{}).nome||'')+'</span><div class="dash-linha"></div></div>'+
      (d.ranking?'<div class="dash-r"><span class="dash-sub">'+esc(d.ranking.nome||'')+'</span>'+d.ranking.itens.map(function(it){return '<div class="rk"><span>'+esc(it[0])+'</span><i><s></s></i><b></b></div>';}).join('')+'</div>':'')+'</div>';
    el.innerHTML=h;
    function fk(x,v){return (x.prefixo||'')+fmt(v,x.casas||0)+(x.sufixo||'');}
    var g=d.grafico?GrafLinha(el.querySelector('.dash-linha'),d.grafico.rotulos[0],d.grafico.series.map(function(s){return {nome:s.nome,valores:s.valores[0]};}),function(v){return fk(d.grafico,v);}):null;
    var atual=(d.kpis||[]).map(function(){return 0;});
    function aplica(i,anima){k=i;[].forEach.call(el.querySelectorAll('.dash-filtros button'),function(b,j){b.classList.toggle('on',j===i);});
      var de=atual.slice();(d.kpis||[]).forEach(function(x,j){var c=el.querySelectorAll('.kpi')[j],alvo=x.valores[i];
        tween(anima?800:10,function(p){atual[j]=de[j]+(alvo-de[j])*p;c.querySelector('b').textContent=fk(x,atual[j]);});
        var va=x.variacao?x.variacao[i]:null,em=c.querySelector('em');em.textContent=va==null?'':(va>=0?'+':'')+fmt(va,0)+'%';em.className=va==null?'':va>=0?'sobe':'desce';});
      if(g)g.muda(d.grafico.series.map(function(s){return s.valores[i];}),d.grafico.rotulos[i]||d.grafico.rotulos[0]);
      if(d.ranking){var mx=Math.max.apply(null,d.ranking.itens.map(function(it){return it[1][i];}));d.ranking.itens.forEach(function(it,j){var r=el.querySelectorAll('.rk')[j];r.querySelector('s').style.width=(it[1][i]/mx*100)+'%';r.querySelector('b').textContent=(d.ranking.prefixo||'')+fmt(it[1][i],0)+(d.ranking.sufixo||'');});}}
    [].forEach.call(el.querySelectorAll('.dash-filtros button'),function(b){b.addEventListener('click',function(){aplica(+b.getAttribute('data-f'),true);});});
    var ms=+el.getAttribute('data-auto')||0,parou=false;el.addEventListener('pointerdown',function(){parou=true;});
    if(ms)setInterval(function(){var s=el.closest('.slide');if(parou||!s||!s.classList.contains('ativo'))return;aplica((k+1)%fs.length,true);},ms);
    el._enter=function(){parou=false;atual=atual.map(function(){return 0;});aplica(0,true);if(g)g.anima(true);};}

  /* ---------- medidor (arraste o ponteiro) ---------- */
  function montaMedidor(el){var mn=+(el.getAttribute('data-min')||0),mx=+(el.getAttribute('data-max')||100),ini=+(el.getAttribute('data-valor')||50),meta=el.getAttribute('data-meta'),id='m'+(++UID);
    var R=150,cx=200,cy=190;function pt(a,r){return [cx+r*Math.cos(a),cy+r*Math.sin(a)];}
    var a0=pt(Math.PI,R),a1=pt(0,R),arc='M'+a0[0]+' '+a0[1]+'A'+R+' '+R+' 0 0 1 '+a1[0]+' '+a1[1];
    var mk='';if(meta!=null){var am=Math.PI+(+meta-mn)/(mx-mn)*Math.PI,p1=pt(am,R-26),p2=pt(am,R+26);mk='<line class="meta" x1="'+p1[0]+'" y1="'+p1[1]+'" x2="'+p2[0]+'" y2="'+p2[1]+'"/><text class="meta-t" x="'+pt(am,R+44)[0]+'" y="'+pt(am,R+44)[1]+'" text-anchor="middle">meta</text>';}
    el.innerHTML='<svg viewBox="0 0 400 250"><defs><linearGradient id="'+id+'"><stop offset="0" style="stop-color:var(--c2)"/><stop offset="1" style="stop-color:var(--ac)"/></linearGradient></defs>'+
      '<path class="fundo-arco" d="'+arc+'"/><path class="arco" pathLength="1" d="'+arc+'" style="stroke:url(#'+id+')"/>'+mk+
      '<g class="agulha"><path d="M'+cx+' '+(cy-8)+'L'+(cx+R-34)+' '+cy+'L'+cx+' '+(cy+8)+'Z"/><circle cx="'+cx+'" cy="'+cy+'" r="14"/></g>'+
      '<text class="mn" x="'+(cx-R)+'" y="'+(cy+32)+'" text-anchor="middle">'+esc(fv2(mn,el,0))+'</text><text class="mx" x="'+(cx+R)+'" y="'+(cy+32)+'" text-anchor="middle">'+esc(fv2(mx,el,0))+'</text></svg>'+
      '<div class="med-v"><b>0</b><span>'+esc(el.getAttribute('data-rotulo')||'')+'</span></div><span class="dica">arraste o ponteiro</span>';
    var ag=el.querySelector('.agulha'),ar=el.querySelector('.arco'),b=el.querySelector('.med-v b'),v=mn;
    function set(val){v=Math.max(mn,Math.min(mx,val));var p=(v-mn)/(mx-mn);ag.style.transform='rotate('+(180+p*180)+'deg)';ar.style.strokeDashoffset=1-p;b.textContent=fv2(v,el);}
    var svg=el.querySelector('svg'),pega=false;
    function ang(e){var r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*400-cx,y=(e.clientY-r.top)/r.height*250-cy;var a=Math.atan2(y,x);if(a>0)a=x<0?Math.PI:0;return (a+Math.PI)/Math.PI;}
    svg.addEventListener('pointerdown',function(e){pega=true;svg.setPointerCapture(e.pointerId);ag.style.transition='none';ar.style.transition='none';set(mn+ang(e)*(mx-mn));});
    svg.addEventListener('pointermove',function(e){if(pega)set(mn+ang(e)*(mx-mn));});
    svg.addEventListener('pointerup',function(){pega=false;ag.style.transition='';ar.style.transition='';});
    el._enter=function(){ag.style.transition='none';ar.style.transition='none';set(mn);ag.getBoundingClientRect();ag.style.transition='';ar.style.transition='';
      setTimeout(function(){var de=v;tween(1500,function(p){set(de+(ini-de)*p);});},250);};}

  /* ---------- linha do tempo (arraste ou clique no ano) ---------- */
  function montaTempo(el){var ev=lista(el.getAttribute('data-eventos')).map(function(x){var i=x.indexOf(':');return {a:x.slice(0,i).trim(),t:x.slice(i+1).trim()};});if(!ev.length)return;
    el.innerHTML='<div class="tp-ano"><b>'+esc(ev[0].a)+'</b></div><p class="tp-txt"></p><div class="tp-trilho"><i class="tp-fill"></i>'+
      ev.map(function(x,i){return '<button style="left:'+(ev.length<2?0:i/(ev.length-1)*100)+'%" data-i="'+i+'"><span>'+esc(x.a)+'</span></button>';}).join('')+
      '</div><input type="range" min="0" max="'+(ev.length-1)+'" step="0.01" value="0" aria-label="Linha do tempo">';
    var ano=el.querySelector('.tp-ano b'),tx=el.querySelector('.tp-txt'),fill=el.querySelector('.tp-fill'),rg=el.querySelector('input'),k=-1,tm=[];
    function vai(i,deRg){i=Math.max(0,Math.min(ev.length-1,i));fill.style.width=(ev.length<2?100:i/(ev.length-1)*100)+'%';var j=Math.round(i);if(!deRg)rg.value=i;
      [].forEach.call(el.querySelectorAll('.tp-trilho button'),function(b,q){b.classList.toggle('on',q<=j);b.classList.toggle('atual',q===j);});
      if(j!==k){k=j;var n=num(ev[j].a);var de=num(ano.textContent);if(!isNaN(n)&&!isNaN(de)&&String(n)===ev[j].a)tween(500,function(p){ano.textContent=Math.round(de+(n-de)*p);});else ano.textContent=ev[j].a;
        tx.classList.remove('in');void tx.offsetWidth;tx.textContent=ev[j].t;tx.classList.add('in');}}
    rg.addEventListener('input',function(){tm.forEach(clearTimeout);vai(+rg.value,true);});
    rg.addEventListener('change',function(){vai(Math.round(+rg.value));});
    [].forEach.call(el.querySelectorAll('.tp-trilho button'),function(b){b.addEventListener('click',function(){tm.forEach(clearTimeout);vai(+b.getAttribute('data-i'));});});
    el._enter=function(){tm.forEach(clearTimeout);tm=[];k=-1;ano.textContent=ev[0].a;vai(0);ev.forEach(function(x,i){if(i)tm.push(setTimeout(function(){vai(i);},900+i*1600));});};}

  /* ---------- enquete ao vivo ---------- */
  function montaEnquete(el){var op=lista(el.getAttribute('data-opcoes')),v0=lista(el.getAttribute('data-votos')||'').map(Number),v=[];
    el.innerHTML=(el.getAttribute('data-pergunta')?'<p class="enq-p">'+esc(el.getAttribute('data-pergunta'))+'</p>':'')+'<div class="enq-ops">'+op.map(function(o,i){return '<button data-i="'+i+'" style="--k:'+cor(i)+'"><i></i><span>'+esc(o)+'</span><b>0%</b></button>';}).join('')+'</div><span class="enq-tot"></span>';
    function pinta(){var t=v.reduce(function(a,b){return a+b;},0)||1,mx=Math.max.apply(null,v);[].forEach.call(el.querySelectorAll('.enq-ops button'),function(b,i){b.querySelector('i').style.width=(v[i]/t*100)+'%';b.querySelector('b').textContent=Math.round(v[i]/t*100)+'%';b.classList.toggle('lider',v[i]===mx&&mx>0);});
      el.querySelector('.enq-tot').textContent=fmt(v.reduce(function(a,b){return a+b;},0),0)+' votos · toque para votar';}
    [].forEach.call(el.querySelectorAll('.enq-ops button'),function(b){b.addEventListener('click',function(){v[+b.getAttribute('data-i')]++;b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');pinta();});});
    el._enter=function(){v=op.map(function(o,i){return 0;});pinta();setTimeout(function(){v=op.map(function(o,i){return v0[i]||0;});pinta();},300);};}

  /* ---------- ordenar arrastando ---------- */
  function montaOrdenar(el){var it=lista(el.getAttribute('data-itens'));if(it.length<2)return;
    function emb(){var o=it.map(function(x,i){return i;});do{for(var i=o.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=o[i];o[i]=o[j];o[j]=t;}}while(o.every(function(x,i){return x===i;}));return o;}
    el.innerHTML='<ol class="ord-lista"></ol><div class="ord-pe"><button class="ord-ok">Conferir</button><span class="ord-res"></span></div>';
    var ol=el.querySelector('ol'),res=el.querySelector('.ord-res');
    function monta(){ol.innerHTML=emb().map(function(i){return '<li data-c="'+i+'"><span class="alca-o"></span>'+esc(it[i])+'</li>';}).join('');res.textContent='Arraste para pôr na ordem certa';ol.classList.remove('conferido');
      [].forEach.call(ol.children,liga);}
    function liga(li){var y0=0,ativo=false;
      li.addEventListener('pointerdown',function(e){ativo=true;y0=e.clientY;li.setPointerCapture(e.pointerId);li.classList.add('pegando');ol.classList.remove('conferido');});
      li.addEventListener('pointermove',function(e){if(!ativo)return;var dy=e.clientY-y0,nx=li.nextElementSibling,pv=li.previousElementSibling;
        if(nx&&dy>nx.offsetHeight/2+4){ol.insertBefore(nx,li);y0+=nx.offsetHeight+parseFloat(getComputedStyle(ol).rowGap||0);dy=e.clientY-y0;}
        else if(pv&&dy<-(pv.offsetHeight/2+4)){ol.insertBefore(li,pv);y0-=pv.offsetHeight+parseFloat(getComputedStyle(ol).rowGap||0);dy=e.clientY-y0;}
        li.style.transform='translateY('+dy+'px)';});
      function solta(){if(!ativo)return;ativo=false;li.classList.remove('pegando');li.style.transform='';}
      li.addEventListener('pointerup',solta);li.addEventListener('pointercancel',solta);}
    el.querySelector('.ord-ok').addEventListener('click',function(){var c=0;[].forEach.call(ol.children,function(li,i){var ok=+li.getAttribute('data-c')===i;li.classList.toggle('certo',ok);li.classList.toggle('errado',!ok);if(ok)c++;});
      ol.classList.add('conferido');res.textContent=c===it.length?'Tudo certo!':c+' de '+it.length+' no lugar certo';});
    el._reset=monta;}

  /* ---------- terminal que digita ---------- */
  function montaTerminal(el){var ln=lista(el.getAttribute('data-linhas')),tm=[];
    el.innerHTML='<div class="term-barra"><i></i><i></i><i></i><span>'+esc(el.getAttribute('data-titulo')||'terminal')+'</span></div><div class="term-corpo"></div>';
    var c=el.querySelector('.term-corpo');
    el._enter=function(){tm.forEach(clearTimeout);tm=[];c.innerHTML='';var t=200;
      ln.forEach(function(l){var cmd=l.charAt(0)==='$'||l.charAt(0)==='>',txt=cmd?l.slice(1).trim():l,ok=/^ok\b|^\[ok\]/i.test(txt),er=/^erro|^\[erro\]|^alerta/i.test(txt);
        tm.push(setTimeout(function(){var p=D.createElement('p');p.className=cmd?'cmd':ok?'ok':er?'er':'';c.appendChild(p);
          if(cmd&&!RM){var i=0;(function dig(){p.textContent=txt.slice(0,++i);if(i<txt.length)tm.push(setTimeout(dig,28));})();}else p.textContent=txt;c.scrollTop=c.scrollHeight;},t));
        t+=cmd?txt.length*28+420:260;});
      tm.push(setTimeout(function(){var p=D.createElement('p');p.className='cmd cursor';c.appendChild(p);},t));};}

  /* ---------- arraste para comparar ---------- */
  function montaArraste(el){var a=el.querySelector('.antes'),d=el.querySelector('.depois');if(!a||!d)return;
    var ra=a.getAttribute('data-rotulo')||'Antes',rd=d.getAttribute('data-rotulo')||'Depois';
    el.insertAdjacentHTML('beforeend','<span class="arr-tag a">'+esc(ra)+'</span><span class="arr-tag d">'+esc(rd)+'</span><div class="arr-linha"><b><svg viewBox="0 0 24 24"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg></b></div><input type="range" min="0" max="100" value="50" aria-label="Arraste para comparar">');
    var rg=el.querySelector('input');function set(){el.style.setProperty('--corte',rg.value+'%');}rg.addEventListener('input',set);
    el._enter=function(){rg.value=85;set();setTimeout(function(){tween(1200,function(p){rg.value=85-p*35;set();});},500);};}

  /* ---------- números ao vivo ---------- */
  var vivos=[];function montaVivo(el){var b=num(el.getAttribute('data-ao-vivo')),ps=+(el.getAttribute('data-por-segundo')||1),c=+(el.getAttribute('data-casas')||0);
    var o={el:el,v:b,tick:function(){o.v+=ps*(0.4+Math.random()*1.2)/4;el.textContent=fv2(o.v,el,c);}};o.reset=function(){o.v=b;};vivos.push(o);el.textContent=fv2(b,el,c);}
  setInterval(function(){vivos.forEach(function(o){var s=o.el.closest('.slide');if(s&&s.classList.contains('ativo'))o.tick();});},250);

  /* ---------- rede clicável ---------- */
  function montaRede(el){var ns=lista(el.getAttribute('data-nos')),tx=lista(el.getAttribute('data-textos')||''),centro=el.getAttribute('data-centro')||'',n=ns.length,s='',l='',id='r'+(++UID);
    var P=ns.map(function(x,i){var a=-Math.PI/2+i*2*Math.PI/n;return [400+270*Math.cos(a),200+150*Math.sin(a)];});
    P.forEach(function(p,i){var d='M400 200L'+p[0].toFixed(0)+' '+p[1].toFixed(0);l+='<path id="'+id+i+'" class="ligacao" d="'+d+'"/><circle r="5" class="pulso" style="fill:'+cor(i)+'"><animateMotion dur="'+(1.6+i*.23).toFixed(2)+'s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#'+id+i+'"/></animateMotion></circle>';
      s+='<g class="no" data-i="'+i+'" tabindex="0"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="38" style="fill:'+cor(i)+'"/>'+tl(p[0],p[1]+64,ns[i],22,14)+'</g>';});
    el.innerHTML='<svg viewBox="0 0 800 420">'+l+'<g class="nucleo"><circle cx="400" cy="200" r="62"/><circle class="onda" cx="400" cy="200" r="62"/>'+tl(400,207,centro,22,10)+'</g>'+s+'</svg><p class="rede-info">'+(tx.length?'Toque num ponto para saber mais':'')+'</p>';
    var info=el.querySelector('.rede-info');
    [].forEach.call(el.querySelectorAll('.no'),function(g){g.addEventListener('click',function(){var i=+g.getAttribute('data-i');[].forEach.call(el.querySelectorAll('.no'),function(o){o.classList.toggle('sel',o===g);});el.classList.add('focado');
      [].forEach.call(el.querySelectorAll('.ligacao'),function(p,j){p.classList.toggle('sel',j===i);});info.innerHTML='<b>'+esc(ns[i])+'</b> '+esc(tx[i]||'');});});
    el._reset=function(){el.classList.remove('focado');[].forEach.call(el.querySelectorAll('.sel'),function(o){o.classList.remove('sel');});if(tx.length)info.textContent='Toque num ponto para saber mais';};}

  /* ---------- roleta ---------- */
  function montaRoleta(el){var op=lista(el.getAttribute('data-opcoes')),n=op.length,s='',rot=0;if(n<2)return;
    for(var i=0;i<n;i++){var a0=(i/n)*2*Math.PI-Math.PI/2,a1=((i+1)/n)*2*Math.PI-Math.PI/2,am=(a0+a1)/2,r=190;
      s+='<path d="M200 200L'+(200+r*Math.cos(a0)).toFixed(1)+' '+(200+r*Math.sin(a0)).toFixed(1)+'A'+r+' '+r+' 0 0 1 '+(200+r*Math.cos(a1)).toFixed(1)+' '+(200+r*Math.sin(a1)).toFixed(1)+'Z" style="fill:'+cor(i)+'"/>'+
        '<text transform="translate('+(200+118*Math.cos(am)).toFixed(1)+' '+(200+118*Math.sin(am)).toFixed(1)+') rotate('+((am*180/Math.PI)+(Math.cos(am)<-0.01?180:0)).toFixed(1)+')" text-anchor="middle" dy="7">'+esc(op[i].length>14?op[i].slice(0,13)+'.':op[i])+'</text>';}
    el.innerHTML='<div class="rol-caixa"><svg class="rol-roda" viewBox="0 0 400 400">'+s+'<circle cx="200" cy="200" r="34" class="rol-eixo"/></svg><svg class="rol-seta" viewBox="0 0 40 40"><path d="M20 38L6 6h28z"/></svg></div><div class="rol-lado"><button class="rol-gira">Girar</button><p class="rol-res">&nbsp;</p></div>';
    var roda=el.querySelector('.rol-roda'),res=el.querySelector('.rol-res');
    el.querySelector('.rol-gira').addEventListener('click',function(){var k=Math.floor(Math.random()*n),alvo=360-(k+.5)*360/n;rot=rot-(rot%360)+360*5+alvo;res.textContent=' ';res.classList.remove('in');
      roda.style.transform='rotate('+rot+'deg)';setTimeout(function(){res.textContent=op[k];res.classList.add('in');},RM?10:4300);});
    el._reset=function(){res.innerHTML='&nbsp;';res.classList.remove('in');};}

  function montaExtras(R0){
    [].forEach.call(R0.querySelectorAll('.linha[data-valores]'),montaLinha);
    [].forEach.call(R0.querySelectorAll('.dashboard'),montaDash);
    [].forEach.call(R0.querySelectorAll('.medidor'),montaMedidor);
    [].forEach.call(R0.querySelectorAll('.tempo[data-eventos]'),montaTempo);
    [].forEach.call(R0.querySelectorAll('.enquete'),montaEnquete);
    [].forEach.call(R0.querySelectorAll('.ordenar'),montaOrdenar);
    [].forEach.call(R0.querySelectorAll('.terminal'),montaTerminal);
    [].forEach.call(R0.querySelectorAll('.arraste'),montaArraste);
    [].forEach.call(R0.querySelectorAll('[data-ao-vivo]'),montaVivo);
    [].forEach.call(R0.querySelectorAll('.rede[data-nos]'),montaRede);
    [].forEach.call(R0.querySelectorAll('.roleta'),montaRoleta);
  }
  var EXTRA_SEL='.linha,.dashboard,.medidor,.tempo,.enquete,.ordenar,.terminal,.arraste,.rede,.roleta';
  function entraExtras(s){[].forEach.call(s.querySelectorAll(EXTRA_SEL),function(x){if(x._reset)x._reset();if(x._enter)x._enter();});
    vivos.forEach(function(o){if(s.contains(o.el))o.reset();});}
  /* ==================== EXTRAS 2: mais elementos vivos ==================== */
  function px(el){return el.getBoundingClientRect();}

  /* ---------- chat com IA (mensagens + perguntas que a plateia toca) ---------- */
  function montaChat(el){var msgs=lista(el.getAttribute('data-mensagens')),pq=lista(el.getAttribute('data-perguntas')||''),rs=lista(el.getAttribute('data-respostas')||''),tm=[];
    el.innerHTML='<div class="chat-topo"><i></i><b>'+esc(el.getAttribute('data-titulo')||'Assistente de IA')+'</b><span>online</span></div><div class="chat-corpo"></div>'+(pq.length?'<div class="chat-sug">'+pq.map(function(p,i){return '<button data-i="'+i+'">'+esc(p)+'</button>';}).join('')+'</div>':'');
    var c=el.querySelector('.chat-corpo');
    function bolha(quem,txt,dig,cb){var b=D.createElement('div');b.className='msg '+quem;c.appendChild(b);c.scrollTop=c.scrollHeight;
      if(quem==='ia'){b.innerHTML='<span class="digitando"><i></i><i></i><i></i></span>';tm.push(setTimeout(function(){b.textContent='';var i=0;(function d(){b.textContent=txt.slice(0,i+=2);c.scrollTop=c.scrollHeight;if(i<txt.length)tm.push(setTimeout(d,18));else if(cb)cb();})();},RM?0:850));}
      else{b.textContent=txt;if(cb)tm.push(setTimeout(cb,300));}}
    function roda(list,i){if(i>=list.length)return;var m=list[i],k=m.indexOf(':'),q=m.slice(0,k).trim().toLowerCase(),t=m.slice(k+1).trim();bolha(q==='ia'?'ia':'eu',t,true,function(){tm.push(setTimeout(function(){roda(list,i+1);},500));});}
    [].forEach.call(el.querySelectorAll('.chat-sug button'),function(b){b.addEventListener('click',function(){var i=+b.getAttribute('data-i');b.disabled=true;bolha('eu',pq[i],false,function(){bolha('ia',rs[i]||'...',true);});});});
    el._enter=function(){tm.forEach(clearTimeout);tm=[];c.innerHTML='';[].forEach.call(el.querySelectorAll('.chat-sug button'),function(b){b.disabled=false;});tm.push(setTimeout(function(){roda(msgs,0);},400));};}

  /* ---------- globo 3D (arraste para girar) ---------- */
  function montaGlobo(el){var pts=lista(el.getAttribute('data-pontos')).map(function(x){var p=x.split(':');return {n:p[0],la:+p[1]*Math.PI/180,lo:+p[2]*Math.PI/180};});
    el.innerHTML='<canvas></canvas>';var cv=el.querySelector('canvas'),ctx=cv.getContext('2d'),W,H,dpr,R0,run=false,arr=null,vx=0,vy=0;
    /* começa virado para o ponto de origem */
    var rot=pts.length?-pts[0].lo:0,inc=pts.length?-pts[0].la*.6:-.3,vel=RM?0:.0022;
    function size(){dpr=Math.min(2,window.devicePixelRatio||1);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);R0=Math.min(W,H)*.4;}
    function proj(v){var x=v[0]*Math.cos(rot)+v[2]*Math.sin(rot),z=-v[0]*Math.sin(rot)+v[2]*Math.cos(rot),y=v[1];
      var y2=y*Math.cos(inc)+z*Math.sin(inc),z2=-y*Math.sin(inc)+z*Math.cos(inc);return [W/2+x*R0,H/2-y2*R0,z2];}
    function geo(la,lo){return [Math.cos(la)*Math.sin(lo),Math.sin(la),Math.cos(la)*Math.cos(lo)];}
    function linha(f,n,cor,larg){var ant=null;ctx.strokeStyle=cor;ctx.lineWidth=larg;for(var k=0;k<=n;k++){var q=proj(f(k/n));if(q[2]>0&&ant&&ant[2]>0){ctx.beginPath();ctx.moveTo(ant[0],ant[1]);ctx.lineTo(q[0],q[1]);ctx.stroke();}ant=q;}}
    function pilula(t,x,y,fundo,cor,peso,esq){ctx.font=peso+' '+Math.max(12,Math.round(W/26))+'px '+getComputedStyle(el).fontFamily;var w=ctx.measureText(t).width+16,h=Math.max(22,Math.round(W/16));if(esq)x=x-w;
      x=Math.max(4,Math.min(W-w-4,x));y=Math.max(4,Math.min(H-h-4,y));ctx.fillStyle=fundo;ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x,y,w,h,h/2);else ctx.rect(x,y,w,h);ctx.fill();ctx.fillStyle=cor;ctx.textBaseline='middle';ctx.fillText(t,x+8,y+h/2+1);}
    function fr(t){if(!run)return;requestAnimationFrame(fr);
      if(!arr){rot+=vel+vx;inc=Math.max(-1.1,Math.min(1.1,inc+vy));vx*=.94;vy*=.94;}
      var ac=cssv('--ac'),c2=cssv('--c2'),tx=cssv('--tx'),sup=cssv('--sup')||'#222',bg=cssv('--bg')||'#000',ln=cssv('--linha2')||'rgba(127,127,127,.3)';
      ctx.clearRect(0,0,W,H);
      /* esfera: fundo suave e borda fina */
      var g=ctx.createRadialGradient(W/2-R0*.35,H/2-R0*.4,R0*.1,W/2,H/2,R0);g.addColorStop(0,sup);g.addColorStop(1,bg);
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(W/2,H/2,R0,0,7);ctx.fill();ctx.strokeStyle=ln;ctx.lineWidth=1.2;ctx.stroke();
      /* grade discreta: paralelos e meridianos de 30 em 30 graus */
      ctx.globalAlpha=.55;
      for(var la=-60;la<=60;la+=30)(function(L){linha(function(u){return geo(L,u*2*Math.PI);},64,ln,1);})(la*Math.PI/180);
      for(var lo=0;lo<180;lo+=30)(function(Lo){linha(function(u){var a=u*2*Math.PI;return [Math.sin(a)*Math.sin(Lo),Math.cos(a),Math.sin(a)*Math.cos(Lo)];},64,ln,1);})(lo*Math.PI/180);
      ctx.globalAlpha=1;
      if(!pts.length)return;
      var A=geo(pts[0].la,pts[0].lo);
      /* arcos da origem até cada destino, com um ponto viajando (presos dentro da esfera) */
      ctx.save();ctx.beginPath();ctx.arc(W/2,H/2,R0,0,7);ctx.clip();
      for(var k=1;k<pts.length;k++){var B=geo(pts[k].la,pts[k].lo);
        var arco=function(u){var m=[A[0]+(B[0]-A[0])*u,A[1]+(B[1]-A[1])*u,A[2]+(B[2]-A[2])*u],L=Math.hypot(m[0],m[1],m[2])||1,h=1+.08*Math.sin(Math.PI*u);return [m[0]/L*h,m[1]/L*h,m[2]/L*h];};
        linha(arco,48,c2,2.4);
        var ph=((t/2200)+k*.27)%1,q=proj(arco(ph));if(q[2]>0){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(q[0],q[1],3.4,0,7);ctx.fill();}}
      ctx.restore();
      /* destinos */
      for(var d=1;d<pts.length;d++){var p=proj(geo(pts[d].la,pts[d].lo));if(p[2]<.05)continue;ctx.globalAlpha=Math.min(1,p[2]*2.5);
        ctx.fillStyle=c2;ctx.beginPath();ctx.arc(p[0],p[1],5.5,0,7);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();
        var dir=p[0]<W/2;pilula(pts[d].n,dir?p[0]-9:p[0]+9,p[1]-12,'rgba(10,12,20,.78)','#fff','700',dir);ctx.globalAlpha=1;}
      /* origem: maior, com anel pulsando e etiqueta de destaque */
      var o=proj(A);if(o[2]>-.05){var pul=(t/1400)%1;ctx.globalAlpha=Math.min(1,(o[2]+.05)*3);
        ctx.strokeStyle=ac;ctx.lineWidth=2;ctx.globalAlpha*=1-pul;ctx.beginPath();ctx.arc(o[0],o[1],8+pul*16,0,7);ctx.stroke();ctx.globalAlpha=Math.min(1,(o[2]+.05)*3);
        ctx.fillStyle=ac;ctx.beginPath();ctx.arc(o[0],o[1],8,0,7);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.5;ctx.stroke();
        var oe=o[0]<W/2;pilula(pts[0].n,oe?o[0]-14:o[0]+14,o[1]+10,ac,cssv('--ac-tx')||'#fff','800',oe);ctx.globalAlpha=1;}}
    /* arraste: o globo acompanha o dedo, para os lados e para cima e para baixo */
    var ult=null;
    cv.addEventListener('pointerdown',function(e){arr=true;ult={x:e.clientX,y:e.clientY};vx=vy=0;cv.setPointerCapture(e.pointerId);cv.style.cursor='grabbing';});
    cv.addEventListener('pointermove',function(e){if(!arr)return;var dx=e.clientX-ult.x,dy=e.clientY-ult.y;ult={x:e.clientX,y:e.clientY};
      var k=1/(R0||100);rot+=dx*k;inc=Math.max(-1.1,Math.min(1.1,inc-dy*k));vx=dx*k*.5;vy=-dy*k*.5;});
    function solta(){arr=null;cv.style.cursor='';}cv.addEventListener('pointerup',solta);cv.addEventListener('pointercancel',solta);
    el._enter=function(){size();if(!run){run=true;requestAnimationFrame(fr);}};el._sai=function(){run=false;};window.addEventListener('resize',function(){if(run)size();});}

  /* ---------- nuvem de palavras (toque para destacar) ---------- */
  function montaNuvem(el){var ps=pares(el.getAttribute('data-palavras')),tx=lista(el.getAttribute('data-textos')||'');var mx=Math.max.apply(null,ps.map(function(p){return isNaN(p.v)?1:p.v;}));
    el.innerHTML='<div class="nv-area">'+ps.map(function(p,i){var w=isNaN(p.v)?1:p.v;return '<button style="--k:'+cor(i)+';font-size:calc(var(--u)*'+(1.6+3.6*w/mx).toFixed(2)+');animation-delay:'+(i*.07).toFixed(2)+'s" data-i="'+i+'">'+esc(p.r)+'</button>';}).join('')+'</div><p class="nv-info"></p>';
    var area=el.querySelector('.nv-area'),bs=[].slice.call(area.children),info=el.querySelector('.nv-info');
    function arruma(){var W=area.clientWidth,H=area.clientHeight;if(!W)return;var feitos=[];bs.forEach(function(b,i){var w=b.offsetWidth,h=b.offsetHeight,a=0,r=0,x,y,ok;
      do{x=W/2+r*Math.cos(a)*1.6-w/2;y=H/2+r*Math.sin(a)-h/2;ok=feitos.every(function(f){return x+w<f[0]||x>f[0]+f[2]||y+h<f[1]||y>f[1]+f[3];})&&x>0&&y>0&&x+w<W&&y+h<H;a+=.35;r+=1.1;}while(!ok&&r<Math.max(W,H));
      feitos.push([x-4,y-2,w+8,h+4]);b.style.left=x+'px';b.style.top=y+'px';});}
    bs.forEach(function(b){b.addEventListener('click',function(){var i=+b.getAttribute('data-i');el.classList.add('foco');bs.forEach(function(o){o.classList.toggle('sel',o===b);});info.innerHTML='<b>'+esc(ps[i].r)+'</b> '+esc(tx[i]||'');});});
    el._enter=function(){el.classList.remove('foco');bs.forEach(function(o){o.classList.remove('sel');});info.textContent=tx.length?'Toque numa palavra':'';setTimeout(arruma,30);setTimeout(arruma,700);if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){setTimeout(arruma,20);});};
    window.addEventListener('resize',function(){if(el.closest('.slide').classList.contains('ativo'))arruma();});}

  /* ---------- quadro kanban (arraste os cartões) ---------- */
  function montaKanban(el){var cols=lista(el.getAttribute('data-colunas')),cs=lista(el.getAttribute('data-cartoes')).map(function(x){var i=x.indexOf(':');return {c:x.slice(0,i).trim(),t:x.slice(i+1).trim()};});
    function monta(){el.innerHTML=cols.map(function(c,i){return '<div class="kb-col" data-c="'+esc(c)+'" style="--k:'+cor(i)+'"><div class="kb-tit"><b>'+esc(c)+'</b><span>0</span></div><div class="kb-lista">'+cs.filter(function(x){return x.c===c;}).map(function(x){return '<div class="kb-card">'+esc(x.t)+'</div>';}).join('')+'</div></div>';}).join('');conta();[].forEach.call(el.querySelectorAll('.kb-card'),liga);}
    function conta(){[].forEach.call(el.querySelectorAll('.kb-col'),function(c){c.querySelector('.kb-tit span').textContent=c.querySelectorAll('.kb-card').length;});}
    function liga(cd){cd.addEventListener('pointerdown',function(e){var r=px(cd),ox=e.clientX-r.left,oy=e.clientY-r.top,fant=cd.cloneNode(true);fant.className='kb-card fantasma';fant.style.width=r.width+'px';D.body.appendChild(fant);cd.classList.add('saindo');
        function mv(ev){fant.style.left=(ev.clientX-ox)+'px';fant.style.top=(ev.clientY-oy)+'px';[].forEach.call(el.querySelectorAll('.kb-col'),function(c){var q=px(c);c.classList.toggle('alvo',ev.clientX>q.left&&ev.clientX<q.right&&ev.clientY>q.top&&ev.clientY<q.bottom);});}
        function up(ev){D.removeEventListener('pointermove',mv);D.removeEventListener('pointerup',up);var alvo=el.querySelector('.kb-col.alvo');if(alvo){alvo.querySelector('.kb-lista').appendChild(cd);alvo.classList.remove('alvo');cd.classList.add('caiu');setTimeout(function(){cd.classList.remove('caiu');},500);}
          cd.classList.remove('saindo');fant.remove();conta();}
        mv(e);D.addEventListener('pointermove',mv);D.addEventListener('pointerup',up);e.preventDefault();});}
    el._reset=monta;}

  /* ---------- barras de metas ---------- */
  function montaMetas(el){var ms=lista(el.getAttribute('data-metas')).map(function(x){var p=x.split(':');return {n:p[0],v:num(p[1]),m:num(p[2])};});
    el.innerHTML=ms.map(function(m,i){return '<div class="mt" style="--k:'+cor(i)+'"><div class="mt-top"><b>'+esc(m.n)+'</b><span><em>0</em> de '+esc(fv2(m.m,el))+'</span></div><div class="mt-barra"><i></i><s class="mt-marca"></s></div><small></small></div>';}).join('');
    el._enter=function(){[].forEach.call(el.querySelectorAll('.mt'),function(d,i){var m=ms[i],p=m.v/m.m,b=d.querySelector('i');b.style.width='0';d.classList.remove('bateu');
      setTimeout(function(){b.style.width=Math.min(100,p*100)+'%';tween(1300,function(q){d.querySelector('em').textContent=fv2(m.v*q,el);});d.querySelector('small').textContent=p>=1?'Meta batida: '+fmt(p*100,0)+'%':'Faltam '+fv2(m.m-m.v,el);if(p>=1)setTimeout(function(){d.classList.add('bateu');},1300);},200+i*220);});};}

  /* ---------- raspadinha (raspe para revelar) ---------- */
  function montaRaspa(el){var cv=D.createElement('canvas');cv.className='rp-capa';el.appendChild(cv);var ctx=cv.getContext('2d'),W,H,limpo=false,risc=false;
    function pinta(){var r=px(el);W=r.width;H=r.height;var d=Math.min(2,window.devicePixelRatio||1);cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);ctx.globalCompositeOperation='source-over';
      var g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,cssv('--c3')||'#999');g.addColorStop(.5,cssv('--ac'));g.addColorStop(1,cssv('--c2'));ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
      for(var i=0;i<140;i++){ctx.fillStyle='rgba(255,255,255,'+(Math.random()*.25)+')';ctx.fillRect(Math.random()*W,Math.random()*H,2,2);}
      ctx.fillStyle=cssv('--ac-tx');ctx.font='700 '+Math.round(W/16)+'px '+getComputedStyle(el).fontFamily;ctx.textAlign='center';ctx.fillText(el.getAttribute('data-capa')||'Raspe aqui',W/2,H/2+W/48);
      cv.style.opacity=1;limpo=false;}
    var ult=null,conta=0;cv.style.touchAction='none';
    function raspa(e){var r=px(cv),pts=e.getCoalescedEvents?e.getCoalescedEvents():[];if(!pts.length)pts=[e];ctx.globalCompositeOperation='destination-out';ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=Math.max(34,W/7);
      pts.forEach(function(p){var x=p.clientX-r.left,y=p.clientY-r.top;ctx.beginPath();if(ult){ctx.moveTo(ult[0],ult[1]);ctx.lineTo(x,y);}else{ctx.moveTo(x,y);ctx.lineTo(x+.1,y);}ctx.stroke();ult=[x,y];});if(++conta%12===0)confere();}
    function confere(){if(limpo)return;var d=ctx.getImageData(0,0,cv.width,cv.height).data,n=0,t=0;for(var i=3;i<d.length;i+=64){t++;if(d[i]<20)n++;}if(n/t>.4){limpo=true;cv.style.opacity=0;}}
    cv.addEventListener('pointerdown',function(e){e.preventDefault();risc=true;ult=null;cv.setPointerCapture(e.pointerId);raspa(e);});cv.addEventListener('pointermove',function(e){if(risc)raspa(e);});
    cv.addEventListener('pointerup',function(){risc=false;ult=null;confere();});cv.addEventListener('pointercancel',function(){risc=false;ult=null;});
    el._enter=function(){setTimeout(pinta,60);};}

  /* ---------- contagem regressiva ---------- */
  var regs=[];function montaContagem(el){var seg=+(el.getAttribute('data-segundos')||3600),ate=el.getAttribute('data-ate'),o={el:el,fim:0};
    el.innerHTML=['dias','horas','min','seg'].map(function(n){return '<div class="cg"><b>00</b><span>'+n+'</span></div>';}).join('');
    o.reset=function(){o.fim=ate?new Date(ate).getTime():Date.now()+seg*1000;};
    o.tick=function(){var s=Math.max(0,Math.floor((o.fim-Date.now())/1000)),v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
      [].forEach.call(el.querySelectorAll('.cg b'),function(b,i){var t=('0'+v[i]).slice(-2);if(b.textContent!==t){b.textContent=t;b.classList.remove('vira');void b.offsetWidth;b.classList.add('vira');}});};
    o.reset();regs.push(o);el._enter=function(){o.reset();o.tick();};}
  setInterval(function(){regs.forEach(function(o){var s=o.el.closest('.slide');if(s&&s.classList.contains('ativo'))o.tick();});},1000);

  /* ---------- cartão 3D que acompanha o dedo ---------- */
  function montaTilt(el){var brilho=D.createElement('span');brilho.className='tilt-brilho';el.appendChild(brilho);
    function mv(e){var r=px(el),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='perspective(900px) rotateY('+(x*22)+'deg) rotateX('+(-y*22)+'deg) scale(1.03)';brilho.style.background='radial-gradient(circle at '+((x+.5)*100)+'% '+((y+.5)*100)+'%,rgba(255,255,255,.45),transparent 55%)';}
    el.addEventListener('pointermove',mv);el.addEventListener('pointerleave',function(){el.style.transform='';brilho.style.background='';});}

  /* ---------- radar (arraste os pontos) ---------- */
  function montaRadar(el){var ex=lista(el.getAttribute('data-eixos')),v1=lista(el.getAttribute('data-valores')).map(Number),v2=lista(el.getAttribute('data-valores2')||'').map(Number),mx=+(el.getAttribute('data-max')||10),n=ex.length,R=150,cx=250,cy=200,cur=v1.slice();
    var nomes=(el.getAttribute('data-nomes')||'Hoje|Meta').split('|');
    function P(i,v){var a=-Math.PI/2+i*2*Math.PI/n;return [cx+R*v/mx*Math.cos(a),cy+R*v/mx*Math.sin(a)];}
    var g='';for(var k=1;k<=4;k++){g+='<polygon class="rd-anel" points="'+ex.map(function(e,i){return P(i,mx*k/4).join(',');}).join(' ')+'"/>';}
    ex.forEach(function(e,i){var p=P(i,mx),q=P(i,mx*1.2);g+='<line class="rd-eixo" x1="'+cx+'" y1="'+cy+'" x2="'+p[0]+'" y2="'+p[1]+'"/>'+tl(q[0],q[1]+6,e,17,12);});
    el.innerHTML='<svg viewBox="0 0 500 400">'+g+(v2.length?'<polygon class="rd-b" points="'+v2.map(function(v,i){return P(i,v).join(',');}).join(' ')+'"/>':'')+'<polygon class="rd-a"/>'+ex.map(function(e,i){return '<circle class="rd-p" r="10" data-i="'+i+'"/>';}).join('')+'</svg>'+
      '<div class="leg-linha"><span><i style="background:var(--ac)"></i>'+esc(nomes[0])+'</span>'+(v2.length?'<span><i style="background:var(--c2)"></i>'+esc(nomes[1]||'')+'</span>':'')+'</div><span class="dica">arraste os pontos</span>';
    var svg=el.querySelector('svg'),pol=el.querySelector('.rd-a'),cs=el.querySelectorAll('.rd-p');
    function draw(vals){pol.setAttribute('points',vals.map(function(v,i){return P(i,v).join(',');}).join(' '));[].forEach.call(cs,function(c,i){var p=P(i,vals[i]);c.setAttribute('cx',p[0]);c.setAttribute('cy',p[1]);});}
    var ativo=-1;[].forEach.call(cs,function(c){c.addEventListener('pointerdown',function(e){ativo=+c.getAttribute('data-i');svg.setPointerCapture(e.pointerId);e.stopPropagation();});});
    svg.addEventListener('pointermove',function(e){if(ativo<0)return;var r=px(svg),x=(e.clientX-r.left)/r.width*500-cx,y=(e.clientY-r.top)/r.height*400-cy,a=-Math.PI/2+ativo*2*Math.PI/n,d=x*Math.cos(a)+y*Math.sin(a);cur[ativo]=Math.max(0,Math.min(mx,Math.round(d/R*mx*2)/2));draw(cur);});
    svg.addEventListener('pointerup',function(){ativo=-1;});
    el._enter=function(){var z=v1.map(function(){return 0;});tween(1100,function(p){cur=v1.map(function(v){return v*p;});draw(cur);});};draw(cur);}

  /* ---------- bolhas (posição e tamanho) ---------- */
  function montaBolhas(el){var ps=lista(el.getAttribute('data-pontos')).map(function(x){var p=x.split(':');return {n:p[0],x:+p[1],y:+p[2],s:+(p[3]||1)};}),W=600,H=380,L=60,B=50,T=20,Rr=20;
    var mxs=Math.max.apply(null,ps.map(function(p){return p.s;}));
    function X(v){return L+(W-L-Rr)*v/10;}function Y(v){return T+(H-T-B)*(1-v/10);}
    var s='<line class="bl-eixo" x1="'+L+'" y1="'+(H-B)+'" x2="'+(W-Rr)+'" y2="'+(H-B)+'"/><line class="bl-eixo" x1="'+L+'" y1="'+T+'" x2="'+L+'" y2="'+(H-B)+'"/>'+
      '<text class="bl-t" x="'+(W-Rr)+'" y="'+(H-14)+'" text-anchor="end">'+esc(el.getAttribute('data-eixo-x')||'')+' →</text><text class="bl-t" x="'+(L-14)+'" y="'+(T+10)+'" text-anchor="end" transform="rotate(-90 '+(L-14)+' '+(T+10)+')">'+esc(el.getAttribute('data-eixo-y')||'')+' →</text>';
    ps.forEach(function(p,i){var r=14+30*Math.sqrt(p.s/mxs);s+='<g class="bl-b" data-i="'+i+'" style="--d:'+(i*.12)+'s"><circle cx="'+X(p.x)+'" cy="'+Y(p.y)+'" r="'+r+'" style="fill:'+cor(i)+'"/>'+tl(X(p.x),Y(p.y)+5,p.n,15,10)+'</g>';});
    el.innerHTML='<svg viewBox="0 0 '+W+' '+H+'">'+s+'</svg><p class="bl-info">Toque numa bolha</p>';var info=el.querySelector('.bl-info');
    [].forEach.call(el.querySelectorAll('.bl-b'),function(g){g.addEventListener('click',function(){var p=ps[+g.getAttribute('data-i')];[].forEach.call(el.querySelectorAll('.bl-b'),function(o){o.classList.toggle('sel',o===g);});el.classList.add('foco');
      info.innerHTML='<b>'+esc(p.n)+'</b> '+esc(el.getAttribute('data-eixo-x')||'x')+' '+fmt(p.x,1)+' · '+esc(el.getAttribute('data-eixo-y')||'y')+' '+fmt(p.y,1);});});
    el._reset=function(){el.classList.remove('foco');[].forEach.call(el.querySelectorAll('.sel'),function(o){o.classList.remove('sel');});info.textContent='Toque numa bolha';};}

  /* ---------- abas ---------- */
  function montaGuias(el){var ps=[].slice.call(el.children).filter(function(c){return c.hasAttribute('data-aba');});if(!ps.length)return;
    var bar=D.createElement('div');bar.className='gu-bar';bar.innerHTML=ps.map(function(p,i){return '<button data-i="'+i+'">'+esc(p.getAttribute('data-aba'))+'</button>';}).join('')+'<i class="gu-ind"></i>';el.insertBefore(bar,el.firstChild);
    var ind=bar.querySelector('.gu-ind');function vai(i){ps.forEach(function(p,k){p.classList.toggle('on',k===i);});[].forEach.call(bar.querySelectorAll('button'),function(b,k){b.classList.toggle('on',k===i);if(k===i){ind.style.left=b.offsetLeft+'px';ind.style.width=b.offsetWidth+'px';}});
      var cs=ps[i].querySelectorAll('[data-conta]');[].forEach.call(cs,conta);[].forEach.call(ps[i].querySelectorAll('.barras'),function(b){animaBarras(b,false);setTimeout(function(){animaBarras(b,true);},60);});}
    [].forEach.call(bar.querySelectorAll('button'),function(b){b.addEventListener('click',function(){vai(+b.getAttribute('data-i'));});});
    el._enter=function(){setTimeout(function(){vai(0);},30);};}

  /* ---------- matriz 2x2 (arraste para os quadrantes) ---------- */
  function montaMatriz(el){var qs=lista(el.getAttribute('data-quadrantes')),its=lista(el.getAttribute('data-itens'));
    function monta(){el.innerHTML='<div class="mz-grade"><span class="mz-y">'+esc(el.getAttribute('data-eixo-y')||'')+' ↑</span>'+qs.map(function(q,i){return '<div class="mz-q" style="--k:'+cor(i)+'"><b>'+esc(q)+'</b></div>';}).join('')+'<span class="mz-x">'+esc(el.getAttribute('data-eixo-x')||'')+' →</span></div><div class="mz-bandeja">'+its.map(function(t){return '<div class="mz-item">'+esc(t)+'</div>';}).join('')+'</div>';
      [].forEach.call(el.querySelectorAll('.mz-item'),liga);}
    function liga(it){it.addEventListener('pointerdown',function(e){var r=px(it),ox=e.clientX-r.left,oy=e.clientY-r.top,f=it.cloneNode(true);f.className='mz-item fantasma';D.body.appendChild(f);it.classList.add('saindo');
      function mv(ev){f.style.left=(ev.clientX-ox)+'px';f.style.top=(ev.clientY-oy)+'px';[].forEach.call(el.querySelectorAll('.mz-q,.mz-bandeja'),function(q){var b=px(q);q.classList.toggle('alvo',ev.clientX>b.left&&ev.clientX<b.right&&ev.clientY>b.top&&ev.clientY<b.bottom);});}
      function up(){D.removeEventListener('pointermove',mv);D.removeEventListener('pointerup',up);var a=el.querySelector('.mz-q.alvo,.mz-bandeja.alvo');if(a){a.appendChild(it);a.classList.remove('alvo');}it.classList.remove('saindo');f.remove();}
      mv(e);D.addEventListener('pointermove',mv);D.addEventListener('pointerup',up);e.preventDefault();});}
    el._reset=monta;}

  /* ---------- planos com mensal / anual ---------- */
  function montaPlanos(el){var ps=lista(el.getAttribute('data-planos')).map(function(x){var p=x.split(':');return {n:p[0],m:num(p[1]),a:num(p[2]),it:(p[3]||'').split(';').map(function(s){return s.trim();}).filter(Boolean)};}),dest=+(el.getAttribute('data-destaque')||-1),anual=false;
    el.innerHTML='<div class="pl-chave"><span>Mensal</span><button aria-label="Trocar entre mensal e anual"><i></i></button><span>Anual <em>'+esc(el.getAttribute('data-desconto')||'')+'</em></span></div><div class="pl-lista">'+
      ps.map(function(p,i){return '<div class="pl'+(i===dest?' dest':'')+'"><b class="pl-n">'+esc(p.n)+'</b><div class="pl-p"><small>R$</small><strong>0</strong><span>/mês</span></div><ul>'+p.it.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div>';}).join('')+'</div>';
    var vals=ps.map(function(){return 0;});
    function pinta(){el.classList.toggle('anual',anual);var de=vals.slice();ps.forEach(function(p,i){var alvo=anual?p.a/12:p.m;tween(600,function(q){vals[i]=de[i]+(alvo-de[i])*q;el.querySelectorAll('.pl strong')[i].textContent=fmt(vals[i],0);});});}
    el.querySelector('.pl-chave button').addEventListener('click',function(){anual=!anual;pinta();});
    el._enter=function(){anual=false;vals=vals.map(function(){return 0;});pinta();};}

  /* ---------- mapa mental (toque para abrir os ramos) ---------- */
  function montaMapa(el){var rs=lista(el.getAttribute('data-ramos')).map(function(x){var i=x.indexOf(':');return {n:(i<0?x:x.slice(0,i)).trim(),f:i<0?[]:x.slice(i+1).split(',').map(function(s){return s.trim();})};}),n=rs.length;
    var h='<svg class="mm-fios" viewBox="0 0 1000 560" preserveAspectRatio="none"></svg><button class="mm-centro">'+esc(el.getAttribute('data-centro')||'')+'</button>';
    var pos=rs.map(function(r,i){var a=-Math.PI/2+i*2*Math.PI/n;return {x:500+300*Math.cos(a),y:280+190*Math.sin(a),a:a};});
    rs.forEach(function(r,i){h+='<button class="mm-ramo" data-i="'+i+'" style="left:'+(pos[i].x/10)+'%;top:'+(pos[i].y/5.6)+'%;--k:'+cor(i)+'">'+esc(r.n)+'</button>';
      r.f.forEach(function(f,j){var a=pos[i].a+(j-(r.f.length-1)/2)*.42,x=500+455*Math.cos(a),y=280+262*Math.sin(a);h+='<span class="mm-folha" data-r="'+i+'" style="left:'+Math.max(6,Math.min(94,x/10))+'%;top:'+Math.max(5,Math.min(95,y/5.6))+'%;--k:'+cor(i)+'">'+esc(f)+'</span>';});});
    el.innerHTML=h+'<span class="dica">toque nos ramos</span>';var sv=el.querySelector('svg');
    function fios(){var l='';rs.forEach(function(r,i){var aberto=el.querySelector('.mm-ramo[data-i="'+i+'"]').classList.contains('aberto');l+='<path class="mm-l" d="M500 280Q'+((500+pos[i].x)/2)+' '+pos[i].y+' '+pos[i].x+' '+pos[i].y+'" style="stroke:'+cor(i)+'"/>';
      if(aberto)r.f.forEach(function(f,j){var a=pos[i].a+(j-(r.f.length-1)/2)*.42;l+='<path class="mm-l f" d="M'+pos[i].x+' '+pos[i].y+'L'+(500+455*Math.cos(a))+' '+(280+262*Math.sin(a))+'" style="stroke:'+cor(i)+'"/>';});});sv.innerHTML=l;}
    [].forEach.call(el.querySelectorAll('.mm-ramo'),function(b){b.addEventListener('click',function(){var i=b.getAttribute('data-i');b.classList.toggle('aberto');[].forEach.call(el.querySelectorAll('.mm-folha[data-r="'+i+'"]'),function(f){f.classList.toggle('on',b.classList.contains('aberto'));});fios();});});
    el.querySelector('.mm-centro').addEventListener('click',function(){var abrir=!el.querySelector('.mm-ramo.aberto');[].forEach.call(el.querySelectorAll('.mm-ramo'),function(b){b.classList.toggle('aberto',abrir);});[].forEach.call(el.querySelectorAll('.mm-folha'),function(f){f.classList.toggle('on',abrir);});fios();});
    el._reset=function(){[].forEach.call(el.querySelectorAll('.aberto,.mm-folha.on'),function(o){o.classList.remove('aberto');o.classList.remove('on');});fios();};fios();}

  /* ---------- cenas novas: órbita e pirâmide ---------- */
  CENAS.orbita=function(el,rot){if(!rot.length)rot=['A','B','C','D'];var n=rot.length,c=el.getAttribute('data-centro')||'',s='';
    var an=[];rot.forEach(function(r,i){var rx=150+i*62,ry=52+i*26;an.push({rx:rx,ry:ry,v:(.5-i*.07)*(i%2?-1:1),a:i*1.7});s+='<ellipse class="orb-anel" cx="400" cy="170" rx="'+rx+'" ry="'+ry+'"/>';});
    rot.forEach(function(r,i){s+='<g class="orb-item"><circle r="22" style="fill:'+cor(i)+'"/><text y="-32" text-anchor="middle" font-size="30">'+esc(r)+'</text></g>';});
    el.innerHTML='<svg class="desenho" viewBox="0 0 800 340">'+s+'<circle class="orb-centro" cx="400" cy="170" r="58"/>'+tl(400,178,c,22,10,'fill:var(--ac-tx)')+'</svg>';
    var its=el.querySelectorAll('.orb-item'),t0=performance.now(),vivo=false;function pos(t){an.forEach(function(o,i){var a=o.a+o.v*(t-t0)/1000;its[i].setAttribute('transform','translate('+(400+o.rx*Math.cos(a)).toFixed(1)+' '+(170+o.ry*Math.sin(a)).toFixed(1)+')');});}
    function loop(t){if(!el.closest('.slide').classList.contains('ativo')){vivo=false;return;}pos(t);requestAnimationFrame(loop);}pos(t0);
    el._enter=function(){if(!vivo&&!RM){vivo=true;requestAnimationFrame(loop);}};};
  CENAS.piramide=function(el,rot){if(!rot.length)rot=['Base','Meio','Topo'];var n=rot.length,s='',h=300/n;
    rot.forEach(function(r,i){var y1=320-i*h,y0=y1-h+6,w1=380*(1-i/n),w0=380*(1-(i+1)/n);s+='<g class="pir" data-i="'+i+'" style="transition-delay:'+(i*.18)+'s"><path d="M'+(400-w1)+' '+y1+'L'+(400+w1)+' '+y1+'L'+(400+w0)+' '+y0+'L'+(400-w0)+' '+y0+'Z" style="fill:'+cor(i)+'"/>'+tl(400,(y0+y1)/2+8,r,i===n-1?20:24,i===n-1?10:22,'fill:var(--ac-tx)')+'</g>';});
    el.innerHTML='<svg class="desenho" viewBox="0 0 800 330">'+s+'</svg><span class="dica">toque numa camada</span>';
    [].forEach.call(el.querySelectorAll('.pir'),function(g){g.addEventListener('click',function(){[].forEach.call(el.querySelectorAll('.pir'),function(o){o.classList.toggle('sel',o===g);});el.classList.add('foco');});});
    el._reset=function(){el.classList.remove('foco');[].forEach.call(el.querySelectorAll('.pir.sel'),function(o){o.classList.remove('sel');});};};

  function montaExtras2(R0){
    [].forEach.call(R0.querySelectorAll('.chat-ia'),montaChat);
    [].forEach.call(R0.querySelectorAll('.globo[data-pontos]'),montaGlobo);
    [].forEach.call(R0.querySelectorAll('.nuvem[data-palavras]'),montaNuvem);
    [].forEach.call(R0.querySelectorAll('.kanban'),montaKanban);
    [].forEach.call(R0.querySelectorAll('.metas'),montaMetas);
    [].forEach.call(R0.querySelectorAll('.raspadinha'),montaRaspa);
    [].forEach.call(R0.querySelectorAll('.contagem'),montaContagem);
    [].forEach.call(R0.querySelectorAll('.tilt'),montaTilt);
    [].forEach.call(R0.querySelectorAll('.radar'),montaRadar);
    [].forEach.call(R0.querySelectorAll('.bolhas'),montaBolhas);
    [].forEach.call(R0.querySelectorAll('.guias'),montaGuias);
    [].forEach.call(R0.querySelectorAll('.matriz'),montaMatriz);
    [].forEach.call(R0.querySelectorAll('.planos'),montaPlanos);
    [].forEach.call(R0.querySelectorAll('.mapa-mental'),montaMapa);
  }
  var EXTRA2_SEL='.chat-ia,.globo,.nuvem,.kanban,.metas,.raspadinha,.contagem,.radar,.bolhas,.guias,.matriz,.planos,.mapa-mental';
  function entraExtras2(s){[].forEach.call(D.querySelectorAll('.globo'),function(g){if(g._sai&&!s.contains(g))g._sai();});
    [].forEach.call(s.querySelectorAll(EXTRA2_SEL),function(x){if(x._reset)x._reset();if(x._enter)x._enter();});}
  /* ==================== EXTRAS 3: símbolos animados, configurador e mão guia ==================== */
  function icg(n,x,y,s,c){return '<g transform="translate('+(x-s/2)+' '+(y-s/2)+') scale('+(s/24)+')" style="fill:none;stroke:'+c+';stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round">'+(IC[n]||IC.estrela)+'</g>';}

  /* conecta: o seu negócio no centro, tudo ligado, dados indo e voltando */
  CENAS.conecta=function(el,rot){if(!rot.length)rot=['Pix','Planilha','WhatsApp','Loja virtual'];var ics=lista(el.getAttribute('data-icones')||'');var n=rot.length,cx=400,cy=210,s='',ns='',id='cn'+(++UID);
    rot.forEach(function(r,i){var a=-Math.PI/2+(i+.5)*2*Math.PI/n,x=cx+300*Math.cos(a),y=cy+165*Math.sin(a),p=id+i;
      s+='<path id="'+p+'" d="M'+cx+' '+cy+'L'+x.toFixed(0)+' '+y.toFixed(0)+'" style="stroke:var(--c2);stroke-width:2.5;stroke-opacity:.55;fill:none"/>'+
        '<circle r="6" style="fill:#fff"><animateMotion dur="1.8s" begin="'+(i*.3)+'s" repeatCount="indefinite"><mpath href="#'+p+'"/></animateMotion></circle>'+
        '<circle r="5.5" style="fill:var(--ac)"><animateMotion dur="1.8s" begin="'+(i*.3+.9)+'s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#'+p+'"/></animateMotion></circle>';
      ns+='<g class="cn-no" style="--d:'+(.15*i)+'s"><circle cx="'+x+'" cy="'+y+'" r="46" style="fill:var(--sup2);stroke:'+cor(i+1)+';stroke-width:3"/>'+icg(ics[i]||'estrela',x,y,38,cor(i+1))+tl(x,y+(y>cy?78:-62),r,24,14)+'</g>';});
    el.innerHTML='<svg class="desenho" viewBox="0 0 800 420">'+s+ns+'<circle cx="'+cx+'" cy="'+cy+'" r="72" style="fill:var(--ac)"/><circle class="anel-pulsa" cx="'+cx+'" cy="'+cy+'" r="72" style="fill:none;stroke:var(--ac);stroke-width:3"/>'+icg(el.getAttribute('data-icone-centro')||'loja',cx,cy-14,40,'var(--ac-tx)')+tl(cx,cy+34,el.getAttribute('data-centro')||'Seu negócio',20,14,'fill:var(--ac-tx)')+'</svg>';};

  /* dia e noite: trabalha 24 horas */
  CENAS.diaenoite=function(el){var a='dn'+(++UID),l=a+'l',de=el.getAttribute('data-de')||'Pedido',pa=el.getAttribute('data-para')||'Resposta';
    el.innerHTML='<svg class="desenho" viewBox="0 0 800 380"><path id="'+a+'" d="M90 250 A310 210 0 0 1 710 250" style="fill:none;stroke:var(--linha2);stroke-width:2;stroke-dasharray:4 9"/>'+
      '<g><animateMotion dur="7s" repeatCount="indefinite"><mpath href="#'+a+'"/></animateMotion><g><animate attributeName="opacity" values="1;0" keyTimes="0;.5" calcMode="discrete" dur="14s" repeatCount="indefinite"/><circle r="34" style="fill:var(--ac)"/><circle r="56" style="fill:var(--ac);opacity:.18"/></g>'+
      '<g opacity="0"><animate attributeName="opacity" values="0;1" keyTimes="0;.5" calcMode="discrete" dur="14s" repeatCount="indefinite"/><circle r="32" style="fill:#E4DEFF"/><circle cx="14" cy="-10" r="28" style="fill:var(--bg)"/><circle r="56" style="fill:var(--c3);opacity:.15"/></g></g>'+
      '<path id="'+l+'" d="M130 330H670" style="stroke:var(--c2);stroke-opacity:.6;stroke-width:3;fill:none"/>'+
      ['#fff','var(--c2)','var(--ac)'].map(function(c,i){return '<circle r="8" style="fill:'+c+'"><animateMotion dur="2.2s" begin="'+(i*.73)+'s" repeatCount="indefinite"><mpath href="#'+l+'"/></animateMotion></circle>';}).join('')+
      '<circle cx="110" cy="330" r="22" style="fill:var(--sup2);stroke:var(--c2);stroke-width:3"/><circle cx="690" cy="330" r="22" style="fill:var(--sup2);stroke:var(--c2);stroke-width:3"/>'+
      tl(110,374,de,22,16)+tl(690,374,pa,22,16)+'</svg>';};

  /* ciclo: etapas que se repetem, com um ponto de luz girando */
  CENAS.ciclo=function(el,rot){if(!rot.length)rot=['Você pede','A IA pergunta','Você responde','Pronto'];var ics=lista(el.getAttribute('data-icones')||'');var n=rot.length,cx=400,cy=200,R=150,p='cc'+(++UID),s='';
    s+='<path id="'+p+'" d="M'+cx+' '+(cy-R)+' A'+R+' '+R+' 0 1 1 '+(cx-.1)+' '+(cy-R)+'" style="fill:none;stroke:var(--c4);stroke-opacity:.5;stroke-width:3;stroke-dasharray:6 10"/>';
    s+='<g><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#'+p+'"/></animateMotion><circle r="24" style="fill:var(--ac);opacity:.25"/><circle r="11" style="fill:#fff"/></g>';
    rot.forEach(function(r,i){var a=-Math.PI/2+i*2*Math.PI/n,x=cx+R*Math.cos(a),y=cy+R*Math.sin(a);
      s+='<g class="cc-no" style="animation-delay:'+(i*8/n)+'s"><circle cx="'+x+'" cy="'+y+'" r="58" style="fill:var(--sup2);stroke:'+cor(i)+';stroke-width:3"/>'+icg(ics[i]||'seta',x,y-14,30,cor(i))+tl(x,y+26,r,17,12)+'</g>';});
    el.innerHTML='<svg class="desenho" viewBox="0 0 800 400">'+s+'</svg>';};

  /* árvore: uma indicação vira duas, quatro, oito */
  CENAS.arvore=function(el){var lv=[[[400,40]],[[250,140],[550,140]],[[170,245],[330,245],[470,245],[630,245]],[[130,345],[210,345],[290,345],[370,345],[430,345],[510,345],[590,345],[670,345]]],s='';
    for(var L=1;L<4;L++)lv[L].forEach(function(q,i){var p=lv[L-1][i>>1];s+='<path class="av-l" pathLength="1" style="animation-delay:'+((L-1)*.9)+'s" d="M'+p[0]+' '+p[1]+'C'+p[0]+' '+((p[1]+q[1])/2)+' '+q[0]+' '+((p[1]+q[1])/2)+' '+q[0]+' '+q[1]+'"/>';});
    for(L=1;L<4;L++)lv[L].forEach(function(q){s+='<circle class="av-n" style="animation-delay:'+((L-1)*.9+.4)+'s" cx="'+q[0]+'" cy="'+q[1]+'" r="'+[0,24,19,14][L]+'"/>';});
    s+='<circle cx="400" cy="40" r="32" style="fill:var(--ac)"/>'+icg('pessoa',400,40,30,'var(--ac-tx)');
    [['1',40],['2',140],['4',245],['8',345]].forEach(function(t){s+='<text x="790" y="'+(t[1]+8)+'" text-anchor="end" font-size="22" style="fill:var(--tx3);font-family:var(--fm)">'+t[0]+'</text>';});
    el.innerHTML='<svg class="desenho" viewBox="0 0 800 380">'+s+'</svg>';};

  /* configurador: toque nas cores e veja o produto mudar */
  var OBJ={garrafa:'<rect x="155" y="20" width="90" height="40" rx="10" class="cf-tampa"/><path class="cf-corpo" d="M140 70h120c12 0 20 10 20 22v250c0 22-18 38-40 38h-80c-22 0-40-16-40-38V92c0-12 8-22 20-22z"/><rect x="140" y="170" width="120" height="70" rx="8" class="cf-faixa"/><path class="cf-brilho" d="M150 100v200"/>',
    caneca:'<path class="cf-corpo" d="M90 90h200v220c0 30-25 50-55 50h-90c-30 0-55-20-55-50z"/><path class="cf-alca" d="M290 140h30c25 0 40 20 40 45s-15 45-40 45h-30" style="fill:none;stroke-width:24"/><path class="cf-brilho" d="M115 120v170"/>',
    camiseta:'<path class="cf-corpo" d="M140 40l-100 60 40 70 40-20v210h160V150l40 20 40-70-100-60c-10 30-40 45-60 45s-50-15-60-45z"/><path class="cf-brilho" d="M140 160v170"/>',
    caixa:'<path class="cf-corpo" d="M60 120l140-70 140 70v170l-140 70-140-70z"/><path class="cf-faixa" d="M60 120l140 70 140-70M200 190v170" style="fill:none;stroke-width:10"/>'};
  function montaConfig(el){var cs=pares(el.getAttribute('data-cores')).map(function(x){return x;}),cores=lista(el.getAttribute('data-cores')).map(function(x){var i=x.lastIndexOf(':');return {n:x.slice(0,i).trim(),c:x.slice(i+1).trim()};}),ob=OBJ[el.getAttribute('data-objeto')]||OBJ.garrafa;
    el.innerHTML='<div class="cf-palco"><svg viewBox="0 0 400 400">'+ob+'</svg><b class="cf-nome"></b></div><div class="cf-cores">'+cores.map(function(c,i){return '<button style="--k:'+c.c+'" aria-label="'+esc(c.n)+'" data-i="'+i+'"></button>';}).join('')+'</div>';
    function usa(i){el.style.setProperty('--cf',cores[i].c);el.querySelector('.cf-nome').textContent=cores[i].n;[].forEach.call(el.querySelectorAll('.cf-cores button'),function(b,k){b.classList.toggle('on',k===i);});var p=el.querySelector('.cf-palco svg');p.classList.remove('gira');void p.offsetWidth;p.classList.add('gira');}
    [].forEach.call(el.querySelectorAll('.cf-cores button'),function(b){b.addEventListener('click',function(){usa(+b.getAttribute('data-i'));});});
    el._reset=function(){usa(0);};usa(0);}

  /* ---------- foco de tutorial: escurece o resto e acende o que é para tocar ---------- */
  var GUIAS=[['.dashboard','.dash-filtros','Toque para filtrar'],['.chat-ia','.chat-sug button','Toque numa pergunta'],['.enquete','.enq-ops button','Toque para votar'],
    ['.quiz','.opcoes button','Toque na resposta certa'],['.ordenar','.ord-lista li','Arraste para ordenar'],['.kanban','.kb-card','Arraste um cartão para outra coluna'],
    ['.matriz','.mz-item','Arraste para um quadrante'],['.raspadinha','','Passe o dedo para raspar'],['.radar','.rd-p','Arraste as bolinhas'],
    ['.medidor','svg','Arraste o ponteiro'],['.roleta','.rol-gira','Toque para girar'],['.globo','canvas','Arraste para girar'],
    ['.nuvem','.nv-area button','Toque numa palavra'],['.mapa-mental','.mm-ramo','Toque nos ramos'],['.rede','.no','Toque num ponto'],
    ['.planos','.pl-chave','Mensal ou anual?'],['.viram','.vira','Toque para virar'],['.checklist','li','Toque para marcar'],
    ['.simulador','input','Arraste os controles'],['.tempo','.tp-trilho','Toque nos anos'],['.arraste','.arr-linha b','Arraste para comparar'],
    ['.configurador','.cf-cores','Toque nas cores'],['.cena[data-cena="dominos"]','','Toque para derrubar'],['.cena[data-cena="piramide"]','.pir','Toque nas camadas'],
    ['.bolhas','.bl-b','Toque numa bolha'],['.guias','.gu-bar','Toque nas abas']];
  var FID=0;
  function focoSai(s){var f=s.querySelector('.tut');if(!f)return;f.classList.add('saiu');setTimeout(function(){if(f.parentNode)f.remove();},450);}
  function foco(s,alvos,txt,tenta,espera){var ant=s.querySelector('.tut');if(ant)ant.remove();clearTimeout(s._focoT);
    s._focoT=setTimeout(function(){if(!s.classList.contains('ativo'))return;var lista=alvos;alvos=[].slice.call(alvos).filter(function(a){return a&&a.getBoundingClientRect().width;}).slice(0,1);if(!alvos.length){if(!tenta)foco(s,lista,txt,1);return;}
      var f=D.createElement('div'),id='fm'+(++FID);f.className='tut';s.appendChild(f);
      function poe(){var rs=s.getBoundingClientRect(),W=rs.width,H=rs.height,m='',an='',u=[1e9,1e9,-1e9,-1e9];
        alvos.forEach(function(a){var r=a.getBoundingClientRect(),pd=4,x=r.left-rs.left-pd,y=r.top-rs.top-pd,w=r.width+pd*2,h=r.height+pd*2,cs=getComputedStyle(a),rd=parseFloat(cs.borderTopLeftRadius)||10;
          if(a.tagName==='CANVAS')rd=Math.min(w,h)/2;rd=Math.min(rd+pd,h/2);
          m+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+rd+'" fill="#000"/>';
          an+='<span class="tut-anel" style="left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px;border-radius:'+rd+'px"></span>';
          u=[Math.min(u[0],x),Math.min(u[1],y),Math.max(u[2],x+w),Math.max(u[3],y+h)];});
        f.innerHTML='<svg class="tut-sombra" width="'+W+'" height="'+H+'"><defs><mask id="'+id+'"><rect width="'+W+'" height="'+H+'" fill="#fff"/>'+m+'</mask></defs><rect width="'+W+'" height="'+H+'" mask="url(#'+id+')"/></svg>'+an+
          '<span class="tut-txt"><i></i>'+txt+'</span>';
        var t=f.querySelector('.tut-txt'),tw=t.offsetWidth,th=t.offsetHeight,cx=(u[0]+u[2])/2,tx=Math.max(8,Math.min(W-tw-8,cx-tw/2));
        /* a etiqueta não pode cobrir as outras opções: tenta embaixo, em cima e, por fim, no pé do slide */
        var outros=[].slice.call(lista).slice(1).map(function(o){var r=o.getBoundingClientRect();return [r.left-rs.left,r.top-rs.top,r.right-rs.left,r.bottom-rs.top];});
        function bate(y){return outros.some(function(o){return !(tx+tw<o[0]||tx>o[2]||y+th<o[1]||y>o[3]);});}
        var opc=[u[3]+12,u[1]-th-12,H-th-14],ty=null;
        for(var q=0;q<opc.length;q++){var y=opc[q];if(y<8||y+th>H-8)continue;if(!bate(y)){ty=y;break;}}
        if(ty===null)ty=Math.max(8,Math.min(H-th-8,u[3]+12));
        t.style.left=tx+'px';t.style.top=ty+'px';}
      poe();requestAnimationFrame(function(){f.classList.add('on');});
      /* acompanha os elementos enquanto eles ainda estão entrando na tela */
      var t0=Date.now(),ass='';(function segue(){if(!f.parentNode||Date.now()-t0>7000)return;var r=alvos[0].getBoundingClientRect(),q=s.getBoundingClientRect(),k=[r.left-q.left,r.top-q.top,r.width,r.height,q.width,q.height].map(Math.round).join(',');if(k!==ass){ass=k;poe();}requestAnimationFrame(segue);})();
      if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){if(f.parentNode)poe();});
      var rz=function(){if(f.parentNode)poe();else window.removeEventListener('resize',rz);};window.addEventListener('resize',rz);
      var some=function(){focoSai(s);s.removeEventListener('pointerdown',some,true);};s.addEventListener('pointerdown',some,true);},espera||250);}
  function guia(s){var ant=s.querySelector('.tut');if(ant)ant.remove();clearTimeout(s._focoT);if(s.hasAttribute('data-sem-guia')||R.classList.contains('sem-guia'))return;
    for(var i=0;i<GUIAS.length;i++){var g=GUIAS[i],box=s.querySelector(g[0]);if(!box)continue;var alvos=g[1]?box.querySelectorAll(g[1]):[box];if(!alvos.length)continue;
      foco(s,alvos,g[2],0,g[3]);break;}}

  /* ---------------- montagem ---------------- */
  var slides=[].slice.call(D.querySelectorAll('.slide'));if(!slides.length)return;
  var palco=D.querySelector('.palco')||D.body;
  iconify(D);
  slides.forEach(function(s){
    var fd=s.getAttribute('data-fundo')||(s.classList.contains('capa')||s.classList.contains('fim')?'rede':'');
    if(fd&&fd!=='nenhum'){var cv=D.createElement('canvas');cv.className='fundo';s.insertBefore(cv,s.firstChild);s._fundo=Fundo(cv,fd);}
  });
  [].forEach.call(D.querySelectorAll('.barras[data-valores]'),montaBarras);
  [].forEach.call(D.querySelectorAll('.rosca[data-valores]'),montaRosca);
  [].forEach.call(D.querySelectorAll('.simulador'),montaSim);
  [].forEach.call(D.querySelectorAll('.cena[data-cena]'),montaCena);
  montaExtras(D);
  montaExtras2(D);
  [].forEach.call(D.querySelectorAll('.configurador'),montaConfig);
  [].forEach.call(D.querySelectorAll('.quiz'),function(q){[].forEach.call(q.querySelectorAll('button'),function(b){b.addEventListener('click',function(){if(q.classList.contains('respondido'))return;q.classList.add('respondido');if(!b.hasAttribute('data-certo'))b.classList.add('errou');});});
    q._reset=function(){q.classList.remove('respondido');[].forEach.call(q.querySelectorAll('.errou'),function(b){b.classList.remove('errou');});};});
  [].forEach.call(D.querySelectorAll('.vira'),function(v){v.addEventListener('click',function(){v.classList.toggle('virado');});});
  [].forEach.call(D.querySelectorAll('.checklist'),function(c){var tot=c.parentNode.querySelector('.checklist-total');
    function up(){if(tot)tot.textContent=c.querySelectorAll('.feito').length+' de '+c.children.length;}
    [].forEach.call(c.children,function(li){li.addEventListener('click',function(){li.classList.toggle('feito');up();});});
    c._reset=function(){[].forEach.call(c.children,function(li){li.classList.remove('feito');});up();};up();});

  /* luzes de ambiente */
  if(palco!==D.body||true){['a','b'].forEach(function(k){var l=D.createElement('div');l.className='luz '+k;palco.insertBefore(l,palco.firstChild);});}

  /* ---------------- navegação ---------------- */
  var cur=0;
  function revs(i){return [].slice.call(slides[i].querySelectorAll('.revela'));}
  function mostra(el,on){el.classList.toggle('on',on);
    if(on){if(el.hasAttribute('data-conta'))conta(el);[].forEach.call(el.querySelectorAll('[data-conta]'),conta);
      [].forEach.call(el.querySelectorAll('.barras'),function(b){animaBarras(b,true);});
      if(el.classList.contains('barras'))animaBarras(el,true);}}
  function entra(s){
    [].forEach.call(s.querySelectorAll('[data-conta]'),function(el){if(!el.closest('.revela'))conta(el);});
    [].forEach.call(s.querySelectorAll('.barras'),function(b){var r=b.closest('.revela');animaBarras(b,false);if(!r||r.classList.contains('on'))setTimeout(function(){animaBarras(b,true);},120);});
    [].forEach.call(s.querySelectorAll('.rosca[data-valores]'),function(r){tween(1400,function(p){pintaRosca(r,p);});});
    [].forEach.call(s.querySelectorAll('.quiz,.checklist,.simulador,.cena'),function(x){if(x._reset)x._reset();if(x._enter)x._enter();});
    [].forEach.call(s.querySelectorAll('.vira'),function(v){v.classList.remove('virado');});
    slides.forEach(function(o){if(o._fundo)(o===s?o._fundo.start():o._fundo.stop());});
    entraExtras(s);
    entraExtras2(s);
    [].forEach.call(s.querySelectorAll('.configurador'),function(x){if(x._reset)x._reset();});
    guia(s);
  }
  function render(){slides.forEach(function(s,i){s.classList.toggle('ativo',i===cur);});R.classList.toggle('fundo-destaque',slides[cur].classList.contains('destaque'));
    if(EMB)try{parent.postMessage({apv:'slide',n:cur+1,total:slides.length},'*');}catch(e){}
    try{D.dispatchEvent(new CustomEvent('apv:slide',{detail:{n:cur+1,total:slides.length}}));}catch(e){}}
  function vai(n,dir){cur=n;var r=revs(n);r.forEach(function(el){if(dir<0)mostra(el,true);else el.classList.remove('on');});
    render();entra(slides[n]);
    if(D.activeElement&&D.activeElement!==D.body&&!slides[n].contains(D.activeElement))D.activeElement.blur();}
  function prox(){toque();var r=revs(cur),k=r.filter(function(e){return e.classList.contains('on');}).length;
    if(k<r.length)mostra(r[k],true);else if(cur<slides.length-1)vai(cur+1,1);}
  function ant(){toque();var r=revs(cur),k=r.filter(function(e){return e.classList.contains('on');}).length;
    if(k>0)r[k-1].classList.remove('on');else if(cur>0)vai(cur-1,-1);}
  var dica=D.createElement('div');dica.className='dica-nav';dica.textContent=TOQUE?'Toque para avançar · toque na borda esquerda para voltar':'Clique ou use as setas para avançar · F para tela cheia';D.body.appendChild(dica);
  var mexeu=false;function toque(){if(!mexeu){mexeu=true;dica.classList.add('some');}}
  setTimeout(function(){dica.classList.add('some');},EMB?5000:9000);

  function dentro(e){var p=e.composedPath?e.composedPath():[];for(var i=0;i<p.length;i++){var n=p[i];if(!n.tagName)continue;
      if(/^(BUTTON|INPUT|SELECT|TEXTAREA|LABEL|A)$/.test(n.tagName))return true;
      if(n.classList&&(n.classList.contains('nonav')||n.classList.contains('quiz')||n.classList.contains('viram')||n.classList.contains('checklist')||n.classList.contains('simulador')||n.classList.contains('cena')||n.classList.contains('controles')||(typeof n.className==='string'&&/(^| )(dashboard|medidor|tempo|enquete|ordenar|arraste|rede|roleta|linha|chat-ia|globo|nuvem|kanban|raspadinha|tilt|radar|bolhas|guias|matriz|planos|mapa-mental|metas|configurador)( |$)/.test(n.className))))return true;}return false;}
  var TRAVA=/^#\d+\+?!~?$/.test(location.hash);if(TRAVA)R.classList.add('travado');if(/~$/.test(location.hash))R.classList.add('sem-guia');
  D.addEventListener('keydown',function(e){if(TRAVA)return;var tg=e.target&&e.target.tagName;if(tg==='INPUT'||tg==='TEXTAREA'){if(e.key==='Escape')e.target.blur();return;}
    if(tg==='BUTTON'&&(e.key===' '||e.key==='Enter'))return;
    if(['ArrowRight','ArrowDown',' ','PageDown','Enter'].indexOf(e.key)>-1){e.preventDefault();prox();}
    else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].indexOf(e.key)>-1){e.preventDefault();ant();}
    else if(e.key==='Home'){e.preventDefault();vai(0,1);}else if(e.key==='End'){e.preventDefault();vai(slides.length-1,-1);}
    else if((e.key==='f'||e.key==='F')&&!EMB){tela();}});
  D.addEventListener('click',function(e){if(TRAVA||dentro(e))return;if(TOQUE&&e.clientX<window.innerWidth*.2)ant();else prox();});
  var tx=null;D.addEventListener('touchstart',function(e){tx=dentro(e)?null:e.changedTouches[0].clientX;},{passive:true});
  D.addEventListener('touchend',function(e){if(tx===null||TRAVA)return;var dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>45){e.preventDefault&&0;dx<0?prox():ant();}},{passive:true});
  function tela(){try{if(D.fullscreenElement)D.exitFullscreen();else R.requestFullscreen().catch(function(){});}catch(_){}}

  var ctl=D.createElement('div');ctl.className='controles';
  ctl.innerHTML='<button class="v" aria-label="Voltar"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button><button class="prox" aria-label="Avançar"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>'+
    (R.requestFullscreen&&!EMB?'<button class="t" aria-label="Tela cheia"><svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button>':'');
  D.body.appendChild(ctl);
  ctl.querySelector('.v').addEventListener('click',ant);ctl.querySelector('.prox').addEventListener('click',prox);
  var tb=ctl.querySelector('.t');if(tb)tb.addEventListener('click',tela);
  if(!EMB){var gi=D.createElement('div');gi.className='gire';gi.textContent='Deite o celular para ver maior';D.body.appendChild(gi);}

  /* conversa com a página que embute a apresentação */
  window.addEventListener('message',function(e){var d=e.data||{};if(!d.apv)return;
    if(d.apv==='prox')prox();else if(d.apv==='ant')ant();else if(d.apv==='ir')vai(Math.max(0,Math.min(slides.length-1,(d.n|0)-1)),1);
    else if(d.apv==='titulo'){var h=slides[0].querySelector('h1');if(h){h.textContent=d.texto||h.getAttribute('data-original')||'';}}
    else if(d.apv==='tema'){R.setAttribute('data-tema',d.tema);}
    else if(d.apv==='auto'){auto(d.ms||0);}
    else if(d.apv==='cor'&&/^#[0-9a-f]{6}$/i.test(d.cor||'')){var c=d.cor,r=parseInt(c.substr(1,2),16),g=parseInt(c.substr(3,2),16),bl=parseInt(c.substr(5,2),16);R.style.setProperty('--ac',c);R.style.setProperty('--ac-tx',(r*299+g*587+bl*114)/1000>150?'#0B0B12':'#FFFFFF');}});
  /* passagem automática (usada nas vitrines); para no primeiro toque */
  var autoT=null;function auto(ms){clearInterval(autoT);autoT=null;if(!ms)return;autoT=setInterval(function(){var r=revs(cur),k=r.filter(function(e){return e.classList.contains('on');}).length;
    if(cur===slides.length-1&&k>=r.length)vai(0,1);else{var m=mexeu;prox();mexeu=m;if(!m)dica.classList.remove('some');}},ms);}
  ['pointerdown','keydown','wheel'].forEach(function(t){D.addEventListener(t,function(e){if(autoT&&e.isTrusted){auto(0);if(EMB)try{parent.postMessage({apv:'parou'},'*');}catch(_){}}},true);});
  [].forEach.call(D.querySelectorAll('h1'),function(h){h.setAttribute('data-original',h.textContent);});

  window.APV={foco:foco,focoSai:focoSai,prox:prox,ant:ant,ir:function(n){vai(n-1,1);},total:slides.length,atual:function(){return cur+1;}};

  /* abrir direto num slide: #5 ou #5+ (com tudo revelado) */
  var m=location.hash.match(/^#(\d+)(\+?)!?~?$/);
  if(m){vai(Math.max(0,Math.min(slides.length-1,+m[1]-1)),m[2]?-1:1);}else vai(0,1);
})();
