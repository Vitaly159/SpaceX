import './app.css';

function App() {

  return(
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <div className='inner'>
            <img src={require('./images/лого.png')} alt='logo' />
          </div>
        </div>

        <div className="nav-block">
          <ul className="nav">
            <div>
            <li>Главная</li>
            <li>Технология</li>
            <li>График полетов</li>
            </div>
            <div>
            <li>Гарантии</li>
            <li>О компании</li>
            <li>Контакты</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="content">
          <div className="left-block">
            <div id='main'><h1>ПУТЕШЕСТВИЕ</h1></div>           
            <p>на красную планету</p>
            <div className="btn-block">
              <div className="btn-start">
                  <span>Начать путешествие</span>
              </div>
            </div>
          </div>
          <div className="benefits">
          <div className="right-block">
            <div className="benefits-up-block">
              <div className="num1">
                <p className="little-up">мы</p>
                <p className="big">1</p>
                <p className="little-down">на рынке</p>
              </div>

              <div className="safety">
                <p className="little-up">гарантируем</p>
                <p className="big">50%</p>
                <p className="little-down">безопасность</p>
              </div>
            </div>

            <div className="benefits-down-block">
              <div className="calendar">
                <p className="little-up">календарик</p>
                <p className="big">2022</p>
                <p className="little-down">в подарок</p>
              </div>

              <div className="days">
                <p className="little-up">путешествие</p>
                <p className="big">597</p>
                <p className="little-down">дней</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
