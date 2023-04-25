
import { dataMenager } from "../data/data-manager";
import { createEl } from "../common/createEl";

export function Home() {


  const conatainer = createEl("div", ["home-container"]);

  const home = createEl("div", ["home"]);
  const landing = createEl("div", ["landing"]);
  const caption = createEl("div", ["text-center", "caption"]);

  landing.innerHTML = `        
  <div class="home-wrap">
    <div class="home-inner"></div>
  </div>
`;

  home.append(landing, caption);

  const section = document.createElement("div");
  const homeInner = landing.querySelector(".home-inner");
  homeInner.append(section);

  section.innerHTML = `
      <!--<h2 class = "header">Home</h2>-->
      <div id="carouselControls" class="imagesBilboard carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="car car1 carousel-item active data-bs-interval="1000"">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Witaj w IT-Spa</h5>
                  <p>Najlepsze zabiegi kosmetyczne w regionie</p>
              </div>
            </div>
            <div class="car car2 carousel-item data-bs-interval="2000"">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Witaj w IT-Spa</h5>
                  <p>Doświadczona i profesjonalna obsługa</p>
              </div>
            </div>
            <div class="car car3 carousel-item data-bs-interval="3000"">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Witaj w IT-Spa</h5>
                  <p>Zajmiemy się wszystkim co Cię boli.</p>
              </div>
            </div>
        </div>
      </div>
    `;
  //caption.append(section);
  const img1 = document.createElement("img");
  img1.classList.add("d-block", "w-100");
  img1.src = require("../assets/mainPage/spa-face.jpg");

  const img2 = document.createElement("img");
  img2.classList.add("d-block", "w-100");
  img2.src = require("../assets/mainPage/spa-chill.jpg");

  const img3 = document.createElement("img");
  img3.classList.add("d-block", "w-100");
  img3.src = require("../assets/mainPage/spa-stones.jpg");

  const div1 = section.querySelector(".car1");
  div1.append(img1);
  const div2 = section.querySelector(".car2");
  div2.append(img2);

  const div3 = section.querySelector(".car3");
  div3.append(img3);
  // section.append(img);
  const course = createEl("div", [], { id: "course" });
  course.innerHTML = `
  <div id="course">
		<div class="text-center col-12">
			<p>Zobacz więcej o naszej firmie w linku:</p>
			<a class="btn btn-secondary btn-md" href="https://www.podyplomowe.it" target="_blank">Więcej o firmie</a>
		</div>
	</div>
  `;
  const feature = createEl("div", [], { id: "features" });
  feature.innerHTML = `
  <div class="jumbotron text-center">
    <h2>Poznaj nasze oferty:</h2>
    <ul class="features-list">
      <li>
        <div>
          Kąpiel w gorącej kawie
          <i class="fa-solid fa-exclamation fa-beat fa-2x"></i>
        </div>
      </li>
      <li>
        <div>
          Biczowanie kablem od myszy
          <i class="fa-solid fa-exclamation fa-beat fa-2x"></i>
        </div>
      </li>
      <li>
        <div>
          Peeling odłamkami płyty CD
          <i class="fa-solid fa-exclamation fa-beat fa-2x"></i>
        </div>
      </li>
      <li>
        <div>
          Pedicure woskiem z USB
          <i class="fa-solid fa-exclamation fa-beat fa-2x"></i>
        </div>
      </li>
      </ul>
      <hr class="line" />
    </div>
  </div>
  `;

  const resources = createEl("div", [], { id: "resources" });
  resources.innerHTML = `
      <div class="jumbotron">
      <div class="narrow">
        <div class="heading col-12">
          <h3 class="text-center">Dlaczego jesteśmy wyjątkowi?</h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <div class="resource">    
                      <i class="fa=sharp fa-solid fa-comments-dollar fa-5x"></i>
              <h3>Ceny</h3>
              <p>Nasze usługi mają najniższe ceny w regionie! Zapłacisz mniej za należny Tobie relaks!</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="resource">    
                      <i class="fa-solid fa-people-group fa-5x"></i>
              <h3>Obsługa</h3>
              <p>Posiadamy doświadczonych pracowników, którzy umilą Ci pobyt oferując usługi na ponadklasowym poziomie!</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="resource">    
                      <i class="fa-solid fa-building-user fa-5x"></i>
              <h3>Wyposażenie</h3>
              <p>Oferujemy komfortowe warunki bytowe. Nasze pokoje są dostosowane do wymagań nawet najbardziej wybrednych osób!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const clients = createEl("div", [], { id: "clients" });
  clients.innerHTML = `
      <div class="jumbotron">
      <div class="heading col-12">
        <h3 class="text-center">Opinie naszych klientów:</h3>
      </div>
      <div class="row text-center">
        <div class="col-md-6">
          <div class="row">
            <div id="sarah" class="col-lg-4 col-sm-4">
              
            </div>
            <div class="col-lg-8 col-sm-8">
              <blockquote class="blockquote text-center">
                <p>
                  Moment w którym pierwszy raz skorzystałam z usług IT-SPA
                  był najbardziej relaksującym przeżyciem w moim życiu. 
                  Niewątpliwie jest to najwspanialsze miejsce by wypocząć i się zrelaksować. 
                </p>
              </blockquote>
              <hr class="jumbo-line" />
              <footer class="blockquote-footer">
                <cite>Sarah Conor</cite>
              </footer>
            </div>
          </div>
        </div>
    <div class="col-md-6">
          <div class="row text-center">
            <div id="cleo" class="col-lg-4 col-sm-4">
              
            </div>
            <div class="col-lg-8 col-sm-8">
              <blockquote class="blockquote text-center">
                <p>
                 Wspaniał obsługa. Niekonwencijonalne usługi i niesamowicie ciche miejsce.
                 Wracam tu zawsze gdy potrzebuje odrobiny wytchnienia i naładowania akumulatorów.
                </p>
              </blockquote>
              <hr class="jumbo-line" />
              <footer class="blockquote-footer">
                <cite>Cleo Smith</cite>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const imgSarah = createEl("img", ["client"]);
  const imgCleo = createEl("img", ["client"]);

  imgSarah.src = require("../assets/mainPage/spa-sarah.jpg");
  imgCleo.src = require("../assets/mainPage/sarah.jpg");

  const cleoDiv = clients.querySelector("#cleo");
  const sarahDiv = clients.querySelector("#sarah");

  sarahDiv.append(imgSarah);
  cleoDiv.append(imgCleo);

  const contact = createEl("div");
  contact.innerHTML = `
<footer>
<div class="col-12 text-center">
<h3 class="heading">Kontakt do twórców:</h3>
<a class ='icon'> </a>
<p>Better skin - Better future</p>
<strong>Informacje pod numerem 444333222</strong>
<hr />
<a href="https://www.youtube.com" target="_blank">
  <i class="fab fa-youtube-square fa-2x"></i>
</a>
<a href="https://www.amazon.com" target="_blank">
  <i class="fab fa-amazon fa-2x"></i>
</a>

</div>
</footer>

`;

  const icon = createEl("img");
  icon.src = require("../assets/navBrand-2.png");

  contact.querySelector(".icon").append(icon);

  conatainer.append(
    home,
    course,

    course,
    feature,
    resources,

    clients,
    contact
  );

  return conatainer;
}
