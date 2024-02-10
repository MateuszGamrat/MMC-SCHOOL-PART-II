const passLength = 1

// WYMOGI
// Bardzo dobre hasło ma >10 znaków
// Dobre hasło ma 5-10 znaków
// Słabe hasło ma <5 znaków

if(passLength >= 10){
    console.log("Bardzo mocne hasło");
}else if(passLength > 5 && passLength < 10){
    console.log("Mocne hasło");
}else{
    console.log("SŁabe hasło");
}