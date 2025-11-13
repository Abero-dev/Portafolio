import SendMailForm from '@/components/SendMailForm';
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';
import { useLanguageStore } from '@/store/languageStore';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

function Contact() {

    const isSmallScreen = useIsSmallScreen();
    const { t } = useLanguageStore();

    return (
        <section id="Contacto" className='min-h-screen px-4 sm:px-6 lg:px-34 py-4 md:pt-80 lg:pt-1 pt-30 bg-gradient-to-b from-[#00120c] to-gray-950'>
            <div
                className='text-center mb-12 sm:mb-16 lg:mt-40'
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="true"
            >
                <h2 className='text-4xl font-bold mb-4 text-green-400'>
                    {t("contactame")}
                </h2>
            </div>

            <div className='flex flex-col lg:grid lg:grid-cols-2 gap-5'>
                <div className='order-1 lg:order-none'>
                    <SendMailForm />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 order-2 lg:order-none'>
                    {/* Email */}
                    <div
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "100" : "1200"}
                        data-aos-once="true"
                    >
                        <a
                            className='p-3 flex flex-col items-center justify-center border-2 border-green-800 rounded-2xl bg-[#001a13] text-center gap-3 hover:border-green-400 hover:bg-[#002a1a] hover:shadow-green-500/20 hover:shadow-lg transition-all duration-300 h-full group'
                            target="_blank"
                            rel='noopener noreferrer'
                            href='mailto:abel04.mata@gmail.com'
                        >
                            <div className='rounded-full bg-green-800 p-2 flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300'>
                                <Mail className='w-5 h-5 text-green-300 group-hover:text-green-200 transition-colors duration-300' />
                            </div>
                            <p className='text-md font-semibold text-gray-100 group-hover:text-white transition-colors duration-300'>Email</p>
                            <span className='text-gray-300 text-sm lg:text-xs xl:text-sm group-hover:text-gray-200 transition-colors duration-300'>
                                abel04.mata@gmail.com
                            </span>
                        </a>
                    </div>

                    {/* Teléfono */}
                    <div
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "200" : "1300"}
                        data-aos-once="true"
                    >
                        <a
                            className='p-3 flex flex-col items-center justify-center border-2 border-green-800 rounded-2xl bg-[#001a13] text-center gap-3 hover:border-green-400 hover:bg-[#002a1a] hover:shadow-green-500/20 hover:shadow-lg transition-all duration-300 h-full group'
                            target="_blank"
                            rel='noopener noreferrer'
                            href='tel:+5358963164'
                        >
                            <div className='rounded-full bg-green-800 p-2 flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300'>
                                <Phone className='w-5 h-5 text-green-300 group-hover:text-green-200 transition-colors duration-300' />
                            </div>
                            <p className='text-md font-semibold text-gray-100 group-hover:text-white transition-colors duration-300'>{t("telefono")}</p>
                            <span className='text-gray-300 text-sm lg:text-xs xl:text-sm group-hover:text-gray-200 transition-colors duration-300'>+53 58963164</span>
                        </a>
                    </div>

                    {/* GitHub */}
                    <div
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "300" : "1400"}
                        data-aos-once="true"
                    >
                        <a
                            className='p-3 flex flex-col items-center justify-center border-2 border-green-800 rounded-2xl bg-[#001a13] text-center gap-3 hover:border-green-400 hover:bg-[#002a1a] hover:shadow-green-500/20 hover:shadow-lg transition-all duration-300 h-full group'
                            target="_blank"
                            rel='noopener noreferrer'
                            href='https://github.com/Abero-Dev'
                        >
                            <div className='rounded-full bg-green-800 p-2 flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300'>
                                <Github className='w-5 h-5 text-green-300 group-hover:text-green-200 transition-colors duration-300' />
                            </div>
                            <p className='text-md font-semibold text-gray-100 group-hover:text-white transition-colors duration-300'>GitHub</p>
                            <span className='text-gray-300 text-sm lg:text-xs xl:text-sm group-hover:text-gray-200 transition-colors duration-300'>
                                @Abero-Dev
                            </span>
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div
                        data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                        data-aos-duration="500"
                        data-aos-delay={isSmallScreen ? "400" : "1500"}
                        data-aos-once="true"
                    >
                        <a
                            className='p-3 flex flex-col items-center justify-center border-2 border-green-800 rounded-2xl bg-[#001a13] text-center gap-3 hover:border-green-400 hover:bg-[#002a1a] hover:shadow-green-500/20 hover:shadow-lg transition-all duration-300 h-full group'
                            target="_blank"
                            rel='noopener noreferrer'
                            href='https://www.linkedin.com/in/abel-robaina-89a918360/'
                        >
                            <div className='rounded-full bg-green-800 p-2 flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300'>
                                <Linkedin className='w-5 h-5 text-green-300 group-hover:text-green-200 transition-colors duration-300' />
                            </div>
                            <p className='text-md font-semibold text-gray-100 group-hover:text-white transition-colors duration-300'>LinkedIn</p>
                            <span className='text-gray-300 text-sm lg:text-xs xl:text-sm group-hover:text-gray-200 transition-colors duration-300'>
                                Abero
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;