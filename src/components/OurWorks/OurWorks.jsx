import React from "react";
import css from "./works.module.css";
import { Link } from "react-router-dom";
import { works } from "../../data";



export const OurWorks = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [title, setTitle] = useState(null);
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [text, setText] = useState(null);

  // const openModal = (image, title, text) => {
  //   setSelectedImage(image);
  //   setTitle(title);
  //   setText(text);
  //   setIsModalOpen(true);
  // };
  return (
    <section className={css.main}>
      <h1 className={css.title}>Примеры работ</h1>
      <div className={css.work}>
        {works.map((work) => (    
             <Link key={work.title} to={`/work/${work.id}`} className={css.wrapper}>
     
          
           
            {/* // onClick={() => openModal(work.image, work.title, work.subtitle)} */}
     
            <img className={css.img} src={work.images[0]} alt={work.title} />
            <h2 className={css.text}>{work.title}</h2>
     
            {/* <p className={css.text}>
              {truncateText(work.subtitle)}
              <span
                className={css.readMore}
                onClick={(e) => {
                  e.stopPropagation(); // Предотвращаем срабатывание клика по всей карточке
                  openModal(work.image, work.title, work.subtitle);
                }}
              >
                ...ещё
              </span>
            </p> */}
         </Link>
        ))}
      </div>
      {/* <SmallModal
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setIsModalOpen={setIsModalOpen}
        title={title}
        text={text}
      /> */}
    </section>
  );
};
