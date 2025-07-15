import Header from '../components/Header';
import Footer from '../components/Footer';
import Resume from '../components/Resume';
import Education from '../components/Education';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Main content */}
      <div className="flex-1 space-y-8 p-4 bg-gray-100">
        <Resume />
        <Education />
        <Experiences />
        <Skills />
        <Hobbies />
      </div>
      <Footer />
    </div>
  );
}
