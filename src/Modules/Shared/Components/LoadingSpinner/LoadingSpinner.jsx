import { ColorRing } from "react-loader-spinner";

export default function LoadingSpinner() {
return <>
<ColorRing
visible={true}
height="35"
width="100%"
ariaLabel="color-ring-loading"
wrapperStyle={{}}
wrapperClass="color-ring-wrapper"
colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
</>

}
