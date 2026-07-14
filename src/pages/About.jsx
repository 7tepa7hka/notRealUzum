import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">
        Пользовательское соглашение Not Real Uzum
      </h1>
      <p className="about__updated">Последнее обновление: никогда, мы забыли</p>

      <section className="about__section">
        <h2>1. Общие положения</h2>
        <p>
          Заходя на сайт Not Real Uzum, вы автоматически соглашаетесь с тем, что
          это не настоящий Uzum, а учебный проект одного разработчика, который
          пил кофе и писал CSS до трёх ночи.
        </p>
      </section>

      <section className="about__section">
        <h2>2. Файлы cookie 🍪</h2>
        <p>
          Мы используем cookie, чтобы запоминать ваши предпочтения. На самом
          деле мы используем localStorage, но "cookie" звучит вкуснее и больше
          похоже на настоящий сайт.
        </p>
      </section>

      <section className="about__section">
        <h2>3. Персональные данные</h2>
        <p>
          Мы не собираем ваши персональные данные, потому что у нас нет ни
          бэкенда, ни базы данных, ни, честно говоря, особого желания их
          обрабатывать.
        </p>
      </section>

      <section className="about__section">
        <h2>4. Товары на сайте</h2>
        <p>
          Все товары взяты с FakeStoreAPI. Купить их здесь нельзя — это не баг,
          это фича. Кнопка "Купить" на 100% декоративная и существует
          исключительно для красоты.
        </p>
      </section>

      <section className="about__section">
        <h2>5. Ответственность</h2>
        <p>
          Разработчик не несёт ответственности за: бессонные ночи, желание
          пересмотреть архитектуру в третий раз, а также за случайную любовь к
          React Router.
        </p>
      </section>

      <section className="about__section">
        <h2>6. Технический стек</h2>
        <ul className="about__stack">
          <li>⚛️ React + Vite</li>
          <li>🧭 React Router (Layout / Outlet)</li>
          <li>🔔 React Toastify</li>
          <li>🛍️ FakeStoreAPI для товаров</li>
          <li>☕ Кофеин как основной источник энергии</li>
        </ul>
      </section>

      <p className="about__footer">
        Продолжая пользоваться сайтом, вы соглашаетесь, что это было весело
        сделать. Спасибо, что заглянули 💜
      </p>
    </div>
  );
}

export default About;
