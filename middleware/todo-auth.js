export default async function({$auth, next}) {
  let user = $auth.$state.user;
  if (user /* && user.admin */) {
    // let the user in

  } else {
    // redirect to /login
    next('/login')
  }
}