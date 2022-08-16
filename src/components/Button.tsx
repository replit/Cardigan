import './Button.css';

export default function Button({ id, label, x, y, w, h }) {

  return (

    <button
      className="button movable"
      id={id}
      style={{ left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px` }}>
      {label}
    </button>
  )
}