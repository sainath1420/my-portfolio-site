import { ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  heightClass?: string;
}

const FlipCard = ({ front, back, className = "", heightClass = "h-80" }: FlipCardProps) => {
  return (
    <div className={`flip-card ${heightClass} ${className}`} tabIndex={0}>
      <div className="flip-card-inner">
        <div className="flip-card-face">{front}</div>
        <div className="flip-card-face flip-card-back">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
