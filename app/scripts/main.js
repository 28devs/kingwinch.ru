//modal
const modalOpen = document.querySelectorAll('[data-modal]');

function modal(e) {
  let modalId = this.getAttribute('data-modal')
  let modalElem = document.getElementById(modalId);

  modalElem.classList.add("modal--open");

  modalElem.addEventListener('click', function(e) {
    if(e.target == modalElem) {
      modalElem.classList.remove("modal--open");
    }
  });
}

if(modalOpen.length) {
  modalOpen.forEach(node => {
    node.addEventListener('click', modal);
  })
}

//radio on booking
let radioButtons = Array.from(document.querySelectorAll('.booking_options-item'));
let radioCalendar = Array.from(document.querySelectorAll('.calendar .cell'));
let radioBooking = Array.from(document.querySelectorAll('[data-booking-evailable]'));

const handleClick = (e, nodeClass, array) => {
  e.preventDefault()

  array.forEach(node => {
    node.classList.remove(nodeClass)
  });
  e.currentTarget.classList.add(nodeClass)
}

radioButtons.forEach(node => {
  node.addEventListener('click', function() {
    handleClick(event, 'booking_options-item--active', radioButtons)
  })
});

radioCalendar.forEach(node => {
  node.addEventListener('click', function() {
    handleClick(event, 'isevent', radioCalendar)
  })
});

radioBooking.forEach(node => {
  node.addEventListener('click', function() {
    handleClick(event, 'booking_list-row--active', radioBooking)
  })
});

var parks = [
  [
    'Кронштадт',
    59.998487,
    29.704101,
    1,
    'data:image/svg+xml;utf-8,<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <circle id="path-1" cx="950" cy="302" r="16"></circle> <filter x="-21.9%" y="-15.6%" width="143.8%" height="143.8%" filterUnits="objectBoundingBox" id="filter-2"> <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feColorMatrix values="0 0 0 0 0.713089923   0 0 0 0 0.59085076   0 0 0 0 2.81364395e-05  0 0 0 0.404608243 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Парки" transform="translate(-930.000000, -284.000000)"> <g id="Oval-3-Copy-3"> <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use> <use fill="#F9CF04" fill-rule="evenodd" xlink:href="#path-1"></use> </g> </g> </g> </svg>',
    'Кронштадт, форт Константин',
    'nashi-parki/kronshtadt.html'
  ],
  [
    'Отрадное',
    59.791503,
    30.841607,
    2,
    'data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8"?> <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <circle id="path-1" cx="1024" cy="468" r="15"></circle> <filter x="-23.3%" y="-16.7%" width="146.7%" height="146.7%" filterUnits="objectBoundingBox" id="filter-2"> <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feColorMatrix values="0 0 0 0 0.713089923   0 0 0 0 0.59085076   0 0 0 0 2.81364395e-05  0 0 0 0.404608243 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Парки" transform="translate(-1005.000000, -451.000000)"> <g id="Oval-3"> <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use> <use fill="#047EF9" fill-rule="evenodd" xlink:href="#path-1"></use> </g> </g> </g> </svg>',
    'база отдыха Петрушинский Хутор',
    'nashi-parki/otradnoe.html'
  ],
  [
    'Ters Park',
    59.956577,
    30.273935,
    3,
    'data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8"?> <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <circle id="path-1" cx="1244" cy="207" r="15"></circle> <filter x="-23.3%" y="-16.7%" width="146.7%" height="146.7%" filterUnits="objectBoundingBox" id="filter-2"> <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feColorMatrix values="0 0 0 0 0.713089923   0 0 0 0 0.59085076   0 0 0 0 2.81364395e-05  0 0 0 0.404608243 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Парки" transform="translate(-1225.000000, -190.000000)"> <g id="Oval-3-Copy-2"> <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use> <use fill="#BD04F9" fill-rule="evenodd" xlink:href="#path-1"></use> </g> </g> </g> </svg>',
    'Петровский пр.,4',
    'nashi-parki/tersk-park.html'
  ]
];

function initMap() {
  footer_map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 11,
    center: new google.maps.LatLng(59.9171483, 30.0448854),
    styles: [
      {
        stylers: [
          {
            saturation: -100
          }
        ]
      }
    ]
  });

  setMarkers(footer_map);
}

function setMarkers(map) {
  var markersBounds = new google.maps.LatLngBounds();
  var infowindow = new google.maps.InfoWindow();
  var contentString;
  var marker, i;

  for (var i = 0; i < parks.length; i++) {
    var park = parks[i];
    var markerPosition = new google.maps.LatLng(park[1], park[2]);
    markersBounds.extend(markerPosition);

    marker = new google.maps.Marker({
      position: markerPosition,
      map: map,
      /*icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 16,
        fillColor: '#f9cf04',
          strokeWeight: 0,
          fillOpacity: 1
      },*/
      icon: {
        anchor: new google.maps.Point(16, 16),
        url: park[4]
      },
      title: park[0],
      zIndex: park[3]
    });

    parks[i].push(marker);

    marker.addListener('click', function() {
      let id = this.zIndex;
      setParkActive(id);
    });

    contentString =
      '<div class="infowindow_content">' +
      '<a href="' +
      park[6] +
      '" class="location_link">Подробнее</a>' +
      '<div class="iw_title">' +
      park[0] +
      '</div>' +
      '<div class="iw_address">' +
      park[5] +
      '</div>' +
      '</div>';

    var infoBubble = new InfoBubble({
      map: map,
      content: contentString,
      position: markerPosition,
      shadowStyle: 0,
      padding: 30,
      backgroundColor: '#262626',
      borderRadius: 4,
      arrowSize: 0,
      borderWidth: 0,
      borderColor: '#262626',
      disableAutoPan: false,
      hideCloseButton: false,
      arrowPosition: 50,
      backgroundClassName: 'mybubble',
      arrowStyle: 0,
      minWidth: 332,
      maxWidth: 332,
      minHeight: 140,
      maxHeight: 140,
      offset: 20,
      closeSrc: '/assets/templates/kng/i/close-list-small.svg'
    });

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, contentString) {
        return function() {
          infoBubble.setContent(contentString);
          infoBubble.open(map, marker);
        };
      })(marker, contentString)
    );
  }

  map.setCenter(markersBounds.getCenter(), map.fitBounds(markersBounds));
}

$('.choose-park_select-map').click(function() {
  if (window.innerWidth >= 768) {
    $('.choose-park').addClass('choose-park--map');
    setTimeout(function() {
      $('.choose-park').removeClass('choose-park--map');
      $('.choose-park_select').css({ transform: 'unset', transition: 'none' });
      $('.choose-park_hero').remove();
    }, 700);
  }

  document.querySelector('.choose-park_map').scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
});

$('.choose-park_select-item').click(function() {
  let id = $(this).data('select-park');

  let marker = parks[id - 1][7];
  new google.maps.event.trigger(marker, 'click');

  setParkActive(id);
});

function setParkActive(id) {
  $('[data-select-park=' + id + ']')
    .addClass('choose-park_select-item--active')
    .siblings()
    .removeClass('choose-park_select-item--active');
}
