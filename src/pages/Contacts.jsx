function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <div>Moscow, Russia</div>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Phone Number</h2>
            <div>
              <a href="tel:+79663262747">+7 (966) 326-27-47</a>
            </div>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <div>
              <a href="mailto:potapov_andrey22@mail.ru">
                potapov_andrey22@mail.ru
              </a>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;
