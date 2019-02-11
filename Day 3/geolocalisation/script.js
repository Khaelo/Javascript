'use strict';

if (navigator.geolocation) {
    const successCallback = (position) => {
        console.log('position', position);
        const link = document.createElement('a');
        link.setAttribute('href', `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`);

        link.setAttribute('target', '_blank');
        link.innerText = 'Open position';
        
        document.querySelector('body').appendChild(link);
    }
    const errorCallback = (error) => {
        console.log('error', error);
        const GEO_ERRORS = {
            PERMISSION_DENIED: 1,
            POSITION_UNAVAILABLE: 2,
            TIMEOUT: 3
          }
          if (error.code === GEO_ERRORS.PERMISSION_DENIED) {
              alert('Share your position, please !');
          }
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}