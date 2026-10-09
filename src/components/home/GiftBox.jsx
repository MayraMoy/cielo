import regaloImg from '../../assets/regalo.webp';

export function GiftBox({ className = "w-14 h-14" }) {
  return (
    <img
      src={regaloImg}
      alt="Paquete de regalo"
      className={`object-contain select-none drop-shadow-sm ${className}`}
      draggable={false}
    />
  );
}
