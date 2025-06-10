import AppHero from "../../Components/AppDevelopment/appHero";
import AppAbout from "../../Components/AppDevelopment/appAbout";
import AppWhyChoose from "../../Components/AppDevelopment/appWhyChoose";
import AppPortfolio from "../../Components/AppDevelopment/appPortfolio";
import AppServices from "../../Components/AppDevelopment/appServices";
import AppPricing from "../../Components/AppDevelopment/appPricing";
import Projectform from "../../Components/Projects/Projectform";

const AppDev =()=>{
return(
    <>
    <AppHero />
    <AppAbout />
    <AppWhyChoose />
    <AppPortfolio />
    <AppServices />
    <AppPricing />
    <Projectform />
    </>
)
}
export default AppDev;