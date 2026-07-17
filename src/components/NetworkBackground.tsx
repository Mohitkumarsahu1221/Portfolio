const width = 1200;
const height = 800;
const count = 22;
const threshold = 190;

type Node = {
  x: number;
  y: number;
};

function createSeededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

const random = createSeededRandom(1221);
const nodes: Node[] = Array.from({ length: count }, () => ({
  x: random() * width,
  y: random() * height,
}));

const connections = nodes.flatMap((start, startIndex) =>
  nodes.slice(startIndex + 1).flatMap((end) => {
    const dx = start.x - end.x;
    const dy = start.y - end.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance >= threshold) {
      return [];
    }

    return [
      <line key={`${start.x}-${start.y}-${end.x}-${end.y}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y} />,
    ];
  }),
);

export function NetworkBackground() {
  return (
    <svg className="net-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="networkGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--primary-glow)" />
        </linearGradient>
      </defs>
      <g>{connections}</g>
      <g>
        {nodes.map((node, index) => (
          <circle key={`${node.x}-${node.y}`} className={index % 3 === 0 ? "pulse" : undefined} cx={node.x} cy={node.y} r={2} />
        ))}
      </g>
    </svg>
  );
}