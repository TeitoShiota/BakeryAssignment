import Cake from '../assets/chocolate-cake.jpg'
import Recipes from '../components/Recipies/Recipies'

const Home = () => {
    return <>
    <section id='inticer' >
    <img src={Cake} alt="cake" id='invitationimg'/>
    <div id='cakeandinfo'>
        <h2>Heavenly Chocolate Delight</h2>
        <p>
        Indulge in the rich, velvety goodness of our Decadent Chocolate Indulgence cake. Made with the finest cocoa and layered with a smooth chocolate ganache, this cake is sure to satisfy your sweet tooth and leave you wanting more.
<br /> <br />
Welcome to our recipe blog site, where you can find and share delicious recipes for all occasions. From savory dishes to sweet treats, our community of home cooks and professional chefs have got you covered. Join us today and start adding your favorite recipes to our collection!
        </p>
    </div>
</section >
<section id='randomquote'><p>"It’s not about passion. Passion is something that we tend to overemphasize, that we certainly place too much importance on. Passion ebbs and flows. To me, it’s about desire. If you have constant, unwavering desire to be a cook, then you’ll be a great cook." -Thomas Keller</p></section>
<Recipes/>

  </> };
  
  export default Home;