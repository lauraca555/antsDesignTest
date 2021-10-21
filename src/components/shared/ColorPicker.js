import React, { useState} from 'react';
import { Avatar,  Modal } from 'antd';
import { SketchPicker } from 'react-color';
import { PlusOutlined } from '@ant-design/icons';



const ColorPicker = ({tryColor}) => {
    
    const [color, setColor] = useState("");
    //const [backgroundColor, setBackgroundColor] = useState(color);
    //useEffect(()=>{console.log("le color choisi" + color)}, [color]);
    
    
    
    
    
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

      
    const pickcolor = (clor) => {setColor(clor.hex); console.log(clor.hex)};

   
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
                        style={{ backgroundColor: `${color}`}}/>

                <Modal  
                    visible={isModalVisible} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    pickcolor = {pickcolor}>
                     

                    <SketchPicker 
                    
                    background = {color}
                    onChangeComplete={tryColor}
                    onChange={pickcolor}
                    color = {color}
                    />
                </Modal>
                
            </div> 
            
              
            </>
        );
       
    
}



export default ColorPicker;