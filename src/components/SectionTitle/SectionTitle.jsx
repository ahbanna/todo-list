import "./SectionTitle.css";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-area">
      <h2 className="section-title">{title}</h2>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
    </div>
  );
};

export default SectionTitle;
