import Layout from "@/components/layout/Layout"
import { projects } from "@/util/project"
import Card from "@/components/cards/featured/Card";
export default function Home() {

    return (
        <>
            <Layout  maincls="main-workspage">
                <section className="projects-area">
                    <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> All Projects <img src="/assets/images/star-2.png" alt="Star" /></h1>
                    <div className="container">
                        <div className="flex flex-column gap-3">
                                    {projects.filter((project) => project.featured).map((item, i) => (
                                        <div key={item.title} data-aos="zoom-in" style={{width: "100%"}}>
                                        <Card key={item.title} {...item}/>
                                        </div>
                                    ))}
                            <div className="flex flex-column gap-3">
                                <div className="d-flex align-items-start gap-24">
                                {projects.filter((project) => !project.featured).map((item, i) => (
                                    <div key={item.title} data-aos="zoom-in" style={{width: "100%"}}>
                                        <Card key={item.title} {...item}/>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}