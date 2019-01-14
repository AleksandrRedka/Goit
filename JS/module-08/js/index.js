/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    




    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/previewFull-1.jpeg",
    alt: "Image First"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/previewFull-2.jpeg",
    alt: "Image Second"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/previewFull-3.jpeg",
    alt: "Image Three"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/previewFull-4.jpeg",
    alt: "Image Four"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/previewFull-5.jpeg",
    alt: "Image Five"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/previewFull-6.jpeg",
    alt: "Image Six"
  }
];

/*
// /======================================================================================================================
// 
*/

// Full Window
(() => {
  // function createContent() {
  // Создание дива для фуллкартинки

  const fullview = document.createElement("div");
  fullview.classList.add("fullview");

  // Создание картинки с атрибутами в див
  const mainImage = document.createElement("img");
  mainImage.classList.add("main-gallery-window");
  mainImage.setAttribute("src", "img/previewFull-1.jpeg");
  mainImage.setAttribute("alt", "Image First");

  // Вставка картинки в див
  fullview.append(mainImage);

  // Создание списка для галереи картинок
  const listGallery = document.createElement("ul");
  listGallery.classList.add("preview");

  // Создание и вставка галереи в список
  const createListGallery = function({ preview, fullview, alt }) {
    const item = document.createElement("li");

    const imageItem = document.createElement("img");
    imageItem.classList.add("preview-image");
    imageItem.setAttribute("src", `${preview}`);
    imageItem.setAttribute("data-fullview", `${fullview}`);
    imageItem.setAttribute("alt", `${alt}`);

    item.append(imageItem);
    listGallery.append(item);
    return item;
  };

  // Обработка входящего масива
  const result = listImage(galleryItems);
  function listImage(arr) {
    return arr.reduce((acc, el) => {
      return acc.concat(createListGallery(el));
    }, []);
  }
  // Вставка всех елементов в HTML
  const gallery = document.querySelector(".js-image-gallery");
  gallery.append(fullview, listGallery);
  // }
  // ChooseElementImage;
  function pictureSelection() {
    const picture = document.querySelector(".preview");
    picture.addEventListener("", changePicture);

    function changePicture(event) {
      const target = event.target
      target.classList.add("js-choose-image")
      const pictureParent = target.nodeName;
      const imageSrcFull = target.dataset.fullview;

      if (pictureParent !== "IMG") return;
      mainImage.removeAttribute("src");
      mainImage.setAttribute("src", imageSrcFull);
    }
  }
  pictureSelection();
})();
