import { Link } from "react-router-dom"

const TermsCondition: React.FC = () => {
    return (
        <div>
            <div className="bottom-0 start-0 w-100 bg-danger text-white text-start py-2 px-5">
                <strong>Terms and Condition</strong>
            </div>
            <div className="container">
                
                <p className="pt-4">
                    Welcome to The Griffin Original.

                    <div className="py-4">
                        By accessing our website or purchasing our products, you agree to comply with the following terms and conditions:
                    </div>
                    <div className="pb-0"><b>1. Use of Website</b></div>
                    <ul className="p-3">
                        <li>Content is for general information only and may be updated without notice.</li>
                        <li>Unauthorized use of content or materials is prohibited.</li>
                    </ul>

                    <div className="pb-0"><b>2. Orders & Payments</b></div>
                    <ul className="p-3">
                        <li>All orders are subject to availability and acceptance.</li>
                        <li>APrices are listed in INR and may change without prior notice.</li>
                        <li>APayments are secure via our authorized payment partners.</li>
                    </ul>

                    <div className="pb-0"><b>3. Shipping & Returns</b></div>
                    <ul className="p-3">
                        <li>Shipping timelines and return policies are detailed on our Shipping & Returns page.</li>
                        <li>Returned items must be unused and in original packaging.</li>
                    </ul>

                    <div className="pb-0"><b>4. Intellectual Property</b></div>
                    <ul className="p-3">
                        <li>All branding, product designs, and content are the intellectual property of The Griffin Original.</li>
                    </ul>

                    <div className="pb-0"><b>5. Limitation of Liability</b></div>
                    <ul className="p-3">
                        <li>We are not liable for any direct or indirect damages arising from the use of our products or website.</li>
                    </ul>

                    <div className="pb-0"><b>6. Governing Law</b></div>
                    <ul className="p-3">
                        <li>These terms are governed by the laws of India.</li>
                    </ul>

                    <div className="py-3">For questions, contact: </div>
                    <div>

                        <a href="mailto:thegriffinoriginal@gmail.com">thegriffinoriginal@gmail.com</a>
                    </div>



                    <div className="py-3"><b>4. Shipping & Returns Policy</b></div>

                    <div className="pb-0"><b>Shipping:</b></div>
                    <ul className="p-3">
                        <li>All orders are processed within 2–4 business days.</li>
                        <li>Domestic deliveries typically arrive within 5–10 business days.</li>
                        <li>Tracking details will be shared via email/SMS.</li>
                    </ul>

                    <div className="pb-1"><b>Returns:</b></div>
                    <ul className="p-3">
                        <li>Returns are accepted within 7 days of delivery.</li>
                        <li>Products must be unused and returned with original packaging.</li>
                        <li>Refunds are processed within 7 working days after inspection.</li>
                    </ul>

                    <div className="py-3"><b>Non-returnable items:</b></div>
                    <ul className="p-3">
                        <li>Custom or made-to-order products.</li>
                        <li>Opened perfumes or personal care items.</li>
                    </ul>

                    To initiate a return, email us at: thegriffinoriginal@gmail.com
                </p>
            </div>
        </div>
    )
}

export default TermsCondition