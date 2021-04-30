interface MainProps {
  children: any;
  containerClass?: string;
}

export default function Main({ children, containerClass }: MainProps) {
  return <main className={containerClass}>{children}</main>;
}
