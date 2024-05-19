import React from "react";

class App extends React.Component {
  render() {
    return(
      
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span class="fs-4">PayWidget</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Главная</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Особенности</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Контакты</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Вопросы</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Информация</a></li>
        </ul>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </header>
      
    )
  }
}

export default App