function search(){
  $('article').hide();
  $('article:contains(' + $('#search').val() +')').show();
}
function clearField(){
  $('#search').val('');
  search();
}