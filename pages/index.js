import Head from "next/head";
import { useEffect, useState } from "react";
import DogImage from "../src/components/Image";
import { Oval } from "react-loader-spinner";
import ListDogImages from "../src/components/ListImages";
import fetch from '../utils/api';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchDog = async () => {
      setIsLoading(true);
      try {
        const breedsResponse = await fetch.get('breeds/list/all');
        const breeds = Object.keys(breedsResponse.message);
        const promises = breeds.map(breed => fetch.get(`breed/${breed}/images/random`))
        const dogImages = await Promise.all(promises);
        const result = breeds.map((breed, idx) => ({
          breed,
          image: dogImages[idx].message
        }));
        setSelectedImage(result[0]);
        setList(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDog();
  }, []);

  return (
    <div>
      <Head>
        <title>Front End Developer Exercise</title>
        <meta name="description" content="Front End Developer Exercise" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main className="d-flex align-items-center justify-content-center mt-4">
        {!isLoading ? (
          <div>
            <div className="d-flex justify-content-center">
              <DogImage src={selectedImage.image} breed={selectedImage.breed} />
            </div>
            <ListDogImages images={list} onSelect={(image) => setSelectedImage(image)} />
          </div>
        ) : (
          <div key={0} className={`mt-3 d-flex justify-content-center w-100 text-center`}>
            <Oval color="#ee392a" height={80} width={80} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
