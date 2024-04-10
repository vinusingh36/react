import BoxComp from "./Box/BoxComp";
import ChakraAlertDialog from "./ChakraUI/AlertDialog";

import FlexComp from "./ChakraUI/FlexComp";
import ModalComp from "./ChakraUI/ModalComp";
import ResponsiveComp from "./ChakraUI/ResponsiveComp";
import StackComp from "./ChakraUI/StackComp";

let exampleObj = {
    a: "This",
    b: "is",
    c: "React",
    d: "App😎😎😎"
}

const Home = () => {
    return (
        <div style={{ textAlign: "center" }}>
            {/* <FlexComp /> */}
            <ResponsiveComp />
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px", fontSize: "20px" }}>
                {
                    Object.keys(exampleObj).map((idx) => {
                        return <div key={idx}>  <h3>{exampleObj[idx]} </h3></div>
                    })
                }
            </div>

        </div >
    )
}

export default Home;