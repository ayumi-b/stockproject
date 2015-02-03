/* global $: false, _: false */

(function () {
  'use strict';

  $(document).ready(function(){
    var $input,
        sum = 0,
        url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp/?symbol=';
    //REMOVE ROW
    $('#stockInfo').on('click', '.delete', function(event){
        $(this).closest('tr').remove();
        event.preventDefault();
    });

    //SUBMIT EVENT
    $(".form").submit(function(event){
      event.preventDefault();
      var symbol = $(".symbol").val();
      var symbolUrl = url + symbol;
      //GET DATA FUNCTION
      $.get(symbolUrl, function(data){
        var quantity = $(".quantity").val();
        var change = Math.round(data.Change * 100) / 100;
        var changePercent = Math.round(data.ChangePercent * 100) / 100;
        var price = Math.round(data.LastPrice * 100) / 100;

       //APPEND NEW ROW
        var $tr = $('<tr><td>' + data.Name + '</td><td>'
                    +'$' + price + '</td><td>'
                    + change + ' / ' + changePercent + '%' + '</td><td>'
                    + quantity + '</td><td>'
                    + '<input type="submit" value="Remove" class="button delete">' + '</td></tr>');
        $('#stockInfo').append($tr);

        //FIND TOTAL PRICE
        sum += parseFloat(price) * parseInt(quantity);
        var $total = ('<div>' + 'Total: ' + sum.toFixed(2) + '</div>');
        $('.total').empty().append($total);

      }, 'jsonp');
      });
  });
})();

