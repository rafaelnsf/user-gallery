import React, { useCallback, useImperativeHandle, useState } from "react";

import UploadFileIcon from '@mui/icons-material/UploadFile';

const Upload = React.forwardRef((props, ref) => {
    const [images, setImages] = useState([]);

    const handleDrop = (event) => {
        event.preventDefault();
        const imageFile = event.dataTransfer.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setImages([...images, imageUrl]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleImageUpload = useCallback(() => {
        // Lógica de envio para o endpoint utilizando a API Fetch ou outra biblioteca
        // Passar as imagens armazenadas em 'images' como dados na requisição
        // Exemplo de como utilizar a API Fetch:
        // fetch('https://exemplo.com/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify({ images }),
        //   headers: { 'Content-Type': 'application/json' }
        // }).then(response => {
        //   // Lógica de tratamento da resposta
        // }).catch(error => {
        //   // Lógica de tratamento de erro
        // });
        console.log("teste")
    }, []);

    useImperativeHandle(ref, () => ({
        handleImageUpload,
    }))

    return (
        <div>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    border: "2px dashed #008FFB",
                    height: "300px",
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {images.length === 0 ? (
                    <div>
                        <UploadFileIcon color="primary" fontSize="large" />
                    </div>
                ) : (
                    images.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={`Imagem ${index + 1}`}
                            style={{ maxWidth: "100%", maxHeight: "100px", margin: "8px" }}
                        />
                    ))
                )}
            </div>
        </div>
    );
});

export default Upload;