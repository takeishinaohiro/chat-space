$(function(){
  function buildHTML(comment){
    let image = `<img class="lower-message__image" src="${comment.image}" alt="Img 2020" />`
    let html = `<div class='message'>
    <div class='upper-message'>
    <div class='upper-message__user-name'>
    ${comment.name}
    </div>
    <div class='upper-message__date'>
    ${comment.date}
    </div>
    </div>
    <div class='lower-message'>
    <p class='lower-message__content'>
    ${comment.content}
    </p>
    ${image}
    </div>
    </div>`
    return html;
  }
  $('.new_message').on('submit', function(e){
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
   })
    .done(function(data){
      let html = buildHTML(data)
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast'); 
      $('.submit-btn').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
});