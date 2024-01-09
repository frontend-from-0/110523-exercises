import { jobData } from '../../data';
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
                    <ul className='job-tags'>
                        <li className='job-tag' key={job.role}>{job.role}</li>
                        <li className='job-tag' key={job.level}>{job.level}</li>
                        {job.languages.map(language => (<li className='job-tag' key={language}>{language}</li>))}
                        {job.tools.map(tool => (<li className='job-tag' key={tool}>{tool}</li>))}
                    </ul>
                </div>

            ))}
        </div>
    )
};

