import { Landmark, MapPin, BookOpen, Users } from "lucide-react";

// Cross-section of a six-floor building: a pin climbs it floor by floor and lights
// up the floor it is on (pure CSS, so it needs no JavaScript).
const ROOMS = [
  [3, 2, 4],
  [2, 3, 2, 2],
  [4, 2, 3],
  [2, 2, 3, 2],
  [3, 4, 2],
  [2, 3, 3],
];

export function FloorsVisual() {
  const floors = [6, 5, 4, 3, 2, 1];
  return (
    <div className="relative w-[min(100%,20rem)] text-[.68rem] text-ink [--rh:1.1rem]" aria-hidden="true">
      <div className="relative grid gap-[.2rem]">
        {floors.map((f, i) => (
          <div
            key={f}
            className="relative flex h-(--rh) animate-floor-lit items-center gap-[.7rem] rounded border border-line bg-bg pr-[.6rem] pl-[.7rem]"
            style={{ animationDelay: `${(f - 1) * 2}s` }}
          >
            <span className="w-[5.4rem] flex-none pl-[1.4rem] tracking-[.12em] whitespace-nowrap text-muted uppercase">Floor {f}</span>
            <span className="flex h-1/2 flex-1 gap-[.22rem]">
              {ROOMS[i].map((w, j) => (
                <i key={j} className="block basis-0 rounded-[2px] bg-line" style={{ flexGrow: w }} />
              ))}
            </span>
          </div>
        ))}
        <span className="absolute bottom-[calc((var(--rh)_-_18px)/2)] left-2 size-[18px] animate-pin-climb text-accent [&_svg]:size-[18px] [&_svg]:fill-current [&_svg]:stroke-bg">
          <MapPin size={22} strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

// Three information cards that drift gently around a map pin.
const CARDS = [
  { icon: Users, label: "Former mayors", pos: "left-0 top-[4%]" },
  { icon: MapPin, label: "Tourist spots", pos: "right-0 top-[36%]" },
  { icon: BookOpen, label: "City history", pos: "left-[6%] bottom-[2%]" },
];

export function CityVisual() {
  return (
    <div className="relative h-[8.4rem] w-[min(100%,15rem)]" aria-hidden="true">
      <span className="absolute top-1/2 left-1/2 -mt-7 -ml-7 size-14 animate-city-ring rounded-full border border-accent" />
      <span className="absolute top-1/2 left-1/2 -mt-7 -ml-7 grid size-14 place-items-center rounded-full bg-accent text-white">
        <Landmark size={26} strokeWidth={1.6} />
      </span>
      {CARDS.map(({ icon: Icon, label, pos }, i) => (
        <div
          key={label}
          className={`absolute ${pos} flex w-[7.6rem] animate-city-float items-center gap-[.4rem] rounded-md border border-line bg-bg px-2 py-1.5`}
          style={{ animationDelay: `${i * -1.6}s` }}
        >
          <span className="grid size-[26px] flex-none place-items-center rounded-full bg-accent-soft text-accent">
            <Icon size={16} strokeWidth={1.8} />
          </span>
          <span className="grid min-w-0 gap-[.2rem]">
            <b className="text-[.62rem] font-medium tracking-[.1em] whitespace-nowrap uppercase">{label}</b>
            <i className="block h-[3px] rounded-[2px] bg-line" />
            <i className="block h-[3px] w-[65%] rounded-[2px] bg-line" />
          </span>
        </div>
      ))}
    </div>
  );
}
