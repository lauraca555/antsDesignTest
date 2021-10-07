import React, { useState } from 'react';
import {connect} from 'react-redux';
import {PageHeader,Form, Button,  Row, Col, Input} from "antd";
import AvatarOrg from '../shared/AvatarOrg';
import { createOrganizationSuccess } from '../../actions/actionsOrg'
import ColorPicker from '../shared/ColorPicker';


const NewOrg = ({organizations = [], onCreatePressed}) => {
	
	const [inputValue, setInputValue] = useState([]);
	
    const onFinish = (values) => {
		console.log('Success:', values);
		setInputValue(values);
		console.log({organizations});
				
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	

	
    return(
		<>
            <Row >
					<Col  span={19} offset={5}>
						<PageHeader
								title="Organisations / Création d'un centre"/>
					</Col>
				</Row>  
				
				<Row >   
					<Col  justify="space-around" span={16} offset={4} >
						<Form
							name="organization-form"
							labelCol={{
								span: 6,
							}}
							wrapperCol={{
								span: 18,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
							>
							<Col justify="start"   span={20} offset={2} >
							<fieldset>
								<legend><h3>Informations générales</h3></legend>
								
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
                                <Col  span={18} offset={6}>
                                    <Row  justify="space-between">
                                            <Form.Item                                                                            
                                                name="avatar" >
                                                <AvatarOrg/>
                                            </Form.Item>                                            
                                            <Form.Item
                                                //initialValue = "#7ed321"
                                                name= "color">
                                                    <ColorPicker /> 
                                            </Form.Item>
                                                             
                                    </Row>
                                </Col>
							</fieldset>
							
							<fieldset>
								<legend><h3>Localisation</h3></legend>
								
								{/* Adresse */} 
								<Form.Item								
									label="Adresse"
									name="adresse"
									>
									<Input />										
								</Form.Item>

								{/* Code postal */} 
								<Form.Item								
									label="Code postal"
									name="zipcode"
									>
									<Input />										
								</Form.Item>

								{/* Ville */} 
								<Form.Item								
									label="Ville"
									name="city"
									>
									<Input />										
								</Form.Item>

								{/* Pays */} 
								<Form.Item								
									label="Pays"
									name="country"
									>
									<Input />										
								</Form.Item>

							</fieldset>
							</Col>
							<Form.Item
								wrapperCol={{
									offset: 6,
									span: 16,
								}}
								>
								<div className="form-buttons">
									<Button 
										onClick = {() =>{
											setInputValue();
											onCreatePressed(inputValue);
											setInputValue([]);
										}}
										type="primary" 
										htmlType="submit" className="one-form-button">
										Valider
									</Button>								
									<Button  
										htmlType="submit" 
										className="one-form-button">
										Annuler
									</Button>
								</div>
							</Form.Item>
						</Form>
					</Col>
				</Row>
        </>
    )
}

const mapStateToProps = state => ({
	organizations: state.organizations,
});

const mapDispatchToProps = dispatch => ({
	onCreatePressed: organization => dispatch(createOrganizationSuccess(organization))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrg);