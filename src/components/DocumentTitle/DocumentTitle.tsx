import { Helmet } from "react-helmet-async";

type Props = {
  children: React.ReactNode;
};
export default function DocumentTitle({ children }: Props) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}
