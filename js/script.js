let $dropdownBtn = $(".navbar-toggler");
let $dropdownItems = $(".collapse");
console.log($dropdownBtn);

console.log($dropdownItems);

$dropdownBtn.click(function () {
  $dropdownItems.toggle();
  console.log();
});
