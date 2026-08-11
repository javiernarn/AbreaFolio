import BrandMark from '../BrandMark/BrandMark';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="brand" style={{ display: 'flex' }}>
          <BrandMark size={20} />
          &nbsp;AbreaFolio
        </div>
        <p>© JB Boy M. Abrea · Project Management & Data Analysis · Opol, Misamis Oriental, Philippines</p>
      </div>
    </footer>
  );
}
