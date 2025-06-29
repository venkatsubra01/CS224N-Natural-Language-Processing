import TranslateSection from './components/TranslateSection'
import Header from './components/Header'
import Examples from './components/Examples'
import Footer from './components/Footer'

  
function App () {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-5 ml-5 mr-5 mt-5 mb-3 px-8 space-y-4 bg-[#393E46] py-8 shadow-lg rounded-sm">
        <Header />
        <TranslateSection />
        <Examples />
        
      </div>
      <Footer />
    </>
    
  );
};

export default App;

