// alert( null || 2 || undefined );

// alert( alert(1) || 2 || alert(3) );

// alert( 1 && null && 2 );

// alert( alert(1) && alert(2) );

// alert( null || 2 && 3 || 4 );

// if (age >=14 && age<=90);

// if (age <14 || age>90);
// if (!(age >=14 && age<=90));

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

let who = prompt("Who is there ?");
if (who == "admin") {
  let password = prompt("Password ?");
  if (password == "boss") {
    alert("Hello !");
  } else if (password == "" || password == null) {
    alert("Canceled.");
  } else {
    alert("Password incorrect.");
  }
} else if (who == "" || who == null) {
  alert("Canceled.");
} else {
  alert("I dont know you.");
}
