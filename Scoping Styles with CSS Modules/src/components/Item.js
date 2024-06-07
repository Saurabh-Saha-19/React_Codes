import ItemCSS from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={ItemCSS.container}>
      <h3 className={ItemCSS.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={ItemCSS.image} />
      <p>
        <strong className={ItemCSS.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
