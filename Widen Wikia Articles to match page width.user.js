// ==UserScript==
// @name         Widen Wikia Articles to match page width
// @namespace    http://ogletree.io/
// @version      1.0
// @description  Widen wikia pages
// @url          https://github.com/sordidfellow/WikiaCosmeticFix/raw/master/Widen%20Wikia%20Articles%20to%20match%20page%20width.user.js
// @author       Me
// @match        *.wikia.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle("#WikiaMainContent { width: 100% !important }");
