import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div className="cv">
    <img src="https://downloadillustrations.com/wp-content/uploads/2020/12/CleanShot-2020-12-06-at-06.57.14.png" alt="avatar"/>
        <h1>Nome e Cognome</h1>

    <div className="desc"> 
        <h3>Descrizione</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus ab, iusto illo exercitationem temporibus autem? Itaque labore esse id quis voluptatibus earum nesciunt temporibus tempora, ab, asperiores deleniti consequatur.</p>
    </div>

    <div className="info">
        <div className="infoItem">
          <h3>Esperienze lavorative</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias blanditiis. Vitae necessitatibus eligendi veniam impedit unde corrupti tempora rem, quia deleniti minima tenetur accusantium commodi sequi, distinctio a repellat!</p>
        </div>

        <div className="infoItem">
          <h3>Lingue</h3>
          <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quas expedita tempore eveniet animi vel obcaecati non accusantium voluptates. Magnam ullam culpa odio harum vel maxime, sunt modi exercitationem repellat.</p>
        </div>

        <div className="infoItem">
          <h3>Hobby</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt minus iusto alias suscipit, nihil perspiciatis enim id iste voluptatem numquam molestiae magnam, labore error excepturi facere modi quaerat? Eaque?</p>
        </div>
   </div>


        <form>
          <h3>Contattami</h3>
          <label for="oggetto">Oggetto</label>
          <input type="text" name="oggetto" id="oggetto"/>
          <label for="messaggio">Messaggio</label>
          <input type="text" name="messaggio" id="messaggio"/>
        </form>

        <a href="mailto:indirizzo@email.com">Scrivi una mail</a>
    </div>
    );
}

export default App;
