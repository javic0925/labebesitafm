const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'La Bebesita FM',
        text: 'Una cabina virtual llena de personajes que te haran pasar un buen rato.',
        url: window.location.href
      }).then(() => {
        console.log('Gracias por compartir!');
      })
      .catch(err => {
        console.log(`Couldn't share because of`, err.message);
      });
    } else {
      console.log('web share not supported');
    }
  });