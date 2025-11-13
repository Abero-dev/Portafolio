import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';
import { useLanguageStore } from '@/store/languageStore';
import { SendIcon } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';

function SendMailForm() {

    const isSmallScreen = useIsSmallScreen();
    const { t } = useLanguageStore();

    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
        'idle'
    );

    useEffect(() => {
        if (status === 'sent' || status === 'error') {
            const timeout = setTimeout(() => {
                setStatus('idle');
            }, 4000);

            return () => clearTimeout(timeout);
        }
    }, [status]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        const form = e.currentTarget;

        try {
            const response = await fetch('https://formspree.io/f/mldarvlb', {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setStatus('sent');
                form.reset();
            } else {
                throw new Error('Error al enviar');
            }
        } catch (error) {
            setStatus('error');
            throw error;
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='bg-[#001a13] border-2 border-green-800 rounded-2xl p-4 space-y-4 hover:border-green-600 transition-colors duration-300'
            data-aos={isSmallScreen ? "fade-up" : "fade-right"}
            data-aos-duration="500"
            data-aos-delay="700"
            data-aos-once="true"
        >
            <div className='grid sm:grid-cols-2 gap-6'>
                <div className='space-y-1'>
                    <label
                        htmlFor='name'
                        className='text-md text-gray-100 font-bold'
                    >
                        {t("nombre")}
                    </label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder={t("tu_nombre")}
                        required
                        className='w-full bg-gray-900 border-2 border-green-700 hover:border-green-500 focus:border-green-400 rounded-lg p-2 text-md text-gray-100 placeholder:text-md placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300'
                    />
                    <span className='text-gray-400'>{t("tu_nombre")}</span>
                </div>
                <div className='space-y-1'>
                    <label
                        htmlFor='email'
                        className='text-md text-gray-100 font-bold'
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder={`${t("tu_correo")}@email.com`}
                        required
                        className='w-full bg-gray-900 border-2 border-green-700 hover:border-green-500 focus:border-green-400 rounded-lg p-2 text-md text-gray-100 placeholder:text-md placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300'
                    />
                    <span className='text-gray-400'>{`${t("tu_correo")}@email.com`}</span>
                </div>
            </div>

            <div className='space-y-2'>
                <label
                    htmlFor='message'
                    className='text-md text-gray-100 font-bold'
                >
                    {t("mensaje")}
                </label>
                <textarea
                    id='message'
                    name='message'
                    placeholder={`${t("cuentame")}...`}
                    rows={6}
                    required
                    className='w-full bg-gray-900 border-2 border-green-700 hover:border-green-500 focus:border-green-400 rounded-lg p-2 text-md text-gray-100 placeholder:text-md placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none transition-all duration-300'
                ></textarea>
            </div>

            <button
                type='submit'
                disabled={status === 'sending'}
                className='w-full bg-green-500 hover:bg-green-400 hover:text-gray-900 text-lg text-white py-4 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-green-400/20 hover:scale-105'
            >
                {status === 'sending' ? (
                    `${t("enviando")}...`
                ) : (
                    <>
                        <SendIcon className='w-6 h-6' /> {t("enviar_mensaje")}
                    </>
                )}
            </button>

            {status === 'sent' && (
                <p className='text-green-400 text-xl text-center font-medium'>
                    ✅ {t("mensaje_exito")}.
                </p>
            )}
            {status === 'error' && (
                <p className='text-red-400 text-xl text-center font-medium'>
                    ❌ {t("mensaje_error")}.
                </p>
            )}
        </form>
    );
};

export default SendMailForm