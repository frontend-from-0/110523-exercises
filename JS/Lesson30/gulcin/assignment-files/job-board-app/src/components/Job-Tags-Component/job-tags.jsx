import { jobData } from '../../data';
import './jobTags.css';

export const JobTags = () => {
    return (
        <>
            {
                jobData.map((job) =>
                    <ul className='job-tags'>
                        <li className='job-tag' key={job.role}>{job.role}</li>
                        <li className='job-tag' key={job.level}>{job.level}</li>
                        {job.languages.map(language => (<li className='job-tag' key={language}>{language}</li>))}
                        {job.tools.map(tool => (<li className='job-tag' key={tool}>{tool}</li>))}
                    </ul>)
            }
        </>
    )
}