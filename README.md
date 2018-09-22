# What's this?

It is SignificantTrades on your TradingView pane CTTV-style. 

![Image demo](https://i.gyazo.com/7e6e8b1ee4b418a73a36cf3b1dfea794.png)


# How it works?

It adds an iframe with https://tucsky.github.io/SignificantTrades/ to your TV sidebar.

# What is Tampermonkey ?

[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en), (formely Greasemonkey) is an extension allowing you to run custom scripts on web pages (you can choose which ones are allowed).

# Is it safe?

No. Everything on the Internet is not safe. Use it for your own risk. 

# Install

1. Install Tampermonkey extension (former Greasemonkey)

2. Create a new script and copy the contents there.

3. Make sure it's visible on all charts in your settings. 

![Image settings](https://i.gyazo.com/651037a049ef4274a5f0ebd015083540.png)


# Tweaks

To display under watch list, change to:
```
$container =  document.getElementsByClassName("widgetbar-widget-watchlist")[0].parentNode;
w = widgets[0];
$container.innerHTML='';
$container.appendChild(w)
$container.appendChild($iframe)
```

![Image watchlist](https://i.gyazo.com/5d5aaa6f74b999598cb79f23f0023fc5.png)
