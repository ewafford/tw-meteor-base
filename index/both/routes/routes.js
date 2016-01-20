const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/employees', {
  name: 'employees',
  action() {
    BlazeLayout.render( 'default', { yield: 'employees' } );
  }
});

authenticatedRoutes.route( '/managers', {
  name: 'managers',
  action() {
    BlazeLayout.render( 'default', { yield: 'managers' } );
  }
});
