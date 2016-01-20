const emailVerified = ( user ) => {
  return _.some(user.emails, function(email) {
    return email.verified
  });
};

Template.default.helpers({
  loggingIn() {
    return Meteor.loggingIn();
  },
  notVerified() {
    return !emailVerified(Meteor.user())
  },
  authenticated() {
    return !Meteor.loggingIn() && Meteor.user();
  }
});
