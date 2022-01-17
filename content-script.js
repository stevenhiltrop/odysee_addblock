function removeAdds() {
  document.querySelector('.ads__claim-item').remove();
}

window.addEventListener('load', function () {
  this.setInterval(removeAdds, 5000) // Had to set an interval due to delayed loading
})
