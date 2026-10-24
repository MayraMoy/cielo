import buhoImg from '../../assets/buho.png';

export function OwlMascot({ className = "w-28 h-auto" }) {
  return (
    <img
      src={buhoImg}
      alt="Búho sabio leyendo libro"
      className={`owl-mascot object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
