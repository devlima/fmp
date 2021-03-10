import { useRouter } from 'next/router';
import  React, { useEffect } from 'react';
import Loading from 'components/Loading';

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/home`);
  }, []);
  return <Loading/>;
  
}

export default Page;