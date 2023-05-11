import React, { useState } from 'react';
import styled from 'styled-components';
import botaoImagem from '../../assets/perfil/lapis-branco.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 120px 0 0; 
`;

const ImageUpload = styled.div`
  position: relative;
  width: 126px;
  height: 126px;
  border-radius: 50%;

  margin-bottom: 16px;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Button = styled.label`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #18243A;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  z-index: 1;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible !important;
  }
`;

function ProfileImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(selectedFile);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ImageUpload>
          {imagePreview ? (
            <img src={imagePreview} alt="Selected file preview" />
          ) : (
            <div>No image selected</div>
          )}
          <Button>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
            <span><img src={botaoImagem} alt=''/></span>
          </Button>
        </ImageUpload>
      </form>
    </Container>
  );
}

export default ProfileImageUpload;