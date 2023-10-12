// DeakinSync Home Button
var d2lHomeLinkIcon = document.querySelector('a[href="/d2l/lp/ouHome/defaultHome.d2l"]');
var d2lHomeLinkImage = document.querySelector('d2l-navigation-link-image[href="/d2l/lp/ouHome/defaultHome.d2l"]');

if (d2lHomeLinkIcon) {
  d2lHomeLinkIcon.setAttribute('href', 'https://sync.deakin.edu.au');
}

if (d2lHomeLinkImage) {
  d2lHomeLinkImage.setAttribute('href', 'https://sync.deakin.edu.au');
}

