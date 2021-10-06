import './App.css';
import {Layout} from "antd";
import NewOrg from './components/organzations/NewOrg';
import "antd/dist/antd.css";




function App() {

	const { Content } = Layout;

			
	return (
		<>
		<Layout >
			<Content>
				<NewOrg></NewOrg>
			</Content>
		</Layout>
		</>
	);
}

export default App;
