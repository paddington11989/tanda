import Header from "./components/header";
import TopScreen from "./components/top-screen";
import ApolloProviderComponent from "./apolo";
import Comment from "./components/comment";
import Tosell from "./components/tosell";
import Footer from "./components/footer";


function App() {
  return (
     <ApolloProviderComponent>
    <div className="App">
     <Header/>
     <TopScreen/>
     <Comment/>
     <Tosell/>
     <Footer/>
      </div>
    </ApolloProviderComponent>
  );
}

export default App;
