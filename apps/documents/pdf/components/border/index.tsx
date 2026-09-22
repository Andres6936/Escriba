import { View, Svg, Circle, Path, G } from "@react-pdf/renderer";

const Mark = ({
  fill = "#CCC",
  ...props
}: React.ComponentPropsWithRef<typeof Svg> = {}) => (
  <Svg viewBox="0 0 512 512" fill={fill} {...props}>
    <Circle cx={45.2} cy={70} r={3.5} />
    <Path d="M44.5 75.5H46v72.91h-1.5zM38 50h15v2H38zm0-6h15v2H38zm0-6h15v2H38zm0-6h15v2H38zm0-6h15v2H38zm0-6h15v2H38zm28.614-1.441h7v7h-7zm14.578 40.189h7v7h-7z" />
    <Circle cx={139.529} cy={40.055} r={3.309} />
    <Path d="M83 34h2.943v13.537H83zm7 0h2.943v13.537H90zm7 0h2.943v13.537H97zm7 0h2.943v13.537H104zm7 0h2.943v13.537H111zm6 0h2.943v13.537H117zM21.6 15h5v25h-5zM67 40.5h5v25h-5zm41.5 18.8h25v5h-25zm-28-41.2h24.362v5.058H80.5zM55 155h7v7h-7zm0 12h7v7h-7zm0 12h7v7h-7zm0 12h7v7h-7zm0 12h7v7h-7zm-13-11.5h4.262v22.245H42zM23.5 41.7H25v107.199h-1.5zm20 125.3H45v23.122h-1.5z" />

    <Path d="M68.821 67.172h1.5v160h-1.5zM45 244h1.5v140H45zM330 40.5h140V42H330zM135 61h180v1.5H135zm336.5-22.3h25v5h-25z" />
    <Path d="M43.3 385.5h5v25h-5z" />
    <Path d="M275 39h25v5h-25zm-41 11h7v7h-7zm13 0h7v7h-7zm13 0h7v7h-7zm13 0h7v7h-7zm13 0h7v7h-7zM143.685 39.699h80v1.5h-80zM106.5 20h117v1.5h-117zm141 21h25.881v1.5H247.5z" />

    <G transform="rotate(45, 235.04, 30.71)">
      <Path d="m220.653 31.077 28.777-.726.898.895-28.898.605z" />
    </G>

    <G transform="rotate(-60, 323.01, 51.29)">
      <Path d="m311.794 50.65 22.433 1.286-.768.455-22.468-1.284z" />
    </G>

    <G transform="rotate(-30, 57.35, 235.25)">
      <Path d="m44.295 235.769 26.121-1.039.722.42-25.896 1.151z" />
    </G>
  </Svg>
);

const BorderDecoration = ({ size = 200 }: { size?: number } = {}) => (
  <>
    <View style={{ position: "absolute", top: 0, left: 0 }} fixed>
      <Mark width={size} height={size} />
    </View>

    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        transform: "rotate(90)",
      }}
      fixed
    >
      <Mark width={size} height={size} />
    </View>

    <View
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        transform: "rotate(180)",
      }}
      fixed
    >
      <Mark width={size} height={size} />
    </View>

    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        transform: "rotate(270)",
      }}
      fixed
    >
      <Mark width={size} height={size} />
    </View>
  </>
);

export { BorderDecoration };
