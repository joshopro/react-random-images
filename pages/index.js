import Head from "next/head";
import DogAPI from "../services/dog/index.";
import { useEffect, useState } from "react";
import DogImage from "../src/components/Image";
import { Oval } from "react-loader-spinner";
import ListDogImages from "../src/components/ListImages";

const Home = () => {
  const [mainImage, setMainImage] = useState("");
  const [linkedImage, setLinkedImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDog = async () => {
    setIsLoading(true);
    try {
      const promiseArray = [DogAPI.getDogImage(), DogAPI.getDogImage(10)];
      const response = await Promise.all(promiseArray);
      setMainImage(response[0].message);
      setLinkedImage(response[1].message);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
              <DogImage src={mainImage} />
            </div>
            <ListDogImages images={linkedImage} />
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
