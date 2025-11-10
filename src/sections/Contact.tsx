import SendMailForm from '@/components/SendMailForm';
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
    return (
        <section id="Contacto" className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:mt-50 mt-70'>
            <div className='text-center mb-12 sm:mb-16'>
                <h2 className='text-6xl sm:text-4xl md:text-6xl font-bold mb-4 text-green-600'>
                    Contáctame
                </h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <SendMailForm />

                <div className='flex flex-col gap-6'>
                    <div className='p-6 flex flex-col items-center justify-center border-3 border-green-950 rounded-2xl bg-[#00120c] text-center gap-3'>
                        <div className='rounded-full bg-green-950 p-3 flex items-center justify-center'>
                            <Mail className='w-8 h-8 text-green-500' />
                        </div>
                        <p className='text-xl font-semibold text-gray-100'>Email</p>
                        <span className='text-stone-400 text-xl'>
                            abel04.mata@gmail.com
                        </span>
                    </div>

                    <div className='p-6 flex flex-col items-center justify-center border-3 border-green-950 rounded-2xl bg-[#00120c] text-center gap-3'>
                        <div className='rounded-full bg-green-950 p-3 flex items-center justify-center'>
                            <Phone className='w-8 h-8 text-green-500' />
                        </div>
                        <p className='text-xl font-semibold text-gray-100'>Teléfono</p>
                        <span className='text-stone-400 text-xl'>+53 56870848</span>
                    </div>

                    <div className='p-6 flex flex-col items-center justify-center border-3 border-green-950 rounded-2xl bg-[#00120c] text-center gap-3'>
                        <div className='rounded-full bg-green-950 p-3 flex items-center justify-center'>
                            <MapPin className='w-8 h-8 text-green-500' />
                        </div>
                        <p className='text-xl font-semibold text-gray-100'>Ubicación</p>
                        <span className='text-stone-400 text-xl'>
                            La Habana, Cuba
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;