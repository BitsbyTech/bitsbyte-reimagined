import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
