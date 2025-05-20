
import css from "./materialDetail.module.css";

export const MaterialDetail = () => {
    // const requireImages = require.context('../../avant/', false, /\.(png|jpe?g|svg)$/);
    // const images = requireImages.keys().map((filename) => requireImages(filename));
    return    <section className={css.main}>
    <h1 className={css.title}>
      Avant Quartz
    </h1>  
    {/* <div  className={css.container}>
{images.map((image, index) => (
          <img key={index} className={css.img}         
          src={image}
          alt={`Photo ${index + 1}`} />
      ))}
    </div> */}
  </section>
}
