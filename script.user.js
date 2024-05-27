// ==UserScript==
// @name         Fix Google Web Search
// @namespace    http://tampermonkey.net/
// @version      2024-05-26
// @license      MIT
// @description  Remove AI results and other fluff from your Google search! Adds udm=14 to the search params of a new Google search, changing to the "Web" tab.
// @author       ZenithO-o
// @match        *://*.google.com/search*
// @match        *://*.google.ad/search*
// @match        *://*.google.ae/search*
// @match        *://*.google.com.af/search*
// @match        *://*.google.com.ag/search*
// @match        *://*.google.al/search*
// @match        *://*.google.am/search*
// @match        *://*.google.co.ao/search*
// @match        *://*.google.com.ar/search*
// @match        *://*.google.as/search*
// @match        *://*.google.at/search*
// @match        *://*.google.com.au/search*
// @match        *://*.google.az/search*
// @match        *://*.google.ba/search*
// @match        *://*.google.com.bd/search*
// @match        *://*.google.be/search*
// @match        *://*.google.bf/search*
// @match        *://*.google.bg/search*
// @match        *://*.google.com.bh/search*
// @match        *://*.google.bi/search*
// @match        *://*.google.bj/search*
// @match        *://*.google.com.bn/search*
// @match        *://*.google.com.bo/search*
// @match        *://*.google.com.br/search*
// @match        *://*.google.bs/search*
// @match        *://*.google.bt/search*
// @match        *://*.google.co.bw/search*
// @match        *://*.google.by/search*
// @match        *://*.google.com.bz/search*
// @match        *://*.google.ca/search*
// @match        *://*.google.cd/search*
// @match        *://*.google.cf/search*
// @match        *://*.google.cg/search*
// @match        *://*.google.ch/search*
// @match        *://*.google.ci/search*
// @match        *://*.google.co.ck/search*
// @match        *://*.google.cl/search*
// @match        *://*.google.cm/search*
// @match        *://*.google.cn/search*
// @match        *://*.google.com.co/search*
// @match        *://*.google.co.cr/search*
// @match        *://*.google.com.cu/search*
// @match        *://*.google.cv/search*
// @match        *://*.google.com.cy/search*
// @match        *://*.google.cz/search*
// @match        *://*.google.de/search*
// @match        *://*.google.dj/search*
// @match        *://*.google.dk/search*
// @match        *://*.google.dm/search*
// @match        *://*.google.com.do/search*
// @match        *://*.google.dz/search*
// @match        *://*.google.com.ec/search*
// @match        *://*.google.ee/search*
// @match        *://*.google.com.eg/search*
// @match        *://*.google.es/search*
// @match        *://*.google.com.et/search*
// @match        *://*.google.fi/search*
// @match        *://*.google.com.fj/search*
// @match        *://*.google.fm/search*
// @match        *://*.google.fr/search*
// @match        *://*.google.ga/search*
// @match        *://*.google.ge/search*
// @match        *://*.google.gg/search*
// @match        *://*.google.com.gh/search*
// @match        *://*.google.com.gi/search*
// @match        *://*.google.gl/search*
// @match        *://*.google.gm/search*
// @match        *://*.google.gr/search*
// @match        *://*.google.com.gt/search*
// @match        *://*.google.gy/search*
// @match        *://*.google.com.hk/search*
// @match        *://*.google.hn/search*
// @match        *://*.google.hr/search*
// @match        *://*.google.ht/search*
// @match        *://*.google.hu/search*
// @match        *://*.google.co.id/search*
// @match        *://*.google.ie/search*
// @match        *://*.google.co.il/search*
// @match        *://*.google.im/search*
// @match        *://*.google.co.in/search*
// @match        *://*.google.iq/search*
// @match        *://*.google.is/search*
// @match        *://*.google.it/search*
// @match        *://*.google.je/search*
// @match        *://*.google.com.jm/search*
// @match        *://*.google.jo/search*
// @match        *://*.google.co.jp/search*
// @match        *://*.google.co.ke/search*
// @match        *://*.google.com.kh/search*
// @match        *://*.google.ki/search*
// @match        *://*.google.kg/search*
// @match        *://*.google.co.kr/search*
// @match        *://*.google.com.kw/search*
// @match        *://*.google.kz/search*
// @match        *://*.google.la/search*
// @match        *://*.google.com.lb/search*
// @match        *://*.google.li/search*
// @match        *://*.google.lk/search*
// @match        *://*.google.co.ls/search*
// @match        *://*.google.lt/search*
// @match        *://*.google.lu/search*
// @match        *://*.google.lv/search*
// @match        *://*.google.com.ly/search*
// @match        *://*.google.co.ma/search*
// @match        *://*.google.md/search*
// @match        *://*.google.me/search*
// @match        *://*.google.mg/search*
// @match        *://*.google.mk/search*
// @match        *://*.google.ml/search*
// @match        *://*.google.com.mm/search*
// @match        *://*.google.mn/search*
// @match        *://*.google.com.mt/search*
// @match        *://*.google.mu/search*
// @match        *://*.google.mv/search*
// @match        *://*.google.mw/search*
// @match        *://*.google.com.mx/search*
// @match        *://*.google.com.my/search*
// @match        *://*.google.co.mz/search*
// @match        *://*.google.com.na/search*
// @match        *://*.google.com.ng/search*
// @match        *://*.google.com.ni/search*
// @match        *://*.google.ne/search*
// @match        *://*.google.nl/search*
// @match        *://*.google.no/search*
// @match        *://*.google.com.np/search*
// @match        *://*.google.nr/search*
// @match        *://*.google.nu/search*
// @match        *://*.google.co.nz/search*
// @match        *://*.google.com.om/search*
// @match        *://*.google.com.pa/search*
// @match        *://*.google.com.pe/search*
// @match        *://*.google.com.pg/search*
// @match        *://*.google.com.ph/search*
// @match        *://*.google.com.pk/search*
// @match        *://*.google.pl/search*
// @match        *://*.google.pn/search*
// @match        *://*.google.com.pr/search*
// @match        *://*.google.ps/search*
// @match        *://*.google.pt/search*
// @match        *://*.google.com.py/search*
// @match        *://*.google.com.qa/search*
// @match        *://*.google.ro/search*
// @match        *://*.google.ru/search*
// @match        *://*.google.rw/search*
// @match        *://*.google.com.sa/search*
// @match        *://*.google.com.sb/search*
// @match        *://*.google.sc/search*
// @match        *://*.google.se/search*
// @match        *://*.google.com.sg/search*
// @match        *://*.google.sh/search*
// @match        *://*.google.si/search*
// @match        *://*.google.sk/search*
// @match        *://*.google.com.sl/search*
// @match        *://*.google.sn/search*
// @match        *://*.google.so/search*
// @match        *://*.google.sm/search*
// @match        *://*.google.sr/search*
// @match        *://*.google.st/search*
// @match        *://*.google.com.sv/search*
// @match        *://*.google.td/search*
// @match        *://*.google.tg/search*
// @match        *://*.google.co.th/search*
// @match        *://*.google.com.tj/search*
// @match        *://*.google.tl/search*
// @match        *://*.google.tm/search*
// @match        *://*.google.tn/search*
// @match        *://*.google.to/search*
// @match        *://*.google.com.tr/search*
// @match        *://*.google.tt/search*
// @match        *://*.google.com.tw/search*
// @match        *://*.google.co.tz/search*
// @match        *://*.google.com.ua/search*
// @match        *://*.google.co.ug/search*
// @match        *://*.google.co.uk/search*
// @match        *://*.google.com.uy/search*
// @match        *://*.google.co.uz/search*
// @match        *://*.google.com.vc/search*
// @match        *://*.google.co.ve/search*
// @match        *://*.google.co.vi/search*
// @match        *://*.google.com.vn/search*
// @match        *://*.google.vu/search*
// @match        *://*.google.ws/search*
// @match        *://*.google.rs/search*
// @match        *://*.google.co.za/search*
// @match        *://*.google.co.zm/search*
// @match        *://*.google.co.zw/search*
// @match        *://*.google.cat/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/495638/Fix%20Google%20Web%20Search.user.js
// @updateURL https://update.greasyfork.org/scripts/495638/Fix%20Google%20Web%20Search.meta.js
// ==/UserScript==

(function () {
  "use strict";

  // Checks if all Google search links on the page have a udm parameter.
  const searchLinks = document.querySelectorAll('a[href^="/search"]');
  searchLinks.forEach((link) => {
    const linkURL = new URL(link.href);
    if (!linkURL.searchParams.has("udm")) {
      // Add a placeholder param
      linkURL.searchParams.set("udm", "1");
      link.href = linkURL.toString();
    }
  });

  // Evaluate current location, and add udm for Web search.
  let currentURL = new URL(window.location.href);
  if (currentURL.searchParams.get("udm")) {
    return; // Already has a udm param
  }

  currentURL.searchParams.set("udm", "14");
  const newURL = currentURL.toString();
  window.location.replace(newURL);
})();
