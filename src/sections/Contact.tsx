import SendMailForm from '@/components/SendMailForm';
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';
import { useLanguageStore } from '@/store/languageStore';
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {

    const isSmallScreen = useIsSmallScreen();
    const { t } = useLanguageStore();

    return (
        <section id="Contacto" className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:pt-80 lg:pt-1 lg:mt-50 pt-30'>
            <div
                className='text-center mb-12 sm:mb-16 lg:mt-40'
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="true"
            >
                <h2 className='text-4xl font-bold mb-4 text-green-600'>
                    {t("contactame")}
                </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <SendMailForm />

                <div className='flex flex-col gap-2'>
                    <div>
                        <a
                            className='p-3 flex flex-col items-center justify-center border-3 border-green-950 rounded-2xl bg-[#00120c] text-center gap-3 hover:border-green-500 transition-colors duration-300'
                            data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                            data-aos-duration="500"
                            data-aos-delay={isSmallScreen ? "100" : "1200"}
                            data-aos-once="true"
                            target="_blank"
                            rel='noopener noreferrer'
                            href='mailto:abel04.mata@gmail.com'
                        >
                            <div className='rounded-full bg-green-950 p-2 flex items-center justify-center'>
                                <Mail className='w-5 h-5 text-green-500' />
                            </div>
                            <p className='text-md font-semibold text-gray-100'>Email</p>
                            <span className='text-stone-400 text-md'>
                                abel04.mata@gmail.com
                            </span>
                        </a>
                    </div>
                    <div
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "100" : "1300"}
                        data-aos-once="true">
                        <a
                            className='p-3 flex flex-col items-center justify-center border-3 border-green-950 rounded-2xl bg-[#00120c] text-center gap-3 hover:border-green-500 transition-colors duration-300'

                            target="_blank"
                            rel='noopener noreferrer'
                            href='tel:+5358963164'
                        >
                            <div className='rounded-full bg-green-950 p-2 flex items-center justify-center'>
                                <Phone className='w-5 h-5 text-green-500' />
                            </div>
                            <p className='text-md font-semibold text-gray-100'>{t("telefono")}</p>
                            <span className='text-stone-400 text-md'>+53 58963164</span>
                        </a>
                    </div>
                    <div
                        className='p-3 flex flex-col items-center justify-center border-3 border-green-950 rounded-2xl bg-[#00120c] text-center gap-3'
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "100" : "1400"}
                        data-aos-once="true"
                    >
                        <div className='rounded-full bg-green-950 p-2 flex items-center justify-center'>
                            <MapPin className='w-5 h-5 text-green-500' />
                        </div>
                        <p className='text-md font-semibold text-gray-100'>{t("ubicacion")}</p>
                        <span className='text-stone-400 text-md'>
                            {t("la_habana")}, Cuba
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;