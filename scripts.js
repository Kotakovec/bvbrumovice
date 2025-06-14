fetch("https://apartmanyukoleji.vercel.app/paid.bool")
  .then(res => res.text())
  .then(paid => {
    if (paid.trim() === "false") {
      (function(){
        var due_date = new Date('2025-06-15');
        var days_deadline = 15;
        
        var current_date = new Date();
        var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
        var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
        var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
        
        if (days > 0) {
          var days_late = days_deadline - days;
          var opacity = (days_late * 100 / days_deadline) / 100;
          opacity = Math.max(0, Math.min(1, opacity)); // Clamp between 0 and 1
          document.body.style.opacity = opacity;
        }
      })();
    }
  })
  .catch(err => {
    console.error("Failed to fetch payment status:", err);
  });



const logo = document.querySelector('.logo');
const img = new Image();
img.src = '/images/logo.png';
img.onload = function () {
  logo.style.width = img.width + 'px';
  logo.style.height = img.height + 'px';
};

if (window.innerWidth < 600) {
  showPopup("<h1>VAROVÁNÍ!! STRÁNKA NEMÁ ZATÍM PODPORU PRO MOBILNÍ ZAŘÍZENÍ!!!</h1>")
}


function rsrv_click() {
  const htmjtlm = `
  <p>
    <form id="orderForm">
      <h2>Objednávka apartmánu</h2>
      <input type="text" name="who" placeholder="Vaše jméno" required />
      <input type="text" name="pokoj" placeholder="Apartmán (A, B, C, D, E)" maxlength="1" pattern="[A-Ea-e]" required />
      <input type="email" name="mail" placeholder="Email" />
      <input type="date" name="datestart" placeholder="Datum příjezdu" />
      <input type="date" name="dateend" placeholder="Datum odjezdu" />
      <textarea type="text" name="zprava" placeholder="Dodatečná zpráva" height="128" width="128" />
      <button type="submit">Odeslat objednávku</button>
      <div id="response"></div>
    </form>
  </p>
  `;
  showPopup(htmjtlm);
}
function uvodClick() {
  const html = `
  <p>
<h1>Úvod</h1>
Apartmány u kolejí nabízí ubytování v nově zrekonstruované budově bývalého vlakového nádraží, v klidné části Klobouk u Brna, v srdci Jižní Moravy na hlavní trase Brno-Hodonín.
<br>
Budova disponuje 5 samostatnými apartmány, plně vybavené a o celkové kapacitě až 29 lůžek.
<br>
Parkování pro návštěvníky v areálu, možnost uskladnění kol, posezení na terase, či v pergole u grilu. Pro děti jsou připraveny průlezky, pískoviště a velká zahrada.
<br>
V okolí je možnost cykloturistiky, navštívit vinné stezky, vinné sklepy a další krásy Jižní Moravy.
  `;
  showPopup(html)
}
function contactclick() {
  const html = `
  <p>
<h1>Kontakt</h1>
Apartmány u kolejí
<br>
Nádražní 502/86
<br>
691 72 Klobouky u Brna
<br>
+420 739 047 640
<br>
Email: bude
<br>
WWW / Webové stránky: bude
<br>
GPS: 48.9931569N, 16.8867883E
<br>
Mapa: <a href="https://mapy.com/s/fuzumapaze">https://mapy.com/s/fuzumapaze</a>
  </p>
  `;
  showPopup(html)
}
function apartmanyClick() {
  const nhhtlm = `
  <p>
<h1>Apartmány</h1>
<h2>Apartmán A pro 6 osob</h2>
<br>
Jedná se o patrový apartmán o velikosti 65 m2. V přízemí najdete rozkládací pohovku s
TV, plně vybavenou kuchyň s velkou lednicí a kávovarem a prostornou koupelnu, včetně
fénu. V patře se nachází 3 samostatné postele, 1 manželská postel. Před apartmánem
se nachází terasa s posezením.
<br>
<h2>Apartmán B pro 6 osob</h2>
<br>
Jedná se o patrový apartmán o velikosti 65 m2. V přízemí najdete rozkládací pohovku s
TV, plně vybavenou kuchyň s velkou lednicí a kávovarem a prostornou koupelnu, včetně
fénu. V patře se nachází 3 samostatné postele, 1 manželská postel. Před apartmánem
se nachází terasa s posezením.
<br>
<h2>Apartmán C pro 6 osob</h2>
<br>
Apartmán je přízemní o velikosti 70 m2. V ložnici se nachází dvě manželské postele,
v obývacím pokoji najdete velkou rohovou rozkládací koženou sedačku pro 2 osoby, TV,
pro sportovce i orbitrek. Dále je součástí apartmánu plně vybavená kuchyň s myčkou,
velkou lednicí a kávovarem. Prostorná koupelna je vybavena sprchovým koutem i vanou,
včetně fénu.
<br>
<h2>Apartmán D pro 5 osob</h2>
<br>
Apartmán se nachází po schodech v podkroví o velikosti 56 m2. V ložnici najdete
manželskou postel. Obývací pokoj je propojen s druhou ložnicí, kde je také manželská
postel, dále rozkládací pohovka s TV a prostorná plně vybavená kuchyně s velkou lednicí
a kávovarem. Podkrovní koupelna má sprchový kout, součástí také fén.
<br>
<h2>Apartmán E pro 6 osob</h2>
<br>
Tento apartmán se nachází samostatně v areálu. Velikost je 69 m2. Má opět patrový
charakter, v patře se nachází 1 velká ložnice, kde najdete 3 manželské postele a televizi.
V přízemí velká kuchyně s kávovarem, velkou lednicí, kožená sedačka s druhou televizí.
Součástí koupelny je i pračka a fén.
  </p>
  <br><br>
  <p>
<h1>Ceník</h1>
Apartmán A - 3 000 Kč / noc
<br>
Apartmán B - 3 000 Kč / noc
<br>
Apartmán C - 3 200 Kč / noc
<br>
Apartmán D - 2 800 Kč / noc
<br>
Apartmán E - 3 000 Kč / noc
<br><br>
<strong>Apartmánový dům lze pronajmout i celý za cenu 13 000 Kč / noc</strong>
  </p>
  `
  showPopup(nhhtlm);
}
function vyletyClick() {
  const hetemelmel = `
  <p>
<h1>Výlety po okolí</h1>
<br>
Větrný mlýn v Kloboukách - <strong>2,6 km</strong>
<br>
Městské Muzeum v Kloboukách - <strong>2,3 km</strong>
<br>
Muzeum generálporučíka Františka Peřiny - <strong>5 km</strong>
<br>
Cyklostezka Násedlovice - <strong>7 km</strong>
<br>
Rozhledna Nedánov Boleradice - <strong>6,5 km</strong>
<br>
Památník bratří Mrštíků v Divákách - <strong>9 km</strong>
<br>
Papouščí zoo Bošovice - <strong>11 km</strong>
<br>
Ovčí terasy v Němčičkách - <strong>12 km</strong>
<br>
Rozhledna Kobylí - <strong>13 km</strong>
<br>
Rozhledna Kraví hora - <strong>13 km</strong>
<br>
Rozhledna Velké Pavlovice - <strong>17 km</strong>
<br>
Mandloňová stezka Hustopeče - <strong>18 km</strong>
<br>
Zámek Slavkov u Brna, bitva u Slavkova - <strong>25 km</strong>
<br>
Pálava - <strong>33 km</strong>
<br>
Vodní nádrž Nové Mlýny - <strong>30 km</strong>
<br>
Zoo Hodonín - <strong>30 km</strong>
<br>
Lednicko-valtický areál - <strong>37 km</strong>
<br>
Památky v Brně - <strong>35 km</strong>
<br>
Zoo Brno - <strong>40 km</strong>
<br>
Pasohlávky Aqualand Moravia - <strong>36 m</strong>
<br>
Zámek Mikulov - <strong>46 km</strong>
  </p>
  `;
  showPopup(hetemelmel)
}

function showPopup(text) {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('puc').innerHTML = text;
}
function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}