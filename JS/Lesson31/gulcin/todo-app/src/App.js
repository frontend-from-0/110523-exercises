import './App.css';
import { List } from './shared-components/List';
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
					<Ex1/>
				</Card>
				<Card>
					<Ex2/>
				</Card>
				<Card>
					<Ex3/>
				</Card>
				<Card>
					<Ex4/>
				</Card>
				<Card>
					<Ex5/>
				</Card>
				<Card>
					<Ex6/>
				</Card>
				<Card>
					<Ex7/>
				</Card>
				<Card>
					<Ex9/>
				</Card>
				<Card>
					<Ex10/>
				</Card>
				<Card>
					<List />
				</Card>
			</main>
		</div>
	);
};
