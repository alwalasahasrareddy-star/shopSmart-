const P=[
            [1,'Sonic Pro Wireless Headphones','Electronics',2499,3499,'🎧','Best seller','Wireless over-ear headphones with rich sound and comfortable ear cushions.'],
            [2,'FitTrack Smart Watch','Electronics',3299,4499,'⌚','Popular','A smart wearable for activity tracking, notifications, and everyday fitness.'],
            [3,'StreetFlex Running Shoes','Fashion',1899,2599,'👟','Trending','Lightweight running shoes with a breathable upper and cushioned sole.'],
            [4,'Urban Everyday Backpack','Fashion',1299,1799,'🎒','Value pick','A versatile backpack for commuting, campus, and travel.'],
            [5,'Glow Mini Desk Lamp','Home',899,1199,'💡','New','A compact desk lamp for a comfortable study or work setup.'],
            [6,'BrewMate Coffee Maker','Home',2199,2899,'☕','Top rated','A simple coffee maker for preparing a fresh cup at home.'],
            [7,'SnapShot Instant Camera','Electronics',4999,5999,'📸','Popular','An instant camera for capturing and printing memorable moments.'],
            [8,'CloudSoft Hoodie','Fashion',1599,2199,'🧥','Top rated','A soft casual hoodie for relaxed everyday wear.'],
            [9,'Pulse Bluetooth Speaker','Electronics',1799,2499,'🔊','Trending','A portable Bluetooth speaker with clear sound for music at home or outdoors.'],
            [10,'Pro Wireless Mouse','Electronics',899,1299,'🖱️','Value pick','An ergonomic wireless mouse for work, study, and everyday browsing.'],
            [11,'Nova Tablet 10-inch','Electronics',12999,15999,'📱','New arrival','A versatile tablet for entertainment, reading, and productivity.'],
            [12,'HD Smart Television','Electronics',18999,23999,'📺','Best seller','A smart television for streaming shows, movies, and online content.'],
            [13,'Classic Denim Jacket','Fashion',2199,2999,'🧥','Popular','A versatile denim jacket for casual everyday outfits.'],
            [14,'Everyday Sneakers','Fashion',1499,2099,'👟','Trending','Comfortable sneakers designed for daily wear and walking.'],
            [15,'Minimalist Wrist Watch','Fashion',1799,2499,'⌚','Top rated','A clean and stylish wrist watch for everyday use.'],
            [16,'Cotton Casual Shirt','Fashion',999,1499,'👔','Value pick','A comfortable cotton shirt suitable for casual and smart-casual looks.'],
            [17,'Cozy Cushion Set','Home',699,999,'🛋️','New arrival','Soft decorative cushions to add comfort and colour to your living space.'],
            [18,'Insulated Travel Mug','Home',549,799,'🥤','Popular','A reusable insulated mug for keeping drinks handy while travelling.'],
            [19,'Indoor Plant Pot','Home',399,599,'🪴','Trending','A decorative planter for adding a touch of greenery to your home.'],
            [20,'LED String Lights','Home',499,799,'✨','Best seller','Decorative LED lights for bedrooms, celebrations, and cosy spaces.'],
            [21,'AirBeat Wireless Earbuds','Electronics',1499,1999,'🎶','New arrival','Compact wireless earbuds with a charging case for music and calls on the go.'],
            [22,'GameZone Wireless Controller','Electronics',2799,3499,'🎮','Popular','A responsive wireless controller for comfortable gaming at home.'],
            [23,'ClearView HD Webcam','Electronics',1899,2499,'📷','Work essential','A simple HD webcam for video calls, online classes, and remote work.'],
            [24,'PowerGo Portable Charger','Electronics',1199,1599,'🔋','Travel pick','A pocket-friendly portable charger to keep your devices powered while travelling.'],
            [25,'SoundWave Over-Ear Headphones','Electronics',3499,4499,'🎧','Top rated','Comfortable cushioned headphones for focused listening, travel, and work.'],
            [26,'Everyday Canvas Tote','Fashion',799,1199,'👜','Value pick','A roomy reusable canvas tote for shopping, commuting, and everyday errands.'],
            [27,'ActiveFlex Yoga Leggings','Fashion',1399,1899,'🧘','Trending','Stretchy, comfortable leggings for yoga, workouts, and active days.'],
            [28,'Classic Leather Wallet','Fashion',999,1499,'👛','Popular','A compact everyday wallet with practical space for cards and cash.'],
            [29,'Cozy Knit Beanie','Fashion',599,899,'🧢','Seasonal pick','A soft knit beanie that adds a warm finishing touch to casual outfits.'],
            [30,'Linen Summer Dress','Fashion',1999,2699,'👗','New arrival','A light, breathable linen-blend dress for easy everyday styling.'],
            [31,'Brew & Go French Press','Home',1299,1699,'☕','Coffee favourite','A compact French press for making fresh coffee at home or at work.'],
            [32,'SoftGlow Night Light','Home',449,699,'🌙','Small-space pick','A gentle night light for bedrooms, hallways, and cosy evening routines.'],
            [33,'FreshStart Water Bottle','Home',499,749,'🚰','Everyday essential','A reusable water bottle for staying hydrated at work, school, or the gym.'],
            [34,'DeskMate Organizer Tray','Home',649,949,'🗂️','Workspace pick','A tidy desktop organizer for keeping stationery and small essentials close by.'],
            [35,'Cotton Throw Blanket','Home',1199,1599,'🧶','Cozy pick','A soft cotton throw for adding a warm layer to your sofa or bed.']];
            let cart=JSON.parse(localStorage.getItem('sscart')||'[]'),cat='All',term='';
            const money=n=>'₹'+n.toLocaleString('en-IN'),get=id=>P.find(p=>p[0]===id);
            function sync(){localStorage.setItem('sscart',JSON.stringify(cart));document.getElementById('count').textContent=cart.reduce((a,b)=>a+b.qty,0)}
            function notify(s){let t=document.getElementById('toast');t.textContent=s;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)}
            function card(p){return `<article class="card" onclick="detail(${p[0]})"><div class="pic"><span class="tag">${p[6]}</span><span class="product-emoji">${p[5]}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="info"><span class="product-category">${p[2]}</span><h3>${p[1]}</h3><div class="product-bottom"><div><div class="stars">★★★★★ <span class="muted">4.8</span></div><div class="price">${money(p[3])} <span class="old">${money(p[4])}</span></div></div><button aria-label="Add ${p[1]} to bag" onclick="event.stopPropagation();add(${p[0]})">+</button></div></div></article>`}
            function products(title,arr,sub=''){return `<div class="rowtitle"><div><h2>${title}</h2><span class="muted">${sub}</span></div><button onclick="catalog()">View all →</button></div><div class="grid">${arr.map(card).join('')}</div>`}
            function home(){scrollTo(0,0);document.getElementById('app').innerHTML=`<div class="wrap"><section class="hero"><div class="hero-copy"><span class="eyebrow"><i></i> THE EVERYDAY EDIT · VOL. 01</span><h1>Good taste.<br><span>Great finds.</span></h1><p>Meet the little upgrades that make every day feel a little more you.</p><button class="hero-cta" onclick="catalog()">Explore the collection <span>↗</span></button><div class="hero-note"><span class="avatar-stack"><i>✦</i><i>♡</i><i>✳</i></span><span>Loved by curious shoppers<br><b>Thoughtful picks, always.</b></span></div></div><div class="hero-art"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="hero-product hero-product-main"><span>✦ EDITOR'S PICK</span><b>🎧</b><small>Sound, reimagined.</small></div><div class="hero-product hero-product-float"><b>⌚</b><small>Your day, in sync.</small></div><div class="hero-sparkle sparkle-one">✳</div><div class="hero-sparkle sparkle-two">✦</div><div class="hero-sticker">MADE FOR<br>YOUR EVERYDAY</div></div><div class="hero-index">01 <span>/</span> 04</div></section><section class="category-section"><div class="section-heading"><div><span class="eyebrow">A LITTLE OF EVERYTHING</span><h2>Find your kind of thing</h2></div><button onclick="catalog()">Explore all <span>↗</span></button></div><div class="category-grid">${[['Electronics','Tech that just clicks','🎧','category-tech'],['Fashion','Wear it your way','👟','category-style'],['Home','Make space feel yours','🪴','category-home']].map(([c,sub,icon,cls])=>`<button class="category-tile ${cls}" onclick="cat='${c}';catalog()"><span class="category-icon">${icon}</span><span class="category-copy"><b>${c}</b><small>${sub}</small></span><span class="category-arrow">↗</span></button>`).join('')}</div></section><div class="recommend-banner"><div class="recommend-icon">✳</div><div><span>YOUR NEXT GOOD FIND</span><b>A smartwatch that keeps up with you.</b></div><button onclick="detail(2)">Meet your match <span>↗</span></button></div>${products('The ones everyone loves',P.slice(0,4),'A few current favourites, picked for you')}${products('A little more your style',[P[1],P[0],P[3],P[2]],'A smarter mix based on what you are exploring')}<div class="hint">✨ <b>A little note about recommendations:</b> This demo uses sample browsing patterns. Real recommendations learn from clicks, purchases, ratings, and customer preferences.</div></div>`}
            function catalog(){scrollTo(0,0);let a=P.filter(p=>(cat==='All'||p[2]===cat)&&(!term||(p[1]+' '+p[2]).toLowerCase().includes(term)));document.getElementById('app').innerHTML=`<div class="wrap"><div class="crumb" onclick="home()">Home / Shop</div><h1>Explore products</h1><p class="muted">Choose a product to open its details page.</p><div class="chips">${['All','Electronics','Fashion','Home'].map(c=>`<button class="chip ${cat===c?'active':''}" onclick="cat='${c}';catalog()">${c}</button>`).join('')}</div><div class="rowtitle"><h2>${term?'Search results':'All products'}</h2><span class="muted">${a.length} products</span></div>${a.length?`<div class="grid">${a.map(card).join('')}</div>`:'<div class="empty">No products found. Try another search.</div>'}</div>`}
            function search(){term=document.getElementById('q').value.toLowerCase().trim();cat='All';catalog()}
            function detail(id){scrollTo(0,0);let p=get(id),related=P.filter(x=>x[0]!==id&&x[2]===p[2]).slice(0,4);if(related.length<4)related=related.concat(P.filter(x=>x[0]!==id&&!related.includes(x)).slice(0,4-related.length));document.getElementById('app').innerHTML=`<div class="wrap"><div class="crumb"><a onclick="home()">Home</a> / <a onclick="catalog()">Shop</a> / ${p[1]}</div><div class="detail"><div class="bigpic">${p[5]}</div><div><span class="muted">${p[6]} · ${p[2]}</span><h1>${p[1]}</h1><div class="stars">★★★★★ <span class="muted">4.8 / 5 · Demo rating</span></div><div class="price">${money(p[3])} <span class="old">${money(p[4])}</span></div><p>${p[7]}</p><p>Quantity: <button class="chip" onclick="qty(-1)">−</button> <b id="qty">1</b> <button class="chip" onclick="qty(1)">+</button></p><button onclick="add(${id},Number(document.getElementById('qty').textContent))">Add to cart</button> <button class="chip" onclick="cartPage()">Go to cart</button><div class="hint">🤖 <b>Recommended because:</b> This item matches the category you are exploring. A real recommendation engine would use your activity and preferences.</div></div></div>${products('You may also like',related,'Similar products selected by category')}</div>`;window.n=1}
            function qty(d){window.n=Math.max(1,Math.min(10,(window.n||1)+d));document.getElementById('qty').textContent=window.n}
            function add(id,n=1){let x=cart.find(x=>x.id===id);if(x)x.qty+=n;else cart.push({id,qty:n});sync();notify('Added to your cart ✓')}
            function remove(id){cart=cart.filter(x=>x.id!==id);sync();cartPage()}
            function cartPage(){scrollTo(0,0);let total=cart.reduce((s,x)=>s+get(x.id)[3]*x.qty,0);document.getElementById('app').innerHTML=`<div class="wrap"><div class="crumb"><a onclick="home()">Home</a> / Cart</div><h1>Your shopping cart</h1>${cart.length?`<div class="cartlayout"><div>${cart.map(x=>{let p=get(x.id);return `<div class="cartitem"><div class="mini">${p[5]}</div><div style="flex:1"><b>${p[1]}</b><div class="muted">${money(p[3])} · Qty ${x.qty}</div></div><b>${money(p[3]*x.qty)}</b><button class="chip" onclick="remove(${x.id})">Remove</button></div>`}).join('')}<button class="chip" onclick="catalog()">← Continue shopping</button></div><aside class="summary"><h3>Order summary</h3><div class="sumline"><span>Subtotal</span><b>${money(total)}</b></div><div class="sumline"><span>Delivery</span><b>FREE</b></div><hr><div class="sumline"><b>Total</b><b>${money(total)}</b></div><button style="width:100%" onclick="checkout()">Proceed to checkout</button><p class="muted" style="font-size:12px">Demo only — no payment will be taken.</p></aside></div>`:'<div class="empty"><div class="emoji">🛒</div><h2>Your cart is empty</h2><p class="muted">Add a product to see it here.</p><button onclick="catalog()">Explore products</button></div>'}</div>`}
            function checkout(){cart=[];sync();document.getElementById('app').innerHTML='<div class="wrap"><div class="empty"><div class="emoji">🎉</div><h1>Demo checkout complete!</h1><p class="muted">No real order or payment was placed.</p><button onclick="home()">Back to home</button></div></div>'}
            const voiceIntents=[
                [['headphone','headphones','music','listen','audio','earphone','earphones','earbuds'],[1,9,21,25]],
                [['watch','smartwatch','fitness','workout','exercise','steps','health','running'],[2,15]],
                [['shoe','shoes','sneaker','sneakers','run','runner','walking','walk'],[3,14]],
                [['backpack','bag','travel','commute','campus','school'],[4,18]],
                [['lamp','light','lights','study','desk','lighting'],[5,20]],
                [['coffee','brew','maker','caffeine'],[6]],
                [['camera','photo','photos','photography','picture','pictures','webcam','video','video call'],[7,23]],
                [['hoodie','warm','sweatshirt','casual'],[8,29,35]],
                [['speaker','speakers','bluetooth','party'],[9,21]],
                [['mouse','computer','wireless','work','office','laptop'],[10]],
                [['tablet','reading','read','draw','drawing'],[11]],
                [['game','gaming','controller','console'],[22]],
                [['charger','charging','charge','battery','powerbank','power'],[24]],
                [['television','tv','movies','streaming','screen'],[12]],
                [['jacket','denim','clothes','fashion','outfit','style','dress','leggings','yoga','tote','wallet','beanie'],[13,16,8,15,26,27,28,29,30]],
                [['shirt','cotton','clothing'],[16,13,8,26,27,28,29,30]],
                [['cushion','cushions','pillow','sofa','blanket','throw'],[17,35]],
                [['mug','drink','water','bottle','insulated'],[18,33]],
                [['french press','coffee press','coffee','brew'],[6,31]],
                [['plant','plants','pot','garden','greenery'],[19]],
                [['decor','decoration','bedroom','cozy','home','living'],[17,19,20,5,32,34,35]],
                [['organizer','organise','organize','desk','stationery','workspace'],[5,10,23,34]],
                [['night light','nightlight','bedside','night','lamp','lighting'],[5,32]],
                [['hydration','hydrate','water bottle','gym'],[2,18,27,33]]
            ];
            function recommendByVoice(){
                const input=document.getElementById('voice-query'),status=document.getElementById('voice-status'),results=document.getElementById('voice-results'),query=input.value.trim();
                if(!query){status.textContent='Tell me what you are looking for, or try one of the examples.';results.replaceChildren();input.focus();return}
                const ignoredWords=new Set(['a','an','and','can','find','for','get','give','i','in','is','it','me','my','of','on','please','show','some','something','the','that','this','to','with','you','your','need','want','looking']);
                const words=(query.toLowerCase().match(/[a-z0-9]+/g)||[]).filter(word=>!ignoredWords.has(word)),scores=new Map(P.map(p=>[p[0],0]));
                for(const [keywords,ids] of voiceIntents){
                    const matched=keywords.some(word=>words.includes(word));
                    if(matched)for(const id of ids)scores.set(id,scores.get(id)+5);
                }
                for(const p of P){
                    const titleWords=p[1].toLowerCase().match(/[a-z0-9]+/g)||[],productWords=(p[2]+' '+p[6]+' '+p[7]).toLowerCase().match(/[a-z0-9]+/g)||[];
                    for(const word of words){if(word.length>2&&titleWords.includes(word))scores.set(p[0],scores.get(p[0])+5);else if(word.length>2&&productWords.includes(word))scores.set(p[0],scores.get(p[0])+1)}
                }
                const matches=P.filter(p=>scores.get(p[0])>0).sort((a,b)=>scores.get(b[0])-scores.get(a[0])||a[3]-b[3]).slice(0,4);
                if(!matches.length){status.textContent='I couldn’t find a close match. Try “headphones for music”, “a desk lamp”, or “something for running”.';results.replaceChildren();return}
                status.textContent='Here are a few good matches for “'+query+'”.';
                results.innerHTML=`<div class="voice-result-grid">${matches.map(card).join('')}</div>`;
            }
            function setupVoiceAssistant(){
                const toggle=document.getElementById('voice-toggle'),panel=document.getElementById('voice-panel'),close=document.getElementById('voice-close'),form=document.getElementById('voice-form'),mic=document.getElementById('voice-mic'),input=document.getElementById('voice-query'),status=document.getElementById('voice-status');
                let activeVoiceRecognition=null;
                toggle.addEventListener('click',()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden)input.focus()});
                close.addEventListener('click',()=>{if(activeVoiceRecognition)activeVoiceRecognition.abort();panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.focus()});
                form.addEventListener('submit',event=>{event.preventDefault();recommendByVoice()});
                mic.addEventListener('click',()=>{
                    const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
                    if(!SpeechRecognition){status.textContent='Voice input is not supported in this browser. Type your request above to get recommendations.';return}
                    const recognition=new SpeechRecognition();activeVoiceRecognition=recognition;
                    recognition.lang='en-IN';recognition.interimResults=false;recognition.maxAlternatives=1;
                    mic.disabled=true;mic.classList.add('is-listening');status.textContent='Listening… Tell me what you are looking for.';
                    recognition.onresult=event=>{const transcript=event.results[0]&&event.results[0][0]?event.results[0][0].transcript.trim():'';if(transcript){input.value=transcript;recommendByVoice()}else status.textContent='I didn’t catch that. Try again or type your request.'};
                    recognition.onerror=event=>{
                        const message=event.error==='not-allowed'||event.error==='service-not-allowed'?'Microphone access was blocked. Allow microphone access or type your request instead.':event.error==='no-speech'?'I didn’t hear anything. Try again or type your request.':'Voice input could not start. You can type your request instead.';
                        status.textContent=message;
                    };
                    recognition.onend=()=>{if(activeVoiceRecognition===recognition)activeVoiceRecognition=null;mic.disabled=false;mic.classList.remove('is-listening')};
                    try{recognition.start()}catch(error){activeVoiceRecognition=null;mic.disabled=false;mic.classList.remove('is-listening');status.textContent='Voice input could not start. You can type your request instead.'}
                });
            }
            sync();setupVoiceAssistant();home();
