import {jobData} from '../data';
import './card.css';



export const Cards = () => {
    return (
        <>
            {jobData.map((job) => (
                <div className='job-card'>
                    <div class="img-div">
                        <img src={job.logo} alt='Company Logo' />
                    </div>
                    <div>
                        <div><span>{job.company}</span>{job.new && <span>New!</span>}{job.featured && <span>Featured!</span>}</div>
                        <div>{job.position}</div>
                        <div><span>{job.postedAt}</span><span>{job.contract}</span><span>{job.location}</span></div>
                    </div>
                    <div>
                        <span>{job.position}</span><span>{job.level}</span><span>{job.languages}</span><span>{job.tools}</span>
                    </div>
                </div>

            ))}
        </>
    )
};

