/* SVETLOVE: public Google Sheets data. Requires 'Anyone with link — Viewer'.
   All content is rendered with textContent, never untrusted HTML. */
window.SVETLOVE_SHEETS = (() => {
  const id = '1smFGGrLNV9TKDQZxUYZ1e_6Q2BRv59NGH8Cnqccu7ok';
  const sheetIds = {products:0,bestsellers:101,collections:102};
  function load(gid){
    return new Promise((resolve,reject)=>{
      const callback='svetloveSheet_'+gid+'_'+Date.now();
      const script=document.createElement('script');
      const timer=setTimeout(()=>finish(new Error('Таблица не ответила')),10000);
      function finish(error,data){clearTimeout(timer);delete window[callback];script.remove();error?reject(error):resolve(data)}
      window[callback]=res=>{
        if(res.status!=='ok')return finish(new Error('Таблица не опубликована или недоступна'));
        const t=res.table;const values=(t.rows||[]).map(row=>(row.c||[]).map(cell=>cell&&cell.v!=null?String(cell.v):''));
        finish(null,values);
      };
      script.onerror=()=>finish(new Error('Не удалось загрузить таблицу'));
      script.src=`https://docs.google.com/spreadsheets/d/${id}/gviz/tq?gid=${gid}&headers=0&tqx=responseHandler:${callback}`;
      document.head.append(script);
    });
  }
  const yes=x=>['true','да','1','yes','on'].includes(String(x).trim().toLowerCase());
  function objects(rows){if(!rows?.length)return[];const h=rows[0].map(x=>x.trim().replace(/^\s+/,'').toLowerCase());return rows.slice(1).filter(r=>r.some(Boolean)).map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]||''])))}
  function products(rows){return objects(rows).filter(p=>p.id&&p.name&&yes(p.visible)).map(p=>({
    id:p.id,name:p.name,category:p.category==='winter'?'Зимняя сказка':p.category==='spring'?'Весеннее пробуждение':p.category==='easter'?'Пасхальные истории':p.category==='autumn'?'Осенний уют':p.category==='kids'?'Маленькие чудеса':p.category==='corporate'?'Корпоративные подарки':p.category,
    price:Number(String(p.price).replace(/[^\d.,]/g,'').replace(',','.'))||0,description:p.description,
    image:p.image,images:[p.image,p.image_2,p.image_3,p.image_4,p.image_5].filter(Boolean),
    height:p.height||p['height']||p['\theight']||'Уточняется',width:p.width||p['\twidth']||'Уточняется',length:p.depth||p['\tdepth']||'Уточняется',
    available:/наличии/i.test(p.status),status:p.status||'Под заказ'
  }))}
  return {load,objects,products,yes};
})();
