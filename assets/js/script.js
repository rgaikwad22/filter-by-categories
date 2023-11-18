var itemsList = document.querySelector(".filter-item-list");
var checkBox = document.querySelectorAll('input[type="checkBox"]');
var resetBtn = document.querySelector(".reset-btn");

var count = 0;

var categoryItemList = [
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "Inspiration",
    "pubDate": "19/04/2023",
    "para": "Finally it looks like we are experiencing something a bit like the beginning of summer. Lighter nights, warmer weather, a bit more green everywhere!! Now..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "School Canopies Fitted in the UK",
    "category": "Guides",
    "pubDate": "08/03/2023",
    "para": "Having school canopies installed at your school or nursery is an ideal way to let the children have more outside time. Come rain or shine,..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Community Enterprise buys local shop in Feckenham",
    "category": "Other News",
    "pubDate": "02/03/2023",
    "para": "There is nothing better than a community pulling together in times of need. One such community, in the village of feckenham, Worcestershire did just that..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "Environmental",
    "pubDate": "07/05/2023",
    "para": "There is nothing better than a community pulling together in times of need. One such community, in the village of feckenham, Worcestershire did just that..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "About 123v",
    "pubDate": "04/02/2023",
    "para": "Having school canopies installed at your school or nursery is an ideal way to let the children have more outside time. Come rain or shine,..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "Inspiration",
    "pubDate": "01/07/2023",
    "para": "There is nothing better than a community pulling together in times of need. One such community, in the village of feckenham, Worcestershire did just that..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "Guides",
    "pubDate": "23/04/2023",
    "para": "There is nothing better than a community pulling together in times of need. One such community, in the village of feckenham, Worcestershire did just that..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "Other News",
    "pubDate": "15/03/2023",
    "para": "Finally it looks like we are experiencing something a bit like the beginning of summer. Lighter nights, warmer weather, a bit more green everywhere!! Now..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the Finally it looks like we are experiencing something",
    "category": "Inspiration",
    "pubDate": "19/04/2023",
    "para": "Finally it looks like we are experiencing something a bit like the beginning of summer. Lighter nights, warmer weather, a bit more green everywhere!! Now..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "Environmental",
    "pubDate": "09/11/2023",
    "para": "Having school canopies installed at your school or nursery is an ideal way to let the children have more outside time. Come rain or shine,..."
  },
  {
    "imgUrl": "https://dummyimage.com/254x206/000/fff",
    "itemHeading": "Who cares about the weather if you have a Glass Veranda",
    "category": "About 123v",
    "pubDate": "17/02/2023",
    "para": "There is nothing better than a community pulling together in times of need. One such community, in the village of feckenham, Worcestershire did just that..."
  },
]

checkBox.forEach(el => {
  el.addEventListener("change", function () {
    if (el.checked === true) {
      changeCategoryItem(el.value)
    }else if (el.checked === false) {
      itemRemove();
      allItems(categoryItemList)
    }
  })
});

function allItems(categoryItemList) {
  if (count == 2 || count === 3) {
    itemRemove();
  }

  for (var item of categoryItemList) {
    appendData = `
      <li class="item">
        <figure>
          <a href="#FIXME" title="Weather">
              <img src="${item.imgUrl}" alt="${item.itemHeading}">
          </a>
        </figure>
        <div class="item-detail">
          <h2 class="item-heading">
            <a href="#FIXME" title="${item.itemHeading}">${item.itemHeading}</a>
          </h2>
          <span class="sub-category-bor">${item.category}</span>
          <span class="sub-category">${item.pubDate}</span>
          <p>${item.para}</p>
          <a href="#FIXME" title="Leatn More" class="learn-more-btn">Learn More</a>
        </div>
      </li>`;

    itemsList.innerHTML += appendData;
  }
}

function itemRemove(el) {
  var products = document.querySelectorAll(".filter-item-list > li");

  for (var product of products) {
    product.remove(el);
  }
}

function changeCategoryItem(cat) {
  var categoryOfData = cat;
  var category = categoryItemList.filter(function (cat) {
    if (cat.category === categoryOfData) {
      count += 1;
      return cat
    }
  })
  allItems(category)
}

resetBtn.addEventListener("click", function () {
  itemRemove();
  allItems(categoryItemList);
  checkBox.forEach(el => {
    if (el.checked === true) {
      el.checked = false;
    }
  });
  count = 0;
})

window.addEventListener("load", function () {
  allItems(categoryItemList);
});