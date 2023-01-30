import iconsProps from "./iconLink.json";

interface IconListProps {
  icons: typeof iconsProps;
  iconColor: string;
  hoverIconColor: string;
}

export default function IconList(props: IconListProps) {
  return (
    <ul className="lg:mb-0 mb-5 flex flex-wrap items-center justify-center gap-7">
      {props.icons.map((icon) => {
        return (
          <li className="lg:hover:animate-bounce group" key={icon.id}>
            <a href={icon.href} target="_blank" rel="noreferrer" title={icon.title}>
              <svg
                className={`duration-500 ease-in-out ${props.hoverIconColor} ${props.iconColor}`}
                width={icon.width}
                height={icon.height}
                viewBox={icon.viewBox}
              >
                <path d={icon.path} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
