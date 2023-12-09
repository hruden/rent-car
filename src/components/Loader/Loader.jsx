import { ImgLoader, LoaderContainer } from "./Loader.styled";
import LoaderImg from "../../assets/images/Car-Animation-V2.gif";




export default function Loader() {
    return (
        <LoaderContainer>
        <ImgLoader src={LoaderImg} alt="Loading....." />
      </LoaderContainer>
    )
}