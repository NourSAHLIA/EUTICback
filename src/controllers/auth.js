export async function login(req, res, next) {
  console.log(req.body);
  const { email, password } = req.body;
  if (email === "admin@utic.com.tn" && password === "admin" || email === "superadmin@utic.com.tn" && password === "superadmin") {
    return res.sendStatus(200);
  }
  return res.sendStatus(401);
}
