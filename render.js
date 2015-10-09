var data = "url=" + location.href;
$.ajax({
  type: "POST",
  url: "http://netpartner.sakura.ne.jp/comp/medium.php",
  cache: false,
  data: data,
  success: function(html){
    $( '#result' ) . html(html);
  }
});
document.write(location.href);
