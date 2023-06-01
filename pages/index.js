import Layout from "components/Layout.js"
import LandingHero from "components/LandingHero2"
import Products from "components/Products"

export default function Pagina() {
    return (
        <Layout>
            <LandingHero
                title="Dischi in Vinile"
                description="il tuo negozio di dischi in vinile preferito"
                imageUrl="https://techprincess.it/wp-content/uploads/2021/03/ritorno-disco-in-vinile.jpg"
                opacity={0.5}
                buttonText="Guarda il video"
                buttonUrl="https://....."
                height="100"
            />
        </Layout>
    )
}