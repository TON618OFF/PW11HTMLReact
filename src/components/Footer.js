import React from "react";

class App extends React.Component {
  render() {
    return(
      
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col mb-3">
          <h5>Основное</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a class="nav-link p-0 test">Главная</a></li>
            <li class="nav-item mb-2"><a class="nav-link p-0 test">Особенности</a></li>
            <li class="nav-item mb-2"><a class="nav-link p-0 test">Платные услуги</a></li>
            <li class="nav-item mb-2"><a class="nav-link p-0 test">Вопрос-Ответ</a></li>
            <li class="nav-item mb-2"><a class="nav-link p-0 test">О Компании</a></li>
          </ul>
        </div>
      </footer>
      
    )
  }
}

export default App