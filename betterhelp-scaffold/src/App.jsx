function App() {
  return (
    <section className="hero is-primary is-large is-outlined">
      <div className="hero-footer">
        <p className="title">Hero Title</p>
        <p className="subtitle">Hero Subtitle</p>
      </div>
      <div class="columns">
  <div class="column">
    <p class="bd-notification is-info">First column</p>
    <div class="columns is-mobile">
      <div class="column">
        <p class="bd-notification is-info">First nested column</p>
      </div>
      <div class="column">
        <p class="bd-notification is-info">Second nested column</p>
      </div>
    </div>
    </div>
    </section>
  );
}

export default App;
