import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState} from 'react';
import { Form } from 'antd';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  
  const AvatarOrg = () => {
    const [loadingState, setLoading] = useState(false);
    const [image, setImage] = useState("undefined");
    
    
    

    
    
    
    function handleChange(info) {
        
        if (info.file.status === 'uploading') {
           setLoading(true);
            return;
          } 

        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
              setLoading(false); 
              setImage(imageUrl);                
              
          }
              
            );
          }

      
    };
    
    const [loading, imgUrl] = [loadingState, image];    
      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
      
      return (
        
        <Form.Item                                                                            
        name="avatar" 
        >
        
        <Upload
          name="avatar"
          url= 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}>
          {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          
        </Upload>
        </Form.Item>
        
      );
    

    
  }

  export default AvatarOrg;