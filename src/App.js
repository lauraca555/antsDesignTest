import './App.css';
import {Form, Button,  Row, Col, Input, Layout} from "antd";
import "antd/dist/antd.css";
import AvatarOrg from './AvatarOrg';
//import { ChromePicker } from 'react-color';



function App() {

	const onFinish = (values) => {
		console.log('Success:', values);		
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

		
	return (
		<>
		<Layout 
				 
		 >
			<Row 	 justify="center">
				<Col  span={12}>
					<h2>Organisations / Création d'un centre</h2>
				</Col>
			</Row>   
	 
			<Row >   
				<Col justify="left"  span={12} offset={4} >
					<Form
						name="organization-form"
						labelCol={{
						span: 8,
						}}
						wrapperCol={{
						span: 20,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						{/* Champ nom de l'organization */}
						<Form.Item
						
								label="Nom de l'organisation"
								name="orgName"
								rules={[
									{
										required: true,
										message: 'Ce champ est requis',
									},
								]}
						>
						<Input />										
						</Form.Item>
						
						{/* Champ de text Notes */}
						<Form.Item 
								name="notes"
								label="Notes">
								<Input.TextArea />
						</Form.Item>

						{/* Champ logo */}
						<Form.Item
						wrapperCol={{
							offset: 8,
							span: 14,
						}}
						
						name="avatar" >
							<div >			
							<AvatarOrg />
							</div>
						</Form.Item>
						

						<Form.Item
							wrapperCol={{
								offset: 8,
								span: 16,
							}}
						>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Layout>
		</>
	);
}

export default App;
