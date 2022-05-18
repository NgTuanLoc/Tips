"Bad Code 💩";
function badFunction(wifi, login, admin) {
  if (wifi) {
    if (login) {
      if (admin) {
        console.log("PASS 🎉");
      } else {
        console.log("Must be an administrator 🚫");
      }
    } else {
      console.log("Must login in your account 🚫");
    }
  } else {
    console.log("Must be connected to wifi 🚫");
  }
}

("Good Code ✅");
function goodFunction(wifi, login, admin) {
  if (!wifi) {
    console.log("Must be connected to wifi 🚫");
    return;
  }

  if (!login) {
    console.log("Must login in your account 🚫");
    return;
  }

  if (!admin) {
    console.log("Must be an administrator 🚫");
    return;
  }
  console.log("PASS 🎉");
}
