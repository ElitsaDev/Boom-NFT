import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import User from "../src/components/user/User";
import Avatar from "../src/components/avatar/Avatar";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Footer from "../src/components/footer/Footer";
import Auctions from "../src/components/auctions/Auctions";

export default function Index() {
  return (<>
  <Header />
    <Trending />
    <Auctions />
  <Footer />
  </>)
  
}
