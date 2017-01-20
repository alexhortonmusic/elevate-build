
// darkens nav bar on scroll
$(window).on('scroll', function() {
  let navHeight = $('nav').height()
  let change = $(window).scrollTop()
  let nav = $('#header nav')
  if (change > navHeight) {
    nav.addClass('navSolid')
  } else if (change < navHeight) {
    nav.removeClass('navSolid')
  }
})
