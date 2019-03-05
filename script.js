// JSON
const apiURL = "data.json";
const $list = $(".users-list");
function readData() {
  $.ajax({
    url: apiURL
  }).done(ret => {
    ret.forEach(user => {
      const $element = $(`
      <section class="products marginBottom300">
      <div class="product">
        <div class="promocy displayFlex">
          <div class="items-left"><img src="img/trolleyplus-icon.png" alt="trolleyplus-icon"/>
            sztuk: ${user.availability.name}
          </div>
          <div class="promoprice">
            <span class="spanOne">oszczędzasz:</span> <span class="spanTwo">${user
              .price.gross.base_float - user.price.gross.promo_float} zł</span>
          </div>
        </div>
        <div class="image">
          <img
            src="https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_${
              user.main_image
            }.jpg"
            alt="fotel"
          />
        </div>
        <div class="priceBothParent">
        <div class="priceBoth displayFlex">
          <span class="priceBothLeft">${user.price.gross.promo}</span>
          <span class="priceBothRight">${user.price.gross.base}</span>
        </div>
        <div class="nameModel">
          ${user.name}
        </div>
        <div class="group">Grupa ${user.producer.name}</div>
      </div>
      </div>
    </section>`);
      $list.append($element);
    });
  });
}
readData();

// Show in $
$(document).ready(function() {
  $(".itemsPage").on("click", function() {
    let singleValues = $(".itemsPage").val();
    $(".products").removeClass("two");
    $(".products").removeClass("four");
    $(".products").removeClass("eight");
    $(".products").toggleClass(singleValues);
  });
});

$(document).ready(function() {
  $(".reset").on("click", function() {
    $(".products").removeClass("two");
    $(".products").removeClass("four");
    $(".products").removeClass("eight");
  });
});
