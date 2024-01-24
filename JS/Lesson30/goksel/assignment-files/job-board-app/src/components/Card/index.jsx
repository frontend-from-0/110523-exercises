import "./styles.css";
import { data } from "../Data/data";

export const Card = () => {

    data.map((item) => (console.log(item.logo)));

    return (
        <div className="main">

            {
                data.map((item) => (

                    <div className="card">

                        <div className="left-side">
                            <div className="company-logo">
                                <img src={item.logo} alt={item.company} />
                            </div>

                            <div className="information">
                                <div className="head">
                                    <span className="company-name" >{item.company}</span>
                                    {item.new && <button className="new" >NEW!</button>}
                                    {item.featured && <button className="featured">FEATURED</button>}
                                </div>
                                <div className="position">
                                    <span>{item.position}</span>
                                </div>
                                <div className="footer-information">
                                    <span>{item.postedAt}</span>
                                    <span className="point">.</span>
                                    <span>{item.contract}</span>
                                    <span className="point">.</span>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="right-side">
                            <div className="abilities">
                                <span>{item.role}</span>
                                <span>{item.level}</span>
                                {item.tools && item.tools.length > 0 && (
                                    <span>{item.tools.join(' ')}</span>
                                )}
                                <span>{item.languages.join(" ")}</span>
                            </div>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}
