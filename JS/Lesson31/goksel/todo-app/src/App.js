import './App.css';
import { ListEx8 } from './shared-components/List';
import { Card } from './shared-components/Card';
import { Ex1 } from './exercise-components/Exercises1';
import { Ex2 } from './exercise-components/Exercise2';
import { Ex3 } from './exercise-components/Exercise3';
import { Ex4 } from './exercise-components/Exercise4';
import { Ex5 } from './exercise-components/Exercise5';
import { Ex6 } from './exercise-components/Exercise6';
import { Ex7 } from './exercise-components/Exercise7';
import { Ex9 } from './exercise-components/Exercise9';
import { Ex10 } from './exercise-components/Exercise10';



export const App = () => {
	return (
		<div className='app'>
			<main>
				<Card>
					<span>Ex1</span>
					<Ex1 />
				</Card>

				<Card>
					<span>Ex2</span>
					<Ex2 />
				</Card>

				<Card>
					<span>Ex3</span>
					<Ex3 />
				</Card>

				<Card>
					<span>Ex4</span>
					<Ex4 />
				</Card>

				<Card>
					<span>Ex5</span>
					<Ex5 />
				</Card>

				<Card>
					<span>Ex6</span>
					<Ex6 />
				</Card>

				<Card>
					<span>Ex7</span>
					<Ex7 />
				</Card>

				<Card>
					<span>Ex8</span>
					<ListEx8 />
				</Card>

				<Card>
					<span>Ex9</span>
					<Ex9 />
				</Card>

				<Card>
					<span>Ex10</span>
					<Ex10 />
				</Card>

			</main>
		</div>
	);
};
