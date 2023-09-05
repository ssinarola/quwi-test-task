export default function isAuth({ redirect, $auth, route }) {
  if (!$auth.loggedIn && route.path !== "/login") {
    return redirect("/login");
  } else if ($auth.loggedIn && route.path !== "/") {
    return redirect("/");
  }
}
