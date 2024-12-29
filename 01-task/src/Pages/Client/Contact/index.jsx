import "../Contact/index.css"
import { Helmet} from 'react-helmet-async';

const Contact = () => {
  return (
    <>
    <Helmet>
      <title> Contact</title>
    </Helmet>
    <div className="section_10">
    <div className="responsive-container-block container">
      <form id="iox4">
        <div className="responsive-container-block form-container">
          <div
            className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 first-name"
            id="i10mt-5"
          >
            <p className="text-blk input-title">Full Name</p>
            <input
              className="input"
              id="ijowk-5"
              name="FirstName"
              placeholder="First Name"
            />
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <p className="text-blk input-title">Email Address</p>
            <input
              className="input"
              id="ipmgh-5"
              name="Email"
              placeholder="Email"
            />
          </div>
          <div
            className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
            id="i634i-5"
          >
            <p className="text-blk input-title">Message</p>
            <textarea
              className="textinput"
              id="i5vyy-5"
              placeholder="Write a message..."
              defaultValue={""}
            />
          </div>
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
            <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-3">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
    </>
  
  

  )
}

export default Contact