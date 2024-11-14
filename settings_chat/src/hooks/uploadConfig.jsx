import { useState, useEffect } from "react";
import { getConfigs, setConfigs, uploadImage } from "../services/uploadService";

export default function useUploadConfigs() {
    const [image, setImage] = useState({
        "perfil": null,
        "background": null
    });

    const [data, setData] = useState({
        "gpt_config": '',
        "name": '',
        "email": '',
        "whatsapp": '',
        "instagram": '',
        "homeSubtitle1": '',
        "homeSubtitle2": '',
        "chatSubtitle": '',
        "chatInputPlaceholder": '',
    });

    function eventImageUpload(key, value) {
        const temp_image = structuredClone(image);
        temp_image[key] = value.target.files[0];
        setImage(temp_image);
    }

    function eventInput(key, value) {
        const temp_data = structuredClone(data);
        temp_data[key] = value;
        setData(temp_data);
    }

    async function uploadConfig() {
        if (!image.perfil || !image.background) {
            alert("Por favor, selecione ambas as imagens.");
            return;
        }

        const formData = new FormData();
        formData.append('perfil', image.perfil);
        formData.append('background', image.background);

        if (await uploadImage(formData)) {
            alert("Imagems salvas!")
        }

        if (await setConfigs(data)) {
            alert("Configurações salvas!")
        }
    };

    async function downloadConfig() {
        const response = await getConfigs();
        if (response) {
            setData(response);
        }
    }

    useEffect(() => {
        downloadConfig();
    }, []);

    return { data, uploadConfig, eventInput, eventImageUpload };
}