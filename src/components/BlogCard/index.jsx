import "./blogCard.css";
export function BlogCard() {
  return (
    <article className="Card">
      <div className="image"></div>
      <button>Design</button>
      <h3 className="titulo">Embracing Minimalism</h3>
      <p className="texto">
        From minimalist sculptures to minimalist paintings, this blog will
        inspire you to appreciate the beauty that lies in simplicity.
      </p>
      <div className="lineDivider"></div>
      <p className="autor">Annie Spratt</p>
    </article>
  );
}
