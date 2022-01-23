function getDataFromCells(rows) {
  const setData = (currentRow) => {
    const row = {};
    const cells = currentRow.querySelectorAll("td");
    row["raking"] = cells[1].innerText;
    row["icon"] = cells[2].querySelector("img").getAttribute("src");
    row["name"] = cells[2]
      .querySelector(".tw-flex-auto")
      .querySelectorAll("a")[0]
      .innerText.replace(/\r?\n|\r/g, "");
    row["code"] = cells[2]
      .querySelector(".tw-flex-auto")
      .querySelectorAll("a")[1]
      .innerText.replace(/\r?\n|\r/g, "");

    // PRICE
    const priceCell = cells[4];
    row["price"] = priceCell.getAttribute("data-sort");
    row["btc-price"] = priceCell.children[0].getAttribute("data-price-btc");

    data.push(row);
  };

  const data = [];
  rows.forEach((row) => {
    setData(row);
  });
  return data;
}
