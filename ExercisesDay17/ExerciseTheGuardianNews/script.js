const myPage = async () => {
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
  );
  console.log(response);
  const data = await response.json();
  console.log(data.data);
  return data.data;
};

const myMenu = (container, data) => {
  data.forEach((item) => {
    const myList = document.createElement("button");
    myList.className = "button";
    myList.innerHTML = item;
    container.appendChild(myList);
    myList.addEventListener("click", () => {
      loadArticles(item);
    });
  });
};

const buildMenu = await myPage();

myMenu(document.querySelector(".navigation"), buildMenu);

const loadArticles = async (category) => {
  const response1 = await fetch(
    `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`
  );
  console.log(response1);
  const data1 = await response1.json();
  console.log(data1.data.channel);
  return data1.data.channel;
};

loadArticles();
