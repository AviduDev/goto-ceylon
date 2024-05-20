import { cn } from "@/lib/utils";

export default function Header(props: React.HTMLProps<HTMLHeadingElement>) {
  return <header {...props} className={cn("", props.className)} />;
}
