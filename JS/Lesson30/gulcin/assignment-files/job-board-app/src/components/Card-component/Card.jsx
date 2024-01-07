import { jobData } from '../../data';
import './card.css';



export const Cards = () => {
    return (
        <>
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
                    <div className='job-tags'>
                        <span className='job-tag'>{job.role}</span>
                        <span className='job-tag'>{job.level}</span>
                        {job.languages.map(language => (<span className='job-tag'>{language}</span>))}
                        {job.tools.map(tool => (<span className='job-tag'>{tool}</span>))}
                    </div>
                </div>

            ))}
        </>
    )
};

