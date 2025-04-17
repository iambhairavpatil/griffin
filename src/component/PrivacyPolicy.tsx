const PrivacyPolicy: React.FC = () => {
    return (

        <div>
            <div className="bottom-0 start-0 w-100 bg-danger text-white text-start py-2 px-5">
                <strong>Privacy Policy</strong>
            </div>


            <div className="container">

                <p className="p-5">
                    At The Griffin Original, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our services.

                    <div className="py-3"><b>Information We Collect:</b></div>
                    <ol className="p-0">
                    <ul  className="p-3">
                            <li>Personal details (name, email, phone, address) when you place an order or sign up.</li>
                            <li>Payment information (secured and encrypted via trusted payment gateways).</li>
                            <li>Browsing behavior through cookies to enhance your experience.</li>
                        </ul>
                    </ol>
                    <div className="py-3"><b>How We Use Your Information:</b></div>
                    <ol className="p-0">
                        <ul  className="p-3">
                            <li>To fulfill your orders and provide customer support.</li>
                            <li>To improve our products and website experience.</li>
                            <li>To send updates, promotional offers, and newsletters (only if you opt in).</li>
                        </ul>
                    </ol>
                    <div className="py-3"><b>We Do Not:</b></div>
                    <ol className="p-0">
                    <ul  className="p-3">
                            <li>Sell or rent your personal data to third parties.</li>
                            <li>Store your payment information on our servers.</li>
                        </ul>
                    </ol>
                    <div className="py-3"><b>Your Rights:</b></div>
                    <ol className="p-0">
                    <ul  className="p-3">
                            <li>Access, update, or delete your data at any time.</li>
                            <li>Opt out of marketing emails via unsubscribe links.</li>
                        </ul>
                    </ol>
                    For any concerns, contact us at: thegriffinoriginal@gmail.com
                </p>

            </div>
        </div>
    )
}

export default PrivacyPolicy