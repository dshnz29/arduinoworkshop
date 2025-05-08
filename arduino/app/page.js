// app/page.js
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AgendaSection from './components/AgendaSection';
import HighlightsSection from './components/HighlightsSection';
import QuizSection from './components/QuizSection';
import RegistrationSection from './components/RegistrationSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AgendaSection />
      <HighlightsSection />
      <QuizSection />
      <RegistrationSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}
 