import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import ShowUserContacts from '../cards/ShowUserContacts';
import Resume from '../cards/Resume';
import { useTheme } from '@/contexts/ThemeProvider';
import { useUser } from '@/contexts/UserProvider';
import { ChangeLayoutForm } from '../layouts/Layouts';



export interface BioInfo {
  bioName: string;
  jobTitle: string;
  bio: string;
  heroImage: string;
}

export interface Contacts {
  id: string;
  linkedin: string;
  github: string;
  youtube: string;
  twitter: string;
  email: string;
  website: string;
}

export interface ActiveTheme {
  id: string;
  themeName: string;
  backgroundColor: string;
  cardColor: string;
  borderColor: string;
  primaryText: string;
  secondaryText: string;
}

export interface HeroProps {
  bioInfo: BioInfo;
  contacts?: Contacts[];
  Resume?: React.FC;
  ShowUserContacts?: React.FC<{ contacts: Contacts[] }>;
  activeTheme: ActiveTheme;
}

// ============================================================================
// VARIANT 1: Classic Side-by-Side with Slide-in Animation
// ============================================================================
export const HeroVariant1 = ({ contacts }: { contacts: Contacts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { activeTheme } = useTheme();
  const { bio } = useUser();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="flex flex-col justify-center items-center gap-8 px-4 py-8">
      <div className="flex justify-around items-center gap-8 lg:gap-16 flex-wrap lg:flex-nowrap w-full max-w-6xl">
        {/* Image with slide-in from left */}
        <div
          className={`w-[250px] h-[250px] rounded-4xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
        >
          <img
            loading="lazy"
            width={250}
            height={250}
            className="w-full h-full object-cover rounded-4xl hover:scale-110 transition-transform duration-500"
            src={bio?.heroImage}
            alt={bio?.bio}
          />
        </div>

        {/* Content with slide-in from right */}
        <div
          className={`flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
        >
          <h2 className="lg:text-5xl text-3xl font-black text-center lg:text-start">
            {bio?.bioName}
          </h2>
          <h3 className="lg:text-2xl text-2xl font-semibold text-center lg:text-start">
            {bio?.jobTitle}
          </h3>
          <ShowUserContacts contacts={contacts} />
          <Resume />
        </div>
      </div>

      {/* Bio card with fade-in from bottom */}
      <Card
        style={{
          backgroundColor: activeTheme.cardColor,
          color: activeTheme.secondaryText,
          border: `1px solid ${activeTheme.borderColor}`,
        }}
        className={`w-full lg:w-3/4 md:w-full p-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <p>{bio?.bio}</p>
      </Card>
    </div>
  );
};

// ============================================================================
// VARIANT 2: Centered Stack with Scale Animation
// ============================================================================
export const HeroVariant2 = ({ contacts }: { contacts: Contacts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { activeTheme } = useTheme();
  const { bio } = useUser();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="flex flex-col justify-center items-center gap-8 px-4 py-12">
      {/* Image with scale-up animation */}
      <div
        className={`w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
      >
        <img
          loading="lazy"
          width={300}
          height={300}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          src={bio?.heroImage}
          alt={bio?.bio}
        />
      </div>

      {/* Content with staggered fade-in */}
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-5 max-w-3xl">
        <h2
          className={`lg:text-6xl text-4xl font-black text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {bio?.bioName}
        </h2>
        <h3
          className={`lg:text-3xl text-2xl font-semibold text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {bio?.jobTitle}
        </h3>
        <div
          className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <ShowUserContacts contacts={contacts} />
        </div>
        <div
          className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <Resume />
        </div>
      </div>

      {/* Bio card */}
      <Card
        style={{
          backgroundColor: activeTheme.cardColor,
          color: activeTheme.secondaryText,
          border: `1px solid ${activeTheme.borderColor}`,
        }}
        className={`w-full lg:w-3/4 md:w-full p-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
      >
        <p className="text-center lg:text-lg">{bio?.bio}</p>
      </Card>
    </div>
  );
};

// ============================================================================
// VARIANT 3: Split Screen with Diagonal Wipe
// ============================================================================
export const HeroVariant3 = ({ contacts }: { contacts: Contacts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const { bio } = useUser();
  const { activeTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-[600px] lg:min-h-[500px]">
        {/* Left: Image Section */}
        <div
          className={`flex justify-center items-center p-8 lg:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 clip-path-reveal-left' : 'opacity-0 clip-path-hidden-left'
            }`}
          style={{
            clipPath: isVisible
              ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          }}
        >
          <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src={bio?.heroImage}
              alt={bio?.bio}
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div
          className={`flex flex-col justify-center items-start gap-4 lg:gap-6 p-8 lg:p-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 clip-path-reveal-right' : 'opacity-0 clip-path-hidden-right'
            }`}
          style={{
            clipPath: isVisible
              ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          }}
        >
          <h2 className="text-4xl lg:text-6xl font-black">
            {bio?.bioName}
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold opacity-80">
            {bio?.jobTitle}
          </h3>
          <ShowUserContacts contacts={contacts} />
          <Resume />

          <Card
            style={{
              backgroundColor: activeTheme.cardColor,
              color: activeTheme.secondaryText,
              border: `1px solid ${activeTheme.borderColor}`,
            }}
            className="w-full p-5 mt-4"
          >
            <p className="leading-relaxed">{bio?.bio}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};


// ============================================================================
// VARIANT 4: Card-Based Floating Layout
// ============================================================================
export const HeroVariant4 = ({ contacts }: { contacts: Contacts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const { bio } = useUser();
  const { activeTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="flex justify-center items-center px-4 py-12 lg:py-20">
      <Card
        style={{
          backgroundColor: activeTheme.cardColor,
          border: `1px solid ${activeTheme.borderColor}`,
        }}
        className={`w-full max-w-5xl p-8 lg:p-12 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-1'
          }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Image - Takes 1 column */}
          <div
            className={`md:col-span-1 flex justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
          >
            <div className="w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src={bio?.heroImage}
                alt={bio?.bio}
              />
            </div>
          </div>

          {/* Content - Takes 2 columns */}
          <div className="md:col-span-2 flex flex-col justify-center gap-4 lg:gap-5">
            <div
              className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
              <h2
                className="text-3xl lg:text-5xl font-black mb-2"
                style={{ color: activeTheme.primaryText }}
              >
                {bio?.bioName}
              </h2>
              <h3
                className="text-xl lg:text-2xl font-semibold mb-4"
                style={{ color: activeTheme.secondaryText }}
              >
                {bio?.jobTitle}
              </h3>
            </div>

            <div
              className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
              <p
                className="mb-6 leading-relaxed text-base lg:text-lg"
                style={{ color: activeTheme.secondaryText }}
              >
                {bio?.bio}
              </p>
            </div>

            <div
              className={`flex flex-col gap-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
              <ShowUserContacts contacts={contacts} />
              <Resume />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// ============================================================================
// VARIANT 5: Modern Asymmetric Grid with Blur-in Animation
// ============================================================================
export const HeroVariant5 = ({ contacts }: { contacts: Contacts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const { bio } = useUser();
  const { activeTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="px-4 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Name and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          {/* Name Section - 3 columns on large screens */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-4">
            <h2
              className={`text-5xl lg:text-7xl font-black leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-5'
                }`}
            >
              {bio?.bioName}
            </h2>
            <h3
              className={`text-2xl lg:text-4xl font-semibold transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-5'
                }`}
            >
              {bio?.jobTitle}
            </h3>
          </div>

          {/* Image Section - 2 columns on large screens */}
          <div
            className={`lg:col-span-2 flex justify-center lg:justify-end items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-95'
              }`}
          >
            <div className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 hover:rotate-2 transition-all duration-700"
                src={bio?.heroImage}
                alt={bio?.bio}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Bio and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Bio Card - 3 columns */}
          <Card
            style={{
              backgroundColor: activeTheme.cardColor,
              color: activeTheme.secondaryText,
              border: `1px solid ${activeTheme.borderColor}`,
            }}
            className={`lg:col-span-3 p-6 lg:p-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 blur-0 translate-x-0' : 'opacity-0 blur-sm -translate-x-5'
              }`}
          >
            <p className="text-base lg:text-lg leading-relaxed">{bio?.bio}</p>
          </Card>

          {/* Actions - 2 columns */}
          <div
            className={`lg:col-span-2 flex flex-col justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 blur-0 translate-x-0' : 'opacity-0 blur-sm translate-x-5'
              }`}
          >
            <ShowUserContacts contacts={contacts} />
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// EXPORT ALL VARIANTS
// ============================================================================
const HeroComponents = () => {
  const { layouts, contacts } = useUser();

  const getActiveHeroLayout = (layout: string, contacts: Contacts) => {
    switch (layout) {
      case "1":
        return <HeroVariant1 contacts={contacts} />
      case "2":
        return <HeroVariant2 contacts={contacts} />
      case "3":
        return <HeroVariant3 contacts={contacts} />
      case "4":
        return <HeroVariant4 contacts={contacts} />
      case "5":
        return <HeroVariant5 contacts={contacts} />
      default:
        return <HeroVariant1 contacts={contacts} />
    }
  }
  const { editState } = useUser();

  return (
    <>
      {editState && <ChangeLayoutForm sectionName='heroLayout' />}
      <div className="w-full mx-auto flex flex-col justify-center items-center">
        {getActiveHeroLayout(layouts?.heroLayout, contacts as Contacts)}
      </div>
    </>
  )
}

export default HeroComponents;