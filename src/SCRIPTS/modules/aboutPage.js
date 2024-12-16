export const createHeaderPrimary = function (element, text) {
  const header = document.createElement("h2");
  header.classList.add("main-header");
  element.appendChild(header);

  header.textContent = text;
  return header;
};

export const createHeaderSecondary = function (element, text) {
  const header = document.createElement("h2");
  element.appendChild(header);

  header.textContent = text;
  return header;
};

export const createContent = function (element, content) {
  const paragraph = document.createElement("p");
  element.appendChild(paragraph);

  paragraph.textContent = content;
  return paragraph;
};

export const lineBreak = function (element) {
  const enterNextLine = document.createElement("br");
  element.appendChild(enterNextLine);
};

export const createListText = function (element, array) {
  const unorderedList = document.createElement("ul");
  element.appendChild(unorderedList);

  array.forEach(function (arr) {
    const firstItem = document.createElement("li");
    firstItem.classList.add("first-list-item");
    firstItem.textContent = arr[0];
    unorderedList.appendChild(firstItem);
    const secondItem = document.createElement("li");
    secondItem.classList.add("second-list-item");
    firstItem.appendChild(secondItem);
    secondItem.textContent = arr[1];
    return secondItem;
  });
};
