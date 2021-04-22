function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // *must be a valid Latitude (-90 to 90)
  // *must be a valid Longitude (-180 to 180)
  console.log('work');

  let res = true;
  const latitude = document.querySelector('#latitude');
  const longitude = document.querySelector('#longitude');
  const latitudeError = document.querySelector('#latitudeError');
  const longitudeError = document.querySelector('#longitudeError');
  // console.log(Number.isNaN(latitude.value), Number.isNaN(longitude.value))
  console.log(Number(latitude.value), Number(longitude.value))
  latitudeError.innerText = '';
  longitudeError.innerText = '';
  const latNumber = Number(latitude.value);
  const lonNumber = Number(longitude.value);
  if (Number.isNaN(latNumber)) {
      latitudeError.innerText = ' must be a valid Latitude (-90 to 90)';
      res = false;
  }
  if (Number.isNaN(lonNumber)) {
      longitudeError.innerText = ' must be a valid Longitude (-180 to 180)';
      res = false;
  }

  if (latNumber > 90 || latNumber < -90) {
      latitudeError.innerText = ' must be a valid Latitude (-90 to 90)';
      res = false;
  }
  if (lonNumber > 180 || lonNumber < -180) {
      longitudeError.innerText = ' must be a valid Longitude (-180 to 180)';
      res = false;
  }

  if (!res) {
      event.preventDefault();
  }
  console.log('TODO - validate the longitude, latitude values before submitting');
  return res
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};