import '../stylesheets/navigation.css'
import sources from '../../data/sources.json'

function Navigation(props){

    return(
        <>
        {/* <div className="promo-banners">
                {sources["img-sources"]["brands"].map(((item) => (                                     
                <img src={item.url} alt="" key={item.id} />  
         )))}

        </div> */}
        <div className="topnav">
            {props.msg}
        </div>
        <div className="site-navigation">
            <h1>SolarValley </h1>
            <div className="site-links">
                <a href="#">About Us</a>
                <a href="#">How we Operate ?</a>
                <a href="#">Get Involved</a>

            </div>
        </div>
        </>
    )}

export default Navigation