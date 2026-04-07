// import { useState } from "react";
// import "./contact.scss";

// const socialLinks = [
//   { label: "GitHub", href: "#", icon: "GH" },
//   { label: "LinkedIn", href: "#", icon: "IN" },
//   { label: "Twitter", href: "#", icon: "TW" },
// ];

// const contactInfo = [
//   { label: "Email", value: "hello@studio.uz", icon: "✉" },
//   { label: "Phone", value: "+998 90 123 45 67", icon: "☎" },
//   { label: "Location", value: "Tashkent, Uzbekistan", icon: "◎" },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
//   const [sent, setSent] = useState(false);
//   const [focused, setFocused] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSent(true); }, 1400);
//   };

//   return (
//     <div className="contact-root">
//       <span className="contact-bg__blob contact-bg__blob--1" aria-hidden />
//       <span className="contact-bg__blob contact-bg__blob--2" aria-hidden />
//       <span className="contact-bg__dots" aria-hidden />

//       <div className="contact-container container">

//         <header className="contact-header">
//           <span className="contact-header__tag">
//             <span className="contact-header__tag-dot" />
//             Get in touch
//           </span>
//           <h1 className="contact-header__title">
//             Let's <em>talk.</em>
//           </h1>
//           <p className="contact-header__sub">
//             Have a project in mind? We'd love to hear about it.
//           </p>
//         </header>

//         <div className="contact-grid">
//           <aside className="contact-info">
//             <div className="contact-info__card">
//               <p className="contact-info__eyebrow">Contact details</p>
//               <ul className="contact-info__list">
//                 {contactInfo.map((item) => (
//                   <li key={item.label} className="contact-info__item">
//                     <span className="contact-info__icon">{item.icon}</span>
//                     <div>
//                       <span className="contact-info__label">{item.label}</span>
//                       <span className="contact-info__value">{item.value}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="contact-info__divider" />

//               <div className="contact-info__social">
//                 <span className="contact-info__social-label">Follow us</span>
//                 <div className="contact-info__social-links">
//                   {socialLinks.map((s) => (
//                     <a key={s.label} href={s.href} className="contact-info__social-link" aria-label={s.label}>
//                       {s.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <div className="contact-info__hours">
//                 <span className="contact-info__hours-dot" />
//                 Available Mon – Fri, 9:00 – 18:00 UZT
//               </div>
//             </div>
//           </aside>

//           <main className="contact-form-wrap">
//             {sent ? (
//               <div className="contact-success">
//                 <div className="contact-success__icon">✓</div>
//                 <h3>Message sent!</h3>
//                 <p>We'll get back to you within 24 hours.</p>
//                 <button
//                   className="contact-success__btn"
//                   onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
//                 >
//                   Send another
//                 </button>
//               </div>
//             ) : (
//               <form className="contact-form" onSubmit={handleSubmit} noValidate>
//                 <div className="contact-form__row">
//                   <div className={`contact-form__group ${focused === "name" || form.name ? "is-active" : ""}`}>
//                     <label className="contact-form__label" htmlFor="name">Full name</label>
//                     <input id="name" name="name" type="text" required className="contact-form__input"
//                       value={form.name} onChange={handleChange}
//                       onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
//                   </div>
//                   <div className={`contact-form__group ${focused === "email" || form.email ? "is-active" : ""}`}>
//                     <label className="contact-form__label" htmlFor="email">Email address</label>
//                     <input id="email" name="email" type="email" required className="contact-form__input"
//                       value={form.email} onChange={handleChange}
//                       onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
//                   </div>
//                 </div>

//                 <div className={`contact-form__group ${focused === "subject" || form.subject ? "is-active" : ""}`}>
//                   <label className="contact-form__label" htmlFor="subject">Subject</label>
//                   <input id="subject" name="subject" type="text" required className="contact-form__input"
//                     value={form.subject} onChange={handleChange}
//                     onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
//                 </div>

//                 <div className={`contact-form__group contact-form__group--textarea ${focused === "message" || form.message ? "is-active" : ""}`}>
//                   <label className="contact-form__label" htmlFor="message">Message</label>
//                   <textarea id="message" name="message" rows={5} required
//                     className="contact-form__input contact-form__input--textarea"
//                     value={form.message} onChange={handleChange}
//                     onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
//                 </div>

