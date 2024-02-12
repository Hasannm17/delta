import { useEffect, useState } from "react";

interface ContainerProps {
    width: number;
    imageCount: number;
  }
  
  const Container: React.FC<ContainerProps> = ({ width, imageCount }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
  
    useEffect(() => {
      // Fetch image URLs from API based on width and image count
      fetch(`https://api.example.com/images?width=${width}&count=${imageCount}`)
        .then(response => response.json())
        .then((data: string[]) => setImageUrls(data))
        .catch(error => console.error('Error fetching images:', error));
    }, [width, imageCount]);

    
    return (
      <div style={{ width: '100%', border: '1px solid black', marginBottom: '20px' }}>
        <div style={{ display: 'flex' }}>
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} style={{ width: `${100 / imageCount}%`, padding: '5px' }} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    );
  };

  export default Container