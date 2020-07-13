async function getUserAsync() {
  const userData = await fetch("https://randomuser.me/api/?results=1&nat=br");
  const user = await userData.json();
  return user.results[0];
}

window.addEventListener("load", async () => {
  const user = await getUserAsync();
  putPhoto(user, "#imgAvatar");
  putPhoto(user, "#menuAvatar");
});

function putPhoto(user, id) {
  const img = document.querySelector(id);
  img.src = user.picture.thumbnail;
}
