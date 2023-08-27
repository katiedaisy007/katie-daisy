$(document).ready(function() {
    $('#myModal1').modal('show');
    $("#enter").click(function() {
        var snapchat_name = $("#username").val();
        if (snapchat_name.length > 1) {
            $('#payment').html(`<div><iframe src="https://trackunique.com/arianaprivate?${snapchat_name}&x2=${countrycode}" target="_parent" height=518 width=100% frameBorder="0" scrolling="no" style="position: relative; left: 0px; top: 0px;"></iframe></div>`);
            $('#myModal1').modal('hide');
        } else {
            alert("Fill in your Snapchat username!");
        }
    });
});
$('#myModal2').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget)
    var price = button.data('bs-price');
    var name = button.data('bs-name');
    var snapchat_name = $("#username").val();
    var discount = price / 2;
    $('#package_name').html(name);
    $('#total_price').html(price + ".00 " + currency);
    $('#discount_price').html(discount + ".00 " + currency);
    $('#end_price').html((price - discount) - 0.01 + " " + currency);
    $('#message').html(`You are buying this package for the username: <b>${snapchat_name}</b>, make sure your username is correct in order for me to contact you.`);
    $('#myModal2').modal('show');
});