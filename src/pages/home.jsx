import { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai"
import useDrivePicker from "react-google-drive-picker"

const Home = () => {
    const [result, setResult] = useState([]);
    const [openPicker, data, authResponse] = useDrivePicker();
    const handleOpenPicker = () => {
        openPicker({
            clientId: "681441447649-4jhj6bofutjt6e4irv42sn2u1kvmgopk.apps.googleusercontent.com",
            developerKey: "AIzaSyByrWUJyG6cMW79-KYx2VEDP6pfxAKsytA",
            viewId: "DOCS",
            token: "ya29.a0AfB_byCKRYz_15isPQALnay3qN1HqNd3zLgJYLJ1Y7Owr154XAgXkHyGYwwDDtLw1QMRJCSt6R2jyYp9VQTIBGR2HF5vUdqBg4xFulqxQ-iMcUv2yj3Dx3AkBHW8p-UCDGS5_dYUapv18MiL4Lw8rCF0MtvWSGwuohEEaCgYKAagSARMSFQGOcNnCzLWzKi8IBW_CDACzrNgWnQ0171",
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            callbackFunction: (data) => {
                if (data.docs) {
                    setResult(data.docs);
                    console.log(data.docs);
                }
                if (data.action === 'cancel') {
                    console.log('User clicked cancel/close button')
                }
                console.log(data)
            },
        })
    }

    useEffect(() => {
        if (data) {
console.log(data);
        }
    }, [data])
    return (
        <div>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <button className="bg-green-500 text-white p-2 rounded-md"
                    onClick={() => handleOpenPicker()}>open picker
                </button>

                <div className="w-[50%] mx-auto mt-8">
                    {result.length > 0 && (
                        result.map(r => (
                            <a href={`https://drive.google.com/uc?export=download&id=${r.id}`} key={r.id} className="bg-gray-300 font-semibold rounded-md p-2 flex items-center justify-between gap-x-2 m-2">
                                <h1>{r.name}</h1>
                                <AiOutlineArrowDown size={16} />
                            </a>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home