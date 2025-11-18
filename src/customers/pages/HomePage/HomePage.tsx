import MainCarousel from "@/customers/components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "@/customers/components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_Kurta } from "@/customers/data/mens_Kurta";

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 ">
                <HomeSectionCarousel data = {mens_Kurta} sectionName="Mens Kurta" />
                <HomeSectionCarousel data = {mens_Kurta} sectionName="womens Kurta"/>
                <HomeSectionCarousel data = {mens_Kurta} sectionName="Best Seller"/>
                <HomeSectionCarousel data = {mens_Kurta} sectionName="Baby section"/>
                <HomeSectionCarousel data = {mens_Kurta} sectionName="old generation"/>
            </div>
        </div>
    )
}
export default HomePage;