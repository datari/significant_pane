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
          $iframe.setAttribute("height", "70%");  // or 100% for full height
          $iframe.setAttribute("frameBorder", "0");
          $iframe.setAttribute("scrolling", "no");
          $iframe.setAttribute("seamless", "seamless");

          //get the news widget
          var widgets = document.getElementsByClassName("widgetbar-widget");
          var newsWidget = widgets[2];

          // sidebar container
          var $container = document.getElementsByClassName("widgetbar-widget-watchlist")[0].parentNode;
          $container.innerHTML = "";

          // add significant trades
          $container.appendChild($iframe);

          // add the news widget back
          $container.appendChild(newsWidget);
    }, 5000);
})();
