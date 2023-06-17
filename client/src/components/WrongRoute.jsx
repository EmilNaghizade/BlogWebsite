import { Link } from 'react-router-dom';

import { images } from '../constants';

const WrongRoute = () => {
    return (

        <div className='flex flex-col container mx-auto text-center'>
            <img src={images.NotFound} alt="NotFoundImage" style={{ height: '500px', width: '100%' }} />
            <h3 className='mt-5 text-3xl'>Yanlış sayfa! Bu sayfaya erişim izniniz yoktur</h3>
            <p className='text-2xl mt-5'> Anasayfaya dönebilirsiniz</p>
            <Link className="mx-auto mt-5 flex items-center gap-x-2 font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white hover:border-white transition-all duration-200 px-6 py-3 rounded-lg" to='/' >Anasayfa</Link>
        </div >

    );
};

export default WrongRoute;