import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article >
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">Votre nom</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Votre E-mail</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block">
                                Valider
                            </button>
                        </form>
                    </article>
                </section>

            </main>
        </Layout>
    )
}

export default contact
