/* global $: false, _: false */

(function () {
  'use strict';

  var $input,
      url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp/?symbol=';


  
  $(".symbol").on('click', function(event){
    var symbol = $(".symbol");
    var symbolUrl = url + symbol + '&callback=?';
  
    $.get(url, function(data){
    console.log(data);
    }, 'jsonp'); 


  });

 //$.get(url, function(data){
  //console.log(data);
  //}, 'jsonp'); 


  function createTable(){
    var docFragment = document.createDocumentFragment(); // contains all gathered nodes

    var text = document.createTextNode(" NAME\nLAST PRICE\nCHANGE / CHANGE PERCENT\n");
    docFragment.appendChild(text);

    return docFragment;
 };



















})();

