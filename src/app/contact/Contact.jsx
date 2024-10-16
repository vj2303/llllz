import ContactUsForm from "./ContactUsForm"

const Contact = () => {
    return (
        <div className="mt-[100px]  px-[120px]">
            <h1 className="text-[30px] font-medium">Contact Us</h1>

            <div className="flex flex-row items-center py-[40px] ">
                <ContactUsForm />
                <div className="px-[40px]">
                    <h1 className="font-medium text-[30px]">Get in Touch</h1>


                    <div className="flex flex-row gap-[60px] ">

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[14px] text-[#697488] leading-[27px]">WhatsApp</p>
                            <h1 className="text-[18px]">7738182493</h1>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[14px] text-[#697488] leading-[27px]">Need support?</p>
                            <h1 className="text-[18px]"> info@luzo.app</h1>
                            <p className="text-[18px]">founders@luzo.app</p>
                        </div>
                        <div className="flex flex-col gap-[10px] items-center">
                            <p className="text-[14px] text-[#697488] ">Follow us on social media</p>
                            <h1 className="text-[18px]">7738182493</h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact