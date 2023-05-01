const Portfolio = (() => {
    let pageNumber = 0;
    
    const pages = [
      { background: "#edc7a9", circle: "#3e78ed", copy: "Web developer based in Toulouse, FRA" },
      { background: "#a1fffe", circle: "#e34a47", copy: "Dev in Fintech industry" },
      { background: "#d3c7f3", circle: "#f7fe00", copy: "Kanye West Enthousiast" },
      { background: "#faffb8", circle: "#b472e6", copy: `Letting you download my <a href="pdf.pdf">resume</a>` }
    ];
  
    const dom = {
      previousTag: document.querySelector(".previous"),
      randomTag: document.querySelector(".random"),
      nextTag: document.querySelector(".next"),
      outputTag: document.querySelector("h2"),
      circleTag: document.querySelector(".circle"),
      body: document.querySelector("body")
    };
  
    const init = () => {
      bindEvents();
    };
  
    const bindEvents = () => {
      dom.nextTag.addEventListener("click", next);
      dom.previousTag.addEventListener("click", previous);
      dom.randomTag.addEventListener("click", random);
      document.addEventListener("keyup", handleKeyPress);
    };
  
    const handleKeyPress = (e) => {
      if (e.key == "ArrowRight") {
        previous();
      } else if (e.key == "ArrowLeft") {
        next();
      }
    };
  
    const updateSection = () => {
      const currentPage                     = pages[pageNumber];
      dom.outputTag.innerHTML               = currentPage.copy;
      dom.circleTag.style.backgroundColor   = currentPage.circle;
      dom.body.style.backgroundColor        = currentPage.background;
    };
  
    const next = () => {
      pageNumber = (pageNumber + 1) % pages.length;
      updateSection();
    };
  
    const previous = () => {
      pageNumber = (pageNumber - 1 + pages.length) % pages.length;
      updateSection();
    };
  
    const random = () => {
      pageNumber = Math.floor(Math.random() * pages.length);
      updateSection();
    };
  
    init();
  
    return {
      next,
      previous,
      random
    };
  })();
  