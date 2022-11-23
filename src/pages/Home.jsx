import React from 'react';
import Button from 'react-bootstrap/Button';

function Home( { data, setData } ) {
  function handleClick() {
    //console.log("<<<")
  }

  return (
    <article className="home home-bg">
      <div className="transbox">
        <section>
          <h1>KENNEL BUDDIES</h1>
            <div>
              <p>Get your kind buddy!</p>
            </div>
            <Button onClick={handleClick}
                  href="/pets"
                  className="see-more"
                  activeStyle={{
                    background: "darkblue",
                  }}>
                  See My Friends
            </Button>
        </section>
      </div>
    </article>
  );
}

export default Home;