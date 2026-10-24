import SiteFooter from "@/components/ds/SiteFooter";

// The inner pages keep the site footer; the homepage ("/") carries the Figma footer instead.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
