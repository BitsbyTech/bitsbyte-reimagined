import { partnerLogos, type PartnerLogo } from "@/lib/partner-logos";

interface LogoMarqueeProps {
  title?: string;
  speedSeconds?: number;
  height?: string;
}

const LogoItem = ({ logo }: { logo: PartnerLogo }) => {
  if (logo.slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${logo.slug}/000000`}
        alt={logo.name}
        title={logo.name}
        loading="lazy"
        className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all"
      />
    );
  }
  return (
    <span
      title={logo.name}
      className="text-lg md:text-xl font-semibold text-foreground/70 hover:text-foreground tracking-tight transition-colors"
    >
      {logo.name}
    </span>
  );
};

const LogoMarquee = ({
  title = "Industries & Technologies We Work With",
  speedSeconds = 60,
  height = "2cm",
}: LogoMarqueeProps) => {
  return (
    <section className="py-10 bg-background border-y">
      {title && (
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          {title}
        </p>
      )}
      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{ height }}
      >
        <div
          className="absolute inset-0 flex items-center gap-14 whitespace-nowrap will-change-transform"
          style={{ animation: `marquee ${speedSeconds}s linear infinite` }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-14 shrink-0">
              {partnerLogos.map((logo) => (
                <LogoItem key={`${copy}-${logo.name}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;
