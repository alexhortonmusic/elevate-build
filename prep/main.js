$(window).on('scroll', function() {
  let navHeight = $('nav').height()
  let stop = $(window).scrollTop()
  let nav = $('#header nav')
  if (stop > navHeight) {
    nav.css('background-color', 'rgba(68, 69, 69, 0.9)')
  } else if (stop < navHeight) {
    nav.css('background-color', 'rgba(68, 69, 69, 0.5)')
  }
})
