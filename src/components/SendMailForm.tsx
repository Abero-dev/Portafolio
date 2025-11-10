
import { SendIcon } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';

function SendMailForm() {
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
            className='bg-[#00120c] border-3 border-green-950 rounded-2xl p-8 space-y-6'
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="700"
            data-aos-once="false"
        >
            <div className='grid sm:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                    <label htmlFor='name' className='text-xl text-gray-200 font-bold'>
                        Nombre
                    </label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Tu nombre'
                        required
                        className='w-full bg-[#000805] border-2 border-green-900 hover:border-green-400 rounded-lg p-3 text-xl text-stone-100 placeholder:text-xl placeholder:text-stone-400 focus:ring-1 focus:ring-green-500 focus:outline-none transition-all duration-300'
                    />
                </div>
                <div className='space-y-4'>
                    <label
                        htmlFor='email'
                        className='text-xl text-gray-200 font-bold'
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='tu@email.com'
                        required
                        className='w-full bg-[#000805] border-2 border-green-900 hover:border-green-400 rounded-lg p-3 text-xl text-stone-100 placeholder:text-xl placeholder:text-stone-400 focus:ring-1 focus:ring-green-500 focus:outline-none transition-all duration-300'
                    />
                </div>
            </div>

            <div className='space-y-2'>
                <label
                    htmlFor='message'
                    className='text-xl text-gray-200 font-bold'
                >
                    Mensaje
                </label>
                <textarea
                    id='message'
                    name='message'
                    placeholder='Cuéntame sobre tu proyecto...'
                    rows={6}
                    required
                    className='w-full bg-[#000805] border-2 border-green-900 hover:border-green-400 rounded-lg p-3 text-xl text-stone-100 placeholder:text-xl placeholder:text-stone-400 focus:ring-1 focus:ring-green-500 focus:outline-none resize-none transition-all duration-300'
                ></textarea>
            </div>

            <button
                type='submit'
                disabled={status === 'sending'}
                className='w-full bg-green-600 hover:bg-green-800 text-2xl text-white py-4 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 drop-shadow-lg drop-shadow-green-900 group'
            >
                {status === 'sending' ? (
                    'Enviando...'
                ) : (
                    <>
                        <SendIcon className='w-8 h-8' /> Enviar Mensaje
                    </>
                )}
            </button>

            {status === 'sent' && (
                <p className='text-green-600 text-2xl text-center'>
                    ✅ Mensaje enviado correctamente.
                </p>
            )}
            {status === 'error' && (
                <p className='text-red-600 text-2xl text-center'>
                    ❌ Error al enviar el mensaje.
                </p>
            )}
        </form>
    );
};

export default SendMailForm