//                 <button type="submit" className={`contact-form__submit ${loading ? "is-loading" : ""}`} disabled={loading}>
//                   {loading
//                     ? <span className="contact-form__spinner" />
//                     : <><span>Send message</span><span className="contact-form__arrow">→</span></>}
//                 </button>
//               </form>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./contact.scss"

const socialLinks = [
  { label: "GitHub", href: "#", icon: <FaGithub /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
  { label: "Twitter", href: "#", icon: <FaTwitter /> },
];

const phones = [
  "+998 71 202 46 62",
  "+998 71 202 46 63",
  "+998 71 203 20 30",
];

const contactInfo = [
  { label: "Email", value: "info@rtgparts.uz", icon: <FiMail /> },
  { label: "Location", value: "Узбекистан, Ташкент, ул.Глинка, 14/1", icon: <FiMapPin /> },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <div className="contact-root">
      <span className="contact-bg__blob contact-bg__blob--1" aria-hidden />
      <span className="contact-bg__blob contact-bg__blob--2" aria-hidden />
      <span className="contact-bg__dots" aria-hidden />

      <div className="contact-container container">

        <header className="contact-header">
          <span className="contact-header__tag">
            <span className="contact-header__tag-dot" />
            Get in touch
          </span>
          <h1 className="contact-header__title">
            Let's <em>talk.</em>
          </h1>
          <p className="contact-header__sub">
            Have a project in mind? We'd love to hear about it.
          </p>
        </header>

        <div className="contact-grid">
          <aside className="contact-info">
            <div className="contact-info__card">
              <p className="contact-info__eyebrow">Contact details</p>

              {/* Phone numbers */}
              <div className="contact-info__phones">
                <div className="contact-info__phone-header">
                  <span className="contact-info__icon"><FiPhone /></span>
                  <span className="contact-info__label">Phone</span>
                </div>
                <ul className="contact-info__phone-list">
                  {phones.map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="contact-info__phone-value">
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other contact info */}
              <ul className="contact-info__list">
                {contactInfo.map((item) => (
                  <li key={item.label} className="contact-info__item">
                    <span className="contact-info__icon">{item.icon}</span>
                    <div>
                      <span className="contact-info__label">{item.label}</span>
                      <span className="contact-info__value">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="contact-info__divider" />

              {/* <div className="contact-info__social">
                <span className="contact-info__social-label">Follow us</span>
                <div className="contact-info__social-links">
                  {socialLinks.map((s) => (
                    <a key={s.label} href={s.href} className="contact-info__social-link" aria-label={s.label}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div> */}

              <div className="contact-info__hours">
                <span className="contact-info__hours-dot" />
                Available Mon – Fri, 9:00 – 18:00 UZT
              </div>
            </div>
          </aside>

          <main className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3>Message sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button
                  className="contact-success__btn"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__row">
                  <div className={`contact-form__group ${focused === "name" || form.name ? "is-active" : ""}`}>
                    <label className="contact-form__label" htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required className="contact-form__input"
                      value={form.name} onChange={handleChange}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                  </div>
                  <div className={`contact-form__group ${focused === "email" || form.email ? "is-active" : ""}`}>
                    <label className="contact-form__label" htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" required className="contact-form__input"
                      value={form.email} onChange={handleChange}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                  </div>
                </div>

                <div className={`contact-form__group ${focused === "subject" || form.subject ? "is-active" : ""}`}>
                  <label className="contact-form__label" htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" required className="contact-form__input"
                    value={form.subject} onChange={handleChange}
                    onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
                </div>

                <div className={`contact-form__group contact-form__group--textarea ${focused === "message" || form.message ? "is-active" : ""}`}>
                  <label className="contact-form__label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required
                    className="contact-form__input contact-form__input--textarea"
                    value={form.message} onChange={handleChange}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                </div>

                <button type="submit" className={`contact-form__submit ${loading ? "is-loading" : ""}`} disabled={loading}>
                  {loading
                    ? <span className="contact-form__spinner" />
                    : <><span>Send message</span><span className="contact-form__arrow">→</span></>}
                </button>
              </form>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}