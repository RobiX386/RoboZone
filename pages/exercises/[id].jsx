import "@typeform/embed/build/css/widget.css";
import { Widget } from "@typeform/embed-react";
import { useRouter } from 'next/router';

export default function ExId() {
    const router = useRouter()
    const MyComponent = () => {
        return <Widget id={router.query.id} className="my-form py-20 h-[50rem] border-2 border-blue-500 bg-white rounded-xl max-w-5xl w-[250rem]" />;
    };
    return (
        <>
            <MyComponent />
        </>
    )
}