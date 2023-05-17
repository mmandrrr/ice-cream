import Heading from './Heading/Heading.jsx';
import HowMade from './HowMade/HowMade.jsx';
import Products from './Products/Products.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';

const Main =( )=> {
    return(
        <main className="main">
            <Heading />
            <Products />
            <HowMade />
            <Testimonials />
        </main>
    )
}

export default Main