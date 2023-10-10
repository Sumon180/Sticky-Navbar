import { useEffect, useState } from "react";

function App() {
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScrollClass("after-scroll-navbar");
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    bgImg: {
      backgroundImage: "url(pic.jpg)",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "100vh",
    },
    navbar: {
      backgroundColor: scrollClass ? "#fff" : "transparent",
      color: scrollClass ? "#fff" : "#333",
    },
  };

  return (
    <>
      <div style={styles.bgImg}>
        <nav
          className={`navbar ${scrollClass}`}
          id="bg-navbar"
          style={styles.navbar}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <main style={{ width: "100rem",margin:"auto", paddingTop: "100px" }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            iusto, voluptas ducimus repellendus itaque a aperiam maiores neque,
            nostrum asperiores soluta perferendis quaerat rem deserunt.
            Quibusdam nobis repudiandae, commodi culpa, vero quod impedit
            aperiam excepturi modi illum quaerat mollitia enim accusamus
            deleniti ipsum maiores quisquam? Quae recusandae officiis voluptatem
            non aliquam odio sed rem reprehenderit, tenetur delectus molestiae
            sit eos velit ducimus inventore debitis saepe deleniti nisi vero
            repellat maxime assumenda labore. Est, soluta rerum. Obcaecati
            accusantium, voluptatem natus nulla nostrum aliquid itaque veniam
            eius quae debitis soluta quis sit recusandae neque optio unde nobis,
            iste excepturi perferendis error aliquam praesentium, esse quaerat
            impedit? Eveniet delectus molestias nostrum modi earum? Nisi et cum
            inventore. Veniam id sequi delectus est consequatur eaque dolores
            reiciendis, cum explicabo saepe suscipit ratione qui molestiae.
            Cupiditate, necessitatibus culpa deleniti in incidunt minus ut!
            Quidem a dolor aut odio. Ratione quod repudiandae magnam hic quaerat
            esse iure sit. Soluta, architecto dolore quam porro repellat iste
            hic tempora provident possimus ratione voluptatibus, vel expedita
            eius reiciendis laudantium corporis culpa magni suscipit rerum
            ducimus beatae voluptatem incidunt alias laboriosam! Provident
            voluptas veritatis et quo, tempora quos vitae magni, officiis
            numquam fugiat, voluptate debitis quam? Atque dignissimos neque
            dolorem voluptatibus corporis ut nostrum ipsam eligendi, ullam
            officiis sed quasi eveniet quibusdam perferendis numquam illo,
            mollitia sunt voluptas fuga. Quidem et a eveniet natus dolorem
            architecto beatae deserunt. Iusto officiis quis omnis non explicabo
            blanditiis incidunt molestias et porro ipsum adipisci nostrum
            accusantium maxime quisquam, dicta alias at soluta sint suscipit hic
            quia pariatur accusamus inventore! Eveniet, itaque expedita
            reprehenderit ipsa recusandae facilis et, impedit odio quibusdam
            iste sed eum, deleniti dolorum unde incidunt quae. Perferendis neque
            nobis quisquam fugit praesentium labore quia, aperiam excepturi ut
            autem quae illo enim officiis magnam eaque distinctio maiores
            placeat eligendi minima harum obcaecati assumenda quis accusamus!
            Exercitationem aliquam dolorum possimus! Id illum, commodi dolorem
            aliquid beatae earum explicabo, voluptatum doloribus eos modi
            veniam, quibusdam dolorum. Doloribus libero, exercitationem quas a
            accusantium voluptas soluta magni. Minus, sit nobis harum tempora
            molestiae inventore, eius cumque, beatae eos dignissimos sint soluta
            magni maiores nihil cupiditate necessitatibus natus. Illo itaque,
            rem saepe ipsa eos enim laboriosam minus sapiente, commodi excepturi
            libero cupiditate. Numquam ducimus doloremque voluptatem officia,
            impedit laboriosam doloribus labore enim repellendus sapiente
            delectus laudantium, consequatur consectetur libero velit
            repudiandae et in fuga quod cupiditate illo. Dolore reprehenderit
            numquam quos modi odit quidem, debitis veniam iure tempora esse
            magni. Numquam incidunt ipsam odio voluptates expedita facilis,
            atque adipisci vel quas ea unde dicta voluptatum ex totam delectus
            mollitia. Quidem sunt quam quod odit fuga error doloremque magnam!
            Libero iste, illo dolore quibusdam totam ducimus maxime quidem
            deleniti perspiciatis impedit similique inventore. Sed minima ad
            explicabo autem quas. Veniam error vel at veritatis accusamus
            officia distinctio modi totam rerum. Dolores blanditiis animi
            voluptas eos sunt in quod non qui ratione aut eligendi quam quae
            voluptatibus ullam esse veritatis, nesciunt magni maiores. Quos
            cupiditate nulla praesentium quae quas, ratione nostrum quaerat
            incidunt atque voluptate dicta reprehenderit veniam commodi!
          </p>
        </main>
      </div>
      <div
        style={{
          width: "100rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:"50px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            commodi consequatur molestias perferendis tempora! Animi aperiam quo
            cupiditate quam sit, ipsum repudiandae minima temporibus dolor
            molestias ad architecto natus exercitationem blanditiis tempore
            beatae ex esse quos culpa. Doloribus consequuntur voluptatibus
            distinctio hic maxime laudantium perspiciatis, quas ipsam velit
            quaerat? Consectetur perferendis eligendi asperiores corporis odit
            vitae quae enim recusandae minus esse unde totam aspernatur eum,
            saepe facere sed in ipsa laudantium repellendus. Delectus quod
            perferendis ratione sed sint beatae temporibus earum repudiandae
            fugiat explicabo quos, ad minima veniam quasi quia ex corporis?
            Maxime corrupti beatae, iure laudantium earum porro ipsum cupiditate
            quod at deserunt ad eius, officia blanditiis magni, fugit expedita!
            Esse expedita cum quasi tempore reprehenderit exercitationem omnis
            quisquam. Rem impedit cupiditate dolorem possimus dolor! Unde veniam
            aliquam debitis ducimus iure dolore delectus. Provident, distinctio!
            Laboriosam ad obcaecati quis fugit blanditiis in distinctio quasi ut
            doloremque porro consectetur fugiat iusto, ipsam dicta veniam
            numquam molestiae voluptatem odio. Magni necessitatibus animi
            veritatis distinctio quisquam possimus nulla quasi esse ipsam harum
            sit sint quaerat fuga commodi officiis maiores, a quis! Facilis
            necessitatibus eum officia molestiae a optio consectetur, soluta
            atque! Laboriosam deserunt corporis non maiores totam aut placeat
            velit officiis explicabo!
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            commodi consequatur molestias perferendis tempora! Animi aperiam quo
            cupiditate quam sit, ipsum repudiandae minima temporibus dolor
            molestias ad architecto natus exercitationem blanditiis tempore
            beatae ex esse quos culpa. Doloribus consequuntur voluptatibus
            distinctio hic maxime laudantium perspiciatis, quas ipsam velit
            quaerat? Consectetur perferendis eligendi asperiores corporis odit
            vitae quae enim recusandae minus esse unde totam aspernatur eum,
            saepe facere sed in ipsa laudantium repellendus. Delectus quod
            perferendis ratione sed sint beatae temporibus earum repudiandae
            fugiat explicabo quos, ad minima veniam quasi quia ex corporis?
            Maxime corrupti beatae, iure laudantium earum porro ipsum cupiditate
            quod at deserunt ad eius, officia blanditiis magni, fugit expedita!
            Esse expedita cum quasi tempore reprehenderit exercitationem omnis
            quisquam. Rem impedit cupiditate dolorem possimus dolor! Unde veniam
            aliquam debitis ducimus iure dolore delectus. Provident, distinctio!
            Laboriosam ad obcaecati quis fugit blanditiis in distinctio quasi ut
            doloremque porro consectetur fugiat iusto, ipsam dicta veniam
            numquam molestiae voluptatem odio. Magni necessitatibus animi
            veritatis distinctio quisquam possimus nulla quasi esse ipsam harum
            sit sint quaerat fuga commodi officiis maiores, a quis! Facilis
            necessitatibus eum officia molestiae a optio consectetur, soluta
            atque! Laboriosam deserunt corporis non maiores totam aut placeat
            velit officiis explicabo!
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            commodi consequatur molestias perferendis tempora! Animi aperiam quo
            cupiditate quam sit, ipsum repudiandae minima temporibus dolor
            molestias ad architecto natus exercitationem blanditiis tempore
            beatae ex esse quos culpa. Doloribus consequuntur voluptatibus
            distinctio hic maxime laudantium perspiciatis, quas ipsam velit
            quaerat? Consectetur perferendis eligendi asperiores corporis odit
            vitae quae enim recusandae minus esse unde totam aspernatur eum,
            saepe facere sed in ipsa laudantium repellendus. Delectus quod
            perferendis ratione sed sint beatae temporibus earum repudiandae
            fugiat explicabo quos, ad minima veniam quasi quia ex corporis?
            Maxime corrupti beatae, iure laudantium earum porro ipsum cupiditate
            quod at deserunt ad eius, officia blanditiis magni, fugit expedita!
            Esse expedita cum quasi tempore reprehenderit exercitationem omnis
            quisquam. Rem impedit cupiditate dolorem possimus dolor! Unde veniam
            aliquam debitis ducimus iure dolore delectus. Provident, distinctio!
            Laboriosam ad obcaecati quis fugit blanditiis in distinctio quasi ut
            doloremque porro consectetur fugiat iusto, ipsam dicta veniam
            numquam molestiae voluptatem odio. Magni necessitatibus animi
            veritatis distinctio quisquam possimus nulla quasi esse ipsam harum
            sit sint quaerat fuga commodi officiis maiores, a quis! Facilis
            necessitatibus eum officia molestiae a optio consectetur, soluta
            atque! Laboriosam deserunt corporis non maiores totam aut placeat
            velit officiis explicabo!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
