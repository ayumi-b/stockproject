/* global $: false, _: false */

(function () {
  'use strict';

  var $input,
      url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp/?symbol=AAPL';


  
  $(".target").submit( function(event){
    var symbol = $(".symbol");
    var symbolUrl = url + symbol + '&callback=?';
  });

  $.getJSON(url, function(data){
  console.log(data);
  });


  function createTable(){
    var docFragment = document.createDocumentFragment(); // contains all gathered nodes

    var text = document.createTextNode(" NAME\nLAST PRICE\nCHANGE / CHANGE PERCENT\n");
    docFragment.appendChild(text);

    return docFragment;
 };



















})();
