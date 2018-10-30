const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = {
    species: evt.target.species,
    location: evt.target.location,
    date: evt.target.date
  }
  PubSub.publish("SightingFormView:sighting-submitted", newSighting);
  evt.target.reset();
}

module.exports = SightingFormView;
