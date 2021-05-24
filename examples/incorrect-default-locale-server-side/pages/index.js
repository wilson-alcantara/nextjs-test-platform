import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  // router.defaultLocale returns "ar" which is correct.
  return <div>default locale: {router.defaultLocale}</div>;
};

export const getServerSideProps = async (context) => {
  // context.defaultLocale returns "en" which is incorrect.
  return {
    props: {},
  };
};

export default Home;
