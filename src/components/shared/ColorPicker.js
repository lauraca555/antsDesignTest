import React, {useState} from 'react';
import { Avatar,  Modal } from 'antd';
import { SketchPicker } from 'react-color';
import { PlusOutlined } from '@ant-design/icons';



const ColorPicker = () => {
    
    const [color, setColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    
    
    const colorSelected = color.hex;

//Modal

const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

      
    const handleChange = (clor) => {setColor(clor)};

   
        return (
            <>
            
            <div className="logoOrg">    
                <div 
                    className='color-picker-btn'
                    onClick={showModal} >
                    <PlusOutlined />
                </div>
                <Avatar 
                        shape="square" 
                        style={{ backgroundColor: `${colorSelected}`}}
                        color={color.hex}
                                               
                    />

                <Modal  
                    visible={isModalVisible} 
                    onOk={handleOk} 
                    onCancel={handleCancel}>

                    <SketchPicker 
                    color = {color}
                    background = {backgroundColor}
                    onChangeComplete={setBackgroundColor}
                    onChange={handleChange }
                    />
                </Modal>
                
            </div> 
            
              
            </>
        );
       
    
}



export default ColorPicker;