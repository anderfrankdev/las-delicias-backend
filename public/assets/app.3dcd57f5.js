var R=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var T=(t,e,i)=>(R(t,e,"read from private field"),i?i.call(t):e.get(t)),j=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$=(t,e,i,n)=>(R(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();function u(t){const e=t.length;return function i(...n){return n.length<e?i.bind(null,...n):t.call(null,...n)}}const s=t=>document.getElementById(t),G=u((t,e,i)=>{const{html:n,css:a}=typeof e=="function"?e(i):e;t==="resetView"?(document.getElementById("styles").innerHTML=a,document.getElementById("app").innerHTML=n):t==="addView"&&(document.getElementById("styles").innerHTML+=a,document.getElementById("app").innerHTML+=n)}),L=G("resetView");G("addView");const B=u(t=>{const e=`document
      .getElementById('login_error')
      .remove()`;document.body.innerHTML+=`
      <div id="login_error" class="login_error">
        <div class="close_btn" onclick="${e}">X</div> 
        <p class="message"> ${t} </p>
      </div>
    `,setTimeout(()=>{var i;(i=document.getElementById("login_error"))==null||i.remove()},5e3)}),z=t=>{t==="on"?(s("loader").style.display="initial",s("app").style.display="none"):t==="off"&&(s("loader").style.display="none",s("app").style.display="grid")},X=u(async(t,e,i)=>{s("app").innerHTML="";const n=t.filter(o=>o.url===location.hash)[0];if(!n)return location.hash="#introduction";const{handler:a,view:r}=n;return a(r,e)}),W=u((t,e,i)=>{(i.target.id==="next"||i.target.id==="second-nav-dot")&&(s("presentation").dataset.stage==="food"?(s("second-nav-dot").style.backgroundColor="#666",s("first-nav-dot").style.backgroundColor="#ddd",s("presentation").innerHTML=t,s("presentation").dataset.stage="delivery",s("next").textContent="Get started"):s("presentation").dataset.stage==="delivery"&&i.target.id==="next"&&(window.location.hash="signup"))}),ee=u((t,e,i)=>{i.target.id==="first-nav-dot"&&s("presentation").dataset.stage==="delivery"&&(s("second-nav-dot").style.backgroundColor="#ddd",s("first-nav-dot").style.backgroundColor="#666",s("presentation").innerHTML=t,s("presentation").dataset.stage="food",s("next").textContent="Continue")}),te=u(async(t,e,i)=>{var f;const n=["signup","signin"],a=i.target.id;if(!n.includes(a))return;i.preventDefault();const{signModel:r,getPlatesModel:o,getDicountModel:c}=t;if(!(!!s("email").dataset.valid&&!!s("password").dataset.valid))return;let d={},p={},m={};if(i.target.id==="signup"){const{signup:w}=r;if(d={name:s("fullname").value,email:s("email").value,password:s("password").value},p=await w(d),m=p.data.createUser,e.setState=m,m){const h=["title","stripe_price","stripe_discount","percentage","image"],k=["id","title","price","ingridients","description","stripe_code","category","images"],[P,V]=await Promise.all([o(...k),c(...h)]);e.setPlates=P.data.getPlates,e.setDiscounts=V.data.getDiscounts,window.location.hash="#home"}}else if(i.target.id==="signin"){i.preventDefault();const{signin:w}=r;d={email:s("email").value,password:s("password").value};const h=["id","title","price","ingridients","description","stripe_code","category","images"];if(p=await w(d),console.log(p),m=(f=p==null?void 0:p.data)==null?void 0:f.login,e.setState=m,m){const k=["title","stripe_price","stripe_discount","percentage","image"],[P,V]=await Promise.all([o(...h),c(...k)]);e.setPlates=P.data.getPlates,e.setDiscounts=V.data.getDiscounts,window.location.hash="#home"}}if(p!=null&&p.errors){const{message:w}=p.errors[0],h=`document
      .getElementById('login_error')
      .remove()`;document.body.innerHTML+=`
      <div id="login_error" class="login_error">
        <div class="close_btn" onclick="${h}">X</div> 
        <p class="message"> ${w} </p>
      </div>
    `,setTimeout(()=>{var k;(k=document.getElementById("login_error"))==null||k.remove()},5e3)}}),ie=u(async(t,e,i)=>{if(i.target.id==="logout"){const n=await t();n!=null&&n.errors||(window.location.hash="#signin",e.deleteState())}}),Q=`
  <div class="img"><img src="/steak_dinner.jpeg" alt=""></div>
  <h2 class="title">All your favorite foods</h2>
  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque.</p>`,ne=`
  <div class="img"><img src="/food-delivery.png" alt=""></div>
  <h2 class="title">Get delivered at your doorstep</h2>
  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque.</p>`,ae={html:`
    <div class="introduction" id="introduction">
      <div class="logo">
        <img src="/logo-bar.png" alt="">
      </div>
      <div class="presentation" id="presentation" data-stage="food">
        ${Q}
      </div>
      <div class="dot-nav">
        <div class="dot-item first" id="first-nav-dot"></div>
        <div class="dot-item last" id="second-nav-dot"></div>
      </div>
      <div class="nav-buttons">
        <button class="nav-button next" id="next">Continue</button>
        <button class="nav-button log" onclick="window.location.hash='signin'">
          Sign in
        </button>
      </div>
    </div>
  `,css:`

  #app{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width:100%;
    height:100vh;
    overflow: auto;
  }

  .introduction{
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1rem;
    grid-template-areas: 
      "logo"
      "presentation"
      "nav"
      "buttons";
    grid-template-rows: repeat(2, auto) min-content auto ;
    font-family: sans-serif;
    height: 100%;
    margin-top:0.5rem;
    margin-bottom:2rem;
  }

  .logo{
    width:100%;
  }

  .logo>img{
    width:45%;
  }

  .presentation,
  .logo,
  .nav-buttons,
  .dot-nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .presentation>.img{
    border-radius: 50%;
    overflow: hidden;
    width: 60%;
    height: 60vw;
    margin-top: 1rem;
  }

  .presentation>.img>img{
    height: 100%;
    width: 100%;
  }

  .logo{
    grid-area: logo;
    
  }

  .presentation{
    grid-area: presentation;
  }

  .dot-nav{
    grid-area: nav;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .nav-buttons{
    grid-area: buttons;
    justify-content: space-evenly;

  }

  .presentation > .description{
    width: 60%;
    text-align: center;
    color: #333;
    font-size: 0.9rem;
  }

  .presentation > .title{
    width: 60%;
    text-align: center;
    margin-bottom: 0;
    margin-top: 1.7rem;
  }

  .nav-buttons>.nav-button{
    width: 70%;
    height: 3rem;
    border: none;
    font-size: 1.4rem;
    background: none;
    border-radius: 10px;
    font-weight: bolder;
  }

  .nav-buttons .next{
    background-color: #69b550;
    color: #eee;
    margin-bottom:0.4rem;
  }
  .nav-buttons .log{
    color: #58a441;
    background-color: #eee;
  }

  .dot-item{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #ddd;
    margin-inline: 0.4rem;
    border-radius: 50%;
  }
  .dot-item.first{
    background-color: #666;
  }

  @media (min-width: 432px) and (min-height:432px) {

    #app{
      background-image: linear-gradient(120deg, #69b550, #f58634);
    }

    .introduction {
      width: 375px !important;
      height: 666px !important;
      padding-bottom: 2rem;
      padding-top: 0.4rem;
      margin: 0;
      border-radius: 14px;
      background-color: #fff;
    }
    .img{
      height: 225px !important;
      width: 225px !important;
    }
  }
  `},se=`
  <h1 class="">Sign up for an account</h1>
  <form action="">
    <div class="input-container">
      <label for="fullname">Full Name</label>
      <input type="text" id="fullname">
    </div>
    <div class="input-container">
      <label for="email">Email</label>
      <input type="text" id="email" data-valid="">
    </div>
    <div class="input-container">
      <label for="password">Password</label>
      <input type="password" id="password" data-valid="">
    </div>
    <div class="sign-options">
      <a href="">Forgot your password?</a>
      <span style="cursor:pointer; color:#478223; font-weight:bolder;" onclick="location.hash='#signin'">Have an account?</span>
    </div>
    <input type="submit" value="Sign up" id="signup" >
  </form>
`,oe=`
  <h1 class="">Sign in to your account</h1>
  <form action="">
    <div class="input-container">
      <label for="email">Email</label>
      <input type="text" id="email" data-valid="">
    </div>
    <div class="input-container">
      <label for="password">Password</label>
      <input type="password" id="password" data-valid="">
    </div>
    <div class="sign-options">
      <a href="">Forgot your password?</a>
      <span style="cursor:pointer; color:#478223; font-weight:bolder;" onclick="location.hash='#signup'">Need an account?</span>
    </div>
    <input type="submit" value="Sign in" id="signin" >
  </form>
`,Y=t=>{let e;return t==="signup"?e=se:t==="signin"&&(e=oe),{html:`
      <div class="main">
        <div class="logo">
          <img src="/logo-bar.png" alt="">
        </div>
        <div class="form-container">
          ${e}
        </div>
        
        <footer class="footer">
          <p class="policy-msg">By signing up you agree to our terms of service and privacy policy.</p>
        </footer>
        
      </div>
      <div class="presentation"></div>

    `,css:`
      #app{
        display: grid;
        grid-template-columns: 1fr 0fr;
        grid-template-rows: 1fr;
        width: 100%;
        height: 100vh;
        font-family: sans-serif;
      }

      .main{
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
      }

      .logo{
        width: 100%;
        height: fit-content;
      }

      .logo > img{
        width: 180px;
      }

      .input-container{
        display: flex;
        flex-direction: column;
        margin-block: 1rem;
      }

      .sign-options{
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        flex-direction:column;
      }

      .sign-options > a {
        text-decoration: none;
        font-weight: bolder;
        color: #478223;
        margin-top:0.6rem;
      }

      label{
        margin-bottom: 0.5rem;
      }

      h1{
        margin-bottom: 3rem;
        text-align: center;
        color: #b24301;
      }

      input{
        width: 100%;
        height: 3rem;
        border-radius: 9px;
        border: 1px solid #aaa;
        font-size: 1.3rem;
      }

      input[type=submit]{
        margin-top: 2rem;
        color: white;
        font-weight: bolder;
        background-color: #69b550;
        border:none;
      }

      .form-container{
        width: 83%;
      }

      .policy-msg{
        font-size: 0.8rem;
        color: #333;
        text-align:center;
      }
      .invalid_password{
        color: #b00;
      }
      .presentation{
        background-image: url("/bread.jpg");
        background-size: cover;
      }   
      
      @media (min-width: 37.5em){
        #app{
          grid-template-columns: 3fr 2fr;
        }
        .form-container{
          width: 70%;
        }
        .main{
          padding-top: 3rem;
          padding-bottom: 2rem;
        }
        .sign-options{
          font-size: 0.9rem;
          flex-direction:row;
        }
        .login_error{
          left:initial;
        }
      }

    `}},re=`
	<div class="paymentResult" style="padding-top:3rem;">
		<div style="text-align:center;"><img width="150" height="150" src="/credit-card.svg" alt=""></div></div>
		<div style="text-align:center;">
			<strong>Thank You for your order!</strong>
		</div>
	</div>
`,de=t=>`
	<table style="width: fit-content; margin: 3rem auto;">
		<thead>
			<tr style="text-align:left;">
				<th style="padding-right: 3rem;">Order confirmation:</th>
				<th>${t.id}</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Total (${t.amount_items}):</td>
				<td>${t.amount_paid}$</td>
			</tr>
		</tbody>
		
	</table>
`,ce=t=>`
	<div style="text-align:center;">
		<h2>Delivery address</h2>
		<p style="text-align: left; width:fit-content; margin: 0 auto;">${t.house} ${t.street} <br> ${t.city} ${t.state} ${t.zipcode} </p>
	</div>
`,le=t=>`
	${t.successful?re:""}	
	${t.successful?de(t.order):""}	
	${t.successful?ce(t.address):""}
	<p style="text-align:center; cursor:pointer; text-decoration:underline;color:#005;"  onclick="location.hash='#home'">Go to Home page</p>
`,S=(t,e)=>{let i="";return e==="menu"?t==null||t.forEach(n=>i+=`
      <div class="card" data-id="${n.stripe_code}">
        <img src="${n!=null&&n.images?n.images[0]:n.img}" class="card_img" alt="">
        <p class="item_tittle">${n.title}</p>
        <p class="item_price">${n.price}$</p>
        <button class="card_item_btn order-btn" id="${n.stripe_code}">Order</button>
        <button class="card_item_btn cart-btn" style="background-color: #afa;" id="">Add to cart</button>
        <button class="card_item_btn favorites-btn" style="display:none;id background-color: #fcf;">Add to favorites</button>
      </div>
    `):e==="orders"?(t.length<1&&(i+="<p style='text-align:center;'>You have not done any order</p>"),t==null||t.forEach(n=>i+=`
      <div class="card">
        <img src="${n.images[0]}" alt="">
        <p class="item_tittle">${n.title}</p>
        <p>Amount: ${n.amount}</p>
        <p class="item_price">Price: ${n.price}$</p>
        <p class="item_price">Total: ${(n.price*n.amount).toFixed(1)}$</p>
        <p>${n.date.toLocaleString()}</p>
      </div>
    `)):e==="addresses"?(t.length<1&&(i+=`
      <p style='text-align:center;'>You have not added any address</p>`),t.forEach(n=>i+=`
      <div class="card address ${n.main?"main":""}" id="${n.id}">
        <p class="address_recipient">Fullname: ${n.recipient}</p>
        <p class="address_house">House number: ${n.house}</p>
        <p class="address_street">Street: ${n.street}</p>
        <p class="address_city">City: ${n.city}</p>
        <p class="address_state">State: ${n.state}</p>
        <p class="address_zipcode">Zipcode: ${n.zipcode}</p>
        ${n.main?"":'<button class="card_item_btn selectAddress" style=background:#ff9200;">Select</button>'}
        <button class="card_item_btn deleteAddress" style='background:#ddd;'">Delete</button>
      </div>
    `)):e==="favorites"&&(t.length<1&&(i+=`
      <p style='text-align:center;'>You have not added any address</p>`),t.forEach(n=>i+=`
      <div class="card" id="${n.id}">
        <img src="${n!=null&&n.images?n.images[0]:n.img}" class="card_img" alt="">
        <p class="item_tittle">${n.title}</p>
        <p class="item_price">${n.price}$</p>
        <button class="card_item_btn">Order</button>
      </div>
    `)),i},pe=(t,e)=>`
    <div class="carrousel">
      <h2>${t}</h2>
      <div class="cards">${S(e,"menu")}</div>
    </div>
  `,U=`
  <div class="search">
    <img src="/magnifier.svg" alt="">
    <input type="text" placeholder="Search on Las Delicias">
  </div>
`,me=t=>{let e="";return console.log(t),t.forEach(i=>{e+=`
      <div class="special-plate">
        <h2>${i.title}</h2>
        <p class="discount">Discount ${i.percentage}%</p>
        <button class="order_special" data-price="${i.stripe_price}" data-coupon="${i.stripe_discount}">Order now</button>
        <img src="${i.image}" alt="">
      </div>
    `}),e},ge=t=>{const e=t.getState.plates,i=t.getState.discounts;return`
    ${U}
    <div class="special">
      ${me(i)}
    </div>

    ${pe("Our plates",e)}
  `},ue=t=>{let e="";return t.forEach((i,n)=>{e+=`
      <div class="menu-item ${n===0?"selected":""}"  id="${i.split(" ")[0]}">
        <p>${i}</p>
      </div>
    `}),`
    <nav class="menu-nav">
      ${e}
    </nav>`},fe=t=>{const{plates:e}=t.getState;return`
    ${U}
    ${ue(["All","Soup","Fast food","Seafood","Meat","Vegan","Japanese","Italian","Desserts","Salads","Venezuelan"])}
    <div class="menu-list">
      ${S(e,"menu")}    
    </div>
  `},he=t=>{let e="";return t.forEach(i=>e+=`
    <div class="cart_item" id="${i.stripe_code}">
      <div class="item_img">
        <img src="${i.images[0]}" alt="">
      </div>
      <p class="item_title">${i.title}</p>
      <div class="item_amount">
        <div>Quantity:</div>
        <input class="item_quatity" style="display:block;width:fit-content;" type="number" min="1" value="${Number(i.quantity)}">
      </div>
      <p class="item_price">Price:<br>${i.price}$</p>
      <input type="button" value="Delete" class="item_btn">
    </div>
  `),e},J=t=>{const e=t.getState.cart.map(r=>{const[o,c]=r,l=t.getState.plates.filter(d=>d.stripe_code===o)[0];return Object.assign(l,{quantity:c})}),i=e==null?void 0:e.filter(r=>r==null?void 0:r.price),n=i.map(r=>r.price*Number(r.quantity)),a=`
    <p><strong>Oh... seems like the cart is empty</strong></p>
    <p class="cart_ad_msg">Looking for a particular plate? Let's head to the menu and start getting your favorite food</p>
  `;return`
    <div class="cart">
      <h2 class="cart_title">Shopping cart (${e.length} ${e.length<2?"item":"items"})</h2>
      <div class="cart_items">
        ${e.length<1?a:he(e)}
      </div>
      <div class="cart_count">
        <h2>Summary</h2>
        <p class="cart_count_estimted"><span>Est. Total:</span> <span id="cart_total">${i.length>0?n.reduce((r,o)=>Number(r)+Number(o)):0}$</span></p>
        <div class="cart_checkout"><span>Secure checkout</span><img src="/triangle.svg" alt="" width="24" height="24"></div>
      </div>
    </div>
  `},q=(t,e)=>{const i=[],n=t.getState.addresses,a=`
    <div class="account_actions">
      <p class="action" style="display:none;" onclick="window.location='#home/account/orders'">Your previous orders</p>
      <p class="action" onclick="window.location='#home/account/addresses'">Your addresses</p>
      <p class="action" style="display:none;" onclick="window.location='#home/account/favorites'">Your favorite plates</p>
      <p class="action logout" id="logout">Logout</p>
    </div>
  `,r=`
    <div class="account_orders">
      <div class="back" onclick="window.location='#home/account'"><img src="/arrow.svg" with="40" height="40" alt=""></span></div>
      <div class="cards_container">
        ${S(i,"orders")}
      </div> 
    </div>
  `,o=`
    <div class="account_orders">
      <div class="back" onclick="window.location='#home/account'"><img src="/arrow.svg" with="40" height="40" alt=""></span></div>
      <div class="cards_container">
         ${S(n,"addresses")}
      </div>
      <button id="newAddress">Add a new address</button>
    </div>
  `,c=`
    <div class="account_orders">
      <div class="back" onclick="window.location='#home/account'"><img src="/arrow.svg" with="40" height="40" alt=""></span></div>
      <div class="cards_container">
        ${S(i,"favorites")}
      </div> 
    </div>
  `;let l;return e==="main"?l=a:e==="orders"?l=r:e==="addresses"?l=o:e==="favorites"&&(l=c),l},E=u((t,e,i)=>{let n,a;return t==="home"?(n=ge(i),a="Home"):t==="menu"?(n=fe(i),a="Menu"):t==="cart"?(n=J(i),a="Cart"):t==="account"?(n=q(i,"main"),a="Your account"):t==="account/orders"?(n=q(i,"orders"),a="Your orders history"):t==="account/addresses"?(n=q(i,"addresses"),a="Your addresses"):t==="account/favorites"?(n=q(i,"favorites"),a="Your favorites"):console.error("View not found"),{html:`
    <div class="content-title">
      <h1>${a}</h1>
      <img src="/notification.svg" alt="">
    </div>
    <main class="main-content" id="main-content">
      ${n}
    </main>
    <nav class="nav-bar">
      <div class="nav-icon" onclick="window.location='#home'"><img src="/home.svg" alt=""></div>
      <div class="nav-icon" onclick="window.location='#home/menu'"><img src="/menu.svg" alt=""></div>
      <div class="nav-icon" onclick="window.location='#home/cart'"><img src="/cart.svg" alt=""></div>
      <div class="nav-icon" onclick="window.location='#home/account'"><img src="/profile.svg" alt=""></div>
    </nav>
    `,css:e}}),ye=t=>{const e=`document
    .getElementById('modal')
    .remove()`;let i="";t.ingridients.forEach(a=>i+=`<li>${a[a.length-1]==="."?a:a+"."}</li>`);let n="";return t.images.forEach(a=>n+=`<img src="${a}" alt="">`),`
  <div class="modal" id="modal">
    <div class="close_modal" id="close_modal" onclick="${e}">X</div>
    <div class="modal_content">
      <div class="modal_images">
        <div class="main_image">
          <img src="${t.images[0]}" alt="">
        </div>
        <div class="group">
          ${n}
        </div>
      </div>
      <div class="modal_title">
        <h2>${t.title}</h2>
      </div>
      <div class="modal_description">${t.description}</div>
      <div class="modal_ingridients">
        <h3>Ingridients:</h3>
        <ul>${i}</ul>
      </div>
      <div class="modal_resume">
        <div class="modal_price">Price: ${t.price}$</div>
        <input type="number" class="modal_amount" value="1">
        <input type="button" class="checkout card_item_btn" id="${t.stripe_code}" value="Order" name="">
      </div>
    </div>
  </div>`},ve=`
  <div class="address_form">
    <div class="close_modal" id="close_modal" onclick="document.querySelector('.address_form').remove()">X</div>
    <form action="" >
      <div class="field_container">
        <label for="recipient">Fullname:</label>
        <input type="text" id="recipient">
      </div>
      <div class="field_container">
        <label for="house">House number:</label>
        <input type="text" id="house">
      </div>
      <div class="field_container">
        <label for="street">Street:</label>
        <input type="text" id="street">
      </div>
      <div class="field_container">
        <label for="city">City:</label>
        <input type="text" id="city">
      </div>
      <div class="field_container">
        <label for="state">State:</label>
        <input id="state" type="text">
      </div>
      <div class="field_container">
        <label for="zipcode">Zipcode:</label>
        <input type="text" id="zipcode">
      </div>
      <div class="field_container">
        <input type="submit" id="addNewAddress" value="Add new address">
      </div>
    </form>
  </div>
`,M=`.app{width:100%;height:100vh;display:grid;grid-template-columns:1fr;grid-auto-rows:min-content auto 3.3rem;grid-template-areas:"content-title" "main" "nav";font-family:arial;overflow:hidden;position:relative}.main-content{grid-area:main;overflow-x:auto;padding-bottom:2rem}.nav-bar{grid-area:nav;display:flex;justify-content:space-evenly;margin:0;padding:0;padding-block:.4rem;align-items:center}.nav-icon{width:2.2rem;height:2.2rem;margin:0;padding:0}.nav-icon>img{width:2.2rem;height:2.2rem;cursor:pointer}.content-title{grid-area:content-title;display:grid;grid-template-columns:var(--step-2) auto var(--step-2);grid-auto-rows:1fr;grid-template-areas:". title notification";justify-items:center;align-content:center;padding:1rem 1rem .4rem}.content-title>h1{grid-area:title;font-size:var(--step-2);margin:0}.content-title>img{grid-area:notification;width:var(--step-2);height:var(--step-2);cursor:pointer}.search{margin:1rem;display:flex;justify-content:space-evenly;align-items:center;height:2.7rem;background-color:#eee;padding-inline:1rem;border-radius:10px}.search>img{width:1.5rem;height:1.5rem;cursor:pointer}.search>input{width:calc(100% - 1.5rem);padding-left:1rem;height:2rem;border:none;background-color:#eee}.special-plate{width:calc(100% - 2rem);overflow:hidden;margin:1rem;display:grid;padding:1rem;background:#eee;grid-template-columns:2fr 1fr;grid-auto-rows:min-content min-content fit-content;grid-template-areas:"title image" "discount image" "btn image";border-radius:10px;color:#000}.special-plate>h2{grid-area:title;margin:0;font-size:1.3rem;margin-right:.2rem}.special-plate>p{grid-area:discount;margin-block:7px;margin-right:.2rem}.special-plate>img{grid-area:image;height:6rem;width:7rem;justify-self:center;align-self:center;margin-right:.3rem}.special-plate>button{grid-area:btn;width:70%;border:none;border-radius:7px;background-color:green;color:#fff;cursor:pointer;height:var(--step-3)}.carrousel{overflow-y:hidden;max-width:100%;padding-left:1rem;margin:0 auto}.cards{display:flex;overflow:auto;justify-content:start;align-items:flex-start}.card{width:calc(var( --step-9 ) + 1rem);padding:.5rem;margin-bottom:.5rem;background-color:#eee;border-radius:8px;margin-right:3px;cursor:pointer}.card>p{margin-block:.4rem}.card>img{width:var(--step-9);height:var(--step-9);border-radius:8px}.menu-nav{display:flex;overflow-x:auto;margin:0 auto;height:fit-content;width:fit-content;max-width:100%}.menu-nav>.menu-item{padding-inline:.5rem;padding-block:.5rem;margin-inline:.5rem;width:auto;white-space:nowrap;border-top:3px solid transparent;margin-block:.5rem;cursor:pointer}.menu-item>p{margin-block:0}.menu-item.selected{border-top:3px solid #a00}.menu-list{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-items:center;padding-top:1rem;white-space:initial}.item_price{color:#050}.cart{display:grid;grid-template-columns:1fr;grid-auto-rows:min-content min-content min-content;grid-template-areas:"title" "items" "count";padding-left:0rem;background-color:#eee}.cart_title{grid-area:title;margin-top:2rem;padding-left:2rem;font-size:var(--step-1)}.cart_items{grid-area:items;margin-bottom:2rem;padding-right:.3rem;padding-left:.3rem}.cart_count{grid-area:count;background-color:#fff;text-align:center;padding-block:1rem;padding-inline:1rem}.cart_ad_msg{margin-bottom:0}.cart_count_estimted{display:flex;justify-content:space-between;font-size:var(--step-1)}.cart_checkout{display:flex;justify-content:space-between;padding:1rem;background-color:orange;border-radius:10px;font-weight:bolder;cursor:pointer}.cart_item{display:grid;grid-template-columns:min-content auto;grid-template-rows:min-content min-content min-content min-content;grid-template-areas:"img title" "img price" "img amount" "img btn";background-color:#fff;padding:var(--step--1);border-block:1px solid #000;align-content:start;justify-items:start;grid-gap:1rem}.item_img{grid-area:img;margin:0;justify-content:center;align-items:center;display:flex}.item_title{grid-area:title;display:flex;align-items:center;font-size:1.2rem;font-weight:bolder}.item_amount{grid-area:amount;width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.item_price{grid-area:price;text-align:right;margin:0;justify-self:end}.item_btn{grid-area:btn;height:1.5rem;padding-inline:.5rem;width:100%}.item_img>img{width:var(--step-8);height:var(--step-8)}.card_item_btn{width:100%;margin-bottom:6px;border:none;outline:none;border-radius:6px;padding-block:.3rem;font-weight:bolder;font-size:var(--step--1);background-color:orange;color:#111;cursor:pointer}.account_actions{padding:2rem;display:flex;justify-content:center;align-items:space-around;flex-direction:column}.account_actions>.action{border-radius:10px;border:1px solid #aaa;height:6ch;display:flex;justify-content:center;align-items:center;width:100%;cursor:pointer}.action:hover{background-color:#eee}.action.logout{border-color:#e00}.account_orders{padding:var(--step-1);height:100%}.back{display:flex;justify-content:flex-end;cursor:pointer}.back>span{cursor:pointer}.cards_container{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}.modal,.address_form{width:100%;height:100vh;position:absolute;background-color:#fff;overflow:auto;padding:1rem}.modal_content{height:calc(100% - 2rem);padding-block:1rem}.modal_images{width:100%;overflow:hidden}.main_image{width:100%;height:300px;overflow:hidden}.main_image img{width:100%;height:100%}.group{display:none}.group>img{height:100%;object-fit:contain;cursor:pointer;margin-inline:.2rem}.modal_title{grid-area:modal-title;height:fit-content}.modal_description{grid-area:modal-description;margin-block:1rem}.modal_ingridients{grid-area:modal-ingridients;overflow-y:auto}.modal_resume{grid-area:modal-resume;display:flex;justify-content:flex-end;flex-direction:column;margin:1rem}.modal_amount{margin-block:1rem}.close_modal{background-color:red;width:2rem;height:2rem;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#fff;padding:0;cursor:pointer}.address_form{display:grid;grid-template-areas:"close_addr_btn" "addr_form";grid-template-columns:1fr;grid-template-rows:min-content 1fr}.address_form>.close_modal{grid-area:close_addr_btn;justify-self:end}.address_form>form{grid-area:addr_form;display:flex;justify-content:space-between;align-items:center;flex-direction:column;overflow-y:auto}.address_form>form label{display:block}.address.main{background-color:#00fa00}.address{height:fit-content;width:300px}@media (min-width: 37.5em){.account_actions{padding:4rem}.app{grid-template-columns:4rem auto;grid-auto-rows:min-content 1fr;grid-template-areas:"nav content-title" "nav main";overflow:auto}.search{width:70%;margin:1rem auto}.main-content{grid-area:main}.nav-bar{grid-area:nav;flex-direction:column}.special-plate>img{height:calc(var(--step-9) - 1.4rem);width:var(--step-9)}.carrousel,.special-plate{height:fit-content}.carrousel>h2{width:fit-content;margin:1rem auto}.special-plate{width:90%}.special{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;justify-items:center;align-content:center}.special-plate>button{width:calc(100% - 1rem)}.cart{margin-inline:2rem;margin-top:2rem}.cart_items{margin-bottom:2rem;padding-right:2rem;padding-left:2rem}.cart_item{grid-template-rows:min-content min-content min-content;grid-template-areas:"img title" "img price" "btn amount"}.modal{top:0;left:0;bottom:0;right:0;margin:auto;padding:1rem;width:80vw;height:80vh;overflow:initial}.modal_content{display:grid;grid-template-columns:1fr 1.5fr .5fr;grid-template-rows:min-content min-content 1fr;grid-template-areas:"images modal-title modal-resume " "images modal-description modal-resume" "images modal-ingridients modal-resume"}.modal_images{grid-area:images;width:100%;overflow:hidden}.main_image{width:100%;height:85%;padding:1rem;overflow:hidden}.main_image img{width:100%;height:100%;object-fit:contain}.group{display:flex;width:100%;overflow:auto;height:15%}.group>img{height:100%;object-fit:contain;cursor:pointer;margin-inline:.2rem}.modal_title{grid-area:modal-title;height:fit-content}.modal h2{margin:0;margin-bottom:.5rem}.modal_description{grid-area:modal-description;margin-bottom:.5rem}.modal_ingridients{grid-area:modal-ingridients;overflow-y:auto}.modal_ingridients>ul{width:100%}.modal_resume{grid-area:modal-resume;display:flex;justify-content:flex-end;flex-direction:column}.cards_container{justify-content:initial;align-items:initial}.address{width:initial}}
`,F=u(async(t,e,i)=>{var n,a;if((n=i.getState)!=null&&n.name)(a=i.getState)!=null&&a.name&&L(e,i);else{const{checkSessionModel:r,getPlatesModel:o,getDicountModel:c}=t,l=["name","email","cart",`addresses{
				id
				recipient
				house
				street
				city
				state
				zipcode
				main
			}`],d=["id","title","price","ingridients","description","stripe_code","category","images"],p=["title","stripe_price","stripe_discount","percentage","image"],[m,f,w]=await Promise.all([r(...l),o(...d),c(...p)]);if(m){const{data:h}=f;i.setState=m,i.setPlates=h.getPlates,i.setDiscounts=w.data.getDiscounts,window.location.hash="#home"}else m||L(e,i)}s("loader").style.display="none",s("app").style.display="grid"});u(async(t,e,i)=>{var n,a;if((n=i.getState)!=null&&n.name)(a=i.getState)!=null&&a.name&&(window.location.hash="#home");else{const{checkSessionModel:r,getPlatesModel:o}=t,l=await r(...["name","email","cart",`addresses{
				id
				recipient
				house
				street
				city
				state
				zipcode
				main
			}`]);if(l){i.setState=l;const p=await o(...["id","title","price","ingridients","description","stripe_code","category","images"]);i.setPlates=p.data.getPlates,window.location.hash="#home"}else l||L(e,i)}s("loader").style.display="none",s("app").style.display="grid"});const O=u(async(t,e,i)=>{var n,a;if((n=i.getState)!=null&&n.name)(a=i.getState)!=null&&a.name&&L(e,i);else{const{checkSessionModel:r,getPlatesModel:o,getDicountModel:c}=t,l=["name","email","cart",`addresses{
				id
				recipient
				house
				street
				city
				state
				zipcode
				main
			}`],d=["id","title","price","ingridients","description","stripe_code","category","images"],p=["title","stripe_price","stripe_discount","percentage","image"],[m,f,w]=await Promise.all([r(...l),o(...d),c(...p)]);if(m){const{data:h}=f;i.setState=m,i.setPlates=h.getPlates,i.setDiscounts=w.data.getDiscounts,L(e,i)}else m||(window.location.hash="#signin")}s("loader").style.display="none",s("app").style.display="grid"}),we=u(async(t,e,i)=>{var o;console.log("payment");const a=await t(...["successful",`address{
      		house
      	    state
      	    street
      	    city
      	    zipcode
      	}
    	order{
    	  id
          amount_paid
          amount_items
        }`]),r=(o=a==null?void 0:a.data)==null?void 0:o.processPayment;r&&(s("app").innerHTML=e(r),z("off")),r.successful||(window.location.hash="#home"),console.log(a)}),be=async t=>{const{name:e,email:i,password:n}=t,a=`mutation{
    createUser(input:{
      name:"${e}",
      email:"${i}",
      password:"${n}"
    }){
      name email cart
      addresses{
        id
        recipient
        house
        street
        city
        state
        zipcode
        main
      }
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:a})}).then(o=>o.json())},_e=async t=>{const e=`mutation{
    login(input:{
      email:"${t.email}",
      password:"${t.password}"
    }){
      name email cart
      addresses{
        id
        recipient
        house
        street
        city
        state
        zipcode
        main
      }
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:e})}).then(n=>n.json())},$e=async()=>{const t=`{
    logout{
      message
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:t})}).then(i=>i.json())},x=async(...t)=>{const e=`{
    getOwnData{
      ${t.toString().replace(","," ")}
    }
  }`,i=await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})}),{data:n}=await i.json();return n==null?void 0:n.getOwnData},xe={signup:be,signin:_e};var A,D,I,N,H,C;class ke{constructor(){j(this,A,void 0);j(this,D,void 0);j(this,I,void 0);j(this,N,void 0);j(this,H,void 0);j(this,C,void 0)}get getState(){return JSON.parse(JSON.stringify({name:T(this,A),email:T(this,D),plates:T(this,I),cart:T(this,N),addresses:T(this,H),discounts:T(this,C)}))}set setState(e){var i,n;typeof(e==null?void 0:e.name)=="string"&&$(this,A,e.name),typeof(e==null?void 0:e.email)=="string"&&$(this,D,e.email),((i=e==null?void 0:e.cart)==null?void 0:i.constructor)===Array&&$(this,N,e.cart),((n=e==null?void 0:e.addresses)==null?void 0:n.constructor)===Array&&$(this,H,e.addresses)}set setPlates(e){(e==null?void 0:e.constructor)===Array&&$(this,I,e)}set setDiscounts(e){(e==null?void 0:e.constructor)===Array&&$(this,C,e)}deleteState(){$(this,A,void 0),$(this,D,void 0),$(this,I,void 0)}get isEmpty(){return Object.entries(user.getState).length===0}}A=new WeakMap,D=new WeakMap,I=new WeakMap,N=new WeakMap,H=new WeakMap,C=new WeakMap;const b=async(...t)=>{const e=`{
	  getPlates{
	    ${t.toString().replace(","," ")}
	  }
	}`;return await(await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})})).json()},_=async(...t)=>{const e=`{
	  getDiscounts{
	    ${t.toString().replace(","," ")}
	  }
	}`;return await(await fetch(`${window.location.origin}/api`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})})).json()},Se=async(t,e=!1)=>{const i=`mutation{
    pay(input:{
      products:${JSON.stringify(t)}
      ${e?`coupon:"${e}"`:""}
    }){
      url
    }
  }`;return console.log(i),await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:i})}).then(a=>a.json())},Z=async t=>{const e=`mutation{
    addToCart(input:${JSON.stringify(t)}){
      message
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})}).then(n=>n.json())},Te=async t=>{const e=`mutation{
    deleteItemInCart(input:"${t}"){
      message
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})}).then(n=>n.json())},je=async t=>{const{recipient:e,house:i,street:n,city:a,state:r,zipcode:o}=t,c=`mutation{
    addAddress(input:{
      recipient:"${e}",
      house:"${i}",
      street:"${n}",
      city:"${a}",
      state:"${r}",
      zipcode:"${o}"
    }){
      message id
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:c})}).then(d=>d.json())},Ee=async t=>{const e=`mutation{
    deleteAddress(input:"${t}"){
      message 
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})}).then(n=>n.json())},Me=async t=>{const e=`mutation{
    selectAddress(input:"${t}"){
      message 
    }
  }`;return await fetch(window.location.origin+"/api",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})}).then(n=>n.json())},Oe=async(...t)=>{const e=`{
		processPayment{
  			${t.toString().replace(","," ")}
		}
	}`;return await(await fetch(`${window.location.origin}/api`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},mode:"cors",credentials:"include",body:JSON.stringify({query:e})})).json()},Ae=t=>!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.,+:;-])[A-Za-z\d$@$!%*?&.,+:;-]{8,15}/.exec(t),De=t=>!!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.exec(t),Ie=u(async t=>{var n;const e=["email","password"],i=t.target;if(!!e.includes(i.id))if((n=s("invalid_password"))==null||n.remove(),i.id==="password")if(Ae(i.value))i.style.outline="2px solid green",i.dataset.valid="true";else{const o=`
				<p class="invalid_password" id="invalid_password">Your password has to be 8 characters long and has to include lowercase letters and symbols</p>
			`;i.style.outline="2px solid red",i.insertAdjacentHTML("afterend",o),i.dataset.valid=""}else i.id==="email"&&(De(i.value)?(i.style.outline="2px solid green",i.dataset.valid="true"):(i.style.outline="2px solid red",i.dataset.valid=""))}),Pe=u((t,e,i)=>{const n=`.card:not(.address),
	.card:not(.address) > *:not(.card_item_btn)`;if(i.target.matches(n)){if(s("modal"))return;let r;i.target.matches(".card")?r=t.getState.plates.filter(o=>o.stripe_code===i.target.dataset.id)[0]:r=t.getState.plates.filter(o=>o.stripe_code===i.target.parentElement.dataset.id)[0],s("app").innerHTML+=e(r)}else i.target.id==="close_modal"&&i.target.parent}),Le=u((t,e,i)=>{const n=`.menu-item:not(.selected),
	.menu-item:not(.selected)>*`;if(i.target.matches(n)){document.querySelector(".selected").classList.toggle("selected");let o;if(i.target.matches(".menu-item")?(o=i.target,o.classList.toggle("selected")):(o=i.target.parentElement,o.classList.toggle("selected")),o.id==="All")document.querySelector(".menu-list").innerHTML=t(e.getState.plates,"menu");else{const c=e.getState.plates.filter(l=>l.category===o.id);document.querySelector(".menu-list").innerHTML=t(c,"menu")}}}),ze=u(async(t,e,i)=>{var r,o;const n=`.card_item_btn.checkout,
	.card_item_btn,
	.cart_checkout,
	.order_special`;if(i.target.matches(n)){let c;if(s("loader").style.display="initial",s("app").style.display="none",i.target.matches(".card_item_btn.checkout")){const{id:l}=i.target,{value:d}=document.querySelector(".modal_amount"),p=[l,d+""];c=await t([p])}else if(i.target.matches(".card_item_btn.order-btn")){const{id:l}=i.target;c=await t([[l,"1"]])}else if(i.target.matches(".cart_checkout"))c=await t(e.getState.cart);else if(i.target.matches(".order_special")){console.log(i.target.dataset);const l=i.target.dataset.price,d=i.target.dataset.coupon;console.log(l,d),c=await t([[l,"1"]],d)}(o=(r=c==null?void 0:c.data)==null?void 0:r.pay)!=null&&o.url?window.location=c.data.pay.url:(s("loader").style.display="none",s("app").style.display="grid")}}),Ne=u(async(t,e,i)=>{const n=".cart-btn:not(.added)";if(i.target.matches(n)){s("loader").style.display="initial",s("app").style.display="none";const c=[[e.getState.plates.filter(d=>d.stripe_code===i.target.parentElement.dataset.id)[0].stripe_code,"1"]],l=`document
		      .getElementById('login_error')
		      .remove()`;try{const d=await t(c);console.log(d);const p=new Map(e.getState.cart);c.forEach(m=>{const[f,w]=m;if(p.get(f)){const h=Number(p.get(f))+Number(w);p.set(f,`${h}`)}else p.set(f,w)}),e.setState={cart:Array(...p)},document.body.innerHTML+=`
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${l}">X</div> 
		        <p class="message">Added succesfully</p>
		      </div>
		    `}catch{document.body.innerHTML+=`
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${l}">X</div> 
		        <p class="message">There was an error</p>
		      </div>
		    `}s("loader").style.display="none",s("app").style.display="grid",setTimeout(()=>{var d;(d=document.getElementById("login_error"))==null||d.remove()},5e3)}}),He=u(async(t,e,i,n)=>{const a=".item_btn";if(n.target.matches(a)){s("loader").style.display="initial",s("app").style.display="none";const o=n.target.parentElement.id,c=`document
		      .getElementById('login_error')
		      .remove()`;try{const l=await t(o);console.log(l);let d=new Map(i.getState.cart);n.target.parentElement.remove(),d.delete(o),i.setState={cart:Array(...d)},document.body.innerHTML+=`
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${c}">X</div> 
		        <p class="message">Delete succesfully</p>
		      </div>
		    `,s("main-content").innerHTML=e(i)}catch(l){console.log(l),document.body.innerHTML+=`
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${c}">X</div> 
		        <p class="message">There was an error</p>
		      </div>
		    `}s("loader").style.display="none",s("app").style.display="grid",setTimeout(()=>{var l;(l=document.getElementById("login_error"))==null||l.remove()},5e3)}}),Ce=u(async(t,e,i,n)=>{const a=".item_quatity";if(n.target.matches(a)){if(n.target.value<1)return;s("loader").style.display="initial",s("app").style.display="none";const c=i.getState.cart.filter(m=>m[0]===n.target.parentElement.parentElement.id)[0],l=Number(n.target.value)-Number(c[1]);console.log(l);const d=[[c[0],`${l}`]],p=`document
		      .getElementById('login_error')
		      .remove()`;try{const m=await t(d);console.log(m);const f=new Map(i.getState.cart);d.forEach(w=>{const[h,k]=w;if(f.get(h)){const P=Number(f.get(h))+Number(k);f.set(h,`${P}`)}else f.set(h,k)}),i.setState={cart:Array(...f)},document.body.innerHTML+=`
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${p}">X</div> 
		        <p class="message">Cart modified</p>
		      </div>
		    `}catch(m){console.log(m),document.body.innerHTML+=`
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${p}">X</div> 
		        <p class="message">There was an error</p>
		      </div>
		    `}s("loader").style.display="none",s("app").style.display="grid",s("main-content").innerHTML=e(i),setTimeout(()=>{var m;(m=document.getElementById("login_error"))==null||m.remove()},5e3)}}),qe=t=>{let e=!0;return typeof t=="string"?(!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(t)||t.length<1)&&(e=!1):e=!1,e},Be=t=>{let e=!0;return typeof t=="string"?(!/^\d*(\\d+)?$/.test(t)||t.length<1)&&(e=!1):e=!1,e},Ve=t=>{let e=!0;return typeof t=="string"?(!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ0-9. ]+$/.test(t)||t.length<1)&&(e=!1):e=!1,e},Fe=t=>{let e=!0;return typeof t=="string"?(!/^[A-Za-záéíóúÁÉÍÓÚ'°. ]+$/.test(t)||t.length<1)&&(e=!1):e=!1,e},Je=t=>{let e=!0;return typeof t=="string"?(!/^[A-Za-záéíóúÁÉÍÓÚ'° ]+$/.test(t)||t.length<1)&&(e=!1):e=!1,e},Re=t=>{let e=!0;return typeof t=="string"?(!/^\d*(\\d+)?$/.test(t)||t.length<5)&&(e=!1):e=!1,e},Xe=t=>{const e={invalid:!1,invalidFields:[]},{recipient:i,house:n,street:a,city:r,state:o,zipcode:c}=t;return qe(i)||(e.invalid=!0,e.invalidFields.push("receiver name")),Be(n)||(e.invalid=!0,e.invalidFields.push("house number")),Ve(a)||(e.invalid=!0,e.invalidFields.push("street")),Fe(r)||(e.invalid=!0,e.invalidFields.push("city")),Je(o)||(e.invalid=!0,e.invalidFields.push("state")),Re(c)||(e.invalid=!0,e.invalidFields.push("zipcode")),e},Ye=u(async(t,e,i,n)=>{n.preventDefault();const a=`
		#newAddress,
		#addNewAddress`;if(n.target.matches(a)){const o=`document
		      .getElementById('login_error')
		      .remove()`;if(n.target.matches("#newAddress"))s("app").innerHTML+=i;else if(n.target.matches("#addNewAddress")){const c={recipient:s("recipient").value,house:s("house").value,street:s("street").value,city:s("city").value,state:s("state").value,zipcode:s("zipcode").value},l=Xe(c);if(l.invalid){const{invalidFields:d}=l,p="The following fields are invalid: "+`${d}`.replaceAll(",",", "),m=`document
			      .getElementById('login_error')
			      .remove()`;document.body.innerHTML+=`
			      <div id="login_error" class="login_error">
			        <div class="close_btn" onclick="${m}">X</div> 
			        <p class="message"> ${p} </p>
			      </div>
			    `}else try{s("loader").style.display="initial",s("app").style.display="none";const d=await t(c);if(d!=null&&d.errors)throw new Error;const{id:p}=d.data.addAddress,m=e.getState.addresses,f={id:p,...c,main:m.length<1};m.push(f),e.setState={addresses:m},window.location.hash="",window.location.hash="#home/account/addresses",s("loader").style.display="none",s("app").style.display="grid",document.body.innerHTML+=`
				      <div id="login_error" class="login_error">
				        <div class="close_btn" onclick="${o}">X</div> 
				        <p class="message">New address added</p>
				      </div>
				    `}catch(d){console.log(d),document.body.innerHTML+=`
				      <div id="login_error" class="login_error">
				        <div class="close_btn" onclick="${o}">X</div> 
				        <p class="message">There was an error</p>
				      </div>
				    `,s("loader").style.display="none",s("app").style.display="grid"}setTimeout(()=>{var d;(d=document.getElementById("login_error"))==null||d.remove()},5e3)}}}),Ze=u(async(t,e,i,n)=>{const a=`
		.deleteAddress`;if(n.target.matches(a)){z("on");const{id:o}=n.target.parentElement,c=await t(o);if(c!=null&&c.errors)B(c.errors[0].message);else{const{message:l}=c.data.deleteAddress;B(l);const{addresses:d}=e.getState,p=d.findIndex(m=>m.id===o);d.splice(p,1),e.setState={addresses:d},document.querySelector(".cards_container").innerHTML=i(d,"addresses")}z("off")}}),Ke=u(async(t,e,i,n)=>{const a=`
		.selectAddress`;if(n.target.matches(a)){z("on");const{id:o}=n.target.parentElement,c=await t(o);if(c!=null&&c.errors)B(c.errors[0].message);else{const{message:l}=c.data.selectAddress;B(l);const d=e.getState.addresses.map(p=>(p.id===o?p.main=!0:p.main=!1,p));d.findIndex(p=>p.id===o),e.setState={addresses:d},document.querySelector(".cards_container").innerHTML=i(d,"addresses")}z("off")}}),g=Object.freeze,y=document,Ge=window;let v=new ke;const K=g([g({url:"#introduction",handler:F({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:ae}),g({url:"#signup",handler:F({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:Y("signup")}),g({url:"#signin",handler:F({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:Y("signin")}),g({url:"#home",handler:O({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:E("home",M)}),g({url:"#home/menu",handler:O({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:E("menu",M)}),g({url:"#home/cart",handler:O({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:E("cart",M)}),g({url:"#home/account",handler:O({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:E("account",M)}),g({url:"#home/account/addresses",handler:O({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:E("account/addresses",M)}),g({url:"#home/account/orders",handler:O({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:E("account/orders",M)}),g({url:"#home/account/favorites",handler:O({checkSessionModel:x,getPlatesModel:b,getDicountModel:_}),view:E("account/favorites",M)}),g({url:"#payment",handler:we(Oe),view:le})]),Qe=g([g({element:y,type:"DOMContentLoaded",presenter:X(K,v)}),g({element:Ge,type:"hashchange",presenter:X(K,v)}),g({element:y,type:"click",presenter:W(ne,v)}),g({element:y,type:"click",presenter:ee(Q,v)}),g({element:y,type:"click",presenter:te({signModel:xe,getPlatesModel:b,getDicountModel:_},v)}),g({element:y,type:"click",presenter:ie($e,v)}),g({element:y,type:"input",presenter:Ie}),g({element:y,type:"click",presenter:Pe(v,ye)}),g({element:y,type:"click",presenter:Le(S,v)}),g({element:y,type:"click",presenter:ze(Se,v)}),g({element:y,type:"click",presenter:Ne(Z,v)}),g({element:y,type:"input",presenter:Ce(Z,J,v)}),g({element:y,type:"click",presenter:He(Te,J,v)}),g({element:y,type:"click",presenter:Ye(je,v,ve)}),g({element:y,type:"click",presenter:Ze(Ee,v,S)}),g({element:y,type:"click",presenter:Ke(Me,v,S)})]);Qe.forEach(t=>{const{element:e,type:i,presenter:n}=t;e.addEventListener(i,n)});
