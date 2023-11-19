"use client"

import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const serviceId = 'service_l8884vh';
    const templateId = 'template_igrw7mg';
    const publicKey = 'nvaDyrzZ-1b--8sls'; // Replace with your EmailJS public key

    const schema = object({
        name: string().required('Please Enter Your Name'),
        email: string().email('Enter a Valid Email').required('Enter a Valid Email'),
        subject: string().required('Enter Subject'),
        message: string().required('Write us a Message'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const sendEmail = (data) => {
        const { name, email, subject, message } = data;
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Oyugis East SDA Church',
            subject: subject,
            message: message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                reset();
            })
            .catch((error) => {
                console.log('Error sending message', error);
            });
    };

    return (
        <>
            <h3 className="py-6 capitalize text-lg underline text-tertiary lg:text-xl lg:py-8">
                Send us a message
            </h3>
            <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-1">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className="bg-gray-50 p-4 focus:outline-none focus:bg-transparent focus:border focus:border-gray-50"
                        {...register('name')}
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="bg-gray-50 p-4 focus:outline-none focus:bg-transparent focus:border focus:border-gray-50"
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="bg-gray-50 p-4 focus:outline-none focus:bg-transparent focus:border focus:border-gray-50"
                        {...register('subject')}
                    />
                    {errors.subject && (
                        <p className="text-red-500">{errors.subject?.message}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <textarea
                        cols="30"
                        rows="6"
                        name="message"
                        placeholder="Message"
                        className="bg-gray-50 p-4 focus:outline-none focus:bg-transparent focus:border focus:border-gray-50"
                        {...register('message')}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500">{errors.message?.message}</p>
                    )}
                </div>
                <div className="flex justify-center md:items-start md:justify-start">
                    <button
                        type="submit"
                        className='bg-gradient-to-r from-primary to-darkBlue 
                px-6 py-2 rounded-full text-white hover:text-tertiary 
                hover:scale-105 hover:ease-in-out hover:duration-200'
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;

