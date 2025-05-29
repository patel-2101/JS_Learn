let accountId = 2525; // Changed from const to let
let accountEmail = "Patelji@gmail.com";
var accountPassword = "123450";
accountCity = "lko";

accountId = 4542; // ✅ Now allowed
accountEmail = "rp.gmail.com";

console.log(accountEmail);
console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity]);
