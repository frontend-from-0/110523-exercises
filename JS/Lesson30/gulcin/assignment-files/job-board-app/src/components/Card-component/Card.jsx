import { jobData } from '../../data';
import { JobTags } from '../Job-Tags-Component/job-tags';
import './card.css';



export const Cards = () => {
    return (
        <div className='cards-holder'>
            {jobData.map((job) => (
                <div className='job-card'>
                    <div className='img-and-info'>
                        <img className='card-img' src={job.logo} alt='Company Logo' />
                        <div className='job-info'>
                            <div className='company-area'><span>{job.company}</span>{job.new && <span className='tag-new'>NEW!</span>}{job.featured && <span className='tag-featured'>FEATURED</span>}</div>
                            <div className='job-definition'>{job.position}</div>
                            <div className='info-bottom'><span>{job.postedAt}</span><span>&#183;</span><span>{job.contract}</span><span>&#183;</span><span>{job.location}</span></div>
                        </div>
                    </div>
                    <JobTags />
                </div>
               
            ))}
        </div>
    )
};

