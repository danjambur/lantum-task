export async function getShifts() {
  return await fetch(
    "https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions",
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => res)
    .catch((err) => err);
}
