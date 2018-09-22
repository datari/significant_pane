// ==UserScript==
// @name         Significant Trades CTTV style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Display Significant Trades widget in the right pane of a TradingView chart
// @author       @data.atari
// @match        https://www.tradingview.com/chart/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Wait untill the page loads
    setTimeout(function(){
      var $iframe = document.createElement('iframe');
          $iframe.src = "https://tucsky.github.io/SignificantTrades/";
          $iframe.setAttribute("width", "100%");
          $iframe.setAttribute("height", "100%");
          $iframe.setAttribute("border", "10px");
          var $container = document.getElementsByClassName("widgetbar-widget-watchlist")[0].parentNode;
          $container.innerHTML = "";
          $container.appendChild($iframe);
    }, 5000);
})();