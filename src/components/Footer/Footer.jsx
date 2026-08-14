import BrandMark from '../BrandMark/BrandMark';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="brand" style={{ display: 'flex' }}>
          <BrandMark size={20} />
          &nbsp;AbreaFolio
        </div>
        <p>© JB Boy M. Abrea · Baker & BSIT Graduate · Cagayan de Oro City, Philippines</p>
      </div>
    </footer>
  );
}
